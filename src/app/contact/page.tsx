"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom">
      <Navbar />

      <main className="flex-1 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">Contact</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mb-4">Get in touch</h1>
            <p className="text-body-text dark:text-[#aebba8] text-base max-w-lg mx-auto">Have a question, feedback, or need support? We&apos;re here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "support@sociveda.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 99887 76655" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India (Remote)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-bg-soft dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">{item.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-muted-text dark:text-[#71806c] uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-ink dark:text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-bg-soft dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <Send className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-xl text-ink dark:text-white">Message sent!</h3>
                  <p className="text-sm text-body-text dark:text-[#aebba8]">Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-white uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-white dark:bg-[#0a120a] text-ink dark:text-white text-sm focus:outline-none focus:border-brand transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-white uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-white dark:bg-[#0a120a] text-ink dark:text-white text-sm focus:outline-none focus:border-brand transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-white uppercase tracking-widest mb-2">Message</label>
                    <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-line-custom dark:border-[#1d2a1a] bg-white dark:bg-[#0a120a] text-ink dark:text-white text-sm focus:outline-none focus:border-brand transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full h-12 bg-brand hover:bg-[#328a2a] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
