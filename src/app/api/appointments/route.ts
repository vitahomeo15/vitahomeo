import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: NextRequest) {
  try {
    // 1. Read request body as text and parse as JSON
    const text = await req.text();
    let body: any;
    try {
      body = JSON.parse(text);
    } catch (parseErr) {
      return NextResponse.json(
        { status: "error", message: "Invalid request payload. Must be valid JSON." },
        { status: 400 }
      );
    }

    // Support both PascalCase and camelCase keys for compatibility
    const fullName = body.FullName || body.fullName || "";
    const phone = body.Phone || body.phone || "";
    const email = body.Email || body.email || "";
    const preferredDate = body.PreferredDate || body.preferredDate || "";
    const preferredTime = body.PreferredTime || body.preferredTime || "";
    const symptoms = body.ReasonforConsultation || body.symptoms || body.symptomsDescription || "";
    const preferredDoctor = body.PreferredDoctor || body.preferredDoctor || "Any Doctor / Specialist";

    // 2. Perform server-side validation
    if (!fullName.trim()) {
      return NextResponse.json({ status: "error", message: "Full name is required." }, { status: 400 });
    }

    const phoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
    const cleanPhone = phone.trim().replace(/[\s\-]/g, "");
    if (!phone.trim()) {
      return NextResponse.json({ status: "error", message: "Phone number is required." }, { status: 400 });
    } else if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { status: "error", message: "Enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json({ status: "error", message: "Please enter a valid email address." }, { status: 400 });
      }
    }

    if (!preferredDate.trim()) {
      return NextResponse.json({ status: "error", message: "Preferred date is required." }, { status: 400 });
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        return NextResponse.json({ status: "error", message: "Booking date cannot be in the past." }, { status: 400 });
      }
    }

    if (!preferredTime.trim()) {
      return NextResponse.json({ status: "error", message: "Preferred time is required." }, { status: 400 });
    }

    if (!symptoms.trim()) {
      return NextResponse.json({ status: "error", message: "Brief description of symptoms is required." }, { status: 400 });
    } else if (symptoms.trim().length < 10) {
      return NextResponse.json(
        { status: "error", message: "Please provide a bit more detail (at least 10 characters)." },
        { status: 400 }
      );
    }

    let databaseSuccess = false;
    let databaseErrorMsg = "";

    // 3. Attempt to save in Supabase database
    try {
      const insertData = {
        full_name: fullName.trim(),
        phone: cleanPhone,
        email: email.trim() || null,
        preferred_date: preferredDate,
        preferred_time: preferredTime.trim(),
        symptoms: symptoms.trim(),
        preferred_doctor: preferredDoctor,
        created_at: new Date().toISOString(),
      };

      console.log("[API route] Attempting database insert to appointments table:", insertData);
      
      const { error } = await supabaseAdmin
        .from("appointments")
        .insert([insertData]);

      if (error) {
        throw new Error(error.message);
      }
      databaseSuccess = true;
      console.log("[API route] Securely inserted appointment into Supabase database.");
    } catch (dbErr: any) {
      databaseErrorMsg = dbErr.message || "Unknown database error";
      console.warn(`[API route] Supabase database write failed: "${databaseErrorMsg}". Falling back to Apps Script Sheet...`);
    }

    // 4. Securely Forward to Google Apps Script Web App
    const sheetSubmitUrl = process.env.GOOGLE_SCRIPT_FORM_SUBMIT_URL;
    let sheetSuccess = false;
    let sheetErrorMsg = "";

    if (sheetSubmitUrl) {
      const forwardPayload = {
        formType: "patient",
        FullName: fullName,
        Phone: phone,
        Email: email,
        PreferredDoctor: preferredDoctor,
        PreferredDate: preferredDate,
        PreferredTime: preferredTime,
        ReasonforConsultation: symptoms,
      };

      console.log("[API route] Forwarding payload to Google Apps Script:", sheetSubmitUrl);

      try {
        const sheetResponse = await fetch(sheetSubmitUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(forwardPayload),
        });

        if (sheetResponse.ok) {
          const textResult = await sheetResponse.text();
          let jsonResult;
          try {
            jsonResult = JSON.parse(textResult);
          } catch {
            jsonResult = { status: "success", message: textResult };
          }

          if (jsonResult.status === "success" || jsonResult.result === "success") {
            sheetSuccess = true;
            console.log("[API route] Google Sheet Apps Script submission succeeded:", jsonResult.message);
          } else {
            sheetErrorMsg = jsonResult.message || "Spreadsheet returned error status.";
            console.warn(`[API route] Google Apps Script returned status error: ${sheetErrorMsg}`);
          }
        } else {
          sheetErrorMsg = `HTTP status ${sheetResponse.status}`;
          console.warn(`[API route] Google Apps Script returned HTTP error: ${sheetErrorMsg}`);
        }
      } catch (sheetErr: any) {
        sheetErrorMsg = sheetErr.message || "Network error";
        console.error("[API route] Failed to forward submission to Google Apps Script:", sheetErr);
      }
    } else {
      console.warn("[API route] GOOGLE_SCRIPT_FORM_SUBMIT_URL is not set. Skipped Google Sheet synchronization.");
    }

    // 5. Build final response logic
    if (databaseSuccess || sheetSuccess) {
      const statusMsg = databaseSuccess && sheetSuccess 
        ? "Appointment successfully saved to database and synced to Google Sheets." 
        : databaseSuccess 
          ? "Appointment successfully saved to database (Google Sheet sync pending)."
          : "Appointment successfully synced to Google Sheets (Database save pending).";

      return NextResponse.json({
        status: "success",
        message: statusMsg
      });
    }

    return NextResponse.json(
      {
        status: "error",
        message: `Appointment request processing failed. Database error: ${databaseErrorMsg || "None"}. Sheet sync error: ${sheetErrorMsg || "None"}.`
      },
      { status: 500 }
    );

  } catch (err: any) {
    console.error("[API route] Fatal handler error:", err);
    return NextResponse.json(
      { status: "error", message: `An unexpected server error occurred: ${err.message || err}` },
      { status: 500 }
    );
  }
}
