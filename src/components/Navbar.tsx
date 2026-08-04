"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { Calendar, Stethoscope } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Treatment", href: "/treatment" },
    { label: "Doctors", href: "/doctors" },
    { label: "Testimonials", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];


  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0a120a]/95 border-b border-[#e3eae0]/50 dark:border-[#1d2a1a]/50 transition-all duration-300">
        <div className="w-full px-4 md:px-6 py-2.5 flex items-center justify-between gap-4">
          
          {/* Logo Aligned to Left */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity select-none">
            <Image
              src="/logo-vitahomeo.png"
              alt="VitaHomeo Logo"
              width={120}
              height={36}
              className="h-7.5 w-auto object-contain dark:brightness-110"
              priority
            />
          </Link>
          
          {/* Animated Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative font-semibold text-sm transition-colors py-1 ${
                    isActive
                      ? "text-brand"
                      : "text-body-text dark:text-[#aebba8] hover:text-brand"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand rounded-full animate-in fade-in zoom-in-75 duration-350" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            


            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[#e3eae0] dark:border-[#1d2a1a] flex items-center justify-center text-body-text dark:text-[#aebba8] hover:text-brand hover:border-brand transition-all hover:scale-105"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z"/>
                </svg>
              )}
            </button>

            {/* Join as Doctor button */}
            <Link
              href="/join"
              className="hidden lg:inline-flex items-center justify-center h-10 px-4 rounded-button text-sm font-semibold border border-brand text-brand-dark dark:text-white dark:border-white/30 hover:bg-bg-soft transition-all gap-1.5"
            >
              <Stethoscope className="w-4.5 h-4.5" />
              Join as Doctor
            </Link>

            {/* Book consultation button */}
            <Link
              href="/book"
              className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-button text-sm font-semibold text-white bg-brand hover:bg-brand-hover shadow-button-premium active:scale-[0.98] transition-all gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              Book consultation
            </Link>

            {/* Mobile Menu trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#e3eae0] dark:border-[#1d2a1a] text-body-text dark:text-[#aebba8] hover:border-brand transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h18M4 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-[#0a120a] p-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-6">
              <span className="brand"><Image src="/logo-vitahomeo.png" alt="VitaHomeo Logo" width={110} height={40} className="object-contain" /></span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full border border-[#e3eae0] dark:border-[#1d2a1a] flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-[#e3eae0] dark:border-[#1d2a1a] font-semibold text-ink dark:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/join"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center h-11 rounded-button font-bold border border-brand text-brand-dark dark:text-white dark:border-white/30 hover:bg-bg-soft transition-all gap-1.5"
              >
                <Stethoscope className="w-4.5 h-4.5" />
                Join as Doctor
              </Link>
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center h-11 rounded-button font-semibold text-white bg-brand hover:bg-brand-hover shadow-button-premium gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                Book consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
