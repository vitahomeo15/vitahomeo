import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | VitaHomeo",
  description: "Read the VitaHomeo terms and conditions for consulting homeopathic doctors online.",
  alternates: {
    canonical: "https://www.vitahomeo.com/terms",
  },
};

export default function TermsPage() {
  const sections = [
    { title: "Acceptance of Terms", content: "By accessing or using the VitaHomeo platform, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services." },
    { title: "Medical Disclaimer", content: "VitaHomeo is an intermediary platform connecting you with independent homeopathic doctors. It is not an emergency medical service. In case of a medical emergency, please contact your nearest hospital or emergency services immediately." },
    { title: "Patient Responsibilities", content: "You agree to provide accurate and complete clinical details during booking and consultations. You are responsible for keeping your contact information up to date so doctors can reach you." },
    { title: "Intermediary Limitations", content: "All consultations are conducted by independent, verified homeopathic practitioners. VitaHomeo acts solely as a technological facilitator and is not liable for the medical advice, recommendations, or treatment outcomes provided by doctors." },
    { title: "Intellectual Property", content: "All content, logos, branding, designs, and technology on this platform are owned by VitaHomeo and may not be copied, reproduced, or distributed without prior written consent." },
    { title: "Governing Law", content: "These terms are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of India." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4 font-display">Terms & Conditions</h1>
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
