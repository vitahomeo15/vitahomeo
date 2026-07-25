"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { MapPin, Stethoscope, Clock, IndianRupee } from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    { 
      name: "Dr. Arun Kumar", 
      degree: "DHMS", 
      experience: "19 Years Experience", 
      location: "Hajipur, Bihar", 
      specialty: "Constitutional Homeopathy", 
      bio: "For the past 19 years, I have had the privilege of serving patients through homeopathy. Every consultation has reinforced my belief that true healing begins with understanding the person, not just the symptoms.",
      fee: "499",
      timing: "6:00 PM - 10:00 PM",
      days: "Mon - Sun",
      image: "/Doc photo/dr.arun kr.jpeg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ink dark:text-white">Specialist Doctors</h1>
            <p className="text-sm text-body-text dark:text-[#aebba8] mt-1">Showing {doctors.length} verified homeopathic doctors</p>
          </div>

          <div className="flex flex-col gap-4">
            {doctors.map((doc, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#101c0f] rounded-lg border border-line-custom dark:border-white/5 shadow-sm p-5 md:p-6 flex flex-col md:flex-row gap-6 hover:shadow-md hover:border-brand/30 transition-all"
              >
                {/* Profile Picture or Placeholder */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  {doc.image ? (
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-24 h-24 rounded-full object-cover border border-line-custom dark:border-white/5 shadow-sm"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-brand/10 dark:bg-brand/20 border border-brand/20 flex items-center justify-center text-brand text-3xl font-semibold">
                      {doc.name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Doctor Details */}
                <div className="flex-1 flex flex-col sm:flex-row justify-between">
                  <div className="flex-1 border-b sm:border-b-0 sm:border-r border-line-custom dark:border-white/5 pb-4 sm:pb-0 sm:pr-6">
                    <div className="flex items-center gap-4 mb-3 md:hidden">
                       {/* Mobile display of image */}
                       {doc.image ? (
                        <img 
                          src={doc.image} 
                          alt={doc.name} 
                          className="w-16 h-16 rounded-full object-cover border border-line-custom dark:border-white/5 shadow-sm"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-brand/10 dark:bg-brand/20 border border-brand/20 flex items-center justify-center text-brand text-2xl font-semibold">
                          {doc.name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h2 className="text-[20px] font-bold text-ink dark:text-white leading-tight mb-1">
                          {doc.name}
                        </h2>
                        <div className="text-xs text-body-text dark:text-[#aebba8] font-semibold uppercase tracking-wide">
                          {doc.degree}
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop display of name */}
                    <div className="hidden md:block">
                      <h2 className="text-[22px] font-bold text-ink dark:text-white leading-tight mb-1">
                        {doc.name}
                      </h2>
                      <div className="text-sm text-body-text dark:text-[#aebba8] font-semibold mb-2 uppercase tracking-wide">
                        {doc.degree}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2 md:mt-4 text-sm text-body-text dark:text-[#aebba8]">
                      <div className="flex items-center">
                        <Stethoscope className="w-4 h-4 mr-2 opacity-70" />
                        <span className="font-semibold text-ink dark:text-white">{doc.specialty}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 opacity-70" />
                        <span>{doc.experience}</span>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 opacity-70" />
                        <span>{doc.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-body-text dark:text-[#aebba8] mt-4 leading-relaxed line-clamp-3">
                      {doc.bio}
                    </p>
                  </div>

                  {/* Consultation Details */}
                  <div className="pt-4 sm:pt-0 sm:pl-6 flex flex-col sm:w-[220px]">
                    <div className="bg-bg-soft dark:bg-[#162315] p-4 rounded-md border border-line-custom dark:border-white/5 mb-4 h-full">
                      <div className="flex items-center justify-between mb-3 border-b border-line-custom dark:border-white/5 pb-2">
                        <span className="text-sm text-body-text dark:text-[#aebba8] font-medium">Consultation Fee</span>
                        <div className="flex items-center text-ink dark:text-white font-bold">
                          <IndianRupee className="w-4 h-4" />
                          <span className="text-lg">{doc.fee}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-3">
                        <div className="text-sm">
                          <span className="text-body-text dark:text-[#aebba8] block text-xs mb-1">Available Days</span>
                          <span className="text-ink dark:text-white font-semibold">{doc.days}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-body-text dark:text-[#aebba8] block text-xs mb-1">Timings</span>
                          <span className="text-ink dark:text-white font-semibold">{doc.timing}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-line-custom/50 dark:border-white/5">
                        <Link href="/book" className="w-full h-9 rounded-xl bg-brand hover:bg-brand-dark text-white text-xs font-bold flex items-center justify-center transition-all">
                          Book Consultation
                        </Link>
                        <Link href="/doctors/dr-arun-kumar" className="w-full h-9 rounded-xl bg-bg-soft dark:bg-[#152414] text-brand border border-brand/20 dark:border-brand/10 hover:bg-brand hover:text-white text-xs font-bold flex items-center justify-center transition-all">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

