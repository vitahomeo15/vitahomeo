import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { doctors as fallbackDoctors, Doctor } from "@/data/doctorsData";

/**
 * Maps a Supabase doctor row to the frontend Doctor interface.
 */
function mapSupabaseDoctor(d: any): Doctor {
  const location = [d.city, d.state].filter(Boolean).join(", ") || d.location || "India";
  const experienceStr = d.experience
    ? `${d.experience}${d.experience === 1 ? " Year" : "+ Years"} Experience`
    : undefined;

  return {
    slug: d.slug,
    name: d.full_name || d.name,
    degree: d.qualification || d.degree,
    experience: experienceStr || d.experience,
    specialty: d.specialty || d.designation || "Homeopathic Specialist",
    location: location,
    bio: d.bio,
    fee: d.consultation_fees ? String(d.consultation_fees) : d.fee || "999",
    days: d.days || "Mon – Sat",
    timing: d.timing || d.submitted_availability_hours || "06:00 PM – 10:00 PM",
    image: d.profile_photo_url || d.image || "/doc-photos/dr-arun-kumar.jpeg",
    expertise: Array.isArray(d.expertise) && d.expertise.length > 0 ? d.expertise : [],
    city: d.city,
    state: d.state,
    clinic_address: d.clinic_address || undefined,
    locality: d.locality || undefined,
    pin_code: d.pin_code || undefined,
    google_maps_url: d.google_maps_url || undefined,
    registration_number: d.registration_number,
    registration_authority: d.registration_authority,
    verification_status: d.verification_status,
    consultation_type: d.consultation_type,
    submitted_availability_hours: d.submitted_availability_hours,
    selected_consultation_period: d.selected_consultation_period,
  };
}

/**
 * Fetch all published doctors from Supabase public_doctor_profiles view,
 * with graceful fallback to local data if Supabase is unreachable.
 */
export async function getDoctors(): Promise<Doctor[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("public_doctor_profiles")
      .select("*")
      .order("created_at", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) console.warn("[getDoctors] Supabase query notice:", error.message);
      return fallbackDoctors;
    }

    return data.map(mapSupabaseDoctor);
  } catch (err) {
    console.warn("[getDoctors] Fallback to local doctors data:", err);
    return fallbackDoctors;
  }
}

/**
 * Fetch a single doctor by slug from Supabase,
 * with graceful fallback to local data.
 */
export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from("doctors")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error || !data) {
      const fallback = fallbackDoctors.find((d) => d.slug === slug);
      return fallback || null;
    }

    return mapSupabaseDoctor(data);
  } catch (err) {
    const fallback = fallbackDoctors.find((d) => d.slug === slug);
    return fallback || null;
  }
}

/**
 * Fetch complete doctor details including credentials, specializations, and faqs.
 */
export async function getDoctorFullProfile(slug: string) {
  try {
    const doctor = await getDoctorBySlug(slug);
    if (!doctor) return null;

    // Fetch relational data from Supabase
    const { data: rawDoc } = await supabaseAdmin
      .from("doctors")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (!rawDoc) {
      return { doctor, credentials: [], specializations: [], faqs: [] };
    }

    const [credsRes, specsRes, faqsRes] = await Promise.all([
      supabaseAdmin
        .from("doctor_credentials")
        .select("*")
        .eq("doctor_id", rawDoc.id)
        .order("display_order", { ascending: true }),
      supabaseAdmin
        .from("doctor_specializations")
        .select("*")
        .eq("doctor_id", rawDoc.id)
        .order("display_order", { ascending: true }),
      supabaseAdmin
        .from("doctor_faqs")
        .select("*")
        .eq("doctor_id", rawDoc.id)
        .order("display_order", { ascending: true }),
    ]);

    return {
      doctor,
      credentials: credsRes.data || [],
      specializations: specsRes.data || [],
      faqs: faqsRes.data || [],
    };
  } catch (err) {
    const doctor = await getDoctorBySlug(slug);
    return { doctor, credentials: [], specializations: [], faqs: [] };
  }
}
