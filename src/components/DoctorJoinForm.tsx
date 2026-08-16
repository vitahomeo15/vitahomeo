"use client";

import React, { useState, useEffect, useRef } from "react";
import { submitDoctorOnboarding } from "@/app/admin/adminActions";
import { 
  User, Phone, Mail, Award, Clock, FileText, CheckCircle, AlertCircle, 
  Loader2, CalendarDays, Upload, Image as ImageIcon, MapPin, ArrowLeft, 
  ArrowRight, Save, Check, ShieldCheck, ExternalLink, RefreshCw 
} from "lucide-react";

export function DoctorJoinForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 8;

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    qualification: "BHMS",
    customQualification: "",
    experience: "",
    registrationNumber: "",
    specialty: "",
    consultationType: "both", // 'online', 'in_clinic', 'both'
    consultationFees: "",
    clinicAddress: "",
    locality: "",
    city: "",
    state: "",
    pinCode: "",
    googleMapsUrl: "",
    bio: "",
  });

  // Array and Complex Selection States
  const [preferredDays, setPreferredDays] = useState<string[]>(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
  const [preferredExpertise, setPreferredExpertise] = useState<string[]>([]);
  const [preferredLanguages, setPreferredLanguages] = useState<string[]>(["English", "Hindi"]);
  
  // Custom Availability hours per selected day
  const [hoursConfig, setHoursConfig] = useState<Record<string, { type: string; custom: string }>>({
    Monday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    Tuesday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    Wednesday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    Thursday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    Friday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    Saturday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    Sunday: { type: "Morning (9 AM - 1 PM)", custom: "" },
  });

  // Image Upload States
  const [doctorImage, setDoctorImage] = useState<string>("");
  const [doctorImageName, setDoctorImageName] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form Validation & Status States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [draftNotice, setDraftNotice] = useState("");

  // Consent Checkboxes (Step 8)
  const [consentAccuracy, setConsentAccuracy] = useState(false);
  const [consentDisplay, setConsentDisplay] = useState(false);
  const [consentVetting, setConsentVetting] = useState(false);

  // Static Categories
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const expertiseList = [
    "Constitutional Treatment", "Chronic Illnesses", "Skin & Hair Disorders", 
    "Pediatrics", "Gastrointestinal (IBS/Acidity)", "Women's Health (PCOS/PCOD)", 
    "Allergic Disorders", "Migraine & Headaches", "Other"
  ];

  const languagesList = [
    "Hindi", "English", "Maithili", "Bengali", "Marathi", "Gujarati", 
    "Punjabi", "Tamil", "Telugu", "Kannada", "Malayalam", "Odia", 
    "Assamese", "Urdu", "Other"
  ];

  const timeSlotOptions = [
    "Morning (9 AM - 1 PM)",
    "Afternoon (1 PM - 5 PM)",
    "Evening (5 PM - 9 PM)",
    "Full Day (9 AM - 9 PM)",
    "Custom"
  ];

  // ==========================================
  // 1. DRAFT MANAGEMENT (localStorage)
  // ==========================================
  useEffect(() => {
    // Check if a saved draft exists on mount
    const savedDraft = localStorage.getItem("vitahomeo_doctor_onboarding_draft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData(parsed.formData || formData);
        setPreferredDays(parsed.preferredDays || preferredDays);
        setPreferredExpertise(parsed.preferredExpertise || preferredExpertise);
        setPreferredLanguages(parsed.preferredLanguages || preferredLanguages);
        setHoursConfig(parsed.hoursConfig || hoursConfig);
        setStep(parsed.step || 1);
        if (parsed.doctorImage) {
          setDoctorImage(parsed.doctorImage);
          setDoctorImageName(parsed.doctorImageName || "saved_photo.jpg");
        }
        setDraftNotice("Restored your unsaved draft submission from previous session.");
        setTimeout(() => setDraftNotice(""), 8000);
      } catch (e) {
        console.error("Failed to parse onboarding draft", e);
      }
    }
  }, []);

  const handleSaveDraft = () => {
    const draftPayload = {
      formData,
      preferredDays,
      preferredExpertise,
      preferredLanguages,
      hoursConfig,
      step,
      doctorImage,
      doctorImageName
    };
    localStorage.setItem("vitahomeo_doctor_onboarding_draft", JSON.stringify(draftPayload));
    setDraftNotice("Draft saved successfully to your local browser storage.");
    setTimeout(() => setDraftNotice(""), 5000);
  };

  const handleClearDraft = () => {
    localStorage.removeItem("vitahomeo_doctor_onboarding_draft");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      qualification: "BHMS",
      customQualification: "",
      experience: "",
      registrationNumber: "",
      specialty: "",
      consultationType: "both",
      consultationFees: "",
      clinicAddress: "",
      locality: "",
      city: "",
      state: "",
      pinCode: "",
      googleMapsUrl: "",
      bio: "",
    });
    setPreferredDays(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
    setPreferredExpertise([]);
    setPreferredLanguages(["English", "Hindi"]);
    setHoursConfig({
      Monday: { type: "Morning (9 AM - 1 PM)", custom: "" },
      Tuesday: { type: "Morning (9 AM - 1 PM)", custom: "" },
      Wednesday: { type: "Morning (9 AM - 1 PM)", custom: "" },
      Thursday: { type: "Morning (9 AM - 1 PM)", custom: "" },
      Friday: { type: "Morning (9 AM - 1 PM)", custom: "" },
      Saturday: { type: "Morning (9 AM - 1 PM)", custom: "" },
      Sunday: { type: "Morning (9 AM - 1 PM)", custom: "" },
    });
    setDoctorImage("");
    setDoctorImageName("");
    setImageFile(null);
    setStep(1);
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
    setDraftNotice("Draft cleared. Starting form fresh.");
    setTimeout(() => setDraftNotice(""), 4000);
  };

  // ==========================================
  // 2. INPUT SELECTION HANDLERS
  // ==========================================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleDayChange = (day: string) => {
    setPreferredDays((prev) => {
      const updated = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
      if (errors.preferredDays && updated.length > 0) {
        setErrors((prevErr) => {
          const copy = { ...prevErr };
          delete copy.preferredDays;
          return copy;
        });
      }
      return updated;
    });
  };

  const handleExpertiseChange = (exp: string) => {
    setPreferredExpertise((prev) => 
      prev.includes(exp) ? prev.filter((item) => item !== exp) : [...prev, exp]
    );
  };

  const handleLanguageChange = (lang: string) => {
    setPreferredLanguages((prev) => {
      const updated = prev.includes(lang) ? prev.filter((item) => item !== lang) : [...prev, lang];
      if (errors.preferredLanguages && updated.length > 0) {
        setErrors((prevErr) => {
          const copy = { ...prevErr };
          delete copy.preferredLanguages;
          return copy;
        });
      }
      return updated;
    });
  };

  const handleHourTypeChange = (day: string, type: string) => {
    setHoursConfig((prev) => ({
      ...prev,
      [day]: { ...prev[day], type }
    }));
  };

  const handleHourCustomChange = (day: string, value: string) => {
    setHoursConfig((prev) => ({
      ...prev,
      [day]: { ...prev[day], custom: value }
    }));
    if (errors[`hoursCustom_${day}`]) {
      setErrors((prevErr) => {
        const copy = { ...prevErr };
        delete copy[`hoursCustom_${day}`];
        return copy;
      });
    }
  };

  // ==========================================
  // 3. IMAGE UPLOAD HANDLING
  // ==========================================
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, doctorImage: "Please upload a valid image file (PNG, JPG, or JPEG)" }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, doctorImage: "Photo size must be less than 2MB" }));
      return;
    }

    setDoctorImageName(file.name);
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setDoctorImage(reader.result as string);
      setErrors((prevErr) => {
        const copy = { ...prevErr };
        delete copy.doctorImage;
        return copy;
      });
    };
    reader.readAsDataURL(file);
  };

  // ==========================================
  // 4. STEP-BY-STEP VALIDATION & NAVIGATION
  // ==========================================
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      
      const phoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!phoneRegex.test(formData.phone.trim().replace(/[\s\-]/g, ""))) {
        newErrors.phone = "Enter a valid 10-digit Indian mobile number (e.g. 9876543210)";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }

      if (!doctorImage) {
        newErrors.doctorImage = "Profile photo is required";
      }
    }

    if (currentStep === 2) {
      if (formData.qualification === "Other" && !formData.customQualification.trim()) {
        newErrors.customQualification = "Please specify your qualification";
      }
      
      if (!formData.experience.trim()) {
        newErrors.experience = "Years of experience is required";
      } else {
        const expNum = Number(formData.experience);
        if (isNaN(expNum) || expNum < 0) {
          newErrors.experience = "Enter a valid non-negative number";
        }
      }

      if (!formData.registrationNumber.trim()) {
        newErrors.registrationNumber = "Medical Registration Number is required";
      }
    }

    if (currentStep === 3) {
      if (!formData.specialty.trim()) newErrors.specialty = "Specialization details are required";
      if (preferredLanguages.length === 0) newErrors.preferredLanguages = "Select at least one language";
    }

    if (currentStep === 4) {
      if (!formData.consultationFees.trim()) {
        newErrors.consultationFees = "Consultation fee is required";
      } else {
        const feeNum = Number(formData.consultationFees);
        if (isNaN(feeNum) || feeNum < 0) {
          newErrors.consultationFees = "Enter a valid positive fee amount";
        }
      }
    }

    if (currentStep === 5) {
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      
      const pinRegex = /^\d{6}$/;
      if (!formData.pinCode.trim()) {
        newErrors.pinCode = "Pin code is required";
      } else if (!pinRegex.test(formData.pinCode.trim())) {
        newErrors.pinCode = "Enter a valid 6-digit Indian pin code";
      }

      if (formData.googleMapsUrl.trim() && !/^https?:\/\//.test(formData.googleMapsUrl.trim())) {
        newErrors.googleMapsUrl = "Link must start with http:// or https://";
      }
    }

    if (currentStep === 6) {
      if (preferredDays.length === 0) {
        newErrors.preferredDays = "Please select at least one availability day";
      }
      
      // Validate custom hours if 'Custom' option is chosen for checked days
      preferredDays.forEach((day) => {
        if (hoursConfig[day]?.type === "Custom" && !hoursConfig[day]?.custom?.trim()) {
          newErrors[`hoursCustom_${day}`] = "Please enter hours for " + day;
        }
      });
    }

    if (currentStep === 7) {
      if (!formData.bio.trim()) {
        newErrors.bio = "About / Bio description is required";
      } else if (formData.bio.trim().length < 50) {
        newErrors.bio = "Bio details must be at least 50 characters long to build a trusted profile";
      } else if (formData.bio.trim().length > 1000) {
        newErrors.bio = "Bio details cannot exceed 1000 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // ==========================================
  // 5. SUBMISSION FLOW & DUP CHECKS
  // ==========================================
  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Str = reader.result as string;
        const cleanBase64 = base64Str.split(",")[1];
        resolve(cleanBase64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    if (!consentAccuracy || !consentDisplay || !consentVetting) {
      setErrors({ consents: "You must check all three consent boxes to submit your profile." });
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // A. Prepare photo base64 data if present
      let imageInfo = null;
      if (imageFile) {
        try {
          const base64 = await getBase64(imageFile);
          imageInfo = {
            base64,
            name: imageFile.name,
            type: imageFile.type,
          };
        } catch (err) {
          throw new Error("Failed to process profile photo. Please try again.");
        }
      }

      // B. Serialize availabilities
      const serializedHours = preferredDays
        .map((day) => {
          const config = hoursConfig[day];
          const hoursStr = config.type === "Custom" ? config.custom : config.type;
          return `${day}: ${hoursStr}`;
        })
        .join("; ");

      const finalQual = formData.qualification === "Other" ? formData.customQualification : formData.qualification;

      // C. Submit via Server Action
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        qualification: finalQual,
        experience: formData.experience,
        registrationNumber: formData.registrationNumber,
        preferredHours: serializedHours,
        preferredDays: preferredDays.join(", "),
        consultationFees: formData.consultationFees,
        doctorImage: doctorImage,
        clinicAddress: formData.clinicAddress || null,
        locality: formData.locality || null,
        city: formData.city,
        state: formData.state,
        pinCode: formData.pinCode,
        googleMapsUrl: formData.googleMapsUrl || null,
        expertise: preferredExpertise,
        languages: preferredLanguages,
        consultationType: formData.consultationType,
        bio: formData.bio,
      };

      const result = await submitDoctorOnboarding(payload, imageInfo);
      if (!result.success) {
        throw new Error(result.error);
      }

      // D. Clear draft local storage backup
      localStorage.removeItem("vitahomeo_doctor_onboarding_draft");
      setStatus("success");
    } catch (err: any) {
      console.error("Onboarding submission error", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred during submission. Please try again.");
    }
  };

  // ==========================================
  // 6. RENDER HELPERS
  // ==========================================
  const renderProgressIndicator = () => {
    const percent = ((step - 1) / (totalSteps - 1)) * 100;
    return (
      <div className="mb-8 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-body-text dark:text-[#aebba8]">
          <span className="uppercase tracking-widest text-[10px] text-brand">Step {step} of {totalSteps}</span>
          <span>{Math.round(percent)}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-[#e3eae0] dark:bg-[#1d2a1a] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand to-[#0ea98b] transition-all duration-300 rounded-full" 
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  };

  // Step Renders
  const renderStep1 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 1 — Personal Information</h3>
      
      {/* Full Name */}
      <div className="space-y-1">
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
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.fullName ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        {errors.fullName && <p className="text-[10px] text-red-500 font-bold">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="phone" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand" /> Phone Number (Indian Mobile)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g., 9876543210"
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
              errors.phone ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-brand" /> Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="doctor@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
              errors.email ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
        </div>
      </div>

      {/* Profile Photo */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5 text-brand" /> Profile Photo (Max 2MB)
        </label>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border border-dashed border-line-custom dark:border-[#1d2a1a] bg-bg-soft/30 dark:bg-[#0e1a0d]/20">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2.5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-xs font-bold rounded-lg text-ink dark:text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-brand" />
            Choose Photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <div className="flex items-center gap-2 text-xs text-muted-text">
            {doctorImage ? (
              <>
                <ImageIcon className="w-4 h-4 text-brand" />
                <span className="font-semibold text-brand dark:text-brand-light line-clamp-1">{doctorImageName}</span>
              </>
            ) : (
              <span>No photo chosen (required for directory profile)</span>
            )}
          </div>
        </div>
        {errors.doctorImage && <p className="text-[10px] text-red-500 font-bold">{errors.doctorImage}</p>}

        {/* Preview image container */}
        {doctorImage && (
          <div className="mt-3 flex items-center gap-3">
            <div className="w-16 h-16 rounded-[12px] border border-line-custom dark:border-[#1d2a1a] overflow-hidden bg-bg-soft flex-shrink-0">
              <img src={doctorImage} alt="Profile preview" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Photo Preview</span>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 2 — Qualification & Registration</h3>

      {/* Qualification dropdown */}
      <div className="space-y-1">
        <label htmlFor="qualification" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-brand" /> Homeopathic Qualification
        </label>
        <select
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand cursor-pointer"
        >
          <option value="BHMS">BHMS</option>
          <option value="MD (Hom)">MD (Hom)</option>
          <option value="Other">Other (Please specify)</option>
        </select>
      </div>

      {/* Custom Qualification (conditional) */}
      {formData.qualification === "Other" && (
        <div className="space-y-1 animate-in slide-in-from-top-2 duration-200">
          <label htmlFor="customQualification" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            Specify Qualification
          </label>
          <input
            type="text"
            id="customQualification"
            name="customQualification"
            value={formData.customQualification}
            onChange={handleChange}
            placeholder="e.g. DHMS, LCEH"
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
              errors.customQualification ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.customQualification && <p className="text-[10px] text-red-500 font-bold">{errors.customQualification}</p>}
        </div>
      )}

      {/* Years of Experience */}
      <div className="space-y-1">
        <label htmlFor="experience" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-brand" /> Years of Clinical Experience
        </label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="e.g., 10"
          min="0"
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.experience ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        {errors.experience && <p className="text-[10px] text-red-500 font-bold">{errors.experience}</p>}
      </div>

      {/* Registration Number */}
      <div className="space-y-1">
        <label htmlFor="registrationNumber" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-brand" /> Medical Registration Number
        </label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="e.g. H-45672 (Bihar Medical Council)"
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.registrationNumber ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        <span className="text-[10px] font-bold text-muted-text block leading-normal mt-1">
          Provide your clinical state or central council registration number. Our board will verify this credentials list manually before activation.
        </span>
        {errors.registrationNumber && <p className="text-[10px] text-red-500 font-bold">{errors.registrationNumber}</p>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 3 — Specialization & Expertise</h3>

      {/* Specialty text */}
      <div className="space-y-1">
        <label htmlFor="specialty" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
          Primary Clinical Specialty
        </label>
        <input
          type="text"
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="e.g. Chronic Care, Constitutional Prescribing, Pediatrics"
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.specialty ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        {errors.specialty && <p className="text-[10px] text-red-500 font-bold">{errors.specialty}</p>}
      </div>

      {/* Expertise Checkboxes */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider block">Areas of Expertise</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-bg-soft dark:bg-[#0e1a0d]/50 border border-line-custom dark:border-[#1d2a1a]">
          {expertiseList.map((exp) => (
            <label key={exp} className="flex items-center gap-2 text-xs font-bold text-body-text dark:text-[#aebba8] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={preferredExpertise.includes(exp)}
                onChange={() => handleExpertiseChange(exp)}
                className="rounded text-brand focus:ring-brand border-line-custom w-4 h-4 cursor-pointer accent-brand"
              />
              <span>{exp}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Languages Checkboxes */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider block">Spoken Languages</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-4 rounded-2xl bg-bg-soft dark:bg-[#0e1a0d]/50 border border-line-custom dark:border-[#1d2a1a]">
          {languagesList.map((lang) => (
            <label key={lang} className="flex items-center gap-2 text-xs font-bold text-body-text dark:text-[#aebba8] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={preferredLanguages.includes(lang)}
                onChange={() => handleLanguageChange(lang)}
                className="rounded text-brand focus:ring-brand border-line-custom w-4 h-4 cursor-pointer accent-brand"
              />
              <span>{lang}</span>
            </label>
          ))}
        </div>
        {errors.preferredLanguages && <p className="text-[10px] text-red-500 font-bold">{errors.preferredLanguages}</p>}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 4 — Consultation</h3>

      {/* Consultation Type Selector */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider block">Mode of Consultation</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Online", val: "online" },
            { label: "In-Clinic", val: "in_clinic" },
            { label: "Both", val: "both" }
          ].map((mode) => (
            <label 
              key={mode.val} 
              className={`p-4 rounded-xl border text-center font-bold text-xs cursor-pointer select-none flex flex-col justify-center gap-1.5 transition-all ${
                formData.consultationType === mode.val
                  ? "border-brand bg-brand/5 text-brand"
                  : "border-line-custom dark:border-[#1d2a1a] bg-white dark:bg-[#101c0f]/50 hover:bg-bg-soft text-body-text dark:text-[#aebba8]"
              }`}
            >
              <input
                type="radio"
                name="consultationType"
                value={mode.val}
                checked={formData.consultationType === mode.val}
                onChange={handleChange}
                className="sr-only"
              />
              <span>{mode.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Consultation Fee */}
      <div className="space-y-1">
        <label htmlFor="consultationFees" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1">
          <span className="text-brand font-black text-[13px] mr-0.5">₹</span> Session Consultation Fee (INR)
        </label>
        <input
          type="number"
          id="consultationFees"
          name="consultationFees"
          value={formData.consultationFees}
          onChange={handleChange}
          placeholder="e.g., 500"
          min="0"
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.consultationFees ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        <span className="text-[10px] font-bold text-muted-text block leading-normal mt-1">
          Specify your single session fee in Rupees (displayed transparently to patients). Do not type the ₹ symbol in this field.
        </span>
        {errors.consultationFees && <p className="text-[10px] text-red-500 font-bold">{errors.consultationFees}</p>}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 5 — Practice Location</h3>

      {/* Clinic Address */}
      <div className="space-y-1">
        <label htmlFor="clinicAddress" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-brand" /> Clinic / Practice Address (Optional)
        </label>
        <input
          type="text"
          id="clinicAddress"
          name="clinicAddress"
          value={formData.clinicAddress}
          onChange={handleChange}
          placeholder="e.g., Shop No. 4, Ground Floor, Central Plaza"
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.clinicAddress ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        {errors.clinicAddress && <p className="text-[10px] text-red-500 font-bold">{errors.clinicAddress}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Locality */}
        <div className="space-y-1">
          <label htmlFor="locality" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            Locality / Area (Optional)
          </label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="e.g., Sector 15"
            className="w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand"
          />
        </div>

        {/* City */}
        <div className="space-y-1">
          <label htmlFor="city" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g., Hajipur"
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
              errors.city ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.city && <p className="text-[10px] text-red-500 font-bold">{errors.city}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* State */}
        <div className="space-y-1">
          <label htmlFor="state" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="e.g., Bihar"
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
              errors.state ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.state && <p className="text-[10px] text-red-500 font-bold">{errors.state}</p>}
        </div>

        {/* PIN Code */}
        <div className="space-y-1">
          <label htmlFor="pinCode" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            PIN Code (6-digit)
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            placeholder="e.g., 844101"
            className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
              errors.pinCode ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
            }`}
          />
          {errors.pinCode && <p className="text-[10px] text-red-500 font-bold">{errors.pinCode}</p>}
        </div>
      </div>

      {/* Google Maps Link */}
      <div className="space-y-1">
        <label htmlFor="googleMapsUrl" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
          Google Maps Location Link (Optional)
        </label>
        <input
          type="url"
          id="googleMapsUrl"
          name="googleMapsUrl"
          value={formData.googleMapsUrl}
          onChange={handleChange}
          placeholder="e.g., https://maps.google.com/?q=..."
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand ${
            errors.googleMapsUrl ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        {errors.googleMapsUrl && <p className="text-[10px] text-red-500 font-bold">{errors.googleMapsUrl}</p>}
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-5 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 6 — Practice Availability</h3>

      {/* Preferred Days Checkboxes */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
          <CalendarDays className="w-3.5 h-3.5 text-brand" /> Consultation Days
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 rounded-2xl bg-bg-soft dark:bg-[#0e1a0d]/50 border border-line-custom dark:border-[#1d2a1a]">
          {daysOfWeek.map((day) => (
            <label key={day} className="flex items-center gap-2 text-xs font-bold text-body-text dark:text-[#aebba8] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={preferredDays.includes(day)}
                onChange={() => handleDayChange(day)}
                className="rounded text-brand focus:ring-brand border-line-custom w-4 h-4 cursor-pointer accent-brand"
              />
              <span>{day}</span>
            </label>
          ))}
        </div>
        {errors.preferredDays && <p className="text-[10px] text-red-500 font-bold">{errors.preferredDays}</p>}
      </div>

      {/* Preferred Hours slot selection per day */}
      {preferredDays.length > 0 && (
        <div className="space-y-4 pt-2 border-t border-line-custom/40 dark:border-[#1d2a1a]/40 animate-in fade-in duration-200">
          <label className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand" /> Set Hours for Selected Days
          </label>
          <div className="space-y-3">
            {preferredDays.map((day) => (
              <div 
                key={day} 
                className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/40 dark:bg-[#0e1a0d]/10 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
              >
                <div className="text-xs font-black text-ink dark:text-white uppercase tracking-wider">
                  {day}
                </div>
                
                {/* Select hours type */}
                <div className="sm:col-span-2 space-y-2">
                  <select
                    value={hoursConfig[day]?.type || "Morning (9 AM - 1 PM)"}
                    onChange={(e) => handleHourTypeChange(day, e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#101c0f] text-xs font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand cursor-pointer"
                  >
                    {timeSlotOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  
                  {/* Custom hours entry */}
                  {hoursConfig[day]?.type === "Custom" && (
                    <input
                      type="text"
                      value={hoursConfig[day]?.custom || ""}
                      onChange={(e) => handleHourCustomChange(day, e.target.value)}
                      placeholder="e.g. 10 AM - 12 PM, 6 PM - 8 PM"
                      className={`w-full px-3 py-2 rounded-lg bg-white dark:bg-[#101c0f] text-xs font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand animate-in slide-in-from-top-1 duration-150 ${
                        errors[`hoursCustom_${day}`] ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
                      }`}
                    />
                  )}
                  {errors[`hoursCustom_${day}`] && <p className="text-[9px] text-red-500 font-bold mt-1">{errors[`hoursCustom_${day}`]}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderStep7 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-2">Step 7 — About / Biography</h3>

      <div className="space-y-1">
        <label htmlFor="bio" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider block">About the Practitioner</label>
        <textarea
          id="bio"
          name="bio"
          rows={7}
          value={formData.bio}
          onChange={handleChange}
          maxLength={1000}
          placeholder="Tell patients about your professional experience, approach to homeopathic consultation, and areas of clinical interest..."
          className={`w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border text-ink dark:text-white focus:outline-none focus:border-brand resize-none ${
            errors.bio ? "border-red-500" : "border-line-custom dark:border-[#1d2a1a]"
          }`}
        />
        <div className="flex justify-between items-center text-[10px] font-bold text-muted-text uppercase tracking-wider mt-1.5">
          <span>Min. 50 characters, Max. 1000</span>
          <span className={formData.bio.length > 1000 ? "text-red-500" : ""}>{formData.bio.length} / 1000</span>
        </div>
        {errors.bio && <p className="text-[10px] text-red-500 font-bold">{errors.bio}</p>}
      </div>
    </div>
  );

  const renderStep8 = () => {
    const finalQual = formData.qualification === "Other" ? formData.customQualification : formData.qualification;
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="border-b border-line-custom dark:border-[#1d2a1a] pb-3">
          <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider">Step 8 — Review & Confirm details</h3>
          <p className="text-[10px] text-muted-text font-bold uppercase tracking-wider mt-1">Review all your entries before submitting to vetting board</p>
        </div>

        <div className="space-y-5 max-h-[380px] overflow-y-auto pr-2 scrollbar-custom border-b border-line-custom dark:border-[#1d2a1a] pb-6">
          
          {/* Section: Personal Info */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">Personal Information</span>
              <button type="button" onClick={() => setStep(1)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Full Name</span><span className="text-ink dark:text-white font-bold">{formData.fullName}</span></div>
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Phone Number</span><span className="text-ink dark:text-white font-bold">{formData.phone}</span></div>
              <div className="sm:col-span-2"><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Email Address</span><span className="text-ink dark:text-white font-bold">{formData.email}</span></div>
              {doctorImage && (
                <div className="sm:col-span-2 flex items-center gap-2 mt-1">
                  <div className="w-10 h-10 rounded border border-line-custom overflow-hidden bg-white"><img src={doctorImage} className="w-full h-full object-cover" /></div>
                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Profile Photo Uploaded</span>
                </div>
              )}
            </div>
          </div>

          {/* Section: Credentials */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">Qualifications & Credentials</span>
              <button type="button" onClick={() => setStep(2)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Homeopathic Qualification</span><span className="text-ink dark:text-white font-bold">{finalQual}</span></div>
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Years of Experience</span><span className="text-ink dark:text-white font-bold">{formData.experience} Years</span></div>
              <div className="sm:col-span-2"><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Registration Number</span><span className="text-ink dark:text-white font-bold">{formData.registrationNumber}</span></div>
            </div>
          </div>

          {/* Section: Specialties */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">Specialization & Expertise</span>
              <button type="button" onClick={() => setStep(3)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Clinical Specialization</span><span className="text-ink dark:text-white font-bold">{formData.specialty}</span></div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Areas of Expertise</span>
                <span className="text-ink dark:text-white font-bold">
                  {preferredExpertise.length > 0 ? preferredExpertise.join(", ") : "No expertise selected"}
                </span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Languages Spoken</span>
                <span className="text-ink dark:text-white font-bold">
                  {preferredLanguages.length > 0 ? preferredLanguages.join(", ") : "No languages selected"}
                </span>
              </div>
            </div>
          </div>

          {/* Section: Consultation */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">Consultation & Fees</span>
              <button type="button" onClick={() => setStep(4)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Consultation Mode</span>
                <span className="text-ink dark:text-white font-bold uppercase tracking-wide">
                  {formData.consultationType === "both" ? "Online & In-clinic" : formData.consultationType}
                </span>
              </div>
              <div>
                <span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Session Fees</span>
                <span className="text-brand font-black flex items-center gap-0.5 text-sm mt-0.5">
                  ₹ {formData.consultationFees}
                </span>
              </div>
            </div>
          </div>

          {/* Section: Location */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">Clinic Location</span>
              <button type="button" onClick={() => setStep(5)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              {formData.clinicAddress && (
                <div className="sm:col-span-2">
                  <span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Clinic Address</span>
                  <span className="text-ink dark:text-white font-bold">{formData.clinicAddress}</span>
                </div>
              )}
              {formData.locality && <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">Locality / Area</span><span className="text-ink dark:text-white font-bold">{formData.locality}</span></div>}
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">City</span><span className="text-ink dark:text-white font-bold">{formData.city}</span></div>
              <div><span className="text-muted-text block text-[9px] uppercase tracking-wider mb-0.5">State / PIN</span><span className="text-ink dark:text-white font-bold">{formData.state} - {formData.pinCode}</span></div>
              {formData.googleMapsUrl && (
                <div className="sm:col-span-2 flex items-center gap-1 mt-1 text-brand hover:underline cursor-pointer">
                  <ExternalLink className="w-3 h-3" /> <span className="font-bold">View Google Maps Link</span>
                </div>
              )}
            </div>
          </div>

          {/* Section: Availability */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">Availability Schedule</span>
              <button type="button" onClick={() => setStep(6)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <div className="space-y-2 text-xs font-semibold text-body-text dark:text-[#aebba8]">
              {preferredDays.map((day) => {
                const config = hoursConfig[day];
                const hourVal = config?.type === "Custom" ? config.custom : config?.type;
                return (
                  <div key={day} className="flex items-start justify-between py-1 border-b border-line-custom/30 last:border-b-0">
                    <span className="font-bold text-ink dark:text-white uppercase tracking-wider text-[10px]">{day}</span>
                    <span className="font-bold text-muted-text dark:text-[#71806c]">{hourVal}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Bio */}
          <div className="p-4 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-bg-soft/20 space-y-3">
            <div className="flex justify-between items-center border-b border-line-custom/50 dark:border-[#1d2a1a]/50 pb-1.5">
              <span className="text-[11px] font-black text-brand uppercase tracking-wider">About / Biography</span>
              <button type="button" onClick={() => setStep(7)} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-0.5">
                Edit
              </button>
            </div>
            <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
              {formData.bio}
            </p>
          </div>

        </div>

        {/* Consents Section */}
        <div className="space-y-3.5 bg-bg-soft/40 p-4 rounded-2xl border border-line-custom dark:border-[#1d2a1a] animate-in fade-in duration-300">
          <h4 className="text-xs font-extrabold text-ink dark:text-white uppercase tracking-wider">Required Disclosures & Consents</h4>
          <div className="space-y-3">
            <label className="flex items-start gap-2.5 text-xs text-body-text dark:text-[#aebba8] cursor-pointer select-none font-semibold leading-relaxed">
              <input
                type="checkbox"
                checked={consentAccuracy}
                onChange={(e) => setConsentAccuracy(e.target.checked)}
                className="rounded text-brand focus:ring-brand border-line-custom w-4 h-4 cursor-pointer mt-0.5 shrink-0 accent-brand"
              />
              <span>I confirm that the information provided by me is accurate, complete, and legally valid.</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-body-text dark:text-[#aebba8] cursor-pointer select-none font-semibold leading-relaxed">
              <input
                type="checkbox"
                checked={consentDisplay}
                onChange={(e) => setConsentDisplay(e.target.checked)}
                className="rounded text-brand focus:ring-brand border-line-custom w-4 h-4 cursor-pointer mt-0.5 shrink-0 accent-brand"
              />
              <span>I authorize VitaHomeo to display my professional profile information publicly once approved.</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-body-text dark:text-[#aebba8] cursor-pointer select-none font-semibold leading-relaxed">
              <input
                type="checkbox"
                checked={consentVetting}
                onChange={(e) => setConsentVetting(e.target.checked)}
                className="rounded text-brand focus:ring-brand border-line-custom w-4 h-4 cursor-pointer mt-0.5 shrink-0 accent-brand"
              />
              <span>I understand my registration will be reviewed and vetted by the medical board before publishing.</span>
            </label>
          </div>
          {errors.consents && <p className="text-[10px] text-red-500 font-bold">{errors.consents}</p>}
        </div>
      </div>
    );
  };

  // ==========================================
  // 7. COMPONENT MAIN RENDER
  // ==========================================
  if (status === "success") {
    return (
      <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-8 text-center shadow-lg max-w-lg mx-auto animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-ink dark:text-white mb-3">Profile Submitted Successfully</h2>
        <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed mb-8 font-medium">
          Thank you for submitting your professional information to VitaHomeo. Your profile is now under review. We will verify the information before publishing your doctor profile.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-2.5 bg-brand hover:bg-brand-hover text-white font-bold text-xs rounded-full transition-all shadow-sm"
        >
          Return to VitaHomeo
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-lg max-w-2xl mx-auto transition-colors duration-300">
      
      {/* Draft Restore Notification */}
      {draftNotice && (
        <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-xl flex items-center justify-between gap-3 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
            <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">{draftNotice}</span>
          </div>
          <button 
            type="button" 
            onClick={handleClearDraft} 
            className="text-[10px] font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-0.5 shrink-0"
          >
            Clear Draft
          </button>
        </div>
      )}

      {/* Steps Progress Indicator */}
      {renderProgressIndicator()}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Step Page rendering */}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}
        {step === 6 && renderStep6()}
        {step === 7 && renderStep7()}
        {step === 8 && renderStep8()}

        {/* Global Error Banner */}
        {status === "error" && (
          <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl flex items-start gap-3 animate-in fade-in duration-200">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-800 dark:text-red-300 font-semibold leading-relaxed">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Action Controls Footer */}
        <div className="pt-4 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 flex flex-wrap items-center justify-between gap-3">
          
          {/* Back Button */}
          {step > 1 ? (
            <button
              type="button"
              disabled={status === "submitting"}
              onClick={handleBack}
              className="px-5 py-2.5 bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : (
            <div /> // Placeholder to keep alignment
          )}

          {/* Draft, Continue, Submit Controls */}
          <div className="flex items-center gap-3">
            {/* Save Draft */}
            {step < totalSteps && (
              <button
                type="button"
                disabled={status === "submitting"}
                onClick={handleSaveDraft}
                className="px-4 py-2.5 bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] hover:border-brand/40 text-muted-text hover:text-brand font-bold text-xs rounded-xl transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <Save className="w-3.5 h-3.5" /> Save Draft
              </button>
            )}

            {/* Continue or Submit button */}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 bg-brand hover:bg-brand-hover text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                Continue <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "submitting" || !consentAccuracy || !consentDisplay || !consentVetting}
                className="px-8 py-3 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" /> Submit Profile
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </form>
    </div>
  );
}

// Global next/link shim in case Link component is needed
function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
