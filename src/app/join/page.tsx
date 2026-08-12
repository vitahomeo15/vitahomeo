import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DoctorJoinForm } from "@/components/DoctorJoinForm";
import { Stethoscope, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Join as a Homeopathic Doctor - VitaHomeo",
  description: "Expand your practice and reach patients across India. Apply to join VitaHomeo's network of verified homeopathic practitioners.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          {/* Header Callout */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0ea98b] bg-[#0ea98b]/10 dark:bg-[#0ea98b]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Practitioner Registration
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-ink dark:text-white mt-4 mb-4 leading-tight font-display">
              Grow Your Digital Practice
            </h1>
            <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              Apply to join India&apos;s premium telemedicine platform dedicated exclusively to verified homeopathic clinical care. Set your own hours and consult securely from anywhere.
            </p>
          </div>

          {/* Core Perks Grid */}
          <div className="max-w-xl mx-auto mb-8 grid grid-cols-3 gap-3 text-center text-[10px] md:text-xs font-bold text-body-text dark:text-[#aebba8]">
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3 rounded-xl flex flex-col items-center gap-1">
              <Globe className="w-5 h-5 text-[#0ea98b]" />
              <span>Pan-India Patient Reach</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3 rounded-xl flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 text-brand" />
              <span>Private Consultations</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3 rounded-xl flex flex-col items-center gap-1">
              <Stethoscope className="w-5 h-5 text-[#0ea98b]" />
              <span>Full Digital Onboarding</span>
            </div>
          </div>

          {/* Native Doctor Registration Form */}
          <DoctorJoinForm />

        </div>
      </main>

      <Footer />
    </div>
  );
}
