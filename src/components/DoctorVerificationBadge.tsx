import React from "react";
import { Check } from "lucide-react";

interface DoctorVerificationBadgeProps {
  type?: "profile" | "qualification" | "registration" | "experience";
  className?: string;
}

export function DoctorVerificationBadge({ type = "profile", className = "" }: DoctorVerificationBadgeProps) {
  const getBadgeDetails = () => {
    switch (type) {
      case "qualification":
        return { text: "Qualification Verified", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25" };
      case "registration":
        return { text: "Registration Verified", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25" };
      case "experience":
        return { text: "Experience Verified", color: "bg-brand/10 text-brand-dark dark:text-brand border-brand/25" };
      case "profile":
      default:
        return { text: "Verified Profile", color: "bg-brand/10 text-brand dark:text-brand border-brand/30" };
    }
  };

  const { text, color } = getBadgeDetails();

  return (
    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-wide select-none ${color} ${className}`}>
      <span className="w-3.5 h-3.5 rounded-full bg-current flex items-center justify-center shrink-0">
        <Check className="w-2.5 h-2.5 text-white dark:text-[#0a120a]" strokeWidth={3} />
      </span>
      <span>{text}</span>
    </div>
  );
}
