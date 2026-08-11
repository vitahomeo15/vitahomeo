import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Heart, 
  Shield, 
  Award, 
  Globe, 
  Clock, 
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

export const metadata: Metadata = {
  title: "About Us | VitaHomeo",
  description: "Learn more about VitaHomeo. We are dedicated to connecting patients across India with verified homeopathic doctors for safe, private, and online care.",
  alternates: {
    canonical: "https://www.vitahomeo.com/about",
  },
};

export default function AboutPage() {
  // Trust Badges for Hero Section
  const trustBadges = [
    { icon: <Scale className="w-5 h-5" />, text: "Affordable Pricing" },
    { icon: <Award className="w-5 h-5" />, text: "Verified Doctors" },
    { icon: <Lock className="w-5 h-5" />, text: "Secure Platform" },
    { icon: <Globe className="w-5 h-5" />, text: "Pan-India Access" }
  ];

  // What We Do list
  const whatWeDoList = [
    "Connect patients with verified homeopathic specialists",
    "Enable convenient online consultations 24/7",
    "Consult via secure video or audio sessions",
    "Deliver signed digital prescriptions safely",
    "Support monthly follow-up consultations in one click",
    "Keep patient history and records fully private"
  ];

  // How VitaHomeo Works flow
  const howItWorksSteps = [
    { step: "1", title: "Choose a Doctor", desc: "Browse available verified homeopathic practitioners in our directory.", icon: <Search className="w-5 h-5" /> },
    { step: "2", title: "Book Appointment", desc: "Select a convenient date and time slot that fits your schedule.", icon: <Calendar className="w-5 h-5" /> },
    { step: "3", title: "Pay Securely", desc: "Pay consultation fees directly and safely with upfront pricing.", icon: <CreditCard className="w-5 h-5" /> },
    { step: "4", title: "Consult Online", desc: "Meet your doctor over a secure call right inside your browser.", icon: <Video className="w-5 h-5" /> },
    { step: "5", title: "Get Prescription", desc: "Receive your constitutional prescription digitally post-session.", icon: <FileText className="w-5 h-5" /> },
    { step: "6", title: "Schedule Follow-up", desc: "Book review sessions easily with the same practitioner.", icon: <MessageSquare className="w-5 h-5" /> }
  ];

  // Why Choose VitaHomeo grid advantages
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
    { icon: <Scale className="w-5 h-5 text-brand" />, label: "Ethical Healthcare", desc: "Promoting constitutional care without exaggerated or fabricated claims." },
    { icon: <Globe className="w-5 h-5 text-brand" />, label: "Accessibility", desc: "Reaching urban and rural areas across India equally." },
    { icon: <Lock className="w-5 h-5 text-brand" />, label: "Privacy", desc: "Absolute confidentiality for patient records and virtual consults." },
    { icon: <Zap className="w-5 h-5 text-brand" />, label: "Continuous Improvement", desc: "Always upgrading technology to refine the patient experience." }
  ];

  // Doctor Verification Steps
  const verificationSteps = [
    { label: "Educational Qualification", desc: "Vetting BHMS/DHMS/MD (Homeopathy) degrees from recognized universities." },
    { label: "Medical Registration", desc: "Verifying credentials with state medical councils or national commission boards." },
    { label: "Identity Verification", desc: "Confirming identity using government-issued photo identification documents." },
    { label: "Experience Review", desc: "Reviewing professional history and past clinical practice records." },
    { label: "Profile Approval", desc: "Activating the profile on the platform only after successful checks." }
  ];

  // FAQ Accordion items
  const faqs = [
    { q: "How do I book a consultation?", a: "To book, simply select your preferred doctor, select an available date and time slot, make the secure payment, and check your dashboard for the meeting details." },
    { q: "Are the doctors on VitaHomeo verified?", a: "Yes, every homeopathic doctor goes through a rigorous multi-step verification process checking their medical registration, educational degrees, and professional experience before joining our network." },
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
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/5 to-transparent rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Who We Are
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink dark:text-white leading-tight mb-6 font-display">
              Healthcare That <span className="text-brand">Reaches Everyone</span>
            </h1>
            <p className="text-base md:text-lg text-body-text dark:text-[#aebba8] leading-relaxed max-w-2xl mx-auto mb-12">
              VitaHomeo connects patients with verified, experienced homeopathic doctors through affordable, secure, and convenient online consultations.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2.5 p-4 rounded-card bg-white dark:bg-[#141e14]/80 border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
                  <span className="text-brand shrink-0">{badge.icon}</span>
                  <span className="text-xs font-semibold text-ink dark:text-white text-left leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 2. OUR STORY ============ */}
        <section className="py-24 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-[#e6ece6] dark:border-[#1c271c]/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Genesis</span>
                <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 mb-4 leading-tight font-display">Our Story</h2>
              </div>
              <div className="md:col-span-7 text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed space-y-4 font-medium">
                <p>
                  Finding a trusted, experienced homeopathic practitioner often presents significant hurdles. Many patients across India face long travel times to specialized clinics, high consultation costs, or find it difficult to fit physical visits into busy daily schedules.
                </p>
                <p>
                  We created VitaHomeo to address these exact limitations. By taking homeopathic care online, we provide patients in any city or village with a direct path to verified specialists, digital prescriptions, and continuity of care, without travel stress or clinic waiting times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3. MISSION & VISION ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Mission */}
            <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-8 hover:shadow-floating-premium transition-all duration-300 shadow-card-premium">
              <div className="w-12 h-12 rounded-xl bg-bg-soft dark:bg-[#101c0f] text-brand flex items-center justify-center mb-6 border border-line-custom/30 dark:border-brand/10">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3 font-display">Our Mission</h3>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Our mission is to make trusted homeopathic healthcare accessible, affordable, and convenient through secure digital technology, while strictly adhering to ethical medical practices and constitutional standards of care.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-8 hover:shadow-floating-premium transition-all duration-300 shadow-card-premium">
              <div className="w-12 h-12 rounded-xl bg-bg-soft dark:bg-[#101c0f] text-brand flex items-center justify-center mb-6 border border-line-custom/30 dark:border-brand/10">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white mb-3 font-display">Our Vision</h3>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Our vision is to become India&apos;s most trusted digital homeopathic healthcare platform, bridging the healthcare divide and enabling individuals to benefit from holistic treatment options safely from their own homes.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 5. WHAT WE DO ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Operations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">What We Do</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {whatWeDoList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-card border border-[#e6ece6] dark:border-[#1c271c] bg-white dark:bg-[#141e14] shadow-card-premium">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm font-semibold text-body-text dark:text-[#aebba8]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 6. HOW VITAHOMEO WORKS ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Step-By-Step</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">How VitaHomeo Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card shadow-card-premium hover:shadow-floating-premium hover:border-brand/45 transition-all duration-300">
                  <div className="absolute top-3 left-3 text-[10px] font-bold text-brand/40 dark:text-brand/30">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#101c0f] text-brand flex items-center justify-center mb-5 mt-2 border border-line-custom/30 dark:border-brand/10">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-2 font-display">{step.title}</h4>
                  <p className="text-[10px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 7. WHY CHOOSE VITAHOMEO ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Why Choose VitaHomeo</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {advantages.map((adv, idx) => (
                <div key={idx} className="border border-[#e6ece6] dark:border-[#1c271c] bg-white dark:bg-[#141e14] p-6 rounded-card shadow-card-premium hover:shadow-floating-premium hover:border-brand/35 transition-all duration-300">
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-2 font-display">{adv.title}</h4>
                  <p className="text-[10px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 8. FOR PATIENTS & FOR DOCTORS ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* For Patients */}
            <div className="bg-[#F8FAF7] dark:bg-[#141e14]/50 border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-8 flex flex-col justify-between hover:shadow-floating-premium transition-all duration-300 shadow-card-premium">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-widest">Tailored Care</span>
                <h3 className="text-2xl font-bold text-ink dark:text-white mt-2 mb-6 font-display">For Patients</h3>
                <ul className="space-y-4 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-medium mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Access verified homeopathic experts online from home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Affordable, upfront pricing with no hidden charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Secure medical consultations and encrypted health files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>Convenient digital prescriptions and follow-ups</span>
                  </li>
                </ul>
              </div>
              <Link href="/doctors" className="w-full h-11 rounded-button bg-brand text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-brand-hover hover:shadow-button-premium transition-all">
                <Stethoscope className="w-4 h-4" /> Find a Doctor
              </Link>
            </div>

            {/* For Doctors */}
            <div className="bg-[#F8FAF7] dark:bg-[#141e14]/50 border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-8 flex flex-col justify-between hover:shadow-floating-premium transition-all duration-300 shadow-card-premium">
              <div>
                <span className="text-xs font-bold text-[#0ea98b] uppercase tracking-widest">Expand Practice</span>
                <h3 className="text-2xl font-bold text-ink dark:text-white mt-2 mb-6 font-display">For Doctors</h3>
                <ul className="space-y-4 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-medium mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Grow your patient network across India remotely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Flexible consulting hours matching your schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Fair consultation billing and secure payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0ea98b] shrink-0 mt-0.5" />
                    <span>Digital records management & professional profile page</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] text-muted-text dark:text-[#71806c] mb-4 text-center leading-normal">
                  Interested in joining? Click below to submit your credentials and verification details.
                </p>
                <Link href="/join" className="w-full h-11 rounded-button border border-[#0ea98b]/50 text-[#0ea98b] dark:text-[#32d8b8] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0ea98b]/5 transition-all">
                  <Stethoscope className="w-4 h-4" /> Join as Practitioner
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 10. DOCTOR VERIFICATION PROCESS ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Quality Assurance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Doctor Verification Process</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium leading-relaxed">
                Before consulting, every doctor must pass a strict 5-step background verification to confirm credentials and validity:
              </p>
            </div>

            <div className="max-w-2xl mx-auto flex flex-col gap-6">
              {verificationSteps.map((step, idx) => (
                <div key={idx} className="flex gap-5 p-6 rounded-card bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
                  <div className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1.5 font-display">{step.label}</h4>
                    <p className="text-xs text-body-text dark:text-[#aebba8] font-medium leading-normal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 11. OUR CORE VALUES ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our DNA</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card shadow-card-premium flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#101c0f] border border-line-custom/20 flex items-center justify-center shrink-0 text-brand">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1.5 font-display">{val.label}</h4>
                    <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 12. PRIVACY & SECURITY & QUALITY STANDARDS ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Patient Privacy & Data Security */}
            <div className="p-8 rounded-card bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
              <div className="flex items-center gap-3 mb-5">
                <Lock className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-ink dark:text-white font-display">Patient Privacy & Data Security</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Your medical files and personal consultation records are stored with high security. We implement encryption standards to keep your logs and consult history safe. VitaHomeo maintains a strict policy: we never share or rent patient medical details or contact information with unauthorized third parties.
              </p>
            </div>

            {/* Quality Standards */}
            <div className="p-8 rounded-card bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-ink dark:text-white font-display">Quality Standards</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                We believe in providing access to quality homeopathic healthcare. This is ensured through mandatory credentials vetting for all doctors, guidelines promoting ethical and evidence-informed consults, completely clear pricing patterns, and a continuous focus on maintaining patient satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 14. TRANSPARENT PRICING & OUR COMMITMENT ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Transparent Pricing */}
            <div className="p-8 rounded-card bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
              <div className="flex items-center gap-3 mb-5">
                <CreditCard className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-ink dark:text-white font-display">Transparent Pricing</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                At VitaHomeo, we believe in honesty. Consultation pricing is listed directly on each doctor&apos;s profile page, so you know exactly what the charge is before you finalize a booking. There are no registration fees, platform charges, or hidden fees.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="p-8 rounded-card bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-ink dark:text-white font-display">Our Commitment</h3>
              </div>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                We commit to making homeopathic healthcare affordable, accessible, reliable, transparent, and strictly patient-focused. Our team works continuously to refine the platform features, ensuring smooth video/audio sessions and secure prescription delivery.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 16. FAQ SECTION ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Common Inquiries</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Frequently Asked Questions</h2>
            </div>

            <div className="flex flex-col gap-5 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  className="group bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-6 [&_summary::-webkit-details-marker]:hidden hover:border-brand/35 hover:shadow-card-premium transition-all duration-300"
                >
                  <summary className="flex justify-between items-center font-bold text-sm md:text-base text-ink dark:text-white cursor-pointer select-none font-display">
                    <span>{faq.q}</span>
                    <span className="transition duration-300 group-open:-rotate-180 text-muted-text group-open:text-brand">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-[#e6ece6] dark:border-[#1c271c] text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 17. CONTACT INFORMATION ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 mb-12 font-display">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              
              {/* Email */}
              <div className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card flex gap-4 items-center shadow-card-premium">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#101c0f] border border-line-custom/20 text-brand flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5 font-display">Email Support</h4>
                  <a href="mailto:vitahomeo15@gmail.com" className="text-[11px] text-body-text dark:text-[#aebba8] font-bold hover:text-brand transition-colors block">vitahomeo15@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card flex gap-4 items-center shadow-card-premium">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#101c0f] border border-line-custom/20 text-brand flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5 font-display">Call Support</h4>
                  <a href="tel:+917765991145" className="text-[11px] text-body-text dark:text-[#aebba8] font-bold hover:text-brand transition-colors block">+91 77659 91145</a>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-6 rounded-card flex gap-4 items-center shadow-card-premium">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#101c0f] border border-line-custom/20 text-brand flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-0.5 font-display">Support Hours</h4>
                  <p className="text-[11px] text-body-text dark:text-[#aebba8] font-medium leading-none mt-1">
                    Monday - Sunday<br/>
                    <span className="font-bold text-[10px]">9:00 AM - 9:00 PM IST</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 18. MEDICAL DISCLAIMER ============ */}
        <section className="py-12 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-[#e6ece6] dark:border-[#1c271c]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 rounded-card p-6 flex gap-4 items-start max-w-3xl mx-auto">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-red-700 dark:text-red-400 mb-1 font-display">Medical Disclaimer</h4>
                <p className="text-[10px] text-red-600 dark:text-red-300 leading-relaxed font-semibold">
                  VitaHomeo consultations and digital records are not a substitute for physical emergency medical care. In case of a medical emergency or acute life-threatening situation, please contact your nearest hospital or emergency services immediately. Online homeopathic consultations are supplementary support based solely on details, symptoms, and health histories shared by the patient during the consult session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 19. CALL TO ACTION ============ */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark dark:from-[#101c0f] dark:to-[#0a120a] z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
              Start Your Holistic Health Journey Today
            </h2>
            <p className="text-white/80 mb-12 text-xs md:text-sm max-w-xl mx-auto font-medium">
              Consult with verified homeopathic practitioners from the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                href="/doctors" 
                className="px-8 py-4 bg-white text-brand hover:bg-[#F5F8F5] text-xs font-bold flex items-center justify-center rounded-button shadow-button-premium hover:scale-[1.02] transition-all gap-1.5"
              >
                <Stethoscope className="w-4.5 h-4.5 shrink-0" />
                Find a Doctor
              </Link>
              
              <Link 
                href="/join" 
                className="px-8 py-4 border border-white/40 text-white hover:bg-white/10 text-xs font-bold flex items-center justify-center rounded-button transition-all gap-1.5"
              >
                <Stethoscope className="w-4.5 h-4.5 shrink-0" />
                Join as a Doctor
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
