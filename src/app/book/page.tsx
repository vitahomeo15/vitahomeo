import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PatientBookingForm } from "@/components/PatientBookingForm";
import { ShieldCheck, Lock, CalendarCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Request an Online Homeopathy Consultation - VitaHomeo",
  description: "Request a secure, private online teleconsultation with verified homeopathic doctors. Get personalized constitutional remedies from the comfort of home.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          {/* Header Callout */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Telehealth Consultation Request
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-ink dark:text-white mt-4 mb-4 leading-tight font-display">
              Begin Your Consultation
            </h1>
            <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              Fill out the form below to request an online consultation. Our team will contact you on WhatsApp to coordinate availability and payment.
            </p>
          </div>

          {/* Quick Trust Badges Row */}
          <div className="max-w-xl mx-auto mb-8 grid grid-cols-3 gap-3 text-center text-[10px] md:text-xs font-bold text-body-text dark:text-[#aebba8]">
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3 rounded-xl flex flex-col items-center gap-1">
              <ShieldCheck className="w-5 h-5 text-brand" />
              <span>Verified Doctors Only</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3 rounded-xl flex flex-col items-center gap-1">
              <Lock className="w-5 h-5 text-[#0ea98b]" />
              <span>Secure Records</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] p-3 rounded-xl flex flex-col items-center gap-1">
              <CalendarCheck className="w-5 h-5 text-brand" />
              <span>Flexible Schedule</span>
            </div>
          </div>

          {/* Emergency Disclaimer */}
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold leading-relaxed">
              <strong>Important:</strong> VitaHomeo provides online homeopathic consultations and is not intended for medical emergencies. If you are experiencing a serious or life-threatening condition, seek immediate emergency medical care.
            </p>
          </div>

          {/* Native Booking Form */}
          <PatientBookingForm />

        </div>
      </main>

      <Footer />
    </div>
  );
}
