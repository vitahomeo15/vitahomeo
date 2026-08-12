import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DoctorProfileClient from "@/components/DoctorProfileClient";

export const metadata: Metadata = {
  title: "Dr. Arun Kumar - Constitutional Homeopathy Specialist | VitaHomeo",
  description: "Consult Dr. Arun Kumar, verified homeopathic doctor with 19 years of experience. Book secure video consultations for chronic cases.",
  alternates: {
    canonical: "https://www.vitahomeo.com/doctors/dr-arun-kumar",
  },
};

export default function DoctorProfilePage() {
  const doctor = {
    name: "Dr. Arun Kumar",
    degree: "DHMS (Bihar Medical Council)",
    experience: "19 Years Experience",
    location: "Hajipur, Bihar",
    specialty: "Constitutional Homeopathy & Chronic Care",
    bio: "For the past 19 years, I have had the privilege of serving patients through homeopathy. Every consultation has reinforced my belief that true healing begins with understanding the person, not just the symptoms.",
    fee: "499",
    timing: "6:00 PM - 10:00 PM",
    days: "Mon - Sun",
    image: "/Doc photo/dr.arun kr.jpeg"
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
            <span className="text-ink dark:text-white font-bold">{doctor.name}</span>
          </div>

          <DoctorProfileClient doctor={doctor} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
