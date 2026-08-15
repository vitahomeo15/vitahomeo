"use client";

import React, { useState } from "react";
import Link from "next/link";
import { updateVerificationStatus, updateProfileStatus } from "../../adminActions";
import { 
  ShieldAlert, CheckCircle2, FileText, AlertCircle, Loader2, ArrowLeft, 
  MapPin, Clock, Calendar, Check, X, ClipboardCheck, Send 
} from "lucide-react";

interface DoctorReviewPanelProps {
  doctor: {
    id: string;
    full_name: string;
    phone: string;
    email: string;
    qualification: string;
    experience: number;
    registration_number: string;
    preferred_hours: string;
    preferred_days: string;
    consultation_fees: number;
    profile_photo_url: string;
    bio: string;
    specialty: string;
    slug: string;
    profile_status: string;
    verification_status: string;
    rejection_reason?: string;
    clinic_address: string;
    locality?: string;
    city: string;
    state: string;
    pin_code: string;
    google_maps_url?: string;
    expertise: string[];
    languages: string[];
    consultation_type: string;
  };
}

export default function DoctorReviewPanel({ doctor }: DoctorReviewPanelProps) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  // Rejection Dialog State
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const handleAction = async (actionType: "under_review" | "verified" | "approved" | "published") => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      let res;
      if (actionType === "under_review" || actionType === "verified") {
        res = await updateVerificationStatus(doctor.id, actionType);
      } else {
        res = await updateProfileStatus(doctor.id, actionType);
      }

      if (res.success) {
        setSuccessMsg(`Status updated successfully to '${actionType.replace("_", " ")}'.`);
        // Refresh page data in Next.js Server Components dynamically
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setErrorMsg(res.error || "Action failed.");
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const handleRejectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectReason.trim()) return;

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    setShowRejectDialog(false);

    try {
      const res = await updateVerificationStatus(doctor.id, "rejected", rejectReason.trim());
      if (res.success) {
        setSuccessMsg("Onboarding application rejected successfully. Reason logged.");
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setErrorMsg(res.error || "Rejection update failed.");
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  // Vetting validation rules for CTAs
  const isVerified = doctor.verification_status === "verified";
  const isApproved = doctor.profile_status === "approved";
  const isPublished = doctor.profile_status === "published";
  const isRejected = doctor.verification_status === "rejected";

  return (
    <div className="space-y-6">
      
      {/* Messages */}
      {successMsg && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-2xl flex items-center gap-2 animate-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0" />
          <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">{successMsg} Reloading...</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-2xl flex items-center gap-2 animate-in slide-in-from-top duration-300">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-500 shrink-0" />
          <span className="text-xs text-red-800 dark:text-red-300 font-bold">{errorMsg}</span>
        </div>
      )}

      {/* Reject Reason Display (if rejected) */}
      {isRejected && doctor.rejection_reason && (
        <div className="p-4 bg-red-50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/20 rounded-2xl flex items-start gap-2.5 animate-in fade-in">
          <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-black text-red-700 dark:text-red-400 uppercase tracking-wider block">Logged Rejection Reason</span>
            <p className="text-xs text-red-800 dark:text-red-300 mt-1 font-semibold leading-relaxed">{doctor.rejection_reason}</p>
          </div>
        </div>
      )}

      {/* Detail Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left column: Submissions Details */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Section: Personal Info */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm">
            <h3 className="text-xs font-black text-brand uppercase tracking-wider border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-2 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Full Name</span>
                <span className="text-ink dark:text-white font-bold text-sm">{doctor.full_name}</span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Phone Number (Indian Mobile)</span>
                <span className="text-ink dark:text-white font-bold">{doctor.phone}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Email Address</span>
                <span className="text-ink dark:text-white font-bold">{doctor.email}</span>
              </div>
            </div>
          </div>

          {/* Section: Qualifications */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm">
            <h3 className="text-xs font-black text-brand uppercase tracking-wider border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-2 mb-4">
              Qualification & Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Qualification Degree</span>
                <span className="text-ink dark:text-white font-bold">{doctor.qualification}</span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Years of Experience</span>
                <span className="text-ink dark:text-white font-bold">{doctor.experience} Years</span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Specialization</span>
                <span className="text-ink dark:text-white font-bold">{doctor.specialty}</span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Session Fees</span>
                <span className="text-brand font-black block mt-0.5">₹ {doctor.consultation_fees}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Areas of Expertise</span>
                <div className="flex flex-wrap gap-1.5 mt-1 text-ink dark:text-white">
                  {doctor.expertise && doctor.expertise.length > 0 ? (
                    doctor.expertise.map((exp) => (
                      <span key={exp} className="bg-bg-soft dark:bg-[#162315] border border-line-custom/60 dark:border-[#1d2a1a] px-2.5 py-1 rounded-md text-[10px] font-bold">
                        {exp}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted-text font-bold">No expertise selected</span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Languages Spoken</span>
                <div className="flex flex-wrap gap-1.5 mt-1 text-ink dark:text-white">
                  {doctor.languages && doctor.languages.length > 0 ? (
                    doctor.languages.map((lang) => (
                      <span key={lang} className="bg-bg-soft dark:bg-[#162315] border border-line-custom/60 dark:border-[#1d2a1a] px-2.5 py-1 rounded-md text-[10px] font-bold">
                        {lang}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted-text font-bold">No languages selected</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Medical Registration */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm">
            <h3 className="text-xs font-black text-brand uppercase tracking-wider border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-2 mb-4">
              Medical Registration
            </h3>
            <div className="text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Medical Registration Council / Number</span>
              <span className="text-ink dark:text-white font-bold text-sm block">{doctor.registration_number}</span>
              <span className="text-[10px] text-muted-text font-bold leading-relaxed block mt-2">
                Verify this registration number against state and central council registers (like Central Council of Homeopathy, India) to confirm license validity before approval.
              </span>
            </div>
          </div>

          {/* Section: Consultation settings */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm">
            <h3 className="text-xs font-black text-brand uppercase tracking-wider border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-2 mb-4">
              Consultation & Availability
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-body-text dark:text-[#aebba8] mb-4">
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Consultation Type</span>
                <span className="text-ink dark:text-white font-bold uppercase">{doctor.consultation_type.replace("_", " ")}</span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Days Active</span>
                <span className="text-ink dark:text-white font-bold">{doctor.preferred_days}</span>
              </div>
            </div>
            
            <div className="border-t border-line-custom/40 dark:border-[#1d2a1a]/40 pt-4 space-y-2">
              <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold">Availability Timings per day</span>
              <div className="space-y-1">
                {doctor.preferred_hours.split("; ").map((hoursStr) => {
                  const parts = hoursStr.split(": ");
                  return (
                    <div key={hoursStr} className="flex justify-between items-center text-xs py-1 border-b border-line-custom/20 last:border-b-0">
                      <span className="font-bold text-ink dark:text-white uppercase tracking-wider text-[10px]">{parts[0]}</span>
                      <span className="font-bold text-muted-text">{parts[1]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section: Practice Location */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm">
            <h3 className="text-xs font-black text-brand uppercase tracking-wider border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-2 mb-4">
              Practice Location
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div className="sm:col-span-2">
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Clinic Address</span>
                <span className="text-ink dark:text-white font-bold">{doctor.clinic_address || "Not Provided"}</span>
              </div>
              {doctor.locality && (
                <div>
                  <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">Locality / Area</span>
                  <span className="text-ink dark:text-white font-bold">{doctor.locality}</span>
                </div>
              )}
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">City</span>
                <span className="text-ink dark:text-white font-bold">{doctor.city}</span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider font-bold mb-0.5">State & PIN Code</span>
                <span className="text-ink dark:text-white font-bold">{doctor.state} - {doctor.pin_code}</span>
              </div>
              {doctor.google_maps_url && (
                <div className="sm:col-span-2 pt-2 border-t border-line-custom/50">
                  <a 
                    href={doctor.google_maps_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-brand hover:underline font-bold"
                  >
                    <MapPin className="w-3.5 h-3.5" /> View on Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Section: Biography */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm">
            <h3 className="text-xs font-black text-brand uppercase tracking-wider border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-2 mb-4">
              Practitioner Bio
            </h3>
            <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              {doctor.bio}
            </p>
          </div>

        </div>

        {/* Right column: Image preview & Action controls */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          {/* Portrait card */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[20px] overflow-hidden border border-line-custom dark:border-white/10 shadow-md bg-bg-soft mx-auto mb-4">
              {doctor.profile_photo_url ? (
                <img src={doctor.profile_photo_url} alt={doctor.full_name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-brand/10 text-brand flex items-center justify-center font-bold text-2xl">
                  {doctor.full_name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                </div>
              )}
            </div>
            <h2 className="font-extrabold text-ink dark:text-white text-base leading-tight">{doctor.full_name}</h2>
            <span className="text-[10px] text-muted-text font-bold uppercase tracking-wider block mt-1">{doctor.qualification}</span>
          </div>

          {/* Action container */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-ink dark:text-white uppercase tracking-wider border-b border-line-custom/40 dark:border-[#1d2a1a]/40 pb-2.5">
              Review Actions
            </h3>

            {/* Status indicators */}
            <div className="space-y-2 text-xs font-bold">
              <div className="flex justify-between items-center py-1.5 border-b border-line-custom/30">
                <span className="text-muted-text text-[10px] uppercase tracking-wider">Verification Status</span>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider ${
                  doctor.verification_status === "verified" ? "bg-emerald-50 text-emerald-700 font-black" :
                  doctor.verification_status === "under_review" ? "bg-blue-50 text-blue-700" :
                  doctor.verification_status === "rejected" ? "bg-red-50 text-red-700" :
                  "bg-amber-50 text-amber-700"
                }`}>
                  {doctor.verification_status.replace("_", " ")}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-line-custom/30">
                <span className="text-muted-text text-[10px] uppercase tracking-wider">Profile Status</span>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider ${
                  doctor.profile_status === "published" ? "bg-teal-50 text-teal-700 font-black" :
                  doctor.profile_status === "approved" ? "bg-emerald-50 text-emerald-700" :
                  doctor.profile_status === "rejected" ? "bg-red-50 text-red-700" :
                  "bg-amber-50 text-amber-700"
                }`}>
                  {doctor.profile_status.replace("_", " ")}
                </span>
              </div>
            </div>

            {/* Action buttons list */}
            <div className="space-y-2.5 pt-2">
              
              {/* Mark Under Review */}
              <button
                type="button"
                disabled={loading || doctor.verification_status === "under_review"}
                onClick={() => handleAction("under_review")}
                className="w-full h-10 bg-white dark:bg-[#101c0f] border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Clock className="w-3.5 h-3.5" />}
                Mark Under Review
              </button>

              {/* Verify Doctor */}
              <button
                type="button"
                disabled={loading || isVerified}
                onClick={() => handleAction("verified")}
                className="w-full h-10 bg-white dark:bg-[#101c0f] border border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ClipboardCheck className="w-3.5 h-3.5" />}
                Verify Credentials
              </button>

              {/* Reject Application */}
              <button
                type="button"
                disabled={loading || isRejected}
                onClick={() => setShowRejectDialog(true)}
                className="w-full h-10 bg-white dark:bg-[#101c0f] border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                <X className="w-3.5 h-3.5" />
                Reject Application
              </button>

              {/* Approve Profile */}
              <button
                type="button"
                disabled={loading || isApproved || isPublished}
                onClick={() => handleAction("approved")}
                className="w-full h-10 bg-white dark:bg-[#101c0f] border border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                Approve Profile
              </button>

              {/* Publish Profile */}
              <button
                type="button"
                disabled={loading || !isVerified || isPublished}
                onClick={() => handleAction("published")}
                className="w-full h-11 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                Publish Profile Live
              </button>

              {/* Helper note */}
              {!isVerified && (
                <p className="text-[10px] text-amber-600 font-bold leading-normal block text-center mt-2 bg-amber-50/50 p-2 rounded-lg border border-amber-100">
                  Publishing is disabled until verification status is verified.
                </p>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Reject Reason Popup Modal */}
      {showRejectDialog && (
        <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <form 
            onSubmit={handleRejectSubmit} 
            className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-xl w-full max-w-md space-y-4 animate-in zoom-in-95 duration-200"
          >
            <div className="flex justify-between items-center border-b border-line-custom/50 pb-2">
              <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-600" /> Reject Application
              </h3>
              <button 
                type="button" 
                onClick={() => setShowRejectDialog(false)}
                className="text-xs text-muted-text font-bold hover:underline"
              >
                Cancel
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider block">
                Specify Reason for Rejection
              </label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Specify what details are incorrect or missing (e.g. invalid medical registration register check)..."
                rows={4}
                required
                className="w-full px-3 py-2 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !rejectReason.trim()}
              className="w-full h-10 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Submit Rejection Log
                </>
              )}
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
