"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  const sections = [
    { title: "Acceptance of Terms", content: "By accessing or using the VitaHomeo platform, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services." },
    { title: "Medical Disclaimer", content: "VitaHomeo is a platform that facilitates online consultations with licensed homeopathic doctors. It is not an emergency medical service. In case of a medical emergency, please contact your nearest hospital immediately." },
    { title: "User Responsibilities", content: "You agree to provide accurate and complete information when registering and during consultations. You are responsible for maintaining the confidentiality of your account credentials." },
    { title: "Consultation Services", content: "All consultations are conducted by independent, verified homeopathic practitioners. VitaHomeo acts as an intermediary platform and is not liable for the medical advice provided by doctors." },
    { title: "Intellectual Property", content: "All content, branding, and technology on this platform is owned by VitaHomeo and may not be reproduced or distributed without prior written consent." },
    { title: "Governing Law", content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4 font-display">Terms & Conditions</h1>
          <p className="text-sm text-muted-text dark:text-[#71806c] mb-12">Last updated: January 1, 2025</p>
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-line-custom dark:border-[#1d2a1a] pb-8">
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3 font-display">{i + 1}. {s.title}</h2>
                <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
