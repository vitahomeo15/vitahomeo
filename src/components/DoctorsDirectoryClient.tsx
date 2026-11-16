"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Stethoscope, 
  Clock, 
  IndianRupee, 
  ShieldCheck, 
  MessageCircle, 
  Search, 
  Video, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  FileText
} from "lucide-react";
import { Doctor } from "@/data/doctorsData";
import { allLocationsList, LocationInfo } from "@/data/locationsData";
import { trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP_NUMBER = "917765991145";

interface DoctorsDirectoryClientProps {
  initialDoctors: Doctor[];
}

export default function DoctorsDirectoryClient({ initialDoctors }: DoctorsDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  // Filtered doctors list
  const filteredDoctors = useMemo(() => {
    return initialDoctors.filter((doc) => {
      const query = searchQuery.toLowerCase().trim();
      
      const matchesSearch =
        !query ||
        doc.name.toLowerCase().includes(query) ||
        doc.specialty.toLowerCase().includes(query) ||
        (doc.degree && doc.degree.toLowerCase().includes(query)) ||
        (doc.location && doc.location.toLowerCase().includes(query)) ||
        (doc.expertise && doc.expertise.some((e) => e.toLowerCase().includes(query)));

      const matchesLocation =
        selectedLocation === "all" ||
        (doc.city && doc.city.toLowerCase().includes(selectedLocation.toLowerCase())) ||
        (doc.state && doc.state.toLowerCase().includes(selectedLocation.toLowerCase())) ||
        (doc.location && doc.location.toLowerCase().includes(selectedLocation.toLowerCase()));

      return matchesSearch && matchesLocation;
    });
  }, [initialDoctors, searchQuery, selectedLocation]);

  return (
    <div className="space-y-10">
      
      {/* Header Info */}
      <div className="mb-2">
        <span className="text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          Practitioners Directory
        </span>
        <h1 className="text-3xl md:text-4.5xl font-black text-ink dark:text-white mt-3 font-display">
          Verified Homeopathic Specialists
        </h1>
        <p className="text-sm md:text-base text-body-text dark:text-[#aebba8] mt-1.5 leading-relaxed font-medium">
          Consult state council registered homeopathic physicians online. In-depth constitutional video consultations (₹999) and authorized digital prescriptions on WhatsApp across all Indian states and capitals.
        </p>
      </div>

      {/* Interactive Search & Location Filter Bar */}
      <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-4 md:p-5 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
          
          {/* Text Search */}
          <div className="md:col-span-7 relative">
            <Search className="w-4 h-4 text-muted-text dark:text-[#71806c] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name, specialty, condition (e.g. PCOS, Eczema)..."
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-bg-soft dark:bg-[#162315] border border-line-custom dark:border-[#1d2a1a] text-xs font-semibold text-ink dark:text-white placeholder:text-muted-text dark:placeholder:text-[#71806c] focus:outline-none focus:border-brand transition-colors"
            />
          </div>

          {/* Location Selector (Alphabetical list of States & Capitals) */}
          <div className="md:col-span-5 relative">
            <MapPin className="w-4 h-4 text-brand absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full h-11 pl-10 pr-8 rounded-xl bg-bg-soft dark:bg-[#162315] border border-line-custom dark:border-[#1d2a1a] text-xs font-semibold text-ink dark:text-white focus:outline-none focus:border-brand transition-colors cursor-pointer appearance-none"
            >
              <option value="all">All States &amp; Capitals (Pan-India Telemedicine)</option>
              {allLocationsList.map((loc) => (
                <option key={loc.slug} value={loc.state}>
                  {loc.displayName}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-muted-text">
              ▼
            </div>
          </div>

        </div>

        {/* Major States & Metros Quick Pills */}
        <div className="pt-2 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[11px] font-bold text-muted-text dark:text-[#71806c] shrink-0">Popular Regions:</span>
          {[
            { label: "All India", val: "all" },
            { label: "Delhi NCR", val: "Delhi" },
            { label: "Maharashtra (Mumbai / Pune)", val: "Maharashtra" },
            { label: "Karnataka (Bengaluru)", val: "Karnataka" },
            { label: "Telangana (Hyderabad)", val: "Telangana" },
            { label: "West Bengal (Kolkata)", val: "West Bengal" },
            { label: "Tamil Nadu (Chennai)", val: "Tamil Nadu" },
            { label: "Bihar (Patna)", val: "Bihar" },
            { label: "Andhra Pradesh (Vijayawada)", val: "Andhra Pradesh" },
            { label: "Rajasthan (Jaipur)", val: "Rajasthan" },
            { label: "Uttar Pradesh (Lucknow)", val: "Uttar Pradesh" },
          ].map((pill) => (
            <button
              key={pill.val}
              type="button"
              onClick={() => setSelectedLocation(pill.val)}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                selectedLocation === pill.val
                  ? "bg-brand text-white shadow-sm"
                  : "bg-bg-soft dark:bg-[#162315] text-body-text dark:text-[#aebba8] hover:text-brand"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

      </div>

      {/* Online Telemedicine Care Banner */}
      <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-ink dark:text-white block">
              100% Online Telemedicine Care Across India
            </span>
            <span className="text-body-text dark:text-[#aebba8] text-[11px] font-medium">
              Private 30–40 min video consultations &amp; official digital prescriptions on WhatsApp.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] shrink-0 self-end sm:self-center">
          Fee: ₹999 Standard
        </span>
      </div>

      {/* Doctor Cards List */}
      {filteredDoctors.length > 0 ? (
        <div className="flex flex-col gap-6">
          {filteredDoctors.map((doc) => {
            const whatsappMsg = encodeURIComponent(
              `Hi VitaHomeo! I'd like to book an online video consultation with ${doc.name} (Fee: ₹999). Could you please help me with available slots?`
            );

            return (
              <div
                key={doc.slug}
                className="bg-white dark:bg-[#101c0f] rounded-[26px] border border-line-custom dark:border-[#1d2a1a] shadow-sm p-6 md:p-8 grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-6 hover:shadow-md hover:border-brand/40 transition-all relative overflow-hidden"
              >
                {/* Profile Picture */}
                <div className="col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-span-2 flex flex-col items-center flex-shrink-0 justify-start">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-[22px] overflow-hidden border border-line-custom dark:border-[#1d2a1a] shadow-sm bg-bg-soft">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Header (Name, Degree, Registration, Verified status) */}
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex flex-col justify-center md:justify-start md:border-r md:border-line-custom md:dark:border-[#1d2a1a] md:pr-6">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white leading-tight">
                      {doc.name}
                    </h2>
                    {doc.verification_status === "verified" ? (
                      <span className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5 border border-brand/15">
                        <ShieldCheck className="w-3 h-3" /> Verified Practitioner
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5 border border-amber-500/20">
                        <Clock className="w-3 h-3" /> Verification Pending
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wide">
                    {doc.degree}
                  </div>
                  {doc.registration_number && (
                    <div className="text-[11px] text-body-text/80 dark:text-[#8ea088] font-semibold mt-1">
                      Reg. No: <span className="font-bold text-ink dark:text-white">{doc.registration_number}</span>
                      {doc.registration_authority ? ` • ${doc.registration_authority}` : ""}
                    </div>
                  )}
                </div>

                {/* Details (Specialty, Exp, Loc, Bio) */}
                <div className="col-span-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 border-b md:border-b-0 md:border-r border-line-custom dark:border-[#1d2a1a] pb-6 md:pb-0 md:pr-6">
                  <div className="flex flex-col gap-2 mt-4 text-xs font-semibold text-body-text dark:text-[#aebba8]">
                    <div className="flex items-center">
                      <Stethoscope className="w-4 h-4 mr-2 text-brand shrink-0" />
                      <span className="text-ink dark:text-white">{doc.specialty}</span>
                    </div>
                    {doc.experience && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-brand shrink-0" />
                        <span>{doc.experience}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-brand shrink-0" />
                      <span>{doc.location} (Available via Online Video Pan-India)</span>
                    </div>
                  </div>

                  <p className="text-xs text-body-text dark:text-[#aebba8] mt-3 line-clamp-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Expertise Tags */}
                  {doc.expertise && doc.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {doc.expertise.slice(0, 4).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-bg-soft dark:bg-[#162315] text-ink dark:text-white px-2 py-0.5 rounded-md font-semibold border border-line-custom/60 dark:border-[#1d2a1a]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Action Column */}
                <div className="col-span-2 md:col-span-1 md:row-span-2 flex flex-col justify-between pt-4 md:pt-0 min-w-[190px]">
                  <div>
                    <div className="flex items-center justify-between md:flex-col md:items-start gap-1 mb-3">
                      <span className="text-[10px] text-muted-text dark:text-[#71806c] font-bold uppercase tracking-wider">
                        Consultation Fee
                      </span>
                      <div className="flex items-center text-brand font-black text-2xl tracking-tight">
                        <IndianRupee className="w-5 h-5 mr-0.5" />
                        <span>{doc.fee || "999"}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-muted-text dark:text-[#71806c] font-semibold border-t border-line-custom/40 dark:border-[#1d2a1a]/40 pt-2.5">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>30–40 Min Video Consult</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Official Digital Prescription</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-5 pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick({ source: "doctors_directory", doctorName: doc.name, doctorSlug: doc.slug, fee: doc.fee || "999" })}
                      className="w-full h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book on WhatsApp
                    </a>
                    <Link
                      href={`/doctors/${doc.slug}`}
                      className="w-full h-9 rounded-xl bg-white dark:bg-[#101c0f] text-brand border border-brand/20 dark:border-[#1d2a1a] hover:bg-brand hover:text-white text-xs font-bold flex items-center justify-center transition-all shadow-sm"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[24px] p-12 text-center shadow-sm max-w-lg mx-auto">
          <Stethoscope className="w-12 h-12 text-brand/40 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-ink dark:text-white mb-2">No Specialists Found</h2>
          <p className="text-xs text-body-text dark:text-[#aebba8] mb-6">
            No doctors matched your current filter. Clear your filters or explore our pan-India online specialists.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedLocation("all");
            }}
            className="px-6 py-2.5 rounded-xl bg-brand text-white text-xs font-bold shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* ========================================================
          ALPHABETICAL STATES & CAPITALS DIRECTORY HUB
          ======================================================== */}
      <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-6 mt-16">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line-custom/60 dark:border-[#1d2a1a] pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-brand text-[10px] font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Pan-India Telemedicine Directory</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-ink dark:text-white tracking-tight mt-0.5">
              Consult Homeopathic Doctors by State &amp; Capital
            </h2>
          </div>
          <p className="text-xs text-body-text dark:text-[#aebba8] font-medium max-w-sm sm:text-right">
            Dedicated online video consultation guides across all major Indian states and their capitals.
          </p>
        </div>

        {/* Alphabetical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {allLocationsList.map((loc) => (
            <Link
              key={loc.slug}
              href={`/doctor/${loc.slug}`}
              className="group p-3.5 rounded-xl bg-bg-soft/70 dark:bg-[#162315]/70 border border-line-custom/60 dark:border-[#1d2a1a] hover:border-brand/50 hover:bg-white dark:hover:bg-[#101c0f] transition-all flex items-center justify-between shadow-xs"
            >
              <div>
                <span className="text-xs font-bold text-ink dark:text-white group-hover:text-brand transition-colors block">
                  {loc.state}
                </span>
                <span className="text-[10px] text-muted-text dark:text-[#71806c] font-semibold">
                  {loc.capital} · Video Consult
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted-text group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}
