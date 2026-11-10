import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { treatmentsData, ConditionInfo, REVIEWER_TEJASWI } from "@/data/treatmentsData";
import { 
  Check, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  MessageCircle, 
  Stethoscope, 
  CheckCircle2, 
  AlertTriangle 
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug || "").toLowerCase();
  const condition = treatmentsData[slug];
  const title = condition ? `${condition.title} Homeopathy Treatment | VitaHomeo` : "Homeopathy Treatment | VitaHomeo";
  const description = condition 
    ? `Learn about the symptoms, causes, and individualized homeopathic care approach for ${condition.title}. Medically reviewed by verified clinical specialists.`
    : "Consult experienced homeopathic doctors online for constitutional care.";
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.vitahomeo.com/treatments/${slug}`,
    },
  };
}

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
      "Systemic constitutional factors and metabolic imbalances",
      "Environmental stressors or individual sensitivities",
      "Immune or neurovascular reactivity patterns"
    ],
    whenToSee: "Consult a verified medical professional if symptoms recur frequently, interfere with your quality of life, or worsen over time.",
    howHelps: "Homeopathy focuses on the full constitutional profile, choosing gentle micro-dilutions that support natural bodily recuperation alongside lifestyle adjustments.",
    approach: [
      "Comprehensive physical and metabolic case study mapping.",
      "Individualized constitutional remedies tailored to patient symptom picture.",
      "Guidance on diet, triggers, and stress mitigation."
    ],
    duration: "Individualized progress is evaluated over 3 to 6 months of systematic constitutional care.",
    faqs: [
      { q: "Is homeopathy suitable for chronic conditions?", a: "Yes, constitutional homeopathy is designed specifically to address individual chronic susceptibilities with personalized, non-suppressive remedies." },
      { q: "Can I consult online?", a: "Yes, VitaHomeo offers complete online consultations via secure video/audio calls with verified specialists." }
    ],
    related: [
      { name: "Skin Care", slug: "eczema" },
      { name: "PCOS Management", slug: "pcos-pcod" }
    ],
    reviewer: REVIEWER_TEJASWI
  };

  const reviewer = condition.reviewer || REVIEWER_TEJASWI;
  const whatsappBookingUrl = `https://wa.me/917765991145?text=${encodeURIComponent(
    `Hi VitaHomeo! I would like to book a consultation for ${condition.title} with ${reviewer.name} (Fee: ₹999). Could you please guide me with available slots?`
  )}`;

  // Structured Schema data JSON-LD (MedicalWebPage + FAQPage)
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `${condition.title} Homeopathy Treatment Guide`,
        "url": `https://www.vitahomeo.com/treatments/${slug}`,
        "description": `Comprehensive clinical guide on symptoms, causes, and constitutional homeopathic care for ${condition.title}.`,
        "reviewedBy": {
          "@type": "Physician",
          "name": reviewer.name,
          "medicalSpecialty": reviewer.title,
          "telephone": "+91-77659-91145"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": condition.title,
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
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": condition.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28 space-y-12">
        
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
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Homeopathy Treatment Guide
                </span>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Medically Reviewed
                </span>
              </div>

              {/* Exactly one H1 for SEO */}
              <h1 className="text-3xl md:text-5xl font-black text-ink dark:text-white leading-tight">
                {condition.title} Treatment in Homeopathy
              </h1>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">
                Explore symptoms, constitutional causes, and individualized clinical care options. Consult verified practitioners online for tailored support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0">
              <a 
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consult Specialist (₹999)</span>
              </a>
              <Link 
                href={`/doctors/${reviewer.slug}`} 
                className="px-6 py-3 bg-white dark:bg-[#101c0f] text-brand border border-brand/20 dark:border-[#1d2a1a] hover:bg-brand hover:text-white font-bold text-xs rounded-xl shadow-sm transition-all text-center"
              >
                View Reviewer Profile
              </Link>
            </div>
          </div>
        </section>

        {/* E-E-A-T Medical Reviewer Banner */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-line-custom dark:border-[#1d2a1a] bg-bg-soft shrink-0">
                <Image
                  src={reviewer.image}
                  alt={reviewer.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" /> Clinical Review
                  </span>
                  <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">• E-E-A-T Verified</span>
                </div>
                <Link 
                  href={`/doctors/${reviewer.slug}`}
                  className="text-sm font-bold text-ink dark:text-white hover:text-brand transition-colors block"
                >
                  {reviewer.name}
                </Link>
                <p className="text-[11px] text-body-text/80 dark:text-[#8ea088] font-medium">
                  {reviewer.degree} · <span className="font-semibold text-ink dark:text-white">{reviewer.registration}</span>
                </p>
              </div>
            </div>

            <Link
              href={`/doctors/${reviewer.slug}`}
              className="text-xs font-bold text-brand hover:underline inline-flex items-center gap-1 shrink-0 self-end sm:self-center"
            >
              <span>Read Full Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-3">Recognized Symptoms</h2>
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
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-3">Potential Triggers & Causes</h2>
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
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-2">When to Seek Medical Attention</h2>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                  {condition.whenToSee}
                </p>
              </div>

              <div className="pt-6 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 space-y-3">
                <h2 className="text-base font-extrabold text-ink dark:text-white">How Homeopathic Care Approaches This Condition</h2>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                  {condition.howHelps}
                </p>
              </div>
            </div>

            {/* Treatment Approach & Duration */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-base font-extrabold text-ink dark:text-white mb-3">Clinical Evaluation Approach</h2>
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
                  <h2 className="text-xs text-muted-text dark:text-[#71806c] uppercase tracking-wider font-bold">Treatment Evaluation Timeline</h2>
                  <span className="text-xs font-bold text-ink dark:text-white block mt-0.5">{condition.duration}</span>
                </div>
              </div>
            </div>

            {/* Condition Specific FAQs */}
            <div className="space-y-3">
              <h2 className="text-base font-extrabold text-ink dark:text-white mb-4">Frequently Asked Questions</h2>
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

          {/* Right Column: High-Converting Specialist Booking Pathway */}
          <div className="md:col-span-4 space-y-6 sticky top-24">
            
            {/* Direct Specialist Card */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-line-custom dark:border-[#1d2a1a] bg-bg-soft shrink-0">
                  <Image
                    src={reviewer.image}
                    alt={reviewer.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">Recommended Specialist</span>
                  <h3 className="text-sm font-bold text-ink dark:text-white">{reviewer.name}</h3>
                  <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold block">{reviewer.title}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-bg-soft/70 dark:bg-[#162315]/70 border border-line-custom/60 dark:border-[#1d2a1a] space-y-1.5 text-[11px] font-semibold text-body-text dark:text-[#aebba8]">
                <div className="flex items-center justify-between text-xs font-bold text-ink dark:text-white pb-1.5 border-b border-line-custom/50 dark:border-[#1d2a1a]">
                  <span>Consultation Fee</span>
                  <span className="text-brand text-sm">₹999</span>
                </div>
                <div className="flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>30–40 Min In-Depth Video Call</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Digital Prescription on WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Doorstep Remedy Delivery Across India</span>
                </div>
              </div>
              
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book on WhatsApp (₹999)</span>
              </a>

              <Link
                href={`/doctors/${reviewer.slug}`}
                className="w-full h-9 bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 text-brand font-bold text-[11px] rounded-xl flex items-center justify-center transition-all border border-brand/20 dark:border-[#1d2a1a]"
              >
                View Doctor Profile & Reviews
              </Link>
            </div>

            {/* Related Conditions */}
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-black text-ink dark:text-white uppercase tracking-wider">Related Clinical Guides</h3>
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

        {/* Regulatory & Safety Clinical Disclaimer */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#162315] space-y-2">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Medical & Statutory Disclaimer</span>
            </div>
            <p className="text-[11px] text-body-text/85 dark:text-[#8ea088] font-medium leading-relaxed">
              The clinical guides on VitaHomeo are authored and reviewed by registered medical practitioners solely for general health literacy. In compliance with the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 and Indian Telemedicine Guidelines, VitaHomeo does not guarantee absolute cures or immediate resolution of chronic pathology. Homeopathic care acts as an individualized constitutional modality. Patients should never alter, reduce, or stop essential pharmaceutical prescriptions (such as for hypertension, cardiac care, or diabetes) without direct clinical authorization from their primary treating physician.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
