"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// Helper to verify if the caller has valid admin cookie credentials on the server
async function checkAdminAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("vitahomeo_admin_token")?.value;
  const expectedPasscode = process.env.ADMIN_PASSCODE || "admin123";
  return token === expectedPasscode;
}

export async function verifyAdminPasscode(passcode: string) {
  const expectedPasscode = process.env.ADMIN_PASSCODE || "admin123";
  
  if (passcode === expectedPasscode) {
    const cookieStore = await cookies();
    cookieStore.set("vitahomeo_admin_token", passcode, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return { success: true };
  }
  
  return { success: false, error: "Invalid passcode. Please try again." };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("vitahomeo_admin_token");
}

export async function updateVerificationStatus(id: string, status: string, reason?: string) {
  const isAuth = await checkAdminAuth();
  if (!isAuth) {
    return { success: false, error: "Unauthorized access. Action blocked." };
  }

  try {
    // Validate target verification status value
    const allowed = ["pending", "under_review", "verified", "rejected"];
    if (!allowed.includes(status)) {
      return { success: false, error: `Invalid verification status: '${status}'` };
    }

    const updatePayload: Record<string, any> = {
      verification_status: status,
      rejection_reason: status === "rejected" ? (reason || "No reason provided") : null
    };

    // If changing from verified to under_review or rejected, ensure the profile gets unpublished
    if (status !== "verified") {
      updatePayload.profile_status = "under_review"; // Demote status to protect visibility
    }

    const { error } = await supabaseAdmin
      .from("doctors")
      .update(updatePayload)
      .eq("id", id);

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    revalidatePath("/admin");
    revalidatePath(`/admin/review/${id}`);
    revalidatePath("/doctors");
    return { success: true };
  } catch (err: any) {
    console.error("Error updating verification status:", err);
    return { success: false, error: err.message || "Failed to update verification status." };
  }
}

export async function updateProfileStatus(id: string, status: string) {
  const isAuth = await checkAdminAuth();
  if (!isAuth) {
    return { success: false, error: "Unauthorized access. Action blocked." };
  }

  try {
    const allowed = ["draft", "submitted", "under_review", "approved", "published", "rejected"];
    if (!allowed.includes(status)) {
      return { success: false, error: `Invalid profile status: '${status}'` };
    }

    // Retrieve the doctor's current verification status first to enforce check rules
    const { data: doctor, error: fetchErr } = await supabaseAdmin
      .from("doctors")
      .select("verification_status")
      .eq("id", id)
      .single();

    if (fetchErr || !doctor) {
      throw new Error("Unable to locate doctor record for vetting rules checking.");
    }

    // ENFORCE publish rules: Cannot publish unless verified and approved!
    if (status === "published") {
      if (doctor.verification_status !== "verified") {
        return { 
          success: false, 
          error: "Action Blocked: Profile cannot be published publicly because the doctor's medical registration is not yet 'verified'." 
        };
      }
    }

    const { error } = await supabaseAdmin
      .from("doctors")
      .update({ profile_status: status })
      .eq("id", id);

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    revalidatePath("/admin");
    revalidatePath(`/admin/review/${id}`);
    revalidatePath("/doctors");
    return { success: true };
  } catch (err: any) {
    console.error("Error updating profile status:", err);
    return { success: false, error: err.message || "Failed to update profile status." };
  }
}
