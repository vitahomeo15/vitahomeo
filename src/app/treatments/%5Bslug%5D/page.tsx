import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { treatmentsData, ConditionInfo } from "@/data/treatmentsData";
import { Check, Clock, FileText, ArrowRight, Activity } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((slug) => ({ slug }));
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug || "").toLowerCase();

  // Retrieve condition info from data helper. If slug isn't matched, provide fallback
  const condition: ConditionInfo = treatmentsData[slug] || {
    title: (resolvedParams?.slug || "Condition").charAt(0).toUpperCase() + (resolvedParams?.slug || "").slice(1).replace("-", " "),
    symptoms: [
      "Localized physical symptoms and metabolic imbalances",
      "Chronic discomfort or recurring symptom flares",
      "Reduced physical energy or structural stress"
    ],
    causes: [
      "Systemic root causes and constitutional imbalances",
      "Environmental stressors or genetic sensitivities",
      "Metabolic or immune feedback loop dysfunction"
    ],
    whenToSee: "Consult a verified medical professional if symptoms recur frequently, interfere with your quality of life, or worsen over time.",
    howHelps: "Homeopathy focuses on the full constitutional profile, choosing remedies that stimulate natural healing pathways rather than suppressive relief.",
    approach: [
      "Comprehensive physical and metabolic case study mapping.",
      "Custom dynamic micro-dilutions tailored to patient constitution.",
      "Guidance on diet, triggers, and stress mitigation."
    ],
    duration: "Typically 3 to 6 months of constitutional treatment is recommended for chronic complaints.",
    faqs: [
      { q: "Is homeopathy suitable for chronic conditions?", a: "Yes, constitutional homeopathy is designed specifically to trace back chronic symptoms to their metabolic roots for long-term relief." },
      { q: "Can I consult online?", a: "Yes, SociVeda offers complete online consultations via secure video/audio calls with verified doctors." }
    ],
    related: [
      { name: "Skin Care", slug: "eczema" },
      { name: "PCOS Management", slug: "pcos-pcod" }
    ]
  };

  // Structured Schema data JSON-LD for individual condition
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "description": `Comprehensive educational information and constitutional homeopathic treatment approach for ${condition.title}.`,
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Constitutional Homeopathy"
      }
    ],
    "signOrSymptom": condition.symptoms.map(s => ({
      "@type": "MedicalSignOrSymptom",
      "name": s
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28 space-y-16">
        
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 text-xs text-muted-text dark:text-[#71806c] font-semibold flex items-center gap-2">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link href="/treatment" className="hover:text-brand">Treatments</Link>
          <span>/</span>
          <span className="text-ink dark:text-white font-bold">{condition.title}</span>
        </div>

        {/* Hero Card */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 max-w-xl">
              <span className="inline-block text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Homeopathy Treatment Guide
              </span>
              {/* Exactly one H1 for SEO */}
              <h1 className="text-3xl md:text-5xl font-black text-ink dark:text-white leading-tight">
                {condition.title} Treatment in Homeopathy
              </h1>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">
                Learn about symptoms, root causes, and how personalized constitutional homeopathy supports long-term healing.
              </p>
            </div>

            <Link 
              href="/book" 
              className="px-6 py-3 bg-brand hover:bg-brand-dark text-white font-bold text-xs rounded-xl shadow-sm hover:scale-[1.01] transition-transform shrink-0"
            >
              Book Consultation
            </Link>
          </div>
        </section>

        {/* Content sections grid */}
        <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Educational Content */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Symptoms & Causes */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-3">Symptoms</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                  {condition.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-3">Causes</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                  {condition.causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea98b] shrink-0 mt-1.5" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* When to see doctor & How homeopathy helps */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-2">When to See a Doctor</h2>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                  {condition.whenToSee}
                </p>
              </div>

              <div className="pt-6 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 space-y-3">
                <h2 className="text-base font-extrabold text-ink dark:text-white">How Homeopathy Helps</h2>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                  {condition.howHelps}
                </p>
              </div>
            </div>

            {/* Treatment Approach & Duration */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-3">Treatment Approach</h2>
                <ul className="space-y-3 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                  {condition.approach.map((ap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <span className="mt-0.5">{ap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 flex items-center gap-3">
                <Clock className="w-6 h-6 text-brand shrink-0" />
                <div>
                  <h2 className="text-xs text-muted-text dark:text-[#71806c] uppercase tracking-wider font-bold">Expected Duration</h2>
                  <span className="text-xs font-bold text-ink dark:text-white block mt-0.5">{condition.duration}</span>
                </div>
              </div>
            </div>

            {/* Condition Specific FAQs (using native details Summary tag for server-component friendliness) */}
            <div className="space-y-3">
              <h2 className="text-base font-extrabold text-ink dark:text-white mb-4">FAQs</h2>
              {condition.faqs.map((faq, fIdx) => (
                <details 
                  key={fIdx} 
                  className="group bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-xl overflow-hidden shadow-sm"
                >
                  <summary className="w-full px-4 py-3 flex items-center justify-between text-left font-bold text-xs text-ink dark:text-white cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="text-brand group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 pt-1 text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>

          {/* Right Column: CTA & Related Conditions */}
          <div className="md:col-span-4 space-y-6 sticky top-24">
            
            {/* Consultation Widget */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-ink dark:text-white">Personalized Constitutional Care</h3>
              <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                Homeopathy relies on matching full systemic patient profiles. Consult verified doctors for custom dosage remedies shipped to your address.
              </p>
              
              <Link
                href="/book"
                className="w-full h-10 bg-brand hover:bg-brand-dark text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                Schedule Consultation
              </Link>

              <div className="pt-2 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 text-center">
                <Link 
                  href="/reviews"
                  className="text-[10px] font-bold text-brand hover:underline"
                >
                  Read Verified Testimonials →
                </Link>
              </div>
            </div>

            {/* Related Conditions */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-black text-ink dark:text-white uppercase tracking-wider">Related Conditions</h3>
              <ul className="space-y-2">
                {condition.related.map((rel) => (
                  <li key={rel.slug}>
                    <Link 
                      href={`/treatments/${rel.slug}`}
                      className="text-xs font-bold text-brand hover:underline flex items-center gap-1"
                    >
                      <span>{rel.name}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </section>

        {/* Medical disclaimer note */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#162315] text-[10px] text-muted-text dark:text-[#71806c] font-semibold leading-relaxed text-center">
            The information provided above is purely educational and does not constitute medical advice or specific remedy dosage prescriptions. Always consult a verified medical professional before beginning any homeopathic treatment plans.
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
