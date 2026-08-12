export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedCondition {
  name: string;
  slug: string;
}

export interface ConditionInfo {
  title: string;
  symptoms: string[];
  causes: string[];
  whenToSee: string;
  howHelps: string;
  approach: string[];
  duration: string;
  faqs: FAQ[];
  related: RelatedCondition[];
}

export const treatmentsData: Record<string, ConditionInfo> = {
  "diabetes-support": {
    title: "Diabetes Support",
    symptoms: [
      "Frequent urination, especially at night",
      "Increased thirst and hunger levels",
      "Unexplained weight fluctuations",
      "Slow healing of cuts or bruises"
    ],
    causes: [
      "Insulin resistance or inadequate insulin production",
      "Pancreatic beta-cell function changes",
      "Genetic predisposition and metabolic imbalances",
      "Chronic lifestyle and dietary factors"
    ],
    whenToSee: "Consult a qualified medical practitioner if you experience constant fatigue, recurrent skin infections, slow wound healing, or elevated fasting blood glucose levels.",
    howHelps: "Homeopathy acts as a supportive constitutional therapy. It targets pancreatic wellness, assists cellular response to insulin, and manages associated symptoms like diabetic neuropathy naturally.",
    approach: [
      "Comprehensive evaluation of family history and metabolic markers.",
      "Custom constitutional remedies supporting pancreatic gland health.",
      "Dietary and stress-reduction guidelines alongside treatment."
    ],
    duration: "Typically 6 to 12 months, monitored with periodic HbA1c panels.",
    faqs: [
      { q: "Can I stop my regular insulin/metformin?", a: "No. Homeopathic remedies are introduced as a supportive therapy. Safe reduction of conventional medicine is only done under the supervision of your primary physician as your HbA1c levels stabilize." },
      { q: "Does homeopathy prevent diabetic complications?", a: "Yes, constitutional care supports vascular integrity and nerve health, reducing the susceptibility to neuropathies and microvascular complications." }
    ],
    related: [
      { name: "Hypertension", slug: "hypertension" },
      { name: "Thyroid Disorders", slug: "thyroid-disorders" }
    ]
  },
  "hypertension": {
    title: "Hypertension",
    symptoms: [
      "Frequent headaches, especially in the morning",
      "Dizziness or lightheadedness",
      "Occasional palpitations or chest tightness",
      "Shortness of breath during mild exertion"
    ],
    causes: [
      "Vascular resistance and arterial stiffness",
      "Chronic stress and nervous system hyper-arousal",
      "Genetic factors and family history",
      "Excessive sodium intake and metabolic sluggishness"
    ],
    whenToSee: "Consult a specialist if blood pressure readings remain consistently above 140/90 mmHg, or if you experience severe headaches, vision changes, or chest pain.",
    howHelps: "Homeopathic care targets vascular elasticity and calms nervous system triggers. By addressing emotional stressors and constitutional variables, it supports the natural regulation of arterial pressure.",
    approach: [
      "Stress triggers mapping and neurovascular evaluation.",
      "Constitutional remedies targeted at vascular health.",
      "Heart-healthy lifestyle and salt-restriction tracking."
    ],
    duration: "Normally 3 to 6 months of systematic treatment to see stabilized pressure metrics.",
    faqs: [
      { q: "Can homeopathy replace conventional BP tablets?", a: "Constitutional remedies can be taken alongside conventional BP tablets. Gradually, as BP levels stabilize, your physician can assess safe dosage adjustments." },
      { q: "How does stress link to hypertension in homeopathy?", a: "Homeopathy views emotional stressors as a major trigger for arterial tightening. Remedies are chosen to moderate the nervous system's response to stress." }
    ],
    related: [
      { name: "Diabetes Support", slug: "diabetes-support" },
      { name: "Stress & Burnout", slug: "stress-burnout" }
    ]
  },
  "arthritis": {
    title: "Arthritis Care",
    symptoms: [
      "Joint pain, swelling, and stiffness",
      "Morning stiffness lasting more than 30 minutes",
      "Reduced range of motion in affected joints",
      "Warmth and redness around joints"
    ],
    causes: [
      "Cartilage wear and tear (Osteoarthritis)",
      "Autoimmune joint lining attacks (Rheumatoid)",
      "Uric acid crystal deposition (Gout)",
      "Systemic joint inflammation"
    ],
    whenToSee: "Consult a doctor if joint swelling persists, morning stiffness interferes with mobility, or joint pain is accompanied by fever.",
    howHelps: "Homeopathy focuses on reducing joint synovial inflammation and slowing down cartilage degeneration. It acts as a safe, long-term pain modulator without gastrointestinal side effects.",
    approach: [
      "Detailed joint mobility and autoimmune panel assessment.",
      "Remedies targeting joint lubrication and cartilage health.",
      "Anti-inflammatory diet and light mobility exercises."
    ],
    duration: "Normally 4 to 9 months for chronic arthritic stiffness.",
    faqs: [
      { q: "Is homeopathy effective for Rheumatoid Arthritis?", a: "Yes. Homeopathy addresses the autoimmune root cause, helping to regulate immune response and alleviate joint pain and swelling." },
      { q: "Does cold weather worsen joint pain?", a: "Yes, changes in barometric pressure can trigger pain. Homeopathy maps these environmental sensitivities to select specific remedies." }
    ],
    related: [
      { name: "Joint Pain General", slug: "joint-pain-general" },
      { name: "Senior General Wellness", slug: "senior-general-wellness" }
    ]
  },
  "recurrent-infections": {
    title: "Recurrent Infections",
    symptoms: [
      "Frequent colds, coughs, and throat infections",
      "Slow recovery from seasonal fevers",
      "Recurrent ear or sinus blockages",
      "Persistent fatigue and weakness"
    ],
    causes: [
      "Under-active immune cell response",
      "Chronic exposure to environmental allergens",
      "Nutritional deficiencies and poor digestive absorption",
      "Incomplete recovery from past viral loads"
    ],
    whenToSee: "Consult if your child experiences more than 6 respiratory infections a year, or requires repeated rounds of antibiotics.",
    howHelps: "Homeopathy acts as an immunomodulator. Rather than simply suppressing fevers, it strengthens the child's natural mucosal and systemic defense mechanisms.",
    approach: [
      "Immunological history mapping and constitutional assessment.",
      "Remedies targeted at bronchial and lymphatic health.",
      "Nutrition advice to support gut immunity."
    ],
    duration: "Usually 3 to 6 months to see a noticeable drop in infection frequency.",
    faqs: [
      { q: "Are homeopathic medicines safe for infants?", a: "Yes. Homeopathic dilutions are prepared in micro-quantities, making them extremely gentle and safe for infants and toddlers." },
      { q: "Does it help reduce antibiotic reliance?", a: "Yes. By building core immune defense, children naturally fight off viral infections without requiring antibiotics for secondary issues." }
    ],
    related: [
      { name: "Child Allergies", slug: "child-allergies" },
      { name: "Growth & Development", slug: "growth-development" }
    ]
  },
  "behavioural-concerns": {
    title: "Behavioral Concerns",
    symptoms: [
      "Extreme irritability or temper tantrums",
      "Difficulty focusing or hyperactive behavior",
      "Social withdrawal or separation anxiety",
      "Stubbornness and resistance to routines"
    ],
    causes: [
      "Sensory processing differences",
      "Environmental stressors and emotional triggers",
      "Neurodevelopmental variables",
      "Constitutional temperament factors"
    ],
    whenToSee: "Consult a practitioner if behavioral outbursts interfere with school progress, family relationships, or show signs of developmental regression.",
    howHelps: "Homeopathy addresses the child's neuro-emotional temperament. Remedies are selected based on physical traits and emotional triggers to restore calm and cognitive focus naturally.",
    approach: [
      "Detailed psychological and behavioral case mapping.",
      "Constitutional remedies supporting emotional self-regulation.",
      "Gentle parent-child routine counseling."
    ],
    duration: "Usually 4 to 8 months of supportive care.",
    faqs: [
      { q: "Do these medicines cause drowsiness?", a: "No. Homeopathic remedies do not contain sedatives or stimulants. They support natural cognitive balance without altering alert levels." },
      { q: "Can it be taken alongside behavioral therapy?", a: "Yes. Homeopathy works in synergy with speech, behavioral, or occupational therapies." }
    ],
    related: [
      { name: "Growth & Development", slug: "growth-development" },
      { name: "Sleep Disorders", slug: "sleep-disorders" }
    ]
  },
  "growth-development": {
    title: "Growth & Development",
    symptoms: [
      "Poor appetite and refusal to eat healthy foods",
      "Delayed physical growth milestones (height, weight)",
      "Slow dentition (delayed baby teeth)",
      "Low muscle tone or general weakness"
    ],
    causes: [
      "Malabsorption of vital nutrients in the gut",
      "Endocrine and growth hormone regulatory factors",
      "Genetic development patterns",
      "Chronic systemic illness history"
    ],
    whenToSee: "See a pediatric specialist if height or weight percentiles drop consistently, or if developmental milestones are delayed.",
    howHelps: "Homeopathy works by improving intestinal nutrient absorption and stimulating metabolic functions to assist growth stages.",
    approach: [
      "Metabolic rate tracking and case review.",
      "Remedies to optimize bone density and digestive assimilation.",
      "Age-appropriate nutritional guidance."
    ],
    duration: "6 to 12 months, tracking growth charts.",
    faqs: [
      { q: "Can homeopathy increase height?", a: "Homeopathy supports the child's natural genetic height potential by resolving underlying assimilation issues. It cannot bypass genetic limits." },
      { q: "How does it improve poor appetite?", a: "Remedies regulate hepatic (liver) and stomach secretions, leading to a healthy, natural appetite." }
    ],
    related: [
      { name: "Recurrent Infections", slug: "recurrent-infections" },
      { name: "Child Allergies", slug: "child-allergies" }
    ]
  },
  "child-allergies": {
    title: "Child Allergies",
    symptoms: [
      "Frequent sneezing, runny nose, itchy watery eyes",
      "Skin rashes, hives, or dry eczema patches",
      "Wheezing or chronic nighttime dry coughs",
      "Digestive sensitivity after specific foods"
    ],
    causes: [
      "Immune system hypersensitivity to pollen, dust, or dander",
      "Genetic predisposition to atopic conditions",
      "Weak mucosal barrier defense",
      "Early environmental allergen exposure"
    ],
    whenToSee: "Consult if allergy flares lead to frequent missed school days, require constant antihistamine usage, or progress to wheezing.",
    howHelps: "Homeopathic desensitization targets the immune system's hyper-reactivity, lowering sensitivity to dust, pollen, and foods.",
    approach: [
      "Atopic history mapping and trigger tracking.",
      "Allergen desensitization dilutions.",
      "Immune-supportive diet guidelines."
    ],
    duration: "Typically 3 to 6 months of constitutional treatment.",
    faqs: [
      { q: "Does this treatment provide long-term relief?", a: "Successful constitutional support aims to lower sensitivity and improve long-term resilience to common environmental allergens." },
      { q: "Does it treat milk or food allergies?", a: "It can help reduce the severity of mild food sensitivities, but severe anaphylactic allergies require emergency protocols." }
    ],
    related: [
      { name: "Recurrent Infections", slug: "recurrent-infections" },
      { name: "Eczema", slug: "eczema" }
    ]
  },
  "anxiety": {
    title: "Anxiety",
    symptoms: [
      "Persistent worry, restlessness, and nervous tension",
      "Palpitations or rapid heart rate during stress",
      "Frequent sleep disturbances or over-thinking",
      "Physical symptoms like cold sweats or stomach cramps"
    ],
    causes: [
      "Neurotransmitter regulation changes",
      "Chronic lifestyle and work stressors",
      "Genetic predisposition to nervous sensitivity",
      "Unresolved emotional trauma"
    ],
    whenToSee: "Consult if anxiety attacks prevent social interactions, cause regular physical symptoms, or affect your work performance.",
    howHelps: "Homeopathy recognizes the mind-body connection. Remedies are selected to calm hyper-active adrenal response and balance neuro-emotional triggers naturally.",
    approach: [
      "Comprehensive emotional case taking.",
      "Constitutional remedies supporting nervous system resilience.",
      "Supportive breathing and stress management advice."
    ],
    duration: "Usually 3 to 6 months.",
    faqs: [
      { q: "Are these medicines habit-forming?", a: "No. Homeopathic remedies do not cause dependency or withdrawal symptoms, making them safe for long-term emotional support." },
      { q: "How soon can I expect results?", a: "Many patients report a sense of calmness within 3 to 4 weeks of starting custom constitutional care." }
    ],
    related: [
      { name: "Depression Support", slug: "depression" },
      { name: "Sleep Disorders", slug: "sleep-disorders" }
    ]
  },
  "depression": {
    title: "Depression Support",
    symptoms: [
      "Persistent low mood, sadness, or emptiness",
      "Loss of interest in daily hobbies and activities",
      "Chronic fatigue and low energy levels",
      "Feelings of hopelessness or worthlessness"
    ],
    causes: [
      "Monoamine pathway imbalances",
      "Significant life setbacks or chronic stress",
      "Genetic predisposition",
      "Somatic health conditions causing mood changes"
    ],
    whenToSee: "Consult a mental health professional or primary care provider if low mood persists daily for over 2 weeks or disrupts basic functioning.",
    howHelps: "Homeopathy provides supportive neuro-emotional balancing. By mapping your specific mental state (apathy, grief, anger), remedies stimulate natural vitality.",
    approach: [
      "Detailed mapping of emotional phases.",
      "Constitutional remedies addressing systemic vitality.",
      "Supportive therapy alignment recommendations."
    ],
    duration: "Typically 4 to 8 months of constitutional care.",
    faqs: [
      { q: "Can I take this with anti-depressants?", a: "Yes. Homeopathy does not interfere with conventional psychiatric medicines. Any tapering of conventional medicine must be managed by your psychiatrist." },
      { q: "Does homeopathy treat clinical depression?", a: "Yes, it acts as a valuable supportive therapy to help improve mood stability, sleep quality, and general energy levels." }
    ],
    related: [
      { name: "Anxiety", slug: "anxiety" },
      { name: "Sleep Disorders", slug: "sleep-disorders" }
    ]
  },
  "stress-burnout": {
    title: "Stress & Burnout",
    symptoms: [
      "Chronic exhaustion not relieved by sleep",
      "Irritability, brain fog, and low concentration",
      "Frequent tension headaches or muscle stiffness",
      "Weakened immunity leading to regular illnesses"
    ],
    causes: [
      "Adrenal fatigue from prolonged work strain",
      "Lack of restorative sleep cycles",
      "Poor work-life balance and lifestyle stressors",
      "Constitutional stress tolerance levels"
    ],
    whenToSee: "Consult if burnout symptoms lead to chronic cognitive fatigue, impact memory, or cause physical symptoms like heart palpitations.",
    howHelps: "Homeopathy targets the endocrine stress response, helping to rebuild nervous system stamina and restore restful sleep patterns.",
    approach: [
      "Adrenal strain analysis and lifestyle review.",
      "Remedies to optimize nervous vitality and focus.",
      "Restorative sleep hygiene guidance."
    ],
    duration: "2 to 4 months of constitutional care.",
    faqs: [
      { q: "How does homeopathy relieve brain fog?", a: "By improving sleep quality and moderating cortisol levels, remedies support cognitive clarity and mental energy." },
      { q: "Do the remedies contain hormones?", a: "No. Remedies use natural micro-dilutions to stimulate your endocrine system to balance itself." }
    ],
    related: [
      { name: "Anxiety", slug: "anxiety" },
      { name: "Sleep Disorders", slug: "sleep-disorders" }
    ]
  },
  "sleep-disorders": {
    title: "Sleep Disorders",
    symptoms: [
      "Difficulty falling asleep (onset insomnia)",
      "Frequent night waking or light sleep",
      "Waking up feeling tired and unrefreshed",
      "Racing thoughts when lying in bed"
    ],
    causes: [
      "Circadian rhythm disruptions",
      "Chronic stress and autonomic nervous system hyper-arousal",
      "High blue-light exposure or late caffeine",
      "Underlying physical discomfort or breathing issues"
    ],
    whenToSee: "See a doctor if poor sleep persists for over a month, causes daytime sleepiness, or affects cardiovascular health metrics.",
    howHelps: "Homeopathic remedies soothe the autonomic nervous system to ease the body into natural, restorative sleep without chemical dependency.",
    approach: [
      "Circadian routine mapping and case analysis.",
      "Remedies targeting nervous relaxation.",
      "Wind-down routine and dietary advice."
    ],
    duration: "Normally 2 to 4 months.",
    faqs: [
      { q: "Will I get addicted to sleep remedies?", a: "No. Homeopathic remedies do not contain sedative chemicals. They work by soothing your nervous system to allow natural sleep." },
      { q: "Can children take sleep remedies?", a: "Yes. They are safe for children experiencing nightmares or night terrors." }
    ],
    related: [
      { name: "Stress & Burnout", slug: "stress-burnout" },
      { name: "Anxiety", slug: "anxiety" }
    ]
  },
  "eczema": {
    title: "Eczema",
    symptoms: [
      "Dry, red, extremely itchy skin patches",
      "Blistering, cracking, or scaling of skin",
      "Thickened or leathery patches",
      "Inflammation typically on hands, neck, face, and inner elbows"
    ],
    causes: [
      "Genetic predisposition and familial allergy history",
      "Weakened skin barrier function letting moisture escape",
      "Immune system hyper-responsiveness to environmental triggers",
      "Chronic systemic inflammation and gut dysbiosis"
    ],
    whenToSee: "Consult a doctor if the skin itching prevents sleep or daily activities, signs of secondary infection (pus or crusting) develop, or symptoms worsen despite topical steroid creams.",
    howHelps: "Homeopathy treats eczema as an internal immune hyper-responsiveness. Rather than suppressing outer eruptions with steroids, it corrects the underlying immune triggers for long-term barrier repair.",
    approach: [
      "Thorough constitutional case-taking to understand individual allergy history.",
      "Custom micro-dilutions to soothe inflammation without suppression.",
      "Guidance on barrier protection and trigger elimination."
    ],
    duration: "Typically 3 to 6 months of constitutional treatment is required for sustainable skin healing.",
    faqs: [
      { q: "How does homeopathy support eczema management?", a: "Homeopathy aims to manage symptoms and support long-term remission phases by helping modulate the body's over-active immune response." },
      { q: "Is there a specific diet I should follow?", a: "Identifying food triggers is key. Decreasing dairy, gluten, and refined sugar often supports recovery alongside constitutional remedies." }
    ],
    related: [
      { name: "Psoriasis", slug: "psoriasis" },
      { name: "Acne", slug: "acne" }
    ]
  },
  "psoriasis": {
    title: "Psoriasis",
    symptoms: [
      "Red skin patches covered with thick, silvery scales",
      "Dry, cracked skin that may bleed or itch",
      "Stiff, swollen, or painful joints (psoriatic arthritis)",
      "Pitted or thickened fingernails"
    ],
    causes: [
      "Accelerated skin cell production cycle",
      "Autoimmune T-cell hyper-responsiveness",
      "Genetic immune system variables",
      "Triggers like stress, skin injuries, or infections"
    ],
    whenToSee: "Consult if scales spread rapidly, joint pain starts to develop, or skin lesions become painful or infected.",
    howHelps: "Homeopathy addresses the autoimmune component of psoriasis. It helps modulate the immune response to slow down rapid skin cell turn-over.",
    approach: [
      "Detailed autoimmune and joint pain assessment.",
      "Remedies designed to reduce cellular turnover and scaling.",
      "Stress management protocols since stress triggers flares."
    ],
    duration: "4 to 8 months of constitutional care.",
    faqs: [
      { q: "How is homeopathy different from topical creams?", a: "Topical creams only hydrate or temporarily suppress scaling. Homeopathy works internally to regulate the autoimmune cell cycle." },
      { q: "Does diet impact psoriasis?", a: "Yes. An anti-inflammatory diet helps reduce skin redness and scaling." }
    ],
    related: [
      { name: "Eczema", slug: "eczema" },
      { name: "Arthritis Care", slug: "arthritis" }
    ]
  },
  "acne": {
    title: "Acne",
    symptoms: [
      "Persistent blackheads, whiteheads, or pimples",
      "Painful red nodules or cystic lesions",
      "Inflammation and redness on face, chest, or back",
      "Skin scarring or dark marks post-acne"
    ],
    causes: [
      "Excess sebum (oil) production",
      "Hormonal imbalances (excess androgens)",
      "Bacterial accumulation (C. acnes) in follicles",
      "Chronic gut inflammation and poor digestive health"
    ],
    whenToSee: "Consult if acne is painful, cystic, causes permanent scarring, or does not respond to standard OTC face washes.",
    howHelps: "Homeopathy regulates oil gland activity, balances hormonal fluctuations, and supports liver detoxification to clear skin from the inside.",
    approach: [
      "Hormonal and digestive assessment.",
      "Constitutional remedies targeting sebum regulation.",
      "Guidance on skin care routines and gut health."
    ],
    duration: "2 to 4 months of systematic treatment.",
    faqs: [
      { q: "Does homeopathy treat hormonal acne?", a: "Yes. By targeting endocrine imbalances, it is highly effective for cyclic acne flares in women." },
      { q: "Will remedies cause initial skin purging?", a: "Occasionally, a mild temporary increase in skin activity occurs as toxins clear, followed by steady improvement." }
    ],
    related: [
      { name: "PCOS / PCOD", slug: "pcos-pcod" },
      { name: "Eczema", slug: "eczema" }
    ]
  },
  "vitiligo": {
    title: "Vitiligo",
    symptoms: [
      "Patchy loss of skin color (depigmentation)",
      "Premature whitening of hair on scalp or eyelashes",
      "Loss of color in mucosal tissues (inside mouth)"
    ],
    causes: [
      "Autoimmune destruction of pigment-producing cells (melanocytes)",
      "Genetic predisposition",
      "Neurochemical trigger factors",
      "Severe sunburn or chemical contact history"
    ],
    whenToSee: "See a practitioner if you notice spreading white patches on your skin or premature greying of hair.",
    howHelps: "Homeopathy focuses on immune regulation. It aims to arrest the spread of white patches by addressing the autoimmune activity and stimulating natural re-pigmentation.",
    approach: [
      "Comprehensive evaluation of patch spread patterns and family history.",
      "Autoimmune modulation remedies.",
      "Sun protection and skin health guidance."
    ],
    duration: "Typically 6 to 12 months, requiring patience for skin pigmentation to restore.",
    faqs: [
      { q: "Can vitiligo be managed with homeopathy?", a: "Homeopathy aims to support immune regulation and help halt the active spread of patches, encouraging re-pigmentation in early-stage localized areas." },
      { q: "Are vitiligo remedies safe?", a: "Yes. They are natural micro-dilutions that are gentle on your liver and kidneys." }
    ],
    related: [
      { name: "Psoriasis", slug: "psoriasis" },
      { name: "Thyroid Disorders", slug: "thyroid-disorders" }
    ]
  },
  "urticaria": {
    title: "Urticaria",
    symptoms: [
      "Sudden onset of raised, red, itchy welts (hives)",
      "Welts that change size and location rapidly",
      "Swelling of lips, eyelids, or throat (angioedema)",
      "Intense itching or burning sensations"
    ],
    causes: [
      "Hyper-reactive mast cell response releasing histamine",
      "Allergic reactions to foods, pollen, or dust",
      "Physical triggers like heat, cold, or friction",
      "Chronic autoimmune conditions"
    ],
    whenToSee: "Seek immediate emergency care if swelling affects your throat or causes breathing difficulties. Consult for hives that last over 6 weeks.",
    howHelps: "Homeopathy works on lowering mast-cell sensitivity. Constitutional care targets the allergic baseline to reduce the frequency and intensity of hives.",
    approach: [
      "Mast cell trigger and allergy mapping.",
      "Constitutional and acute anti-histaminic remedies.",
      "Elimination diet tracking."
    ],
    duration: "3 to 6 months for chronic urticaria.",
    faqs: [
      { q: "How fast do hives respond to homeopathy?", a: "Acute hives can show improvement in hours. Chronic urticaria requires 3+ months to stabilize the immune response." },
      { q: "Do these medicines contain steroids?", a: "No. VitaHomeo remedies are verified natural dilutions, free from steroids or antihistamine chemicals." }
    ],
    related: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis" },
      { name: "Food Allergies", slug: "food-allergies" }
    ]
  },
  "allergic-rhinitis": {
    title: "Allergic Rhinitis",
    symptoms: [
      "Frequent sneezing fits, especially in the morning",
      "Runny, itchy, or congested nose",
      "Watery, red, or itchy eyes",
      "Post-nasal drip causing throat clearing"
    ],
    causes: [
      "Allergic response to dust mites, pollen, mold, or dander",
      "Genetic predisposition to respiratory sensitivities",
      "Weak nasal mucosal defense barrier",
      "Seasonal weather changes"
    ],
    whenToSee: "Consult if nasal congestion leads to sinus pain, breathing issues, or requires daily nasal sprays.",
    howHelps: "Homeopathy strengthens the nasal mucosa and desensitizes the immune response to dust and pollen, providing long-term relief.",
    approach: [
      "Allergen trigger mapping and family history review.",
      "Constitutional desensitization remedies.",
      "Guidance on reducing dust exposure."
    ],
    duration: "3 to 5 months.",
    faqs: [
      { q: "How does homeopathy support allergy relief?", a: "Unlike temporary symptom blockers, constitutional homeopathy aims to support immune regulation and lower hyper-sensitivity over time." },
      { q: "Can seasonal allergies be managed with homeopathy?", a: "Yes, constitutional homeopathic consultation aims to manage symptoms and support desensitization for seasonal allergic rhinitis." }
    ],
    related: [
      { name: "Sinusitis", slug: "sinusitis" },
      { name: "Asthma", slug: "asthma" }
    ]
  },
  "asthma": {
    title: "Asthma Care",
    symptoms: [
      "Shortness of breath and chest tightness",
      "Wheezing or whistling sound during breathing",
      "Chronic dry cough, worse at night or after exercise",
      "Difficulty speaking during physical activity"
    ],
    causes: [
      "Bronchial airway inflammation and hypersensitivity",
      "Allergic triggers (dust, cold air, pet dander)",
      "Genetic history of asthma or eczema",
      "Recurrent childhood chest infections"
    ],
    whenToSee: "Seek emergency care for severe breathing difficulty. Consult for asthma symptoms that require frequent rescue inhaler use.",
    howHelps: "Homeopathy calms bronchial airway hypersensitivity and reduces muscle spasms in the lungs, improving long-term breathing capacity.",
    approach: [
      "Airway trigger mapping and lung capacity assessment.",
      "Remedies to reduce bronchial hypersensitivity.",
      "Breathing exercise and allergy avoidance advice."
    ],
    duration: "4 to 8 months of systematic treatment.",
    faqs: [
      { q: "Can I stop my inhaler immediately?", a: "No. You should continue your inhaler as prescribed. As your lung capacity improves, your primary doctor can safely step down inhaler dosages." },
      { q: "Is homeopathy safe for childhood asthma?", a: "Yes. Homeopathic dilutions are safe, non-toxic, and free from steroid side effects." }
    ],
    related: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis" },
      { name: "Eczema", slug: "eczema" }
    ]
  },
  "sinusitis": {
    title: "Sinusitis",
    symptoms: [
      "Facial pain, pressure, or fullness over forehead and cheeks",
      "Thick nasal discharge or post-nasal drip",
      "Nasal congestion and reduced sense of smell",
      "Frontal headaches, worse when bending forward"
    ],
    causes: [
      "Inflammation of sinus lining blockages",
      "Recurrent viral upper respiratory infections",
      "Nasal polyps or deviated nasal septum",
      "Environmental allergies"
    ],
    whenToSee: "Consult if sinus pain persists for over 10 days, is accompanied by high fever, or causes vision changes.",
    howHelps: "Homeopathy facilitates natural sinus drainage and reduces mucosal swelling, preventing recurrent sinus blockages.",
    approach: [
      "Sinus blockage and trigger mapping.",
      "Remedies to promote natural drainage and reduce swelling.",
      "Steam inhalation and warm compress guidelines."
    ],
    duration: "2 to 4 months.",
    faqs: [
      { q: "Does homeopathy treat chronic sinusitis?", a: "Yes, it targets the underlying chronic inflammation to prevent recurrent sinus blockages." },
      { q: "Are antibiotics necessary for sinus infections?", a: "Many sinus infections are viral or inflammatory. Homeopathy manages these naturally without requiring antibiotics." }
    ],
    related: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis" },
      { name: "Asthma", slug: "asthma" }
    ]
  },
  "food-allergies": {
    title: "Food Allergies",
    symptoms: [
      "Nausea, bloating, or abdominal cramps after eating",
      "Hives, skin itching, or eczema flares",
      "Oral allergy syndrome (itchy mouth or throat)",
      "Chronic loose stools or indigestion"
    ],
    causes: [
      "Immune system identifying specific food proteins as threats",
      "Leaky gut syndrome and poor intestinal barrier",
      "Genetic predisposition",
      "Enzyme deficiencies causing food sensitivities"
    ],
    whenToSee: "Seek emergency care for anaphylactic symptoms (throat swelling, difficulty breathing). Consult for chronic food intolerances.",
    howHelps: "Homeopathy works on improving gut wall integrity and calming hyper-active immune responses to foods.",
    approach: [
      "Food trigger and digestive mapping.",
      "Gut lining repair remedies.",
      "Structured elimination diet advice."
    ],
    duration: "4 to 8 months.",
    faqs: [
      { q: "Can homeopathy manage severe food allergies?", a: "No. Severe anaphylactic food allergies require immediate conventional emergency care. Homeopathy only helps manage mild to moderate food sensitivities and intolerances." },
      { q: "How does it help gut health?", a: "By reducing intestinal inflammation and balancing gut flora, it supports food digestion." }
    ],
    related: [
      { name: "Digestive Health", slug: "ibs" },
      { name: "Urticaria", slug: "urticaria" }
    ]
  },
  "hair-fall": {
    title: "Hair Fall Control",
    symptoms: [
      "Heavy shedding during combing or washing",
      "Gradual thinning on the top of the scalp",
      "Widening hair parting lines",
      "Dry, brittle hair prone to breakage"
    ],
    causes: [
      "Nutritional deficiencies (low iron, vitamin D)",
      "Hormonal shifts (thyroid, postpartum, PCOS)",
      "High emotional or physical stress levels",
      "Poor scalp circulation and oil gland imbalance"
    ],
    whenToSee: "Consult if you experience sudden, rapid hair shedding, balding patches, or scalp redness and itching.",
    howHelps: "Homeopathy targets the systemic cause of hair fall (such as hormone balance or stress) and improves nutrient delivery to follicles.",
    approach: [
      "Scalp health and metabolic factor mapping.",
      "Constitutional remedies supporting follicular strength.",
      "Nutrition and scalp hygiene guidance."
    ],
    duration: "3 to 6 months, tracking hair regrowth cycles.",
    faqs: [
      { q: "Does homeopathy work for hereditary hair loss?", a: "It can help slow down the progression of male or female pattern baldness by strengthening existing follicles." },
      { q: "Are external hair oils necessary?", a: "A healthy scalp routine helps, but internal constitutional remedies address the root cause of hair fall." }
    ],
    related: [
      { name: "Thyroid Disorders", slug: "thyroid-disorders" },
      { name: "PCOS / PCOD", slug: "pcos-pcod" }
    ]
  },
  "alopecia": {
    title: "Alopecia Areata",
    symptoms: [
      "Sudden appearance of round, smooth bald patches",
      "Short, broken hairs ('exclamation point' hairs)",
      "Rapid spread of bald spots on scalp or beard",
      "Occasional burning or itching prior to hair loss"
    ],
    causes: [
      "Autoimmune attack on hair follicles",
      "Genetic predisposition to atopic conditions",
      "Severe acute emotional stress triggers",
      "Associated endocrine imbalances"
    ],
    whenToSee: "Consult a practitioner if you notice circular bald spots spreading on your scalp, beard, or eyebrows.",
    howHelps: "Homeopathy works by regulating the autoimmune response, halting follicle attacks, and encouraging natural hair regrowth.",
    approach: [
      "Detailed autoimmune mapping and stress analysis.",
      "Remedies to modulate immune follicle attacks.",
      "Supportive nutritional and scalp care advice."
    ],
    duration: "4 to 8 months for visible hair regrowth in patches.",
    faqs: [
      { q: "Can hair grow back in smooth patches?", a: "Yes. Once the autoimmune response is regulated, follicles typically resume normal hair growth." },
      { q: "Does stress trigger alopecia?", a: "Yes, emotional trauma or acute stress can precipitate alopecia areata flares. Homeopathy addresses these triggers." }
    ],
    related: [
      { name: "Hair Fall", slug: "hair-fall" },
      { name: "Thyroid Disorders", slug: "thyroid-disorders" }
    ]
  },
  "dandruff": {
    title: "Dandruff",
    symptoms: [
      "White, greasy flakes of dead skin on scalp and shoulders",
      "Itchy, red, or irritated scalp skin",
      "Dry scales that worsen in winter months",
      "Oily scalp surface with dry hair"
    ],
    causes: [
      "Overgrowth of Malassezia fungus on the scalp",
      "Seborrheic dermatitis and oil gland hyper-activity",
      "Poor scalp hygiene or chemical hair products",
      "Systemic metabolic imbalances"
    ],
    whenToSee: "Consult if your scalp becomes inflamed, bleeds, or flakes do not respond to standard anti-dandruff shampoos.",
    howHelps: "Homeopathy targets oil gland secretions and supports local immunity, reducing dandruff without drying the scalp.",
    approach: [
      "Scalp sebum and fungal balance assessment.",
      "Remedies to regulate scalp oil secretions.",
      "Chemical-free hair care advice."
    ],
    duration: "1 to 3 months.",
    faqs: [
      { q: "Can dandruff cause hair loss?", a: "Yes, chronic scalp inflammation and scratching can weaken hair roots, leading to hair fall." },
      { q: "Will dandruff return after stopping treatment?", a: "By regulating sebum production, homeopathy provides lasting results when paired with good scalp hygiene." }
    ],
    related: [
      { name: "Hair Fall", slug: "hair-fall" },
      { name: "Eczema", slug: "eczema" }
    ]
  },
  "premature-greying": {
    title: "Premature Greying",
    symptoms: [
      "Appearance of grey or white hairs before age 25",
      "Loss of natural hair color pigments",
      "Dry, thin hair texture"
    ],
    causes: [
      "Loss of melanin production in hair follicles",
      "Chronic emotional stress and anxiety",
      "Nutritional deficiencies (low Vitamin B12, copper)",
      "Genetic factors"
    ],
    whenToSee: "Consult if you notice rapid greying at an early age alongside fatigue or hair fall.",
    howHelps: "Homeopathy supports follicle health, balances stress triggers, and addresses nutritional absorption issues to help slow premature greying.",
    approach: [
      "Nutritional absorption and stress mapping.",
      "Constitutional remedies supporting follicle vitality.",
      "Antioxidant-rich dietary guidance."
    ],
    duration: "4 to 8 months.",
    faqs: [
      { q: "Can grey hair turn black again?", a: "Hairs that have completely lost pigment rarely change back, but treatment helps protect remaining dark hairs from greying prematurely." },
      { q: "Does stress cause grey hair?", a: "Yes, chronic stress depletes follicle melanin. Homeopathy targets this pathway." }
    ],
    related: [
      { name: "Hair Fall", slug: "hair-fall" },
      { name: "Stress & Burnout", slug: "stress-burnout" }
    ]
  },
  "pcos-pcod": {
    title: "PCOS / PCOD",
    symptoms: [
      "Irregular, delayed, or missed menstrual cycles",
      "Excessive hair growth on face or body (hirsutism)",
      "Persistent adult acne and hair thinning on scalp",
      "Multiple tiny fluid-filled cysts in ovaries observed on ultrasound"
    ],
    causes: [
      "Insulin resistance and elevated blood sugar levels",
      "Endocrine imbalances (excess production of androgens)",
      "Chronic low-grade systemic inflammation",
      "Hereditary metabolic factors"
    ],
    whenToSee: "See a practitioner if menstrual cycles are missed for more than 3 months, you experience unexplained weight gain, or are struggling with hormonal skin issues.",
    howHelps: "Homeopathy addresses PCOS as a metabolic and endocrine imbalance. Remedies stimulate natural ovulatory function, restore hormonal feedback loops, and regulate cycles without birth control pills.",
    approach: [
      "Ovarian-ovulatory loop mapping to assess menstrual rhythms.",
      "Constitutional remedies targeting insulin sensitivity and metabolic rates.",
      "Personalized lifestyle adjustments paired with remedies."
    ],
    duration: "Usually 4 to 8 months of systematic treatment is recommended to regulate cycles and hormonal metrics.",
    faqs: [
      { q: "Will cycles stay regular after stopping homeopathic remedies?", a: "Yes. Because homeopathy works on restoring the body's natural endocrine feedback loops, the improvements are typically sustainable alongside healthy habits." },
      { q: "Can homeopathy help with insulin resistance in PCOS?", a: "Yes, constitutional prescribing helps optimize cellular response to insulin, supporting weight loss and reducing acne." }
    ],
    related: [
      { name: "Thyroid Disorders", slug: "thyroid-disorders" },
      { name: "Migraine Relief", slug: "migraine" }
    ]
  },
  "menstrual-disorders": {
    title: "Menstrual Disorders",
    symptoms: [
      "Painful cramping during periods (dysmenorrhea)",
      "Heavy bleeding or prolonged cycles",
      "Frequent or missed menstrual periods",
      "Premenstrual syndrome (PMS) mood changes"
    ],
    causes: [
      "Hormonal imbalances (estrogen/progesterone ratio)",
      "Uterine fibroids or pelvic congestion",
      "Chronic physical or emotional stress",
      "Nutritional deficiencies"
    ],
    whenToSee: "Consult a gynecologist or practitioner if period pain is debilitating, bleeding is excessively heavy, or cycles become highly unpredictable.",
    howHelps: "Homeopathy offers hormone-friendly, non-steroidal options to regulate cycles, reduce pelvic congestion, and ease cramping naturally.",
    approach: [
      "Detailed cycle history and hormonal assessment.",
      "Remedies to relieve smooth muscle uterine spasms.",
      "Supportive iron-rich diet tips."
    ],
    duration: "3 to 6 months.",
    faqs: [
      { q: "Are homeopathic pain remedies safe?", a: "Yes, they relieve menstrual cramps without causing stomach irritation or dependency." },
      { q: "Can it regulate delayed periods?", a: "Yes, constitutional remedies help re-establish natural endocrine cycles." }
    ],
    related: [
      { name: "PCOS / PCOD", slug: "pcos-pcod" },
      { name: "Anxiety", slug: "anxiety" }
    ]
  },
  "fertility-support": {
    title: "Fertility Support",
    symptoms: [
      "Difficulty conceiving after 12 months of trying",
      "Irregular ovulation indicators",
      "Stress and anxiety around conception",
      "General fatigue and low vitality metrics"
    ],
    causes: [
      "Ovulatory dysfunction or low egg quality markers",
      "Hormonal feedback loop issues",
      "Lifestyle factors and chronic stress",
      "Unexplained reproductive challenges"
    ],
    whenToSee: "Consult for fertility evaluation if you have been trying to conceive for over a year (or 6 months if over age 35).",
    howHelps: "Homeopathy works as a supportive constitutional therapy to optimize reproductive health, balance hormone levels, and reduce conception-related stress.",
    approach: [
      "Detailed reproductive history mapping for both partners.",
      "Constitutional remedies supporting uterine and ovarian health.",
      "Vitality optimization and stress management."
    ],
    duration: "Normally 6 to 12 months.",
    faqs: [
      { q: "Can I take homeopathy alongside IVF?", a: "Yes, homeopathy is safe and can be taken as a supportive therapy alongside IVF to help reduce stress and optimize physical health." },
      { q: "Are there remedies for male fertility parameters?", a: "Yes, constitutional care is available to support sperm count, motility, and general male reproductive vitality." }
    ],
    related: [
      { name: "PCOS / PCOD", slug: "pcos-pcod" },
      { name: "Menstrual Disorders", slug: "menstrual-disorders" }
    ]
  },
  "menopause": {
    title: "Menopause Support",
    symptoms: [
      "Hot flashes and sudden sweating episodes",
      "Mood swings, irritability, and anxiety",
      "Insomnia and sleep quality changes",
      "Metabolic shifts and weight changes"
    ],
    causes: [
      "Natural decline in ovarian estrogen synthesis",
      "Endocrine adaptation phase",
      "Stress and adrenal strain",
      "Metabolic sluggishness"
    ],
    whenToSee: "Consult if hot flashes prevent sleep, mood changes impact daily life, or you experience bone density concerns.",
    howHelps: "Homeopathy offers hormone-free support to ease the transition into menopause, helping manage hot flashes and support emotional health.",
    approach: [
      "Endocrine phase mapping and symptom tracking.",
      "Remedies to manage vasomotor symptoms (hot flashes).",
      "Calcium-rich diet and sleep support tips."
    ],
    duration: "3 to 6 months.",
    faqs: [
      { q: "Is this a form of Hormone Replacement Therapy (HRT)?", a: "No. Homeopathy does not use synthetic hormones. It supports your body's natural endocrine transition." },
      { q: "Does it help with menopausal mood swings?", a: "Yes, constitutional care is highly effective for emotional support during menopause." }
    ],
    related: [
      { name: "Sleep Disorders", slug: "sleep-disorders" },
      { name: "Thyroid Disorders", slug: "thyroid-disorders" }
    ]
  },
  "ibs": {
    title: "IBS (Irritable Bowel Syndrome)",
    symptoms: [
      "Abdominal pain, cramping, or bloating",
      "Alternating bouts of diarrhea and constipation",
      "Mucus in stool and feeling of incomplete evacuation",
      "Gas and stomach distention post-meals"
    ],
    causes: [
      "Gut-brain axis signaling imbalances",
      "Intestinal smooth muscle hyper-sensitivity",
      "Chronic stress and emotional anxiety triggers",
      "Post-infectious gut lining irritation"
    ],
    whenToSee: "See a gastroenterologist or doctor if you notice unexplained weight loss, bleeding in stool, or persistent diarrhea.",
    howHelps: "Homeopathy targets the gut-brain axis, soothing intestinal smooth muscle spasms and reducing stress-induced bowel triggers.",
    approach: [
      "Detailed gut-brain axis and trigger mapping.",
      "Remedies to regulate bowel motility and ease cramps.",
      "FODMAP food guidance alongside remedies."
    ],
    duration: "3 to 6 months.",
    faqs: [
      { q: "Can stress trigger IBS symptoms?", a: "Yes. The gut is highly sensitive to stress. Homeopathy maps these emotional triggers to select appropriate remedies." },
      { q: "Does homeopathy treat IBS bloating?", a: "Yes, remedies support digestion and reduce gas production in the bowel." }
    ],
    related: [
      { name: "Acidity & GERD", slug: "acidity-gerd" },
      { name: "Anxiety", slug: "anxiety" }
    ]
  },
  "acidity-gerd": {
    title: "Acidity & GERD",
    symptoms: [
      "Burning pain in the chest (heartburn)",
      "Sour or bitter acid regurgitation",
      "Difficulty swallowing or dry cough",
      "Bloating and burping after meals"
    ],
    causes: [
      "Lower esophageal sphincter (LES) weakness",
      "Excessive stomach acid production",
      "Poor dietary habits and late meals",
      "High stress and low digestive enzymes"
    ],
    whenToSee: "Consult if acid reflux occurs daily, causes chronic throat pain, or leads to difficulty swallowing.",
    howHelps: "Homeopathy regulates stomach acid synthesis and strengthens the esophageal sphincter naturally without dependency on PPIs.",
    approach: [
      "Digestive pattern and LES check.",
      "Remedies to soothe stomach mucosal lining.",
      "Healthy eating habits advice."
    ],
    duration: "2 to 4 months.",
    faqs: [
      { q: "Can I stop antacid tablets immediately?", a: "Do not stop them abruptly. As your acidity levels normalize with homeopathy, you can gradually reduce antacids safely." },
      { q: "Is homeopathy safe for chronic GERD?", a: "Yes. It supports natural digestion without causing rebound acidity." }
    ],
    related: [
      { name: "IBS", slug: "ibs" },
      { name: "Constipation", slug: "constipation" }
    ]
  },
  "ulcerative-colitis": {
    title: "Ulcerative Colitis Support",
    symptoms: [
      "Diarrhea, often with blood or pus",
      "Abdominal pain and cramping",
      "Urgency to defecate and rectal pain",
      "Fatigue and weight loss"
    ],
    causes: [
      "Autoimmune inflammatory bowel disease (IBD)",
      "Genetic predisposition",
      "Gut microbiome dysbiosis",
      "Environmental triggers"
    ],
    whenToSee: "Consult a gastroenterologist immediately if you experience severe abdominal pain, persistent blood in stool, or high fever.",
    howHelps: "Homeopathy acts as a supportive immune-modulating therapy, aiming to reduce mucosal inflammation and extend remission phases.",
    approach: [
      "IBD history mapping and inflammation tracking.",
      "Remedies to soothe colonic mucosal inflammation.",
      "Anti-inflammatory diet guidance."
    ],
    duration: "6 to 12 months, monitored with inflammatory markers.",
    faqs: [
      { q: "How does homeopathy support ulcerative colitis management?", a: "Colitis is a chronic autoimmune condition. Homeopathy aims to support mucosal recovery, manage flareups, and help prolong remission phases." },
      { q: "Is it safe to take alongside mesacol?", a: "Yes, constitutional homeopathic care is safe to take alongside conventional IBD medications." }
    ],
    related: [
      { name: "IBS", slug: "ibs" },
      { name: "Acidity & GERD", slug: "acidity-gerd" }
    ]
  },
  "constipation": {
    title: "Constipation Relief",
    symptoms: [
      "Fewer than three bowel movements per week",
      "Lumpy, hard, or dry stools",
      "Straining or feeling of incomplete evacuation",
      "Abdominal pain and bloating"
    ],
    causes: [
      "Slow intestinal peristaltic movement",
      "Low dietary fiber and water intake",
      "Physical inactivity",
      "Overuse of stimulant laxatives"
    ],
    whenToSee: "Consult if constipation is accompanied by severe abdominal pain, blood in stool, or sudden changes in bowel habits.",
    howHelps: "Homeopathy stimulates natural peristalsis and improves bowel hydration without creating laxative dependency.",
    approach: [
      "Dietary fiber and bowel habit mapping.",
      "Remedies to stimulate bowel peristalsis.",
      "Hydration and lifestyle guidelines."
    ],
    duration: "1 to 3 months.",
    faqs: [
      { q: "Are homeopathic laxatives habit-forming?", a: "No. Unlike herbal or chemical laxatives, homeopathy works on restoring muscle tone in the intestines to prevent dependency." },
      { q: "Can children take these remedies?", a: "Yes. They are safe for children experiencing hard stools or painful bowel movements." }
    ],
    related: [
      { name: "IBS", slug: "ibs" },
      { name: "Acidity & GERD", slug: "acidity-gerd" }
    ]
  },
  "thyroid-disorders": {
    title: "Thyroid Disorders",
    symptoms: [
      "Unexplained fatigue and sluggishness",
      "Weight changes (gain in Hypothyroidism, loss in Hyperthyroidism)",
      "Cold or heat sensitivity",
      "Thinning hair, dry skin, and muscle weakness"
    ],
    causes: [
      "Autoimmune gland dysfunction (Hashimoto's or Graves' disease)",
      "Pituitary-thyroid feedback loop imbalances",
      "Chronic emotional or physical stress",
      "Nutritional deficiencies"
    ],
    whenToSee: "See a doctor if your thyroid hormone panel (TSH, Free T3/T4) shows levels outside reference ranges, or you suffer from chronic fatigue.",
    howHelps: "Homeopathy supports the body's natural thyroid hormone synthesis and feedback loop. It aims to reduce autoimmune activity and restore optimal metabolic levels.",
    approach: [
      "Endocrine history assessment and TSH tracking.",
      "Constitutional remedies targeted at reducing glandular autoantibodies.",
      "Supportive dietary changes for metabolic rate improvement."
    ],
    duration: "Normally 3 to 6 months, monitored with blood panels every 8 weeks.",
    faqs: [
      { q: "Can I take homeopathy alongside my daily thyroxine tablet?", a: "Yes. Homeopathy can be safely taken alongside standard thyroxine. Do not stop thyroxine abruptly; as gland function improves, your doctor will guide safe dosage reductions." },
      { q: "How often should I test my TSH levels?", a: "We recommend checking TSH and thyroid panels every 6 to 8 weeks to track endocrine response." }
    ],
    related: [
      { name: "PCOS / PCOD", slug: "pcos-pcod" },
      { name: "Hair Fall", slug: "hair-fall" }
    ]
  },
  "joint-pain-general": {
    title: "Joint Pain General",
    symptoms: [
      "Dull aching or stiffness in joints",
      "Joint crackling sounds (crepitus) on movement",
      "Mild swelling after long walks or standing",
      "Musculoskeletal fatigue and muscle soreness"
    ],
    causes: [
      "Musculoskeletal strain or poor posture",
      "Early joint wear and tear",
      "Systemic metabolic uric acid accumulation",
      "Weather changes causing joint stiffness"
    ],
    whenToSee: "Consult if joint pain is accompanied by swelling, redness, morning stiffness lasting over an hour, or fever.",
    howHelps: "Homeopathy reduces joint synovial inflammation and supports muscle and ligament strength naturally without NSAID side effects.",
    approach: [
      "Postural and mobility review.",
      "Remedies to optimize joint flexibility.",
      "Anti-inflammatory diet and light stretching tips."
    ],
    duration: "2 to 4 months.",
    faqs: [
      { q: "Are these remedies safe for daily use?", a: "Yes. Homeopathic micro-dilutions are non-toxic and do not cause stomach acidity like painkiller tablets." },
      { q: "Does cold weather worsen joint pain?", a: "Yes. Homeopathy takes these environmental trigger factors into account to choose matching remedies." }
    ],
    related: [
      { name: "Arthritis Care", slug: "arthritis" },
      { name: "Senior General Wellness", slug: "senior-general-wellness" }
    ]
  },
  "senior-general-wellness": {
    title: "Senior General Wellness",
    symptoms: [
      "Gradual decline in physical energy and stamina",
      "Mild joint stiffness and muscle weakness",
      "Digestive slowdown and loss of appetite",
      "Occasional memory lapses or sleep changes"
    ],
    causes: [
      "Natural age-related metabolic slowdown",
      "Decreased digestive enzyme secretion",
      "Reduced joint cartilage lubrication",
      "Circadian rhythm adaptation changes"
    ],
    whenToSee: "Consult if you notice sudden, severe weight loss, cognitive confusion, or chronic joint swelling.",
    howHelps: "Homeopathy offers gentle support for geriatric health, helping improve digestion, joint flexibility, and sleep quality naturally.",
    approach: [
      "Age-appropriate metabolic and joint check.",
      "Gentle constitutional remedies supporting vitality.",
      "Balanced diet and light walking guidelines."
    ],
    duration: "Continuous supportive care, reviewed quarterly.",
    faqs: [
      { q: "Is homeopathy safe alongside senior medications?", a: "Yes. Homeopathy does not interact with heart, diabetes, or blood pressure medicines. It is safe for seniors." },
      { q: "Does it help with memory in seniors?", a: "Yes, it supports cognitive vitality and helps manage mild age-related memory lapses." }
    ],
    related: [
      { name: "Arthritis Care", slug: "arthritis" },
      { name: "Sleep Disorders", slug: "sleep-disorders" }
    ]
  },
  "immunity-support": {
    title: "Immunity Support",
    symptoms: [
      "Frequent colds, coughs, or sinus flares",
      "Chronic fatigue and slow healing of skin cuts",
      "Frequent stomach upset or digestive changes",
      "Susceptibility to seasonal respiratory bugs"
    ],
    causes: [
      "Weakened immune cell responsiveness",
      "Chronic environmental stress and poor sleep",
      "Digestive sluggishness causing nutritional deficits",
      "Incomplete recovery from past viral infections"
    ],
    whenToSee: "Consult if you suffer from recurrent respiratory infections or experience constant, unexplained physical fatigue.",
    howHelps: "Homeopathic constitutional remedies act as natural immunomodulators, strengthening mucosal barriers and cellular defense mechanisms.",
    approach: [
      "Immunological history and stress factor analysis.",
      "Remedies designed to support lymphatic and respiratory health.",
      "Antioxidant diet and gut health support."
    ],
    duration: "3 to 6 months.",
    faqs: [
      { q: "Can homeopathy boost immunity in adults?", a: "Yes. Constitutional remedies strengthen your natural immune response, reducing your susceptibility to infections." },
      { q: "Are there side effects?", a: "No. Remedies use natural micro-dilutions that are safe and gentle on your system." }
    ],
    related: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis" },
      { name: "Senior General Wellness", slug: "senior-general-wellness" }
    ]
  }
};
