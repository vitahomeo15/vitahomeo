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
 * Alphabetical registry of major Indian States with their Capitals / Major T1 & T2 hubs.
 * 100% focused on online telemedicine, video consultations, and digital prescriptions.
 */
export const locationsData: Record<string, LocationInfo> = {
  "andhra-pradesh": {
    slug: "andhra-pradesh",
    state: "Andhra Pradesh",
    capital: "Amaravati / Vijayawada",
    displayName: "Andhra Pradesh (Amaravati / Vijayawada)",
    headline: "Consult Verified Homeopathic Doctors Online in Andhra Pradesh",
    description: "Connect with certified homeopathic physicians registered with the Andhra Board for Homoeopathy. Receive personalized constitutional video consultations and official digital prescriptions on WhatsApp across Andhra Pradesh.",
    popularConditions: [
      "Women's Health & PCOS",
      "Pediatrics & Child Immunity",
      "Chronic Skin Allergies & Eczema",
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
        a: "Consultation fees are standardized at ₹999 for a comprehensive 30–40 minute constitutional video session."
      }
    ]
  },

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
        q: "What is the consultation fee?",
        a: "Consultations are standardized at ₹999."
      }
    ]
  },

  "bihar": {
    slug: "bihar",
    state: "Bihar",
    capital: "Patna",
    displayName: "Bihar (Patna)",
    headline: "Consult Verified Homeopathic Specialists Online in Bihar",
    description: "Consult registered practitioners with decades of clinical experience in Bihar. Thorough constitutional video evaluations and digital prescriptions for patients across Patna and all districts.",
    popularConditions: [
      "Chronic Eczema, Psoriasis & Vitiligo",
      "Migraines & Chronic Headaches",
      "Allergic Rhinitis & Asthma",
      "Joint Stiffness & Arthritis"
    ],
    faqs: [
      {
        q: "Who is the lead specialist available for Bihar patients?",
        a: "Dr. Arun Kumar (B.E.M.S. / M.B.E.H., Reg. No. 7979 with the Board of Electro Homoeopathic Medicine, Bihar) brings over 19 years of dedicated clinical experience in constitutional care."
      },
      {
        q: "How does the online consultation work?",
        a: "Book your appointment on WhatsApp, meet directly on a private video call, and receive your authorized digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee in Bihar?",
        a: "The consultation fee is standardized at ₹999."
      }
    ]
  },

  "chhattisgarh": {
    slug: "chhattisgarh",
    state: "Chhattisgarh",
    capital: "Raipur",
    displayName: "Chhattisgarh (Raipur)",
    headline: "Verified Online Homeopathic Doctor Consultation in Chhattisgarh",
    description: "Consult council-verified homeopathic physicians from home in Raipur, Bhilai, Bilaspur, and across Chhattisgarh via private video sessions.",
    popularConditions: [
      "Chronic Joint Pain & Rheumatism",
      "Skin Allergies & Eczema",
      "Respiratory Wellness",
      "PCOS & Lifestyle Endocrine Care"
    ],
    faqs: [
      {
        q: "How can patients in Chhattisgarh book an online consultation?",
        a: "Message our WhatsApp care coordinator to select an appointment slot. You will receive a secure video consultation link and instructions."
      },
      {
        q: "What is the consultation fee?",
        a: "A complete 30–40 minute constitutional consultation is ₹999."
      }
    ]
  },

  "delhi-ncr": {
    slug: "delhi-ncr",
    state: "Delhi NCR",
    capital: "New Delhi",
    displayName: "Delhi NCR (New Delhi)",
    headline: "Top Homeopathic Doctors Online Consultation in Delhi NCR",
    description: "Skip traffic and clinic waiting rooms across Delhi, Noida, and Gurugram. Consult verified homeopathic physicians online for pollution-related allergies, respiratory wellness, PCOS, and chronic skin conditions.",
    popularConditions: [
      "Pollution Allergies, Rhinitis & Sinusitis",
      "PCOS, Acne & Hormonal Imbalance",
      "Work Stress, Insomnia & Anxiety",
      "Pediatric Recurrent Coughs & Immunity"
    ],
    faqs: [
      {
        q: "How does online homeopathy consultation work for Delhi NCR residents?",
        a: "Book your preferred slot on WhatsApp, consult your verified doctor on a private 30–40 minute video call, and receive your digital prescription on WhatsApp."
      },
      {
        q: "What is the consultation fee for Delhi NCR?",
        a: "Consultations are standardized at ₹999."
      }
    ]
  },

  "goa": {
    slug: "goa",
    state: "Goa",
    capital: "Panaji",
    displayName: "Goa (Panaji)",
    headline: "Consult Verified Homeopathic Doctors Online in Goa",
    description: "Access experienced homeopathic physicians from home across North and South Goa. Individualized constitutional video consultations and digital prescriptions.",
    popularConditions: [
      "Humidity-Related Skin Rashes",
      "Digestive Health & Acid Peptic Discomfort",
      "Stress & Lifestyle Wellness",
      "Women's Hormonal Care"
    ],
    faqs: [
      {
        q: "Can Goa residents consult doctors online?",
        a: "Yes. Our doctors provide unhurried 30–40 minute video sessions with patient case review."
      },
      {
        q: "What is the consultation fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "gujarat": {
    slug: "gujarat",
    state: "Gujarat",
    capital: "Gandhinagar / Ahmedabad",
    displayName: "Gujarat (Gandhinagar / Ahmedabad)",
    headline: "Verified Online Homeopathic Doctor Consultation in Gujarat",
    description: "Connect with verified homeopathic physicians online from Ahmedabad, Gandhinagar, Surat, Vadodara, and across Gujarat. Confidential video consultations and digital prescriptions.",
    popularConditions: [
      "Digestive Disorders (GERD & IBS)",
      "PCOS & Thyroid Balance",
      "Chronic Skin Allergies & Vitiligo",
      "Joint & Musculoskeletal Health"
    ],
    faqs: [
      {
        q: "How do Gujarat patients book an online consultation?",
        a: "Select your preferred slot on WhatsApp, join a confidential video call, and receive your prescription immediately."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "haryana": {
    slug: "haryana",
    state: "Haryana",
    capital: "Chandigarh",
    displayName: "Haryana (Chandigarh / Gurugram)",
    headline: "Online Homeopathy Consultations for Patients in Haryana",
    description: "Expert constitutional homeopathic care accessible from Gurugram, Faridabad, Panipat, and across Haryana. Thorough video case taking and digital prescriptions.",
    popularConditions: [
      "Seasonal Allergies & Respiratory Health",
      "Lifestyle Stress & Sleep Issues",
      "Women's Hormonal Health",
      "Pediatric Care"
    ],
    faqs: [
      {
        q: "What is the fee for an online consultation in Haryana?",
        a: "The fee is standardized at ₹999."
      }
    ]
  },

  "himachal-pradesh": {
    slug: "himachal-pradesh",
    state: "Himachal Pradesh",
    capital: "Shimla",
    displayName: "Himachal Pradesh (Shimla)",
    headline: "Consult Verified Homeopathic Doctors Online in Himachal Pradesh",
    description: "Skip hill travel to consult verified homeopathic specialists from home in Shimla, Dharamshala, Mandi, and across Himachal Pradesh.",
    popularConditions: [
      "Chronic Joint Pain & Rheumatism",
      "Cold Weather Respiratory Allergies",
      "Sinusitis & Chronic Headaches",
      "Digestive Health"
    ],
    faqs: [
      {
        q: "How do video consultations work in Himachal Pradesh?",
        a: "Connect via WhatsApp video from anywhere with mobile internet. Receive a digital prescription directly on WhatsApp."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "jharkhand": {
    slug: "jharkhand",
    state: "Jharkhand",
    capital: "Ranchi",
    displayName: "Jharkhand (Ranchi / Jamshedpur)",
    headline: "Consult Verified Homeopathy Specialists Online in Jharkhand",
    description: "Access experienced constitutional homeopathic doctors from home in Ranchi, Jamshedpur, Dhanbad, and across Jharkhand. Unhurried video consultations and digital prescriptions.",
    popularConditions: [
      "Chronic Skin Conditions & Eczema",
      "Joint Stiffness & Arthritis",
      "Respiratory Allergies",
      "Migraines & Stress"
    ],
    faqs: [
      {
        q: "How can Jharkhand patients book an appointment?",
        a: "Book via WhatsApp. A 30–40 minute private video consult is arranged at your chosen time."
      },
      {
        q: "What is the consultation charge?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "karnataka": {
    slug: "karnataka",
    state: "Karnataka",
    capital: "Bengaluru",
    displayName: "Karnataka (Bengaluru)",
    headline: "Top Homeopathic Doctors Online Consultation in Karnataka",
    description: "Evidence-informed constitutional homeopathy for Bengaluru, Mysuru, Hubballi, and families across Karnataka. Consult verified physicians via private video calls for chronic allergies, stress, PCOS, and pediatric wellness.",
    popularConditions: [
      "Dust & Pollen Allergies",
      "PCOS & Hormonal Irregularities",
      "Work Stress, Insomnia & Anxiety",
      "Pediatric Recurrent Infections"
    ],
    faqs: [
      {
        q: "How does telemedicine work for Karnataka patients?",
        a: "You select a slot on WhatsApp, meet your specialist on a private video call, and receive an authorized digital prescription."
      },
      {
        q: "What is the fee for an online consultation?",
        a: "The fee is standardized at ₹999."
      }
    ]
  },

  "kerala": {
    slug: "kerala",
    state: "Kerala",
    capital: "Thiruvananthapuram / Kochi",
    displayName: "Kerala (Thiruvananthapuram / Kochi)",
    headline: "Online Homeopathy Consultations for Patients in Kerala",
    description: "Connect with verified homeopathic physicians from Kochi, Thiruvananthapuram, Kozhikode, and across Kerala for holistic, constitutional wellness via video consultation.",
    popularConditions: [
      "Allergic Rhinitis & Asthma",
      "Skin Allergies & Eczema",
      "Women's Endocrine Health",
      "Digestive Health"
    ],
    faqs: [
      {
        q: "Can Kerala patients consult VitaHomeo doctors online?",
        a: "Yes. Our doctors conduct thorough 30–40 minute video sessions with case taking."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "madhya-pradesh": {
    slug: "madhya-pradesh",
    state: "Madhya Pradesh",
    capital: "Bhopal / Indore",
    displayName: "Madhya Pradesh (Bhopal / Indore)",
    headline: "Consult Verified Homeopathic Doctors Online in Madhya Pradesh",
    description: "Comprehensive constitutional homeopathic care for families in Bhopal, Indore, Jabalpur, Gwalior, and across Madhya Pradesh via secure video consultation.",
    popularConditions: [
      "Chronic Skin Conditions (Psoriasis, Vitiligo)",
      "Digestive & Acidity Issues",
      "Joint Pain & Arthritis",
      "PCOS & Women's Health"
    ],
    faqs: [
      {
        q: "How to book an online appointment from MP?",
        a: "Connect on WhatsApp to select your slot. Receive a video call link and a digital prescription."
      },
      {
        q: "What is the consultation fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "maharashtra": {
    slug: "maharashtra",
    state: "Maharashtra",
    capital: "Mumbai / Pune",
    displayName: "Maharashtra (Mumbai / Pune)",
    headline: "Top Homeopathic Doctors Online Consultation in Maharashtra",
    description: "Convenient constitutional homeopathy for busy residents of Mumbai, Pune, Nagpur, Nashik, and across Maharashtra. Consult verified specialists without commuting, with digital prescriptions on WhatsApp.",
    popularConditions: [
      "Lifestyle Stress, Insomnia & Anxiety",
      "PCOS, Hair Fall & Hormonal Health",
      "Skin Allergies & Eczema",
      "GERD, IBS & Digestive Health"
    ],
    faqs: [
      {
        q: "Why choose an online homeopathy consultation in Maharashtra?",
        a: "Save hours of city traffic. Consult experienced doctors from home and receive an official digital prescription."
      },
      {
        q: "What is the consultation fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "odisha": {
    slug: "odisha",
    state: "Odisha",
    capital: "Bhubaneswar",
    displayName: "Odisha (Bhubaneswar / Cuttack)",
    headline: "Consult Verified Homeopathic Doctors Online in Odisha",
    description: "Access verified homeopathic physicians online across Bhubaneswar, Cuttack, Rourkela, and all districts of Odisha for chronic disease care.",
    popularConditions: [
      "Chronic Skin Diseases",
      "Digestive Complaints",
      "Respiratory Allergies",
      "Joint & Musculoskeletal Pain"
    ],
    faqs: [
      {
        q: "Can Odisha patients consult via video call?",
        a: "Yes. Thorough 30–40 minute constitutional video evaluations are conducted via WhatsApp or Google Meet."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "punjab": {
    slug: "punjab",
    state: "Punjab",
    capital: "Chandigarh / Ludhiana",
    displayName: "Punjab (Chandigarh / Ludhiana)",
    headline: "Verified Online Homeopathic Doctor Consultation in Punjab",
    description: "Connect with verified homeopathic physicians online from Ludhiana, Amritsar, Jalandhar, Patiala, and across Punjab for constitutional health management.",
    popularConditions: [
      "Joint Pain & Arthritis",
      "Digestive & Metabolic Wellness",
      "Skin Allergies & Dermatitis",
      "PCOS & Hormonal Care"
    ],
    faqs: [
      {
        q: "How does the online consultation work for Punjab patients?",
        a: "Book your appointment on WhatsApp, meet on a private video call, and receive your digital prescription directly."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "rajasthan": {
    slug: "rajasthan",
    state: "Rajasthan",
    capital: "Jaipur",
    displayName: "Rajasthan (Jaipur / Jodhpur)",
    headline: "Consult Verified Homeopathy Specialists Online in Rajasthan",
    description: "Access experienced homeopathic specialists from the comfort of your home in Jaipur, Jodhpur, Udaipur, Kota, and across Rajasthan. Thorough video evaluations and digital prescriptions.",
    popularConditions: [
      "Skin Allergies & Dryness",
      "Migraines & Chronic Headaches",
      "PCOS & Women's Health",
      "Joint Stiffness & Senior Wellness"
    ],
    faqs: [
      {
        q: "Can Rajasthan patients consult verified doctors online?",
        a: "Yes. Our telemedicine service connects you directly with verified practitioners."
      },
      {
        q: "What is the consultation fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "tamil-nadu": {
    slug: "tamil-nadu",
    state: "Tamil Nadu",
    capital: "Chennai",
    displayName: "Tamil Nadu (Chennai / Coimbatore)",
    headline: "Top Homeopathic Doctors Online Consultation in Tamil Nadu",
    description: "Expert constitutional homeopathic care accessible from Chennai, Coimbatore, Madurai, Tiruchirappalli, and across Tamil Nadu via confidential video sessions.",
    popularConditions: [
      "Humidity-Induced Skin Allergies",
      "Sinusitis & Allergic Rhinitis",
      "Women's Hormonal Health & PCOS",
      "Digestive Health & Acidity"
    ],
    faqs: [
      {
        q: "How to book an appointment from Tamil Nadu?",
        a: "Message our WhatsApp desk to select your slot. Receive a video call link and your digital prescription."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "telangana": {
    slug: "telangana",
    state: "Telangana",
    capital: "Hyderabad",
    displayName: "Telangana (Hyderabad)",
    headline: "Top Homeopathic Doctors Online Consultation in Telangana",
    description: "Connect with verified homeopathic physicians online across Hyderabad, Warangal, Nizamabad, and Telangana. In-depth constitutional video consultations and official digital prescriptions on WhatsApp.",
    popularConditions: [
      "Work Stress, Insomnia & Burnout",
      "PCOS, Acne & Hormonal Irregularities",
      "Dust & Seasonal Allergic Rhinitis",
      "Hair Thinning & Scalp Health"
    ],
    faqs: [
      {
        q: "Why choose an online homeopathy consultation in Telangana?",
        a: "Consult verified specialists from home without traveling or waiting in queues. Receive a personalized digital prescription."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "uttar-pradesh": {
    slug: "uttar-pradesh",
    state: "Uttar Pradesh",
    capital: "Lucknow",
    displayName: "Uttar Pradesh (Lucknow / Kanpur)",
    headline: "Consult Verified Homeopathy Specialists Online in Uttar Pradesh",
    description: "Individualized constitutional homeopathy for Lucknow, Kanpur, Varanasi, Agra, Prayagraj, and families across Uttar Pradesh via secure video consultation.",
    popularConditions: [
      "Chronic Joint Pain & Arthritis",
      "Seasonal Respiratory Allergies",
      "Digestive Health & Acidity",
      "Women's Hormonal Care"
    ],
    faqs: [
      {
        q: "How do UP patients connect with VitaHomeo doctors?",
        a: "Book on WhatsApp, complete your 30–40 minute video consult, and receive an authorized digital prescription."
      },
      {
        q: "What is the consultation fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "uttarakhand": {
    slug: "uttarakhand",
    state: "Uttarakhand",
    capital: "Dehradun",
    displayName: "Uttarakhand (Dehradun / Haridwar)",
    headline: "Consult Verified Homeopathic Doctors Online in Uttarakhand",
    description: "Consult registered homeopathic doctors from home in Dehradun, Haridwar, Haldwani, Roorkee, and across Uttarakhand via private video appointments.",
    popularConditions: [
      "Cold & Weather Change Allergies",
      "Joint Pain & Arthritis",
      "Sinusitis & Respiratory Health",
      "Digestive Health"
    ],
    faqs: [
      {
        q: "How can patients in Uttarakhand consult online?",
        a: "Connect via WhatsApp video from anywhere in Uttarakhand and receive an official digital prescription."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  "west-bengal": {
    slug: "west-bengal",
    state: "West Bengal",
    capital: "Kolkata",
    displayName: "West Bengal (Kolkata / Howrah)",
    headline: "Top Homeopathic Doctors Online Consultation in West Bengal",
    description: "Evidence-informed constitutional homeopathy for residents of Kolkata, Howrah, Siliguri, Asansol, and across West Bengal. Consult council-verified specialists via secure video calls.",
    popularConditions: [
      "Chronic Respiratory Allergies & Asthma",
      "Eczema & Dermatological Disorders",
      "Digestive Health (IBS, Acidity)",
      "Pediatric Care & Immunity"
    ],
    faqs: [
      {
        q: "Why book an online consultation in West Bengal?",
        a: "Access verified specialists with unhurried 30–40 minute video case taking, without travel or clinic waiting."
      },
      {
        q: "What is the fee?",
        a: "Standardized at ₹999."
      }
    ]
  },

  // Remaining Indian States with their Capitals in Alphabetical Order:
  "arunachal-pradesh": {
    slug: "arunachal-pradesh",
    state: "Arunachal Pradesh",
    capital: "Itanagar",
    displayName: "Arunachal Pradesh (Itanagar)",
    headline: "Online Homeopathy Consultations in Arunachal Pradesh",
    description: "Connect with verified homeopathic physicians online from Itanagar, Naharlagun, and across Arunachal Pradesh. Video consultations with authorized digital prescriptions.",
    popularConditions: ["Respiratory Health", "Chronic Joint Discomfort", "Digestive Care", "Skin Allergies"],
    faqs: [{ q: "What is the fee for an online consultation?", a: "Standardized at ₹999." }]
  },

  "manipur": {
    slug: "manipur",
    state: "Manipur",
    capital: "Imphal",
    displayName: "Manipur (Imphal)",
    headline: "Online Homeopathy Consultations for Patients in Manipur",
    description: "Access verified homeopathic specialists from home in Imphal and across Manipur. Confidential video consultations and digital prescriptions.",
    popularConditions: ["Skin Conditions", "Digestive Health", "Women's Health", "Respiratory Allergies"],
    faqs: [{ q: "What is the fee?", a: "Standardized at ₹999." }]
  },

  "meghalaya": {
    slug: "meghalaya",
    state: "Meghalaya",
    capital: "Shillong",
    displayName: "Meghalaya (Shillong)",
    headline: "Consult Verified Homeopathic Doctors Online in Meghalaya",
    description: "Consult registered homeopathic doctors from home in Shillong and across Meghalaya via private video appointments.",
    popularConditions: ["Respiratory Allergies", "Skin Conditions", "Joint Pain", "Digestive Care"],
    faqs: [{ q: "What is the fee?", a: "Standardized at ₹999." }]
  },

  "mizoram": {
    slug: "mizoram",
    state: "Mizoram",
    capital: "Aizawl",
    displayName: "Mizoram (Aizawl)",
    headline: "Online Homeopathy Consultations for Patients in Mizoram",
    description: "Access verified homeopathic specialists from home in Aizawl and across Mizoram via secure video consultations.",
    popularConditions: ["Digestive Disorders", "Respiratory Care", "Skin Rashes", "Women's Health"],
    faqs: [{ q: "What is the fee?", a: "Standardized at ₹999." }]
  },

  "nagaland": {
    slug: "nagaland",
    state: "Nagaland",
    capital: "Kohima",
    displayName: "Nagaland (Kohima / Dimapur)",
    headline: "Consult Verified Homeopathic Doctors Online in Nagaland",
    description: "Consult registered homeopathic physicians from home in Kohima, Dimapur, and across Nagaland via video appointments.",
    popularConditions: ["Joint Pain", "Respiratory Wellness", "Skin Health", "Digestive Care"],
    faqs: [{ q: "What is the fee?", a: "Standardized at ₹999." }]
  },

  "sikkim": {
    slug: "sikkim",
    state: "Sikkim",
    capital: "Gangtok",
    displayName: "Sikkim (Gangtok)",
    headline: "Online Homeopathy Consultations in Sikkim",
    description: "Connect with verified homeopathic physicians online from Gangtok and across Sikkim. Confidential video consultations and digital prescriptions.",
    popularConditions: ["Cold Weather Allergies", "Joint Discomfort", "Digestive Health", "Skin Allergies"],
    faqs: [{ q: "What is the fee?", a: "Standardized at ₹999." }]
  },

  "tripura": {
    slug: "tripura",
    state: "Tripura",
    capital: "Agartala",
    displayName: "Tripura (Agartala)",
    headline: "Consult Verified Homeopathic Doctors Online in Tripura",
    description: "Access verified homeopathic doctors from home in Agartala and across Tripura via private video consultations.",
    popularConditions: ["Respiratory Health", "Skin Dermatitis", "Women's Health", "Digestive Care"],
    faqs: [{ q: "What is the fee?", a: "Standardized at ₹999." }]
  }
};

/**
 * Pure alphabetical list of all Indian States with their Capitals / Major T1 & T2 hubs.
 */
export const allLocationsList: LocationInfo[] = Object.values(locationsData).sort((a, b) =>
  a.displayName.localeCompare(b.displayName)
);
