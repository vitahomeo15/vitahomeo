import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { getDoctors } from "@/lib/doctors";
import DoctorsDirectoryClient from "@/components/DoctorsDirectoryClient";

export const metadata: Metadata = {
  title: "Find Homeopathic Doctors Online | Verified Specialists — VitaHomeo",
  description:
    "Browse verified homeopathic doctors on VitaHomeo. Search by city or state, view council registrations, fees (₹999), and book confidential online video consultations with official digital prescriptions on WhatsApp.",
  alternates: {
    canonical: "https://www.vitahomeo.com/doctors",
  },
};

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  const jsonLdDirectory = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "VitaHomeo Verified Homeopathic Doctors Directory",
        "url": "https://www.vitahomeo.com/doctors",
        "description": "Find state-council verified homeopathic and electro-homeopathic specialists for online video consultations across India.",
        "about": {
          "@type": "Organization",
          "name": "VitaHomeo Telemedicine",
          "url": "https://www.vitahomeo.com",
          "telephone": "+91-77659-91145"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": doctors.map((doc, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": doc.schemaType || (doc.slug === "dr-rachamsetty-tejaswi" ? "Physician" : "Person"),
              "name": doc.name,
              ...(doc.schemaType === "Physician" ? { "medicalSpecialty": "Homeopathic Medicine" } : { "jobTitle": doc.specialty }),
              "url": `https://www.vitahomeo.com/doctors/${doc.slug}`,
              "priceRange": "₹999"
            }
          }))
        }
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
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDirectory) }}
      />
      
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <DoctorsDirectoryClient initialDoctors={doctors} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
