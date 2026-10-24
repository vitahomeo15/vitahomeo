import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { treatmentsData } from "@/data/treatmentsData";
import { TreatmentDirectory, ConditionCardData } from "@/components/treatments/TreatmentDirectory";
import { TreatmentReviewSection } from "@/components/treatments/TreatmentReviewSection";
import { 
  Check, 
  ChevronDown, 
  Clock, 
  ArrowRight, 
  Activity, 
  Video, 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  Award, 
  Leaf, 
  PackageCheck, 
  Star, 
  Stethoscope, 
  Sparkles,
  HeartHandshake,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Treatment Directory & Clinical Library | VitaHomeo",
  description: "Explore 36+ evidence-informed constitutional homeopathic treatments for chronic diseases, skin disorders, women's health (PCOS), allergies, and gut health. Consult verified DHMS/BHMS doctors online.",
  keywords: [
    "homeopathy treatment",
    "constitutional homeopathy",
    "homeopathic doctor online",
    "homeopathy for eczema",
    "homeopathy for pcos",
    "homeopathy for arthritis",
    "dr arun kumar homeopath",
    "vitahomeo clinic"
  ],
  alternates: {
    canonical: "https://www.vitahomeo.com/treatment",
  },
  openGraph: {
    title: "Homeopathy Treatment Directory & Clinical Library | VitaHomeo",
    description: "Explore 36+ evidence-informed constitutional homeopathic treatments. Consult verified specialists with 19+ years experience.",
    url: "https://www.vitahomeo.com/treatment",
    siteName: "VitaHomeo",
    images: [
      {
        url: "https://www.vitahomeo.com/treatment-hero.jpg",
        width: 1200,
        height: 630,
        alt: "VitaHomeo Treatment Library",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeopathy Treatment Directory & Clinical Library | VitaHomeo",
    description: "Personalized constitutional care for chronic ailments. Verified doctors online.",
    images: ["https://www.vitahomeo.com/treatment-hero.jpg"],
  },
};

export default function TreatmentHubPage() {
  const categoryDefinitions = [
    {
      id: "chronic-diseases",
      icon: "🩺",
      title: "Chronic Diseases",
      desc: "Metabolic and long-term constitutional support.",
      slugs: ["diabetes-support", "hypertension", "arthritis"]
    },
    {
      id: "skin-care",
      icon: "🌿",
      title: "Skin Care",
      desc: "Deep healing for dermatology concerns from within.",
      slugs: ["eczema", "psoriasis", "acne", "vitiligo", "urticaria"]
    },
    {
      id: "womens-health",
      icon: "❤️",
      title: "Women's Health",
      desc: "Hormonal balance, fertility, and cycle regulation care.",
      slugs: ["pcos-pcod", "menstrual-disorders", "fertility-support", "menopause"]
    },
    {
      id: "digestive",
      icon: "🍽",
      title: "Digestive Health",
      desc: "Restoring gut lining integrity and metabolic harmony.",
      slugs: ["ibs", "acidity-gerd", "ulcerative-colitis", "constipation"]
    },
    {
      id: "respiratory",
      icon: "🫁",
      title: "Respiratory",
      desc: "Clear airways and allergen desensitization.",
      slugs: ["allergic-rhinitis", "asthma", "sinusitis", "food-allergies"]
    },
    {
      id: "hair",
      icon: "💇",
      title: "Hair & Scalp",
      desc: "Target follicular health and systemic root causes.",
      slugs: ["hair-fall", "alopecia", "dandruff", "premature-greying"]
    },
    {
      id: "child-health",
      icon: "👶",
      title: "Child Health",
      desc: "Gentle remedies for growing immune systems.",
      slugs: ["recurrent-infections", "behavioural-concerns", "growth-development", "child-allergies"]
    },
    {
      id: "mental-wellness",
      icon: "🧠",
      title: "Mental Wellness",
      desc: "Restore cognitive balance and calm nervous system overactivity.",
      slugs: ["anxiety", "depression", "stress-burnout", "sleep-disorders"]
    },
    {
      id: "thyroid",
      icon: "⚖",
      title: "Thyroid Gland",
      desc: "Endocrine balance and metabolic support.",
      slugs: ["thyroid-disorders"]
    },
    {
      id: "joint-pain",
      icon: "🦴",
      title: "Joint Pain",
      desc: "Reducing chronic inflammation and structural wear.",
      slugs: ["joint-pain-general"]
    },
    {
      id: "senior-care",
      icon: "👴",
      title: "Senior Care",
      desc: "Support for general vitality and joint mobility.",
      slugs: ["senior-general-wellness"]
    },
    {
      id: "immunity",
      icon: "🧬",
      title: "Immunity",
      desc: "Strengthen natural systemic defense systems.",
      slugs: ["immunity-support"]
    }
  ];

  // Map all conditions for the interactive TreatmentDirectory
  const allConditionsData: ConditionCardData[] = [];
  const categoryHeaders: { id: string; title: string; icon: string; count: number }[] = [];

  categoryDefinitions.forEach((cat) => {
    let catCount = 0;
    cat.slugs.forEach((slug) => {
      const data = treatmentsData[slug];
      if (data) {
        catCount++;
        allConditionsData.push({
          slug,
          name: data.title,
          category: cat.title,
          categoryId: cat.id,
          categoryIcon: cat.icon,
          symptoms: data.symptoms || [],
          duration: data.duration || "3 to 6 months",
          desc: data.howHelps || cat.desc,
        });
      }
    });
    categoryHeaders.push({
      id: cat.id,
      title: cat.title,
      icon: cat.icon,
      count: catCount,
    });
  });



  const faqs = [
    {
      q: "Does constitutional homeopathy really cure chronic diseases?",
      a: "Constitutional homeopathy works by analyzing an individual's unique biological and psychological traits. Rather than temporarily suppressing inflammation, custom dilutions stimulate the body's natural regulatory and immune defense systems to restore long-term cellular balance."
    },
    {
      q: "Are homeopathic medicines safe? Do they contain steroids or heavy metals?",
      a: "VitaHomeo adheres to strict ethical medical standards. Prescribed remedies are prepared strictly in accordance with official Homeopathic Pharmacopoeia standards. They are 100% non-steroidal, non-addictive, free from chemical toxins, and gentle enough for infants, pregnant women, and elderly patients."
    },
    {
      q: "Can I take homeopathic remedies alongside my ongoing allopathic medicines?",
      a: "Yes. Homeopathic micro-dilutions do not interfere with standard pharmaceutical metabolic pathways. For chronic conditions like hypertension or diabetes, we advise patients never to stop essential allopathic prescriptions abruptly. As constitutional health improves, your primary physician may adjust your dosage."
    },
    {
      q: "How does the online consultation and medicine delivery work?",
      a: "You select a convenient time slot and share your medical history. During a 30-45 minute private video call, the doctor conducts in-depth constitutional case taking. Following the consult, your digital prescription is generated and custom-formulated remedies are dispatched via tracked courier to your doorstep across India."
    },
    {
      q: "How long does it take to see tangible improvement?",
      a: "Acute complaints (like seasonal allergies, indigestion flares, or mild sinus pain) frequently respond within 3 to 7 days. Long-standing chronic complaints (such as eczema, psoriasis, PCOS, or rheumatoid arthritis) typically exhibit structural improvements within 6 to 12 weeks of continuous constitutional care."
    },
    {
      q: "Are the treating doctors verified and qualified?",
      a: "Every doctor on VitaHomeo holds a certified DHMS/BHMS medical degree from recognized institutions and is registered with official State and Central Medical Councils. Our lead practitioner, Dr. Arun Kumar, brings over 19 years of verified clinical experience."
    }
  ];

  // Schema.org Structured Data
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "VitaHomeo Homeopathy Treatment Directory & Clinical Library",
    "url": "https://www.vitahomeo.com/treatment",
    "description": "Comprehensive directory of 36+ constitutional homeopathic treatments and chronic disease management guides.",
    "specialty": "Homeopathy",
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Constitutional Homeopathic Treatments",
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Individualized Constitutional Homeopathy"
        }
      ]
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vitahomeo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Treatments",
        "item": "https://www.vitahomeo.com/treatment"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <Navbar />

      <main className="flex-1 w-full space-y-20 pb-20 pt-28">

        {/* ============ 1. HERO SECTION ============ */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6 pt-4">
          
          <div className="inline-flex items-center gap-2 bg-brand/10 dark:bg-brand/20 text-brand px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mx-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Constitutional Homeopathy Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink dark:text-white leading-[1.08] tracking-tight font-display max-w-3xl mx-auto">
            Root-Cause Healing, <br/>
            <span className="text-brand">Designed for Your Biology.</span>
          </h1>

          <p className="text-base sm:text-lg text-body-text dark:text-[#aebba8] leading-relaxed font-semibold max-w-2xl mx-auto">
            Consult state council registered homeopathic specialists online. In-depth constitutional case taking, 100% non-steroidal customized remedies, and doorstep medicine delivery across India.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a 
              href="#directory" 
              className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold text-sm rounded-button text-center shadow-button-premium hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Search 36+ Conditions
            </a>

            <a 
              href={`https://wa.me/917765991145?text=${encodeURIComponent("Hi VitaHomeo! I would like to book a consultation for homeopathic treatment. Please guide me.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-brand text-brand hover:bg-bg-soft dark:hover:bg-[#162315] font-bold text-sm rounded-button text-center shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Consult via WhatsApp
            </a>
          </div>

        </section>


        {/* ============ 2. CLINICAL SAFETY & TRUST PILLARS ============ */}
        <section className="bg-bg-soft dark:bg-[#0e1a0d]/40 border-y border-line-custom dark:border-[#1d2a1a] py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-ink dark:text-white">Zero Steroids or Toxins</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-0.5 leading-snug">
                    100% natural dynamized dilutions with zero side-effects or hormonal rebound.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-ink dark:text-white">Council Verified Doctors</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-0.5 leading-snug">
                    Qualified DHMS & BHMS physicians with over 19 years of verified clinical experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-ink dark:text-white">Detailed 30-Min Teleconsult</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-0.5 leading-snug">
                    Private video consultations exploring full lifestyle, mental traits, and medical roots.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-ink dark:text-white">Doorstep Courier Delivery</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-0.5 leading-snug">
                    Tamper-proof medical packaging dispatched directly to your home anywhere in India.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ============ 3. INTERACTIVE 36-CONDITION DIRECTORY ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <TreatmentDirectory 
            conditions={allConditionsData} 
            categories={categoryHeaders} 
          />
        </section>


        {/* ============ 4. WHY CONSTITUTIONAL CARE WORKS: COMPARISON ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">The Clinical Advantage</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink dark:text-white">
              Why Choose Constitutional Homeopathy?
            </h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
              Unlike quick-fix chemical suppression that masks symptoms, constitutional care restores cellular harmony at the epigenetic root.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card: Quick Suppression */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-line-custom/60 dark:border-[#1d2a1a]">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                  ⚠️
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-ink dark:text-white">Symptomatic Chemical Suppression</h3>
                  <span className="text-[11px] font-semibold text-muted-text dark:text-[#71806c]">Conventional quick-relief drugs</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Temporarily blocks receptors without repairing metabolic vulnerabilities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Symptoms frequently return with greater intensity once tablets or steroid creams cease.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Potential risk of gut microbiome disruption, liver strain, or hormonal dependency.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Treats identical diseases with identical generic pills, ignoring patient uniqueness.</span>
                </li>
              </ul>
            </div>

            {/* Right Card: Constitutional Homeopathy */}
            <div className="bg-brand/5 dark:bg-[#122312] border-2 border-brand/30 dark:border-brand/40 rounded-[28px] p-6 md:p-8 space-y-5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-3 border-b border-brand/20">
                <div className="w-9 h-9 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-ink dark:text-white">VitaHomeo Constitutional Care</h3>
                  <span className="text-[11px] font-bold text-brand">Individualized Systemic Defense</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs font-semibold text-ink dark:text-white">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✓</div>
                  <span>Evaluates physical temperament, emotional stressors, and inherited family history.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✓</div>
                  <span>Stimulates the immune feedback system so your body naturally heals and maintains equilibrium.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✓</div>
                  <span>Zero steroids, zero synthetic additives, and zero physical dependency over time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✓</div>
                  <span>Long-term resolution with steady reduction in flare-up frequency and intensity.</span>
                </li>
              </ul>
            </div>

          </div>

        </section>


        {/* ============ 5. STEP-BY-STEP PATIENT JOURNEY ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">Seamless Care</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink dark:text-white">
              How Your Treatment Works
            </h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
              From the comfort of your home, experience dedicated medical attention from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Book & Share History",
                desc: "Choose a consultation slot and submit your symptoms, lab reports, and lifestyle details securely.",
                icon: <Calendar className="w-5 h-5 text-brand" />
              },
              {
                step: "02",
                title: "30-Min Video Consult",
                desc: "Meet Dr. Arun Kumar on a private, confidential video call to explore the systemic root causes.",
                icon: <Video className="w-5 h-5 text-brand" />
              },
              {
                step: "03",
                title: "Remedy Dispatch",
                desc: "Personalized German/Indian standard dilutions are custom-formulated and shipped to your doorstep.",
                icon: <PackageCheck className="w-5 h-5 text-brand" />
              },
              {
                step: "04",
                title: "Progress Monitoring",
                desc: "Regular check-ins and follow-up dosage adjustments ensure smooth recovery without recurrence.",
                icon: <HeartHandshake className="w-5 h-5 text-brand" />
              }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-brand/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-brand/30 dark:text-brand/20">{step.step}</span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-ink dark:text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>





        {/* ============ 7. PATIENT & PLATFORM REVIEW SECTION ============ */}
        <TreatmentReviewSection />


        {/* ============ 8. FAQ ACCORDION WITH SCHEMA ============ */}
        <section className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block">Clear Answers</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
              Everything you need to know about constitutional treatment, safety, and digital consultations.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <details 
                key={idx}
                className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl overflow-hidden shadow-sm group transition-all"
              >
                <summary className="w-full px-5 py-4.5 flex items-center justify-between text-left font-bold text-sm text-ink dark:text-white cursor-pointer select-none hover:bg-bg-soft/40 dark:hover:bg-[#162315]/20 [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="text-brand transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

        </section>


        {/* ============ 9. MEDICAL SAFETY DISCLAIMER ============ */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
              <AlertCircle className="w-4 h-4" />
              <span>Official Medical Safety Disclaimer</span>
            </div>
            <p className="text-[11px] text-amber-800/90 dark:text-amber-300/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Homeopathic treatment programs are individualized based on constitutional case taking. Treatment duration and outcomes vary according to patient chronicity, lifestyle, and compliance. VitaHomeo does not treat acute surgical emergencies. For urgent medical crises, immediately contact local emergency services.
            </p>
          </div>
        </section>


        {/* ============ 10. FINAL CONVERSION CTA ============ */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-brand via-[#008f75] to-[#0ea98b] text-white rounded-[32px] p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Begin Your Healing Journey
            </span>

            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight tracking-tight">
              Ready for Lasting Health Recovery?
            </h2>

            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto font-medium mb-8 leading-relaxed">
              Book a comprehensive constitutional video consultation with Dr. Arun Kumar today and receive sealed, custom-diluted remedies couriered directly to your home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`https://wa.me/917765991145?text=${encodeURIComponent("Hi VitaHomeo! I would like to schedule a constitutional consultation. Please help me with available appointment slots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white text-brand hover:bg-[#f4f9f3] active:scale-[0.98] transition-all font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </a>

              <Link
                href="/doctors"
                className="px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white active:scale-[0.98] transition-all font-bold text-sm rounded-xl inline-flex items-center gap-2"
              >
                <Stethoscope className="w-4 h-4" />
                Meet All Doctors
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
