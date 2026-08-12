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
    { title: "Information We Collect", content: "We collect information you provide directly to us, such as your name, contact details (phone and email), preferred consultation timing, and health-related details necessary to connect you with a homeopathic practitioner. We also collect basic telemetry analytics to optimize platform speed." },
    { title: "How We Use Your Information", content: "Your information is used solely to facilitate telemedicine consultations with verified doctors, send appointment details or links, and improve our services. We strictly maintain records privacy and do not sell or lease patient records to third-party marketing networks." },
    { title: "Data Security & Confidentiality", content: "All patient information is handled with care and kept confidential. Only authorized practitioners involved in your clinical care are permitted to view your health details." },
    { title: "Use of Cookies", content: "We use minimal technical cookies to keep you logged in, save your layout choices (such as light or dark themes), and remember your preferences. We do not run invasive tracking scripts for advertising." },
    { title: "Patient Rights & Record Requests", content: "Under healthcare rules, you have the right to request a copy of your records, correct any inaccuracies, or request account deletion. You can reach out to our team at vitahomeo15@gmail.com for any requests." },
    { title: "Policy Modifications", content: "We may update this Privacy Policy to align with new regulations or technology changes. We will notify you of any major changes by displaying a notice on our website." },
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
