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

export async function submitDoctorOnboarding(
  formData: any,
  imageInfo: { base64: string; name: string; type: string } | null
) {
  try {
    // 1. Check duplicate email / registration number in database
    const { data: dupData, error: dupError } = await supabaseAdmin
      .from("doctors")
      .select("id, email, registration_number")
      .or(`email.eq.${formData.email.trim()},registration_number.eq.${formData.registrationNumber.trim()}`);

    if (dupError) {
      throw new Error(`Database verification check failed: ${dupError.message}`);
    }

    if (dupData && dupData.length > 0) {
      const isEmailDup = dupData.some((d) => d.email.toLowerCase() === formData.email.trim().toLowerCase());
      const isRegDup = dupData.some((d) => d.registration_number.toLowerCase() === formData.registrationNumber.trim().toLowerCase());
      
      let dupMsg = "An onboarding profile has already been submitted with these credentials. ";
      if (isEmailDup) dupMsg += "Email address is already in use. ";
      if (isRegDup) dupMsg += "Medical Registration Number is already registered. ";
      
      throw new Error(dupMsg + "To prevent duplicate profiles, this submission has been blocked.");
    }

    // 2. Upload Photo if provided
    let profilePhotoUrl = "";
    if (imageInfo && imageInfo.base64) {
      try {
        const fileExt = (imageInfo.name && imageInfo.name.includes(".")) ? imageInfo.name.split(".").pop() : "jpg";
        const fileName = `profile_${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        const buffer = Buffer.from(imageInfo.base64, "base64");

        const { error: uploadError } = await supabaseAdmin.storage
          .from("doctor-photos")
          .upload(fileName, buffer, {
            contentType: imageInfo.type || "image/jpeg",
          });

        if (uploadError) {
          console.warn(`[submitDoctorOnboarding] Supabase storage upload warning: ${uploadError.message}`);
        } else {
          const { data: { publicUrl } } = supabaseAdmin.storage
            .from("doctor-photos")
            .getPublicUrl(fileName);

          profilePhotoUrl = publicUrl;
        }
      } catch (storageErr: any) {
        console.warn(`[submitDoctorOnboarding] Storage upload exception:`, storageErr);
      }
    }

    // 3. Generate slug
    const cleanName = formData.fullName.replace(/^Dr\.\s+/i, "");
    const slug = "dr-" + cleanName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // 4. Write to doctors table
    const { error: dbError } = await supabaseAdmin
      .from("doctors")
      .insert([
        {
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          qualification: formData.qualification,
          experience: parseInt(formData.experience, 10),
          registration_number: formData.registrationNumber,
          preferred_hours: formData.preferredHours,
          preferred_days: formData.preferredDays,
          consultation_fees: parseFloat(formData.consultationFees),
          profile_photo_url: profilePhotoUrl || formData.doctorImage || null,
          slug: slug,
          profile_status: "submitted",
          verification_status: "pending",
          clinic_address: formData.clinicAddress || null,
          locality: formData.locality || null,
          city: formData.city,
          state: formData.state,
          pin_code: formData.pinCode,
          google_maps_url: formData.googleMapsUrl || null,
          expertise: formData.expertise,
          languages: formData.languages,
          consultation_type: formData.consultationType,
          bio: formData.bio,
        }
      ]);

    if (dbError) {
      throw new Error(`Onboarding database submission failed: ${dbError.message}`);
    }

    return { success: true };
  } catch (err: any) {
    console.error("Onboarding submission error:", err);
    return { success: false, error: err.message || "An unexpected error occurred during submission." };
  }
}
