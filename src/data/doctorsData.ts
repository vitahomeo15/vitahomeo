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
  experience: string;     // e.g. "19 Years Experience"
  specialty: string;      // e.g. "Homeopathic Specialist"
  location: string;       // e.g. "Hajipur, Bihar"
  bio: string;            // Short paragraph about the doctor
  fee: string;            // Consultation fee in INR (number as string). e.g. "499"
  days: string;           // Available days. e.g. "Mon - Sat"
  timing: string;         // Available hours. e.g. "6:00 PM - 10:00 PM"
  image: string;          // Path to photo in /public. e.g. "/doc-photos/dr-arun.jpeg"
  expertise: string[];    // List of areas of expertise
  city?: string;
  state?: string;
  clinic_address?: string;
  locality?: string;
  pin_code?: string;
  google_maps_url?: string;
}

export const doctors: Doctor[] = [
  // ──────────────────────────────────────────────
  // DOCTOR 1 — Edit or duplicate this block
  // ──────────────────────────────────────────────
  {
    slug: "dr-arun-kumar",
    name: "Dr. Arun Kumar",
    degree: "DHMS (Bihar Medical Council)",
    experience: "19 Years Experience",
    specialty: "Homeopathic Specialist",
    location: "Hajipur, Bihar",
    bio: "Dr. Arun Kumar is an experienced homeopathic practitioner with 19 years of professional experience in providing individualized homeopathic care. He specializes in constitutional prescribing for chronic skin conditions, digestive disorders, and allergic diseases.",
    fee: "499",
    days: "Mon - Sun",
    timing: "6:00 PM - 10:00 PM",
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
  },

  // ──────────────────────────────────────────────
  // ADD MORE DOCTORS BELOW THIS LINE
  // Copy the block above and fill in the details
  // ──────────────────────────────────────────────
];

/** Helper: find a doctor by slug */
export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug.toLowerCase());
}
