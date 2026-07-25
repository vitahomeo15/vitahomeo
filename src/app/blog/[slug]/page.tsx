import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShareButtons } from "@/components/ShareButtons";
import { blogPosts, BlogPost } from "@/data/blogData";
import { Calendar, Clock, User, ChevronRight, ArrowLeft, CalendarDays, BookOpen, AlertTriangle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .trim();
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Article Not Found - SociVeda",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.sociveda.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.sociveda.com/blog/${post.slug}`,
      siteName: "SociVeda",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: `https://www.sociveda.com${post.featuredImage}`,
          width: 800,
          height: 450,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://www.sociveda.com${post.featuredImage}`],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Find related articles (up to 2, excluding current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  // Auto-generate Table of Contents from H2s
  const h2Sections = post.sections.filter((s) => s.level === 2);

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      
      {/* ============ SEO: JSON-LD Structured Data Schema ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": [
              `https://www.sociveda.com${post.featuredImage}`
            ],
            "datePublished": new Date(post.date).toISOString(),
            "dateModified": new Date(post.date).toISOString(),
            "description": post.excerpt,
            "author": [{
              "@type": "Person",
              "name": post.author.replace(/,.*$/, ""), // Strip qualification for schema author name
              "url": "https://www.sociveda.com/doctors"
            }],
            "publisher": {
              "@type": "Organization",
              "name": "SociVeda",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.sociveda.com/logo-full.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.sociveda.com/blog/${post.slug}`
            }
          })
        }}
      />

      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-xs font-semibold text-muted-text mb-6">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-body-text dark:text-[#aebba8] line-clamp-1">{post.title}</span>
          </div>

          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog Listing
          </Link>

          {/* Article Header */}
          <div className="max-w-3xl mb-8">
            <span className="inline-block text-xs font-extrabold text-brand bg-brand/10 dark:bg-brand/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-ink dark:text-white mt-4 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Byline and metadata */}
            <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-body-text dark:text-[#aebba8] font-medium border-y border-line-custom dark:border-[#1d2a1a] py-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-brand/15 text-brand flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <span>By <strong className="text-ink dark:text-white">{post.author}</strong></span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 opacity-70" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 opacity-70" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured/Hero Image */}
          <div className="w-full aspect-[21/9] max-h-[480px] rounded-3xl overflow-hidden mb-12 border border-line-custom dark:border-[#1d2a1a] shadow-md bg-white dark:bg-[#101c0f]/50 relative">
            <Image
              src={post.featuredImage}
              alt={`Featured hero illustration for ${post.title}`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Article Body Content */}
            <article className="lg:col-span-8 text-body-text dark:text-[#aebba8] text-base leading-relaxed font-medium">
              <div className="space-y-8">
                {post.sections.map((section, idx) => {
                  const headingId = slugify(section.heading);
                  const isDisclaimerSection = idx === post.sections.length - 1;

                  return (
                    <div key={idx} className="space-y-4">
                      {/* Section Headings */}
                      {section.level === 2 ? (
                        <h2 id={headingId} className="text-2xl md:text-3xl font-extrabold text-ink dark:text-white pt-4 border-t border-line-custom/30 dark:border-[#1d2a1a]/30 first:border-0 first:pt-0 scroll-mt-24">
                          {section.heading}
                        </h2>
                      ) : (
                        <h3 id={headingId} className="text-xl font-bold text-ink dark:text-white pt-2 scroll-mt-24">
                          {section.heading}
                        </h3>
                      )}

                      {/* Paragraphs */}
                      {/* Note: Render paragraphs but handle the specific disclaimers beautifully at the end */}
                      {section.paragraphs.map((p, pIdx) => {
                        // Skip the raw disclaimer and CTA strings to render them as formatted components instead
                        if (isDisclaimerSection && pIdx >= 2) return null;
                        
                        return (
                          <p key={pIdx} className="leading-relaxed">
                            {p}
                          </p>
                        );
                      })}

                      {/* Embedded Diagrams */}
                      {section.diagramPath && (
                        <div className="my-8 flex flex-col items-center">
                          <Image
                            src={section.diagramPath}
                            alt={section.diagramAlt || "Supporting diagram"}
                            width={600}
                            height={350}
                            className="w-full h-auto rounded-2xl border border-line-custom dark:border-[#1d2a1a] shadow-sm bg-white dark:bg-[#101c0f]/50 p-4 object-contain"
                          />
                          {section.diagramAlt && (
                            <span className="text-xs text-muted-text mt-2.5 font-bold uppercase tracking-wider text-center">
                              {section.diagramAlt}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Medical Disclaimer Card */}
              <div className="mt-12 p-6 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/50 dark:border-amber-900/30 rounded-2xl flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">Medical Disclaimer</h4>
                  <p className="text-xs md:text-sm text-amber-800/90 dark:text-amber-300/80 leading-relaxed font-semibold">
                    This article is for educational purposes only and is not a substitute for professional medical advice. Please consult a qualified homeopathic doctor before starting any treatment.
                  </p>
                </div>
              </div>

              {/* In-Article CTA Button */}
              <div className="mt-8 p-6 bg-gradient-to-br from-brand/10 to-[#0ea98b]/15 dark:from-[#101c0f] dark:to-[#0e1a0d]/50 border border-brand/20 dark:border-brand/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-base font-extrabold text-ink dark:text-white">Ready for constitutional care?</h4>
                  <p className="text-xs text-body-text dark:text-[#aebba8] mt-1">Book a secure virtual consultation with verified practitioners.</p>
                </div>
                <Link
                  href="/book"
                  className="px-6 py-3 bg-gradient-to-r from-brand to-[#0ea98b] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all whitespace-nowrap"
                >
                  Book a Consultation
                </Link>
              </div>

            </article>

            {/* Right Column: Sidebar Widgets */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Sticky container for scrolling widgets */}
              <div className="sticky top-24 space-y-6">
                
                {/* 1. Table of Contents */}
                {h2Sections.length > 0 && (
                  <div className="bg-bg-soft dark:bg-[#101c0f]/40 border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-5 shadow-sm">
                    <h3 className="text-sm font-extrabold text-ink dark:text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-brand" /> Table of Contents
                    </h3>
                    <ul className="space-y-3 text-xs font-bold text-body-text dark:text-[#aebba8]">
                      {h2Sections.map((sec, sIdx) => {
                        const href = `#${slugify(sec.heading)}`;
                        return (
                          <li key={sIdx}>
                            <a href={href} className="hover:text-brand flex items-start gap-1.5 transition-colors leading-tight">
                              <span className="text-brand/50 mt-0.5">·</span>
                              <span>{sec.heading}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* 2. Book Consultation Card */}
                <div className="bg-gradient-to-br from-brand to-[#0ea98b] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                  <h3 className="text-lg font-black leading-tight mb-2">Consult Top Homeopathic Doctors Online</h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-6 font-semibold">
                    Receive individualized constitutional treatment plans from the comfort of your home. Verified practitioners, secure video sessions, and digital prescriptions.
                  </p>
                  <Link
                    href="/book"
                    className="w-full h-11 bg-white text-brand hover:bg-[#f4f9f3] active:scale-[0.98] transition-all font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CalendarDays className="w-4 h-4" />
                    Book a Consultation
                  </Link>
                </div>

                {/* 3. Did You Know? Box */}
                <div className="bg-bg-soft dark:bg-[#101c0f]/40 border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-5 shadow-sm">
                  <h3 className="text-sm font-extrabold text-[#0ea98b] uppercase tracking-wider mb-2.5">Did You Know?</h3>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                    {post.didYouKnow}
                  </p>
                </div>

                {/* 4. Social Sharing */}
                <div className="bg-bg-soft dark:bg-[#101c0f]/40 border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-5 shadow-sm">
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>

              </div>
            </aside>

          </div>

          {/* Related Articles Section */}
          <div className="mt-20 border-t border-line-custom dark:border-[#1d2a1a] pt-12">
            <h2 className="text-2xl font-extrabold text-ink dark:text-white mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <div key={rPost.id} className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-2xl overflow-hidden hover:border-brand/35 hover:shadow-md transition-all flex flex-col sm:flex-row h-full">
                  {/* Image side */}
                  <div className="w-full sm:w-2/5 aspect-video sm:aspect-auto relative bg-bg-soft min-h-[140px]">
                    <Image
                      src={rPost.featuredImage}
                      alt={`Hero image for ${rPost.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Details side */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-brand bg-brand/10 dark:bg-brand/20 px-2 py-0.5 rounded-full uppercase tracking-wider mb-2.5 inline-block">
                        {rPost.category}
                      </span>
                      <h3 className="text-sm font-extrabold text-ink dark:text-white leading-snug line-clamp-2">
                        {rPost.title}
                      </h3>
                      <p className="text-[11px] text-body-text dark:text-[#aebba8] leading-relaxed mt-2 line-clamp-2 font-medium">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="text-xs font-bold text-brand hover:text-brand-dark flex items-center gap-1 mt-4"
                    >
                      Read Article <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
