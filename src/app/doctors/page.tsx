import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Stethoscope, Clock, IndianRupee, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { groupAvailability } from "@/lib/availability";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Find Homeopathic Doctors Online | VitaHomeo",
  description: "Browse verified, experienced homeopathic specialists on VitaHomeo. View qualifications, consultation fees, and request a secure online consultation.",
  alternates: {
    canonical: "https://www.vitahomeo.com/doctors",
  },
};

export default async function DoctorsPage() {
  let dbDoctors: any[] = [];
  try {
    const { data } = await supabase
      .from("public_doctor_profiles")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) {
      dbDoctors = data;
    }
  } catch (e) {
    console.error("Failed to query verified doctors from Supabase:", e);
  }

  // Temporary mock fallback for local preview and layout testing when DB is empty
  if (dbDoctors.length === 0) {
    dbDoctors = [{
      id: "mock-1",
      slug: "dr-arun-kumar",
      full_name: "Dr. Arun Kumar",
      qualification: "DHMS (BIHAR MEDICAL COUNCIL)",
      experience: 19,
      city: "Hajipur",
      state: "Bihar",
      specialty: "Homeopathic Specialist",
      bio: "Dr. Arun Kumar is an experienced homeopathic practitioner with 19 years of professional experience in providing individualized homeopathic care.",
      consultation_fees: 499,
      preferred_hours: "Monday: 6:00 PM - 10:00 PM; Tuesday: 6:00 PM - 10:00 PM; Wednesday: 6:00 PM - 10:00 PM; Thursday: 6:00 PM - 10:00 PM; Friday: 6:00 PM - 10:00 PM; Saturday: 6:00 PM - 10:00 PM; Sunday: 6:00 PM - 10:00 PM",
      preferred_days: "Mon - Sun",
      profile_photo_url: "/Doc photo/dr.arun kr.jpeg"
    }];
  }

  // Map database entries to match layout shape, grouping availability timings
  const normalizedDbDoctors = dbDoctors.map((doc) => {
    const grouped = groupAvailability(doc.preferred_hours, doc.preferred_days);
    const daysStr = grouped.map((g) => g.days).join(", ");
    const timingStr = grouped.map((g) => g.hours).join(" | ");

    return {
      id: doc.id,
      slug: doc.slug,
      name: doc.full_name,
      degree: doc.qualification,
      experience: `${doc.experience} Years Experience`,
      location: doc.city && doc.state ? `${doc.city}, ${doc.state}` : "India",
      specialty: doc.specialty || "Homeopathic Specialist",
      bio: doc.bio || "No biography details provided.",
      fee: doc.consultation_fees ? doc.consultation_fees.toString() : "0",
      timing: timingStr,
      days: daysStr,
      image: doc.slug === "dr-arun-kumar" ? "/Doc photo/dr.arun kr.jpeg" : (doc.profile_photo_url || "/placeholder-doctor.png")
    };
  });

  const doctors = [...normalizedDbDoctors];

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

          {doctors.length > 0 ? (
            <div className="flex flex-col gap-6">
              {doctors.map((doc) => (
                <div 
                  key={doc.slug} 
                  className="bg-white dark:bg-[#101c0f] rounded-[24px] border border-line-custom dark:border-[#1d2a1a] shadow-sm p-6 md:p-8 grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-6 hover:shadow-md hover:border-brand/30 transition-all"
                >
                  {/* Profile Picture */}
                  <div className="col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-span-2 flex flex-col items-center flex-shrink-0 justify-start">
                    {doc.image ? (
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-16 h-16 md:w-28 md:h-28 rounded-full md:rounded-[20px] object-cover border border-line-custom dark:border-[#1d2a1a]/50 shadow-sm"
                      />
                    ) : (
                      <div className="w-16 h-16 md:w-28 md:h-28 rounded-full md:rounded-[20px] bg-brand/10 dark:bg-brand/20 border border-brand/20 flex items-center justify-center text-brand text-2xl md:text-3xl font-semibold">
                        {doc.name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Header (Name, Degree, Verified) */}
                  <div className="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex flex-col justify-center md:justify-start md:border-r md:border-line-custom md:dark:border-[#1d2a1a] md:pr-6">
                    <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                      <h2 className="text-xl md:text-2xl font-bold text-ink dark:text-white leading-tight">
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

                  {/* Details (Specialty, Exp, Loc, Bio) */}
                  <div className="col-span-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 border-b md:border-b-0 md:border-r border-line-custom dark:border-[#1d2a1a] pb-6 md:pb-0 md:pr-6">
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
                  <div className="col-span-2 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-1 md:row-span-2 pt-6 md:pt-0 md:pl-6 flex flex-col md:w-[220px]">
                    <div className="bg-bg-soft dark:bg-[#162315] p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] h-full flex flex-col justify-between">
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
                            <span className="text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider text-[9px] mb-0.5">Available Days</span>
                            <span className="text-ink dark:text-white font-bold">{doc.days}</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-text dark:text-[#71806c] block font-bold uppercase tracking-wider text-[9px] mb-0.5">Consultation Hours</span>
                            <span className="text-ink dark:text-white font-bold">{doc.timing}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-5 pt-3 border-t border-line-custom/50 dark:border-[#1d2a1a]/50">
                        <Link href="/book" className="w-full h-9 rounded-xl bg-brand hover:bg-brand-hover text-white text-[11px] font-bold flex items-center justify-center transition-all shadow-sm">
                          Book Appointment
                        </Link>
                        <Link href={`/doctors/${doc.slug}`} className="w-full h-9 rounded-xl bg-white dark:bg-[#101c0f] text-brand border border-brand/20 dark:border-[#1d2a1a] hover:bg-brand hover:text-white text-[11px] font-bold flex items-center justify-center transition-all shadow-sm">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#101c0f] border border-[#e3eae0] dark:border-[#1d2a1a] rounded-[24px] p-12 text-center shadow-sm max-w-lg mx-auto">
              <Stethoscope className="w-12 h-12 text-brand/40 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-ink dark:text-white mb-2">Doctors Coming Soon...</h2>
              <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                We are currently vetting new homeopathic practitioners. Please check back shortly for verified listings.
              </p>
              <div className="mt-6">
                <Link href="/join" className="inline-flex items-center justify-center px-6 py-2.5 bg-brand hover:bg-brand-hover text-white font-bold text-xs rounded-full transition-all shadow-sm">
                  Are you a Doctor? Apply Here
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
