import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | VitaHomeo",
  description: "Read the VitaHomeo privacy policy. Learn how we secure your medical files and personal details in accordance with healthcare standards.",
  alternates: {
    canonical: "https://www.vitahomeo.com/privacy",
  },
};

export default function PrivacyPage() {
  const sections = [
    { 
      title: "Information We Collect", 
      content: "We collect information you provide directly to us when requesting a consultation, including your name, contact phone number, preferred consultation schedule, and general health concerns necessary to connect you with an appropriate clinical specialist. We also record technical telemetry such as page navigation to monitor platform reliability and speed." 
    },
    { 
      title: "How We Use Your Information", 
      content: "Your information is used strictly to facilitate telemedicine appointments with verified doctors, confirm consultation timings on WhatsApp, dispatch prescribed remedies, and communicate care updates. We never sell, lease, or monetize patient contact details or health records to third-party marketing networks." 
    },
    { 
      title: "Clinical Data Security & Strict Isolation", 
      content: "In compliance with applicable healthcare data norms and the Digital Personal Data Protection (DPDP) Act, all clinical communications, consultation notes, and health records remain strictly confidential between you and your licensed treating practitioner. Health-related inquiry data is isolated and is never passed to advertising platforms or used for commercial profiling." 
    },
    { 
      title: "Cookies, Analytics & Campaign Measurement", 
      content: "We utilize technical cookies to preserve your interface preferences (such as light or dark themes) and session state. To evaluate advertising campaign effectiveness (such as Google and Meta campaigns) and measure booking journeys, we use privacy-compliant measurement tags operating under Google Consent Mode. Marketing and analytics tracking only activate upon your consent via our Cookie Banner, and you may modify or decline tracking at any time." 
    },
    { 
      title: "Patient Rights & Record Requests", 
      content: "You retain the right to review your registered details, request updates to inaccurate records, or ask for the deletion of your consultation contact history, subject to statutory medical record-keeping requirements. To make any data inquiry, contact our data protection coordinator at vitahomeo15@gmail.com." 
    },
    { 
      title: "Policy Updates", 
      content: "This policy is reviewed periodically to adhere to evolving telemedicine regulations and digital privacy laws. Material updates will be highlighted via our website." 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4 font-display">Privacy Policy</h1>
          <p className="text-sm text-muted-text dark:text-[#71806c] mb-12">Last updated: January 1, 2025</p>
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-line-custom dark:border-[#1d2a1a] pb-8 last:border-0">
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3 font-display">{i + 1}. {s.title}</h2>
                <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
