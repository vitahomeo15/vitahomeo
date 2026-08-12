import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DoctorProfileClient from "@/components/DoctorProfileClient";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// Fallback hardcoded doctor data for Dr. Arun Kumar
const arunKumarFallback = {
  name: "Dr. Arun Kumar",
  degree: "DHMS (Bihar Medical Council)",
  experience: "19 Years Experience",
  location: "Hajipur, Bihar",
  specialty: "Constitutional Homeopathy & Chronic Care",
  bio: "For the past 19 years, I have had the privilege of serving patients through homeopathy. Every consultation has reinforced my belief that true healing begins with understanding the person, not just the symptoms.",
  fee: "499",
  timing: "6:00 PM - 10:00 PM",
  days: "Mon - Sun",
  image: "/Doc photo/dr.arun kr.jpeg",
  clinic_address: "Anjanpir Chowk, near Lalganj Road",
  locality: "Anjanpir",
  city: "Hajipur",
  state: "Bihar",
  pin_code: "844101",
  google_maps_url: "https://maps.google.com/?q=Hajipur+Bihar"
};

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  let doctorName = "Doctor Profile";
  let specialty = "Homeopathic Specialist";

  if (slug === "dr-arun-kumar") {
    doctorName = arunKumarFallback.name;
    specialty = arunKumarFallback.specialty;
  } else {
    // Attempt to read doctor details from database for metadata
    try {
      const { data } = await supabase
        .from("public_doctor_profiles")
        .select("full_name, specialty")
        .eq("slug", slug)
        .single();
      if (data) {
        doctorName = data.full_name;
        specialty = data.specialty || "Homeopathic Specialist";
      }
    } catch (e) {
      // Ignore database errors during metadata generation
    }
  }

  return {
    title: `${doctorName} - ${specialty} | VitaHomeo`,
    description: `Consult ${doctorName}, verified homeopathic doctor. Book secure online video consultations for constitutional care.`,
    alternates: {
      canonical: `https://www.vitahomeo.com/doctors/${slug}`,
    },
  };
}

export default async function DoctorProfilePage({ params }: RouteParams) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  let doctorData: any = null;

  if (slug === "dr-arun-kumar") {
    // Attempt to fetch from database first to allow overrides, default to fallback
    try {
      const { data } = await supabase
        .from("public_doctor_profiles")
        .select("*")
        .eq("slug", slug)
        .single();
      if (data) {
        doctorData = data;
      }
    } catch (e) {
      // Ignore database check issues and use fallback
    }

    if (!doctorData) {
      doctorData = arunKumarFallback;
    }
  } else {
    // Fetch from database
    const { data, error } = await supabase
      .from("public_doctor_profiles")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      notFound();
    }
    doctorData = data;
  }

  // Normalize data for DoctorProfileClient component
  const normalizedDoctor = {
    name: doctorData.full_name || doctorData.name,
    degree: doctorData.qualification || doctorData.degree,
    experience: typeof doctorData.experience === "number" 
      ? `${doctorData.experience} Years Experience` 
      : doctorData.experience,
    location: doctorData.city && doctorData.state 
      ? `${doctorData.city}, ${doctorData.state}` 
      : doctorData.location,
    specialty: doctorData.specialty || "Homeopathic Specialist",
    bio: doctorData.bio || "No biography details provided.",
    fee: doctorData.consultation_fees ? doctorData.consultation_fees.toString() : doctorData.fee,
    timing: doctorData.preferred_hours || doctorData.timing,
    days: doctorData.preferred_days || doctorData.days,
    image: doctorData.profile_photo_url || doctorData.image || "/placeholder-doctor.png",
    
    // Address location fields
    clinic_address: doctorData.clinic_address,
    locality: doctorData.locality,
    city: doctorData.city,
    state: doctorData.state,
    pin_code: doctorData.pin_code,
    google_maps_url: doctorData.google_maps_url
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb */}
          <div className="text-xs text-muted-text dark:text-[#71806c] mb-6 font-semibold flex items-center gap-2">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span>/</span>
            <Link href="/doctors" className="hover:text-brand">Doctors</Link>
            <span>/</span>
            <span className="text-ink dark:text-white font-bold">{normalizedDoctor.name}</span>
          </div>

          <DoctorProfileClient doctor={normalizedDoctor} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
