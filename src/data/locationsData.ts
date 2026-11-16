export interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationInfo {
  slug: string;
  state: string;
  capital: string;
  displayName: string;
  headline: string;
  description: string;
  popularConditions: string[];
  faqs: LocationFAQ[];
}

/**
 * Registry of Indian States, Union Territories, and Major Priority Metro Cities.
 * 100% strictly formatted to the LocationInfo schema with humanized, distinct local content.
 */
export const locationsData: Record<string, LocationInfo> = {
  // ==============================================================
  // 1. ANDHRA PRADESH & TELUGU REGION
  // ==============================================================
  "andhra-pradesh": {
    slug: "andhra-pradesh",
    state: "Andhra Pradesh",
    capital: "Amaravati / Vijayawada",
    displayName: "Andhra Pradesh (Amaravati / Vijayawada)",
    headline: "Consult Verified Homeopathic Doctors Online in Andhra Pradesh",
    description: "Connect with certified homeopathic physicians registered with the Andhra Board for Homoeopathy. Receive personalized constitutional video consultations and official digital prescriptions on WhatsApp across Andhra Pradesh.",
    popularConditions: [
      "Women's Hormonal Health & PCOS",
      "Pediatric Immunity & Child Nutrition",
      "Chronic Coastal Skin Allergies",
      "Digestive & Acidity Management"
    ],
    faqs: [
      {
        q: "How does an online homeopathy consultation work in Andhra Pradesh?",
        a: "You select your preferred appointment slot on WhatsApp. You will meet with a verified specialist on a secure 30–40 minute video call for in-depth constitutional case taking and receive an official digital prescription immediately after."
      },
      {
        q: "Are the practitioners registered with the state medical board?",
        a: "Yes. Our practitioners include specialists registered directly with the Andhra Board for Homoeopathy (such as Dr. Rachamsetty Tejaswi, MD Hom, Reg. No. 8809/H/2019)."
      },
      {
        q: "What is the consultation fee for Andhra Pradesh patients?",
        a: "Consultation fees are standardized at ₹999 for a comprehensive 30–40 minute constitutional video session covering detailed case taking and clinical review."
      }
    ]
  },

  "vijayawada": {
    slug: "vijayawada",
    state: "Andhra Pradesh",
    capital: "Vijayawada / Amaravati",
    displayName: "Vijayawada, Andhra Pradesh",
    headline: "Consult Verified Homeopathic Doctor in Vijayawada",
    description: "Connect with Dr. Rachamsetty Tejaswi, MD (Homoeopathy), BHMS, MSc (Clinical Nutrition), registered with the Andhra Board for Homoeopathy (Reg. No. 8809/H/2019). Detailed video consultations for women's health, PCOS, and child care.",
    popularConditions: [
      "Women's Hormonal Care & PCOS",
      "Pediatrics & Developmental Support",
      "Clinical Nutrition & Metabolic Wellness",
      "Chronic Digestive Imbalances"
    ],
    faqs: [
      {
        q: "Who is the registered homeopathic physician in Vijayawada?",
        a: "Dr. Rachamsetty Tejaswi holds an MD in Homoeopathy and BHMS from recognized universities, with statutory registration under the Andhra Board for Homoeopathy (Reg. No. 8809/H/2019)."
      },
      {
        q: "In which languages can patients consult in Vijayawada?",
        a: "Consultations are conducted fluently in Telugu, Hindi, and English, allowing patients to comfortably express their complete constitutional symptoms."
      },
      {
        q: "What is the consultation fee for Vijayawada residents?",
        a: "Consultation fees are fixed at ₹999 for a comprehensive 30–40 minute constitutional video evaluation with no extra clinic booking charges."
      }
    ]
  },

  "telangana": {
    slug: "telangana",
    state: "Telangana",
    capital: "Hyderabad",
    displayName: "Telangana (Hyderabad)",
    headline: "Top Homeopathic Doctors Online Consultation in Telangana",
    description: "Access experienced homeopathic physicians online across Telangana, including Hyderabad, Warangal, Nizamabad, and Karimnagar. Comprehensive constitutional case evaluations for chronic lifestyle and metabolic disorders.",
    popularConditions: [
      "Metabolic & Thyroid Imbalances",
      "PCOS & Irregular Cycles",
      "Chronic Gastric Acidity & IBS",
      "Allergic Rhinitis & Dust Allergies"
    ],
    faqs: [
      {
        q: "How can patients in Telangana consult verified doctors online?",
        a: "You select a convenient appointment slot on WhatsApp and connect directly via private video call from your home or office, avoiding city travel."
      },
      {
        q: "What is the consultation fee for Telangana patients?",
        a: "The fee is standardized at ₹999 for an unhurried 30–40 minute video session, which includes authorized digital prescription delivery."
      }
    ]
  },

  "hyderabad": {
    slug: "hyderabad",
    state: "Telangana",
    capital: "Hyderabad",
    displayName: "Hyderabad, Telangana",
    headline: "Consult Verified Homeopathic Specialists Online in Hyderabad",
    description: "Connect with certified practitioners registered with state homoeopathic boards. Thorough constitutional video consultations for patients in Hyderabad, Secunderabad, and Cyberabad.",
    popularConditions: [
      "Women's Hormonal Health & PCOS",
      "Pediatric Immunity & Growth Support",
      "Chronic Digestive Care & GERD",
      "Dermatological Allergies"
    ],
    faqs: [
      {
        q: "Can Hyderabad patients consult in Telugu?",
        a: "Yes. Dr. Rachamsetty Tejaswi consults fluently in Telugu, Hindi, and English."
      },
      {
        q: "What credentials do treating doctors hold?",
        a: "Our physicians hold statutory board registrations, including MD (Homoeopathy) and BHMS, ensuring regulated clinical practice standards."
      },
      {
        q: "What is the fee for Hyderabad consultations?",
        a: "Consultations are standardized at ₹999 for a full 30–40 minute private video evaluation."
      }
    ]
  },

  // ==============================================================
  // 2. BIHAR & EASTERN REGION
  // ==============================================================
  "bihar": {
    slug: "bihar",
    state: "Bihar",
    capital: "Patna",
    displayName: "Bihar (Patna)",
    headline: "Consult Verified Homeopathic & Electro-Homeopathic Specialists in Bihar",
    description: "Access registered practitioners across Bihar, including Patna, Gaya, Muzaffarpur, and Bhagalpur. Comprehensive constitutional video consultations and digital prescriptions on WhatsApp.",
    popularConditions: [
      "Chronic Skin Eczema & Psoriasis",
      "Digestive Disorders & Hyperacidity",
      "Seasonal Bronchial Allergies",
      "Migraine & Chronic Headaches"
    ],
    faqs: [
      {
        q: "Are treating practitioners registered in Bihar?",
        a: "Yes. Dr. Arun Kumar holds B.E.M.S. / M.B.E.H. credentials and has been registered with the Board of Electro Homoeopathic Medicine, Bihar (Reg. No. 7979) since 2007."
      },
      {
        q: "What is the consultation fee in Bihar?",
        a: "The consultation fee is transparently standardized at ₹999 across all verified practitioners on the platform."
      }
    ]
  },

  "patna": {
    slug: "patna",
    state: "Bihar",
    capital: "Patna",
    displayName: "Patna, Bihar",
    headline: "Consult Verified Homeopathic & Electro-Homeopathic Specialists in Patna",
    description: "Connect with verified practitioners serving patients across Patna, Kankarbagh, Boring Road, and Danapur. In-depth 30–40 minute constitutional video consultations and official digital prescriptions on WhatsApp.",
    popularConditions: [
      "Chronic Skin Allergies & Eczema",
      "Respiratory Allergies & Seasonal Bronchitis",
      "Gastrointestinal & Acidity Care",
      "Migraine & Chronic Stress Headaches"
    ],
    faqs: [
      {
        q: "Which verified doctors serve patients in Patna?",
        a: "Dr. Arun Kumar (B.E.M.S. / M.B.E.H., Reg. No. 7979 with the Board of Electro Homoeopathic Medicine, Bihar) is based locally in the Patna/Hajipur twin-city area with 19+ years of clinical experience. Consultations are conducted via private video calls."
      },
      {
        q: "Can patients in Patna consult in Hindi?",
        a: "Yes. Consultations are available fluently in Hindi and English."
      },
      {
        q: "What is the consultation fee in Patna?",
        a: "The fee is standardized at ₹999 for a thorough 30–40 minute constitutional video session."
      }
    ]
  },

  "hajipur": {
    slug: "hajipur",
    state: "Bihar",
    capital: "Hajipur / Vaishali",
    displayName: "Hajipur, Bihar",
    headline: "Verified Electro-Homeopathic Specialist in Hajipur, Bihar",
    description: "Consult Dr. Arun Kumar (B.E.M.S. / M.B.E.H., Reg. No. 7979), practicing in Hajipur since 2007. Available for private video consultations for chronic skin, digestive, and allergic disorders across Vaishali district.",
    popularConditions: [
      "Chronic Eczema & Psoriasis Support",
      "Digestive Disorders & Hyperacidity",
      "Migraines & Tension Headaches",
      "Allergic Rhinitis & Sinusitis"
    ],
    faqs: [
      {
        q: "Who is the local verified practitioner in Hajipur?",
        a: "Dr. Arun Kumar has been providing individualized electro-homeopathic consultations in Hajipur, Bihar for 19 years. He is registered with the Board of Electro Homoeopathic Medicine, Bihar (Reg. No. 7979)."
      },
      {
        q: "How does the online video consultation work for Hajipur patients?",
        a: "Local patients can avoid traffic and clinic waiting rooms by booking a secure video consultation on WhatsApp. Your digital prescription is sent to you immediately following the call."
      },
      {
        q: "What is the fee for Hajipur residents?",
        a: "The consultation is fixed at ₹999 for a comprehensive 30–40 minute case evaluation."
      }
    ]
  },

  "jharkhand": {
    slug: "jharkhand",
    state: "Jharkhand",
    capital: "Ranchi",
    displayName: "Jharkhand (Ranchi)",
    headline: "Consult Verified Homeopathic Doctors Online in Jharkhand",
    description: "Access experienced constitutional homeopathic doctors from home in Ranchi, Jamshedpur, Dhanbad, and across Jharkhand. Unhurried video consultations and digital prescriptions.",
    popularConditions: [
      "Industrial & Urban Dust Allergies",
      "Chronic Joint Pain & Arthritis Support",
      "Digestive Health & Acidity",
      "Skin Allergies & Eczema"
    ],
    faqs: [
      {
        q: "Can patients in Jharkhand consult doctors online?",
        a: "Yes. VitaHomeo provides confidential online video sessions for patients throughout Jharkhand, eliminating long hospital commutes."
      },
      {
        q: "What is the consultation charge for Jharkhand patients?",
        a: "The fee is fixed at ₹999 for a complete 30–40 minute constitutional video appointment."
      }
    ]
  },

  "west-bengal": {
    slug: "west-bengal",
    state: "West Bengal",
    capital: "Kolkata",
    displayName: "West Bengal (Kolkata)",
    headline: "Top Homeopathic Doctors Online Consultation in West Bengal",
    description: "Consult verified homeopathic physicians online across West Bengal, from Kolkata and Howrah to Siliguri and Asansol. In-depth constitutional case taking and digital prescriptions.",
    popularConditions: [
      "Chronic Bronchial Asthma & Allergies",
      "Skin Allergies & Dermatitis",
      "Digestive & Liver Care",
      "Women's Hormonal Health"
    ],
    faqs: [
      {
        q: "How does an online consultation work for West Bengal patients?",
        a: "Book your preferred slot on WhatsApp, meet the practitioner over a secure video link for detailed case analysis, and receive your digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee in West Bengal?",
        a: "The consultation fee is standardized at ₹999 for a comprehensive 30–40 minute session."
      }
    ]
  },

  "kolkata": {
    slug: "kolkata",
    state: "West Bengal",
    capital: "Kolkata",
    displayName: "Kolkata, West Bengal",
    headline: "Verified Homeopathic Doctors Online Video Consultation in Kolkata",
    description: "Access experienced homeopathic specialists online across Kolkata, Howrah, and Salt Lake. Thorough classical constitutional case analysis and authorized digital prescriptions.",
    popularConditions: [
      "Chronic Respiratory Allergies & Bronchitis",
      "Skin Eczema & Psoriasis",
      "Gastric Acidity & Indigestion",
      "Pediatric Care"
    ],
    faqs: [
      {
        q: "How do Kolkata patients book an online consultation?",
        a: "Submit a request on WhatsApp, choose your preferred slot, and attend the private video appointment on your phone or computer."
      },
      {
        q: "What is the fee for Kolkata patients?",
        a: "Consultation fees are standardized at ₹999 for an in-depth 30–40 minute constitutional video session."
      }
    ]
  },

  "odisha": {
    slug: "odisha",
    state: "Odisha",
    capital: "Bhubaneswar",
    displayName: "Odisha (Bhubaneswar)",
    headline: "Consult Verified Homeopathic Doctors Online in Odisha",
    description: "Patients in Odisha can seek individualized constitutional care for coastal humidity allergies, chronic digestive complaints, and joint pain from experienced practitioners via secure telemedicine appointments.",
    popularConditions: [
      "Coastal Humidity Allergies",
      "Chronic Acidity & GERD",
      "Arthritic Joint Discomfort",
      "Skin Rashes & Dermatitis"
    ],
    faqs: [
      {
        q: "Are video consultations available across Odisha?",
        a: "Yes. Patients from all districts of Odisha can consult verified practitioners through our secure telemedicine platform."
      },
      {
        q: "What is the consultation fee for Odisha patients?",
        a: "Consultations are standardized at ₹999 for an unhurried 30–40 minute evaluation."
      }
    ]
  },

  // ==============================================================
  // 3. NORTHERN REGION & METROS
  // ==============================================================
  "delhi-ncr": {
    slug: "delhi-ncr",
    state: "Delhi NCR",
    capital: "New Delhi",
    displayName: "Delhi NCR",
    headline: "Top Homeopathic Doctors Online Consultation in Delhi NCR",
    description: "Consult verified homeopathic physicians online across Delhi, Gurugram, Noida, Faridabad, and Ghaziabad. Avoid city traffic and clinic wait times with confidential video consultations.",
    popularConditions: [
      "Pollution-Induced Respiratory Allergies",
      "Chronic Sinusitis & Rhinitis",
      "Eczema & Skin Dermatitis",
      "Lifestyle Stress & Headaches"
    ],
    faqs: [
      {
        q: "How does an online consultation work in Delhi NCR?",
        a: "Schedule your preferred appointment window on WhatsApp, meet your practitioner on a private video call for thorough constitutional case taking, and receive your digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee for Delhi NCR?",
        a: "Consultations are standardized at ₹999 for a full 30–40 minute constitutional evaluation."
      }
    ]
  },

  "delhi": {
    slug: "delhi",
    state: "Delhi",
    capital: "New Delhi",
    displayName: "Delhi",
    headline: "Online Homeopathy Consultations for Patients in Delhi",
    description: "Skip traffic across South Delhi, Dwarka, and Rohini. Consult verified homeopathic physicians online with 30–40 minute constitutional video sessions and authorized digital prescriptions on WhatsApp.",
    popularConditions: [
      "Urban Respiratory Allergies & Sinusitis",
      "Chronic Skin Conditions & Eczema",
      "Women's Hormonal Health & PCOS",
      "Lifestyle Stress & Digestive Acidity"
    ],
    faqs: [
      {
        q: "How can Delhi residents consult verified doctors on VitaHomeo?",
        a: "You select an appointment slot on WhatsApp and connect via private video call from your home or office. Prescriptions are shared digitally immediately after."
      },
      {
        q: "What languages are available for Delhi consultations?",
        a: "Practitioners consult fluently in Hindi and English."
      },
      {
        q: "What is the fee for Delhi patients?",
        a: "The fee is standardized at ₹999 for a comprehensive 30–40 minute constitutional video evaluation."
      }
    ]
  },

  "haryana": {
    slug: "haryana",
    state: "Haryana",
    capital: "Chandigarh",
    displayName: "Haryana (Chandigarh / Gurugram)",
    headline: "Consult Verified Homeopathic Doctors Online in Haryana",
    description: "Connect with experienced homeopathic physicians from Gurugram, Faridabad, Panipat, Karnal, and across Haryana via secure video appointments.",
    popularConditions: [
      "Seasonal Allergies & Bronchitis",
      "Joint Pain & Arthritis Support",
      "Digestive Health & Acidity",
      "Skin Dermatitis"
    ],
    faqs: [
      {
        q: "What is the fee for an online consultation in Haryana?",
        a: "The fee is standardized at ₹999 for a thorough 30–40 minute video session with an authorized digital prescription."
      }
    ]
  },

  "punjab": {
    slug: "punjab",
    state: "Punjab",
    capital: "Chandigarh",
    displayName: "Punjab (Chandigarh / Ludhiana)",
    headline: "Online Homeopathy Consultations for Patients in Punjab",
    description: "Consult verified homeopathic doctors online from Ludhiana, Amritsar, Jalandhar, Patiala, and across Punjab. Personalized constitutional care delivered through private video calls.",
    popularConditions: [
      "Respiratory Allergies & Asthma Support",
      "Chronic Skin Conditions",
      "Digestive Disorders",
      "Joint & Rheumatic Discomfort"
    ],
    faqs: [
      {
        q: "How do Punjab patients book a video consultation?",
        a: "Choose a convenient morning, afternoon, or evening slot on WhatsApp. You will receive a secure video consultation link and digital prescription."
      },
      {
        q: "What is the fee for Punjab patients?",
        a: "Consultation fees are standardized at ₹999 across all verified practitioners."
      }
    ]
  },

  "himachal-pradesh": {
    slug: "himachal-pradesh",
    state: "Himachal Pradesh",
    capital: "Shimla",
    displayName: "Himachal Pradesh (Shimla)",
    headline: "Consult Verified Homeopathic Doctors Online in Himachal Pradesh",
    description: "Access verified homeopathic specialists from Shimla, Dharamshala, Mandi, Solan, and across Himachal Pradesh without traveling long mountain distances.",
    popularConditions: [
      "Cold Weather Respiratory Allergies",
      "Joint Pain & Rheumatic Support",
      "Chronic Sinusitis",
      "Skin Dryness & Eczema"
    ],
    faqs: [
      {
        q: "Can patients in remote areas of Himachal consult online?",
        a: "Yes. As long as you have basic mobile internet, you can attend a private video consultation from home."
      },
      {
        q: "What is the consultation fee in Himachal Pradesh?",
        a: "The consultation fee is fixed at ₹999 for an unhurried 30–40 minute constitutional video session."
      }
    ]
  },

  "uttarakhand": {
    slug: "uttarakhand",
    state: "Uttarakhand",
    capital: "Dehradun",
    displayName: "Uttarakhand (Dehradun)",
    headline: "Consult Verified Homeopathic Doctors Online in Uttarakhand",
    description: "Overcome long travel across hilly terrain to reach specialists. Dehradun and Haridwar residents can consult registered practitioners online for weather-induced joint stiffness and chronic allergic rhinitis.",
    popularConditions: [
      "Seasonal Weather Allergies",
      "Chronic Joint Pain & Sciatica Support",
      "Digestive & Acidity Issues",
      "Skin Allergies"
    ],
    faqs: [
      {
        q: "How does the consultation work in Uttarakhand?",
        a: "Book your preferred slot on WhatsApp. You will receive a video link for a 30–40 minute constitutional session and an authorized digital prescription."
      },
      {
        q: "What is the consultation fee in Uttarakhand?",
        a: "Consultation is standardized at ₹999 for a detailed 30–40 minute evaluation."
      }
    ]
  },

  "uttar-pradesh": {
    slug: "uttar-pradesh",
    state: "Uttar Pradesh",
    capital: "Lucknow",
    displayName: "Uttar Pradesh (Lucknow)",
    headline: "Top Homeopathic Doctors Online Consultation in Uttar Pradesh",
    description: "Connect with verified homeopathic physicians online across Uttar Pradesh, including Lucknow, Kanpur, Varanasi, Agra, and Prayagraj.",
    popularConditions: [
      "Chronic Bronchial Allergies",
      "Skin Allergies & Dermatitis",
      "Digestive Health & Acidity",
      "Women's Hormonal Balance"
    ],
    faqs: [
      {
        q: "How do UP patients connect with VitaHomeo doctors?",
        a: "Select your preferred slot on WhatsApp. Our care desk connects you with a verified specialist for a 30–40 minute video evaluation."
      },
      {
        q: "What is the consultation charge across Uttar Pradesh?",
        a: "The consultation fee is standardized at ₹999 for all cities in Uttar Pradesh."
      }
    ]
  },

  "lucknow": {
    slug: "lucknow",
    state: "Uttar Pradesh",
    capital: "Lucknow",
    displayName: "Lucknow, Uttar Pradesh",
    headline: "Verified Homeopathic Doctors Online Video Consultation in Lucknow",
    description: "Consult registered practitioners online from Gomti Nagar, Aliganj, Hazratganj, and across Lucknow. Detailed constitutional evaluation and digital prescriptions.",
    popularConditions: [
      "Chronic Respiratory Allergies",
      "Digestive Health & Hyperacidity",
      "Skin Allergies & Dermatitis",
      "Joint & Arthritis Support"
    ],
    faqs: [
      {
        q: "Are consultations available in Hindi for Lucknow patients?",
        a: "Yes. Our practitioners consult fluently in Hindi and English."
      },
      {
        q: "What is the consultation fee in Lucknow?",
        a: "The fee is fixed at ₹999 for a comprehensive 30–40 minute constitutional evaluation."
      }
    ]
  },

  // ==============================================================
  // 4. WESTERN REGION (MAHARASHTRA, GUJARAT, RAJASTHAN, GOA)
  // ==============================================================
  "maharashtra": {
    slug: "maharashtra",
    state: "Maharashtra",
    capital: "Mumbai / Pune",
    displayName: "Maharashtra (Mumbai / Pune)",
    headline: "Top Homeopathic Doctors Online Consultation in Maharashtra",
    description: "Bypass congested urban commutes across Mumbai, Pune, and Nagpur. Meet qualified practitioners on private video appointments for chronic lifestyle conditions, gastric reflux, and stress-related migraines.",
    popularConditions: [
      "Lifestyle Stress & Headaches",
      "Women's Health & PCOS",
      "Chronic Skin Conditions",
      "Acidity & GERD"
    ],
    faqs: [
      {
        q: "Why choose an online homeopathy consultation in Maharashtra?",
        a: "Save hours of city traffic. Consult experienced doctors from home and receive an official digital prescription."
      },
      {
        q: "What is the consultation fee in Maharashtra?",
        a: "Consultations are standardized at ₹999 for a full 30–40 minute constitutional video session."
      }
    ]
  },

  "mumbai": {
    slug: "mumbai",
    state: "Maharashtra",
    capital: "Mumbai",
    displayName: "Mumbai, Maharashtra",
    headline: "Top Homeopathic Doctors Online Video Consultation in Mumbai",
    description: "Access experienced homeopathic physicians online across Mumbai, Navi Mumbai, and Thane. Comprehensive constitutional evaluations without spending hours commuting across the city.",
    popularConditions: [
      "Chronic Skin Allergies & Dermatitis",
      "Acid Reflux & Irritable Bowel Symptoms",
      "Migraine & Work Stress Fatigue",
      "PCOS & Hormonal Imbalances"
    ],
    faqs: [
      {
        q: "Are video consultations legally valid in Mumbai?",
        a: "Yes. Consultations follow the Telemedicine Practice Guidelines, India. Prescriptions are issued digitally by registered practitioners."
      },
      {
        q: "What is the consultation fee in Mumbai?",
        a: "Consultation is standardized at ₹999 for a detailed 30–40 minute session."
      }
    ]
  },

  "pune": {
    slug: "pune",
    state: "Maharashtra",
    capital: "Pune",
    displayName: "Pune, Maharashtra",
    headline: "Online Homeopathy Consultations for Patients in Pune",
    description: "Consult verified homeopathic practitioners from home in Pune, Kothrud, Baner, and Viman Nagar. Comprehensive case evaluations for chronic ailments and hormonal health.",
    popularConditions: [
      "Allergic Sinusitis & Rhinitis",
      "Women's Hormonal Care & PCOS",
      "Chronic Skin Rash & Dermatitis",
      "Digestive Disorders"
    ],
    faqs: [
      {
        q: "What is the consultation fee in Pune?",
        a: "Standardized at ₹999 for a full 30–40 minute private video evaluation."
      },
      {
        q: "Can I consult in Hindi or English?",
        a: "Yes. Doctors consult fluently in Hindi and English, accommodating working professionals and families."
      }
    ]
  },

  "gujarat": {
    slug: "gujarat",
    state: "Gujarat",
    capital: "Gandhinagar / Ahmedabad",
    displayName: "Gujarat (Ahmedabad / Gandhinagar)",
    headline: "Online Homeopathy Consultations for Patients in Gujarat",
    description: "Explore holistic treatment plans tailored for dry-climate skin conditions and metabolic digestive complaints with registered practitioners serving Ahmedabad, Surat, and Vadodara.",
    popularConditions: [
      "Digestive Health & Acidity",
      "Skin Allergies & Eczema",
      "Women's Health & PCOS",
      "Joint Discomfort & Arthritis Support"
    ],
    faqs: [
      {
        q: "How does an online homeopathy consultation work in Gujarat?",
        a: "You select a convenient time on WhatsApp, attend a 30–40 minute video call with a verified practitioner, and receive your authorized digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee in Gujarat?",
        a: "The fee is standardized at ₹999 for an in-depth 30–40 minute constitutional video evaluation."
      }
    ]
  },

  "rajasthan": {
    slug: "rajasthan",
    state: "Rajasthan",
    capital: "Jaipur",
    displayName: "Rajasthan (Jaipur)",
    headline: "Consult Verified Homeopathic Doctors Online in Rajasthan",
    description: "Access experienced homeopathic physicians from Jaipur, Jodhpur, Udaipur, Kota, and across Rajasthan through secure online video appointments.",
    popularConditions: [
      "Dry Climate Skin Conditions & Eczema",
      "Digestive & Acidity Care",
      "Respiratory Allergies",
      "Joint Pain & Arthritis Support"
    ],
    faqs: [
      {
        q: "Can Rajasthan patients consult verified doctors online?",
        a: "Yes. Patients across all districts of Rajasthan can book private video sessions with verified practitioners on VitaHomeo."
      },
      {
        q: "What is the consultation fee for Rajasthan patients?",
        a: "The consultation fee is standardized at ₹999 for a thorough 30–40 minute evaluation."
      }
    ]
  },

  "goa": {
    slug: "goa",
    state: "Goa",
    capital: "Panaji",
    displayName: "Goa (Panaji)",
    headline: "Consult Verified Homeopathic Doctors Online in Goa",
    description: "Consult qualified practitioners from Panaji or Margao for coastal humidity dermatitis and chronic acidity through unhurried 30–40 minute video sessions.",
    popularConditions: [
      "Coastal Humidity Skin Allergies",
      "Chronic Digestive Acidity",
      "Allergic Rhinitis",
      "Stress & Fatigue Management"
    ],
    faqs: [
      {
        q: "Can Goa residents consult doctors online?",
        a: "Yes. Our doctors provide unhurried 30–40 minute video sessions with thorough patient case review."
      },
      {
        q: "What is the consultation fee in Goa?",
        a: "The consultation fee is standardized at ₹999 for a comprehensive 30–40 minute video session."
      }
    ]
  },

  // ==============================================================
  // 5. SOUTHERN REGION (KARNATAKA, TAMIL NADU, KERALA)
  // ==============================================================
  "karnataka": {
    slug: "karnataka",
    state: "Karnataka",
    capital: "Bengaluru",
    displayName: "Karnataka (Bengaluru)",
    headline: "Top Homeopathic Doctors Online Consultation in Karnataka",
    description: "Bengaluru working professionals and families across Karnataka can access dedicated constitutional care for dust allergies, PCOS, and chronic acidity without leaving home.",
    popularConditions: [
      "Urban Dust & Pollen Allergies",
      "PCOS & Hormonal Imbalances",
      "Digestive Health & Acidity",
      "Chronic Migraine"
    ],
    faqs: [
      {
        q: "How does the online consultation work for Karnataka patients?",
        a: "Select your preferred slot on WhatsApp, meet the practitioner over a secure video link for detailed case taking, and receive your digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee in Karnataka?",
        a: "Consultations are standardized at ₹999 for an in-depth 30–40 minute constitutional video session."
      }
    ]
  },

  "bengaluru": {
    slug: "bengaluru",
    state: "Karnataka",
    capital: "Bengaluru",
    displayName: "Bengaluru, Karnataka",
    headline: "Online Homeopathy Consultation for Patients in Bengaluru",
    description: "Save hours of Bengaluru traffic. Consult verified practitioners for constitutional care, women's health, and chronic lifestyle disorders via private video appointments from Indiranagar, Whitefield, Koramangala, and HSR Layout.",
    popularConditions: [
      "Allergic Rhinitis & Pollen Allergies",
      "PCOS & Hormonal Acne",
      "Chronic Gastric Acidity",
      "Stress-Induced Headaches"
    ],
    faqs: [
      {
        q: "Can I consult in English and South Indian languages?",
        a: "Yes. Our practitioners include specialists fluent in English, Telugu, and Hindi."
      },
      {
        q: "How long does a consultation take in Bengaluru?",
        a: "Each session is an in-depth 30–40 minute video appointment dedicated to comprehensive case-taking."
      },
      {
        q: "What is the fee for Bengaluru consultations?",
        a: "The fee is fixed at ₹999 for a full 30–40 minute private video evaluation."
      }
    ]
  },

  "tamil-nadu": {
    slug: "tamil-nadu",
    state: "Tamil Nadu",
    capital: "Chennai",
    displayName: "Tamil Nadu (Chennai)",
    headline: "Top Homeopathic Doctors Online Consultation in Tamil Nadu",
    description: "Access experienced homeopathic physicians online across Tamil Nadu, including Chennai, Coimbatore, Madurai, and Tiruchirappalli.",
    popularConditions: [
      "Tropical Skin Allergies & Dermatitis",
      "Digestive & Acidity Care",
      "Women's Hormonal Health",
      "Joint Pain & Arthritis Support"
    ],
    faqs: [
      {
        q: "Can patients in Tamil Nadu consult verified doctors online?",
        a: "Yes. Patients across Tamil Nadu can attend confidential video appointments from home with verified practitioners."
      },
      {
        q: "What is the consultation fee in Tamil Nadu?",
        a: "The consultation fee is standardized at ₹999 for a thorough 30–40 minute video session."
      }
    ]
  },

  "kerala": {
    slug: "kerala",
    state: "Kerala",
    capital: "Thiruvananthapuram",
    displayName: "Kerala (Thiruvananthapuram / Kochi)",
    headline: "Consult Verified Homeopathic Doctors Online in Kerala",
    description: "Address recurring coastal humidity fungal sensitivities, chronic sinus congestion, and lifestyle wellness with verified practitioners via confidential video consultations across Kerala.",
    popularConditions: [
      "Monsoon & Coastal Skin Allergies",
      "Chronic Respiratory Health",
      "Digestive & Lifestyle Care",
      "Joint & Rheumatic Discomfort"
    ],
    faqs: [
      {
        q: "Can Kerala patients consult VitaHomeo doctors online?",
        a: "Yes. Our doctors conduct thorough 30–40 minute video sessions with case taking, accessible from any location in Kerala."
      },
      {
        q: "What is the consultation fee in Kerala?",
        a: "Consultation fees are standardized at ₹999 for a comprehensive 30–40 minute constitutional video evaluation."
      }
    ]
  },

  // ==============================================================
  // 6. CENTRAL & OTHER REGIONS (MADHYA PRADESH, CHHATTISGARH)
  // ==============================================================
  "madhya-pradesh": {
    slug: "madhya-pradesh",
    state: "Madhya Pradesh",
    capital: "Bhopal / Indore",
    displayName: "Madhya Pradesh (Bhopal / Indore)",
    headline: "Consult Verified Homeopathic Doctors Online in Madhya Pradesh",
    description: "Experience thorough homeopathic case taking from home in Central India. Registered practitioners address chronic bronchitis, gastric acidity, and hormonal imbalances across Bhopal, Indore, and Jabalpur via private video sessions.",
    popularConditions: [
      "Seasonal Allergies & Bronchitis",
      "Digestive Health & Acidity",
      "Skin Allergies & Dermatitis",
      "Women's Hormonal Care"
    ],
    faqs: [
      {
        q: "How does the online consultation work in Madhya Pradesh?",
        a: "Choose a convenient appointment window on WhatsApp, attend a private video call with a verified practitioner, and receive your authorized digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee in Madhya Pradesh?",
        a: "Consultation is standardized at ₹999 for an in-depth 30–40 minute session."
      }
    ]
  },

  "chhattisgarh": {
    slug: "chhattisgarh",
    state: "Chhattisgarh",
    capital: "Raipur",
    displayName: "Chhattisgarh (Raipur)",
    headline: "Online Homeopathy Consultations for Patients in Chhattisgarh",
    description: "Consult experienced doctors for industrial dust allergies, chronic respiratory sensitivities, and joint pain across Raipur, Bilaspur, and Bhilai via secure teleconsultations.",
    popularConditions: [
      "Industrial Dust & Respiratory Allergies",
      "Skin Dermatitis & Eczema",
      "Joint Pain & Arthritis Support",
      "Digestive Health"
    ],
    faqs: [
      {
        q: "Can patients in Chhattisgarh consult doctors online?",
        a: "Yes. VitaHomeo provides private video consultations for patients across Chhattisgarh, eliminating travel barriers to specialist care."
      },
      {
        q: "What is the consultation fee in Chhattisgarh?",
        a: "The fee is standardized at ₹999 for a full 30–40 minute constitutional evaluation."
      }
    ]
  },

  // ==============================================================
  // 7. NORTHEASTERN STATES
  // ==============================================================
  "assam": {
    slug: "assam",
    state: "Assam",
    capital: "Dispur / Guwahati",
    displayName: "Assam (Dispur / Guwahati)",
    headline: "Online Homeopathy Consultations for Patients in Assam",
    description: "Access verified homeopathic specialists online from anywhere in Assam, including Guwahati and Dispur. Comprehensive constitutional video consultations and authorized digital prescriptions.",
    popularConditions: [
      "Chronic Respiratory Allergies & Bronchitis",
      "Skin Allergies & Dermatitis",
      "Digestive Health & Acidity",
      "Women's Hormonal Care"
    ],
    faqs: [
      {
        q: "Can patients in Assam consult verified homeopathic doctors online?",
        a: "Yes. VitaHomeo provides private, secure video consultations for patients across Assam, eliminating travel barriers to specialist care."
      },
      {
        q: "What is the consultation fee in Assam?",
        a: "The consultation fee is standardized at ₹999 for a full 30–40 minute video session."
      }
    ]
  },

  "arunachal-pradesh": {
    slug: "arunachal-pradesh",
    state: "Arunachal Pradesh",
    capital: "Itanagar",
    displayName: "Arunachal Pradesh (Itanagar)",
    headline: "Online Homeopathy Consultations in Arunachal Pradesh",
    description: "Patients across Itanagar and Himalayan foothill communities can connect directly with verified specialists, removing geographic barriers to quality constitutional healthcare.",
    popularConditions: ["Cold Climate Respiratory Health", "Joint Discomfort", "Digestive Health", "Skin Allergies"],
    faqs: [
      {
        q: "How can patients in Arunachal Pradesh consult doctors online?",
        a: "You can book an appointment on WhatsApp and connect via private video call from home, overcoming hilly terrain and travel barriers."
      },
      {
        q: "What is the consultation fee in Arunachal Pradesh?",
        a: "The fee is standardized at ₹999 for a comprehensive 30–40 minute constitutional video evaluation."
      }
    ]
  },

  "manipur": {
    slug: "manipur",
    state: "Manipur",
    capital: "Imphal",
    displayName: "Manipur (Imphal)",
    headline: "Consult Verified Homeopathic Doctors Online in Manipur",
    description: "Imphal residents can attend private video appointments with verified specialists for seasonal respiratory allergies, chronic skin rashes, and digestive care.",
    popularConditions: ["Seasonal Respiratory Care", "Skin Allergies", "Digestive Issues", "Women's Health"],
    faqs: [
      {
        q: "Can patients in Manipur consult doctors online?",
        a: "Yes. VitaHomeo offers private video appointments for patients anywhere in Manipur."
      },
      {
        q: "What is the consultation fee in Manipur?",
        a: "Standardized at ₹999 for a thorough 30–40 minute constitutional video evaluation."
      }
    ]
  },

  "meghalaya": {
    slug: "meghalaya",
    state: "Meghalaya",
    capital: "Shillong",
    displayName: "Meghalaya (Shillong)",
    headline: "Consult Verified Homeopathic Doctors Online in Meghalaya",
    description: "Residents in Shillong and across Meghalaya can discuss damp-weather skin complaints and seasonal respiratory sensitivities directly with verified specialists over private video appointments.",
    popularConditions: ["Rainy Climate Skin Issues", "Chronic Respiratory Allergies", "Joint Pain", "Digestive Health"],
    faqs: [
      {
        q: "How does the online consultation work in Meghalaya?",
        a: "Book your preferred slot on WhatsApp. You will receive a video link for a 30–40 minute constitutional session and an authorized digital prescription."
      },
      {
        q: "What is the consultation fee in Meghalaya?",
        a: "The fee is standardized at ₹999 for a detailed 30–40 minute case evaluation."
      }
    ]
  },

  "mizoram": {
    slug: "mizoram",
    state: "Mizoram",
    capital: "Aizawl",
    displayName: "Mizoram (Aizawl)",
    headline: "Online Homeopathy Consultations in Mizoram",
    description: "Access specialized constitutional case taking from Aizawl without traveling interstate. Qualified practitioners provide personalized care and digital prescriptions directly on WhatsApp.",
    popularConditions: ["Respiratory Allergies", "Skin Dermatitis", "Digestive Care", "Joint Support"],
    faqs: [
      {
        q: "Can patients in Mizoram consult verified doctors online?",
        a: "Yes. Patients across Mizoram can book private video sessions with verified practitioners on VitaHomeo."
      },
      {
        q: "What is the consultation fee in Mizoram?",
        a: "The consultation fee is standardized at ₹999 for a thorough 30–40 minute evaluation."
      }
    ]
  },

  "nagaland": {
    slug: "nagaland",
    state: "Nagaland",
    capital: "Kohima",
    displayName: "Nagaland (Kohima)",
    headline: "Consult Verified Homeopathic Doctors Online in Nagaland",
    description: "Receive comprehensive constitutional case analysis from home in Kohima and Dimapur. Verified practitioners provide tailored guidance and official digital prescriptions on WhatsApp.",
    popularConditions: ["Cold Climate Respiratory Health", "Skin Allergies", "Digestive Issues", "Joint Discomfort"],
    faqs: [
      {
        q: "Are video consultations available in Nagaland?",
        a: "Yes. Patients from Kohima and across Nagaland can consult verified practitioners through our secure telemedicine platform."
      },
      {
        q: "What is the consultation fee in Nagaland?",
        a: "Consultation fees are standardized at ₹999 for a comprehensive 30–40 minute session."
      }
    ]
  },

  "sikkim": {
    slug: "sikkim",
    state: "Sikkim",
    capital: "Gangtok",
    displayName: "Sikkim (Gangtok)",
    headline: "Online Homeopathy Consultations in Sikkim",
    description: "Gangtok residents can receive individualized guidance for cold-weather arthritic discomfort and seasonal allergies through private video appointments from the comfort of home.",
    popularConditions: ["Cold Weather Allergies", "Joint Discomfort", "Digestive Health", "Skin Allergies"],
    faqs: [
      {
        q: "How can patients in Sikkim consult doctors online?",
        a: "Select your preferred slot on WhatsApp. Our care desk connects you with a verified specialist for a 30–40 minute video evaluation from home."
      },
      {
        q: "What is the consultation fee in Sikkim?",
        a: "The fee is standardized at ₹999 for an unhurried 30–40 minute constitutional video session."
      }
    ]
  },

  "tripura": {
    slug: "tripura",
    state: "Tripura",
    capital: "Agartala",
    displayName: "Tripura (Agartala)",
    headline: "Consult Verified Homeopathic Doctors Online in Tripura",
    description: "Access verified homeopathic doctors from home in Agartala and across Tripura via private video consultations.",
    popularConditions: ["Respiratory Health", "Skin Dermatitis", "Women's Health", "Digestive Care"],
    faqs: [
      {
        q: "Can Tripura patients consult verified doctors online?",
        a: "Yes. Patients across Agartala and Tripura can book private video appointments with verified practitioners."
      },
      {
        q: "What is the consultation fee in Tripura?",
        a: "The consultation fee is standardized at ₹999 for a comprehensive 30–40 minute constitutional video evaluation."
      }
    ]
  }
};

/**
 * Pure alphabetical list of all Indian States with their Capitals / Major T1 & T2 hubs.
 */
export const allLocationsList: LocationInfo[] = Object.values(locationsData).sort((a, b) =>
  a.displayName.localeCompare(b.displayName)
);
