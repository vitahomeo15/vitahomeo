import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DoctorProfileClient from "@/components/DoctorProfileClient";
import DoctorProfileArunKumar from "@/components/DoctorProfileArunKumar";
import DoctorProfileTejaswi from "@/components/DoctorProfileTejaswi";
import { getDoctorBySlug, getDoctors } from "@/lib/doctors";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// Generate static paths at build time for all doctors
export async function generateStaticParams() {
  const allDoctors = await getDoctors();
  return allDoctors.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = await getDoctorBySlug(resolvedParams.slug);

  const doctorName = doc?.name ?? "Doctor Profile";
  const specialty = doc?.specialty ?? "Homeopathic Specialist";
  const verificationTag = doc?.verification_status === "verified" ? "verified homeopathic doctor" : "homeopathic doctor";

  return {
    title: `${doctorName} - ${specialty} | VitaHomeo`,
    description: `Consult ${doctorName}, ${verificationTag}. Connect via WhatsApp or book online for a personalized constitutional homeopathy consultation.`,
    alternates: {
      canonical: `https://www.vitahomeo.com/doctors/${resolvedParams.slug}`,
    },
  };
}

export default async function DoctorProfilePage({ params }: RouteParams) {
  const resolvedParams = await params;
  const doc = await getDoctorBySlug(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  // Shape the data for the profile components
  const normalizedDoctor = {
    id: doc.slug,
    slug: doc.slug,
    name: doc.name,
    degree: doc.degree,
    experience: doc.experience,
    location: doc.location,
    specialty: doc.specialty,
    bio: doc.bio,
    fee: doc.fee,
    timing: doc.timing,
    days: doc.days,
    image: doc.image,
    expertise: doc.expertise,
    city: doc.city,
    state: doc.state,
    clinic_address: doc.clinic_address,
    locality: doc.locality,
    pin_code: doc.pin_code,
    google_maps_url: doc.google_maps_url,
    registration_number: doc.registration_number,
    registration_authority: doc.registration_authority,
    verification_status: doc.verification_status,
    consultation_type: doc.consultation_type,
    submitted_availability_hours: doc.submitted_availability_hours,
    selected_consultation_period: doc.selected_consultation_period,
  };

  const isArunKumar = doc.slug === "dr-arun-kumar";

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

          {/* Doctor Profile view by slug */}
          {doc.slug === "dr-arun-kumar" ? (
            <DoctorProfileArunKumar doctor={normalizedDoctor} />
          ) : doc.slug === "dr-rachamsetty-tejaswi" ? (
            <DoctorProfileTejaswi doctor={normalizedDoctor} />
          ) : (
            <DoctorProfileClient doctor={normalizedDoctor} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
