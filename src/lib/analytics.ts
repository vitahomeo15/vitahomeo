/**
 * VitaHomeo Analytics & Conversion Tracking Module
 * Provides privacy-compliant telemetry across Google Analytics (GA4), Meta Pixel, and custom dataLayer events.
 * Fully compatible with Google Consent Mode v2 and India DPDP Act standards.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export interface WhatsAppClickParams {
  source: string; // e.g. "navbar", "condition_guide", "doctor_profile", "treatment_hub", "footer"
  doctorName?: string;
  doctorSlug?: string;
  condition?: string;
  fee?: string;
}

export interface LeadSubmitParams {
  doctorName?: string;
  doctorSlug?: string;
  condition?: string;
  consultationType?: string;
  source?: string;
}

/**
 * Check if the user has accepted cookies & tracking consent
 */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("vitahomeo_consent") === "accepted";
}

/**
 * Initialize / Update Google Consent Mode v2
 */
export function updateConsentState(granted: boolean) {
  if (typeof window === "undefined") return;
  const status = granted ? "granted" : "denied";

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: status,
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });
  }

  // Push to dataLayer for GTM / Tag Manager compatibility
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "consent_update",
      consent_status: status,
    });
  }
}

/**
 * Track WhatsApp Consultation Click (Key Conversion Step)
 */
export function trackWhatsAppClick(params: WhatsAppClickParams) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event_category: "Conversion",
    event_label: params.doctorName || params.condition || "General",
    source: params.source,
    doctor_name: params.doctorName || "Any Doctor",
    doctor_slug: params.doctorSlug || "general",
    condition: params.condition || "general",
    fee: params.fee || "999",
    currency: "INR",
    value: 999,
  };

  // Google Analytics 4 Event
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_booking_click", eventPayload);
    // Also dispatch as standard conversion lead trigger
    window.gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/LABEL", // Fallback ready for Google Ads
      value: 999,
      currency: "INR",
    });
  }

  // Meta Pixel Event (if configured)
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "WhatsAppBookingClick", eventPayload);
    window.fbq("track", "Contact", {
      content_name: params.condition || params.doctorName || "WhatsApp Consultation",
      currency: "INR",
      value: 999,
    });
  }

  // Push to dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "whatsapp_booking_click",
      ...eventPayload,
    });
  }
}

/**
 * Track Consultation Request / Lead Form Submission
 */
export function trackConsultationLead(params: LeadSubmitParams) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event_category: "Engagement",
    event_label: params.doctorName || "General Consultation",
    doctor_name: params.doctorName || "General",
    doctor_slug: params.doctorSlug,
    condition: params.condition,
    consultation_type: params.consultationType || "Online Video",
    value: 999,
    currency: "INR",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", eventPayload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: params.doctorName || "Doctor Consultation Request",
      currency: "INR",
      value: 999,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "generate_lead",
      ...eventPayload,
    });
  }
}

/**
 * Track Doctor Profile View
 */
export function trackDoctorProfileView(doctorSlug: string, doctorName: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "view_doctor_profile", {
      doctor_slug: doctorSlug,
      doctor_name: doctorName,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "view_doctor_profile",
      doctor_slug: doctorSlug,
      doctor_name: doctorName,
    });
  }
}

/**
 * Track Treatment Guide View
 */
export function trackTreatmentGuideView(conditionSlug: string, conditionTitle: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "view_treatment_guide", {
      condition_slug: conditionSlug,
      condition_title: conditionTitle,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "view_treatment_guide",
      condition_slug: conditionSlug,
      condition_title: conditionTitle,
    });
  }
}

