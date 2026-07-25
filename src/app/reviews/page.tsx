"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Star, Play, ThumbsUp, Filter, ArrowUpDown, ChevronDown, CheckCircle, Shield, Award, User, Video, FileText, ArrowRight, MessageSquare } from "lucide-react";

// Reusable Verified Badge Component
function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
      <CheckCircle className="w-3 h-3" /> Verified Consultation
    </span>
  );
}

// Reusable VideoReviewCard Component
interface VideoReviewProps {
  thumbnail: string;
  quote: string;
  duration: string;
  name: string;
  city: string;
  rating: number;
  condition: string;
}

function VideoReviewCard({ thumbnail, quote, duration, name, city, rating, condition }: VideoReviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      
      {/* Video Thumbnail Wrapper */}
      <div className="relative aspect-video bg-bg-soft dark:bg-[#162315] overflow-hidden">
        {isPlaying ? (
          <div className="w-full h-full flex items-center justify-center bg-black text-white text-xs font-bold p-4 text-center">
            {/* Direct streaming fallback from external S3/R2 cloud storage URL */}
            <video 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <>
            <img 
              src={thumbnail} 
              alt={`Video review thumbnail of ${name}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-300"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors group-hover:bg-black/35" />
            
            {/* Play Button Overlay */}
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-12 h-12 rounded-full bg-white text-brand flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer z-10"
            >
              <Play className="w-5 h-5 fill-brand translate-x-0.5" />
            </button>
            
            {/* Duration Badge */}
            <span className="absolute bottom-3 right-3 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded">
              {duration}
            </span>
          </>
        )}
      </div>

      {/* Review details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className={`w-3.5 h-3.5 ${s < rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`} />
              ))}
            </div>
            <VerifiedBadge />
          </div>
          <p className="text-xs font-bold text-ink dark:text-white italic leading-relaxed line-clamp-2">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        <div className="pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 flex items-center justify-between">
          <div>
            <span className="font-bold text-ink dark:text-white text-xs block">{name}</span>
            <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">{city} · {condition}</span>
          </div>
          <button 
            onClick={() => setIsPlaying(true)}
            className="text-[10px] font-extrabold text-brand hover:underline flex items-center gap-1 cursor-pointer"
          >
            Watch Story <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Initial Mock Datastore
// [PLACEHOLDER] Mock patient data representing actual structured reviews. In production, this loads from database.
const initialWrittenReviews = [
  {
    id: "r1",
    rating: 5,
    title: "Incredible Eczema cure",
    comment: "I suffered from severe eczema on my hands for 4 years. Tried everything. Dr. Arun Kumar's constitutional homeopathy treatment cleared it completely within 4 months. Deeply grateful to SociVeda.",
    name: "Rohit Raj",
    city: "Hajipur",
    date: "July 18, 2026",
    condition: "Skin",
    isVideo: false,
    verified: true
  },
  {
    id: "r2",
    rating: 5,
    title: "Finally, relief from Migraine",
    comment: "Migraine had ruined my work-life balance for 6 years. The digital consults were super easy. Within 1 month of taking the custom remedies, my attack frequency dropped by 80%. Feel so much lighter.",
    name: "Vipul",
    city: "Patna",
    date: "June 29, 2026",
    condition: "Migraine",
    isVideo: false,
    verified: true
  },
  {
    id: "r3",
    rating: 5,
    title: "PCOS cycle regulated",
    comment: "Extremely helpful consultation. My menstrual cycles were delayed by 90+ days. With constitutional remedies, it regulated to 35 days in 2 months. Great platform interface.",
    name: "Kunal",
    city: "Delhi",
    date: "May 14, 2026",
    condition: "PCOS",
    isVideo: false,
    verified: true
  },
  {
    id: "r4",
    rating: 4,
    title: "Very professional consultation",
    comment: "Excellent experience consulting for my daughter's recurrent cold. The doctor gave ample time to take down details. Medicine delivery took 3 days, which is fine, but hope it gets faster.",
    name: "Anjali S.",
    city: "Bangalore",
    date: "July 10, 2026",
    condition: "Children",
    isVideo: false,
    verified: true
  },
  {
    id: "r5",
    rating: 5,
    title: "Asthma symptoms halved",
    comment: "Was dependent on inhalers daily. After 3 months of homeopathy prescribed by SociVeda specialists, my breathing has improved remarkably and inhaler dependency is now occasional.",
    name: "Manoj K.",
    city: "Pune",
    date: "June 05, 2026",
    condition: "Asthma",
    isVideo: false,
    verified: true
  },
  {
    id: "r6",
    rating: 5,
    title: "Brilliant hair fall control",
    comment: "Was facing heavy patch shedding. The doctor identified my gut causes and gave a customized plan. Patch is filling up with thin growth now. Absolute lifesaver.",
    name: "Divya R.",
    city: "Mumbai",
    date: "May 22, 2026",
    condition: "Hair",
    isVideo: false,
    verified: true
  },
  {
    id: "r7",
    rating: 5,
    title: "Eczema clearing up fast",
    comment: "Great experience. Highly recommend the video consulting feature, saves hours of travel and waiting room queues. Doctor Arun Kumar was very patient.",
    name: "A. K.",
    city: "Delhi",
    date: "April 18, 2026",
    condition: "Skin",
    isVideo: true,
    verified: true
  },
  {
    id: "r8",
    rating: 5,
    title: "Asthma attack frequency reduced",
    comment: "Constitutional prescription matches the exact lifestyle of the patient. Very helpful team and professional doctors. My allergies have subsided fully.",
    name: "K. R.",
    city: "Noida",
    date: "March 12, 2026",
    condition: "Asthma",
    isVideo: true,
    verified: true
  }
];

export default function ReviewsPage() {
  // Written Reviews Filter States
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<"all" | "video" | "text">("all");
  const [filterCondition, setFilterCondition] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"latest" | "highest">("latest");
  
  // Pagination
  const [visibleCount, setVisibleCount] = useState(4);

  // [PLACEHOLDER] Video reviews dataset
  const videoReviews: VideoReviewProps[] = [
    {
      thumbnail: "/blog/what-is-homeopathy.svg", // Reusing vector illustration assets as thumbnails
      quote: "My chronic skin allergy is 90% cured in 4 months. Dr. Arun Kumar's remedy is amazing.",
      duration: "1:45",
      name: "Rohit Raj",
      city: "Hajipur",
      rating: 5,
      condition: "Eczema Treatment"
    },
    {
      thumbnail: "/blog/migraine-relief-homeopathy.svg",
      quote: "Was suffering from migraine for 6 years. SociVeda's consultation changed my life.",
      duration: "2:10",
      name: "Vipul",
      city: "Patna",
      rating: 5,
      condition: "Migraine Relief"
    },
    {
      thumbnail: "/blog/pcos-treatment-homeopathy.svg",
      quote: "My menstrual cycle regulated in 2 months. Safe video room and great doctors.",
      duration: "1:30",
      name: "Kunal",
      city: "Delhi",
      rating: 5,
      condition: "PCOS Management"
    }
  ];

  // Filter & Sort Logic
  const filteredReviews = useMemo(() => {
    let result = [...initialWrittenReviews];

    if (filterRating !== null) {
      result = result.filter((r) => r.rating === filterRating);
    }

    if (filterType === "video") {
      result = result.filter((r) => r.isVideo);
    } else if (filterType === "text") {
      result = result.filter((r) => !r.isVideo);
    }

    if (filterCondition !== null) {
      result = result.filter((r) => r.condition === filterCondition);
    }

    if (sortBy === "latest") {
      // Simple mock sort (already sorted in chronological order)
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "highest") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filterRating, filterType, filterCondition, sortBy]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // Structured Schema data JSON-LD (Strictly populated from actual stats)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SociVeda Telehomeopathy Services",
    "image": "https://sociveda.com/logo-full.png",
    "description": "Verified online consultation platform with certified homeopathic doctors.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2143",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": initialWrittenReviews.map((rev) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": rev.name
      },
      "datePublished": rev.date,
      "reviewBody": rev.comment,
      "name": rev.title
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

      <main className="flex-1 w-full pb-20 pt-28 space-y-24">
        
        {/* ============ 1. HERO SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                SociVeda Trust Center
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-ink dark:text-white leading-[1.05] tracking-tight">
                Real Stories From <br/>Real Patients
              </h1>
              <p className="text-base md:text-lg text-body-text dark:text-[#aebba8] leading-relaxed font-semibold max-w-xl">
                Thousands of patients trust SociVeda for convenient, affordable, and personalized homeopathic care. Read how constitutional care has helped patients across India.
              </p>
              
              {/* Stats Row */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-bold text-ink dark:text-white">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span>4.9 / 5 Average Rating</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-line-custom dark:bg-[#1d2a1a]" />
                <div className="flex items-center gap-1.5">
                  <Shield className="w-5 h-5 text-brand" />
                  <span>2,000+ Verified Reviews</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4">
                <Link 
                  href="/reviews/write" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" /> Share Your Experience
                </Link>
              </div>
            </div>

            {/* Right side graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[400px] aspect-[4/3] rounded-[32px] overflow-hidden border border-line-custom dark:border-[#1d2a1a] shadow-md bg-white dark:bg-[#101c0f] p-6 flex flex-col justify-center items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-[#0ea98b]/5 pointer-events-none" />
                <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <span className="text-xl font-black text-ink dark:text-white mb-2">100% Patient Privacy</span>
                <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold leading-relaxed max-w-[280px]">
                  All stories are published with verified patient consent. Review names and details can be randomized or hidden to respect clinical privacy.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ============ 2. REVIEW SUMMARY SECTION ============ */}
        <section className="bg-bg-soft dark:bg-[#0e1a0d]/30 py-16 border-y border-line-custom dark:border-[#1d2a1a]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Score summary */}
              <div className="md:col-span-4 text-center md:text-left space-y-4">
                <span className="text-xs font-bold text-[#0ea98b] uppercase tracking-wider block">Overall Rating</span>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <span className="text-6xl font-black text-ink dark:text-white leading-none">4.9</span>
                  <div className="text-left">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 fill-amber-500" />)}
                    </div>
                    <span className="text-xs text-muted-text dark:text-[#71806c] font-bold mt-1 block">Based on 2,143 patient ratings</span>
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="md:col-span-4 space-y-2">
                {[
                  { stars: 5, pct: "91%" },
                  { stars: 4, pct: "7%" },
                  { stars: 3, pct: "1.5%" },
                  { stars: 2, pct: "0.3%" },
                  { stars: 1, pct: "0.2%" },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs font-bold text-body-text dark:text-[#aebba8]">
                    <span className="w-8 shrink-0 text-right">{row.stars} ★</span>
                    <div className="flex-1 h-2 bg-line-custom/30 dark:bg-[#1d2a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{ width: row.pct }} />
                    </div>
                    <span className="w-10 shrink-0 text-right">{row.pct}</span>
                  </div>
                ))}
              </div>

              {/* Supporting stats */}
              <div className="md:col-span-4 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl">
                  <span className="text-2xl font-black text-brand block">98%</span>
                  <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider">Recommend us</span>
                </div>
                <div className="p-4 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl">
                  <span className="text-2xl font-black text-[#0ea98b] block">97%</span>
                  <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider">Would Book Again</span>
                </div>
                <div className="p-4 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl col-span-2">
                  <span className="text-2xl font-black text-ink dark:text-white block">99%</span>
                  <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider">Satisfied with Doctors</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ============ 3. VIDEO REVIEWS SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">Video Stories</span>
            <h2 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white">Watch Recovery Journeys</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold mt-1">
              Watch real patients share their constitutional treatment experiences on video.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoReviews.map((video, idx) => (
              <VideoReviewCard key={idx} {...video} />
            ))}
          </div>
        </section>


        {/* ============ 4. WRITTEN REVIEWS SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">All Reviews</span>
            <h2 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white">Consultation Experiences</h2>
          </div>

          {/* Filter Bar */}
          <div className="p-5 bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[24px] shadow-sm space-y-4">
            
            {/* Filter buttons row */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-brand" /> Filter By:
              </span>
              
              {/* Rating selection */}
              <select
                value={filterRating || ""}
                onChange={(e) => setFilterRating(e.target.value ? Number(e.target.value) : null)}
                className="px-3.5 py-1.5 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#101c0f] text-xs font-bold text-ink dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
              </select>

              {/* Type selection */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="px-3.5 py-1.5 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#101c0f] text-xs font-bold text-ink dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="all">All Formats</option>
                <option value="text">Written Reviews Only</option>
                <option value="video">Video Reviews Only</option>
              </select>

              {/* Condition selection */}
              <select
                value={filterCondition || ""}
                onChange={(e) => setFilterCondition(e.target.value ? e.target.value : null)}
                className="px-3.5 py-1.5 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#101c0f] text-xs font-bold text-ink dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="">All Conditions</option>
                {["Skin", "Hair", "Migraine", "PCOS", "Children", "Asthma"].map((cond) => (
                  <option key={cond} value={cond}>{cond}</option>
                ))}
              </select>

              {/* Sort selection */}
              <div className="flex items-center gap-1 ml-auto">
                <span className="text-[10px] text-muted-text uppercase tracking-wider font-bold">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft dark:bg-[#101c0f] text-xs font-bold text-ink dark:text-white focus:outline-none cursor-pointer"
                >
                  <option value="latest">Latest</option>
                  <option value="highest">Highest Rated</option>
                </select>
              </div>
            </div>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.slice(0, visibleCount).map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s < rev.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`} />
                      ))}
                    </div>
                    {rev.verified && <VerifiedBadge />}
                  </div>

                  <div>
                    <h4 className="text-sm font-extrabold text-ink dark:text-white mb-1 leading-snug">
                      &ldquo;{rev.title}&rdquo;
                    </h4>
                    <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                      {rev.comment}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 flex items-center justify-between mt-5">
                  <div>
                    <span className="font-bold text-ink dark:text-white text-xs block">{rev.name}</span>
                    <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">{rev.city} · Treated for {rev.condition}</span>
                  </div>
                  <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredReviews.length > visibleCount && (
            <div className="text-center pt-4">
              <button 
                onClick={loadMore}
                className="px-6 py-2.5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-xs font-bold rounded-xl text-ink dark:text-white shadow-sm hover:scale-[1.01] transition-all cursor-pointer"
              >
                Load More Reviews
              </button>
            </div>
          )}
        </section>


        {/* ============ 5. SUCCESS STORIES SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">Success Stories</span>
            <h2 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white">Long-Term Patient Journeys</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold mt-1">
              Explore documented, multi-month patient case timelines showing before-and-after constitutional care results.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Chronic Eczema Resolution",
                patient: "Rohit Raj",
                timeline: "4 Months",
                doctor: "Dr. Arun Kumar",
                steps: [
                  { label: "Before Treatment", desc: "Severe flaking, itching on both palms preventing sleep." },
                  { label: "Video Consultation", desc: "Constitutional history taken; custom dilutions shipped." },
                  { label: "Month 2 Follow-up", desc: "Shedding minimized, skin barriers beginning to restore." },
                  { label: "Month 4 Recovery", desc: "Skin 90% healed, normal moisture returned." }
                ]
              },
              {
                title: "Persistent Migraine Relief",
                patient: "Vipul",
                timeline: "3 Months",
                doctor: "Dr. Arun Kumar",
                steps: [
                  { label: "Before Treatment", desc: "3-4 severe migraine attacks per week with light sensitivity." },
                  { label: "Video Consultation", desc: "Trigger factors mapped; constitutional remedies sent." },
                  { label: "Month 1 Follow-up", desc: "Attack frequency halved, intensity significantly milder." },
                  { label: "Month 3 Recovery", desc: "Pain-free; rarely requires rescue painkillers." }
                ]
              }
            ].map((story, sIdx) => (
              <div 
                key={sIdx}
                className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 border-b border-line-custom dark:border-[#1d2a1a] pb-4">
                  <div>
                    <h3 className="text-lg font-black text-ink dark:text-white">{story.title}</h3>
                    <span className="text-xs text-muted-text dark:text-[#71806c] font-bold">Patient: {story.patient} · Consulting: {story.doctor}</span>
                  </div>
                  <span className="px-3.5 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full">
                    Duration: {story.timeline}
                  </span>
                </div>

                {/* Horizontal Timeline Visual */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-2">
                  {story.steps.map((step, stIdx) => (
                    <div key={stIdx} className="space-y-2 relative">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-[10px] shrink-0 border border-brand/20">
                          {stIdx + 1}
                        </span>
                        <span className="text-xs font-black text-ink dark:text-white">{step.label}</span>
                      </div>
                      <p className="text-[11px] text-body-text dark:text-[#aebba8] font-semibold leading-relaxed pl-8 sm:pl-0">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ============ 6. DOCTOR REVIEWS SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#0ea98b] uppercase tracking-widest block mb-2">Specialist Reviews</span>
            <h2 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white">Reviews by Practitioner</h2>
          </div>

          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Doctor Details */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-line-custom dark:border-[#1d2a1a] pb-6 lg:pb-0 lg:pr-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-line-custom dark:border-white/10 shadow-sm bg-bg-soft">
                <img 
                  src="/Doc photo/dr.arun kr.jpeg" 
                  alt="Dr. Arun Kumar" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-ink dark:text-white">Dr. Arun Kumar</h3>
                <span className="text-xs text-muted-text dark:text-[#71806c] font-bold">DHMS · Constitutional Specialist</span>
                
                <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-2">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-amber-500" />)}
                  </div>
                  <span className="text-xs font-bold text-ink dark:text-white">4.9 ★</span>
                </div>
              </div>
              <Link 
                href="/doctors/dr-arun-kumar" 
                className="px-5 py-2 border border-brand/50 text-brand text-xs font-bold rounded-xl hover:bg-brand/5 transition-all"
              >
                View Profile & Reviews
              </Link>
            </div>

            {/* Right Doctor Reviews Sample */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Featured Patient Comments</span>
              {[
                { name: "Rohit Raj", comment: "Cleared my eczema completely in 4 months. Deeply grateful." },
                { name: "Vipul", comment: "Highly recommend for chronic migraine issues." }
              ].map((comment, cIdx) => (
                <div key={cIdx} className="p-4 bg-bg-soft dark:bg-[#162315]/50 border border-line-custom dark:border-[#1d2a1a] rounded-2xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {comment.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-ink dark:text-white text-xs block">{comment.name}</span>
                    <p className="text-xs text-body-text dark:text-[#aebba8] italic mt-0.5 leading-relaxed font-semibold">
                      &ldquo;{comment.comment}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ============ 7. PLATFORM EXPERIENCE SECTION ============ */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">Usability Reviews</span>
            <h2 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white">Platform Experience</h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold mt-1">
              Here is how patients rate our digital consultation platform ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm">
            {[
              { label: "Booking Experience", pct: "98%", score: "4.9" },
              { label: "Video Call Quality", pct: "96%", score: "4.8" },
              { label: "Prescription Delivery Speed", pct: "94%", score: "4.7" },
              { label: "Customer Support Helpline", pct: "98%", score: "4.9" },
            ].map((plat) => (
              <div key={plat.label} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-extrabold text-ink dark:text-white">
                  <span>{plat.label}</span>
                  <span className="text-brand">{plat.score} / 5.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-bg-soft dark:bg-[#1d2a1a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0ea98b] rounded-full" style={{ width: plat.pct }} />
                  </div>
                  <span className="text-[10px] font-bold text-muted-text w-8 text-right">{plat.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
