import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { locationsData, LocationInfo, allLocationsList } from "@/data/locationsData";
import { getDoctors } from "@/lib/doctors";
import { 
  MapPin, 
  Stethoscope, 
  Clock, 
  IndianRupee, 
  ShieldCheck, 
  MessageCircle, 
  Video, 
  CheckCircle2, 
  ArrowRight,
  FileText
} from "lucide-react";

interface RouteParams {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((location) => ({ location }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const locationSlug = (resolvedParams?.location || "").toLowerCase();
  const location = locationsData[locationSlug];

  if (!location) {
    return {
      title: "Homeopathic Doctors Online | VitaHomeo",
      description: "Consult verified homeopathic physicians online with official digital prescriptions across India.",
    };
  }

  return {
    title: `Homeopathic Doctors in ${location.displayName} | Online Consultation — VitaHomeo`,
    description: `Consult verified homeopathic doctors online in ${location.displayName}. In-depth constitutional video care and authorized digital prescriptions on WhatsApp. Fee ₹999.`,
    alternates: {
      canonical: `https://www.vitahomeo.com/doctor/${locationSlug}`,
    },
    openGraph: {
      title: `Homeopathic Doctors in ${location.displayName} | VitaHomeo`,
      description: `Consult verified homeopathic physicians online in ${location.displayName}. In-depth video consultations with official digital prescriptions.`,
      url: `https://www.vitahomeo.com/doctor/${locationSlug}`,
    },
  };
}

export default async function LocationDoctorPage({ params }: RouteParams) {
  const resolvedParams = await params;
  const locationSlug = (resolvedParams?.location || "").toLowerCase();
  const location: LocationInfo | undefined = locationsData[locationSlug];

  if (!location) {
    notFound();
  }

  const allDoctors = await getDoctors();

  // Highlight doctors matching this state first, then show other verified doctors
  const localSpecialists = allDoctors.filter(
    (d) =>
      (d.state && d.state.toLowerCase().includes(location.state.toLowerCase())) ||
      (d.city && d.city.toLowerCase().includes(location.capital.toLowerCase()))
  );

  const otherSpecialists = allDoctors.filter(
    (d) => !localSpecialists.some((locDoc) => locDoc.slug === d.slug)
  );

  const displayDoctors = [...localSpecialists, ...otherSpecialists];

  const whatsappGeneralMsg = encodeURIComponent(
    `Hi VitaHomeo! I am looking for an online homeopathic consultation for a patient residing in ${location.displayName}. Could you please guide me with available slots?`
  );

  // Structured Data Schema for Local SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `Verified Homeopathic Doctors in ${location.displayName}`,
        "url": `https://www.vitahomeo.com/doctor/${location.slug}`,
        "description": location.description,
        "about": {
          "@type": "MedicalOrganization",
          "name": "VitaHomeo Telemedicine",
          "telephone": "+91-77659-91145",
          "areaServed": {
            "@type": "State",
            "name": location.state
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": location.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 text-xs text-muted-text dark:text-[#71806c] font-semibold flex items-center gap-2">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link href="/doctors" className="hover:text-brand">Doctors</Link>
          <span>/</span>
          <span className="text-ink dark:text-white font-bold">{location.displayName}</span>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-10 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand" />
                  {location.displayName}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Video className="w-3 h-3" /> 100% Online Video Consultation
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-ink dark:text-white leading-tight font-display">
                Top Homeopathic Doctors in {location.displayName}
              </h1>

              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-medium leading-relaxed">
                {location.description}
              </p>
            </div>

            {/* Hero Quick CTA */}
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
              <a
                href={`https://wa.me/917765991145?text=${whatsappGeneralMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Video Consult (₹999)</span>
              </a>
              <Link
                href="/doctors"
                className="px-6 py-2.5 bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 text-brand border border-brand/20 dark:border-[#1d2a1a] font-bold text-xs rounded-xl text-center transition-all"
              >
                View All Doctors
              </Link>
            </div>

          </div>
        </section>

        {/* How It Works for Patients in this State */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-bg-soft/70 dark:bg-[#162315]/50 border border-line-custom/70 dark:border-[#1d2a1a] rounded-[24px] p-6 md:p-8">
            <h2 className="text-xs font-bold text-brand uppercase tracking-wider mb-2">
              Telemedicine Process
            </h2>
            <h3 className="text-xl md:text-2xl font-black text-ink dark:text-white mb-6">
              How Online Homeopathy Works for Patients in {location.state}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#101c0f] p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand font-black text-sm flex items-center justify-center">
                  01
                </div>
                <h4 className="text-sm font-bold text-ink dark:text-white">Request on WhatsApp</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Choose your convenient time slot and share your medical history with our care desk on WhatsApp.
                </p>
              </div>

              <div className="bg-white dark:bg-[#101c0f] p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand font-black text-sm flex items-center justify-center">
                  02
                </div>
                <h4 className="text-sm font-bold text-ink dark:text-white">30–40 Min Video Consult</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Meet your verified specialist on a private video call for thorough constitutional case analysis and personalized advice.
                </p>
              </div>

              <div className="bg-white dark:bg-[#101c0f] p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand font-black text-sm flex items-center justify-center">
                  03
                </div>
                <h4 className="text-sm font-bold text-ink dark:text-white">Digital Prescription</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Receive your authorized digital prescription directly on WhatsApp with clear dosage and constitutional guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Doctors List */}
        <section className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line-custom/60 dark:border-[#1d2a1a] pb-3">
            <div>
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
                Available Specialists
              </span>
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">
                Verified Doctors Available for Patients in {location.displayName}
              </h2>
            </div>
            <span className="text-xs text-muted-text dark:text-[#71806c] font-semibold">
              Showing {displayDoctors.length} verified practitioners
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {displayDoctors.map((doc) => {
              const docWhatsappMsg = encodeURIComponent(
                `Hi VitaHomeo! I would like to book an online video consultation with ${doc.name} for a patient in ${location.displayName} (Fee: ₹999). Could you please help me?`
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
                        <ShieldCheck className="w-3 h-3" /> Verified Doctor
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
                        <MapPin className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span>Based in {doc.location} (Available in {location.state} via Online Video)</span>
                      </div>
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
                          <span>Digital Prescription on WhatsApp</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-5 pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                      <a
                        href={`https://wa.me/917765991145?text=${docWhatsappMsg}`}
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
                        View Full Profile
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* Localized FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 space-y-4">
          <div>
            <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
              Patient Information
            </span>
            <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">
              Frequently Asked Questions for {location.displayName} Patients
            </h2>
          </div>

          <div className="space-y-3">
            {location.faqs.map((faq, fIdx) => (
              <details
                key={fIdx}
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

        {/* Other States Navigation Grid */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-6 md:p-8 rounded-[24px] bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] shadow-sm space-y-4">
            <h3 className="text-sm font-black text-ink dark:text-white uppercase tracking-wider">
              Explore Doctors in Other States &amp; Capitals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
              {allLocationsList
                .filter((l) => l.slug !== location.slug)
                .map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/doctor/${loc.slug}`}
                    className="px-3.5 py-2 rounded-xl bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 text-xs font-semibold text-ink dark:text-white border border-line-custom/70 dark:border-[#1d2a1a] hover:border-brand/40 transition-colors flex items-center justify-between"
                  >
                    <span>{loc.displayName}</span>
                    <ArrowRight className="w-3 h-3 text-muted-text" />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Telemedicine Disclaimer */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#162315] text-[10px] text-muted-text dark:text-[#71806c] font-semibold leading-relaxed text-center">
            VitaHomeo provides online telemedicine consultations under the Telemedicine Practice Guidelines, India. Prescriptions are generated by registered practitioners following private video evaluations.
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
