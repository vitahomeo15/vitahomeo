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

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  let doctorName = "Doctor Profile";
  let specialty = "Homeopathic Specialist";

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

  // Fetch from database directly
  const { data, error } = await supabase
    .from("public_doctor_profiles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    notFound();
  }
  doctorData = data;

  // Normalize data for DoctorProfileClient component using database as single source of truth
  const normalizedDoctor = {
    name: doctorData.full_name,
    degree: doctorData.qualification,
    experience: typeof doctorData.experience === "number" 
      ? `${doctorData.experience} Years Experience` 
      : doctorData.experience || "Homeopathic Practitioner",
    location: doctorData.city && doctorData.state 
      ? `${doctorData.city}, ${doctorData.state}` 
      : "India",
    specialty: doctorData.specialty || "Homeopathic Specialist",
    bio: doctorData.bio || "No biography details provided.",
    fee: doctorData.consultation_fees ? doctorData.consultation_fees.toString() : "0",
    timing: doctorData.preferred_hours,
    days: doctorData.preferred_days,
    image: doctorData.slug === "dr-arun-kumar" ? "/Doc photo/dr.arun kr.jpeg" : (doctorData.profile_photo_url || "/placeholder-doctor.png"),
    
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
