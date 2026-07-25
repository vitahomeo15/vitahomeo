"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, ChevronDown, ChevronUp, Clock, FileText, ArrowRight, Activity, Video } from "lucide-react";

export default function TreatmentHubPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // [PLACEHOLDER] Statistics data for outcomes and trust bar
  const stats = {
    consultations: "10,000+",
    rating: "4.9★",
    conditions: "250+",
    outcomes: "94%"
  };

  const categories = [
    {
      id: "chronic-diseases",
      icon: "🩺",
      title: "Chronic Diseases",
      desc: "Metabolic and long-term constitutional support.",
      conditions: [
        { name: "Diabetes Support", slug: "diabetes-support" },
        { name: "Hypertension", slug: "hypertension" },
        { name: "Arthritis Care", slug: "arthritis" }
      ]
    },
    {
      id: "child-health",
      icon: "👶",
      title: "Child Health",
      desc: "Gentle remedies for growing immune systems.",
      conditions: [
        { name: "Recurrent Infections", slug: "recurrent-infections" },
        { name: "Behavioral Concerns", slug: "behavioural-concerns" },
        { name: "Growth & Development", slug: "growth-development" },
        { name: "Child Allergies", slug: "child-allergies" }
      ]
    },
    {
      id: "mental-wellness",
      icon: "🧠",
      title: "Mental Wellness",
      desc: "Restore cognitive and emotional balance naturally.",
      conditions: [
        { name: "Anxiety", slug: "anxiety" },
        { name: "Depression", slug: "depression" },
        { name: "Stress & Burnout", slug: "stress-burnout" },
        { name: "Sleep Disorders", slug: "sleep-disorders" }
      ]
    },
    {
      id: "skin-care",
      icon: "🌿",
      title: "Skin Care",
      desc: "Deep healing for dermatology concerns from within.",
      conditions: [
        { name: "Eczema", slug: "eczema" },
        { name: "Psoriasis", slug: "psoriasis" },
        { name: "Acne", slug: "acne" },
        { name: "Vitiligo", slug: "vitiligo" },
        { name: "Urticaria", slug: "urticaria" }
      ]
    },
    {
      id: "respiratory",
      icon: "🫁",
      title: "Respiratory",
      desc: "Clear airways and allergen desensitization.",
      conditions: [
        { name: "Allergic Rhinitis", slug: "allergic-rhinitis" },
        { name: "Asthma", slug: "asthma" },
        { name: "Sinusitis", slug: "sinusitis" },
        { name: "Food Allergies", slug: "food-allergies" }
      ]
    },
    {
      id: "hair",
      icon: "💇",
      title: "Hair",
      desc: "Target follicular health and systemic root causes.",
      conditions: [
        { name: "Hair Fall", slug: "hair-fall" },
        { name: "Alopecia", slug: "alopecia" },
        { name: "Dandruff", slug: "dandruff" },
        { name: "Premature Greying", slug: "premature-greying" }
      ]
    },
    {
      id: "womens-health",
      icon: "❤️",
      title: "Women's Health",
      desc: "Hormonal balance and cycle regulation care.",
      conditions: [
        { name: "PCOS / PCOD", slug: "pcos-pcod" },
        { name: "Menstrual Disorders", slug: "menstrual-disorders" },
        { name: "Fertility Support", slug: "fertility-support" },
        { name: "Menopause", slug: "menopause" }
      ]
    },
    {
      id: "digestive",
      icon: "🍽",
      title: "Digestive Health",
      desc: "Restoring gut lining integrity and metabolic harmony.",
      conditions: [
        { name: "IBS", slug: "ibs" },
        { name: "Acidity & GERD", slug: "acidity-gerd" },
        { name: "Ulcerative Colitis", slug: "ulcerative-colitis" },
        { name: "Constipation", slug: "constipation" }
      ]
    },
    {
      id: "thyroid",
      icon: "⚖",
      title: "Thyroid",
      desc: "Endocrine balance and metabolic support.",
      conditions: [
        { name: "Thyroid Disorders", slug: "thyroid-disorders" }
      ]
    },
    {
      id: "joint-pain",
      icon: "🦴",
      title: "Joint Pain",
      desc: "Reducing chronic inflammation and structural wear.",
      conditions: [
        { name: "Arthritis", slug: "arthritis" },
        { name: "Joint Pain General", slug: "joint-pain-general" }
      ]
    },
    {
      id: "senior-care",
      icon: "👴",
      title: "Senior Care",
      desc: "Support for general vitality and joint mobility.",
      conditions: [
        { name: "Senior General Wellness", slug: "senior-general-wellness" }
      ]
    },
    {
      id: "immunity",
      icon: "🧬",
      title: "Immunity",
      desc: "Strengthen natural systemic defense systems.",
      conditions: [
        { name: "Immunity Support", slug: "immunity-support" }
      ]
    }
  ];

  const processSteps = [
    { label: "Book Consultation", desc: "Select timings and request a slot." },
    { label: "Complete Health Questionnaire", desc: "Share details on your case history." },
    { label: "Video Consultation", desc: "Private encrypted call with the doctor." },
    { label: "Constitutional Analysis", desc: "Doctor evaluates systemic root causes." },
    { label: "Digital Prescription", desc: "Access customized prescription from your panel." },
    { label: "Medicine Delivery", desc: "Remedies shipped securely (Optional)." },
    { label: "Monthly Follow-up", desc: "Regular reviews to map body response." },
    { label: "Recovery Tracking", desc: "Continuous improvement tracing." }
  ];

  const faqs = [
    { q: "Does homeopathy really work?", a: "Yes. Homeopathy operates on the principle of individual constitutional prescribing, utilizing highly diluted natural substances to trigger the body's self-healing mechanisms. Modern clinical studies continue to document its efficacy." },
    { q: "Is consultation online?", a: "Absolutely. SociVeda provides a 100% virtual clinic where you can schedule sessions, join encrypted video consultations, and store digital records safely." },
    { q: "How long is treatment?", a: "Treatment duration varies. Acute conditions can respond in days, whereas chronic conditions like eczema, PCOS, or migraines typically require 3 to 6 months of constitutional care." },
    { q: "Can I upload reports?", a: "Yes. During or after booking, you can upload clinical lab reports directly to your profile for the doctor to review." },
    { q: "Are medicines delivered?", a: "Yes. SociVeda offers optional home delivery of original, verified homeopathic remedies across India." },
    { q: "Is follow-up included?", a: "Yes. Constitutional plans typically include monthly follow-up reviews to track your recovery progress." },
    { q: "Can I choose my doctor?", a: "Yes. You can consult with our verified practitioners based on their specialty areas." },
    { q: "How much does consultation cost?", a: "Consultation fees are displayed transparently before booking. Dr. Arun Kumar's session fee is ₹499." },
    { q: "Can I get prescriptions?", a: "Yes. A signed, digital medical prescription is saved securely in your patient profile after each session." },
    { q: "Are doctors verified?", a: "Yes. All doctors undergo strict qualification and registration council verification before onboarding." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full space-y-24 pb-20 pt-28">
        
        {/* ============ 1. HERO SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Constitutional Homeopathy Hub
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white leading-[1.05] tracking-tight">
                Complete Homeopathic Care <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#0ea98b]">Designed Around Your Health</span>
              </h1>
              <p className="text-base md:text-lg text-body-text dark:text-[#aebba8] leading-relaxed font-semibold max-w-xl">
                Consult experienced homeopathic doctors online. Personalized constitutional treatment. Follow-up care included.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  href="/book" 
                  className="px-8 py-4 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-sm rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Consultation
                </Link>
                <a 
                  href="#categories" 
                  className="px-8 py-4 border border-brand/50 text-brand hover:bg-brand/5 font-bold text-sm rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  Find Your Condition
                </a>
              </div>
            </div>

            {/* Right: Mockup Hero Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[3/2] rounded-[32px] overflow-hidden border border-line-custom dark:border-[#1d2a1a] shadow-md bg-white dark:bg-[#101c0f]">
                <img 
                  src="/treatment-hero.jpg" 
                  alt="SociVeda Treatment Consultation mockup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>


        {/* ============ 2. TRUST BAR SECTION ============ */}
        <section className="bg-bg-soft dark:bg-[#0e1a0d]/30 border-y border-line-custom dark:border-[#1d2a1a] py-6 overflow-x-auto">
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-nowrap md:flex-wrap items-center justify-between gap-6 text-[11px] font-black text-ink dark:text-white uppercase tracking-wider whitespace-nowrap min-w-[800px] md:min-w-0">
            {/* [PLACEHOLDER] Stats row */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>{stats.consultations} Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>Certified Doctors Only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>{stats.rating} Patient Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>Secure Video Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>Digital Prescriptions</span>
            </div>
          </div>
        </section>


        {/* ============ 3. WHY HOMEOPATHY WORKS SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: educational list */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white leading-tight">
                Why Choose Constitutional Homeopathy?
              </h2>
              <p className="text-sm font-semibold text-brand tracking-wide uppercase">
                We treat the root cause — not just symptoms.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Individual analysis", desc: "No two patients receive the exact same dilution; every remedy is customized." },
                  { title: "Lifestyle assessment", desc: "Evaluates physical environment, metabolic rhythms, and stressors." },
                  { title: "Emotional history", desc: "Homeopathy acknowledges the mind-body connection in somatic illnesses." },
                  { title: "Long-term healing", desc: "Builds deep system defenses rather than temporarily blocking pathways." },
                  { title: "Minimal side effects", desc: "Prescribed in highly micro-diluted dynamic quantities." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-ink dark:text-white block">{item.title}</span>
                      <span className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-0.5 block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: SVG/CSS Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] aspect-square rounded-[36px] bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] shadow-sm flex flex-col justify-center items-center p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />
                <div className="w-20 h-20 rounded-full bg-[#0ea98b]/10 text-[#0ea98b] flex items-center justify-center mb-6">
                  <Activity className="w-10 h-10" />
                </div>
                <h3 className="text-base font-extrabold text-ink dark:text-white mb-2">Constitutional Prescribing</h3>
                <p className="text-xs text-body-text dark:text-[#aebba8] text-center leading-relaxed font-semibold max-w-[280px]">
                  Rather than treating a headache or skin breakout in isolation, we study your full biological history to restore systemic equilibrium.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ============ 4. TREATMENT CATEGORIES SECTION ============ */}
        <section id="categories" className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">Conditions Directory</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white">Treatment Categories</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
              Browse our departments and click on any specific condition to read symptoms, recovery durations, and expert patient guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm hover:shadow-md hover:border-brand/35 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-base font-black text-ink dark:text-white">{cat.title}</h3>
                  </div>
                  
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                    {cat.desc}
                  </p>

                  {/* Clickable Popular Conditions list (NOT pills - real links) */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Popular Conditions:</span>
                    <ul className="space-y-1.5">
                      {cat.conditions.map((cond, cIdx) => (
                        <li key={cIdx}>
                          <Link 
                            href={`/treatments/${cond.slug}`}
                            className="text-xs font-bold text-brand hover:underline flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand/50" />
                            <span>{cond.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                  {/* Dynamic link to the category listing page */}
                  <Link 
                    href={`/treatments/category/${cat.id}`}
                    className="text-xs font-bold text-brand hover:underline flex items-center gap-1"
                  >
                    View Treatments <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ============ 6. TREATMENT PROCESS SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">How it Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white">Treatment Process</h2>
          </div>

          {/* Vertical/Horizontal Connected Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-brand/20 -translate-x-1/2 hidden sm:block" />
            
            <div className="space-y-8">
              {processSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}>
                    
                    {/* Left/Right content card */}
                    <div className="w-full sm:w-[45%] p-5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[20px] shadow-sm">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-black text-ink dark:text-white">{step.label}</span>
                      </div>
                      <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold pl-8">
                        {step.desc}
                      </p>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white dark:border-[#0a120a] -translate-x-1/2 hidden sm:block" />

                    {/* Empty spacer block for balance */}
                    <div className="w-full sm:w-[45%] hidden sm:block" />

                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ============ 7. MEET YOUR DOCTORS SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">Verified Staff</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white">Meet Our Doctors</h2>
          </div>

          {/* Centered Doctor Card */}
          <div className="flex justify-center">
            {/* [PLACEHOLDER] Verified Doctor Listing */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 shadow-sm w-full max-w-lg space-y-6">
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-brand bg-white shrink-0">
                  <img src="/Doc photo/dr.arun kr.jpeg" alt="Dr. Arun Kumar" className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h3 className="text-lg font-black text-ink dark:text-white">Dr. Arun Kumar</h3>
                  <span className="text-xs text-muted-text dark:text-[#71806c] font-bold block">DHMS · Constitutional Specialist</span>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-xs font-bold text-body-text dark:text-[#aebba8]">
                    <Clock className="w-4 h-4 text-brand" />
                    <span>19 Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-body-text dark:text-[#aebba8] border-y border-line-custom/50 dark:border-[#1d2a1a]/50 py-4">
                <div>
                  <span className="text-[10px] text-muted-text uppercase tracking-wider block font-bold">Specialization</span>
                  <span className="font-bold text-ink dark:text-white">Constitutional Homeopathy</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-text uppercase tracking-wider block font-bold">Languages</span>
                  <span>English, Hindi</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-text uppercase tracking-wider block font-bold">Patients Treated</span>
                  <span>15,000+ Case Studies</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-text uppercase tracking-wider block font-bold">Consultation Fee</span>
                  <span className="font-bold text-brand">₹499</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/book" 
                  className="flex-1 h-11 bg-brand hover:bg-brand-dark text-white font-bold text-xs rounded-xl flex items-center justify-center transition-all shadow-sm"
                >
                  Book Consultation
                </Link>
                <Link 
                  href="/doctors/dr-arun-kumar" 
                  className="flex-1 h-11 border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-ink dark:text-white font-bold text-xs rounded-xl flex items-center justify-center transition-all"
                >
                  View Full Profile
                </Link>
              </div>

            </div>
          </div>
        </section>


        {/* ============ 8. TREATMENT OUTCOMES SECTION ============ */}
        <section className="bg-bg-soft dark:bg-[#0e1a0d]/30 border-y border-line-custom dark:border-[#1d2a1a] py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* [PLACEHOLDER] Stats cards */}
              <div className="p-6 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px]">
                <span className="text-3xl md:text-4xl font-black text-brand block">{stats.outcomes}</span>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider block mt-2">Improvement Rate</span>
              </div>
              <div className="p-6 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px]">
                <span className="text-3xl md:text-4xl font-black text-[#0ea98b] block">{stats.rating}</span>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider block mt-2">Patient Rating</span>
              </div>
              <div className="p-6 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px]">
                <span className="text-3xl md:text-4xl font-black text-ink dark:text-white block">{stats.consultations}</span>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider block mt-2">Consultations</span>
              </div>
              <div className="p-6 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px]">
                <span className="text-3xl md:text-4xl font-black text-brand block">{stats.conditions}</span>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider block mt-2">Conditions Managed</span>
              </div>
            </div>
          </div>
        </section>


        {/* ============ 10. FAQ SECTION ============ */}
        <section className="max-w-3xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">Inquiries</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white">FAQs</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-ink dark:text-white cursor-pointer select-none hover:bg-bg-soft/40 dark:hover:bg-[#162315]/20"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand" /> : <ChevronDown className="w-4 h-4 text-brand" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold border-t border-line-custom/50 dark:border-[#1d2a1a]/50 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>


        {/* ============ 11. MEDICAL DISCLAIMER ============ */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center">
            <p className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
              <strong>Medical Disclaimer:</strong> Homeopathic treatment plans are individualized. Results vary depending on diagnosis, duration, overall health, and adherence to treatment. Always seek emergency medical care for serious conditions.
            </p>
          </div>
        </section>


        {/* ============ 12. FINAL CTA ============ */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-brand to-[#0ea98b] text-white rounded-[32px] p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto font-semibold mb-8">
              Book a constitutional teleconsultation with Dr. Arun Kumar today and get customized remedies delivered to your home.
            </p>

            <Link 
              href="/book" 
              className="px-8 py-3.5 bg-white text-brand hover:bg-[#f4f9f3] active:scale-[0.98] transition-all font-bold text-sm rounded-xl inline-flex items-center gap-1.5 shadow-sm"
            >
              Book Your Consultation Today
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
