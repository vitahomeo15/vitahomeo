"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Heart, 
  Shield, 
  Award, 
  Globe, 
  Clock, 
  ArrowRight, 
  Search, 
  Calendar, 
  CreditCard, 
  Video, 
  FileText, 
  MessageSquare, 
  Lock, 
  Scale, 
  CheckCircle, 
  Phone, 
  Mail, 
  AlertTriangle, 
  ChevronDown, 
  Zap,
  Stethoscope
} from "lucide-react";

export default function AboutPage() {
  // Trust Badges for Hero Section
  const trustBadges = [
    { icon: <Scale className="w-5 h-5" />, text: "Affordable Consultations" },
    { icon: <Award className="w-5 h-5" />, text: "Experienced Doctors" },
    { icon: <Lock className="w-5 h-5" />, text: "Secure Online Platform" },
    { icon: <Globe className="w-5 h-5" />, text: "Accessible Across India" }
  ];

  // What We Do list
  const whatWeDoList = [
    "Search & find verified homeopathic specialists",
    "Book convenient online appointments 24/7",
    "Consult via secure video or audio calls",
    "Receive instant digital prescriptions safely",
    "Seamless follow-up consultations in one click",
    "Maintain digital health records securely"
  ];

  // How Sociveda Works flow
  const howItWorksSteps = [
    { step: "1", title: "Choose a Doctor", desc: "Browse and select from verified homeopathic practitioners.", icon: <Search className="w-5 h-5" /> },
    { step: "2", title: "Book Appointment", desc: "Select a date and time slot that fits your schedule.", icon: <Calendar className="w-5 h-5" /> },
    { step: "3", title: "Pay Consultation Fee", desc: "Pay securely online with transparent pricing shown upfront.", icon: <CreditCard className="w-5 h-5" /> },
    { step: "4", title: "Consult Online", desc: "Meet your doctor over a secure call right in your browser.", icon: <Video className="w-5 h-5" /> },
    { step: "5", title: "Receive Prescription", desc: "Download your digital constitutional prescription instantly.", icon: <FileText className="w-5 h-5" /> },
    { step: "6", title: "Follow-up if Needed", desc: "Check in with your doctor easily for continuity of care.", icon: <MessageSquare className="w-5 h-5" /> }
  ];

  // Why Choose Sociveda grid advantages
  const advantages = [
    { title: "Experienced Doctors", desc: "Consult with verified homeopathic practitioners with years of expertise." },
    { title: "Affordable Pricing", desc: "Get access to quality healthcare at pocket-friendly consultation rates." },
    { title: "Easy Booking", desc: "Find availability and schedule a session in less than two minutes." },
    { title: "Secure Consultations", desc: "Your video and audio consults are fully encrypted and private." },
    { title: "Follow-up Care", desc: "Continuous patient support ensures your healing path stays on track." },
    { title: "Patient-Friendly Interface", desc: "Simple navigation designed to be easily used by patients of all age groups." },
    { title: "Privacy Protection", desc: "Strict data privacy standards protect your medical files from unauthorized access." },
    { title: "Accessible Anywhere", desc: "Receive care from anywhere in India, saving you time and travel expenses." }
  ];

  // Core Values list
  const coreValues = [
    { icon: <Heart className="w-5 h-5 text-brand" />, label: "Compassion", desc: "Empathy and care are at the center of every consultation." },
    { icon: <Shield className="w-5 h-5 text-brand" />, label: "Trust", desc: "Building strong bonds between patients and verified practitioners." },
    { icon: <Scale className="w-5 h-5 text-brand" />, label: "Ethical Healthcare", desc: "Promoting constitutional care without unscientific or fabricated claims." },
    { icon: <Globe className="w-5 h-5 text-brand" />, label: "Accessibility", desc: "Reaching urban and rural areas across India equally." },
    { icon: <Lock className="w-5 h-5 text-brand" />, label: "Privacy", desc: "Absolute confidentiality for patient records and virtual consults." },
    { icon: <Zap className="w-5 h-5 text-brand" />, label: "Continuous Improvement", desc: "Always upgrading technology to refine the patient experience." }
  ];

  // Doctor Verification Steps
  const verificationSteps = [
    { label: "Educational Qualification", desc: "Vetting BHMS/MD (Homeopathy) degrees from recognized universities." },
    { label: "Medical Registration", desc: "Verifying credentials with state councils or the National Commission for Homeopathy." },
    { label: "Identity Verification", desc: "Confirming identity using government-issued photo identification documents." },
    { label: "Experience Review", desc: "Reviewing professional history and past clinical practice records." },
    { label: "Profile Approval", desc: "Activating the profile on the platform only after successful checks." }
  ];

  // FAQ Accordion items
  const faqs = [
    { q: "How do I book a consultation?", a: "To book, simply select your preferred doctor, select an available date and time slot, make the secure payment, and check your dashboard for the meeting details." },
    { q: "Are the doctors on Sociveda verified?", a: "Yes, every homeopathic doctor goes through a rigorous multi-step verification process checking their medical registration, educational degrees, and professional experience before joining our network." },
    { q: "Can I get a digital prescription?", a: "Yes. Once the consultation concludes, your doctor generates a digital prescription detailing the constitutional remedies. This is saved securely on your profile and is available for instant download." },
    { q: "How much does a consultation cost?", a: "Consultation fees are set transparently and displayed upfront on each doctor's profile page. There are no hidden fees or extra charges." },
    { q: "How are payments made?", a: "Payments are processed securely through our online payment gateway using UPI, debit/credit cards, net banking, or secure wallets." },
    { q: "Can I book follow-up consultations?", a: "Yes, follow-up slots can easily be booked through your account history or by choosing your previous practitioner from the doctors listing." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative">
      <Navbar />

      <main className="flex-1">
        
        {/* ============ 1. HERO SECTION ============ */}
        <section className="py-24 bg-gradient-to-b from-[#f6faf4] to-white dark:from-[#0a120a] dark:to-[#0e1a0d] transition-colors relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/5 to-transparent rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Who We Are
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-ink dark:text-white leading-tight mb-6">
              Healthcare That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#0ea98b]">Reaches Everyone</span>
            </h1>
            <p className="text-base md:text-xl text-body-text dark:text-[#aebba8] leading-relaxed max-w-2xl mx-auto mb-12">
              Sociveda connects patients with experienced homeopathic doctors through affordable, secure, and convenient online consultations.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/80 dark:bg-[#101c0f]/80 border border-line-custom dark:border-[#1d2a1a] shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <span className="text-brand">{badge.icon}</span>
                  <span className="text-xs font-bold text-ink dark:text-white text-left leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 2. OUR STORY ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a] border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Genesis</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2 mb-4 leading-tight">Our Story</h2>
              </div>
              <div className="md:col-span-7 text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed space-y-4 font-medium font-sans">
                <p>
                  Finding a trusted, experienced homeopathic practitioner often presents significant hurdles. Many patients across India face long travel times to specialized clinics, high consultation costs, or find it difficult to fit physical visits into busy daily schedules.
                </p>
                <p>
                  We created Sociveda to address these exact limitations. By taking homeopathic care online, we provide patients in any city or village with a direct path to verified specialists, digital prescriptions, and continuity of care—without travel stress or clinic waiting times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3. MISSION & 4. VISION ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Mission */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-8 hover:border-brand/35 transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3">Our Mission</h3>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Our mission is to make trusted homeopathic healthcare accessible, affordable, and convenient through secure digital technology, while strictly adhering to ethical medical practices and constitutional standards of care.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-8 hover:border-brand/35 transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0ea98b]/10 text-[#0ea98b] flex items-center justify-center mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3">Our Vision</h3>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Our vision is to become India&apos;s most trusted digital homeopathic healthcare platform, bridging the healthcare divide and enabling individuals to benefit from holistic treatment options safely from their own homes.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 5. WHAT WE DO ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Operations</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">What We Do</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {whatWeDoList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-line-custom/60 dark:border-[#1d2a1a]/60 bg-bg-soft/40 dark:bg-[#101c0f]/20">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm font-semibold text-body-text dark:text-[#aebba8]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 6. HOW SOCIVEDA WORKS ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Step-By-Step</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">How Sociveda Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-brand/40 transition-colors">
                  <div className="absolute top-3 left-3 text-xs font-bold text-muted-text dark:text-muted/60">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4 mt-2">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-2">{step.title}</h4>
                  <p className="text-[10px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 7. WHY CHOOSE SOCIVEDA ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Why Choose Sociveda</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {advantages.map((adv, idx) => (
                <div key={idx} className="border border-line-custom/80 dark:border-[#1d2a1a]/80 bg-white dark:bg-[#101c0f] p-5 rounded-2xl shadow-sm hover:scale-[1.01] hover:border-brand/30 transition-all">
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-2">{adv.title}</h4>
                  <p className="text-[10px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 8. FOR PATIENTS & 9. FOR DOCTORS ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* For Patients */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-8 flex flex-col justify-between hover:border-brand/40 transition-colors shadow-sm">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-widest">Tailored Care</span>
                <h3 className="text-2xl font-extrabold text-ink dark:text-white mt-2 mb-6">For Patients</h3>
                <ul className="space-y-4 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Access verified homeopathic experts online from home</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Affordable, upfront pricing with no hidden charges</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Secure medical consultations and encrypted health files</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Convenient digital prescriptions and follow-ups</span>
                  </li>
                </ul>
              </div>
              <Link href="/book" className="w-full h-11 rounded-xl bg-brand text-white text-xs font-bold flex items-center justify-center gap-2 hover:brightness-105 transition-all">
                <Calendar className="w-4 h-4" /> Book Consultation
              </Link>
            </div>

            {/* For Doctors */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-8 flex flex-col justify-between hover:border-brand/40 transition-colors shadow-sm">
              <div>
                <span className="text-xs font-bold text-[#0ea98b] uppercase tracking-widest">Expand Practice</span>
                <h3 className="text-2xl font-extrabold text-ink dark:text-white mt-2 mb-6">For Doctors</h3>
                <ul className="space-y-4 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Grow your patient network across India remotely</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Flexible consulting hours matching your schedule</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Fair consultation billing and secure payments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Digital records management & professional profile page</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] text-muted-text dark:text-[#71806c] mb-4 text-center leading-normal">
                  Interested in joining? Click below to submit your credentials and credentials verification form.
                </p>
                <Link href="/join" className="w-full h-11 rounded-xl border border-[#0ea98b]/50 text-[#0ea98b] dark:text-[#32d8b8] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0ea98b]/5 transition-all">
                  <Stethoscope className="w-4 h-4" /> Join as Practitioner
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 10. DOCTOR VERIFICATION PROCESS ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Quality Assurance</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Doctor Verification Process</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium leading-relaxed">
                Before consulting, every doctor must pass a strict 5-step background verification to confirm credentials and validity:
              </p>
            </div>

            <div className="max-w-2xl mx-auto flex flex-col gap-6">
              {verificationSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-bg-soft/50 dark:bg-[#101c0f]/40 border border-line-custom dark:border-[#1d2a1a]">
                  <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">{step.label}</h4>
                    <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-normal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 11. OUR CORE VALUES ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our DNA</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">{val.label}</h4>
                    <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 12. PRIVACY & SECURITY & 13. QUALITY STANDARDS ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Patient Privacy & Data Security */}
            <div className="p-8 rounded-[24px] bg-bg-soft/40 dark:bg-[#101c0f]/30 border border-line-custom dark:border-[#1d2a1a]">
              <div className="flex items-center gap-3 mb-5">
                <Lock className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-ink dark:text-white">Patient Privacy & Data Security</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Your medical files and personal consultation records are stored with high security. We implement encryption standards to keep your logs and consult history safe. Sociveda maintains a strict policy: we never share or rent patient medical details or contact information with unauthorized third parties.
              </p>
            </div>

            {/* Quality Standards */}
            <div className="p-8 rounded-[24px] bg-bg-soft/40 dark:bg-[#101c0f]/30 border border-line-custom dark:border-[#1d2a1a]">
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-5 h-5 text-[#0ea98b]" />
                <h3 className="text-lg font-bold text-ink dark:text-white">Quality Standards</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                We believe in providing access to quality homeopathic healthcare. This is ensured through mandatory credentials vetting for all doctors, guidelines promoting ethical and evidence-informed consults, completely clear pricing patterns, and a continuous focus on maintaining high patient satisfaction rates.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 14. TRANSPARENT PRICING & 15. OUR COMMITMENT ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Transparent Pricing */}
            <div className="p-8 rounded-[24px] bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <CreditCard className="w-5 h-5 text-[#0ea98b]" />
                <h3 className="text-lg font-bold text-ink dark:text-white">Transparent Pricing</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                At Sociveda, we believe in honesty. Consultation pricing is listed directly on each doctor&apos;s profile page, so you know exactly what the charge is before you finalize a booking. There are no registration fees, platform charges, or hidden fees.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="p-8 rounded-[24px] bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-ink dark:text-white">Our Commitment</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                We commit to making natural, homeopathic healthcare affordable, accessible, reliable, transparent, and strictly patient-focused. Our team works continuously to refine the platform features, ensuring smooth video/audio sessions and secure prescription delivery.
              </p>
            </div>
          </div>
        </section>

        {/* 
          =========================================
          PLACEHOLDER: Statistics & Achievements Section
          (To be populated when verifiable patient / doctor analytics are completed)
          
          <section className="py-16 bg-white dark:bg-[#0a120a] border-t border-line-custom dark:border-[#1d2a1a]">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="text-xl font-bold">SociVeda in Numbers</h3>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="text-3xl font-black text-brand">--</h4>
                  <p className="text-xs text-muted-text">Verified Doctors</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-brand">--</h4>
                  <p className="text-xs text-muted-text">Happy Patients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-brand">--</h4>
                  <p className="text-xs text-muted-text">Successful Consultations</p>
                </div>
              </div>
            </div>
          </section>
          =========================================
        */}

        {/* 
          =========================================
          PLACEHOLDER: Team Members Section
          (To be populated with photos and bios of the founding/medical advisory team)
          
          <section className="py-16 bg-bg-soft dark:bg-[#101c0f]/40">
            <div className="max-w-5xl mx-auto px-6">
              <h3 className="text-center text-xl font-bold mb-10">Our Leadership Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl border border-line-custom">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h4 className="font-bold">Team Member Name</h4>
                  <p className="text-xs text-muted-text">Co-founder & Role</p>
                </div>
              </div>
            </div>
          </section>
          =========================================
        */}

        {/* 
          =========================================
          PLACEHOLDER: Testimonials Section
          (To be populated when verified and structured patient stories are compiled)
          
          <section className="py-16 bg-white dark:bg-[#0a120a]">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="text-xl font-bold mb-8">What Our Community Says</h3>
              <p className="text-xs italic text-muted-text">Verification of feedback logs pending.</p>
            </div>
          </section>
          =========================================
        */}

        {/* ============ 16. FAQ SECTION ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a] border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Common Inquiries</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Frequently Asked Questions</h2>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  className="group bg-bg-soft dark:bg-[#101c0f]/40 border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden hover:border-brand/35 transition-colors"
                >
                  <summary className="flex justify-between items-center font-bold text-sm md:text-base text-ink dark:text-white cursor-pointer select-none">
                    <span>{faq.q}</span>
                    <span className="transition duration-300 group-open:-rotate-180 text-muted-text group-open:text-brand">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-line-custom dark:border-[#1d2a1a] text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 17. CONTACT INFORMATION ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2 mb-10">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              
              {/* Email */}
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-2xl flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5">Email Support</h4>
                  <p className="text-[11px] text-body-text dark:text-[#aebba8] font-bold">[email]</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-2xl flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5">Call Support</h4>
                  <p className="text-[11px] text-body-text dark:text-[#aebba8] font-bold">[phone]</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-2xl flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5">Support Hours</h4>
                  <p className="text-[11px] text-body-text dark:text-[#aebba8] font-medium leading-none mt-1">
                    Monday - Saturday<br/>
                    <span className="font-bold text-[10px]">10:00 AM - 6:00 PM IST</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 18. MEDICAL DISCLAIMER ============ */}
        <section className="py-12 bg-white dark:bg-[#0a120a] border-t border-line-custom dark:border-[#1d2a1a]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex gap-4 items-start max-w-3xl mx-auto">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-red-700 dark:text-red-400 mb-1">Medical Disclaimer</h4>
                <p className="text-[10px] text-red-600 dark:text-red-300 leading-relaxed font-semibold">
                  Sociveda consultations and digital records are not a substitute for physical emergency medical care. In case of a medical emergency or acute life-threatening situation, please contact your nearest hospital or emergency services immediately. Online homeopathic consultations are supplementary support based solely on the details, symptoms, and health histories shared by the patient during the consult session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 19. CALL TO ACTION ============ */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand to-[#0ea98b] dark:from-[#101c0f] dark:to-[#0a120a] z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Start Your Holistic Health Journey Today
            </h2>
            <p className="text-white/80 mb-12 text-xs md:text-sm max-w-xl mx-auto font-medium">
              Join thousands of patients across India consulting with verified homeopathic practitioners from the comfort of their homes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/book" 
                className="w-[280px] h-12 bg-white text-brand hover:bg-[#f4f9f3] text-[10px] sm:text-xs font-bold flex items-center justify-center rounded-xl shadow-lg hover:scale-[1.02] transition-all p-3 gap-1.5"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Book your consultation with a verified homeopathic doctor today
              </Link>
              
              <Link 
                href="/join" 
                className="w-[280px] h-12 border border-white/40 text-white hover:bg-white/10 text-[10px] sm:text-xs font-bold flex items-center justify-center rounded-xl transition-all p-3 gap-1.5"
              >
                <Stethoscope className="w-4 h-4 shrink-0" />
                Join Sociveda and connect with patients across India
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
