"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { Clock, User, ArrowRight, BookOpen, Search } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Family & Wellness", "Homeopathy", "Immunity"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.sections.some((sec) =>
        sec.paragraphs.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Knowledge Base</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-ink dark:text-white font-display">
              VitaHomeo Wellness Blog
            </h1>
            <p className="text-base text-body-text dark:text-[#aebba8] leading-relaxed">
              Explore health insights, lifestyle guidance, and homeopathic wisdom curated by our practitioners to nurture your mind, body, and spirit.
            </p>
          </div>

          {/* Search & Category Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 pb-6 border-b border-[#e6ece6] dark:border-[#1c271c]">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm font-semibold rounded-button transition-all duration-200 cursor-pointer shadow-sm ${
                    selectedCategory === category
                      ? "bg-brand text-white hover:bg-brand-hover shadow-button-premium"
                      : "bg-white dark:bg-[#141e14] text-body-text dark:text-[#aebba8] border border-[#e6ece6] dark:border-[#1c271c] hover:border-brand/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 text-sm rounded-input bg-white dark:bg-[#141e14] border border-[#e6ece6] dark:border-[#1c271c] text-ink dark:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand font-medium shadow-sm"
              />
              <Search className="absolute left-3.5 top-3 h-4.5 w-4.5 text-body-text dark:text-[#aebba8] opacity-60" />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-[#141e14] rounded-card border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium overflow-hidden hover:shadow-floating-premium hover:border-brand/35 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Card Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-bg-soft">
                    <Image
                      src={post.featuredImage}
                      alt={`Featured image for ${post.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category and Read time */}
                      <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold">
                        <span className="px-2.5 py-1 rounded-full bg-bg-soft dark:bg-brand/20 text-brand border border-line-custom/30">
                          {post.category}
                        </span>
                        <span className="text-body-text dark:text-[#aebba8] opacity-80 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-ink dark:text-white leading-snug mb-3 hover:text-brand transition-colors font-display">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed mb-6 line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Metadata & Read Button */}
                    <div className="border-t border-[#e6ece6] dark:border-[#1c271c] pt-4 mt-auto flex items-center justify-between text-xs text-body-text dark:text-[#aebba8] font-semibold">
                      <div className="flex items-center">
                        <User className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                        <span>{post.author.replace(/,.*$/, "")}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-brand hover:text-brand-hover text-xs font-bold flex items-center gap-1 group cursor-pointer"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-[#141e14] rounded-card border border-[#e6ece6] dark:border-[#1c271c] shadow-card-premium">
              <BookOpen className="w-14 h-14 text-body-text dark:text-[#aebba8] opacity-40 mx-auto mb-4" />
              <p className="text-base text-body-text dark:text-[#aebba8] font-bold font-display">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-brand font-bold text-sm hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
