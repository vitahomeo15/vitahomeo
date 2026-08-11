import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Stethoscope, Clock, IndianRupee, Star, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Homeopathic Doctors Online | VitaHomeo",
  description: "Browse verified, experienced homeopathic specialists on VitaHomeo. View qualifications, consultation fees, and schedule a secure online appointment.",
  alternates: {
    canonical: "https://www.vitahomeo.com/doctors",
  },
};

export default function DoctorsPage() {
  const doctors = [
    { 
      id: "dr-arun-kumar",
      name: "Dr. Arun Kumar", 
      degree: "DHMS", 
      experience: "19 Years Experience", 
      location: "Hajipur, Bihar", 
      specialty: "Constitutional Homeopathy & Chronic Care", 
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
          <div className="mb-8">
            <span className="text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3 py-1 rounded-full uppercase tracking-wider">
              Practitioners Directory
            </span>
            <h1 className="text-3xl font-bold text-ink dark:text-white mt-3">Verified Specialists</h1>
            <p className="text-sm text-body-text dark:text-[#aebba8] mt-1">Showing {doctors.length} verified homeopathic {doctors.length === 1 ? "doctor" : "doctors"}</p>
          </div>

          <div className="flex flex-col gap-6">
            {doctors.map((doc) => (
              <div 
                key={doc.id} 
                className="bg-white dark:bg-[#101c0f] rounded-[24px] border border-line-custom dark:border-[#1d2a1a] shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-md hover:border-brand/30 transition-all"
              >
                {/* Profile Picture or Placeholder */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  {doc.image ? (
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-28 h-28 rounded-[20px] object-cover border border-line-custom dark:border-[#1d2a1a]/50 shadow-sm"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-[20px] bg-brand/10 dark:bg-brand/20 border border-brand/20 flex items-center justify-center text-brand text-3xl font-semibold">
                      {doc.name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Doctor Details */}
                <div className="flex-1 flex flex-col sm:flex-row justify-between">
                  <div className="flex-1 border-b sm:border-b-0 sm:border-r border-line-custom dark:border-[#1d2a1a] pb-6 sm:pb-0 sm:pr-6">
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                       {/* Mobile display of image */}
                       {doc.image ? (
                        <img 
                          src={doc.image} 
                          alt={doc.name} 
                          className="w-16 h-16 rounded-full object-cover border border-line-custom dark:border-[#1d2a1a]/50 shadow-sm"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-brand/10 dark:bg-brand/20 border border-brand/20 flex items-center justify-center text-brand text-2xl font-semibold">
                          {doc.name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h2 className="text-xl font-bold text-ink dark:text-white leading-tight mb-1">
                          {doc.name}
                        </h2>
                        <div className="text-xs text-body-text dark:text-[#aebba8] font-bold uppercase tracking-wide">
                          {doc.degree}
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop display of name */}
                    <div className="hidden md:block">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h2 className="text-2xl font-bold text-ink dark:text-white leading-tight">
                          {doc.name}
                        </h2>
                        <span className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5 border border-brand/15">
                          <ShieldCheck className="w-3 h-3" /> Verified
                        </span>
                      </div>
                      <div className="text-xs text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wide">
                        {doc.degree}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                      <div className="flex items-center">
                        <Stethoscope className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span className="text-ink dark:text-white">{doc.specialty}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span>{doc.experience}</span>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span>{doc.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-body-text dark:text-[#aebba8] mt-4 leading-relaxed line-clamp-3 font-medium">
                      {doc.bio}
                    </p>
                  </div>

                  {/* Consultation Details */}
                  <div className="pt-6 sm:pt-0 sm:pl-6 flex flex-col sm:w-[220px]">
                    <div className="bg-bg-soft dark:bg-[#162315] p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] mb-4 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 border-b border-line-custom dark:border-[#1d2a1a] pb-2">
                          <span className="text-xs text-body-text dark:text-[#aebba8] font-bold">Session Fee</span>
                          <div className="flex items-center text-brand font-black">
                            <IndianRupee className="w-3.5 h-3.5" />
                            <span className="text-lg">{doc.fee}</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="text-xs">
                            <span className="text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider text-[9px] mb-0.5">Availability</span>
                            <span className="text-ink dark:text-white font-bold">{doc.days}</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider text-[9px] mb-0.5">Timings</span>
                            <span className="text-ink dark:text-white font-bold">{doc.timing}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-5 pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                        <Link href="/book" className="w-full h-9 rounded-xl bg-brand hover:bg-brand-hover text-white text-[11px] font-bold flex items-center justify-center transition-all shadow-sm">
                          Book Consultation
                        </Link>
                        <Link href="/doctors/dr-arun-kumar" className="w-full h-9 rounded-xl bg-white dark:bg-[#101c0f] text-brand border border-brand/20 dark:border-[#1d2a1a] hover:bg-brand hover:text-white text-[11px] font-bold flex items-center justify-center transition-all shadow-sm">
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
