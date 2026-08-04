import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DoctorVerificationBadge } from "@/components/DoctorVerificationBadge";
import { blogPosts } from "@/data/blogData";
import { 
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
    { icon: <UserCheck className="w-5 h-5" />, text: "Verified Doctors" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Secure Payments" },
    { icon: <FileText className="w-5 h-5" />, text: "Digital Prescriptions" },
    { icon: <Lock className="w-5 h-5" />, text: "Private Consultations" },
    { icon: <Clock className="w-5 h-5" />, text: "Support Available" }
  ];

  // 4. Why Patients Choose Us
  const whyPatientsChooseUs = [
    { 
      icon: <UserCheck className="w-6 h-6" />, 
      title: "Verified Homeopathic Doctors", 
      desc: "Every practitioner undergoes multi-stage credential checks including degrees, council registrations, and clinical experience." 
    },
    { 
      icon: <Lock className="w-6 h-6" />, 
      title: "Private Consultations", 
      desc: "Virtual consultation rooms use encrypted WebRTC pipelines to secure your audio, video, and text sessions." 
    },
    { 
      icon: <ScaleIcon className="w-6 h-6" />, 
      title: "Transparent Pricing", 
      desc: "Fees are shown clearly before booking. There are no hidden platform costs, registration charges, or surprise billing." 
    },
    { 
      icon: <FileHeart className="w-6 h-6" />, 
      title: "Digital Prescriptions", 
      desc: "Get an official constitutional homeopathy digital prescription instantly after your consultation concludes." 
    },
    { 
      icon: <Laptop className="w-6 h-6" />, 
      title: "No App Required", 
      desc: "Consult directly via your browser on any phone, tablet, or laptop. No downloads or installations needed." 
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
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
    { name: "Skin", desc: "Eczema, Acne, Psoriasis Support", link: "/treatment" },
    { name: "Hair", desc: "Alopecia, Hair Fall, Dandruff", link: "/treatment" },
    { name: "Migraine", desc: "Chronic Headaches, Sinusitis", link: "/treatment" },
    { name: "Allergy", desc: "Allergic Rhinitis, Dust Allergies", link: "/treatment" },
    { name: "PCOS", desc: "Menstrual Irregularity, Hormones", link: "/treatment" },
    { name: "Arthritis", desc: "Joint Pain, Gout, Rheumatism", link: "/treatment" },
    { name: "Asthma", desc: "Respiratory Congestion, Bronchitis", link: "/treatment" },
    { name: "Children's Health", desc: "Immunity Booster, Recurrent Cold", link: "/treatment" },
    { name: "Stress", desc: "Anxiety, Sleep Disturbances Support", link: "/treatment" },
    { name: "Thyroid", desc: "Hypothyroidism, Hyperthyroidism", link: "/treatment" },
    { name: "Acidity", desc: "GERD, IBS, Chronic Indigestion", link: "/treatment" },
    { name: "Diabetes Support", desc: "Constitutional Support & Wellness", link: "/treatment" }
  ];

  // 10. Testimonials Placeholders
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
    { q: "Are the homeopathic doctors on VitaHomeo verified?", a: "Yes. Every doctor goes through a strict verification process. We review educational qualifications (BHMS/MD), valid medical council registrations in India, state certifications, identity proofs, and clinical practice records." },
    { q: "Can I get a digital homeopathy prescription?", a: "Absolutely. Post-consultation, your doctor will generate a digital homeopathy prescription detailing your constitutional remedies and dosage. You can download and print this file directly from your portal." },
    { q: "How much does a consultation cost?", a: "We believe in affordable homeopathy consultation. Individual fees are set transparently by each doctor and listed directly on their profile page. There are no hidden platform charges, booking fees, or surprise surcharges." },
    { q: "Are consultation payments secure?", a: "Yes. We partner with secure payment gateways (like Razorpay) supporting secure UPI, credit/debit cards, net banking, and digital wallets. All transactions are fully encrypted." },
    { q: "Do I need to download any mobile application to consult?", a: "No. VitaHomeo is a browser-based telemedicine platform. You can join your secure video or audio consultation directly from any standard web browser on your phone, tablet, or laptop." },
    { q: "How do follow-up consultations work?", a: "Homeopathy treatments rely on monitoring how your body responds to constitutional remedies. You can schedule follow-up sessions easily with the same doctor from your dashboard to adjust dosages." },
    { q: "Is my personal medical data kept private and confidential?", a: "Yes, data privacy is a core pillar of VitaHomeo. Your medical histories, logs, and video calls are protected using strict encryption standards. We never share or sell patient records to third parties." },
    { q: "What is your refund and cancellation policy?", a: "If you cancel your appointment at least 12 hours before the scheduled time, you are eligible for a full refund. Refunds for missed sessions or cancellations within 12 hours are governed by our refund terms." },
    { q: "What should I do in case of a medical emergency?", a: "VitaHomeo consultations are for non-emergency constitutional care. If you have an acute, life-threatening condition, please contact local emergency services or visit the nearest hospital immediately." },
    { q: "Can I consult a homeopathic doctor from home if I live in a rural area?", a: "Yes. VitaHomeo is accessible across India. As long as you have a basic internet connection and a browser, you can consult verified specialists without traveling to major cities." },
    { q: "How do I contact customer support if I run into technical issues?", a: "Our support desk is active Monday–Sunday, 9 AM–9 PM IST. You can email us at akshraj2255@gmail.com or call +91 77659 91145. Our average response time is under 15 minutes." }
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
            "name": "VitaHomeo - Consult Verified Homeopathic Doctors Online",
            "description": "Consult experienced homeopathic doctors online in India. Book secure video consultations, receive digital prescriptions, and get holistic treatment from home.",
            "url": "https://www.vitahomeo.com",
            "medicalSpecialty": "Homeopathic Medicine",
            "about": {
              "@type": "MedicalBusiness",
              "name": "VitaHomeo Telehealth",
              "logo": "https://www.vitahomeo.com/logo-vitahomeo.png",
              "telephone": "+91-77659-91145",
              "priceRange": "$$",
              "areaServed": "IN"
            }
          })
        }}
      />

      <Navbar />

      <main className="flex-1">
        
        {/* ============ 1. HERO SECTION ============ */}
        <section className="relative min-h-[600px] py-24 md:py-32 flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a120a] transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            
            {/* Left Column: CTA & Badges */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold text-brand bg-brand-light/30 dark:bg-brand-light/10 px-4 py-2 rounded-full mb-6 inline-block uppercase tracking-wider">
                India&apos;s Premium Homeopathy Telemedicine Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink dark:text-white mb-6 font-display">
                Consult Verified <span className="text-brand">Homeopathic Doctors</span> Online
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-body-text dark:text-[#aebba8] mb-10 font-medium">
                Affordable, secure online consultations with experienced homeopathic practitioners. Book appointments, receive digital prescriptions, upload medical reports, and schedule follow-ups entirely from the comfort of home.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/book" 
                  className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold text-sm rounded-button text-center shadow-button-premium hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-4.5 h-4.5" />
                  Book Consultation
                </Link>
                <Link href="/join"
                  className="px-8 py-4 bg-white border border-brand text-brand-dark dark:text-white dark:border-white/30 hover:bg-bg-soft font-semibold text-sm rounded-button text-center shadow-button-premium hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Stethoscope className="w-4.5 h-4.5" />
                  Join as Doctor
                </Link>
              </div>

              {/* Trust badges row */}
              <div className="border-t border-[#e6ece6] dark:border-[#1d2a1a] pt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
                {heroTrustBadges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col gap-2 items-start">
                    <span className="p-2 rounded-xl bg-bg-soft dark:bg-[#101c0f] text-brand shadow-sm border border-line-custom/30">{badge.icon}</span>
                    <span className="text-[10px] font-semibold text-ink dark:text-white leading-tight uppercase tracking-wider">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Banner Image */}
            <div className="lg:col-span-5 flex items-center justify-center w-full">
              <div className="w-full max-w-[640px]">
                <Image 
                  src="/hero-main.jpg" 
                  alt="VitaHomeo premium online homeopathic doctor teleconsultation scene"
                  width={557}
                  height={369}
                  className="w-full h-auto rounded-image shadow-floating-premium object-cover"
                  priority={true}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ============ 2. TRUST STATISTICS ============ */}
        <section className="py-12 bg-[#FCFCFA] dark:bg-[#101c0f] border-y border-line-custom dark:border-[#1d2a1a]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-brand font-display">15,000+</h3>
              <p className="text-[10px] md:text-xs font-semibold text-muted-text uppercase tracking-widest mt-2">Patients Served</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-brand font-display">25,000+</h3>
              <p className="text-[10px] md:text-xs font-semibold text-muted-text uppercase tracking-widest mt-2">Consultations</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-brand font-display">120+</h3>
              <p className="text-[10px] md:text-xs font-semibold text-muted-text uppercase tracking-widest mt-2">Verified Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-brand font-display">4.9/5</h3>
              <p className="text-[10px] md:text-xs font-semibold text-muted-text uppercase tracking-widest mt-2">Average Rating</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl md:text-4xl font-bold text-brand font-display">280+</h3>
              <p className="text-[10px] md:text-xs font-semibold text-muted-text uppercase tracking-widest mt-2">Cities Covered</p>
            </div>
          </div>
        </section>

        {/* ============ 4. WHY PATIENTS CHOOSE VITAHOMEO ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Edge</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Why Patients Choose VitaHomeo</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium leading-relaxed max-w-xl mx-auto">
                We are building the trust framework for homeopathy telemedicine online, providing convenient, ethical care from anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyPatientsChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-[#141e14] border border-[#E6ECE6] dark:border-[#1d2a1a] rounded-card p-8 hover:border-brand/40 hover:shadow-floating-premium transition-all duration-300 shadow-card-premium group">
                  <div className="w-12 h-12 rounded-xl bg-bg-soft dark:bg-[#101c0f] text-brand group-hover:text-brand-dark flex items-center justify-center mb-6 border border-line-custom/30 dark:border-brand/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-ink dark:text-white mb-3 font-display">{item.title}</h3>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. HOW IT WORKS ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Easy Flow</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="relative bg-white dark:bg-[#141e14] border border-[#E6ECE6] dark:border-[#1d2a1a] p-6 rounded-card flex flex-col items-center text-center shadow-card-premium hover:border-brand/35 hover:shadow-floating-premium transition-all duration-300">
                  <div className="absolute top-3 left-3 text-[10px] font-bold text-brand/40 dark:text-brand/30">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-bg-soft dark:bg-[#101c0f] text-brand flex items-center justify-center mb-5 mt-2 border border-line-custom/30 dark:border-brand/10">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-ink dark:text-white mb-2 leading-snug font-display">{step.title}</h4>
                  <p className="text-[10px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 6. MEET OUR DOCTORS ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Specialists</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Meet Our Doctors</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium">
                Consult with verified homeopathic doctors online in India, specializing in chronic case studies.
              </p>
            </div>

            <div className="flex justify-center">
              {placeholderDoctors.map((doc) => (
                <div key={doc.id} className="group relative bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] rounded-card p-6 hover:border-brand/30 hover:shadow-floating-premium transition-all duration-300 flex flex-col justify-between w-full max-w-sm shadow-card-premium">
                  <div>
                    {/* Doctor Photo */}
                    <div className="relative w-full aspect-[4/3] rounded-image overflow-hidden mb-5">
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
                        <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Available Today
                        </div>
                      )}
                    </div>

                    {/* Badge */}
                    <div className="mb-3">
                      <DoctorVerificationBadge type="profile" />
                    </div>

                    {/* Name & Qualification */}
                    <h3 className="text-lg font-bold text-ink dark:text-white leading-tight font-display">{doc.name}</h3>
                    <p className="text-[10px] text-muted-text dark:text-muted/70 font-semibold mt-1">{doc.qualification}</p>

                    {/* Metadata details */}
                    <div className="mt-5 pt-4 border-t border-[#e6ece6] dark:border-[#1d2a1a]/50 grid grid-cols-2 gap-y-3 text-[10px] text-body-text dark:text-[#aebba8] font-semibold">
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
                        <span className="flex items-center gap-1 font-bold"><Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {doc.rating}</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/doctors/dr-arun-kumar"
                    className="w-full mt-8 h-11 rounded-button bg-bg-soft dark:bg-[#152414] text-brand hover:bg-brand hover:text-white text-xs font-bold flex items-center justify-center transition-all border border-brand/10 shadow-sm hover:shadow-button-premium">
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 7. WHY TRUST VITAHOMEO ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic */}
            <div className="md:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-[480px]">
                <Image 
                  src="/vetting-vitals.jpg" 
                  alt="VitaHomeo homeopathic doctor reviewing digital medical reports and prescriptions"
                  width={1000}
                  height={667}
                  className="w-full h-auto rounded-image shadow-floating-premium object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Checklist */}
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Trust Factors</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 mb-8 leading-tight font-display">Vetting Vitals & Quality</h2>
              
              <ul className="space-y-5 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Manual doctor verification:</strong> All registrations pass degree and council validation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Patient privacy protected:</strong> Your records are securely encrypted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Transparent pricing:</strong> Flat consultation fees, no unexpected billing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Digital medical records:</strong> Review prescription histories and notes on your portal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Secure payments:</strong> PCI-compliant transaction gates with safe checkouts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Browser-based consultations:</strong> Access secure virtual call rooms instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Fast customer support:</strong> Active desk responding in under 15 minutes.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ============ 8. CONDITIONS WE TREAT (SEO) ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Medical Areas</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Conditions We Treat Online</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium">
                Individualized homeopathy treatment online focusing on constitutional wellness and chronic symptom review.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {conditions.map((item, idx) => (
                <Link href="/treatment" key={idx} className="block group p-6 border border-[#e6ece6] dark:border-[#1d2a1a] rounded-card hover:border-brand/40 hover:shadow-floating-premium transition-all duration-300 bg-white dark:bg-[#141e14] shadow-card-premium">
                  <h3 className="text-sm font-bold text-ink dark:text-white group-hover:text-brand transition-colors mb-1.5 font-display">{item.name}</h3>
                  <p className="text-[10px] text-muted-text dark:text-[#aebba8]/75 leading-normal">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 9. OUR TREATMENT PROCESS ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Clinical Care</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Our Treatment Process</h2>
            </div>

            <div className="relative border-l-2 border-brand/20 dark:border-brand/10 pl-8 ml-4 space-y-12">
              
              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0.5 w-6 h-6 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[10px] font-bold text-brand">1</span>
                <h4 className="text-sm font-bold text-ink dark:text-white mb-2 font-display">First consultation</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Detailed video consultation with homeopathic doctor detailing physical, mental, and constitutional health attributes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0.5 w-6 h-6 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[10px] font-bold text-brand">2</span>
                <h4 className="text-sm font-bold text-ink dark:text-white mb-2 font-display">Case analysis</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Your practitioner reviews family health histories, symptom combinations, and timelines to establish patterns.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0.5 w-6 h-6 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[10px] font-bold text-brand">3</span>
                <h4 className="text-sm font-bold text-ink dark:text-white mb-2 font-display">Constitutional medicine</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Formulating precise homeopathic remedies suited directly to your individual genetic and constitutional configuration.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0.5 w-6 h-6 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[10px] font-bold text-brand">4</span>
                <h4 className="text-sm font-bold text-ink dark:text-white mb-2 font-display">Follow-up</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Routine consultation calls to monitor responses, dosage changes, and healing cycles.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0.5 w-6 h-6 rounded-full border-2 border-brand bg-white dark:bg-[#0a120a] flex items-center justify-center text-[10px] font-bold text-brand">5</span>
                <h4 className="text-sm font-bold text-ink dark:text-white mb-2 font-display">Recovery monitoring</h4>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                  Long-term tracking to ensure continuous wellness and constitutional defense strengthening.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 10. PATIENT TESTIMONIALS ============ */}
        <section className="py-28 bg-[#F5F8F5] dark:bg-[#101710] transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">What Our Patients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {placeholderTestimonials.map((item, idx) => (
                <div key={idx} className="relative bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-8 flex flex-col justify-between hover:shadow-floating-premium transition-all duration-300 shadow-card-premium">
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

                  <div className="pt-4 border-t border-[#e6ece6] dark:border-[#1c271c] flex justify-between items-center">
                    <div>
                      <div className="font-bold text-xs text-ink dark:text-white">{item.name}</div>
                      <div className="text-[9px] text-muted-text mt-0.5">{item.condition} · {item.city}</div>
                    </div>
                    
                    <span className="inline-flex items-center gap-1 bg-bg-soft dark:bg-[#101710] text-brand text-[8px] font-bold px-2.5 py-1 rounded-full border border-line-custom/30">
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
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 transition-colors">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Medical Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 mb-8 font-display">Become a VitaHomeo Doctor</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed max-w-xl mx-auto mb-12 font-medium">
              Join India&apos;s premier homeopathy telemedicine platform. Expand your clinical practice, manage consultations flexibly, and connect with patients nationwide.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto mb-12 text-left">
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-5 rounded-card shadow-card-premium">
                <span className="text-xs font-bold text-brand block mb-1 font-display">More Patients</span>
                <p className="text-[9px] text-muted-text leading-normal">Reach individuals across urban and rural zones.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-5 rounded-card shadow-card-premium">
                <span className="text-xs font-bold text-brand block mb-1 font-display">Flexible Hours</span>
                <p className="text-[9px] text-muted-text leading-normal">Set virtual hours matching your schedule.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-5 rounded-card shadow-card-premium">
                <span className="text-xs font-bold text-brand block mb-1 font-display">Digital Practice</span>
                <p className="text-[9px] text-muted-text leading-normal">Online records, histories, and prescriptions.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-5 rounded-card shadow-card-premium">
                <span className="text-xs font-bold text-brand block mb-1 font-display">Secure Platform</span>
                <p className="text-[9px] text-muted-text leading-normal">Encrypted video calls and payment processing.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-5 rounded-card shadow-card-premium col-span-2 md:col-span-1">
                <span className="text-xs font-bold text-brand block mb-1 font-display">Verified Profile</span>
                <p className="text-[9px] text-muted-text leading-normal">Build high practitioner credibility online.</p>
              </div>
            </div>

            <Link href="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand hover:bg-brand-hover text-white font-semibold text-sm rounded-button shadow-button-premium hover:scale-[1.02] transition-all">
              <Stethoscope className="w-4 h-4" />
              Join as Doctor
            </Link>
          </div>
        </section>

        {/* ============ 12. FAQ SECTION ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Inquiries</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Frequently Asked Questions</h2>
            </div>

            <div className="flex flex-col gap-5 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  className="group bg-[#F5F8F5] dark:bg-[#101710] border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-6 [&_summary::-webkit-details-marker]:hidden hover:border-brand/35 hover:shadow-card-premium transition-all duration-300"
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

        {/* ============ 13. BLOG PREVIEW (SEO) ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Knowledge Hub</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Latest Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPreviews.map((post) => (
                <div key={post.id} className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] rounded-card p-6 hover:border-brand/30 hover:shadow-floating-premium transition-all duration-300 flex flex-col justify-between shadow-card-premium">
                  <div>
                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-bg-soft/50 border border-line-custom/30 dark:border-[#1d2a1a]/30">
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
                    <div className="flex items-center justify-between text-[10px] font-semibold text-muted-text mb-3">
                      <span className="text-brand bg-bg-soft dark:bg-brand/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="opacity-85 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-ink dark:text-white mb-2 leading-snug font-display">{post.title}</h3>
                    <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed font-medium mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-brand hover:text-brand-hover flex items-center gap-1 mt-3">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 14. FINAL CTA ============ */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark dark:from-[#101710] dark:to-[#0a120a] z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
              Ready to Book Your Online Homeopathy Consultation?
            </h2>
            <p className="text-white/80 mb-10 text-xs md:text-sm max-w-xl mx-auto font-medium">
              Consult experienced homeopathic doctors online in India today. Experience customized constitutional remedies delivered to your home.
            </p>

            <Link href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand hover:bg-[#F5F8F5] font-semibold text-sm rounded-button shadow-button-premium hover:scale-[1.02] transition-all">
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
