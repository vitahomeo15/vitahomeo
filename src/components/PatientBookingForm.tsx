"use client";

import React, { useState } from "react";
import { submitToSheet } from "@/lib/submitToSheet";
import { User, Phone, Mail, Calendar, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function PatientBookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    symptoms: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    // Strict 10-digit Indian phone validation
    const phoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/[\s\-]/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number (e.g. 9876543210)";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.preferredDate.trim()) {
      newErrors.preferredDate = "Preferred date is required";
    } else {
      // Basic check to prevent booking in the past
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Booking date cannot be in the past";
      }
    }

    if (!formData.symptoms.trim()) {
      newErrors.symptoms = "Brief description of symptoms is required";
    } else if (formData.symptoms.trim().length < 10) {
      newErrors.symptoms = "Please provide a bit more detail (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      FullName: formData.fullName,
      Phone: formData.phone,
      Email: formData.email,
      PreferredDate: formData.preferredDate,
      ReasonforConsultation: formData.symptoms,
    };

    const result = await submitToSheet("patient", payload);

    if (result.success) {
      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        preferredDate: "",
        symptoms: "",
      });
    } else {
      setStatus("error");
      setErrorMessage(result.message);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-8 text-center shadow-lg max-w-lg mx-auto animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-ink dark:text-white mb-3">Booking Requested!</h2>
        <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed mb-6 font-medium">
          We have successfully received your booking. One of our coordinators will review doctor schedules and contact you within 24 hours to confirm your video appointment details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-brand text-white font-bold text-xs rounded-full hover:bg-brand-dark transition-all cursor-pointer"
        >
          Book Another Consultation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-lg max-w-2xl mx-auto transition-colors duration-300">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white mb-2">Book Consultation</h2>
        <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">
          Provide your details below to schedule an online homeopathy consultation with a verified practitioner. Your medical data is securely encrypted.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-brand" /> Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g., Rohit Raj"
            disabled={status === "submitting"}
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
              errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.fullName && <p className="text-[10px] text-red-500 font-bold">{errors.fullName}</p>}
        </div>

        {/* Email and Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand" /> Phone Number (10-digit Indian Number)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., 9876543210"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand" /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., patient@example.com"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
          </div>
        </div>

        {/* Preferred Date */}
        <div className="space-y-1.5">
          <label htmlFor="preferredDate" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand" /> Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors cursor-pointer ${
              errors.preferredDate ? "border-red-500 focus:border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.preferredDate && <p className="text-[10px] text-red-500 font-bold">{errors.preferredDate}</p>}
        </div>

        {/* Symptoms / Reason */}
        <div className="space-y-1.5">
          <label htmlFor="symptoms" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-brand" /> Symptoms / Reason for Consultation
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            rows={4}
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Please briefly describe your symptoms, health concerns, and how long you have been experiencing them (e.g., chronic skin itching on hands for 6 months)..."
            disabled={status === "submitting"}
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none ${
              errors.symptoms ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.symptoms && <p className="text-[10px] text-red-500 font-bold">{errors.symptoms}</p>}
        </div>

        {/* Video Recording Consent Removed */}

        {/* Error Alert Box */}
        {status === "error" && (
          <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl flex items-start gap-3 animate-in fade-in duration-200">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-800 dark:text-red-300 font-semibold leading-relaxed">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-12 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Scheduling Appointment...
            </>
          ) : (
            "Request Consultation Slot"
          )}
        </button>

      </form>
    </div>
  );
}
