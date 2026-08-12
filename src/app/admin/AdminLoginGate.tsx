"use client";

import React, { useState } from "react";
import { verifyAdminPasscode } from "./adminActions";
import { Lock, Loader2, AlertCircle } from "lucide-react";

export default function AdminLoginGate() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await verifyAdminPasscode(passcode);
      if (res.success) {
        // Reload page to re-trigger server authentication verification checks
        window.location.reload();
      } else {
        setError(res.error || "Authentication failed.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-custom px-4">
      <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-8 shadow-xl w-full max-w-md text-center transition-all animate-in fade-in duration-300">
        
        <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-5">
          <Lock className="w-6 h-6" />
        </div>

        <h1 className="text-xl md:text-2xl font-black text-ink dark:text-white mb-2">
          Admin Dashboard Gate
        </h1>
        <p className="text-xs text-muted-text font-bold uppercase tracking-wider mb-6 leading-relaxed">
          VitaHomeo Portal • Restricted Section
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 text-left">
            <label htmlFor="passcode" className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider block">
              Enter Admin Passcode
            </label>
            <input
              type="password"
              id="passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl flex items-center gap-2 text-left animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-500 shrink-0" />
              <span className="text-[11px] text-red-800 dark:text-red-300 font-bold">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !passcode.trim()}
            className="w-full h-11 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-xs rounded-xl shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Unlocking Portal...
              </>
            ) : (
              "Access Dashboard"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
