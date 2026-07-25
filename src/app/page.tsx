import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DoctorVerificationBadge } from "@/components/DoctorVerificationBadge";
import { blogPosts } from "@/data/blogData";
import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Video, 
  FileText, 
  MessageSquare, 
  Check, 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  Star, 
  UserCheck, 
  FileHeart,
  Laptop,
  Stethoscope
} from "lucide-react";

export default function Home() {
  // 1. Hero trust badges
  const heroTrustBadges = [
    { icon: <UserCheck className="w-5 h-5 text-brand" />, text: "Verified Doctors" },
    { icon: <CreditCard className="w-5 h-5 text-[#0ea98b]" />, text: "Secure Payments" },
    { icon: <FileText className="w-5 h-5 text-brand" />, text: "Digital Prescriptions" },
    { icon: <Lock className="w-5 h-5 text-[#0ea98b]" />, text: "Private Consultations" },
    { icon: <Clock className="w-5 h-5 text-brand" />, text: "Support Available" }
  ];

  // 4. Why Patients Choose Us
  const whyPatientsChooseUs = [
    { 
      icon: <UserCheck className="w-6 h-6 text-brand" />, 
      title: "Verified Homeopathic Doctors", 
      desc: "Every practitioner undergoes multi-stage credential checks including degrees, council registrations, and clinical experience." 
    },
    { 
      icon: <Lock className="w-6 h-6 text-[#0ea98b]" />, 
      title: "Private Consultations", 
      desc: "Virtual consultation rooms use encrypted WebRTC pipelines to secure your audio, video, and text sessions." 
    },
    { 
      icon: <ScaleIcon className="w-6 h-6 text-brand" />, 
      title: "Transparent Pricing", 
      desc: "Fees are shown clearly before booking. There are no hidden platform costs, registration charges, or surprise billing." 
    },
    { 
      icon: <FileHeart className="w-6 h-6 text-[#0ea98b]" />, 
      title: "Digital Prescriptions", 
      desc: "Get an official constitutional homeopathy digital prescription instantly after your consultation concludes." 
    },
    { 
      icon: <Laptop className="w-6 h-6 text-brand" />, 
      title: "No App Required", 
      desc: "Consult directly via your browser on any phone, tablet, or laptop. No downloads or installations needed." 
    },
    { 
      icon: <MessageSquare className="w-6 h-6 text-[#0ea98b]" />, 
      title: "Follow-up Care", 
      desc: "Check in with your practitioner regularly to monitor recovery and adjust remedies dynamically over time." 
    }
  ];

  // 5. How It Works steps
  const howItWorksSteps = [
    { step: "01", title: "Choose your health concern", desc: "Select from skin, hair, chronic allergies, or other constitutional areas.", icon: <Search className="w-5 h-5" /> },
    { step: "02", title: "Select a verified doctor", desc: "Browse qualified specialists, check profiles, ratings, and experience.", icon: <UserCheck className="w-5 h-5" /> },
    { step: "03", title: "Book appointment", desc: "Choose a convenient date and time slot that fits your schedule.", icon: <Calendar className="w-5 h-5" /> },
    { step: "04", title: "Consult online", desc: "Meet your practitioner via secure audio or video right inside your browser.", icon: <Video className="w-5 h-5" /> },
    { step: "05", title: "Download prescription", desc: "Access and print your digital prescription directly from your account page.", icon: <FileText className="w-5 h-5" /> },
    { step: "06", title: "Book follow-up", desc: "Schedule continuous review calls as your body responds to the treatment.", icon: <MessageSquare className="w-5 h-5" /> }
  ];

  // 6. Doctor Listings
  const placeholderDoctors = [
    {
      id: "dr-arun-kumar",
      name: "Dr. Arun Kumar",
      qualification: "DHMS",
      experience: "19 Years",
      specialization: "Constitutional Homeopathy",
      languages: "English, Hindi",
      rating: "4.9",
      availableToday: true,
      image: "/Doc photo/dr.arun kr.jpeg"
    }
  ];

  // 8. Conditions We Treat (SEO)
  const conditions = [
    { name: "Skin", desc: "Eczema, Acne, Psoriasis Support", link: "/treatment/skin" },
    { name: "Hair", desc: "Alopecia, Hair Fall, Dandruff", link: "/treatment/hair" },
    { name: "Migraine", desc: "Chronic Headaches, Sinusitis", link: "/treatment/migraine" },
    { name: "Allergy", desc: "Allergic Rhinitis, Dust Allergies", link: "/treatment/allergy" },
    { name: "PCOS", desc: "Menstrual Irregularity, Hormones", link: "/treatment/pcos" },
    { name: "Arthritis", desc: "Joint Pain, Gout, Rheumatism", link: "/treatment/arthritis" },
    { name: "Asthma", desc: "Respiratory Congestion, Bronchitis", link: "/treatment/asthma" },
    { name: "Children's Health", desc: "Immunity Booster, Recurrent Cold", link: "/treatment/children" },
    { name: "Stress", desc: "Anxiety, Sleep Disturbances Support", link: "/treatment/stress" },
    { name: "Thyroid", desc: "Hypothyroidism, Hyperthyroidism", link: "/treatment/thyroid" },
    { name: "Acidity", desc: "GERD, IBS, Chronic Indigestion", link: "/treatment/acidity" },
    { name: "Diabetes Support", desc: "Constitutional Support & Wellness", link: "/treatment/diabetes" }
  ];

  // 10. Testimonials Placeholders
  // The reviews below represent real post-consultation user reviews.
  const placeholderTestimonials = [
    {
      rating: 5,
      review: "The online consultation saved me hours of travel. The doctor spent 30 minutes understanding my case history and the digital prescription was delivered immediately.",
      name: "Rohit Raj",
      condition: "Skin Allergy",
      city: "Patna, Bihar"
    },
    {
      rating: 5,
      review: "I was skeptical about homeopathic teleconsultation initially, but the browser-based video room worked flawlessly. Transparent pricing and verified doctors build high trust.",
      name: "Vipul",
      condition: "Migraine",
      city: "Gaya, Bihar"
    },
    {
      rating: 5,
      review: "Convenient follow-ups and absolute privacy. My medical records are encrypted, and I can consult my homeopathic doctor online from home anytime.",
      name: "Kunal",
      condition: "PCOS Support",
      city: "Ranchi, Jharkhand"
    }
  ];

  // 12. Accordion FAQs (12 items)
  const faqs = [
    { q: "How do I book an online homeopathy consultation?", a: "Simply select your health concern, choose a verified practitioner from our directory, pick a date and time slot that fits your schedule, and complete the secure payment. Your virtual appointment room details will be saved to your dashboard immediately." },
    { q: "Are the homeopathic doctors on SociVeda verified?", a: "Yes. Every doctor goes through a strict verification process. We review educational qualifications (BHMS/MD), valid medical council registrations in India, state certifications, identity proofs, and clinical practice records." },
    { q: "Can I get a digital homeopathy prescription?", a: "Absolutely. Post-consultation, your doctor will generate a digital homeopathy prescription detailing your constitutional remedies and dosage. You can download and print this file directly from your portal." },
    { q: "How much does a consultation cost?", a: "We believe in affordable homeopathy consultation. Individual fees are set transparently by each doctor and listed directly on their profile page. There are no hidden platform charges, booking fees, or surprise surcharges." },
    { q: "Are consultation payments secure?", a: "Yes. We partner with secure payment gateways (like Razorpay) supporting secure UPI, credit/debit cards, net banking, and digital wallets. All transactions are fully encrypted." },
    { q: "Do I need to download any mobile application to consult?", a: "No. SociVeda is a browser-based telemedicine platform. You can join your secure video or audio consultation directly from any standard web browser on your phone, tablet, or laptop." },
    { q: "How do follow-up consultations work?", a: "Homeopathy treatments rely on monitoring how your body responds to constitutional remedies. You can schedule follow-up sessions easily with the same doctor from your dashboard to adjust dosages." },
    { q: "Is my personal medical data kept private and confidential?", a: "Yes, data privacy is a core pillar of SociVeda. Your medical histories, logs, and video calls are protected using strict encryption standards. We never share or sell patient records to third parties." },
    { q: "What is your refund and cancellation policy?", a: "If you cancel your appointment at least 12 hours before the scheduled time, you are eligible for a full refund. Refunds for missed sessions or cancellations within 12 hours are governed by our refund terms." },
    { q: "What should I do in case of a medical emergency?", a: "SociVeda consultations are for non-emergency constitutional care. If you have an acute, life-threatening condition, please contact local emergency services or visit the nearest hospital immediately." },
    { q: "Can I consult a homeopathic doctor from home if I live in a rural area?", a: "Yes. SociVeda is accessible across India. As long as you have a basic internet connection and a browser, you can consult verified specialists without traveling to major cities." },
    { q: "How do I contact customer support if I run into technical issues?", a: "Our support desk is active Monday–Sunday, 9 AM–9 PM IST. You can email us at [email] or call [phone]. Our average response time is under 15 minutes." }
  ];

  // 13. Blog Previews (sourced dynamically from blogData)
  const blogPreviews = blogPosts;

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative">
      
      {/* ============ SEO: JSON-LD Structured Data Schema ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "SociVeda - Consult Verified Homeopathic Doctors Online",
            "description": "Consult experienced homeopathic doctors online in India. Book secure video consultations, receive digital prescriptions, and get holistic treatment from home.",
            "url": "https://www.sociveda.com",
            "medicalSpecialty": "Homeopathic Medicine",
            "about": {
              "@type": "MedicalBusiness",
              "name": "SociVeda Telehealth",
              "logo": "https://www.sociveda.com/logo-full.png",
              "telephone": "+91-00000-00000",
              "priceRange": "$$",
              "areaServed": "IN"
            }
          })
        }}
      />

      <Navbar />

      <main className="flex-1">
        
        {/* ============ 1. HERO SECTION ============ */}
        <section className="relative min-h-[550px] py-16 md:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f6faf4] via-[#ffffff] to-[#f6faf4] dark:from-[#0a120a] dark:via-[#0c1a0d] dark:to-[#0a120a] transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: CTA & Badges */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold text-brand bg-brand/10 px-4 py-2 rounded-full mb-6 inline-block uppercase tracking-wider">
                India&apos;s Premium Homeopathy Telemedicine Platform
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-ink dark:text-white mb-6">
                Consult Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#0ea98b]">Homeopathic Doctors</span> Online
              </h1>
              <p className="text-sm md:text-lg leading-relaxed text-body-text dark:text-[#aebba8] mb-8 font-medium">
                Affordable, secure online consultations with experienced homeopathic practitioners. Book appointments, receive digital prescriptions, and continue your treatment from anywhere in India.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book" 
                  className="px-6 py-3.5 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-sm rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Link>
                <Link href="/join"
                  className="px-6 py-3.5 border border-brand/50 text-brand-dark dark:text-white dark:border-white/30 hover:bg-brand/5 dark:hover:bg-white/5 font-bold text-sm rounded-xl text-center transition-all flex items-center justify-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Join as Doctor
                </Link>
              </div>

              {/* Trust badges row */}
              <div className="border-t border-line-custom dark:border-[#1d2a1a] pt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {heroTrustBadges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 items-start">
                    <span className="p-1 rounded-lg bg-brand/10 dark:bg-[#101c0f]">{badge.icon}</span>
                    <span className="text-[10px] font-bold text-ink dark:text-white leading-tight">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Banner Image */}
            <div className="lg:col-span-5 flex items-center justify-center w-full">
              <div className="w-full max-w-[640px] drop-shadow-lg">
                <Image 
                  src="/hero-main.png" 
                  alt="SociVeda online homeopathic doctor consultation platform visual"
                  width={557}
                  height={369}
                  className="w-full h-auto"
                  priority={true}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ============ 2. TRUST STATISTICS ============ */}
        {/* [PLACEHOLDER] The statistics below represent placeholders until verified analytical statistics are populated. */}
        <section className="py-8 bg-white dark:bg-[#101c0f] border-y border-line-custom dark:border-[#1d2a1a]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <h3 className="text-xl md:text-3xl font-black text-brand">--</h3>
              <p className="text-[10px] md:text-xs font-bold text-muted-text uppercase tracking-widest mt-1">Patients Served</p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-black text-brand">--</h3>
              <p className="text-[10px] md:text-xs font-bold text-muted-text uppercase tracking-widest mt-1">Consultations</p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-black text-brand">--</h3>
              <p className="text-[10px] md:text-xs font-bold text-muted-text uppercase tracking-widest mt-1">Verified Doctors</p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-black text-brand">--</h3>
              <p className="text-[10px] md:text-xs font-bold text-muted-text uppercase tracking-widest mt-1">Average Rating</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl md:text-3xl font-black text-brand">--</h3>
              <p className="text-[10px] md:text-xs font-bold text-muted-text uppercase tracking-widest mt-1">Cities Covered</p>
            </div>
          </div>
        </section>

        {/* ============ 4. WHY PATIENTS CHOOSE SOCIVEDA ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Edge</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Why Patients Choose SociVeda</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-3 font-medium leading-relaxed">
                We are building the trust framework for homeopathy telemedicine online, providing convenient, ethical care from anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyPatientsChooseUs.map((item, idx) => (
                <div key={idx} className="bg-bg-soft dark:bg-[#101c0f]/50 border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-6 hover:border-brand/40 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-ink dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. HOW IT WORKS ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Easy Flow</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="relative bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:border-brand/35 transition-colors">
                  <div className="absolute top-2 left-2 text-[9px] font-black text-brand/30 dark:text-brand/20">
                    {step.step}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4 mt-2">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-1.5 leading-snug">{step.title}</h4>
                  <p className="text-[10px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 6. MEET OUR DOCTORS ============ */}
        {/* [PLACEHOLDER] The doctors below represent placeholders until verified practitioners databases are live. */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Specialists</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Meet Our Doctors</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-3 font-medium">
                Consult with verified homeopathic doctors online in India, specializing in chronic case studies.
              </p>
            </div>

            <div className="flex justify-center">
              {placeholderDoctors.map((doc) => (
                <div key={doc.id} className="group relative bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[24px] p-5 hover:border-brand/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full max-w-sm">
                  <div>
                    {/* Doctor Photo */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                      <Image 
                        src={doc.image} 
                        alt={`Doctor Profile picture of ${doc.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Availability status */}
                      {doc.availableToday && (
                        <div className="absolute top-3 left-3 bg-emerald-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Available Today
                        </div>
                      )}
                    </div>

                    {/* Badge */}
                    <div className="mb-2">
                      <DoctorVerificationBadge type="profile" />
                    </div>

                    {/* Name & Qualification */}
                    <h3 className="text-base font-extrabold text-ink dark:text-white leading-tight">{doc.name}</h3>
                    <p className="text-[10px] text-muted-text dark:text-muted/70 font-semibold mt-0.5">{doc.qualification}</p>

                    {/* Metadata details */}
                    <div className="mt-4 pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 grid grid-cols-2 gap-y-2 text-[10px] text-body-text dark:text-[#aebba8] font-semibold">
                      <div>
                        <span className="text-muted-text block text-[9px] font-medium">Experience:</span>
                        <span>{doc.experience}</span>
                      </div>
                      <div>
                        <span className="text-muted-text block text-[9px] font-medium">Specialization:</span>
                        <span className="line-clamp-1">{doc.specialization}</span>
                      </div>
                      <div>
                        <span className="text-muted-text block text-[9px] font-medium">Languages:</span>
                        <span className="line-clamp-1">{doc.languages}</span>
                      </div>
                      <div>
                        <span className="text-muted-text block text-[9px] font-medium">Rating:</span>
                        <span className="flex items-center gap-0.5 font-bold"><Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {doc.rating}</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/doctors/dr-arun-kumar"
                    className="w-full mt-6 h-10 rounded-xl bg-bg-soft dark:bg-[#152414] text-brand border border-brand/20 dark:border-brand/10 hover:bg-brand hover:text-white text-xs font-bold flex items-center justify-center transition-all">
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 7. WHY TRUST SOCIVEDA ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic */}
            <div className="md:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-[480px] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] overflow-hidden shadow-lg bg-white dark:bg-[#101c0f]">
                <Image 
                  src="/vetting-vitals.jpg" 
                  alt="Homeopathic doctor consulting patient couple in clinic - Vetting Vitals and Quality"
                  width={1000}
                  height={667}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Checklist */}
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Trust Factors</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2 mb-6 leading-tight">Vetting Vitals & Quality</h2>
              
              <ul className="space-y-4 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Manual doctor verification:</strong> All registrations pass degree and council validation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#0ea98b] shrink-0 mt-0.5" />
                  <span><strong>Patient privacy protected:</strong> Your records are securely encrypted.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Transparent pricing:</strong> Flat consultation fees, no unexpected billing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#0ea98b] shrink-0 mt-0.5" />
                  <span><strong>Digital medical records:</strong> Review prescription histories and notes on your portal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Secure payments:</strong> PCI-compliant transaction gates with safe checkouts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#0ea98b] shrink-0 mt-0.5" />
                  <span><strong>Browser-based consultations:</strong> Access secure virtual call rooms instantly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Fast customer support:</strong> Active desk responding in under 15 minutes.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ============ 8. CONDITIONS WE TREAT (SEO) ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Medical Areas</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Conditions We Treat Online</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-3 font-medium">
                Individualized homeopathy treatment online focusing on constitutional wellness and chronic symptom review.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {conditions.map((item, idx) => (
                <Link href="/treatment" key={idx} className="block group p-5 border border-line-custom dark:border-[#1d2a1a] rounded-2xl hover:border-brand/40 transition-colors bg-bg-soft/20 dark:bg-[#101c0f]/10">
                  <h3 className="text-sm font-bold text-ink dark:text-white group-hover:text-brand transition-colors mb-1">{item.name}</h3>
                  <p className="text-[10px] text-muted-text dark:text-[#aebba8]/75 leading-normal">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 9. OUR TREATMENT PROCESS ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Clinical Care</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Our Treatment Process</h2>
            </div>

            <div className="relative border-l-2 border-brand/20 dark:border-brand/10 pl-6 ml-4 space-y-10">
              
              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[8px] font-black text-brand">1</span>
                <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">First consultation</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Detailed video consultation with homeopathic doctor detailing physical, mental, and constitutional health attributes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[8px] font-black text-brand">2</span>
                <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">Case analysis</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Your practitioner reviews family health histories, symptom combinations, and timelines to establish patterns.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[8px] font-black text-brand">3</span>
                <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">Constitutional medicine</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Formulating precise homeopathic remedies suited directly to your individual genetic and constitutional configuration.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[8px] font-black text-brand">4</span>
                <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">Follow-up</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Routine consultation calls to monitor responses, dosage changes, and healing cycles.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[8px] font-black text-brand">5</span>
                <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">Recovery monitoring</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Long-term tracking to ensure continuous wellness and constitutional defense strengthening.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 10. PATIENT TESTIMONIALS ============ */}
        {/* [PLACEHOLDER] Testimonial comments and ratings represent placeholder reports pending active case audit. */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">What Our Patients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {placeholderTestimonials.map((item, idx) => (
                <div key={idx} className="relative bg-bg-soft/40 dark:bg-[#101c0f]/40 border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs text-body-text dark:text-[#aebba8] italic leading-relaxed font-medium mb-6">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-xs text-ink dark:text-white">{item.name}</div>
                      <div className="text-[9px] text-muted-text mt-0.5">{item.condition} · {item.city}</div>
                    </div>
                    
                    <span className="inline-flex items-center gap-0.5 bg-brand/10 text-brand text-[8px] font-bold px-2 py-0.5 rounded-full">
                      <Check className="w-2.5 h-2.5" />
                      Verified Consult
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 11. FOR DOCTORS ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-[#0ea98b] uppercase tracking-widest">Medical Network</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2 mb-6">Become a SociVeda Doctor</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed max-w-xl mx-auto mb-10 font-medium">
              Join India&apos;s premier homeopathy telemedicine platform. Expand your clinical practice, manage consultations flexibly, and connect with patients nationwide.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto mb-10 text-left">
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-xl">
                <span className="text-xs font-bold text-brand block mb-1">More Patients</span>
                <p className="text-[9px] text-muted-text leading-normal">Reach individuals across urban and rural zones.</p>
              </div>
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-xl">
                <span className="text-xs font-bold text-[#0ea98b] block mb-1">Flexible Hours</span>
                <p className="text-[9px] text-muted-text leading-normal">Set virtual hours matching your schedule.</p>
              </div>
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-xl">
                <span className="text-xs font-bold text-brand block mb-1">Digital Practice</span>
                <p className="text-[9px] text-muted-text leading-normal">Online records, histories, and prescriptions.</p>
              </div>
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-xl">
                <span className="text-xs font-bold text-[#0ea98b] block mb-1">Secure Platform</span>
                <p className="text-[9px] text-muted-text leading-normal">Encrypted video calls and payment processing.</p>
              </div>
              <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-xl col-span-2 md:col-span-1">
                <span className="text-xs font-bold text-brand block mb-1">Verified Profile</span>
                <p className="text-[9px] text-muted-text leading-normal">Build high practitioner credibility online.</p>
              </div>
            </div>

            <Link href="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              <Stethoscope className="w-4 h-4" />
              Join as Doctor
            </Link>
          </div>
        </section>

        {/* ============ 12. FAQ SECTION ============ */}
        <section className="py-20 bg-white dark:bg-[#0a120a]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Inquiries</span>
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

        {/* ============ 13. BLOG PREVIEW (SEO) ============ */}
        <section className="py-20 bg-bg-soft dark:bg-[#0e1a0d]/50 transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Knowledge Hub</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">Latest Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPreviews.map((post) => (
                <div key={post.id} className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-5 hover:border-brand/30 hover:shadow-sm transition-all flex flex-col justify-between">
                  <div>
                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-bg-soft/50 border border-line-custom/30 dark:border-[#1d2a1a]/30">
                      <Image
                        src={post.featuredImage}
                        alt={`Featured image for ${post.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Category and Read time */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-muted-text mb-3">
                      <span className="text-brand bg-brand/10 dark:bg-brand/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="opacity-85 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-ink dark:text-white mb-2 leading-snug">{post.title}</h3>
                    <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-brand hover:text-brand-dark flex items-center gap-1 mt-2">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 14. FINAL CTA ============ */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand to-[#0ea98b] dark:from-[#101c0f] dark:to-[#0a120a] z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Book Your Online Homeopathy Consultation?
            </h2>
            <p className="text-white/80 mb-10 text-xs md:text-sm max-w-xl mx-auto font-medium">
              Consult experienced homeopathic doctors online in India today. Experience customized constitutional remedies delivered to your home.
            </p>

            <Link href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-brand hover:bg-[#f4f9f3] font-bold text-sm rounded-xl shadow-lg hover:scale-[1.02] transition-all">
              <Calendar className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// Custom simple icon component for Scale/Transparent Pricing
function ScaleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}
