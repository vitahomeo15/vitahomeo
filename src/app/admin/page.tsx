import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import AdminLoginGate from "./AdminLoginGate";
import { logoutAdmin } from "./adminActions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Stethoscope, CheckCircle, Clock, AlertTriangle, ShieldCheck, Search, LogOut, Eye } from "lucide-react";

export const dynamic = "force-dynamic";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AdminDashboardPage({ searchParams }: SearchParams) {
  // 1. Password Passcode Gate Verification on Server
  const cookieStore = await cookies();
  const token = cookieStore.get("vitahomeo_admin_token")?.value;
  const expectedPasscode = process.env.ADMIN_PASSCODE || "admin123";
  const isAuthorized = token === expectedPasscode;

  if (!isAuthorized) {
    return <AdminLoginGate />;
  }

  // 2. Resolve Filters and Searches
  const resolvedSearchParams = await searchParams;
  const query = (resolvedSearchParams.q as string || "").toLowerCase().trim();
  const filterVerif = resolvedSearchParams.verif as string || "all";
  const filterProfile = resolvedSearchParams.profile as string || "all";

  // 3. Fetch all doctor records from Supabase (Bypassing RLS securely on Server)
  let doctors: any[] = [];
  let fetchError = "";

  try {
    const { data, error } = await supabaseAdmin
      .from("doctors")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }
    doctors = data || [];
  } catch (err: any) {
    console.error("Dashboard database fetch error", err);
    fetchError = err.message || "Unable to read applications database.";
  }

  // 4. Calculate Summary Counters from DB Data
  const countPending = doctors.filter((d) => d.verification_status === "pending").length;
  const countUnderReview = doctors.filter((d) => d.verification_status === "under_review").length;
  const countVerified = doctors.filter((d) => d.verification_status === "verified").length;
  const countRejected = doctors.filter((d) => d.verification_status === "rejected").length;
  const countPublished = doctors.filter((d) => d.profile_status === "published").length;

  // 5. In-Memory Filter execution
  const filteredDoctors = doctors.filter((doc) => {
    // Search fields
    const matchesSearch = !query || 
      (doc.full_name || "").toLowerCase().includes(query) ||
      (doc.registration_number || "").toLowerCase().includes(query) ||
      (doc.city || "").toLowerCase().includes(query) ||
      (doc.email || "").toLowerCase().includes(query);

    // Verification filter
    const matchesVerif = filterVerif === "all" || doc.verification_status === filterVerif;

    // Profile status filter
    const matchesProfile = filterProfile === "all" || doc.profile_status === filterProfile;

    return matchesSearch && matchesVerif && matchesProfile;
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-brand bg-brand/10 dark:bg-brand/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Vetting Portal
              </span>
              <h1 className="text-3xl font-black text-ink dark:text-white mt-3">Admin Verification Dashboard</h1>
              <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mt-1 font-semibold">
                Manage practitioner credentials vetting, registration verification, and profile approvals.
              </p>
            </div>
            
            {/* Logout button */}
            <form action={logoutAdmin}>
              <button 
                type="submit" 
                className="px-4 py-2 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-950/40 text-red-600 dark:text-red-400 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout Admin
              </button>
            </form>
          </div>

          {/* Database Fetch Error */}
          {fetchError && (
            <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-2xl flex items-center gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-500 shrink-0" />
              <p className="text-xs text-red-800 dark:text-red-300 font-bold">{fetchError}. Please verify SUPABASE_SERVICE_ROLE_KEY environment variable.</p>
            </div>
          )}

          {/* Status Summary Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] font-black text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Pending</span>
              <span className="text-2xl font-black text-amber-500 mt-1 block">{countPending}</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] font-black text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Under Review</span>
              <span className="text-2xl font-black text-blue-500 mt-1 block">{countUnderReview}</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] font-black text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Verified</span>
              <span className="text-2xl font-black text-brand mt-1 block">{countVerified}</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] font-black text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Rejected</span>
              <span className="text-2xl font-black text-red-500 mt-1 block">{countRejected}</span>
            </div>
            <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] p-4 rounded-2xl shadow-sm text-center col-span-2 sm:col-span-1">
              <span className="text-[10px] font-black text-muted-text dark:text-[#71806c] uppercase tracking-wider block">Published</span>
              <span className="text-2xl font-black text-[#0ea98b] mt-1 block">{countPublished}</span>
            </div>
          </div>

          {/* Search and Filters Panel */}
          <form method="GET" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-[#101c0f] p-5 rounded-2xl border border-line-custom dark:border-[#1d2a1a] shadow-sm mb-6 items-end">
            <div className="space-y-1 sm:col-span-2">
              <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider block">Search Query</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="q" 
                  defaultValue={query} 
                  placeholder="Name, registration, city, email..." 
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand"
                />
                <Search className="w-4 h-4 text-muted-text absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider block">Verification Status</label>
              <select 
                name="verif" 
                defaultValue={filterVerif} 
                className="w-full px-3 py-2.5 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand cursor-pointer"
              >
                <option value="all">All Verifications</option>
                <option value="pending">Pending</option>
                <option value="under_review">Under Review</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-ink dark:text-white uppercase tracking-wider block">Profile Status</label>
              <select 
                name="profile" 
                defaultValue={filterProfile} 
                className="w-full px-3 py-2.5 rounded-xl bg-bg-soft dark:bg-[#0e1a0d]/50 text-xs md:text-sm font-semibold border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white focus:outline-none focus:border-brand cursor-pointer"
              >
                <option value="all">All States</option>
                <option value="draft">Draft</option>
                <option value="submitted">Submitted</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="published">Published</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="sm:col-span-4 flex justify-end gap-3 mt-2 border-t border-line-custom/30 dark:border-[#1d2a1a]/30 pt-3">
              <Link href="/admin" className="px-4 py-2 bg-bg-soft dark:bg-[#162315] hover:bg-brand/10 border border-line-custom dark:border-[#1d2a1a] text-ink dark:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center">
                Reset Filters
              </Link>
              <button type="submit" className="px-5 py-2 bg-brand text-white font-bold text-xs rounded-xl hover:bg-brand-dark transition-all cursor-pointer shadow-sm">
                Apply Filters
              </button>
            </div>
          </form>

          {/* Doctor Applications List */}
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-line-custom dark:border-[#1d2a1a] flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider">Onboarding Applications ({filteredDoctors.length})</h2>
              <span className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Newest Submissions First</span>
            </div>

            {filteredDoctors.length > 0 ? (
              <div className="divide-y divide-line-custom dark:divide-[#1d2a1a]">
                {filteredDoctors.map((doc) => (
                  <div key={doc.id} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-bg-soft/10 transition-colors">
                    
                    {/* Photo & Name (Col 4) */}
                    <div className="md:col-span-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-bg-soft border border-line-custom/60 flex-shrink-0">
                        {doc.profile_photo_url ? (
                          <img src={doc.profile_photo_url} alt={doc.full_name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm">
                            {doc.full_name.replace("Dr. ", "").substring(0, 1).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="font-extrabold text-ink dark:text-white text-xs md:text-sm block truncate">{doc.full_name}</span>
                        <span className="text-[10px] text-muted-text font-bold uppercase tracking-wider block mt-0.5">{doc.qualification}</span>
                      </div>
                    </div>

                    {/* Registration & City (Col 3) */}
                    <div className="md:col-span-3 text-xs text-body-text dark:text-[#aebba8] font-semibold">
                      <div><span className="text-muted-text text-[9px] uppercase tracking-wider font-bold">Reg No:</span> {doc.registration_number}</div>
                      <div className="mt-1"><span className="text-muted-text text-[9px] uppercase tracking-wider font-bold">City:</span> {doc.city}, {doc.state}</div>
                    </div>

                    {/* Status Badges (Col 3) */}
                    <div className="md:col-span-3 flex flex-wrap gap-2">
                      {/* Verification Status */}
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border ${
                        doc.verification_status === "verified" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                        doc.verification_status === "under_review" ? "bg-blue-50 text-blue-700 border-blue-200" :
                        doc.verification_status === "rejected" ? "bg-red-50 text-red-700 border-red-200" :
                        "bg-amber-50 text-amber-700 border-amber-200"
                      }`}>
                        Verif: {doc.verification_status.replace("_", " ")}
                      </span>

                      {/* Profile Status */}
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border ${
                        doc.profile_status === "published" ? "bg-teal-50 text-teal-700 border-teal-200" :
                        doc.profile_status === "approved" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                        doc.profile_status === "rejected" ? "bg-red-50 text-red-700 border-red-200" :
                        doc.profile_status === "under_review" ? "bg-blue-50 text-blue-700 border-blue-200" :
                        "bg-amber-50 text-amber-700 border-amber-200"
                      }`}>
                        Profile: {doc.profile_status.replace("_", " ")}
                      </span>
                    </div>

                    {/* Actions (Col 2) */}
                    <div className="md:col-span-2 flex justify-end">
                      <Link 
                        href={`/admin/review/${doc.id}`}
                        className="px-3.5 py-1.5 bg-white dark:bg-[#101c0f] border border-brand/20 text-brand font-bold text-xs rounded-xl hover:bg-brand hover:text-white transition-all flex items-center gap-1 shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" /> Review
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 px-6">
                <Stethoscope className="w-10 h-10 text-muted-text/40 mx-auto mb-3" />
                <p className="text-xs text-muted-text font-bold uppercase tracking-wider">No applications matched the current filters.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
