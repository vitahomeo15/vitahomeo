import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Activity, BookOpen, Clock, Heart } from "lucide-react";

interface ConditionInfo {
  name: string;
  slug: string;
  desc: string;
}

interface CategoryInfo {
  title: string;
  desc: string;
  conditions: ConditionInfo[];
}

const categoriesData: Record<string, CategoryInfo> = {
  "chronic-diseases": {
    title: "Chronic Diseases",
    desc: "Long-term metabolic, systemic, and chronic inflammatory health support managed via constitutional homeopathy.",
    conditions: [
      { name: "Diabetes Support", slug: "diabetes-support", desc: "Supportive constitutional care targeting metabolic rates and blood sugar regulation." },
      { name: "Hypertension", slug: "hypertension", desc: "Vascular resistance management and cardiovascular health balance." },
      { name: "Arthritis Care", slug: "arthritis", desc: "Long-term inflammatory joint disease and pain threshold support." }
    ]
  },
  "child-health": {
    title: "Child Health",
    desc: "Gentle, micro-diluted homeopathic care to safely assist children's development and natural defenses.",
    conditions: [
      { name: "Recurrent Infections", slug: "recurrent-infections", desc: "Building core resilience against frequent colds, fevers, and seasonal bugs." },
      { name: "Behavioral Concerns", slug: "behavioural-concerns", desc: "Gentle behavioral and emotional guidance matching childhood temperaments." },
      { name: "Growth & Development", slug: "growth-development", desc: "Supporting vital growth stages, appetite, and metabolic indicators." },
      { name: "Child Allergies", slug: "child-allergies", desc: "Desensitizing pediatric immune systems to environmental triggers." }
    ]
  },
  "mental-wellness": {
    title: "Mental Wellness",
    desc: "Addressing the critical mind-body connection to restore neurological resilience and emotional equilibrium.",
    conditions: [
      { name: "Anxiety", slug: "anxiety", desc: "Calming nervous system hyper-arousal and chronic stress cycles." },
      { name: "Depression", slug: "depression", desc: "Supportive emotional remedies to stimulate natural vigor and mood balance." },
      { name: "Stress & Burnout", slug: "stress-burnout", desc: "Rebuilding adrenal reserves and restoring cognitive stamina." },
      { name: "Sleep Disorders", slug: "sleep-disorders", desc: "Regulating circadian rhythms and addressing insomnia triggers." }
    ]
  },
  "skin-care": {
    title: "Skin Care",
    desc: "Treating dermatological concerns from within to address immune triggers that topical creams cannot reach.",
    conditions: [
      { name: "Eczema", slug: "eczema", desc: "Deep barrier restoration and systemic inflammatory relief." },
      { name: "Psoriasis", slug: "psoriasis", desc: "Modulating autoimmune cellular over-activity for skin relief." },
      { name: "Acne", slug: "acne", desc: "Addressing metabolic toxins, gut health, and hormonal skin flares." },
      { name: "Vitiligo", slug: "vitiligo", desc: "Supportive immune balancing targeting melanocyte protection." },
      { name: "Urticaria", slug: "urticaria", desc: "Alleviating chronic hives and hyper-histaminic reactions." }
    ]
  },
  "respiratory": {
    title: "Respiratory Care",
    desc: "Clearing airway passageways, soothing mucous membranes, and building trigger tolerance.",
    conditions: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis", desc: "Mitigating chronic sneezing, dust allergies, and sinus flares." },
      { name: "Asthma", slug: "asthma", desc: "Soothing bronchial spasms and restoring healthy respiratory volume." },
      { name: "Sinusitis", slug: "sinusitis", desc: "Draining chronic sinus congestion and alleviating frontal headaches." },
      { name: "Food Allergies", slug: "food-allergies", desc: "Improving gut barrier integrity and desensitizing allergen triggers." }
    ]
  },
  "hair": {
    title: "Hair & Scalp",
    desc: "Targeting follicle nutrition, hormone balance, and systemic triggers for hair restoration.",
    conditions: [
      { name: "Hair Fall", slug: "hair-fall", desc: "Reducing shedding by targeting physical deficiencies and stress triggers." },
      { name: "Alopecia", slug: "alopecia", desc: "Constitutional support addressing autoimmune patch hair loss." },
      { name: "Dandruff", slug: "dandruff", desc: "Clearing chronic scaling, oil gland imbalances, and scalp itchiness." },
      { name: "Premature Greying", slug: "premature-greying", desc: "Nutritional and stress support to protect follicle pigments." }
    ]
  },
  "womens-health": {
    title: "Women's Health",
    desc: "Hormone-friendly endocrine care mapping cycle rhythms and systemic health indicators.",
    conditions: [
      { name: "PCOS / PCOD", slug: "pcos-pcod", desc: "Supporting insulin sensitivity, hormone balance, and cycle regulation." },
      { name: "Menstrual Disorders", slug: "menstrual-disorders", desc: "Gentle balancing for dysmenorrhea, heavy flow, or cycle delays." },
      { name: "Fertility Support", slug: "fertility-support", desc: "Optimizing reproductive wellness and constitutional stamina." },
      { name: "Menopause", slug: "menopause", desc: "Alleviating hot flashes, mood fluctuations, and metabolic slowdowns." }
    ]
  },
  "digestive": {
    title: "Digestive Health",
    desc: "Restoring gastrointestinal wall integrity, bile secretion, and optimal gut flora.",
    conditions: [
      { name: "IBS", slug: "ibs", desc: "Regulating intestinal motility and calming stress-induced gut spasms." },
      { name: "Acidity & GERD", slug: "acidity-gerd", desc: "Balancing stomach acid production and soothing esophageal lining." },
      { name: "Ulcerative Colitis", slug: "ulcerative-colitis", desc: "Supportive immune balancing targeting large intestine inflammation." },
      { name: "Constipation", slug: "constipation", desc: "Stimulating natural peristaltic action and digestive flow." }
    ]
  },
  "thyroid": {
    title: "Thyroid Gland",
    desc: "Hormonal feedback loop optimization and metabolic rate regulation.",
    conditions: [
      { name: "Thyroid Disorders", slug: "thyroid-disorders", desc: "Constitutional care supporting thyroid hormone synthesis and gland health." }
    ]
  },
  "joint-pain": {
    title: "Joint Pain",
    desc: "Alleviating chronic arthritic wear, skeletal stiffness, and inflammation.",
    conditions: [
      { name: "Arthritis", slug: "arthritis", desc: "Reducing joint wear and easing chronic morning stiffness." },
      { name: "Joint Pain General", slug: "joint-pain-general", desc: "Constitutional remedies for musculoskeletal fatigue and muscle soreness." }
    ]
  },
  "senior-care": {
    title: "Senior Care",
    desc: "Supportive geriatric care focusing on sleep quality, vitality, and joint range of motion.",
    conditions: [
      { name: "Senior General Wellness", slug: "senior-general-wellness", desc: "Gentle metabolic support and structural vitality for elderly health." }
    ]
  },
  "immunity": {
    title: "Immunity",
    desc: "Optimizing systemic defense responsiveness and chronic fatigue relief.",
    conditions: [
      { name: "Immunity Support", slug: "immunity-support", desc: "Restoring immunoglobin response and reducing chronic allergy susceptibility." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug || "").toLowerCase();
  const category = categoriesData[slug];
  const title = category ? `${category.title} Homeopathic Care | VitaHomeo` : "Homeopathic Care | VitaHomeo";
  const description = category 
    ? `Browse homeopathic treatment guides and conditions supported under our ${category.title} department.`
    : "Browse homeopathic treatments and consult verified specialists online.";
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.vitahomeo.com/treatments/category/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(categoriesData).map((slug) => ({ slug }));
}

export default async function CategoryListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug || "").toLowerCase();
  
  const category = categoriesData[slug] || {
    title: "Treatments",
    desc: "Explore constitutional homeopathic treatment categories.",
    conditions: []
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pb-20 pt-28 space-y-16">
        
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 text-xs text-muted-text dark:text-[#71806c] font-semibold flex items-center gap-2">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link href="/treatment" className="hover:text-brand">Treatments</Link>
          <span>/</span>
          <span className="text-ink dark:text-white font-bold">{category.title}</span>
        </div>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[28px] p-8 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
            <span className="inline-block text-[10px] font-bold text-brand bg-brand/10 dark:bg-brand/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Department Listing
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-ink dark:text-white leading-tight">
              {category.title} Treatment Library
            </h1>
            <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] font-semibold leading-relaxed max-w-2xl">
              {category.desc} Click on any condition below to read our detailed patient recovery guide.
            </p>
          </div>
        </section>

        {/* Conditions List */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.conditions.map((cond) => (
              <div 
                key={cond.slug} 
                className="bg-white dark:bg-[#101c0f] border border-line-custom dark:border-[#1d2a1a] rounded-[20px] p-5 shadow-sm hover:shadow-md hover:border-brand/35 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand" />
                    <h2 className="text-sm font-extrabold text-ink dark:text-white">{cond.name}</h2>
                  </div>
                  <p className="text-xs text-body-text dark:text-[#aebba8] leading-relaxed font-semibold">
                    {cond.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-line-custom/50 dark:border-[#1d2a1a]/50 mt-5 flex items-center justify-between">
                  <Link 
                    href={`/treatments/${cond.slug}`}
                    className="text-xs font-bold text-brand hover:underline flex items-center gap-1"
                  >
                    Read Treatment Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-bg-soft dark:bg-[#162315] border border-line-custom dark:border-[#1d2a1a] rounded-[24px] p-6 text-center space-y-4">
            <h3 className="text-base font-extrabold text-ink dark:text-white">Ready for a constitutional consultation?</h3>
            <p className="text-xs text-body-text dark:text-[#aebba8] font-semibold max-w-lg mx-auto">
              Our specialists evaluate your full lifestyle, metabolic rate, and genetics to curate custom dilutions.
            </p>
            <Link 
              href="/book" 
              className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white font-bold text-xs rounded-xl shadow-sm inline-flex items-center gap-1.5"
            >
              Book Consultation Today
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
