import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DoctorAgreementFlow } from "@/components/DoctorAgreementFlow";
import { Stethoscope, Globe, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Doctor Partnership & Onboarding Agreement - VitaHomeo",
  description: "Read the VitaHomeo Doctor Partnership Agreement, accept our onboarding terms, and connect on WhatsApp for your doctor registration form.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          {/* Header Callout */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0ea98b] bg-[#0ea98b]/10 dark:bg-[#0ea98b]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Doctor Partnership &amp; Onboarding
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-ink dark:text-white mt-4 mb-4 leading-tight font-display">
              Grow Your Digital Practice with VitaHomeo
            </h1>
            <p className="text-sm md:text-base text-body-text dark:text-[#aebba8] leading-relaxed max-w-2xl mx-auto">
              Review our transparent partnership terms, accept the onboarding policy, and connect directly with our medical desk on WhatsApp to receive the practitioner registration form.
            </p>
          </div>

          {/* Perks Bar */}
          <div className="max-w-2xl mx-auto mb-10 grid grid-cols-3 gap-3 text-center text-xs font-bold text-body-text dark:text-[#aebba8]">
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3.5 rounded-xl flex flex-col items-center gap-1 shadow-sm">
              <Globe className="w-5 h-5 text-[#0ea98b]" />
              <span>Pan-India Patient Reach</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3.5 rounded-xl flex flex-col items-center gap-1 shadow-sm">
              <Shield className="w-5 h-5 text-brand" />
              <span>75% Doctor Revenue Share</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3.5 rounded-xl flex flex-col items-center gap-1 shadow-sm">
              <Stethoscope className="w-5 h-5 text-[#0ea98b]" />
              <span>Verified Homeopaths Only</span>
            </div>
          </div>

          {/* Agreement & WhatsApp Flow */}
          <DoctorAgreementFlow />

        </div>
      </main>

      <Footer />
    </div>
  );
}
