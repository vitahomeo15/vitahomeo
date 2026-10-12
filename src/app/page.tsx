import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  UserCheck, 
  FileHeart,
  Laptop,
  Stethoscope
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homeopathy Consultations | VitaHomeo",
  description: "Connect with verified homeopathic doctors online. Request secure video consultations, receive digital prescriptions, and get personalized constitutional care from home.",
  alternates: {
    canonical: "https://www.vitahomeo.com",
  },
};

export default async function Home() {
  // Hero trust badges
  const heroTrustBadges = [
    { icon: <UserCheck className="w-5 h-5" />, text: "Verified Doctors" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Secure Booking" },
    { icon: <FileText className="w-5 h-5" />, text: "Digital Prescriptions" },
    { icon: <Lock className="w-5 h-5" />, text: "Private Sessions" },
    { icon: <Clock className="w-5 h-5" />, text: "Flexible Hours" }
  ];

  // Why Patients Choose Us
  const whyPatientsChooseUs = [
    { 
      icon: <UserCheck className="w-6 h-6" />, 
      title: "Verified Homeopathic Doctors", 
      desc: "Every doctor is manually vetted, checking medical degrees, council registration validity, and clinical practice backgrounds." 
    },
    { 
      icon: <Lock className="w-6 h-6" />, 
      title: "Private & Secure Calls", 
      desc: "Video consultations are conducted over secure platforms, keeping your health discussions confidential." 
    },
    { 
      icon: <Lock className="w-6 h-6" />, 
      title: "Transparent Pricing", 
      desc: "Individual consultation fees are clearly shown on each profile page before you schedule. No hidden platform costs." 
    },
    { 
      icon: <FileHeart className="w-6 h-6" />, 
      title: "Digital Prescriptions", 
      desc: "Receive your constitutional homeopathy digital prescription detailing remedies and dosage immediately after your session." 
    },
    { 
      icon: <Laptop className="w-6 h-6" />, 
      title: "No App Installation", 
      desc: "Consult directly via any browser on your mobile phone, tablet, or desktop. No downloads or installations needed." 
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      title: "Structured Follow-ups", 
      desc: "Homeopathy acts dynamically. Schedule continuous review calls to monitor your recovery and adjust remedies over time." 
    }
  ];

  // How It Works (Simplified 3 Steps)
  const howItWorksSteps = [
    { step: "01", title: "Find your doctor", desc: "Browse available homeopathic practitioners, check qualifications, language preference, and consulting fees.", icon: <Search className="w-5 h-5" /> },
    { step: "02", title: "Book a consultation", desc: "Pick a date and timing slot that matches your schedule, and fill in your details to secure the booking.", icon: <Calendar className="w-5 h-5" /> },
    { step: "03", title: "Consult online", desc: "Meet your practitioner over a secure video or audio call directly in your browser.", icon: <Video className="w-5 h-5" /> }
  ];

  // Conditions We Treat (SEO)
  const conditions = [
    { name: "Skin Care", desc: "Support for Eczema, Acne, and Dermatitis", link: "/treatment" },
    { name: "Hair Care", desc: "Dandruff, Hair Fall, and Alopecia Support", link: "/treatment" },
    { name: "Migraine", desc: "Management of Sinusitis and Chronic Headaches", link: "/treatment" },
    { name: "Allergies", desc: "Rhinitis, Dust, and Seasonal Allergies", link: "/treatment" },
    { name: "PCOS Support", desc: "Cycle Regulation and Endocrine Wellness", link: "/treatment" },
    { name: "Joint Stiffness", desc: "Arthritis, Rheumatism, and Mobility Support", link: "/treatment" },
    { name: "Respiratory Care", desc: "Bronchitis and Chest Congestion Support", link: "/treatment" },
    { name: "Digestive Wellness", desc: "Acidity, Indigestion, and IBS Support", link: "/treatment" }
  ];

  // Curated FAQ Section
  const faqs = [
    { q: "How do I book a consultation?", a: "Choose a doctor and submit your consultation request with your preferred date and time. Our team will contact you on WhatsApp to confirm the doctor's availability and appointment time. Once confirmed, we will share the payment details and consultation instructions." },
    { q: "Is my appointment confirmed immediately after submitting the form?", a: "No. Submitting the form sends a consultation request. Your appointment is confirmed only after our team contacts you on WhatsApp and confirms the doctor's availability and appointment time." },
    { q: "Can I choose my preferred time?", a: "Yes. You can provide your preferred date and time when submitting your consultation request. Our team will confirm the available appointment time with you." },
    { q: "How will I receive consultation details?", a: "You will receive your consultation video call link and instructions directly from our team via WhatsApp once the appointment and payment are confirmed." },
    { q: "How do I pay?", a: "After your appointment is confirmed, our team will share the available UPI payment details with you on WhatsApp." },
    { q: "Can I get a digital prescription?", a: "Yes. Once the consultation concludes, your doctor generates an official digital prescription. This will be shared with you on WhatsApp so you can save or print it." },
    { q: "Are the homeopathic doctors on VitaHomeo verified?", a: "Yes. Every doctor goes through manual credential validation. We verify medical degrees (BHMS/DHMS/MD), state council registrations in India, and past clinical records." }
  ];

  // Blog Previews (Curated for the homepage)
  const blogPreviews = [
    blogPosts.find(p => p.id === "post-1"),
    blogPosts.find(p => p.id === "post-2"),
    blogPosts.find(p => p.id === "post-5")
  ].filter((p): p is typeof blogPosts[0] => !!p);

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative">
      
      {/* ============ SEO: JSON-LD Structured Data Schema ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "VitaHomeo - Connect With Verified Homeopathic Doctors Online",
            "description": "Consult experienced homeopathic doctors online in India. Request secure consultations, receive digital prescriptions, and get personalized care from home.",
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
                A Growing Network of Verified Homeopathic Doctors
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink dark:text-white mb-6 font-display">
                Online Homeopathy Consultations With Verified Doctors
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-body-text dark:text-[#aebba8] mb-10 font-medium">
                Connect with verified homeopathic practitioners for personalized, constitutional care. Book secure video consultations, share reports, and receive digital prescriptions, all from the comfort of your home.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/doctors" 
                  className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold text-sm rounded-button text-center shadow-button-premium hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-4.5 h-4.5" />
                  Book Consultation
                </Link>
                <Link href="/join"
                  className="px-8 py-4 bg-white border border-brand text-brand-dark dark:text-white dark:border-white/30 hover:bg-bg-soft font-semibold text-sm rounded-button text-center shadow-button-premium hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Stethoscope className="w-4.5 h-4.5" />
                  Join as a Doctor
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

        {/* ============ 2. HOW VITAHOMEO WORKS ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors border-t border-line-custom dark:border-[#1d2a1a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Simple 3-Step Process</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="relative bg-white dark:bg-[#141e14] border border-[#E6ECE6] dark:border-[#1d2a1a] p-8 rounded-card flex flex-col items-center text-center shadow-card-premium hover:border-brand/35 hover:shadow-floating-premium transition-all duration-300">
                  <div className="absolute top-4 left-4 text-xs font-bold text-brand/40 dark:text-brand/30 font-display">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-bg-soft dark:bg-[#101c0f] text-brand flex items-center justify-center mb-6 mt-2 border border-line-custom/30 dark:border-brand/10">
                    {step.icon}
                  </div>
                  <h4 className="text-base font-bold text-ink dark:text-white mb-3 font-display">{step.title}</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3. WHY PATIENTS CHOOSE VITAHOMEO ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-line-custom dark:border-[#1d2a1a] transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Our Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Why Patients Choose VitaHomeo</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium leading-relaxed max-w-xl mx-auto">
                We bridge the gap in homeopathic care, offering a safe, digital space to consult with verified doctors from anywhere.
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

        {/* ============ 5. TRUST FACTORS / WHY TRUST VITAHOMEO ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors border-t border-line-custom dark:border-[#1d2a1a]">
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
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Quality Standards</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 mb-8 leading-tight font-display">Strict Verification & Safety</h2>
              
              <ul className="space-y-5 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Credentials Verification:</strong> All practitioner applications pass manual council checks and degree validations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Confidentiality First:</strong> Consultations run in private, secure environments protecting patient data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Transparent Fees:</strong> Fees are set directly by doctors and shown upfront. Zero registration fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Secure Transactions:</strong> UPI payment details are shared securely via WhatsApp for easy transfer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span><strong>Reliable Support:</strong> Responsive team addressing patient and tech inquiries quickly.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ============ 6. CONDITIONS WE TREAT (SEO) ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-y border-line-custom dark:border-[#1d2a1a]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Clinical Care</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Conditions We Support</h2>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-4 font-medium">
                Homeopathy focuses on the whole person. We offer constitutional guidance and support across multiple areas.
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

        {/* ============ 7. WHY CHOOSE ONLINE CONSULTATIONS ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Convenience</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Why Patients Choose Online Consultations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-8 rounded-card shadow-card-premium">
                <span className="text-brand font-bold text-lg block mb-4 font-display">Zero Travel Stress</span>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Consult with specialists directly from home. Save time and money spent traveling to physical clinics or waiting in crowded rooms.
                </p>
              </div>
              <div className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-8 rounded-card shadow-card-premium">
                <span className="text-brand font-bold text-lg block mb-4 font-display">Pan-India Availability</span>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Whether you live in a metro city or a remote town, receive high-quality homeopathic advice as long as you have an internet connection.
                </p>
              </div>
              <div className="bg-[#F8FAF7] dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] p-8 rounded-card shadow-card-premium">
                <span className="text-brand font-bold text-lg block mb-4 font-display">Digital Prescriptions</span>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Receive signed digital prescriptions directly via WhatsApp. Keep your prescription files saved for printing or viewing at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 8. FOR DOCTORS ============ */}
        <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-line-custom dark:border-[#1d2a1a] transition-colors">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Medical Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 mb-8 font-display">Become a VitaHomeo Doctor</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] leading-relaxed max-w-xl mx-auto mb-12 font-medium">
              Join our growing network of verified homeopathic practitioners. Manage your consulting hours, consult patients nationwide, and build your digital practice.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto mb-12 text-left">
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-6 rounded-card shadow-card-premium">
                <span className="text-sm font-bold text-brand block mb-2 font-display">Patient Reach</span>
                <p className="text-xs text-muted-text leading-relaxed">Connect with patients across urban and rural India.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-6 rounded-card shadow-card-premium">
                <span className="text-sm font-bold text-brand block mb-2 font-display">Flexible Hours</span>
                <p className="text-xs text-muted-text leading-relaxed">Set your consultation slots to match your schedule.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-6 rounded-card shadow-card-premium">
                <span className="text-sm font-bold text-brand block mb-2 font-display">Practice Management</span>
                <p className="text-xs text-muted-text leading-relaxed">Easily access patient consultation histories and send digital prescriptions.</p>
              </div>
              <div className="bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1d2a1a] p-6 rounded-card shadow-card-premium">
                <span className="text-sm font-bold text-brand block mb-2 font-display">Credibility</span>
                <p className="text-xs text-muted-text leading-relaxed">Showcase your clinical council credentials with a verified profile.</p>
              </div>
            </div>

            <Link href="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand hover:bg-brand-hover text-white font-semibold text-sm rounded-button shadow-button-premium hover:scale-[1.02] transition-all">
              <Stethoscope className="w-4 h-4" />
              Join as a Doctor
            </Link>
          </div>
        </section>

        {/* ============ 9. FAQ SECTION ============ */}
        <section className="py-28 bg-white dark:bg-[#0a120a] border-t border-line-custom dark:border-[#1d2a1a]">
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

        {/* ============ 10. BLOG PREVIEW (SEO) ============ */}
        {blogPreviews.length > 0 && (
          <section className="py-28 bg-[#F8FAF7] dark:bg-[#0e1a0d]/30 border-t border-line-custom dark:border-[#1d2a1a] transition-colors">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-20">
                <span className="text-xs font-bold text-brand uppercase tracking-widest">Insights</span>
                <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-2 font-display">Wellness Articles</h2>
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
        )}

        {/* ============ 11. FINAL CTA ============ */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark dark:from-[#101710] dark:to-[#0a120a] z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
              Ready to consult a homeopathic doctor?
            </h2>
            <p className="text-white/80 mb-10 text-xs md:text-sm max-w-xl mx-auto font-medium">
              Book a secure video consultation with verified practitioners and receive personalized care from home.
            </p>

            <Link href="/doctors"
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
