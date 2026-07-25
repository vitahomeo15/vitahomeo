"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  const sections = [
    { title: "Information We Collect", content: "We collect information you provide directly to us, such as your name, email address, and health-related information necessary to connect you with a homeopathic doctor. We also collect basic usage data to improve our platform." },
    { title: "How We Use Your Information", content: "Your information is used solely to facilitate consultations with verified doctors, send appointment reminders, and improve our services. We do not sell or share your personal data with any third party." },
    { title: "Data Security", content: "All personal and medical information is encrypted using industry-standard protocols. Only authorized doctors involved in your care can access your medical details." },
    { title: "Cookies", content: "We use minimal cookies to keep you logged in and remember your preferences. We do not use tracking cookies for advertising purposes." },
    { title: "Your Rights", content: "You may request access to, correction of, or deletion of your personal data at any time by contacting our support team at support@sociveda.com." },
    { title: "Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of significant changes via email or a notice on our website." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-text dark:text-[#71806c] mb-12">Last updated: January 1, 2025</p>
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-line-custom dark:border-[#1d2a1a] pb-8">
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3">{i + 1}. {s.title}</h2>
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
