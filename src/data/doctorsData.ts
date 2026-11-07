/**
 * =============================================
 * VITAHOMEO — DOCTORS DATA FILE
 * =============================================
 * Edit this file to add, update, or remove doctors.
 * After editing, redeploy (or restart dev server) for changes to appear.
 *
 * HOW TO ADD A DOCTOR:
 * 1. Copy one of the existing doctor objects below
 * 2. Fill in all the fields
 * 3. Give the doctor a unique `slug` (lowercase, hyphens only, e.g. "dr-priya-sharma")
 * 4. Place their photo in /public/doc-photos/ and set `image` to "/doc-photos/filename.jpg"
 * 5. Save this file and redeploy
 */

export interface Doctor {
  slug: string;           // Unique URL identifier. e.g. "dr-arun-kumar"
  name: string;           // Full name with title. e.g. "Dr. Arun Kumar"
  degree: string;         // Qualification. e.g. "BHMS (Bihar Medical Council)"
  experience?: string;    // e.g. "19 Years Experience" (omitted if pending verification)
  specialty: string;      // e.g. "Homeopathic Specialist"
  location: string;       // e.g. "Hajipur, Bihar"
  bio: string;            // Short paragraph about the doctor
  fee?: string;           // Consultation fee in INR (number as string). e.g. "999"
  days?: string;          // Available days. e.g. "Mon - Sat"
  timing?: string;        // Available hours. e.g. "6:00 PM - 10:00 PM"
  image: string;          // Path to photo in /public. e.g. "/doc-photos/dr-arun.jpeg"
  expertise: string[];    // List of areas of expertise
  city?: string;
  state?: string;
  clinic_address?: string;
  locality?: string;
  pin_code?: string;
  google_maps_url?: string;

  // Verification & Registration Details
  registration_number?: string;
  registration_authority?: string;
  verification_status?: "pending" | "under_review" | "verified" | "rejected";
  consultation_type?: string;
  submitted_availability_hours?: string;
  selected_consultation_period?: string;
}

export const doctors: Doctor[] = [
  // ──────────────────────────────────────────────
  // DOCTOR 1 — Dr. Arun Kumar (Verified Practitioner)
  // ──────────────────────────────────────────────
  {
    slug: "dr-arun-kumar",
    name: "Dr. Arun Kumar",
    degree: "Bachelor of Electro-Homeopathic Medicine & Surgery (B.E.M.S. / M.B.E.H.)",
    experience: "19 Years Experience (Since 2007)",
    specialty: "Homeopathic & Electro-Homeopathic Specialist",
    location: "Hajipur, Bihar",
    bio: "Dr. Arun Kumar is an experienced homeopathic practitioner with 19 years of professional experience in providing individualized homeopathic care. He specializes in constitutional prescribing for chronic skin conditions, digestive disorders, and allergic diseases.",
    fee: "999",
    days: "Mon - Sun",
    timing: "06:00 PM - 10:00 PM",
    image: "/doc-photos/dr-arun-kumar.jpeg",
    expertise: [
      "Constitutional Treatment",
      "Chronic Skin Conditions",
      "Eczema & Dermatitis",
      "Migraine & Chronic Headaches",
      "Allergic Rhinitis & Asthma",
      "Digestive & Gastrointestinal Issues",
    ],
    city: "Hajipur",
    state: "Bihar",
    registration_number: "7979",
    registration_authority: "Board of Electro Homoeopathic Medicine, Bihar, Patna",
    verification_status: "verified",
    consultation_type: "Online Video & Audio Consultation",
  },

  // ──────────────────────────────────────────────
  // DOCTOR 2 — Dr. Rachamsetty Tejaswi
  // ──────────────────────────────────────────────
  {
    slug: "dr-rachamsetty-tejaswi",
    name: "Dr. Rachamsetty Tejaswi",
    degree: "MD (Homoeopathy), BHMS, MSc (Clinical Nutrition)",
    experience: "2+ Years Clinical Experience",
    specialty: "Homeopathic Physician & Clinical Nutritionist",
    location: "Vijayawada, Andhra Pradesh",
    bio: "Clinically trained healthcare professional with MD (Hom), BHMS, and MSc in Clinical Nutrition, with 2+ years of experience in patient evaluation, medical case review, clinical documentation, and telemedicine. Experienced in managing complex clinical cases including Autism Spectrum Disorder (ASD), women's health, and pediatric care, with integrated clinical nutrition and lifestyle management for chronic conditions.",
    fee: "999",
    days: "Mon - Sat",
    timing: "Morning (9am - 12pm), Afternoon (12pm - 4pm), Evening (4pm - 8pm)",
    submitted_availability_hours: "Morning: 9:00 AM–12:00 PM; Afternoon: 12:00 PM–4:00 PM; Evening: 4:00 PM–8:00 PM",
    selected_consultation_period: "Morning (9am - 12pm), Afternoon (12pm - 4pm), Evening (4pm - 8pm)",
    image: "/doc-photos/dr-rachamsetty-tejaswi.png",
    expertise: [
      "Women's Health & Hormonal Care",
      "Pediatrics & Autism Spectrum (ASD)",
      "Clinical Nutrition & Dietetics",
      "Constitutional Homeopathy",
      "Chronic Lifestyle Disorders",
      "Telemedicine Case Review",
    ],
    city: "Vijayawada",
    state: "Andhra Pradesh",
    registration_number: "8809/H/2019",
    registration_authority: "Andhra Board for Homoeopathy",
    verification_status: "verified",
    consultation_type: "Online Video & Audio Consultation",
  },
];

/** Helper: find a doctor by slug */
export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug.toLowerCase());
}
