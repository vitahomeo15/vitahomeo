import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDoctors } from "@/lib/doctors";
import {
  Video,
  ShieldCheck,
  Calendar,
  Clock,
  IndianRupee,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Lock,
  Stethoscope,
  Languages,
  ArrowRight,
  UserCheck,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homeopathy Consultation India | Verified Practitioners — VitaHomeo",
  description:
    "Consult verified homeopathic and electro-homeopathic practitioners online across India. 30–40 minute private video case evaluation, authorized digital prescriptions, and transparent ₹999 fee.",
  alternates: {
    canonical: "https://www.vitahomeo.com/online-homeopathy-consultation",
  },
  openGraph: {
    title: "Online Homeopathy Consultation India | VitaHomeo",
    description:
      "Consult verified practitioners online across India via confidential video appointments. Council-registered specialists with transparent pricing.",
    url: "https://www.vitahomeo.com/online-homeopathy-consultation",
  },
};

const WHATSAPP_NUMBER = "917765991145";

export default async function OnlineHomeopathyConsultationPage() {
  const doctors = await getDoctors();

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Online Homeopathy Consultation in India",
        "url": "https://www.vitahomeo.com/online-homeopathy-consultation",
        "description":
          "Access verified homeopathic and electro-homeopathic consultations online via private video calls. Transparent consultation fee of ₹999 with authorized digital prescriptions on WhatsApp.",
        "about": {
          "@type": "MedicalOrganization",
          "name": "VitaHomeo Telemedicine",
          "url": "https://www.vitahomeo.com",
          "telephone": "+91-77659-91145",
          "areaServed": "India",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.vitahomeo.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Online Consultation",
            "item": "https://www.vitahomeo.com/online-homeopathy-consultation",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does an online homeopathy consultation work on VitaHomeo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "You submit an appointment request on WhatsApp, choose a convenient date and time, and meet a verified practitioner over a secure 30–40 minute video call. After the detailed constitutional evaluation, your authorized digital prescription is sent directly via WhatsApp.",
            },
          },
          {
            "@type": "Question",
            "name": "What are the qualifications of practitioners on VitaHomeo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "VitaHomeo clearly categorizes practitioners by their verified qualifications. For classical homoeopathy, our physicians hold recognized degrees such as BHMS and MD (Homoeopathy) registered with statutory boards (such as the Andhra Board for Homoeopathy). For electro-homoeopathy, practitioners hold verified credentials (such as B.E.M.S. / M.B.E.H.) registered with respective state boards (such as the Board of Electro Homoeopathic Medicine, Bihar).",
            },
          },
          {
            "@type": "Question",
            "name": "What is the consultation fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Consultation fees are completely transparent and standardized at ₹999 for a full 30–40 minute constitutional video evaluation.",
            },
          },
          {
            "@type": "Question",
            "name": "When is an online consultation NOT appropriate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Telemedicine is intended for chronic lifestyle conditions, constitutional care, and routine follow-ups. In-person emergency care is strictly necessary for acute chest pain, severe breathlessness, sudden neurological deficits, severe hemorrhages, acute abdominal emergencies, or pediatric critical illness.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 text-xs text-muted-text dark:text-[#71806c] font-semibold flex items-center gap-2">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <span className="text-ink dark:text-white font-bold">Online Homeopathy Consultation</span>
        </div>

        {/* ============ 1. HERO SECTION ============ */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-12 shadow-sm relative overflow-hidden space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5" />
                Telemedicine Care Across India
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Council-Vetted Credentials
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-ink dark:text-white leading-tight font-display max-w-3xl">
              Online Homeopathy Consultation in India
            </h1>

            <p className="text-sm md:text-base text-body-text dark:text-[#aebba8] font-medium leading-relaxed max-w-3xl">
              Connect directly with verified practitioners from the comfort of home. Receive comprehensive 30–40 minute constitutional video evaluations, clear lifestyle guidance, and official digital prescriptions delivered via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi VitaHomeo! I would like to book an online video consultation (Fee: ₹999). Could you please guide me with available slots?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Consultation on WhatsApp (₹999)</span>
              </a>

              <Link
                href="/doctors"
                className="px-6 py-3.5 bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 text-brand border border-brand/20 dark:border-[#1d2a1a] font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Compare Available Doctors</span>
              </Link>
            </div>

            {/* Quick Policy Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-line-custom/60 dark:border-[#1d2a1a] text-xs">
              <div className="flex items-center gap-2 text-ink dark:text-white font-semibold">
                <Clock className="w-4 h-4 text-brand shrink-0" />
                <span>30–40 Min Case Taking</span>
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-semibold">
                <IndianRupee className="w-4 h-4 text-brand shrink-0" />
                <span>Fixed ₹999 Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-semibold">
                <FileText className="w-4 h-4 text-brand shrink-0" />
                <span>Digital WhatsApp Prescription</span>
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-semibold">
                <Lock className="w-4 h-4 text-brand shrink-0" />
                <span>Confidential Medical Records</span>
              </div>
            </div>

          </div>
        </section>

        {/* ============ 2. STEP-BY-STEP PROCESS ============ */}
        <section className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-brand uppercase tracking-wider block">
              Patient Care Pathway
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-ink dark:text-white mt-1">
              How the Online Consultation Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-[24px] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand font-black text-sm flex items-center justify-center">
                01
              </div>
              <h3 className="text-base font-bold text-ink dark:text-white">
                Request Appointment on WhatsApp
              </h3>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                Connect with our care desk on WhatsApp. Share your primary health concern and select a morning, afternoon, or evening consultation window.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-[24px] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand font-black text-sm flex items-center justify-center">
                02
              </div>
              <h3 className="text-base font-bold text-ink dark:text-white">
                30–40 Min Private Video Evaluation
              </h3>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                Meet your matched practitioner over a secure video or audio link. Your doctor performs detailed constitutional case analysis, reviewing medical history and lifestyle factors.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-6 rounded-[24px] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand font-black text-sm flex items-center justify-center">
                03
              </div>
              <h3 className="text-base font-bold text-ink dark:text-white">
                Digital Prescription &amp; Guidance
              </h3>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                Receive an authorized digital prescription with specific remedy names, potencies, dosage intervals, and dietary instructions sent directly to your WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 3. AVAILABLE PRACTITIONERS ============ */}
        <section className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line-custom/60 dark:border-[#1d2a1a] pb-3">
            <div>
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
                Verified Medical Team
              </span>
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">
                Practitioners Available for Online Consultations
              </h2>
            </div>
            <span className="text-xs text-muted-text dark:text-[#71806c] font-semibold">
              Transparent credentials &amp; council registrations
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {doctors.map((doc) => {
              const docMsg = encodeURIComponent(
                `Hi VitaHomeo! I would like to schedule an online video consultation with ${doc.name} (Fee: ₹999). Could you please guide me with available slots?`
              );

              return (
                <div
                  key={doc.slug}
                  className="bg-white dark:bg-[#101c0f] rounded-[26px] border border-line-custom dark:border-[#1d2a1a] shadow-sm p-6 md:p-8 grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-6 hover:shadow-md hover:border-brand/40 transition-all"
                >
                  {/* Photo */}
                  <div className="col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-span-2 flex flex-col items-center shrink-0 justify-start">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-[22px] overflow-hidden border border-line-custom dark:border-[#1d2a1a] shadow-sm bg-bg-soft">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex flex-col justify-center md:justify-start md:border-r md:border-line-custom md:dark:border-[#1d2a1a] md:pr-6">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-black text-ink dark:text-white leading-tight">
                        {doc.name}
                      </h3>
                      <span className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5 border border-brand/15">
                        <ShieldCheck className="w-3 h-3" /> {doc.practitionerClassification || "Verified Practitioner"}
                      </span>
                    </div>

                    <div className="text-xs text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wide">
                      {doc.degree}
                    </div>

                    {doc.registration_number && (
                      <div className="text-[11px] text-body-text/80 dark:text-[#8ea088] font-semibold mt-1">
                        Reg. No: <span className="font-bold text-ink dark:text-white">{doc.registration_number}</span>
                        {doc.registration_authority ? ` • ${doc.registration_authority}` : ""}
                      </div>
                    )}
                  </div>

                  {/* Clinical Details */}
                  <div className="col-span-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 border-b md:border-b-0 md:border-r border-line-custom dark:border-[#1d2a1a] pb-6 md:pb-0 md:pr-6">
                    <div className="flex flex-col gap-2 mt-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                      <div className="flex items-center">
                        <Stethoscope className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span className="text-ink dark:text-white">{doc.specialty}</span>
                      </div>
                      {doc.experience && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-brand shrink-0" />
                          <span>{doc.experience}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <UserCheck className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span>Practice Base: {doc.practiceCity || doc.city}, {doc.practiceState || doc.state} · Available Pan-India</span>
                      </div>
                      {doc.languages && doc.languages.length > 0 && (
                        <div className="flex items-center">
                          <Languages className="w-4 h-4 mr-2 text-brand shrink-0" />
                          <span>Languages: {doc.languages.join(", ")}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-body-text dark:text-[#aebba8] mt-3 line-clamp-2 leading-relaxed">
                      {doc.bio}
                    </p>

                    {/* Expertise Tags */}
                    {doc.expertise && doc.expertise.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {doc.expertise.slice(0, 4).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-bg-soft dark:bg-[#162315] text-ink dark:text-white px-2 py-0.5 rounded-md font-semibold border border-line-custom/60 dark:border-[#1d2a1a]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions Column */}
                  <div className="col-span-2 md:col-span-1 md:row-span-2 flex flex-col justify-between pt-4 md:pt-0 min-w-[190px]">
                    <div>
                      <div className="flex items-center justify-between md:flex-col md:items-start gap-1 mb-3">
                        <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider">
                          Consultation Fee
                        </span>
                        <div className="flex items-center text-brand font-black text-2xl tracking-tight">
                          <IndianRupee className="w-5 h-5 mr-0.5" />
                          <span>{doc.fee || "999"}</span>
                        </div>
                      </div>

                      <div className="space-y-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold border-t border-line-custom/40 dark:border-[#1d2a1a]/40 pt-2">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>30–40 Min Video Consult</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>Digital Prescription</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-5 pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${docMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Book via WhatsApp
                      </a>
                      <Link
                        href={`/doctors/${doc.slug}`}
                        className="w-full h-9 rounded-xl bg-white dark:bg-[#101c0f] text-brand border border-brand/20 dark:border-[#1d2a1a] hover:bg-brand hover:text-white text-xs font-bold flex items-center justify-center transition-all shadow-sm"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ============ 4. CLINICAL SAFETY & TRIAGE NOTICE ============ */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-6 md:p-8 rounded-[24px] bg-amber-500/10 border border-amber-500/25 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>When In-Person Medical Evaluation is Strictly Required</span>
            </div>
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed font-medium">
              Telemedicine consultations are suitable for chronic lifestyle ailments, recurring allergic complaints, mild dermatological issues, and supportive constitutional care. 
              <strong> If you or your family member experience acute chest pain, severe shortness of breath, sudden facial numbness, acute trauma, heavy bleeding, or severe abdominal pain, do not wait for an online appointment. Seek immediate in-person emergency hospital care.</strong>
            </p>
          </div>
        </section>

        {/* ============ 5. FAQS ============ */}
        <section className="max-w-5xl mx-auto px-4 space-y-4">
          <div>
            <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
              Patient Inquiries
            </span>
            <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">
              Frequently Asked Questions About Online Consultations
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How do I join the video consultation?",
                a: "Once your appointment is confirmed on WhatsApp, our care desk provides a private, encrypted video meeting link (Google Meet / secure web call). You do not need to install complex software; simply open the link on your mobile phone or laptop at your scheduled time."
              },
              {
                q: "What credentials do your treating doctors hold?",
                a: "VitaHomeo independently verifies all medical registrations and degrees. Dr. Rachamsetty Tejaswi holds an MD (Homoeopathy) and BHMS, registered with the Andhra Board for Homoeopathy (Reg. No. 8809/H/2019). Dr. Arun Kumar holds a B.E.M.S. / M.B.E.H., registered with the Board of Electro Homoeopathic Medicine, Bihar (Reg. No. 7979)."
              },
              {
                q: "Can I take prescribed remedies with my ongoing allopathic medicines?",
                a: "Yes. Homeopathic micro-dilutions do not biochemically interfere with conventional medications. If you take prescription medicines for hypertension, diabetes, or thyroid conditions, never stop them abruptly. Your treating physician can provide constitutional support alongside your existing care."
              },
              {
                q: "What if I require a follow-up appointment?",
                a: "Follow-up consultations can be requested directly on WhatsApp with your assigned practitioner. A periodic review at 4 to 6 weeks is recommended to assess constitutional improvement and adjust dosage potencies."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="w-full px-5 py-3.5 flex items-center justify-between text-left font-bold text-xs text-ink dark:text-white cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="text-brand group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 pt-1 text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ============ 6. STATUTORY DISCLAIMER ============ */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#162315] text-[10px] text-muted-text dark:text-[#71806c] font-semibold leading-relaxed text-center">
            VitaHomeo operates as an online telemedicine facilitator connecting patients with registered practitioners under the Telemedicine Practice Guidelines, India. Prescriptions are authorized by licensed medical practitioners following case analysis. VitaHomeo does not manufacture or distribute pharmaceuticals directly.
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
