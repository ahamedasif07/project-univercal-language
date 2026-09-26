export interface InstructorCertificate {
  id: string;
  image: string;
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
  description?: string;
}

export interface WorkExperienceItem {
  role: string;
  organization: string;
  period: string;
  highlights?: string[];
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
}

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  organization: string;
  scoreHighlight: string;
  badge: string;
  officialBadgeImage?: string;
  image: string;
  experience: string;
  studentsTrained: string;
  targetSuccessRate: string;
  shortBio: string;
  fullBio: string[];
  quote: string;
  specialties: string[];
  certifications: string[];
  education: string[];
  workExperience?: WorkExperienceItem[];
  awards?: AwardItem[];
  certificatesGallery?: InstructorCertificate[];
  featuredCourses: {
    title: string;
    duration: string;
    description: string;
  }[];
  scorecardHighlights: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  socials: {
    whatsapp: string;
    email: string;
    phone?: string;
    linkedin?: string;
    location?: string;
  };
}

// 1. Founder & CEO (Kept for direct profile link, but excluded from INSTRUCTORS mentor cards)
export const FOUNDER_PROFILE: Instructor = {
  id: "sifat-hasan",
  slug: "sifat-hasan",
  name: "Sifat Hasan",
  role: "Founder & Chief Executive Officer (CEO)",
  title: "Founder & Chief Executive Officer (CEO) | Universal Language",
  organization: "Universal Language",
  scoreHighlight: "PTE 90/90 Overall",
  badge: "Pearson Master Trainer",
  image: "/images/instructors/showkat.jpg",
  experience: "8+ Years Expertise",
  studentsTrained: "650+ Successful Candidates",
  targetSuccessRate: "98.8% First-Time Pass",
  shortBio:
    "Visionary educator and certified Pearson Master Trainer who pioneered algorithm-calibrated PTE training frameworks in Bangladesh.",
  fullBio: [
    "Sifat Hasan is the visionary Founder and Chief Academic Director of Universal Language. Having achieved a perfect 90/90 score on the PTE Academic exam himself, Sifat has spent the past decade demystifying the proprietary automated AI scoring algorithms used by Pearson.",
    "His proprietary 'Algorithmic Fluency & Acoustic Calibration' method has empowered over 650 students—from medical doctors and nurses to IT professionals and engineers—to secure PR pathways and unconditional university admissions across Australia, Canada, the UK, and New Zealand.",
    "Trained under senior Pearson South Asia academic leadership, Sifat is renowned for his precise diagnostic audits, turning students stuck at 58–64 into 79+ high-scorers within 4 to 6 weeks.",
  ],
  quote:
    "PTE is not an exam of general literary English. It is an algorithmic evaluation system. Once you understand the machine's acoustic model and semantic weight, a 79+ or 90 score is entirely reproducible.",
  specialties: [
    "Pearson AI Scoring Algorithm Reverse-Engineering",
    "Speaking Acoustic Flow & Pitch Calibration",
    "High-Yield Read Aloud & Repeat Sentence Frameworks",
    "One-on-One Score Gap Diagnostic Auditing",
    "Australian & UK High-Point Visa Strategy",
  ],
  certifications: [
    "Pearson South Asia Certified PTE Academic Trainer",
    "Advanced Acoustic Voice Modulation Practitioner",
    "Certified Language Assessment Specialist (Cambridge CELTA Alum)",
  ],
  education: [
    "Master of Education (M.Ed.) — Higher Education Pedagogy",
    "B.Sc. in Computer Science & Information Systems",
  ],
  featuredCourses: [
    {
      title: "PTE 79+ Guaranteed Masterclass",
      duration: "6 Weeks • 24 Live Sessions",
      description:
        "Intensive algorithmic training covering all 20 question types with daily 1-on-1 AI diagnostic feedback.",
    },
    {
      title: "PTE Fast-Track Crash Batch",
      duration: "3 Weeks • 14 Sessions",
      description:
        "High-intensity targeted bootcamp designed for repeat test-takers needing an urgent 10+ score jump.",
    },
  ],
  scorecardHighlights: [
    { label: "PTE Overall", value: "90/90", sublabel: "Official Scorecard" },
    { label: "Speaking Fluency", value: "90/90", sublabel: "Zero Accent Bias" },
    { label: "Writing Logic", value: "90/90", sublabel: "Structured Grammar" },
    { label: "Listening Precision", value: "90/90", sublabel: "Acoustic Mapping" },
  ],
  socials: {
    whatsapp: "8801772224283",
    email: "sifat@universallanguage.com.bd",
    linkedin: "https://linkedin.com",
    location: "Dhaka, Bangladesh",
  },
};

// 2. Active Faculty / Mentors (Displayed in AboutFaculty cards - Founder excluded per instruction)
export const INSTRUCTORS: Instructor[] = [
  // Head Instructor: MD Nakibul Quader Chowdhury
  {
    id: "nakibul-quader-chowdhury",
    slug: "md-nakibul-quader-chowdhury",
    name: "MD Nakibul Quader Chowdhury",
    role: "Head Instructor & Level 2 Certified PTE Instructor",
    title: "Head Instructor & Pearson Certified Master Trainer | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "Pearson Level 2 Certified",
    badge: "Head Instructor & PTE / DET Lead",
    officialBadgeImage: "/images/instructors/nakibul-badge.png",
    image: "/images/instructors/nakibul-pp.jpeg",
    experience: "10+ Years Mentoring",
    studentsTrained: "3,000+ Students Trained",
    targetSuccessRate: "2,000+ Target Scores Achieved",
    shortBio:
      "Head Instructor and Pearson Level 2 Certified Trainer specializing in PTE Academic and Duolingo English Test (DET). Successfully guided 3,000+ students with 2,000+ target score pass achievements.",
    fullBio: [
      "MD Nakibul Quader Chowdhury serves as the Head Instructor at Universal Language. He is an officially accredited Pearson Level 2 Certified PTE Instructor, specializing in both Pearson Test of English (PTE Academic/Core) and the Duolingo English Test (DET).",
      "Over the course of his distinguished 10+ year career across premier language academies and institutional programs, Nakibul has trained more than 3,000 students—with over 2,000 achieving their critical required scores for Australia, Canada, the UK, and European university admissions and skilled migration visas.",
      "Nakibul is widely recognized for his structured pedagogical delivery, adaptive lesson planning, interactive lab supervision, and rigorous individual score diagnostics. His teaching combines verified Pearson strategies with personalized oral acoustics and written feedback that consistently eliminate test anxiety and score bottlenecks.",
    ],
    quote:
      "Success in computer-evaluated tests like PTE and Duolingo requires decoding the algorithmic evaluation criteria. When students practice with structured strategy and receive personalized diagnostic corrections, target scores become inevitable.",
    specialties: [
      "PTE Academic & Core Complete Module Mastery",
      "Duolingo English Test (DET) 125+ Adaptive Frameworks",
      "Structured Lesson Planning & Computer Lab Management",
      "Student Diagnostic Auditing & Score Gap Analysis",
      "Personalized Oral Fluency & Pronunciation Waveform Feedback",
      "Test-Aligned Timed Drills & Simulated Mock Evaluations",
    ],
    certifications: [
      "Pearson Level 2 Certified PTE Instructor (Level 2 PTE Trainer 1 Professional)",
      "Mindtickle Expert Credential: Airline Insider - Reading Itineraries (Issued May 2024)",
      "Academy for Knowledge Workers: Career and Opportunity Management (APFPM & WFPMA)",
      "iMiT Southern University Bangladesh: Youth Leadership in Community Development",
      "EDEXCEL Computer Teacher & IT Lab In-Charge Certification (Mastermind International School)",
      "ACE Language Bangladesh: Recognized PTE Instruction Specialist",
    ],
    education: [
      "Bachelor of Business Administration (BBA) — Southern University Bangladesh",
      "Higher Secondary Certificate (HSC) — Business Studies",
      "Secondary School Certificate (SSC) — Business Studies",
    ],
    workExperience: [
      {
        role: "PTE Instructor",
        organization: "ACE Language Bangladesh",
        period: "Jan 2025 – Feb 2026",
        highlights: [
          "Trained students using updated PTE strategies and materials, helping candidates achieve target scores with structured lessons and personalized feedback.",
          "Conducted classes, managed testing labs, and delivered clear explanations across all 20 PTE modules.",
          "Prepared slides, test center guidelines, and authentic practice tasks adhering to Pearson quality benchmarks.",
        ],
      },
      {
        role: "Registrar",
        organization: "CIET, Chittagong",
        period: "Jan 2022 – Present",
        highlights: [
          "Supervised academic administration, student evaluations, and certification compliance.",
        ],
      },
      {
        role: "Sales Support Officer",
        organization: "KSRM Steel Plant Limited",
        period: "Apr 2020 – Dec 2022",
        highlights: [
          "Handled operational coordination, team communications, and client documentation.",
        ],
      },
      {
        role: "Territory Manager (3rd Party)",
        organization: "Airtel SME – Robi Axiata Limited, Chittagong",
        period: "Apr 2017 – Mar 2019",
        highlights: [
          "Managed enterprise accounts, regional territory expansion, and strategic team performance.",
        ],
      },
      {
        role: "Computer Teacher & IT Lab In-charge (EDEXCEL)",
        organization: "Mastermind International School, Chittagong",
        period: "Mar 2013 – Sept 2014",
        highlights: [
          "Supervised EDEXCEL curriculum lab environments, interactive teaching, and computer literacy.",
        ],
      },
    ],
    awards: [
      {
        title: "Best Participation Award",
        organization: "Pearson",
        year: "2025",
      },
      {
        title: "Best Achievement Award",
        organization: "ACE Language Bangladesh",
        year: "2025",
      },
    ],
    certificatesGallery: [
      {
        id: "nakibul-c1",
        image: "/images/instructors/nakibul-c1.jpeg",
        title: "Pearson Level 1 Certificate of Completion",
        issuer: "Pearson Education",
        year: "2024",
        badge: "Pearson Level 1",
        description: "Official Pearson Level 1 Certificate of Completion awarded to Md Nakibul Quader Chowdhury.",
      },
      {
        id: "nakibul-c2",
        image: "/images/instructors/nakibul-c2.jpeg",
        title: "PTE Trainer: Professional 1 Certification",
        issuer: "Pearson English Language Learning",
        year: "2025",
        badge: "PTE Trainer 1",
        description: "Verified PTE Trainer: Professional 1 credential issued by Pearson English Language Learning.",
      },
      {
        id: "nakibul-c4",
        image: "/images/instructors/nakibul-c4.jpeg",
        title: "Mastermind International School Certificate",
        issuer: "Mastermind International School",
        year: "2015",
        badge: "EDEXCEL",
        description: "Official experience certificate recognizing Computer Teacher & IT Lab In-charge service.",
      },
      {
        id: "nakibul-c5",
        image: "/images/instructors/nakibul-c5.jpeg",
        title: "Youth Leadership in Community Development",
        issuer: "iMiT - Southern University Bangladesh",
        year: "July 2013",
        badge: "SPEED & iMiT",
        description: "Workshop participation certificate organized by Department of General Education in association with SPEED.",
      },
      {
        id: "nakibul-c6",
        image: "/images/instructors/nakibul-c6.jpeg",
        title: "Career and Opportunity Management",
        issuer: "Academy for Knowledge Workers",
        year: "March 2012",
        badge: "APFPM & WFPMA",
        description: "Official certificate for completing the program conducted by Member of Asian-Pacific Federation for Personnel Management.",
      },
      {
        id: "nakibul-c7",
        image: "/images/instructors/nakibul-c7.jpeg",
        title: "Airline Insider - Reading Itineraries",
        issuer: "Mindtickle Expert Credential",
        year: "May 2024",
        badge: "Expert",
        description: "Mindtickle certified expert credential for successfully completing Airline Insider - Reading itineraries.",
      },
    ],
    featuredCourses: [
      {
        title: "Complete PTE A-Z Masterclass",
        duration: "6 Weeks • 24 Live Masterclasses",
        description:
          "Comprehensive 1-on-1 algorithm training covering all 20 question types with AI speech scoring and real exam mock audits.",
      },
      {
        title: "Duolingo English Test (DET) 125+ Sprint",
        duration: "4 Weeks • 16 Intensive Sessions",
        description:
          "Master adaptive computer algorithms, C-tests, interactive reading, and live video interview responses.",
      },
    ],
    scorecardHighlights: [
      { label: "PTE Certification", value: "Level 2", sublabel: "Official Pearson Trainer" },
      { label: "Students Trained", value: "3,000+", sublabel: "High Achievers" },
      { label: "Target Scores", value: "2,000+", sublabel: "Success Stories" },
      { label: "Specialization", value: "PTE & DET", sublabel: "Pearson & Duolingo" },
    ],
    socials: {
      whatsapp: "8801913623541",
      email: "nakibulcht@gmail.com",
      phone: "+880 1913-623541",
      location: "Nasirabad R/A, Chittagong, Bangladesh",
    },
  },

  // Senior Instructor: Dr. Sumya Sultana Swarna
  {
    id: "dr-sumya-sultana-swarna",
    slug: "dr-sumya-sultana-swarna",
    name: "Dr. Sumya Sultana Swarna",
    role: "Senior Instructor & Medical English Lead",
    title: "Senior Instructor | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "PTE 86+ & OET Grade A",
    badge: "Senior Clinical & Academic Mentor",
    image: "/images/instructors/swarna.jpg",
    experience: "6+ Years Mentoring",
    studentsTrained: "420+ Healthcare Candidates",
    targetSuccessRate: "97.5% Target Score",
    shortBio:
      "Physician and premier academic mentor specializing in high-stakes English examinations for doctors, healthcare workers, and postgraduate scholars.",
    fullBio: [
      "Dr. Sumya Sultana Swarna brings a uniquely analytical, methodical approach to English language coaching. As a qualified medical doctor and senior language pedagogue, she understands firsthand the immense pressure faced by healthcare professionals and postgraduate researchers aiming for overseas registration.",
      "Dr. Swarna heads the Medical & Professional Migration Academic Wing at Universal Language. She has guided hundreds of physicians, dentists, nurses, and STEM academics to ace their mandatory English thresholds for AHPRA, GMC, and international licensing councils.",
      "Her instructional style combines psychological test confidence, structured contextual vocabulary retention, and meticulous written analysis to ensure zero grammatical penalty marks.",
    ],
    quote:
      "Confidence under timed examination conditions comes from systemic preparation. When you eliminate ambiguity, anxiety vanishes and your true proficiency shines.",
    specialties: [
      "Medical & Nursing Professional Language Licensure (AHPRA & GMC)",
      "Summarize Written Text & Essay Writing Architecture",
      "Academic Reading Comprehension & Collocation Retention",
      "Test Anxiety Mitigation & Cognitive Performance Under Pressure",
      "Postgraduate & Master's Statement of Purpose Mentorship",
    ],
    certifications: [
      "Pearson Certified Academic English Coach",
      "Medical Communication & Clinical Dialogue Masterclass Trainer",
      "British Council Advanced Academic Writing Fellow",
    ],
    education: [
      "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
      "Postgraduate Diploma in Health Informatics & Medical Pedagogy",
    ],
    featuredCourses: [
      {
        title: "Medical & Nursing PTE Fast-Track",
        duration: "5 Weeks • 20 Live Sessions",
        description:
          "Specialized batch tailored for doctors, pharmacists, and nurses targeting AHPRA / UK NMC registration.",
      },
      {
        title: "PTE Academic Writing & Reading Masterwork",
        duration: "4 Weeks • 16 Sessions",
        description:
          "Master complex collocations, vocabulary banks, and foolproof templates for 79+ writing scores.",
      },
    ],
    scorecardHighlights: [
      { label: "PTE Overall", value: "86+", sublabel: "Academic Pathway" },
      { label: "Reading Matrix", value: "88/90", sublabel: "High Collocation" },
      { label: "Written Discourse", value: "90/90", sublabel: "Perfect Logic" },
      { label: "OET Grade", value: "Grade A", sublabel: "Clinical English" },
    ],
    socials: {
      whatsapp: "8801772224283",
      email: "swarna@universallanguage.com.bd",
      linkedin: "https://linkedin.com",
    },
  },

  // Instructor: Samia Chowdhury
  {
    id: "samia-chowdhury",
    slug: "samia-chowdhury",
    name: "Samia Chowdhury",
    role: "PTE Instructor & Oral Fluency Specialist",
    title: "PTE Instructor | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "PTE 88+ Oral Fluency 90",
    badge: "Phonetics & Pronunciation Lead",
    image: "/images/instructors/samia.jpg",
    experience: "5+ Years Mentorship",
    studentsTrained: "380+ Confident Speakers",
    targetSuccessRate: "98.2% Speaking Target Score",
    shortBio:
      "Expert oral phonetics and pronunciation coach dedicated to helping non-native speakers conquer PTE voice recognition algorithms.",
    fullBio: [
      "Samia Chowdhury is renowned among PTE aspirants for solving the single biggest roadblock faced by South Asian test-takers: automated speaking evaluation penalties caused by pitch mismatch, unnatural mic hesitation, and breath pauses.",
      "With specialized training in applied phonetics and cognitive linguistics, Samia developed the 'Steady-Stream Intonation Protocol' which allows students with diverse regional accents to consistently record 85+ and 90 scores in Speaking without attempting unnatural artificial accents.",
      "She oversees the daily 1-on-1 Speaking Lab at Universal Language, providing minute-by-minute audio waveform analysis to calibrate student microphones, breathing points, and pace.",
    ],
    quote:
      "You don't need a fake foreign accent to get 90 in PTE Speaking. The machine rewards clarity, consistent volume modulation, and steady oral cadence. We teach you exactly what the algorithm hears.",
    specialties: [
      "PTE Speaking Machine-Recognition Calibration",
      "Read Aloud Chunking & Phrasing Modulation",
      "Repeat Sentence Short-Term Working Memory Techniques",
      "Describe Image & Retell Lecture Mental Mapping",
      "Pronunciation & Intonation Correction for Non-Native Speakers",
    ],
    certifications: [
      "Pearson Certified Academic Language Instructor",
      "Applied English Phonetics & Speech Therapy Practitioner",
      "TESOL / TEFL 150-Hour Certified Educator",
    ],
    education: [
      "Master of Arts in Applied Linguistics & ELT",
      "Bachelor of Arts in English Literature (Honours)",
    ],
    featuredCourses: [
      {
        title: "Speaking & Fluency 90 Breakthrough Lab",
        duration: "3 Weeks • 12 Practical Labs",
        description:
          "Intensive 1-on-1 audio diagnostic labs calibrating microphone distance, intonation, and rhythm.",
      },
      {
        title: "PTE Comprehensive Foundation Course",
        duration: "6 Weeks • 22 Sessions",
        description:
          "From beginner grammar to 65+ confidence across all 4 communicative test modules.",
      },
    ],
    scorecardHighlights: [
      { label: "PTE Overall", value: "88", sublabel: "Band 8.5 Equivalent" },
      { label: "Oral Fluency", value: "90/90", sublabel: "Perfect Cadence" },
      { label: "Pronunciation", value: "89/90", sublabel: "Acoustic Clarity" },
      { label: "Speaking Total", value: "90/90", sublabel: "Full Marks" },
    ],
    socials: {
      whatsapp: "8801772224283",
      email: "samia@universallanguage.com.bd",
      linkedin: "https://linkedin.com",
    },
  },
];

// All profiles combined (includes Founder for direct routing / backwards-compatibility)
export const ALL_PROFILES: Instructor[] = [FOUNDER_PROFILE, ...INSTRUCTORS];

export function getInstructorBySlug(slug: string): Instructor | undefined {
  return ALL_PROFILES.find(
    (inst) =>
      inst.slug === slug ||
      inst.id === slug ||
      (slug === "nakibul" && inst.id === "nakibul-quader-chowdhury") ||
      (slug === "nakibul-quader-chowdhury" && inst.id === "nakibul-quader-chowdhury")
  );
}
