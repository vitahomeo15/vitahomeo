"use client";

import React, { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner after 2 seconds if consent is not yet set
    const consent = localStorage.getItem("vitahomeo_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vitahomeo_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("vitahomeo_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-5 shadow-2xl z-50 animate-in slide-in-from-bottom duration-300"
      role="status"
      aria-live="polite"
    >
      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
          <Shield className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs md:text-sm font-bold text-ink dark:text-white mb-1">Privacy & Cookie Consent</h4>
          <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed mb-4">
            We use cookies and secure data practices to personalize your consultation bookings and safeguard your health records. By clicking Accept, you agree to our privacy policies.
          </p>
          <div className="flex gap-3 justify-end">
            <button 
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg border border-line-custom dark:border-[#1d2a1a] text-xs font-semibold text-body-text dark:text-[#aebba8] hover:bg-bg-soft dark:hover:bg-[#152414] transition-colors"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-brand text-white text-xs font-bold hover:brightness-105 transition-all shadow-sm"
            >
              Accept
            </button>
          </div>
        </div>
        <button 
          onClick={() => setVisible(false)} 
          className="text-muted-text dark:text-[#71806c] hover:text-ink dark:hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
