export interface Review {
  id: string;
  rating: number;
  title: string;
  comment: string;
  name: string;
  city: string;
  date: string;
  condition: string;
  isVideo: boolean;
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: "r1",
    rating: 5,
    title: "Incredible Eczema cure",
    comment: "I suffered from severe eczema on my hands for 4 years. Tried everything. Dr. Arun Kumar's constitutional homeopathy treatment cleared it completely within 4 months. Deeply grateful to VitaHomeo.",
    name: "Rohit Raj",
    city: "Hajipur",
    date: "July 18, 2026",
    condition: "Skin",
    isVideo: false,
    verified: true
  },
  {
    id: "r2",
    rating: 5,
    title: "Finally, relief from Migraine",
    comment: "Migraine had ruined my work-life balance for 6 years. The digital consults were super easy. Within 1 month of taking the custom remedies, my attack frequency dropped by 80%. Feel so much lighter.",
    name: "Vipul",
    city: "Patna",
    date: "June 29, 2026",
    condition: "Migraine",
    isVideo: false,
    verified: true
  },
  {
    id: "r3",
    rating: 5,
    title: "PCOS cycle regulated",
    comment: "Extremely helpful consultation. My menstrual cycles were delayed by 90+ days. With constitutional remedies, it regulated to 35 days in 2 months. Great platform interface.",
    name: "Kunal",
    city: "Delhi",
    date: "May 14, 2026",
    condition: "PCOS",
    isVideo: false,
    verified: true
  },
  {
    id: "r4",
    rating: 4,
    title: "Very professional consultation",
    comment: "Excellent experience consulting for my daughter's recurrent cold. The doctor gave ample time to take down details. Medicine delivery took 3 days, which is fine, but hope it gets faster.",
    name: "Anjali S.",
    city: "Bangalore",
    date: "July 10, 2026",
    condition: "Children",
    isVideo: false,
    verified: true
  },
  {
    id: "r5",
    rating: 5,
    title: "Asthma symptoms halved",
    comment: "Was dependent on inhalers daily. After 3 months of homeopathy prescribed by VitaHomeo specialists, my breathing has improved remarkably and inhaler dependency is now occasional.",
    name: "Manoj K.",
    city: "Pune",
    date: "June 05, 2026",
    condition: "Asthma",
    isVideo: false,
    verified: true
  },
  {
    id: "r6",
    rating: 5,
    title: "Brilliant hair fall control",
    comment: "Was facing heavy patch shedding. The doctor identified my gut causes and gave a customized plan. Patch is filling up with thin growth now. Absolute lifesaver.",
    name: "Divya R.",
    city: "Mumbai",
    date: "May 22, 2026",
    condition: "Hair",
    isVideo: false,
    verified: true
  },
  {
    id: "r7",
    rating: 5,
    title: "Eczema clearing up fast",
    comment: "Great experience. Highly recommend the video consulting feature, saves hours of travel and waiting room queues. Doctor Arun Kumar was very patient.",
    name: "A. K.",
    city: "Delhi",
    date: "April 18, 2026",
    condition: "Skin",
    isVideo: true,
    verified: true
  },
  {
    id: "r8",
    rating: 5,
    title: "Asthma attack frequency reduced",
    comment: "Constitutional prescription matches the exact lifestyle of the patient. Very helpful team and professional doctors. My allergies have subsided fully.",
    name: "K. R.",
    city: "Noida",
    date: "March 12, 2026",
    condition: "Asthma",
    isVideo: true,
    verified: true
  }
];

// Calculation helper functions
export const getReviewsCount = (): number => reviewsData.length;

export const getAverageRating = (): string => {
  if (reviewsData.length === 0) return "0.0";
  const sum = reviewsData.reduce((acc, r) => acc + r.rating, 0);
  return (sum / reviewsData.length).toFixed(1);
};

export const getRatingBreakdown = () => {
  const total = reviewsData.length;
  if (total === 0) {
    return [
      { stars: 5, pct: "0%", count: 0 },
      { stars: 4, pct: "0%", count: 0 },
      { stars: 3, pct: "0%", count: 0 },
      { stars: 2, pct: "0%", count: 0 },
      { stars: 1, pct: "0%", count: 0 },
    ];
  }

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviewsData.forEach((r) => {
    const rating = Math.min(Math.max(Math.round(r.rating), 1), 5) as 5 | 4 | 3 | 2 | 1;
    counts[rating] = (counts[rating] || 0) + 1;
  });

  return [
    { stars: 5, pct: `${Math.round((counts[5] / total) * 100)}%`, count: counts[5] },
    { stars: 4, pct: `${Math.round((counts[4] / total) * 100)}%`, count: counts[4] },
    { stars: 3, pct: `${Math.round((counts[3] / total) * 100)}%`, count: counts[3] },
    { stars: 2, pct: `${Math.round((counts[2] / total) * 100)}%`, count: counts[2] },
    { stars: 1, pct: `${Math.round((counts[1] / total) * 100)}%`, count: counts[1] },
  ];
};
