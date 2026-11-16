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

  if (!doc) {
    return {
      title: "Doctor Profile | VitaHomeo",
      description: "Consult verified homeopathic practitioners online via secure video call.",
    };
  }

  const doctorName = doc.name;
  const classification = doc.practitionerClassification || "Verified Practitioner";
  const practiceLoc = doc.practiceCity ? `${doc.practiceCity}, ${doc.practiceState}` : doc.location;

  return {
    title: `${doctorName} | ${classification} in ${practiceLoc} — VitaHomeo`,
    description: `Consult ${doctorName} (${doc.degree}). ${classification} registered with ${doc.registration_authority}. Available for 30–40 min private online video consultations across India. Fee: ₹999.`,
    alternates: {
      canonical: `https://www.vitahomeo.com/doctors/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${doctorName} | ${classification} — VitaHomeo`,
      description: `Consult ${doctorName} online. ${classification} (${doc.degree}), registered with ${doc.registration_authority}.`,
      url: `https://www.vitahomeo.com/doctors/${resolvedParams.slug}`,
      images: [
        {
          url: doc.image.startsWith("http") ? doc.image : `https://www.vitahomeo.com${doc.image}`,
          alt: doctorName,
        },
      ],
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
    practiceCity: doc.practiceCity || doc.city,
    practiceState: doc.practiceState || doc.state,
    physicalClinicAvailable: doc.physicalClinicAvailable || false,
    onlineConsultationAvailable: doc.onlineConsultationAvailable ?? true,
    serviceCities: doc.serviceCities || [doc.city || "All India"],
    languages: doc.languages || ["Hindi", "English"],
    consultationModes: doc.consultationModes || ["Video Consultation", "Audio Consultation"],
    practitionerCategory: doc.practitionerCategory || "homoeopathy",
    practitionerClassification: doc.practitionerClassification || "Verified Practitioner",
    specialty: doc.specialty,
    bio: doc.bio,
    fee: doc.fee || "999",
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
    verificationDate: doc.verificationDate,
    consultation_type: doc.consultation_type,
    submitted_availability_hours: doc.submitted_availability_hours,
    selected_consultation_period: doc.selected_consultation_period,
  };

  // Structured Data Schema Strategy:
  // Physician ONLY for registered Homoeopathic Doctors (e.g. Dr. Tejaswi - MD Hom, BHMS)
  // Person for Electro-Homoeopathic specialists (e.g. Dr. Arun Kumar - BEMS/MBEH)
  const isPhysician = doc.schemaType === "Physician";
  const doctorJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": isPhysician ? "Physician" : "Person",
        "name": doc.name,
        "description": doc.bio,
        "url": `https://www.vitahomeo.com/doctors/${doc.slug}`,
        "image": doc.image.startsWith("http") ? doc.image : `https://www.vitahomeo.com${doc.image}`,
        ...(isPhysician ? { "medicalSpecialty": "Homeopathic Medicine" } : { "jobTitle": doc.specialty }),
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": doc.degree,
          }
        ],
        ...(doc.registration_number ? {
          "identifier": `Reg. No. ${doc.registration_number} (${doc.registration_authority})`
        } : {}),
        "knowsLanguage": normalizedDoctor.languages,
        "priceRange": "₹999",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.vitahomeo.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Doctors",
            "item": "https://www.vitahomeo.com/doctors"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": doc.name,
            "item": `https://www.vitahomeo.com/doctors/${doc.slug}`
          }
        ]
      }
    ]
  };

  const isArunKumar = doc.slug === "dr-arun-kumar";

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }}
      />
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
