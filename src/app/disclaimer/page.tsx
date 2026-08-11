import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer | VitaHomeo",
  description: "Read the medical disclaimer for the VitaHomeo platform. Online consultations are not a substitute for physical emergency care.",
  alternates: {
    canonical: "https://www.vitahomeo.com/disclaimer",
  },
};

export default function MedicalDisclaimerPage() {
  const sections = [
    {
      title: "Not an Emergency Service",
      content: "VitaHomeo facilitates online consultations with independent, verified homeopathic doctors. This platform is not designed to handle medical emergencies or acute life-threatening situations. In the event of a medical emergency, please contact your local emergency services (like 102/108 in India) or visit the nearest hospital or emergency room immediately."
    },
    {
      title: "Consultation & Clinical Advice",
      content: "All medical advice, prescriptions, remedies, and treatment plans are provided directly by independent, qualified homeopathic practitioners. VitaHomeo acts solely as an intermediary platform connecting you with these practitioners. The platform is not responsible for the medical advice, diagnosis, or outcome of treatments provided by the doctors."
    },
    {
      title: "Information Integrity & Accuracy",
      content: "Homeopathic treatments are customized specifically to the individual's mental, physical, and emotional profile (constitutional care). The success of the treatment depends heavily on the accuracy and completeness of the symptoms and medical history you provide. It is your responsibility to share correct, detailed, and authentic details during your consultation."
    },
    {
      title: "No Doctor-Patient Relationship with VitaHomeo",
      content: "Using the VitaHomeo website or requesting a consultation does not establish a doctor-patient relationship with the platform itself. The doctor-patient relationship is established exclusively between you and the specific homeopathic practitioner you consult with."
    },
    {
      title: "No Guarantees of Outcomes",
      content: "Like all medical treatments, results from homeopathic treatment vary from person to person. VitaHomeo and its affiliated doctors make no guarantees, warranties, or representations regarding specific health outcomes, complete recovery, or cure rates. Constitutional homeopathic support is aimed at strengthening the body's natural defense systems dynamics over time."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 py-24">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5" /> Important Legal Notice
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4 font-display">Medical Disclaimer</h1>
            <p className="text-sm text-muted-text dark:text-[#71806c]">Last updated: January 1, 2025</p>
          </div>

          {/* Main Warning Box */}
          <div className="p-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/15 mb-10 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-red-700 dark:text-red-300 font-semibold leading-relaxed">
              <strong>CRITICAL WARNING:</strong> Online consultations on VitaHomeo are strictly for non-emergency constitutional care and symptom support. Do not ignore physical medical emergencies. If you have severe symptoms, chest pain, difficulty breathing, sudden numbness, or acute trauma, seek immediate emergency help.
            </p>
          </div>

          {/* Detailed Sections */}
          <div className="flex flex-col gap-8">
            {sections.map((sec, idx) => (
              <div key={idx} className="border-b border-line-custom dark:border-[#1d2a1a] pb-6 last:border-0">
                <h2 className="text-lg font-bold text-ink dark:text-white mb-2 font-display">{idx + 1}. {sec.title}</h2>
                <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">{sec.content}</p>
              </div>
            ))}
          </div>

          {/* Compliance Badge */}
          <div className="mt-12 p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/30 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand shrink-0" />
            <span className="text-[10px] md:text-xs font-bold text-muted-text">This disclaimer complies with telemedicine practice guidelines and healthcare compliance standards in India.</span>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
