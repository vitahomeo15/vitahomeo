"use client";

import React, { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Star, ArrowRight, ArrowLeft, CheckCircle, Upload, Film, FileImage, ShieldCheck, HelpCircle } from "lucide-react";

export default function WriteReviewPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;

  // Form State
  const [formData, setFormData] = useState({
    rating: 5,
    recommend: "", // "yes" or "no"
    doctor: "Dr. Arun Kumar",
    condition: "Skin",
    comment: "",
    photos: [] as string[], // Base64 data URLs
    videoName: "",
    videoSize: "",
    anonymous: false,
    consent: false,
    city: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // File Upload Handlers
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const names: string[] = [];
    const base64s: string[] = [];

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      names.push(file.name);
      
      const reader = new FileReader();
      reader.onload = () => {
        base64s.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    });

    setPhotoNames(names);
    setFormData((prev) => ({ ...prev, photos: base64s }));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate video type
    const acceptedTypes = ["video/mp4", "video/quicktime", "video/webm", "video/mov"];
    if (!acceptedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, video: "Please upload an accepted video format (MP4, MOV, or WebM)" }));
      return;
    }

    // Validate video size (Limit to 50MB for demo)
    if (file.size > 50 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, video: "Video file size must be less than 50MB" }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      videoName: file.name,
      videoSize: (file.size / (1024 * 1024)).toFixed(1) + " MB",
    }));

    // Clear video errors
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.video;
      return copy;
    });
  };

  const handleValueChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prevErr) => {
        const copy = { ...prevErr };
        delete copy[name];
        return copy;
      });
    }
  };

  // Step Validation Check
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (formData.rating < 1 || formData.rating > 5) {
        newErrors.rating = "Please select a rating between 1 and 5 stars";
      }
    }

    if (step === 2) {
      if (!formData.recommend) {
        newErrors.recommend = "Please specify if you would recommend VitaHomeo";
      }
    }

    if (step === 5) {
      if (formData.comment.trim().length < 50) {
        newErrors.comment = `Review text must be at least 50 characters (Current: ${formData.comment.trim().length})`;
      }
    }

    if (step === 8) {
      if (formData.anonymous && !formData.city.trim()) {
        newErrors.city = "Please specify your city (e.g. Delhi) to display alongside your initials";
      }
    }

    if (step === 9) {
      if (!formData.consent) {
        newErrors.consent = "You must consent to the submission terms to proceed";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(9)) return;

    // [MODIDERATION/PENDING FLOW]
    // The submitted review goes into a pending moderation state instead of appearing live.
    // We simulate this by storing submissions under a "pending_reviews" array in local storage.
    const newPendingReview = {
      ...formData,
      id: "pending-" + Date.now(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      status: "pending_approval"
    };

    try {
      const existing = localStorage.getItem("pending_reviews");
      const list = existing ? JSON.parse(existing) : [];
      list.push(newPendingReview);
      localStorage.setItem("pending_reviews", JSON.stringify(list));
      console.log("[Reviews Submission] Successfully saved review to pending storage:", newPendingReview);
    } catch (err) {
      console.error("[Reviews Submission] Failed to write to local storage:", err);
    }

    setIsSubmitted(true);
  };

  // Calculate Progress Percent
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
        <Navbar />
        <main className="flex-1 w-full pb-20 pt-28 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-8 text-center shadow-lg max-w-lg w-full space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-black text-ink dark:text-white">Thank You!</h1>
              <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed font-medium">
                Your review has been successfully submitted and is currently **pending approval**. It will appear on our trust center once our moderation team verifies your consultation history.
              </p>
            </div>
            <div className="pt-2">
              <Link 
                href="/reviews"
                className="px-6 py-2.5 bg-brand text-white font-bold text-xs rounded-full hover:bg-brand-dark transition-all"
              >
                Return to Reviews
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-2xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">Write a Review</span>
            <h1 className="text-2xl md:text-3.5xl font-black text-ink dark:text-white">Share Your Experience</h1>
            <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold mt-1">
              Your honest feedback helps us improve and guides other patients seeking care.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-6">
            
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{progressPercent}% Complete</span>
              </div>
              <div className="h-1.5 bg-bg-soft dark:bg-[#1d2a1a] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 min-h-[220px] flex flex-col justify-between">
              
              {/* STEP 1: OVERALL EXPERIENCE */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-bold text-ink dark:text-white font-display">Rate your overall experience with VitaHomeo</h2>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleValueChange("rating", star)}
                        className="hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star className={`w-8 h-8 ${star <= formData.rating ? "text-amber-500 fill-amber-500" : "text-gray-200 dark:text-gray-800"}`} />
                      </button>
                    ))}
                  </div>
                  {errors.rating && <p className="text-xs text-red-500 font-bold">{errors.rating}</p>}
                </div>
              )}

              {/* STEP 2: RECOMMENDATION */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-bold text-ink dark:text-white font-display">Would you recommend VitaHomeo to family or friends?</h2>
                  <div className="flex items-center gap-4">
                    <label className={`px-5 py-3 border rounded-xl flex items-center gap-2 cursor-pointer font-bold text-xs select-none ${
                      formData.recommend === "yes" ? "border-brand bg-brand/5 text-brand" : "border-line-custom dark:border-[#1d2a1a] text-body-text"
                    }`}>
                      <input 
                        type="radio" 
                        name="recommend" 
                        value="yes"
                        checked={formData.recommend === "yes"}
                        onChange={() => handleValueChange("recommend", "yes")}
                        className="hidden"
                      />
                      Yes, absolutely
                    </label>
                    <label className={`px-5 py-3 border rounded-xl flex items-center gap-2 cursor-pointer font-bold text-xs select-none ${
                      formData.recommend === "no" ? "border-red-500 bg-red-500/5 text-red-500" : "border-line-custom dark:border-[#1d2a1a] text-body-text"
                    }`}>
                      <input 
                        type="radio" 
                        name="recommend" 
                        value="no"
                        checked={formData.recommend === "no"}
                        onChange={() => handleValueChange("recommend", "no")}
                        className="hidden"
                      />
                      No
                    </label>
                  </div>
                  {errors.recommend && <p className="text-xs text-red-500 font-bold">{errors.recommend}</p>}
                </div>
              )}

              {/* STEP 3: CONSULTED DOCTOR */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-extrabold text-ink dark:text-white">Which homeopathic doctor did you consult?</h2>
                  <select
                    value={formData.doctor}
                    onChange={(e) => handleValueChange("doctor", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand cursor-pointer"
                  >
                    <option value="Dr. Arun Kumar">Dr. Arun Kumar (Constitutional Specialist)</option>
                    <option value="Other Specialist / Platform Only">Other Specialist / Platform Only</option>
                  </select>
                </div>
              )}

              {/* STEP 4: CONDITION */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-extrabold text-ink dark:text-white">Select the treated medical condition</h2>
                  <select
                    value={formData.condition}
                    onChange={(e) => handleValueChange("condition", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand cursor-pointer"
                  >
                    {["Skin", "Hair", "Migraine", "Asthma", "PCOS", "Children", "Other"].map((cond) => (
                      <option key={cond} value={cond}>{cond}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* STEP 5: WRITE REVIEW */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-base font-extrabold text-ink dark:text-white">Describe your symptoms and recovery journey</h2>
                    <span className={`text-[10px] font-bold ${
                      formData.comment.trim().length >= 50 ? "text-brand" : "text-muted-text"
                    }`}>
                      {formData.comment.trim().length} / 50 min chars
                    </span>
                  </div>
                  <textarea
                    rows={5}
                    value={formData.comment}
                    onChange={(e) => handleValueChange("comment", e.target.value)}
                    placeholder="Tell us about your experience, how the video consultation went, how long you took the remedies, and what outcomes you observed..."
                    className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand resize-none ${
                      errors.comment ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
                    }`}
                  />
                  {errors.comment && <p className="text-xs text-red-500 font-bold">{errors.comment}</p>}
                </div>
              )}

              {/* STEP 6: PHOTO UPLOAD */}
              {currentStep === 6 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-extrabold text-ink dark:text-white">Upload supporting photos (Optional)</h2>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl border border-dashed border-line-custom dark:border-[#1d2a1a] bg-bg-soft/30 dark:bg-[#0e1a0d]/20">
                    <button
                      type="button"
                      onClick={() => photoInputRef.current?.click()}
                      className="px-4 py-2.5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-xs font-bold rounded-lg text-ink dark:text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-brand" />
                      Add Photos
                    </button>
                    <input
                      type="file"
                      ref={photoInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <div className="flex flex-col gap-1 text-[11px] text-muted-text">
                      {photoNames.length > 0 ? (
                        photoNames.map((name, i) => (
                          <span key={i} className="font-semibold text-brand dark:text-brand-light flex items-center gap-1">
                            <FileImage className="w-3 h-3" /> {name}
                          </span>
                        ))
                      ) : (
                        <span>PNG, JPG, or JPEG format supported</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: VIDEO UPLOAD */}
              {currentStep === 7 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-extrabold text-ink dark:text-white">Upload a video review (Optional)</h2>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl border border-dashed border-line-custom dark:border-[#1d2a1a] bg-bg-soft/30 dark:bg-[#0e1a0d]/20">
                    <button
                      type="button"
                      onClick={() => videoInputRef.current?.click()}
                      className="px-4 py-2.5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-xs font-bold rounded-lg text-ink dark:text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <Film className="w-3.5 h-3.5 text-brand" />
                      Add Video Review
                    </button>
                    <input
                      type="file"
                      ref={videoInputRef}
                      onChange={handleVideoUpload}
                      accept="video/mp4,video/quicktime,video/webm"
                      className="hidden"
                    />
                    <div className="flex flex-col gap-1 text-[11px] text-muted-text">
                      {formData.videoName ? (
                        <span className="font-semibold text-brand dark:text-brand-light flex items-center gap-1">
                          <Film className="w-3.5 h-3.5" /> {formData.videoName} ({formData.videoSize})
                        </span>
                      ) : (
                        <span>Accepts MP4, MOV, or WebM (Max 3 mins, 50MB)</span>
                      )}
                    </div>
                  </div>
                  {errors.video && <p className="text-xs text-red-500 font-bold">{errors.video}</p>}
                </div>
              )}

              {/* STEP 8: ANONYMOUS TOGGLE */}
              {currentStep === 8 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-extrabold text-ink dark:text-white">Do you prefer to remain anonymous?</h2>
                  
                  <label className="flex items-start gap-2.5 p-4 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 border border-line-custom dark:border-[#1d2a1a] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.anonymous}
                      onChange={(e) => handleValueChange("anonymous", e.target.checked)}
                      className="rounded text-brand focus:ring-brand border-line-custom dark:border-[#1d2a1a] w-4 h-4 cursor-pointer accent-brand mt-0.5"
                    />
                    <div>
                      <span className="text-xs font-bold text-ink dark:text-white block">Hide my full name</span>
                      <p className="text-[10px] text-muted-text mt-0.5 leading-relaxed font-semibold">
                        When checked, we will only display your initials and city (e.g. &ldquo;R.R., Hajipur&rdquo;) to respect your medical privacy.
                      </p>
                    </div>
                  </label>

                  {formData.anonymous && (
                    <div className="space-y-1 animate-in fade-in duration-200">
                      <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider block">Your City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleValueChange("city", e.target.value)}
                        placeholder="e.g. Delhi"
                        className={`w-full px-3 py-2 rounded-xl bg-bg-soft dark:bg-[#101c0f] text-xs font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
                          errors.city ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
                        }`}
                      />
                      {errors.city && <p className="text-[9px] text-red-500 font-bold">{errors.city}</p>}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 9: CONSENT & SUBMIT */}
              {currentStep === 9 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-base font-extrabold text-ink dark:text-white">Submission Consent</h2>
                  
                  <div className="p-4 rounded-xl border border-brand/20 bg-brand/5 dark:bg-brand/10 text-xs font-semibold text-body-text dark:text-[#aebba8] flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      We value review integrity. Your story will undergo clinical consultation verification against our booking records before it is published.
                    </p>
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleValueChange("consent", e.target.checked)}
                      className="rounded text-brand focus:ring-brand border-line-custom dark:border-[#1d2a1a] w-4 h-4 cursor-pointer accent-brand mt-0.5"
                    />
                    <div>
                      <span className="text-xs font-bold text-ink dark:text-white block">I confirm this review is based on my personal consultation experience.</span>
                    </div>
                  </label>
                  {errors.consent && <p className="text-xs text-red-500 font-bold">{errors.consent}</p>}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-2.5 rounded-xl border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-xs font-bold text-ink dark:text-white shadow-sm flex items-center gap-1.5 cursor-pointer hover:scale-[1.01] transition-transform"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-5 py-2.5 bg-brand text-white font-bold text-xs rounded-xl hover:bg-brand-dark flex items-center gap-1.5 cursor-pointer hover:scale-[1.01] transition-transform"
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.consent}
                    className="px-6 py-2.5 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Submit Review
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
