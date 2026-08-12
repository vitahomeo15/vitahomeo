import React from "react";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import AdminLoginGate from "../../AdminLoginGate";
import DoctorReviewPanel from "./DoctorReviewPanel";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Stethoscope } from "lucide-react";

export const dynamic = "force-dynamic";

interface ReviewPageParams {
  params: Promise<{ id: string }>;
}

export default async function ReviewPage({ params }: ReviewPageParams) {
  // 1. Password Passcode Gate Verification on Server
  const cookieStore = await cookies();
  const token = cookieStore.get("vitahomeo_admin_token")?.value;
  const expectedPasscode = process.env.ADMIN_PASSCODE || "admin123";
  const isAuthorized = token === expectedPasscode;

  if (!isAuthorized) {
    return <AdminLoginGate />;
  }

  // 2. Resolve Parameters and fetch record
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let doctorData: any = null;
  try {
    const { data, error } = await supabaseAdmin
      .from("doctors")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      throw new Error("Doctor application record not found.");
    }
    doctorData = data;
  } catch (err) {
    console.error("Unable to load application details", err);
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          {/* Back button */}
          <div className="mb-6">
            <Link 
              href="/admin" 
              className="inline-flex items-center gap-1 text-xs font-bold text-muted-text hover:text-brand transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
            </Link>
          </div>

          {/* Quick Info Bar */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black text-brand uppercase tracking-wider block">Reviewing Application</span>
              <h1 className="text-2xl font-black text-ink dark:text-white mt-1 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-brand" /> {doctorData.full_name}
              </h1>
              <p className="text-xs text-body-text dark:text-[#aebba8] mt-1 font-semibold">
                {doctorData.qualification} • {doctorData.city}, {doctorData.state}
              </p>
            </div>
            
            {/* Split status markers */}
            <div className="flex flex-wrap gap-2.5">
              <div className="text-left bg-bg-soft dark:bg-[#162315] border border-line-custom/50 px-3.5 py-1.5 rounded-xl">
                <span className="text-[9px] font-black text-muted-text uppercase tracking-wider block">Verification</span>
                <span className="text-xs font-extrabold text-ink dark:text-white mt-0.5 block uppercase tracking-wide">
                  {doctorData.verification_status.replace("_", " ")}
                </span>
              </div>
              <div className="text-left bg-bg-soft dark:bg-[#162315] border border-line-custom/50 px-3.5 py-1.5 rounded-xl">
                <span className="text-[9px] font-black text-muted-text uppercase tracking-wider block">Profile Status</span>
                <span className="text-xs font-extrabold text-ink dark:text-white mt-0.5 block uppercase tracking-wide">
                  {doctorData.profile_status.replace("_", " ")}
                </span>
              </div>
            </div>
          </div>

          {/* DoctorReviewPanel Client Actions wrapper */}
          <DoctorReviewPanel doctor={doctorData} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
