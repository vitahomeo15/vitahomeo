"use client";

import React, { useState, useEffect } from "react";
import { Star, MessageSquarePlus, CheckCircle2, ShieldCheck, Heart, User, MapPin, Sparkles, X } from "lucide-react";

export interface UserReview {
  id: string;
  name: string;
  city: string;
  rating: number;
  category: string;
  title: string;
  comment: string;
  date: string;
  verified?: boolean;
}

const STORAGE_KEY = "vitahomeo_patient_reviews";

export function TreatmentReviewSection() {
  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form Fields
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState("Treatment & Health Outcome");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Load reviews on mount (from API and localStorage)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setReviews(JSON.parse(stored));
      } else {
        // Fetch from API
        fetch("/api/reviews")
          .then((res) => res.json())
          .then((data) => {
            if (data?.reviews && Array.isArray(data.reviews) && data.reviews.length > 0) {
              setReviews(data.reviews);
            }
          })
          .catch(() => {});
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!comment.trim() || comment.trim().length < 10) {
      setErrorMessage("Please enter at least 10 characters describing your experience.");
      return;
    }

    setIsSubmitting(true);

    const newRev: UserReview = {
      id: "rev_" + Date.now(),
      name: name.trim(),
      city: city.trim() || "India",
      rating,
      category,
      title: title.trim() || `${category} Review`,
      comment: comment.trim(),
      date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
      verified: true,
    };

    try {
      // Send to API
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRev),
      });

      // Update state and localStorage
      const updated = [newRev, ...reviews];
      setReviews(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      // Reset form
      setName("");
      setCity("");
      setTitle("");
      setComment("");
      setRating(5);
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => {
        setSubmittedSuccess(false);
        setIsFormOpen(false);
      }, 3000);
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage("Failed to submit. Please try again.");
    }
  };

  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <section id="reviews" className="max-w-6xl mx-auto px-4 md:px-6 space-y-10 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider">
            <Heart className="w-4 h-4" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-ink dark:text-white tracking-tight">
            Patient & Platform Reviews
          </h2>
          <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">
            Honest feedback from individuals who have consulted our doctors, received customized remedies, or used the VitaHomeo platform.
          </p>
        </div>

        <button
          onClick={() => {
            setIsFormOpen(!isFormOpen);
            setSubmittedSuccess(false);
          }}
          className="px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-xl shadow-button-premium transition-all flex items-center justify-center gap-2 self-start md:self-auto shrink-0 cursor-pointer hover:scale-[1.02]"
        >
          {isFormOpen ? (
            <>
              <X className="w-4 h-4" />
              Close Review Form
            </>
          ) : (
            <>
              <MessageSquarePlus className="w-4 h-4" />
              Write a Review
            </>
          )}
        </button>
      </div>

      {/* Review Submission Form Modal / Drawer */}
      {isFormOpen && (
        <div className="bg-white dark:bg-[#101c0f] border-2 border-brand/30 dark:border-brand/40 rounded-[28px] p-6 md:p-8 shadow-card-premium relative animate-in fade-in zoom-in-95 duration-200">
          
          <div className="flex items-center justify-between pb-4 border-b border-line-custom dark:border-[#1d2a1a] mb-6">
            <div>
              <h3 className="text-lg font-black text-ink dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand" />
                Share Your Experience
              </h3>
              <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-0.5">
                Help fellow patients by sharing your experience with our platform or treatment care.
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-muted-text hover:text-ink dark:hover:text-white p-1 rounded-lg"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submittedSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-black text-ink dark:text-white">
                Thank you for your feedback!
              </h4>
              <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold max-w-md mx-auto">
                Your review has been successfully submitted and added to the community feedback section.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              {/* Top Row: Review Category & Rating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-ink dark:text-white mb-1.5">
                    What are you reviewing?
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] rounded-xl text-xs font-semibold text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    <option value="Treatment & Health Outcome">Treatment & Health Outcome</option>
                    <option value="Platform & Video Consultation">Platform & Video Consultation</option>
                    <option value="Doctor Case Taking & Expertise">Doctor Case Taking & Expertise</option>
                    <option value="Medicine Delivery & Packaging">Medicine Delivery & Packaging</option>
                    <option value="Overall Healthcare Experience">Overall Healthcare Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink dark:text-white mb-1.5">
                    Your Rating: <span className="text-brand font-extrabold">{ratingLabels[(hoverRating || rating) - 1]}</span>
                  </label>
                  <div className="flex items-center gap-1.5 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= (hoverRating || rating)
                              ? "fill-amber-500 text-amber-500"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Review Title */}
              <div>
                <label className="block text-xs font-bold text-ink dark:text-white mb-1.5">
                  Review Headline / Title (optional)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Very helpful constitutional consultation & gentle remedies"
                  className="w-full px-3.5 py-2.5 bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] rounded-xl text-xs font-semibold text-ink dark:text-white placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {/* Review Feedback Text */}
              <div>
                <label className="block text-xs font-bold text-ink dark:text-white mb-1.5">
                  Your Detailed Experience *
                </label>
                <textarea
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Describe your health condition, how the consultation went, communication with the doctor, and how the medicines helped..."
                  className="w-full px-3.5 py-2.5 bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] rounded-xl text-xs font-semibold text-ink dark:text-white placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
              </div>

              {/* Name & City Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink dark:text-white mb-1.5">
                    Your Name / Display Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Ananya S. or Rahul M."
                    className="w-full px-3.5 py-2.5 bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] rounded-xl text-xs font-semibold text-ink dark:text-white placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink dark:text-white mb-1.5">
                    City / State
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Patna, Delhi, Mumbai"
                    className="w-full px-3.5 py-2.5 bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] rounded-xl text-xs font-semibold text-ink dark:text-white placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2.5 border border-line-custom dark:border-[#1d2a1a] text-body-text dark:text-[#aebba8] text-xs font-bold rounded-xl hover:bg-bg-soft"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-2.5 bg-brand hover:bg-brand-hover disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </div>

            </form>
          )}

        </div>
      )}

      {/* Reviews Display Grid or Inviting Empty State */}
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                {/* Rating & Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2 py-0.5 rounded-full">
                    {rev.category}
                  </span>
                </div>

                <h4 className="text-sm font-extrabold text-ink dark:text-white">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-3 border-t border-line-custom/60 dark:border-[#1d2a1a] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-ink dark:text-white">
                  <User className="w-3.5 h-3.5 text-brand" />
                  <span>{rev.name}</span>
                </div>
                {rev.city && (
                  <div className="flex items-center gap-1 text-muted-text dark:text-[#71806c]">
                    <MapPin className="w-3 h-3 text-muted-text" />
                    <span>{rev.city}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Inviting Authentic Empty State */
        <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-8 md:p-10 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
            <MessageSquarePlus className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-ink dark:text-white">
            Have you consulted a doctor or started treatment?
          </h3>
          <p className="text-xs sm:text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-semibold max-w-md mx-auto">
            We believe in 100% genuine patient feedback. Share your experience with our constitutional care, doctors, and remedy delivery to guide others.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-3 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-xl shadow-button-premium transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Write the First Review
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
