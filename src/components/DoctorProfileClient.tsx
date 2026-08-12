"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Stethoscope, Clock, IndianRupee, Star, Calendar, MessageSquare, User, ShieldCheck, CheckCircle } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
  condition: string;
}

interface DoctorProfileClientProps {
  doctor: {
    id?: string;
    name: string;
    degree: string;
    experience: string;
    location: string;
    specialty: string;
    bio: string;
    fee: string;
    timing: string;
    days: string;
    image: string;
    
    // Primary Practice Location fields (stored directly on doctors table)
    clinic_address?: string;
    locality?: string;
    city?: string;
    state?: string;
    pin_code?: string;
    google_maps_url?: string;
  };
}

export default function DoctorProfileClient({ doctor }: DoctorProfileClientProps) {
  // Empty state by default for launch
  const [reviews, setReviews] = useState<Review[]>([]);

  // Write Review Form State
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    condition: "",
    comment: ""
  });
  const [reviewErrors, setReviewErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
    if (reviewErrors[name]) {
      setReviewErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

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
      condition: newReview.condition.trim() ? `${newReview.condition.trim()} Treatment` : "General Consultation",
      comment: newReview.comment
    };

    setReviews((prev) => [reviewToAdd, ...prev]);
    setNewReview({ name: "", rating: 5, condition: "", comment: "" });
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Doctor Profile Header & Details */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Profile Card */}
        <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
          
          {/* Doctor Portrait */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[20px] overflow-hidden border border-line-custom dark:border-white/10 shadow-md bg-bg-soft">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Core Header details */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified Practitioner
                </span>
                {reviews.length > 0 ? (
                  <span className="text-[10px] font-bold text-[#0ea98b] bg-[#0ea98b]/10 dark:bg-[#0ea98b]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Rating {averageRating} ★
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-muted-text bg-[#e6ece6]/30 dark:bg-[#1c271c]/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    No reviews yet
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white leading-tight">
                {doctor.name}
              </h1>
              <p className="text-sm font-bold text-body-text dark:text-[#aebba8] uppercase tracking-wide mt-1">
                {doctor.degree}
              </p>
            </div>

            {/* Icon Metadata list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-body-text dark:text-[#aebba8]">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-brand shrink-0" />
                <span>{doctor.specialty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand shrink-0" />
                <span>{doctor.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span>{doctor.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio & Details */}
        <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 md:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-black text-ink dark:text-white mb-3">About the Doctor</h2>
            <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              {doctor.bio}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-ink dark:text-white mb-3">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-ink dark:text-white">
              {["Constitutional Treatment", "Chronic Skin Conditions", "Eczema & Dermatitis", "Migraine & Chronic Headaches", "Allergic Rhinitis & Asthma", "Digestive & Gastrointestinal Issues"].map((exp) => (
                <span key={exp} className="bg-bg-soft dark:bg-[#162315] border border-line-custom dark:border-[#1d2a1a] px-3.5 py-2 rounded-xl">
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Primary Practice Location Card */}
        {(doctor.clinic_address || doctor.locality || doctor.city || doctor.state || doctor.pin_code) && (
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-black text-ink dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand" /> Primary Practice Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-semibold text-body-text dark:text-[#aebba8]">
              {doctor.clinic_address && (
                <div className="md:col-span-2">
                  <span className="text-muted-text dark:text-[#71806c] block text-[10px] uppercase tracking-wider font-bold mb-0.5">Clinic Address</span>
                  <span className="text-ink dark:text-white font-bold">{doctor.clinic_address}</span>
                </div>
              )}
              {doctor.locality && (
                <div>
                  <span className="text-muted-text dark:text-[#71806c] block text-[10px] uppercase tracking-wider font-bold mb-0.5">Locality</span>
                  <span className="text-ink dark:text-white font-bold">{doctor.locality}</span>
                </div>
              )}
              {(doctor.city || doctor.state || doctor.pin_code) && (
                <div>
                  <span className="text-muted-text dark:text-[#71806c] block text-[10px] uppercase tracking-wider font-bold mb-0.5">City / State / PIN</span>
                  <span className="text-ink dark:text-white font-bold">
                    {[doctor.city, doctor.state].filter(Boolean).join(", ")}
                    {doctor.pin_code ? ` - ${doctor.pin_code}` : ""}
                  </span>
                </div>
              )}
              {doctor.google_maps_url && (
                <div className="md:col-span-2 pt-2 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                  <a
                    href={doctor.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                  >
                    <MapPin className="w-3.5 h-3.5 animate-bounce" /> View on Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        <div id="reviews" className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 md:p-8 shadow-sm space-y-8">
          <div className="flex items-center justify-between border-b border-line-custom dark:border-[#1d2a1a] pb-4">
            <div>
              <h2 className="text-lg font-black text-ink dark:text-white">Patient Reviews</h2>
              <p className="text-xs text-muted-text dark:text-[#71806c] mt-0.5 font-bold">Feedback from verified consultations</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-ink dark:text-white block">{averageRating} ★</span>
              <span className="text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider">{reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}</span>
            </div>
          </div>

          {/* Review Form */}
          <form onSubmit={handleReviewSubmit} className="p-5 rounded-2xl bg-bg-soft dark:bg-[#162315]/50 border border-line-custom dark:border-[#1d2a1a] space-y-4">
            <h3 className="text-sm font-extrabold text-ink dark:text-white">Write a Review</h3>
            
            {submitSuccess && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-xl flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">Your review has been successfully posted!</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Patient Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={newReview.name} 
                  onChange={handleReviewChange} 
                  placeholder="e.g., Rohit Raj" 
                  className={`w-full px-3 py-2 rounded-xl bg-white dark:bg-[#101c0f] text-xs font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
                    reviewErrors.name ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
                  }`}
                />
                {reviewErrors.name && <p className="text-[9px] text-red-500 font-bold">{reviewErrors.name}</p>}
              </div>

              {/* Condition Treated */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider">Condition Treated (Optional)</label>
                <input 
                  type="text" 
                  name="condition" 
                  value={newReview.condition} 
                  onChange={handleReviewChange} 
                  placeholder="e.g., Migraine" 
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#101c0f] text-xs font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand"
                />
              </div>
            </div>

            {/* Rating Selector */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider block">Rating</label>
              <div className="flex items-center gap-1.5 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star className={`w-5 h-5 ${star <= newReview.rating ? "text-amber-500 fill-amber-500" : "text-gray-300 dark:text-gray-700"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider">Your Review</label>
              <textarea 
                name="comment" 
                rows={3} 
                value={newReview.comment} 
                onChange={handleReviewChange} 
                placeholder="Share your experience with the consultation and healing process..." 
                className={`w-full px-3 py-2 rounded-xl bg-white dark:bg-[#101c0f] text-xs font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand resize-none ${
                  reviewErrors.comment ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
                }`}
              />
              {reviewErrors.comment && <p className="text-[9px] text-red-500 font-bold">{reviewErrors.comment}</p>}
            </div>

            <button 
              type="submit" 
              className="px-5 py-2 bg-brand text-white font-bold text-xs rounded-xl hover:bg-brand-dark transition-all cursor-pointer shadow-sm"
            >
              Post Review
            </button>
          </form>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((rev, rIdx) => (
                <div key={rIdx} className="p-5 border border-line-custom dark:border-[#1d2a1a] rounded-2xl flex flex-col gap-3 hover:border-brand/20 transition-all bg-white dark:bg-[#101c0f] animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="font-bold text-ink dark:text-white text-xs block">{rev.name}</span>
                        <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">{rev.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s < rev.rating ? "text-amber-500 fill-amber-500" : "text-gray-200 dark:text-gray-800"}`} />
                      ))}
                    </div>
                  </div>

                  {rev.condition && (
                    <span className="inline-block text-[10px] font-extrabold text-[#0ea98b] bg-[#0ea98b]/10 px-2 py-0.5 rounded-md self-start uppercase tracking-wider">
                      Treated for: {rev.condition}
                    </span>
                  )}

                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                    {rev.comment}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-bg-soft/30 rounded-2xl border border-[#e6ece6] dark:border-[#1c271c] p-6">
                <span className="text-xs text-muted-text dark:text-[#71806c] font-bold">
                  No reviews yet. Be the first to share your experience after your consultation.
                </span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Right Column: Quick Details & Booking Widget */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* Consultation Details & Booking */}
        <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-6 sticky top-24">
          
          {/* Fee Header */}
          <div className="flex justify-between items-center border-b border-line-custom dark:border-[#1d2a1a] pb-4">
            <span className="text-xs font-bold text-body-text dark:text-[#aebba8] uppercase tracking-wider">Consultation Fee</span>
            <div className="flex items-center text-brand font-black text-2xl">
              <IndianRupee className="w-5 h-5 shrink-0" />
              <span>{doctor.fee}</span>
            </div>
          </div>

          {/* Timing details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider">Consultation Hours</span>
                <span className="text-sm text-ink dark:text-white font-bold">{doctor.timing}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider">Available Days</span>
                <span className="text-sm text-ink dark:text-white font-bold">{doctor.days}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-[#0ea98b] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider">Type of Session</span>
                <span className="text-sm text-ink dark:text-white font-bold">Video Consultations</span>
              </div>
            </div>
          </div>

          {/* Booking Button */}
          <Link
            href="/book"
            className="w-full h-12 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>

          <p className="text-[10px] text-muted-text dark:text-[#71806c] text-center leading-relaxed font-semibold">
            Submit your preferred date and time. Our team will contact you on WhatsApp to confirm availability and appointment details.
          </p>
        </div>

      </div>

    </div>
  );
}
