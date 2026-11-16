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

export type PractitionerCategory = "homoeopathy" | "electro_homoeopathy" | "other";
export type PractitionerClassification = 
  | "Verified Homoeopathy Practitioner" 
  | "Verified Electro Homoeopathy Practitioner" 
  | "Other Healthcare Practitioner";

export interface Doctor {
  slug: string;           // Unique URL identifier. e.g. "dr-arun-kumar"
  name: string;           // Full name with title. e.g. "Dr. Arun Kumar"
  degree: string;         // Qualification. e.g. "MD (Homoeopathy), BHMS"
  experience?: string;    // e.g. "19 Years Experience"
  specialty: string;      // e.g. "Homeopathic Physician & Clinical Nutritionist"
  location: string;       // e.g. "Hajipur, Bihar"
  bio: string;            // Short paragraph about the doctor
  fee?: string;           // Consultation fee in INR (number as string). e.g. "999"
  days?: string;          // Available days. e.g. "Mon - Sat"
  timing?: string;        // Available hours. e.g. "6:00 PM - 10:00 PM"
  image: string;          // Path to photo in /public. e.g. "/doc-photos/dr-arun.jpeg"
  expertise: string[];    // List of areas of expertise
  
  // Location & Service Area Architecture
  practiceCity?: string;
  practiceState?: string;
  physicalClinicAvailable?: boolean;
  onlineConsultationAvailable?: boolean;
  serviceCities?: string[];
  languages?: string[];
  consultationModes?: string[];
  city?: string;
  state?: string;
  clinic_address?: string;
  locality?: string;
  pin_code?: string;
  google_maps_url?: string;

  // Regulatory & Credential Classification
  practitionerCategory?: PractitionerCategory;
  practitionerClassification?: PractitionerClassification;
  schemaType?: "Physician" | "Person";
  registration_number?: string;
  registration_authority?: string;
  verification_status?: "pending" | "under_review" | "verified" | "rejected";
  verificationDate?: string;
  consultation_type?: string;
  submitted_availability_hours?: string;
  selected_consultation_period?: string;
}

export const doctors: Doctor[] = [
  // ──────────────────────────────────────────────
  // DOCTOR 1 — Dr. Arun Kumar (Verified Electro-Homoeopathy Practitioner)
  // ──────────────────────────────────────────────
  {
    slug: "dr-arun-kumar",
    name: "Dr. Arun Kumar",
    degree: "Bachelor of Electro-Homeopathic Medicine & Surgery (B.E.M.S. / M.B.E.H.)",
    experience: "19 Years Experience (Since 2007)",
    specialty: "Electro-Homeopathic Specialist & Chronic Care Practitioner",
    location: "Hajipur, Bihar",
    bio: "Dr. Arun Kumar is an experienced electro-homeopathic practitioner with 19 years of dedicated clinical practice. Registered with the Board of Electro Homoeopathic Medicine, Bihar, he provides individualized constitutional consultations for chronic skin conditions, digestive disorders, and recurrent allergic complaints via online teleconsultation.",
    fee: "999",
    days: "Mon - Sun",
    timing: "06:00 PM - 10:00 PM",
    image: "/doc-photos/dr-arun-kumar.jpeg",
    expertise: [
      "Constitutional Case Evaluation",
      "Chronic Skin Conditions",
      "Eczema & Dermatitis Support",
      "Migraine & Chronic Headaches",
      "Allergic Rhinitis Support",
      "Digestive & Gastrointestinal Care",
    ],
    practiceCity: "Hajipur",
    practiceState: "Bihar",
    physicalClinicAvailable: false,
    onlineConsultationAvailable: true,
    serviceCities: ["Hajipur", "Patna", "Muzaffarpur", "All India (Online Video)"],
    languages: ["Hindi", "English"],
    consultationModes: ["Video Consultation", "Audio Consultation"],
    city: "Hajipur",
    state: "Bihar",
    practitionerCategory: "electro_homoeopathy",
    practitionerClassification: "Verified Electro Homoeopathy Practitioner",
    schemaType: "Person",
    registration_number: "7979",
    registration_authority: "Board of Electro Homoeopathic Medicine, Bihar, Patna",
    verification_status: "verified",
    verificationDate: "2024-01-10",
    consultation_type: "Online Video & Audio Consultation",
  },

  // ──────────────────────────────────────────────
  // DOCTOR 2 — Dr. Rachamsetty Tejaswi (Verified Homoeopathy Physician)
  // ──────────────────────────────────────────────
  {
    slug: "dr-rachamsetty-tejaswi",
    name: "Dr. Rachamsetty Tejaswi",
    degree: "MD (Homoeopathy), BHMS, MSc (Clinical Nutrition)",
    experience: "2+ Years Clinical Experience",
    specialty: "Homeopathic Physician & Clinical Nutritionist",
    location: "Vijayawada, Andhra Pradesh",
    bio: "Clinically trained homeopathic physician holding MD (Homoeopathy) and BHMS, registered with the Andhra Board for Homoeopathy (Reg. No. 8809/H/2019), alongside an MSc in Clinical Nutrition. Specializes in women's health, hormonal imbalances, pediatric care, and evidence-informed nutritional guidance through telemedicine consultations.",
    fee: "999",
    days: "Mon - Sat",
    timing: "Morning (9am - 12pm), Afternoon (12pm - 4pm), Evening (4pm - 8pm)",
    submitted_availability_hours: "Morning: 9:00 AM–12:00 PM; Afternoon: 12:00 PM–4:00 PM; Evening: 4:00 PM–8:00 PM",
    selected_consultation_period: "Morning (9am - 12pm), Afternoon (12pm - 4pm), Evening (4pm - 8pm)",
    image: "/doc-photos/dr-rachamsetty-tejaswi.png",
    expertise: [
      "Women's Hormonal Health & PCOS",
      "Pediatrics & Developmental Support",
      "Clinical Nutrition & Lifestyle Coaching",
      "Constitutional Homoeopathy",
      "Chronic Digestive Care",
      "Telemedicine Case Management",
    ],
    practiceCity: "Vijayawada",
    practiceState: "Andhra Pradesh",
    physicalClinicAvailable: false,
    onlineConsultationAvailable: true,
    serviceCities: ["Vijayawada", "Guntur", "Amaravati", "Hyderabad", "Bengaluru", "Chennai", "All India (Online Video)"],
    languages: ["Telugu", "Hindi", "English"],
    consultationModes: ["Video Consultation", "Audio Consultation"],
    city: "Vijayawada",
    state: "Andhra Pradesh",
    practitionerCategory: "homoeopathy",
    practitionerClassification: "Verified Homoeopathy Practitioner",
    schemaType: "Physician",
    registration_number: "8809/H/2019",
    registration_authority: "Andhra Board for Homoeopathy",
    verification_status: "verified",
    verificationDate: "2024-02-14",
    consultation_type: "Online Video & Audio Consultation",
  },
];

/** Helper: find a doctor by slug */
export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug.toLowerCase());
}
