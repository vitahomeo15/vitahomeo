import React from "react";
import { ShieldCheck, Lock, CreditCard } from "lucide-react";

export function SecurityBadgeRow() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-muted-text dark:text-[#71806c]">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-custom dark:border-[#1d2a1a] bg-white/40 dark:bg-[#101c0f]/20">
        <Lock className="w-3.5 h-3.5 text-brand" />
        <span className="text-[10px] font-bold tracking-wider uppercase">SSL Secure</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-custom dark:border-[#1d2a1a] bg-white/40 dark:bg-[#101c0f]/20">
        <CreditCard className="w-3.5 h-3.5 text-brand" />
        <span className="text-[10px] font-bold tracking-wider uppercase">PCI Compliant</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-custom dark:border-[#1d2a1a] bg-white/40 dark:bg-[#101c0f]/20">
        <ShieldCheck className="w-3.5 h-3.5 text-brand" />
        <span className="text-[10px] font-bold tracking-wider uppercase">Encrypted</span>
      </div>
    </div>
  );
}
