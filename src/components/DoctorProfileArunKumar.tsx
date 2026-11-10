"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Stethoscope,
  Clock,
  IndianRupee,
  Star,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Calendar,
  Check,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Video,
  ArrowRight,
  ThumbsUp,
  HeartHandshake,
  Phone
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

interface Review {
  name: string;
  rating: number;
  date: string;
  condition: string;
  comment: string;
  verified: boolean;
}

const WHATSAPP_NUMBER = "917765991145";

interface DoctorProfileArunKumarProps {
  doctor: {
    id?: string;
    slug?: string;
    name: string;
    degree: string;
    experience?: string;
    location: string;
    specialty: string;
    bio: string;
    fee?: string;
    timing?: string;
    days?: string;
    image: string;
    expertise?: string[];
    registration_number?: string;
    registration_authority?: string;
    verification_status?: "pending" | "under_review" | "verified" | "rejected";
    consultation_type?: string;

    // Address fields
    clinic_address?: string;
    locality?: string;
    city?: string;
    state?: string;
    pin_code?: string;
    google_maps_url?: string;
  };
}

export default function DoctorProfileArunKumar({ doctor }: DoctorProfileArunKumarProps) {
  // Booking widget state
  const [selectedMode, setSelectedMode] = useState<"video" | "audio">("video");
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("06:00 PM");

  // FAQ Accordion open states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Patient Reviews State - starts with 0 reviews
  const initialReviews: Review[] = [];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  // Write Review Form State
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    condition: "",
    comment: ""
  });
  const [reviewErrors, setReviewErrors] = useState<Record<string, string>>({});
  const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(false);

  // Available dates for booking (Next 7 days)
  const generateDates = () => {
    const list = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-US", { weekday: "short" });
      const dateNum = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const fullDate = d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      list.push({ dayName, dateNum, fullDate });
    }
    return list;
  };
  const bookingDates = generateDates();

  // Evening time slots for Dr. Arun Kumar (6:00 PM - 10:00 PM)
  const timeSlots = ["06:00 PM", "06:45 PM", "07:30 PM", "08:15 PM", "09:00 PM", "09:30 PM"];

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // WhatsApp Message Generator
  const selectedDateObj = bookingDates[selectedDateIndex];
  const modeLabel = selectedMode === "video" ? "Online Video Consultation" : "Online Audio Consultation";
  const whatsappBookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi VitaHomeo! I'd like to book a ${modeLabel} with ${doctor.name} on ${selectedDateObj.dayName} (${selectedDateObj.dateNum}) at ${selectedSlot}. Please confirm availability.`
  )}`;

  // Review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!newReview.name.trim()) errors.name = "Your name is required";
    if (!newReview.comment.trim()) errors.comment = "Review content is required";
    if (newReview.comment.trim().length < 10) errors.comment = "Review must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      setReviewErrors(errors);
      return;
    }

    const reviewToAdd: Review = {
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      condition: newReview.condition.trim() ? newReview.condition.trim() : "Constitutional Care",
      comment: newReview.comment,
      verified: true
    };

    setReviews((prev) => [reviewToAdd, ...prev]);
    setNewReview({ name: "", rating: 5, condition: "", comment: "" });
    setReviewSubmitSuccess(true);
    setTimeout(() => setReviewSubmitSuccess(false), 5000);
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  // Areas of expertise structured
  const structuredExpertise = [
    {
      title: "Constitutional Prescribing",
      desc: "Deep constitutional case-analysis focusing on individual mental, physical, and emotional temperament.",
      icon: Sparkles
    },
    {
      title: "Chronic Skin Disorders",
      desc: "Holistic treatment for persistent eczema, psoriasis, dermatitis, urticaria, and recurring skin eruptions.",
      icon: ShieldCheck
    },
    {
      title: "Migraine & Chronic Headaches",
      desc: "Addressing root-cause vascular, nervous, and stress triggers without habitual painkiller dependency.",
      icon: Stethoscope
    },
    {
      title: "Respiratory & Allergies",
      desc: "Natural long-term desensitization for allergic rhinitis, frequent bronchitis, and weather-sensitive sinusitis.",
      icon: Award
    },
    {
      title: "Digestive & Gastrointestinal",
      desc: "Comprehensive management of chronic acid reflux, IBS, persistent gastritis, and chronic constipation.",
      icon: CheckCircle
    },
    {
      title: "Pediatric & Family Care",
      desc: "Gentle, sweet homeopathic remedies to naturally build children's immune defenses against recurrent infections.",
      icon: HeartHandshake
    }
  ];

  // FAQs list
  const faqs = [
    {
      q: "How does an online video consultation with Dr. Arun Kumar work?",
      a: "After you select your preferred date and slot, our care team confirms your booking on WhatsApp. At your scheduled consultation time, you receive a secure video consultation link (WhatsApp Video or Google Meet) to speak directly with Dr. Arun Kumar in a private, unhurried 30-40 minute session."
    },
    {
      q: "What is included in the ₹999 consultation fee?",
      a: "The ₹999 fee includes a comprehensive 1-on-1 constitutional case-taking consultation, personalized lifestyle and dietary guidance, and follow-up support for 7 days regarding your prescribed plan."
    },
    {
      q: "How will I receive the prescribed homeopathic medicines?",
      a: "Dr. Arun Kumar provides a digital prescription immediately following your consultation. You can purchase the prescribed classical medicines from any licensed homeopathic pharmacy near you, or request our team to dispatch authentic medicines directly to your home anywhere in India."
    },
    {
      q: "Is constitutional homeopathy safe alongside my current conventional medications?",
      a: "Yes, constitutional homeopathic remedies are 100% natural, non-toxic, and do not chemically interfere with existing medications (such as blood pressure, diabetes, or thyroid tablets). Dr. Arun will review your ongoing prescriptions to ensure optimal, safe care."
    },
    {
      q: "What if I need to reschedule my consultation time?",
      a: "We offer flexible rescheduling without any cancellation fee. Simply reply to our care team on WhatsApp at least 2 hours before your scheduled appointment, and we will happily move your slot to your next convenient time."
    }
  ];

  return (
    <div className="relative">
      
      {/* 2-Column Responsive Layout: Left Content, Right Sticky Booking Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================
            LEFT COLUMN: FULL DOCTOR PROFILE (8 of 12 cols on desktop)
            ======================================================== */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* SECTION 1: DOCTOR HERO SECTION */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm relative overflow-hidden transition-all">
            {/* Subtle brand glow in top-right */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-brand/10 dark:bg-brand/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              {/* Doctor Avatar with Active Badge */}
              <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-[22px] overflow-hidden border-2 border-line-custom dark:border-[#1d2a1a] shadow-md bg-bg-soft">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={144}
                    height={144}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Status Dot Pill */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-2 sm:translate-x-0 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] shadow-sm px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-ink dark:text-white uppercase tracking-wider">Available</span>
                </div>
              </div>

              {/* Core Hero Info */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                
                {/* Verified badge & Ratings */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-[11px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-brand/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" /> Verified Specialist
                  </span>
                  <a
                    href="#reviews"
                    className="text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full flex items-center gap-1 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {reviews.length > 0 ? (
                      <>
                        <span>{averageRating}</span>
                        <span className="text-muted-text dark:text-[#71806c]">({reviews.length} reviews)</span>
                      </>
                    ) : (
                      <span>0 reviews</span>
                    )}
                  </a>
                </div>

                {/* Doctor Name & Degree */}
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink dark:text-white leading-tight font-display tracking-tight">
                    {doctor.name}
                  </h1>
                  <p className="text-xs md:text-sm font-extrabold text-brand uppercase tracking-wider mt-1">
                    {doctor.degree}
                  </p>
                </div>

                {/* Key metadata pills */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand shrink-0" />
                    <span>{doctor.experience || "19+ Years Experience"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand shrink-0" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#0ea98b] shrink-0" />
                    <span>Hindi, English</span>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#booking-card"
                    className="px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Calendar className="w-4 h-4" /> Book Appointment
                  </a>
                  <a
                    href="#reviews"
                    className="px-5 py-2.5 rounded-xl bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 text-ink dark:text-white border border-line-custom dark:border-[#1d2a1a] text-xs font-bold transition-all"
                  >
                    Read Patient Reviews
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* SECTION 2: ABOUT THE DOCTOR */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <BookOpen className="w-5 h-5 text-brand" />
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">About Dr. Arun Kumar</h2>
            </div>

            <div className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              <p>
                {doctor.bio || "Dr. Arun Kumar is an experienced homeopathic practitioner with 19 years of professional experience in providing individualized homeopathic care. He specializes in constitutional prescribing for chronic skin conditions, digestive disorders, and allergic diseases."}
              </p>
            </div>
          </div>

          {/* SECTION 3: CONSULTATION DETAILS & PRACTICE HIGHLIGHTS */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <Stethoscope className="w-5 h-5 text-brand" />
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">Consultation & Practice Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a] space-y-1">
                <span className="text-[10px] uppercase font-bold text-muted-text dark:text-[#71806c] tracking-wider block">
                  Clinical Experience
                </span>
                <span className="text-sm font-bold text-ink dark:text-white">19+ Years (Since 2007)</span>
              </div>

              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a] space-y-1">
                <span className="text-[10px] uppercase font-bold text-muted-text dark:text-[#71806c] tracking-wider block">
                  Languages Spoken
                </span>
                <span className="text-sm font-bold text-ink dark:text-white">Hindi, English</span>
                <p className="text-xs text-body-text dark:text-[#aebba8]">Comfortable in local regional dialects</p>
              </div>

              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a] space-y-1">
                <span className="text-[10px] uppercase font-bold text-muted-text dark:text-[#71806c] tracking-wider block">
                  Consultation Modes
                </span>
                <span className="text-sm font-bold text-ink dark:text-white">Online Video & Audio Call</span>
                <p className="text-xs text-body-text dark:text-[#aebba8]">WhatsApp / Google Meet or Phone Consultation</p>
              </div>

              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a] space-y-1">
                <span className="text-[10px] uppercase font-bold text-muted-text dark:text-[#71806c] tracking-wider block">
                  Consultation Hours
                </span>
                <span className="text-sm font-bold text-ink dark:text-white">06:00 PM – 10:00 PM (Mon – Sun)</span>
                <p className="text-xs text-body-text dark:text-[#aebba8]">Evening appointments 7 days a week</p>
              </div>
            </div>
          </div>

          {/* SECTION 4: AREAS OF CLINICAL EXPERTISE */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <Sparkles className="w-5 h-5 text-brand" />
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">Areas of Clinical Expertise</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {structuredExpertise.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/40 dark:bg-[#162315]/40 hover:border-brand/30 hover:shadow-xs transition-all flex flex-col justify-between gap-3"
                  >
                    <div className="space-y-1.5">
                      <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-2">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-extrabold text-ink dark:text-white tracking-tight leading-snug">{item.title}</h3>
                      <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 5: EDUCATION & PROFESSIONAL JOURNEY */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <Award className="w-5 h-5 text-brand" />
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">Education & Credentials</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a]">
                <div className="w-8 h-8 rounded-full bg-brand/15 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-extrabold text-ink dark:text-white block">
                    Bachelor of Electro-Homeopathic Medicine and Surgery (M.B.E.H. / B.E.M.S.)
                  </span>
                  <span className="text-xs font-semibold text-brand block">
                    Buxar Electro Homoeopathic Medical College &amp; Hospital, Buxar, Bihar
                  </span>
                  <span className="inline-block text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    First Class · 2007
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a]">
                <div className="w-8 h-8 rounded-full bg-brand/15 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-extrabold text-ink dark:text-white block">
                    Professional Registration
                  </span>
                  <span className="text-xs font-semibold text-brand block">
                    Board of Electro Homoeopathic Medicine, Bihar, Patna
                  </span>
                  <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold">
                    Registration No. 7979 · 11 September 2007
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a]">
                <div className="w-8 h-8 rounded-full bg-brand/15 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-extrabold text-ink dark:text-white block">
                    19+ Years Continuous Clinical Practice (2007 – Present)
                  </span>
                  <span className="text-xs text-muted-text dark:text-[#71806c] font-semibold block">
                    Hajipur, Bihar
                  </span>
                  <p className="text-xs text-body-text dark:text-[#aebba8] pt-0.5 font-semibold">
                    Specialized in individualized constitutional prescribing for chronic skin conditions, digestive disorders, and allergic diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: VERIFICATION & CREDENTIAL AUTHENTICITY */}
          <div className="p-6 md:p-7 rounded-[26px] bg-gradient-to-br from-emerald-500/10 via-brand/10 to-transparent border border-emerald-500/20 dark:border-emerald-500/15 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h3 className="text-base font-black text-ink dark:text-white">VitaHomeo Verified Practitioner</h3>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                  Medical Registration & Identity Authenticated
                </span>
              </div>
            </div>

            <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              VitaHomeo verifies statutory medical registrations and institutional credentials directly with the respective state boards prior to platform onboarding.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Registration No: 7979</span>
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Board: Board of Electro Homoeopathic Medicine, Bihar</span>
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Degree: M.B.E.H. / B.E.M.S. (First Class, 2007)</span>
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Clinical Experience: 19+ Years Active Practice</span>
              </div>
            </div>
          </div>

          {/* SECTION 7: PATIENT REVIEWS & WRITE A REVIEW */}
          <div id="reviews" className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-6">
            
            {/* Reviews Header & Score Overview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line-custom dark:border-[#1d2a1a] pb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight">Patient Reviews & Testimonials</h2>
                <p className="text-xs text-muted-text dark:text-[#71806c] font-semibold mt-0.5">
                  Real feedback from verified consultations with Dr. Arun Kumar
                </p>
              </div>

              {/* Score block */}
              <div className="flex items-center gap-3 bg-bg-soft dark:bg-[#162315] p-3 rounded-2xl border border-line-custom dark:border-[#1d2a1a] self-start sm:self-auto">
                <div className="text-3xl font-black text-ink dark:text-white font-display leading-none">
                  {reviews.length > 0 ? averageRating : "0"}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          reviews.length > 0 && s < Math.round(Number(averageRating))
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300 dark:text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider block mt-0.5">
                    {reviews.length} {reviews.length === 1 ? "Verified Review" : "Verified Reviews"}
                  </span>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.length === 0 ? (
                <div className="p-8 text-center border border-dashed border-line-custom dark:border-[#1d2a1a] rounded-2xl space-y-2">
                  <MessageSquare className="w-8 h-8 text-muted-text dark:text-[#71806c] mx-auto opacity-50" />
                  <p className="text-sm font-bold text-ink dark:text-white">No reviews yet</p>
                  <p className="text-xs text-muted-text dark:text-[#71806c] max-w-md mx-auto">
                    Be the first patient to share your consultation experience using the review form below.
                  </p>
                </div>
              ) : (
                reviews.map((rev, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-5 border border-line-custom dark:border-[#1d2a1a] rounded-2xl bg-white dark:bg-[#101c0f] hover:border-brand/30 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs shrink-0">
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-ink dark:text-white text-xs">{rev.name}</span>
                            {rev.verified && (
                              <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                <CheckCircle className="w-2.5 h-2.5" /> Verified Patient
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">{rev.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s < rev.rating ? "text-amber-500 fill-amber-500" : "text-gray-200 dark:text-gray-800"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {rev.condition && (
                      <span className="inline-block text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-0.5 rounded-md self-start uppercase tracking-wider">
                        Treated for: {rev.condition}
                      </span>
                    )}

                    <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Write a review form */}
            <form onSubmit={handleReviewSubmit} className="p-5 rounded-2xl bg-bg-soft/70 dark:bg-[#162315]/60 border border-line-custom dark:border-[#1d2a1a] space-y-4 pt-4">
              <div>
                <h3 className="text-sm font-bold text-ink dark:text-white">Share Your Consultation Experience</h3>
                <p className="text-xs text-muted-text dark:text-[#71806c]">Your feedback helps other patients make confident healthcare decisions.</p>
              </div>

              {reviewSubmitSuccess && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                  <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">
                    Thank you! Your review has been successfully posted.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Ramesh Singh"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#101c0f] text-xs font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand"
                  />
                  {reviewErrors.name && <p className="text-[9px] text-red-500 font-bold">{reviewErrors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider">Condition Treated (Optional)</label>
                  <input
                    type="text"
                    value={newReview.condition}
                    onChange={(e) => setNewReview({ ...newReview, condition: e.target.value })}
                    placeholder="e.g. Chronic Eczema"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#101c0f] text-xs font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand"
                  />
                </div>
              </div>

              {/* Rating selection */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider block">Rating</label>
                <div className="flex items-center gap-1.5 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star className={`w-5 h-5 ${star <= newReview.rating ? "text-amber-500 fill-amber-500" : "text-gray-300 dark:text-gray-700"}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Comment */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider">Your Review</label>
                <textarea
                  rows={3}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share details of your consultation, doctor's diagnosis, and treatment progress..."
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#101c0f] text-xs font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand resize-none"
                />
                {reviewErrors.comment && <p className="text-[9px] text-red-500 font-bold">{reviewErrors.comment}</p>}
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-brand text-white font-bold text-xs rounded-xl hover:bg-brand-hover transition-all cursor-pointer shadow-sm"
              >
                Post Review
              </button>
            </form>
          </div>

          {/* SECTION 8: HOW CONSULTATIONS WORK */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-6">
            <div className="border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">Simple 4-Step Process</span>
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight mt-0.5">How Consultations Work</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/50 border border-line-custom dark:border-[#1d2a1a] space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                  1
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white">Choose Mode & Slot</h3>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Select your preferred appointment date, evening slot, and choose either an Online Video Consultation or Audio Call.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/50 border border-line-custom dark:border-[#1d2a1a] space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                  2
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white">Share Symptoms & History</h3>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Our care coordinator sends you a brief medical history form on WhatsApp to collect your prior test reports and symptom history.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/50 border border-line-custom dark:border-[#1d2a1a] space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                  3
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white">1-on-1 Detailed Consultation</h3>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Join a private 30-40 minute video session with Dr. Arun Kumar for thorough constitutional case analysis and personalized advice.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-bg-soft dark:bg-[#162315]/50 border border-line-custom dark:border-[#1d2a1a] space-y-2">
                <div className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                  4
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white">Prescription & Follow-Up</h3>
                <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed">
                  Receive your digital prescription, diet recommendations, and medicine guidelines, backed by 7-day query support.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-4">
            <div className="border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">Got Questions?</span>
              <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight mt-0.5">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-line-custom dark:border-[#1d2a1a] rounded-2xl overflow-hidden transition-all bg-bg-soft/40 dark:bg-[#162315]/30"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full px-5 py-4 text-left font-bold text-xs md:text-sm text-ink dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:text-brand transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-brand shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-text shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold border-t border-line-custom/40 dark:border-[#1d2a1a]/40 pt-3 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 10: SIMILAR SPECIALISTS */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-line-custom dark:border-[#1d2a1a] pb-3">
              <div>
                <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">Explore Specialists</span>
                <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight mt-0.5">Similar Homeopathic Specialists</h2>
              </div>
              <Link href="/doctors" className="text-xs font-bold text-brand hover:underline flex items-center gap-1">
                <span>View Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Dr. Rachamsetty Tejaswi Card */}
            <div className="p-4 rounded-2xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/50 dark:bg-[#162315]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-line-custom dark:border-[#1d2a1a] bg-bg-soft shrink-0">
                  <Image
                    src="/doc-photos/dr-rachamsetty-tejaswi.png"
                    alt="Dr. Rachamsetty Tejaswi"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-bold text-ink dark:text-white">Dr. Rachamsetty Tejaswi</h3>
                    <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      Verified Doctor
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-text dark:text-[#71806c] font-semibold block">
                    BHMS, MD (Homoeopathy) · Vijayawada, AP
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] bg-white dark:bg-[#101c0f] px-2 py-0.5 rounded-md border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white font-bold">
                      Pediatrics
                    </span>
                    <span className="text-[10px] bg-white dark:bg-[#101c0f] px-2 py-0.5 rounded-md border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white font-bold">
                      Women&apos;s Health
                    </span>
                    <span className="text-[10px] bg-white dark:bg-[#101c0f] px-2 py-0.5 rounded-md border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white font-bold">
                      Chronic Care
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/doctors/dr-rachamsetty-tejaswi"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white dark:bg-[#101c0f] border border-brand/20 text-brand hover:bg-brand hover:text-white text-xs font-bold transition-all text-center shrink-0 shadow-xs"
              >
                View Profile
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================
            RIGHT COLUMN: STICKY APPOINTMENT BOOKING EXPERIENCE
            (4 of 12 cols on desktop, sticky top-24)
            ======================================================== */}
        <div className="lg:col-span-4 space-y-6">
          <div
            id="booking-card"
            className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 shadow-md space-y-5 lg:sticky lg:top-24 transition-all"
          >
            {/* Header / Fee */}
            <div className="flex items-center justify-between border-b border-line-custom dark:border-[#1d2a1a] pb-4">
              <div>
                <span className="text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider block">
                  Consultation Fee
                </span>
                <span className="text-[11px] text-body-text dark:text-[#aebba8] font-semibold">
                  Initial Consultation & Diet Plan
                </span>
              </div>
              <div className="flex items-center text-brand font-black text-2xl">
                <IndianRupee className="w-5 h-5 shrink-0" />
                <span>{doctor.fee || "999"}</span>
              </div>
            </div>

            {/* Mode Selector (Video vs Audio) */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-ink dark:text-white uppercase tracking-wider block">
                Select Session Mode
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-bg-soft dark:bg-[#162315] rounded-xl border border-line-custom dark:border-[#1d2a1a]">
                <button
                  type="button"
                  onClick={() => setSelectedMode("video")}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    selectedMode === "video"
                      ? "bg-brand text-white shadow-xs"
                      : "text-body-text dark:text-[#aebba8] hover:text-ink"
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Video Call</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMode("audio")}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    selectedMode === "audio"
                      ? "bg-brand text-white shadow-xs"
                      : "text-body-text dark:text-[#aebba8] hover:text-ink"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Audio Call</span>
                </button>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black text-ink dark:text-white uppercase tracking-wider">
                  Select Date
                </label>
                <span className="text-[10px] font-semibold text-brand">
                  {selectedDateObj.dayName}, {selectedDateObj.dateNum}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {bookingDates.slice(0, 4).map((d, dIdx) => (
                  <button
                    key={dIdx}
                    type="button"
                    onClick={() => setSelectedDateIndex(dIdx)}
                    className={`py-2 px-1 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedDateIndex === dIdx
                        ? "border-brand bg-brand/10 dark:bg-brand/20 text-brand font-black"
                        : "border-line-custom dark:border-[#1d2a1a] bg-bg-soft/40 dark:bg-[#162315]/40 text-body-text dark:text-[#aebba8] hover:border-brand/30"
                    }`}
                  >
                    <span className="text-[10px] block uppercase font-bold leading-none">{d.dayName}</span>
                    <span className="text-xs font-bold mt-0.5 block">{d.dateNum.split(" ")[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Available Time Slots */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black text-ink dark:text-white uppercase tracking-wider">
                  Available Evening Slots
                </label>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">
                  06:00 PM – 10:00 PM
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-1 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                      selectedSlot === slot
                        ? "border-brand bg-brand text-white shadow-xs"
                        : "border-line-custom dark:border-[#1d2a1a] bg-bg-soft/40 dark:bg-[#162315]/40 text-body-text dark:text-[#aebba8] hover:border-brand/30"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action: Instant WhatsApp Booking */}
            <div className="pt-2">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: "doctor_profile_sidebar", doctorName: doctor.name, doctorSlug: "dr-arun-kumar", fee: doctor.fee || "999" })}
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </a>
            </div>

            {/* Trust Assurance footer */}
            <div className="pt-2 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 space-y-1.5 text-[10px] text-muted-text dark:text-[#71806c] font-semibold">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Instant appointment confirmation on WhatsApp</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Free rescheduling up to 2 hours prior</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>100% confidential constitutional consultation</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================
          MOBILE FLOATING FIXED BOTTOM BOOKING BAR
          (Sticky footer bar for mobile users)
          ======================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#101c0f]/95 backdrop-blur-md border-t border-line-custom dark:border-[#1d2a1a] p-3 md:hidden shadow-xl flex items-center justify-between gap-4">
        <div>
          <span className="text-[9px] uppercase font-bold text-muted-text dark:text-[#71806c] block">
            {selectedDateObj.dayName} · {selectedSlot}
          </span>
          <div className="flex items-center text-brand font-black text-lg leading-tight">
            <IndianRupee className="w-4 h-4" />
            <span>{doctor.fee || "999"}</span>
          </div>
        </div>

        <a
          href={whatsappBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick({ source: "doctor_profile_mobile_sticky", doctorName: doctor.name, doctorSlug: "dr-arun-kumar", fee: doctor.fee || "999" })}
          className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Book Now</span>
        </a>
      </div>

    </div>
  );
}

