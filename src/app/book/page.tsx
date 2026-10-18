import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageCircle, ShieldCheck, Lock, CalendarCheck, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | VitaHomeo",
  description:
    "Book your online homeopathy consultation via WhatsApp. Our team will coordinate availability, send you a form, and confirm your appointment.",
};

const WHATSAPP_NUMBER = "917765991145";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi VitaHomeo! I'd like to book a consultation with one of your homeopathic doctors. Could you please help me?"
);

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-xl mx-auto px-4 md:px-6 text-center">

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Consultation Booking
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-ink dark:text-white mt-4 mb-4 leading-tight font-display">
              Book Your Consultation
            </h1>
            <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              We coordinate appointments personally via WhatsApp to ensure you get the right doctor for your needs.
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-7 mb-8 text-left space-y-5 shadow-sm">
            <h2 className="text-base font-black text-ink dark:text-white mb-4">How it works</h2>

            {[
              { num: "1", text: "Click the WhatsApp button below to start a chat with our team." },
              { num: "2", text: "We'll ask about your health concerns and match you with the right doctor." },
              { num: "3", text: "We'll share a Google Form for you to fill in your details." },
              { num: "4", text: "We confirm your appointment time and share payment & consultation details." },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {step.num}
                </div>
                <p className="text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Emergency Disclaimer */}
          <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-2xl flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold leading-relaxed">
              <strong>Important:</strong> VitaHomeo provides online homeopathic consultations and is not intended for medical emergencies. If you are experiencing a serious or life-threatening condition, seek immediate emergency medical care.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer mb-4"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp to Book
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-xs text-muted-text dark:text-[#71806c] font-semibold">
            Available Mon–Sun, 9 AM–9 PM IST · Response within 15 minutes
          </p>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-3 gap-3 text-[10px] md:text-xs font-bold text-body-text dark:text-[#aebba8]">
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

        </div>
      </main>

      <Footer />
    </div>
  );
}
