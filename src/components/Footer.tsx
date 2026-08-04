"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { SecurityBadgeRow } from "@/components/SecurityBadgeRow";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-[#F7F5EF] dark:bg-bg-soft-2 border-t border-line-custom dark:border-[#1d2a1a] py-12 transition-colors">
      <div className="w-full px-4 md:px-8 lg:px-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-5 md:col-span-1 items-start">
            <Image src="/logo-vitahomeo.png" alt="VitaHomeo" width={150} height={56} className="h-12 w-auto object-contain" />
            <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed max-w-[240px] font-medium">
              Natural healing, trusted care — anytime, anywhere. Connecting patients with verified homeopathic doctors across India.
            </p>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/profile.php?id=61590313869958" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-line-custom dark:border-[#1d2a1a] flex items-center justify-center text-body-text hover:text-brand hover:border-brand transition-all hover:scale-105" aria-label="Facebook">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://x.com/VitaHomeo" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-line-custom dark:border-[#1d2a1a] flex items-center justify-center text-body-text hover:text-brand hover:border-brand transition-all hover:scale-105" aria-label="X (Twitter)">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="https://www.instagram.com/vitahomeo.heal" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-line-custom dark:border-[#1d2a1a] flex items-center justify-center text-body-text hover:text-brand hover:border-brand transition-all hover:scale-105" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/124603936" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-line-custom dark:border-[#1d2a1a] flex items-center justify-center text-body-text hover:text-brand hover:border-brand transition-all hover:scale-105" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>

            {/* Security Badges */}
            <div className="mt-2">
              <SecurityBadgeRow />
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-xs text-ink dark:text-white uppercase tracking-widest">Company</h5>
            <ul className="flex flex-col gap-3 text-xs text-body-text dark:text-[#aebba8] font-medium">
              <li><Link href="/" className="hover:text-brand transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link href="/treatment" className="hover:text-brand transition-colors">Treatment Library</Link></li>
              <li><Link href="/treatment" className="hover:text-brand transition-colors">Homeopathy Guide</Link></li>
              <li><Link href="/doctors" className="hover:text-brand transition-colors">Find Doctors</Link></li>
              <li><Link href="/reviews" className="hover:text-brand transition-colors">Testimonials</Link></li>
              <li><Link href="/reviews" className="hover:text-brand transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-brand transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-xs text-ink dark:text-white uppercase tracking-widest">Legal</h5>
            <ul className="flex flex-col gap-3 text-xs text-body-text dark:text-[#aebba8] font-medium">
              <li><Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-brand transition-colors">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
              <li><Link href="/join" className="hover:text-brand transition-colors">Become a Doctor</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-xs text-ink dark:text-white uppercase tracking-widest">Support & Join</h5>
            <ul className="flex flex-col gap-3 text-xs text-body-text dark:text-[#aebba8] font-medium">
              <li>
                <span className="font-bold text-ink dark:text-white block">Email:</span>
                <a href="mailto:akshraj2255@gmail.com" className="block mt-0.5 hover:text-brand transition-colors">akshraj2255@gmail.com</a>
              </li>
              <li>
                <span className="font-bold text-ink dark:text-white block">Phone:</span>
                <a href="tel:+917765991145" className="block mt-0.5 hover:text-brand transition-colors">+91 77659 91145</a>
              </li>
              <li className="pt-2 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                <p className="text-[10px] text-brand-dark dark:text-brand font-bold leading-normal">
                  Customer Support: Monday–Sunday, 9 AM–9 PM <br/>
                  Average Response Time: &lt;15 minutes
                </p>
              </li>
              <li className="pt-2 flex flex-col gap-2">
                <Link href="/book"
                  className="hover:text-brand transition-colors text-[11px] font-bold">
                  Book Appointment
                </Link>
                <Link href="/join"
                  className="hover:text-brand transition-colors text-[11px] font-bold">
                  Doctor Registration
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line-custom dark:border-[#1d2a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-text dark:text-[#71806c]">
          <span>© {new Date().getFullYear()} VitaHomeo. All rights reserved.</span>
          <span>Made for natural healing, across India.</span>
        </div>

      </div>
    </footer>
  );
}
