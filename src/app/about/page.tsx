import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MessageSquare,
  AlertTriangle,
  Stethoscope,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | VitaHomeo",
  description: "Learn more about VitaHomeo. We are dedicated to connecting patients across India with verified homeopathic doctors for safe, private, and online care.",
  alternates: {
    canonical: "https://www.vitahomeo.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative">
      <Navbar />

      <main className="flex-1">
        
        {/* ============ HERO SECTION ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a] transition-colors relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/5 to-transparent rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              About VitaHomeo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white leading-tight mb-4 font-display">
              Making Homeopathic Consultations Easier to Access
            </h1>
            <p className="text-sm md:text-base text-body-text dark:text-[#aebba8] leading-relaxed max-w-2xl mx-auto font-medium">
              Connecting patients across India with verified, experienced homeopathic specialists through a simple, personal, and transparent approach.
            </p>
          </div>
        </section>

        {/* ============ 1. OUR STORY ============ */}
        <section className="py-16 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-[#e6ece6] dark:border-[#1c271c]/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-6 font-display">Our Story</h2>
            <div className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed space-y-4 font-medium">
              <p>
                Securing a reliable and expert homeopath could be a huge task for many of us. A lot of people from all parts of India, have to travel miles and meet expert doctors at specialty centers or end up meeting them but only at hefty fees or it&apos;s not really feasible to visit a clinic while dealing with an extremely busy work life.
              </p>
              <p>
                We designed VitaHomeo to overcome exactly these challenges. By taking the practice of homeopathy to your homes (online), we enable anyone to meet a verified expert and continue their homeopathic treatment, get e-prescriptions and receive continuous care, regardless of where they are in the city or even in the villages, without an arduous traveling time or tiresome waiting at the clinic.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 2. WHAT WE DO ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a] transition-colors border-t border-[#e6ece6] dark:border-[#1c271c]/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-6 font-display">What We Do</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mb-10 leading-relaxed font-medium">
              VitaHomeo makes the consultation process direct and simple. Choose a doctor, submit your preferred date and time, and our team will contact you on WhatsApp to confirm the appointment and guide you through the next steps.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-[#F8FAF7] dark:bg-[#141e14]">
                <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1 font-display">Browse Doctors</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                    View the list of available homeopathic specialists on our platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-[#F8FAF7] dark:bg-[#141e14]">
                <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1 font-display">Check Credentials & Details</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                    View verified qualifications, clinical experience, consultation fees, and available hours transparently on each doctor profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-[#F8FAF7] dark:bg-[#141e14]">
                <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1 font-display">Submit Consultation Request</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                    Fill out our simple booking request form with your details, symptoms, preferred date, and preferred time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-[#F8FAF7] dark:bg-[#141e14]">
                <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1 font-display">Confirm on WhatsApp</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                    Our team will contact you on WhatsApp to manually coordinate and confirm the doctor&apos;s availability and final appointment timing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-[#F8FAF7] dark:bg-[#141e14]">
                <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1 font-display">Secure Payment</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                    Once the slot is confirmed, we will share the UPI payment details with you on WhatsApp. Complete payment securely before the consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-[#F8FAF7] dark:bg-[#141e14]">
                <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1 font-display">Consult with Your Doctor</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                    Receive your consultation details and video link via WhatsApp to connect directly with the practitioner for your clinical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3. CONTACT US ============ */}
        <section className="py-20 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-[#e6ece6] dark:border-[#1c271c]/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-white mt-2 mb-4 font-display">Contact Us</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mb-12 max-w-xl mx-auto font-medium leading-relaxed">
              Have a question about VitaHomeo or consultations? We&apos;re here to help. Reach out to our support coordinators directly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left mb-12">
              {/* Phone */}
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card flex gap-4 items-center shadow-card-premium">
                <div className="w-10 h-10 rounded-xl bg-bg-soft dark:bg-[#101c0f] border border-line-custom/20 text-brand flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5 font-display">Call Support</h4>
                  <a href="tel:+917765991145" className="text-[11px] text-body-text dark:text-[#aebba8] font-bold hover:text-brand transition-colors block">+91 77659 91145</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card flex gap-4 items-center shadow-card-premium">
                <div className="w-10 h-10 rounded-xl bg-bg-soft dark:bg-[#101c0f] border border-line-custom/20 text-brand flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5 font-display">WhatsApp Support</h4>
                  <a href="https://wa.me/917765991145" target="_blank" rel="noopener noreferrer" className="text-[11px] text-body-text dark:text-[#aebba8] font-bold hover:text-brand transition-colors block">+91 77659 91145</a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card flex gap-4 items-center shadow-card-premium">
                <div className="w-10 h-10 rounded-xl bg-bg-soft dark:bg-[#101c0f] border border-line-custom/20 text-brand flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5 font-display">Email Support</h4>
                  <a href="mailto:vitahomeo15@gmail.com" className="text-[11px] text-body-text dark:text-[#aebba8] font-bold hover:text-brand transition-colors block">vitahomeo15@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/doctors" 
                className="px-8 py-3.5 bg-brand text-white hover:bg-brand-hover text-xs font-bold flex items-center justify-center rounded-button shadow-button-premium hover:scale-[1.01] transition-all gap-1.5"
              >
                <Stethoscope className="w-4.5 h-4.5 shrink-0" />
                Browse Available Doctors
              </Link>
              <a 
                href="https://wa.me/917765991145"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-brand/20 dark:border-[#1c271c] bg-white dark:bg-[#101c0f] text-brand hover:bg-brand hover:text-white text-xs font-bold flex items-center justify-center rounded-button transition-all gap-1.5"
              >
                <MessageSquare className="w-4.5 h-4.5 shrink-0" />
                Chat with Coordinator
              </a>
            </div>
          </div>
        </section>

        {/* ============ MEDICAL DISCLAIMER ============ */}
        <section className="py-12 bg-white dark:bg-[#0a120a] border-t border-[#e6ece6] dark:border-[#1c271c]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 rounded-card p-6 flex gap-4 items-start max-w-3xl mx-auto">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-red-700 dark:text-red-400 mb-1 font-display">Medical Disclaimer</h4>
                <p className="text-[10px] text-red-600 dark:text-red-300 leading-relaxed font-semibold">
                  Important: VitaHomeo provides online homeopathic consultations and is not intended for medical emergencies. If you are experiencing a serious or life-threatening condition, seek immediate emergency medical care. Online homeopathic consultations are supplementary support based solely on details, symptoms, and health histories shared by the patient during the consult session.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
