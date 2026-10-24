"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Activity, Clock, ShieldCheck, Sparkles, MessageCircle, Stethoscope } from "lucide-react";

export interface ConditionCardData {
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  categoryIcon: string;
  symptoms: string[];
  duration: string;
  desc: string;
}

interface TreatmentDirectoryProps {
  conditions: ConditionCardData[];
  categories: { id: string; title: string; icon: string; count: number }[];
}

export function TreatmentDirectory({ conditions, categories }: TreatmentDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredConditions = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return conditions.filter((c) => {
      const matchesCategory = selectedCategory === "all" || c.categoryId === selectedCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const matchesName = c.name.toLowerCase().includes(query);
      const matchesCategoryName = c.category.toLowerCase().includes(query);
      const matchesSymptoms = c.symptoms.some((s) => s.toLowerCase().includes(query));
      const matchesDesc = c.desc.toLowerCase().includes(query);

      return matchesName || matchesCategoryName || matchesSymptoms || matchesDesc;
    });
  }, [conditions, searchQuery, selectedCategory]);

  return (
    <div id="directory" className="space-y-8 scroll-mt-28">
      
      {/* Search Bar & Category Controls Header */}
      <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Clinical Directory</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink dark:text-white tracking-tight">
              Explore Homeopathic Treatments
            </h2>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold mt-1">
              Filter by medical specialty or search by symptom (e.g. &ldquo;skin rash&rdquo;, &ldquo;migraine&rdquo;, &ldquo;PCOS&rdquo;, &ldquo;gas&rdquo;)
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-brand/10 dark:bg-brand/20 text-brand px-3.5 py-1.5 rounded-full text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>36 Verified Clinical Guides</span>
          </div>
        </div>

        {/* Live Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-muted-text dark:text-[#71806c]">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any symptom, condition, or body area (e.g., eczema, joint pain, hair fall, asthma)..."
            className="w-full pl-12 pr-10 py-3.5 bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] rounded-2xl text-sm font-semibold text-ink dark:text-white placeholder:text-muted-text dark:placeholder:text-[#71806c] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-text hover:text-ink dark:hover:text-white transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-brand text-white shadow-sm scale-[1.02]"
                : "bg-bg-soft dark:bg-[#142313] text-body-text dark:text-[#aebba8] hover:bg-brand/10 hover:text-brand border border-line-custom dark:border-[#1d2a1a]"
            }`}
          >
            All Conditions ({conditions.length})
          </button>

          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-brand text-white shadow-sm scale-[1.02]"
                    : "bg-bg-soft dark:bg-[#142313] text-body-text dark:text-[#aebba8] hover:bg-brand/10 hover:text-brand border border-line-custom dark:border-[#1d2a1a]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-black/5 dark:bg-white/10 text-muted-text dark:text-[#71806c]"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Count & Current Filter Info */}
      <div className="flex items-center justify-between text-xs font-bold text-muted-text dark:text-[#71806c] px-2">
        <span>
          Showing <strong className="text-ink dark:text-white">{filteredConditions.length}</strong> conditions
          {searchQuery ? ` matching "${searchQuery}"` : selectedCategory !== "all" ? ` in ${categories.find(c => c.id === selectedCategory)?.title}` : ""}
        </span>
        {(searchQuery || selectedCategory !== "all") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-brand hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Conditions Grid */}
      {filteredConditions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((cond) => (
            <div
              key={cond.slug}
              className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 shadow-sm hover:shadow-md hover:border-brand/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header: Category Badge + Duration */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-1 rounded-full">
                    <span>{cond.categoryIcon}</span>
                    <span>{cond.category}</span>
                  </span>
                  
                  <span className="text-[11px] font-semibold text-muted-text dark:text-[#71806c] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand" />
                    <span>{cond.duration.split(',')[0]}</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-black text-ink dark:text-white group-hover:text-brand transition-colors">
                    {cond.name}
                  </h3>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold mt-1.5 line-clamp-2">
                    {cond.desc}
                  </p>
                </div>

                {/* Common Symptoms preview */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold text-muted-text dark:text-[#71806c] uppercase tracking-wider block">
                    Key Indicators / Symptoms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cond.symptoms.slice(0, 3).map((sym, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-bg-soft dark:bg-[#162315] text-body-text dark:text-[#aebba8] border border-line-custom/60 dark:border-[#1d2a1a] px-2 py-0.5 rounded-lg"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action Links */}
              <div className="pt-5 border-t border-line-custom/60 dark:border-[#1d2a1a] mt-5 flex items-center justify-between gap-2">
                <Link
                  href={`/treatments/${cond.slug}`}
                  className="text-xs font-bold text-brand hover:underline inline-flex items-center gap-1"
                >
                  Clinical Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/917765991145?text=${encodeURIComponent(`Hi VitaHomeo! I would like to consult a doctor regarding treatment for ${cond.name}. Could you please guide me?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-brand/10 hover:bg-brand text-brand hover:text-white dark:bg-brand/20 dark:hover:bg-brand rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1"
                  title="Inquire directly on WhatsApp"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Consult</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white dark:bg-[#101c0f] border border-dashed border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-10 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-ink dark:text-white">
            Condition not listed in our standard library?
          </h3>
          <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
            Homeopathy is individualized constitutional therapy. Our doctors treat thousands of rare, chronic, and unlisted systemic complaints based on your full constitutional case profile.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/917765991145?text=${encodeURIComponent(`Hi VitaHomeo! I am looking for treatment for: "${searchQuery}". Could you please connect me with a doctor?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-xl shadow-sm inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Doctor on WhatsApp
            </a>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2.5 border border-line-custom dark:border-[#1d2a1a] text-body-text dark:text-[#aebba8] hover:text-brand text-xs font-bold rounded-xl"
            >
              View All 36 Conditions
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
