"use client";

import React, { useState, useRef } from "react";
import { submitToSheet } from "@/lib/submitToSheet";
import { User, Phone, Mail, Award, Clock, FileText, CheckCircle, AlertCircle, Loader2, CalendarDays, Upload, Image as ImageIcon } from "lucide-react";

export function DoctorJoinForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    registrationNumber: "",
    preferredHours: "Morning (9 AM - 12 PM)",
    consultationFees: "",
  });

  const [preferredDays, setPreferredDays] = useState<string[]>([
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ]);

  const [doctorImage, setDoctorImage] = useState<string>("");
  const [doctorImageName, setDoctorImageName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  const handleDayChange = (day: string) => {
    setPreferredDays((prev) => {
      let updated;
      if (prev.includes(day)) {
        updated = prev.filter((d) => d !== day);
      } else {
        updated = [...prev, day];
      }
      
      // Clear error if any
      if (errors.preferredDays) {
        setErrors((prevErr) => {
          const copy = { ...prevErr };
          delete copy.preferredDays;
          return copy;
        });
      }
      return updated;
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, doctorImage: "Please upload an image file (PNG, JPG, or JPEG)" }));
      return;
    }

    // Validate size (limit to 2MB to keep sheets submissions fast)
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, doctorImage: "Image size must be less than 2MB" }));
      return;
    }

    setDoctorImageName(file.name);

    // Convert file to Base64
    const reader = new FileReader();
    reader.onload = () => {
      setDoctorImage(reader.result as string);
      // Clear errors
      setErrors((prevErr) => {
        const copy = { ...prevErr };
        delete copy.doctorImage;
        return copy;
      });
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      setErrors((prev) => ({ ...prev, doctorImage: "Error reading image file." }));
    };
    reader.readAsDataURL(file);
  };

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

    if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required";
    
    if (!formData.experience.trim()) {
      newErrors.experience = "Years of experience is required";
    } else {
      const expNum = Number(formData.experience);
      if (isNaN(expNum) || expNum < 0) {
        newErrors.experience = "Please enter a valid number of years";
      }
    }

    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration number is required";

    if (preferredDays.length === 0) {
      newErrors.preferredDays = "Please select at least one consultation day";
    }

    if (!formData.consultationFees.trim()) {
      newErrors.consultationFees = "Consultation fee is required";
    } else {
      const feeNum = Number(formData.consultationFees);
      if (isNaN(feeNum) || feeNum <= 0) {
        newErrors.consultationFees = "Please enter a valid fee amount (greater than 0)";
      }
    }

    if (!doctorImage) {
      newErrors.doctorImage = "Doctor profile photo is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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
      Qualification: formData.qualification,
      Experience: formData.experience,
      RegistrationNumber: formData.registrationNumber,
      PreferredHours: formData.preferredHours,
      PreferredDays: preferredDays.join(", "),
      ConsultationFees: formData.consultationFees,
      DoctorImage: doctorImage,
    };

    const result = await submitToSheet("doctor", payload);

    if (result.success) {
      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        qualification: "",
        experience: "",
        registrationNumber: "",
        preferredHours: "Morning (9 AM - 12 PM)",
        consultationFees: "",
      });
      setPreferredDays(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
      setDoctorImage("");
      setDoctorImageName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
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
        <h2 className="text-2xl font-extrabold text-ink dark:text-white mb-3">Application Submitted!</h2>
        <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed mb-6 font-medium">
          We have received your doctor registration application. Our medical board will review your qualifications, registration credentials, and profile image. We will get back to you within 48 business hours to activate your verified account.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-brand text-white font-bold text-xs rounded-full hover:bg-brand-dark transition-all cursor-pointer"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-lg max-w-2xl mx-auto transition-colors duration-300">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white mb-2">Join as Verified Doctor</h2>
        <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed">
          Provide your clinical credentials and availability. Our vetting board will verify your details to activate your virtual consulting room.
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
            placeholder="e.g., Dr. Rajesh Sharma"
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
              placeholder="e.g., doctor@example.com"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
          </div>
        </div>

        {/* Qualification and Years of Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Qualification */}
          <div className="space-y-1.5">
            <label htmlFor="qualification" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-brand" /> Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="e.g., BHMS, MD (Homeopathy)"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.qualification ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.qualification && <p className="text-[10px] text-red-500 font-bold">{errors.qualification}</p>}
          </div>

          {/* Experience */}
          <div className="space-y-1.5">
            <label htmlFor="experience" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-brand" /> Years of Experience
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 12"
              min="0"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.experience ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.experience && <p className="text-[10px] text-red-500 font-bold">{errors.experience}</p>}
          </div>
        </div>

        {/* Registration Number and Consultation Fee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Registration Number */}
          <div className="space-y-1.5">
            <label htmlFor="registrationNumber" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand" /> Medical Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="e.g., H-45672 (Bihar Medical Council)"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.registrationNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.registrationNumber && <p className="text-[10px] text-red-500 font-bold">{errors.registrationNumber}</p>}
          </div>

          {/* Consultation Fees */}
          <div className="space-y-1.5">
            <label htmlFor="consultationFees" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-brand font-extrabold text-[13px] mr-0.5">₹</span> Consultation Fees (INR)
            </label>
            <input
              type="number"
              id="consultationFees"
              name="consultationFees"
              value={formData.consultationFees}
              onChange={handleChange}
              placeholder="e.g., 500"
              min="1"
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors ${
                errors.consultationFees ? "border-red-500 focus:border-red-500/50" : "border-line-custom dark:border-[#1d2a1a]"
              }`}
            />
            {errors.consultationFees && <p className="text-[10px] text-red-500 font-bold">{errors.consultationFees}</p>}
          </div>
        </div>

        {/* Preferred Consultation Hours */}
        <div className="space-y-1.5">
          <label htmlFor="preferredHours" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand" /> Preferred Consultation Hours
          </label>
          <select
            id="preferredHours"
            name="preferredHours"
            value={formData.preferredHours}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors cursor-pointer"
          >
            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
            <option value="Flexible / Full Day">Flexible / Full Day</option>
          </select>
        </div>

        {/* Preferred Consultation Days */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5 text-brand" /> Preferred Consultation Days
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 rounded-2xl bg-bg-soft dark:bg-[#0e1a0d]/50 border border-line-custom dark:border-[#1d2a1a]">
            {daysOfWeek.map((day) => (
              <label key={day} className="flex items-center gap-2 text-xs font-bold text-body-text dark:text-[#aebba8] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={preferredDays.includes(day)}
                  onChange={() => handleDayChange(day)}
                  disabled={status === "submitting"}
                  className="rounded text-brand focus:ring-brand border-line-custom dark:border-[#1d2a1a] w-4 h-4 cursor-pointer accent-brand"
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
          {errors.preferredDays && <p className="text-[10px] text-red-500 font-bold">{errors.preferredDays}</p>}
        </div>

        {/* Upload Doctor Image */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <Upload className="w-3.5 h-3.5 text-brand" /> Profile Photo (Max 2MB)
          </label>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border border-dashed border-line-custom dark:border-[#1d2a1a] bg-bg-soft/30 dark:bg-[#0e1a0d]/20">
            <button
              type="button"
              disabled={status === "submitting"}
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2.5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-xs font-bold rounded-lg text-ink dark:text-white shadow-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
            >
              <Upload className="w-3.5 h-3.5 text-brand" />
              Choose Photo
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              disabled={status === "submitting"}
              className="hidden"
            />
            <div className="flex items-center gap-2 text-xs text-muted-text">
              {doctorImage ? (
                <>
                  <ImageIcon className="w-4 h-4 text-brand" />
                  <span className="font-semibold text-brand dark:text-brand-light line-clamp-1">{doctorImageName}</span>
                </>
              ) : (
                <span>No file chosen (required)</span>
              )}
            </div>
          </div>
          {errors.doctorImage && <p className="text-[10px] text-red-500 font-bold">{errors.doctorImage}</p>}
        </div>

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
              Submitting Details...
            </>
          ) : (
            "Submit Registration Details"
          )}
        </button>

      </form>
    </div>
  );
}
