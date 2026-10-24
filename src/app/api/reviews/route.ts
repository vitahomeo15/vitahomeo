import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return Boolean(
    url &&
    !url.includes("your-project") &&
    key &&
    !key.includes("your-service-role-key")
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, city, rating, category, title, comment } = body;

    if (!name || !rating || !comment) {
      return NextResponse.json(
        { status: "error", message: "Name, rating, and feedback are required." },
        { status: 400 }
      );
    }

    const newReview = {
      name: name.trim(),
      city: (city || "").trim(),
      rating: Number(rating),
      category: category || "General Platform",
      title: (title || "").trim() || "Platform Experience",
      comment: comment.trim(),
      created_at: new Date().toISOString(),
      status: "approved",
    };

    // Attempt to persist in Supabase if configured with real credentials
    if (isSupabaseConfigured()) {
      try {
        await supabaseAdmin.from("reviews").insert([newReview]);
      } catch (dbErr) {
        console.warn("[Reviews API] Database insert warning:", dbErr);
      }
    }

    return NextResponse.json({
      status: "success",
      message: "Thank you! Your review has been submitted successfully.",
      review: newReview,
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message || "Failed to submit review." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabaseAdmin
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);

      if (!error && data && data.length > 0) {
        return NextResponse.json({ status: "success", reviews: data });
      }
    }
    return NextResponse.json({ status: "success", reviews: [] });
  } catch (err: any) {
    return NextResponse.json({ status: "success", reviews: [] });
  }
}

