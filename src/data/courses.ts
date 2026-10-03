export type PackageCategory = "course" | "service";
export type CourseExamType = "pte" | "ielts" | "duolingo" | "service";

export interface OverviewFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface LearningPhase {
  badge: string;
  title: string;
  description: string;
  topics: string[];
}

export interface IncludedItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface PricingOption {
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  currency: string;
  popular?: boolean;
  features: string[];
}

export interface CourseCurriculumModule {
  moduleNumber?: number;
  title: string;
  lecturesCountBadge: string;
  subtitle?: string;
  description?: string;
  note?: string;
  isFree?: boolean;
  lectures: string[];
}

export interface CurriculumOverview {
  totalLectures: string;
  freeReviewSessions: string;
  modulesCount: string;
  examFocus: string;
  totalSummary: string;
}

export interface WhatYouWillGainItem {
  title: string;
  description: string;
}

export interface CoursePackage {
  id: string;
  slug: string;
  category: PackageCategory;
  examType?: CourseExamType;
  title: string;
  heroHighlight: string;
  heroTitle: string;
  heroSubtitle: string;
  badge?: string;
  badgeType?: "popular" | "beginner" | "booster" | "group" | "official";
  thumbnailImage: string;
  tagline: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  priceNote?: string;
  format: string;
  classesCount: string;
  duration: string;
  classDuration?: string;
  weeklySchedule?: string;
  totalHours?: string;
  pricingOptions?: PricingOption[];
  tickerItems: string[];
  curriculumOverview?: CurriculumOverview;
  curriculumModules?: CourseCurriculumModule[];
  whatYouWillGain?: WhatYouWillGainItem[];
  overview: {
    badge: string;
    heading: string;
    description: string;
    features: OverviewFeature[];
  };
  learningJourney: {
    heading: string;
    highlight: string;
    phase1: LearningPhase;
    phase2: LearningPhase;
  };
  whatIsIncluded: {
    heading: string;
    highlight: string;
    items: IncludedItem[];
  };
  whoIsThisFor: {
    heading: string;
    highlight: string;
    subtitle: string;
    checklist: string[];
  };
  ctaBanner: {
    heading: string;
    priceText: string;
    subText: string;
    buttonText: string;
  };
  faqs: CourseFAQ[];
}

export const COURSES_AND_SERVICES: CoursePackage[] = [
  // 2. Complete PTE A-Z (Most Popular)
  {
    id: "pte-a-z",
    slug: "complete-pte-a-z-masterclass",
    category: "course",
    examType: "pte",
    title: "Complete PTE A-Z Masterclass",
    heroHighlight: "Complete PTE A-Z",
    heroTitle: "Fastest Route to 79+ in PTE",
    heroSubtitle:
      "Our flagship 1-on-1 intensive program designed for ambitious test-takers aiming for 65+ to 79+ in the shortest possible timeframe with proven proprietary templates.",
    badge: "Most Popular",
    badgeType: "popular",
    thumbnailImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    tagline: "Complete A-Z course – fastest route to 79+ in PTE",
    shortDescription:
      "Our flagship 1-on-1 intensive program designed for serious aspirants aiming for 65+ to 79+ in the shortest possible timeframe.",
    price: 10500,
    originalPrice: 12500,
    currency: "BDT",
    format: "PRIVATE (1:1)",
    classesCount: "12 One-to-One Intensive Masterclasses",
    duration: "3 to 4 Weeks",
    tickerItems: [
      "Most Popular PTE Course",
      "Fastest Route to 79+ in PTE",
      "100% Tested 90/90 Templates",
      "Private 1-on-1 Intensive Mentorship",
      "VIP APEUni Portal Included",
      "94.6% First-Time Pass Rate",
    ],
    overview: {
      badge: "Flagship Program",
      heading: "Master Every Question Type. Deploy Flawless Templates. Secure 79+.",
      description:
        "The PTE A-Z Masterclass is Bangladesh's most proven and trusted 1-on-1 coaching program. We cut out all fluff and teach you the exact proprietary templates, high-frequency question secrets, and Pearson AI scoring shortcuts that deliver 79+ band scores.",
      features: [
        {
          title: "Tested 90/90 Templates",
          description: "Universal Speaking, Writing & Retell Lecture structures with zero memory strain.",
          iconName: "FileText",
        },
        {
          title: "Private 1-on-1 Delivery",
          description: "Learn at your own pace without the distraction of large crowded classrooms.",
          iconName: "Users",
        },
        {
          title: "Speaking Oral Fluency Calibration",
          description: "Fine-tune microphone pitch, speed, and continuous speech rhythm.",
          iconName: "Mic",
        },
        {
          title: "Core 6 High-Weightage Tasks",
          description: "Focus 80% of energy on the 6 question types that control 70% of total score.",
          iconName: "Zap",
        },
        {
          title: "Full Mock Scorecard Audit",
          description: "Detailed pre-exam review by a 90/90 certified master instructor.",
          iconName: "Award",
        },
        {
          title: "Local & Flexible Scheduling",
          description: "Convenient evening and weekend classes tailored for working professionals.",
          iconName: "Clock",
        },
      ],
    },
    learningJourney: {
      heading: "Your Fast-Track",
      highlight: "Journey",
      phase1: {
        badge: "PHASE 1",
        title: "PTE Strategy, Scoring Matrix & Speaking/Writing Mastery",
        description:
          "Decode the cross-module scoring algorithm and master the high-scoring templates for Speaking and Writing with instant computer-feedback drills.",
        topics: [
          "Cross-Module Scoring Matrix (How Speaking controls Reading & Listening)",
          "Read Aloud Pacing & One-Line Strategy vs Traditional Delivery",
          "Repeat Sentence 3-Second Audio Memory Retention System",
          "Describe Image & Retell Lecture 1-Universal-Template Technique",
          "Summarize Written Text Grammatical Compound Sentences",
          "Essay Structure: 90/90 Foolproof Formula with Zero Lexical Loss",
        ],
      },
      phase2: {
        badge: "PHASE 2",
        title: "Reading & Listening Engine + Mock Exam Simulation",
        description:
          "Dominate the reading collocations and listening high-yield questions before undertaking full-length test center exam simulations.",
        topics: [
          "Reading & Writing Fill in the Blanks: Top 1,000 Academic Collocations",
          "Re-order Paragraphs: Logical Reference & Chronological Triggers",
          "Write From Dictation: 100% Repeated Exam Question Bank Mastery",
          "Summarize Spoken Text: High-Precision Keyword Harvesting",
          "Highlight Incorrect Words: Live Audio Speed Synchronization",
          "Full Timed Pearson Exam Simulation on VIP Portal",
          "Individual Error Audit & Test Center Strategy (Dhanmondi / Banani)",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "APEUni VIP Account (30 Days)",
          description: "Full unlimited AI scoring tool access with real exam algorithm.",
          iconName: "Laptop",
        },
        {
          title: "Master Template Vault",
          description: "Copy-paste 90/90 templates with zero grammatical risk.",
          iconName: "FileText",
        },
        {
          title: "Full Mock Test Audit",
          description: "Personal 1-on-1 scorecard dissection before your real exam.",
          iconName: "CheckCircle2",
        },
        {
          title: "Dedicated WhatsApp Line",
          description: "Direct connection with your senior mentor until your test date.",
          iconName: "MessageSquare",
        },
        {
          title: "2026 Golden Prediction Bank",
          description: "Verified repeated questions from recent Dhaka Pearson test centers.",
          iconName: "BookOpen",
        },
        {
          title: "Exam Slot Booking Assistance",
          description: "Voucher reservation support with zero credit card surcharge.",
          iconName: "ShieldCheck",
        },
        {
          title: "Speaking Audio Review",
          description: "Daily pronunciation and rhythm check on your practice recordings.",
          iconName: "Mic",
        },
        {
          title: "Collocation Master PDF",
          description: "Curated 1,000 high-frequency academic collocations for Reading.",
          iconName: "PenTool",
        },
        {
          title: "Test-Day Protocol Briefing",
          description: "Noise-management and center check-in checklist to prevent test anxiety.",
          iconName: "Award",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "Tailored for ambitious test takers who need guaranteed score results",
      checklist: [
        "Applicants needing Australia PR 20 points (79+ each band) or Canada Express Entry",
        "Students aiming for top universities requiring 58+ to 65+ minimum scores",
        "Repeated test-takers stuck at 60-64 unable to cross the critical 65 or 79 mark",
        "Busy professionals seeking flexible 1-on-1 evening or weekend timings",
        "Those who want proven, time-tested templates rather than memorizing textbooks",
        "Students who want direct 1-to-1 attention from a 90/90 certified instructor",
        "Candidates with an exam deadline within the next 3 to 5 weeks",
        "Test takers who want complete mock test evaluation before paying for the exam",
      ],
    },
    ctaBanner: {
      heading: "Enroll in the Complete PTE A-Z Masterclass",
      priceText: "BDT 10,500",
      subText: "12 One-to-One Classes | 3 to 4 Weeks Sprint",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "Why is PTE A-Z our most popular course?",
        answer:
          "Because it delivers the highest return on investment. The 1-on-1 format means the mentor focuses purely on your specific score leaks, resulting in a 94.6% first-attempt success rate.",
      },
      {
        question: "Can I finish this course in 2 to 3 weeks if my exam date is near?",
        answer:
          "Yes! Since this is a private 1-on-1 course, we can schedule 4 to 5 classes per week so you can finish the full curriculum in under 3 weeks.",
      },
      {
        question: "Is the fee payable in installments?",
        answer:
          "Yes, we provide an easy 2-part installment option: 50% upon enrollment and 50% after the 6th class.",
      },
      {
        question: "Are mock tests and AI software access included?",
        answer:
          "Yes, the BDT 10,500 fee is all-inclusive with 30 days of VIP AI practice portal access, materials, and mock audits.",
      },
    ],
  },

  // 3. Crash PTE (Score Booster)
  {
    id: "crash-pte",
    slug: "crash-pte-score-booster",
    category: "course",
    examType: "pte",
    title: "Crash PTE (Score Booster)",
    heroHighlight: "Crash PTE",
    heroTitle: "Score Booster Sprint (10 Days)",
    heroSubtitle:
      "Short on time? An intensive 10-day 1-on-1 boot camp pinpointed directly at high-mark questions, template refinement, and rapid score gains.",
    badge: "Fastest Improvement",
    badgeType: "booster",
    thumbnailImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    tagline: "One-to-one coaching for fast score improvement",
    shortDescription:
      "Short on time? A super-focused 10-day 1-on-1 boot camp pinpointed directly at high-mark questions and instant score jumps.",
    price: 9000,
    originalPrice: 11000,
    currency: "BDT",
    format: "PRIVATE (1:1)",
    classesCount: "10 Master Classes",
    duration: "10 Days Intensive",
    tickerItems: [
      "10 Days Fast-Track Score Booster",
      "One-to-One Coaching for Rapid Improvement",
      "Score Gap Autopsy",
      "Immediate Oral Fluency Jump",
      "2026 Dhaka Test Center Predictions",
    ],
    overview: {
      badge: "Emergency Sprint",
      heading: "Fix Your Score Leaks Fast. Refine Templates. Walk in Confident.",
      description:
        "Targeted specifically for students who already took the PTE exam and missed their target by 3-8 points, or those with an upcoming test date within the next 10-14 days. We don't waste time on low-weightage tasks; we fix your specific score leaks immediately.",
      features: [
        {
          title: "Scorecard Autopsy",
          description: "Analyze enabling skills to pinpoint exactly where marks were lost.",
          iconName: "Award",
        },
        {
          title: "Microphone Calibration",
          description: "Voice pitch and breathing drills to satisfy Pearson oral fluency sensors.",
          iconName: "Mic",
        },
        {
          title: "WFD & RA Power Drills",
          description: "Target the two tasks that deliver over 60 marks to your scorecard.",
          iconName: "Zap",
        },
        {
          title: "Template Emergency Polish",
          description: "Replace ineffective templates with foolproof 90/90 structures.",
          iconName: "FileText",
        },
        {
          title: "Rapid AI Mock Simulation",
          description: "Realistic exam-like tests with same-day feedback from your mentor.",
          iconName: "Laptop",
        },
        {
          title: "Direct Priority Line",
          description: "Continuous WhatsApp guidance right up to the morning of your exam.",
          iconName: "PhoneCall",
        },
      ],
    },
    learningJourney: {
      heading: "The 10-Day",
      highlight: "Sprint",
      phase1: {
        badge: "DAYS 1 - 5",
        title: "Scorecard Autopsy & Speaking/Writing Emergency Drills",
        description:
          "Identify lost points from previous attempts and immediately correct Read Aloud, Repeat Sentence, and Essay formulation.",
        topics: [
          "Scorecard Diagnostic & Score Leak Identification",
          "Read Aloud Pitch & Rhythm Adjustment for AI Recognition",
          "Repeat Sentence Audio Retention Drills",
          "Essay Structure Revision & Grammar Check",
          "Summarize Spoken Text Keyword Extraction Drills",
        ],
      },
      phase2: {
        badge: "DAYS 6 - 10",
        title: "High-Yield Tasks, Prediction Bank & Center Simulation",
        description:
          "Master the top repeated questions for Write From Dictation and Reading FIB, followed by a scored full mock test.",
        topics: [
          "Write From Dictation Top 200 Repeated Question Bank",
          "Reading & Writing Blanks Elimination Shortcuts",
          "Timed Section Strategy Under Exam Pressure",
          "Full 2-Hour Scored AI Mock Exam",
          "Final Teacher Clearance & Exam Day Action Plan",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "10-Day AI Practice Portal",
          description: "Full AI scoring platform access during your intensive boot camp.",
          iconName: "Laptop",
        },
        {
          title: "Scorecard Diagnostic Audit",
          description: "Line-by-line review of your past exam to locate lost marks.",
          iconName: "Award",
        },
        {
          title: "Top 200 WFD & RA Prediction",
          description: "The most commonly repeated questions seen in Dhaka centers this week.",
          iconName: "BookOpen",
        },
        {
          title: "Express WhatsApp Support",
          description: "Direct priority line with trainer until test date.",
          iconName: "MessageSquare",
        },
        {
          title: "Mic Pitch & Tone Check",
          description: "Live headphone test to ensure optimal audio capture.",
          iconName: "Headphones",
        },
        {
          title: "Full Mock Test + Audit",
          description: "Final exam dress rehearsal before your real test.",
          iconName: "CheckCircle2",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "Designed for test takers under tight timelines",
      checklist: [
        "Students with an upcoming exam date in 1 to 2 weeks",
        "Test-takers who got 55-62 and urgently need to cross 65+",
        "Candidates who scored 72-76 and need that final push to 79+",
        "Those who need immediate template correction and mock test diagnostics",
        "Applicants who cannot commit to a 2-month course and want an intensive sprint",
      ],
    },
    ctaBanner: {
      heading: "Book the 10-Day Crash Score Booster",
      priceText: "BDT 9,000",
      subText: "10 Master Classes | 10 Days Sprint",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "Can my score really improve in just 10 days?",
        answer:
          "Yes! Most students missing their target score by a few marks don't suffer from bad English—they lose marks from bad mic positioning, wrong pacing, or spending time on low-value questions. Fixing these in 1:1 sessions produces immediate score jumps.",
      },
      {
        question: "Can I take two classes in one day if my exam is next week?",
        answer:
          "Yes, we can arrange 2 sessions per day (e.g. morning and evening) so you complete the full 10 sessions in 5 to 7 days.",
      },
    ],
  },

  // 4. Focused Batch (Group Learning)
  {
    id: "focused-batch",
    slug: "focused-batch-small-group",
    category: "course",
    examType: "pte",
    title: "Focused Batch (Group Learning)",
    heroHighlight: "Focused Batch",
    heroTitle: "Small-Group Coaching with Personal Care",
    heroSubtitle:
      "Affordable small-group coaching with personalized attention. Strictly limited to 5-6 students per batch for live speaking practice and peer motivation.",
    badge: "Group Learning",
    badgeType: "group",
    thumbnailImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    tagline: "Affordable small-group coaching with personalized attention",
    shortDescription:
      "Top-tier coaching at our most affordable budget. Small intimate batches (max 5-6 students) with peer practice and live mentoring.",
    price: 7000,
    originalPrice: 9000,
    currency: "BDT",
    format: "Small Group Batch",
    classesCount: "12 Master Classes",
    duration: "1 Month",
    tickerItems: [
      "Small-Group Coaching (Max 5-6 Students)",
      "Affordable Premier Training in Dhaka",
      "Live Interactive Speaking Practice",
      "Full Course Materials & Portal Included",
      "Recorded Class Backups",
    ],
    overview: {
      badge: "Collaborative Learning",
      heading: "Small Batch. Dedicated Attention. Budget-Friendly Excellence.",
      description:
        "Get the comprehensive Universal Language curriculum at a budget-friendly rate. Unlike generic institutes with 25-30 students per room, our Focused Batch limits seats to only 5 to 6 students so everyone gets individual speaking practice, live feedback, and personalized attention.",
      features: [
        {
          title: "Max 5-6 Students",
          description: "Strictly capped batch size so you never get lost in the crowd.",
          iconName: "Users",
        },
        {
          title: "Live Speaking Practice",
          description: "Every student speaks and receives verbal corrections in every class.",
          iconName: "Mic",
        },
        {
          title: "Full Materials Included",
          description: "Handbooks, lecture slides, and prediction files provided free.",
          iconName: "BookOpen",
        },
        {
          title: "HD Video Recordings",
          description: "Missed a class? Re-watch every session anytime on your portal.",
          iconName: "Laptop",
        },
        {
          title: "Problem Solving Sessions",
          description: "Dedicated weekly doubt-clearing sessions before mock tests.",
          iconName: "HelpCircle",
        },
        {
          title: "Active Study Community",
          description: "Study and practice with motivated peers aiming for the same targets.",
          iconName: "MessageSquare",
        },
      ],
    },
    learningJourney: {
      heading: "The 1-Month",
      highlight: "Curriculum",
      phase1: {
        badge: "WEEKS 1 - 2",
        title: "Speaking & Writing Modules with Live Drills",
        description:
          "Master the oral fluency algorithms and tested essay templates through interactive group presentations.",
        topics: [
          "PTE Structure, Cross-Module Scoring, and Algorithm Overview",
          "Read Aloud & Repeat Sentence Live Group Benchmarking",
          "Describe Image & Retell Lecture 90/90 Templates",
          "Summarize Written Text Sentence Construction Drills",
          "Essay Structure & Automated Spelling/Lexical Checks",
        ],
      },
      phase2: {
        badge: "WEEKS 3 - 4",
        title: "Reading, Listening & Batch Mock Test Simulation",
        description:
          "Tackle academic collocations and high-yield listening questions, concluding with a simulated mock exam.",
        topics: [
          "Reading & Writing Fill in the Blanks: Collocation Bank",
          "Re-order Paragraphs Logical Connectors",
          "Write From Dictation Repeated Question Drills",
          "Summarize Spoken Text Keyword Gathering",
          "Full Batch Mock Test & Individual Score Audit",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "1-Month AI Practice Portal",
          description: "Complete access to question banks and scored evaluations.",
          iconName: "Laptop",
        },
        {
          title: "Lecture Notes & Workbooks",
          description: "PDF handbooks with templates, vocabulary, and grammar rules.",
          iconName: "BookOpen",
        },
        {
          title: "Active Study Group Community",
          description: "Practice speaking and share notes with batch-mates daily.",
          iconName: "Users",
        },
        {
          title: "Batch Mock Test with Evaluation",
          description: "Comprehensive exam simulation before booking your test date.",
          iconName: "CheckCircle2",
        },
        {
          title: "Recorded Class Replays",
          description: "Access HD video recordings of every class for later revision.",
          iconName: "Laptop",
        },
        {
          title: "Exam Slot Booking Support",
          description: "Hassle-free booking assistance at local Pearson test centers.",
          iconName: "ShieldCheck",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "Ideal for students seeking premier coaching at an affordable price",
      checklist: [
        "College & university students seeking budget-friendly premier training",
        "Learners who thrive in interactive peer groups and competitive study environments",
        "Anyone planning to take the PTE exam within the next 1 to 2 months",
        "Friends or study partners preparing together for study abroad visas",
        "Students wanting live trainer interaction without paying full 1-on-1 private fees",
      ],
    },
    ctaBanner: {
      heading: "Join the Upcoming Focused Batch",
      priceText: "BDT 7,000",
      subText: "12 Classes | 1 Month Duration | Max 6 Seats",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "How many students are in one batch?",
        answer:
          "We strictly limit each batch to 5-6 students. This ensures that every student speaks live and gets individual attention in every single session.",
      },
      {
        question: "What happens if I miss a live class?",
        answer:
          "Every class is recorded in HD video and uploaded to your student portal immediately, along with trainer notes and slide decks.",
      },
    ],
  },

  // 5. Official PTE Registration
  {
    id: "pte-registration",
    slug: "official-pearson-pte-registration",
    category: "service",
    examType: "service",
    title: "Official PTE Registration",
    heroHighlight: "Official Pearson",
    heroTitle: "PTE Exam Registration in Bangladesh",
    heroSubtitle:
      "Register for PTE at the best price in Bangladesh. Authorized Pearson exam booking with zero international card fees, instant slot confirmation, and exam day support.",
    badge: "Official Pearson Partner",
    badgeType: "official",
    thumbnailImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    tagline: "Register for PTE at the Best Price in Bangladesh",
    shortDescription:
      "Book your Pearson PTE Academic or Core exam slot instantly without international credit card hassles or foreign exchange markups.",
    price: 25500,
    priceNote: "(USD 220)",
    currency: "BDT",
    format: "Official Service",
    classesCount: "Instant Confirmation",
    duration: "Same Day Booking",
    tickerItems: [
      "Authorized Pearson Partner",
      "Zero Dual Currency Card Fees",
      "Pay Locally via bKash / Nagad / Bank",
      "Instant Pearson Official Invoice",
      "Free 2026 Prediction Bank Included",
    ],
    overview: {
      badge: "Authorized Service",
      heading: "No Credit Card? No Problem. Secure Your Pearson Slot Instantly.",
      description:
        "Avoid costly bank endorsement fees, international transaction blocks, or credit card failures. As an authorized Pearson booking partner, Universal Language books your official exam slot at the official standard price with local payment options (bKash, Nagad, or Bank Transfer) and complimentary exam center advisory.",
      features: [
        {
          title: "Zero Surcharges",
          description: "Pay the exact official Pearson fee without bank endorsement charges.",
          iconName: "ShieldCheck",
        },
        {
          title: "Local Payment Methods",
          description: "Pay conveniently via bKash, Nagad, Rocket, or direct bank transfer.",
          iconName: "PhoneCall",
        },
        {
          title: "Official Invoice Delivered",
          description: "Direct confirmation sent to your registered Pearson MyPTE account.",
          iconName: "FileText",
        },
        {
          title: "Center Advisory",
          description: "Recommendations on the best test centers (Dhanmondi, Banani, Panthapath).",
          iconName: "Award",
        },
        {
          title: "Rescheduling Guidance",
          description: "Assistance if you need to adjust your exam date per Pearson policy.",
          iconName: "Clock",
        },
        {
          title: "Free Prediction Bank",
          description: "Receive our latest repeated questions pack (Worth Tk. 2,000) free.",
          iconName: "BookOpen",
        },
      ],
    },
    learningJourney: {
      heading: "Simple Booking",
      highlight: "Process",
      phase1: {
        badge: "STEP 1",
        title: "Passport Verification & Slot Selection",
        description:
          "We verify the exact spelling of your full name matching your physical passport and help you pick the best date, time, and center in Dhaka or Chittagong.",
        topics: [
          "Passport Credential Cross-Check",
          "Test Center Selection (Dhanmondi, Banani, Panthapath)",
          "Optimal Time Slot Pick (Morning vs Afternoon)",
          "Candidate Profile Synchronization on MyPTE",
        ],
      },
      phase2: {
        badge: "STEP 2",
        title: "Instant Voucher Activation & Official Confirmation",
        description:
          "Direct invoice & appointment letter generated on Pearson's system within 30 minutes, followed by exam day protocol guidance.",
        topics: [
          "Official Pearson Enterprise Voucher Activation",
          "Direct Appointment Email Delivery to Candidate",
          "Center Entry Rules & Biometric Guidelines",
          "Complementary Prediction Question Pack Delivery",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "Official Pearson Appointment Letter",
          description: "Official confirmation with test center map and timing details.",
          iconName: "FileText",
        },
        {
          title: "Free 2026 Prediction Pack",
          description: "Latest high-frequency questions bank included with every booking.",
          iconName: "BookOpen",
        },
        {
          title: "Test Center Briefing",
          description: "Guidance on palm vein scan, locker access, and headset checking.",
          iconName: "ShieldCheck",
        },
        {
          title: "Rescheduling Advisory",
          description: "Assistance if your study schedule changes before the test date.",
          iconName: "Clock",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Service",
      highlight: "For?",
      subtitle: "For test takers wanting secure and hassle-free exam registration",
      checklist: [
        "Students without an endorsed international dual-currency credit card",
        "Candidates wanting to pay in Bangladeshi Taka via bKash, Nagad, or Bank",
        "Test-takers who need urgent slot booking for Dhaka or Chittagong centers",
        "Anyone who wants 100% verified Pearson booking receipt and exam day support",
      ],
    },
    ctaBanner: {
      heading: "Book Your Official Pearson Exam Slot",
      priceText: "BDT 25,500 (USD 220)",
      subText: "Official Pearson Exam Booking | Zero Surcharge",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "Do I need a dual currency credit card?",
        answer:
          "No! You can pay easily using your regular bKash, Nagad, or Bangladeshi bank account in local BDT.",
      },
      {
        question: "Will the appointment show in my official Pearson MyPTE account?",
        answer:
          "Yes, 100%. The booking is processed directly onto your official Pearson account. You receive the confirmation email directly from Pearson.",
      },
    ],
  },

  // 6. PTE Rescore
  {
    id: "pte-rescore",
    slug: "official-pearson-pte-rescore-service",
    category: "service",
    examType: "service",
    title: "Official PTE Rescore Service",
    heroHighlight: "Official Pearson",
    heroTitle: "PTE Rescore Quality Review",
    heroSubtitle:
      "Request an official PTE Rescore with expert review of speaking and writing responses through Pearson's quality assurance process adhering strictly to the 14-day deadline.",
    badge: "Official Rescore Support",
    badgeType: "official",
    thumbnailImage:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    tagline: "Official PTE Rescore with expert review through Pearson's QA process",
    shortDescription:
      "Missed your target score by only 1 or 2 points in Speaking or Writing? Request an official Pearson Rescore review through authorized channels.",
    price: 22000,
    currency: "BDT",
    format: "Official Service",
    classesCount: "Case Processing",
    duration: "14-Day Cutoff",
    tickerItems: [
      "Official Pearson QA Rescore Review",
      "Speaking & Writing Re-Evaluation",
      "Strict 14-Day Deadline Compliance",
      "Scorecard Feasibility Audit",
    ],
    overview: {
      badge: "Quality Assurance",
      heading: "Missed Target by 1-2 Points? Review Your Score Through Official Channels.",
      description:
        "Request an official PTE Rescore with expert review of speaking and writing responses through Pearson's quality assurance process. If you believe your oral responses were misjudged by background noise or mic calibration issues, our certified team handles your official rescore application.",
      features: [
        {
          title: "Pre-Filing Feasibility Audit",
          description: "We review your Enabling Skills first to advise if a rescore is worth the cost.",
          iconName: "Award",
        },
        {
          title: "14-Day Deadline Adherence",
          description: "Immediate filing before the strict Pearson cutoff period expires.",
          iconName: "Clock",
        },
        {
          title: "Speaking & Writing Focus",
          description: "Per Pearson policy, only spoken and open-ended written items are re-assessed.",
          iconName: "FileText",
        },
        {
          title: "Direct Case Management",
          description: "Official ticket tracking until formal Pearson outcome notification.",
          iconName: "ShieldCheck",
        },
      ],
    },
    learningJourney: {
      heading: "The Rescore",
      highlight: "Process",
      phase1: {
        badge: "STAGE 1",
        title: "Scorecard Feasibility & Enabling Skills Audit",
        description:
          "We examine Oral Fluency, Pronunciation, Grammar, and Spelling to evaluate the mathematical likelihood of a score change.",
        topics: [
          "Enabling Skills Ratio Analysis",
          "Test Center Audio Incident Correlation",
          "Honest Advisory on Retake vs Rescore Return-on-Investment",
        ],
      },
      phase2: {
        badge: "STAGE 2",
        title: "Official Submission & Tracking",
        description:
          "Formal ticket filing via Pearson enterprise channel and direct case follow-up until updated result is issued.",
        topics: [
          "Formal Quality Assurance Ticket Submission",
          "Incident Report Attachment (if hardware issue occurred)",
          "Regular Status Follow-Up",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "Expert Scorecard Feasibility Report",
          description: "Senior instructor assessment of score change probability.",
          iconName: "Award",
        },
        {
          title: "Official Pearson Filing",
          description: "Submission directly through authorized partner portal.",
          iconName: "ShieldCheck",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Service",
      highlight: "For?",
      subtitle: "For test takers who missed their target by 1-2 points",
      checklist: [
        "Candidates who scored 63-64 (needing 65) or 77-78 (needing 79)",
        "Test takers who experienced headset or background noise anomalies during the test",
        "Anyone within 14 calendar days of receiving their official scorecard",
      ],
    },
    ctaBanner: {
      heading: "Apply for Official Pearson Rescore",
      priceText: "BDT 22,000",
      subText: "Official Pearson QA Process | Strict 14-Day Deadline",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "Can Reading and Listening scores change in a rescore?",
        answer:
          "No. Pearson policy states that multiple choice and fill in the blanks are machine scored with zero subjectivity. Only Speaking recordings and Writing essays are re-evaluated.",
      },
      {
        question: "What is the deadline to apply?",
        answer:
          "You must apply strictly within 14 calendar days from the date your score was released. Applications after 14 days are not accepted.",
      },
    ],
  },

  // 7. PTE Practice Portal
  {
    id: "pte-practice-portal",
    slug: "pte-ai-practice-portal-subscriptions",
    category: "service",
    examType: "service",
    title: "PTE Practice Portal Subscriptions",
    heroHighlight: "PTE Practice",
    heroTitle: "VIP Portal Subscriptions in Bangladesh",
    heroSubtitle:
      "Prepare for your PTE Academic/Core exam with authentic AI practice portals—Alfa PTE, APEUni, and Official Pearson Practice. Instant activation and hassle-free local payment.",
    badge: "AI Practice Tools",
    badgeType: "booster",
    thumbnailImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tagline: "Prepare with verified AI practice portals (Alfa PTE / APEUni / Official Pearson)",
    shortDescription:
      "Get official VIP subscriptions to the world's best AI scoring portals (Alfa PTE, APEUni, Official Pearson Practice) with instant activation.",
    price: 1200,
    priceNote: "Starting from",
    currency: "BDT",
    format: "Software Subscription",
    classesCount: "Instant Access",
    duration: "1 Month / 1 Week",
    pricingOptions: [
      {
        name: "Alfa PTE (1 Month VIP)",
        duration: "1 Month",
        price: 1200,
        originalPrice: 1500,
        currency: "BDT",
        popular: false,
        features: ["Full AI Scoring", "Unlimited Practice", "Monthly Prediction Bank", "Pronunciation Feedback"],
      },
      {
        name: "APEUni (1 Month VIP)",
        duration: "1 Month",
        price: 2000,
        originalPrice: 2500,
        currency: "BDT",
        popular: true,
        features: ["#1 Used Portal Globally", "99% Exam Question Matching", "Full Length Mock Tests", "Detailed Score Breakdown"],
      },
      {
        name: "Official Pearson Practice Portal (1 Week)",
        duration: "1 Week",
        price: 4150,
        originalPrice: 5000,
        currency: "BDT",
        popular: false,
        features: ["Official Pearson Mock Tests", "Exact Real Algorithm", "Authentic Past Papers", "Official Scorecard Generated"],
      },
    ],
    tickerItems: [
      "Alfa PTE VIP 1 Month - BDT 1,200",
      "APEUni VIP 1 Month - BDT 2,000",
      "Official Pearson Practice 1 Week - BDT 4,150",
      "Instant Activation in 10 Minutes",
      "Pay via bKash / Nagad",
    ],
    overview: {
      badge: "Essential Tools",
      heading: "Practice on Real Exam Algorithms. Build Speed and Accuracy.",
      description:
        "Consistent, AI-scored practice is the key to mastering PTE Academic and Core. We provide instant, hassle-free VIP activation for the most trusted platforms with real-time scoring, pronunciation analysis, and predicted question banks.",
      features: [
        {
          title: "Instant 10-Minute Activation",
          description: "VIP login credentials delivered directly to your WhatsApp or email.",
          iconName: "Zap",
        },
        {
          title: "Unlimited AI Speech Recognition",
          description: "Practice Read Aloud and Repeat Sentence with instant fluency scores.",
          iconName: "Mic",
        },
        {
          title: "Full-Length Scored Mock Tests",
          description: "Simulate test center conditions with real timers and auto-scorecards.",
          iconName: "Laptop",
        },
        {
          title: "Pay Easily via bKash / Nagad",
          description: "No international credit cards needed. Local payment in Bangladeshi Taka.",
          iconName: "PhoneCall",
        },
      ],
    },
    learningJourney: {
      heading: "Portal",
      highlight: "Options",
      phase1: {
        badge: "OPTION 1",
        title: "APEUni VIP & Alfa PTE Portals",
        description:
          "The world's leading third-party practice environments with updated weekly exam predictions, AI pronunciation feedback, and full question banks.",
        topics: [
          "APEUni VIP 30 Days (BDT 2,000)",
          "Alfa PTE VIP 30 Days (BDT 1,200)",
          "Over 5,000+ Real Repeated Exam Questions",
          "Cross-Platform Access on Smartphone & Laptop",
        ],
      },
      phase2: {
        badge: "OPTION 2",
        title: "Official Pearson Scored Practice Tests",
        description:
          "The authentic test simulator created directly by Pearson with authentic past test papers and the genuine machine algorithm.",
        topics: [
          "Official Pearson Scored Mock Tests",
          "Exact Diagnostic Score Report",
          "100% Reliable Benchmark for Test Readiness",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "VIP Account Activation",
          description: "Direct premium activation on your own personal email account.",
          iconName: "Zap",
        },
        {
          title: "Mic & Headset Setup Guide",
          description: "Optimized sensitivity configurations for maximum oral fluency recognition.",
          iconName: "Headphones",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Service",
      highlight: "For?",
      subtitle: "For self-study learners and students practicing at home",
      checklist: [
        "Self-study students who need authentic AI scoring for Speaking & Writing",
        "Anyone who wants to practice on real exam-like software from home",
        "Students preparing for official mock tests with instant scorecards",
        "Candidates wanting to save on international card fees with local bKash payment",
      ],
    },
    ctaBanner: {
      heading: "Get Your AI Practice Portal Subscription",
      priceText: "Starting from BDT 1,200",
      subText: "Alfa PTE • APEUni • Official Pearson Practice",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "How long does activation take?",
        answer:
          "Activation takes only 10 to 15 minutes after payment confirmation via bKash or Nagad.",
      },
      {
        question: "Can I use the account on mobile and PC?",
        answer:
          "Yes, both APEUni and Alfa PTE support both mobile apps (iOS & Android) and desktop web browsers.",
      },
    ],
  },

  // Duolingo English Test (DET) Mastery
  {
    id: "duolingo-mastery",
    slug: "duolingo-english-test-mastery",
    category: "course",
    examType: "duolingo",
    title: "Duolingo English Test (DET) Mastery",
    heroHighlight: "Duolingo (DET)",
    heroTitle: "Target 125+ Score Program in Bangladesh",
    heroSubtitle:
      "Master the fast-growing online adaptive test accepted by 5,000+ top universities worldwide. Complete preparation covering Interactive Reading, Writing Samples, Speaking Production, and Adaptive AI scoring.",
    badge: "125+ Score Guarantee Track",
    badgeType: "popular",
    thumbnailImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tagline: "Adaptive AI Test Prep – 125+ in 3 to 4 Weeks",
    shortDescription:
      "Dedicated Duolingo English Test coaching covering computer-adaptive question algorithms, Subscores (Literacy, Comprehension, Conversation, Production), and timed drills.",
    price: 10000,
    originalPrice: 13000,
    currency: "BDT",
    format: "ONLINE (1:1 & SMALL GROUP)",
    classesCount: "12 Master Classes",
    duration: "1 Month",
    tickerItems: [
      "Accepted by 5,000+ Global Universities",
      "Adaptive Computer Algorithm Decoded",
      "Literacy, Conversation & Production Drills",
      "Instant Diagnostic Score Assessment",
      "Free Exam Booking & Voucher Guidance",
    ],
    overview: {
      badge: "Modern AI Test Prep",
      heading: "Ace the Duolingo English Test. Fast, Affordable, University-Accepted.",
      description:
        "The Duolingo English Test is adaptive, convenient, and accepted by thousands of universities worldwide (including USA, Canada, UK, and Australia). We train you to beat the difficulty curve, maintain typing speed, and excel in both open-ended production and interactive reading.",
      features: [
        {
          title: "Adaptive Algorithm Hacks",
          description: "How to trigger higher difficulty bands early to ensure high baseline scores.",
          iconName: "Zap",
        },
        {
          title: "Interactive Reading Mastery",
          description: "Complete C-Test missing letter passages and text reconstruction.",
          iconName: "BookOpen",
        },
        {
          title: "Speaking & Writing Production",
          description: "Timed templates for Describe an Image, Writing Sample, and Speaking Interview.",
          iconName: "Mic",
        },
        {
          title: "Mock Test Evaluations",
          description: "Full simulation tests on authentic adaptive platforms with subscore breakdown.",
          iconName: "Laptop",
        },
      ],
    },
    learningJourney: {
      heading: "The DET",
      highlight: "Curriculum",
      phase1: {
        badge: "WEEKS 1 - 2",
        title: "Test Mechanics, C-Tests & Speaking Drills",
        description:
          "Master Read and Complete (C-test), Read and Select, Listen and Type, and 90-second speaking prompts.",
        topics: [
          "Understanding the DET Computer Adaptive Scoring Algorithm",
          "Read and Complete: Grammar & Contextual Word Filling",
          "Listen and Type: High-Speed Audio Capture Drills",
          "Read Aloud: Pronunciation, Rhythm & Acoustic AI Sensors",
          "Speaking: Describe an Image in 90 Seconds without Pausing",
        ],
      },
      phase2: {
        badge: "WEEKS 3 - 4",
        title: "Interactive Reading, Extended Writing & Full Simulation",
        description:
          "Conquer the interactive reading section, write 5-minute academic responses with high lexical variety, and sit for realistic mock exams.",
        topics: [
          "Interactive Reading: Complete the Passage & Highlight Passage Details",
          "Writing Sample: 5-Minute Timed Essay with High Lexical Diversity",
          "Speaking Sample: Unscripted Argumentative Response for Admissions Officers",
          "2 Full-Length Timed Computer Adaptive Mock Tests",
          "Official Test-Day Rules, Lighting, and Camera Verification Protocol",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "12 Live Master Sessions",
          description: "Covering all 14 DET question types and computer scoring nuances.",
          iconName: "Laptop",
        },
        {
          title: "DET Practice Platform Access",
          description: "Over 2,000+ realistic practice questions with speech recognition.",
          iconName: "CheckCircle2",
        },
        {
          title: "Writing & Speaking Evaluations",
          description: "Personalized reviews by certified English mentors.",
          iconName: "PenTool",
        },
        {
          title: "Official Booking Assistance",
          description: "Voucher purchase and test environment check support.",
          iconName: "ShieldCheck",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "For test takers wanting a fast, flexible, modern English test",
      checklist: [
        "Applicants targeting universities in USA, Canada, UK, and Europe accepting DET",
        "Students who want an affordable exam (DET costs only $65 vs $220 for other tests)",
        "Anyone who needs official test scores within 48 hours for immediate university deadlines",
        "Learners who prefer taking the test from the comfort of their home",
      ],
    },
    ctaBanner: {
      heading: "Prepare for Your Duolingo English Test",
      priceText: "BDT 10,000",
      subText: "12 Master Classes | 1 Month Duration | Full Practice Materials",
      buttonText: "Enroll in Duolingo Course Now",
    },
    faqs: [
      {
        question: "Is Duolingo English Test accepted for university admissions?",
        answer:
          "Yes! Over 5,000 university programs globally—including NYU, Columbia, Yale, McGill, and many UK & Australian universities—accept DET for undergraduate and graduate admissions.",
      },
      {
        question: "How long does it take to get DET results?",
        answer:
          "Results are delivered to your portal within 48 hours of completing the test.",
      },
    ],
  },

  // 7. Basic to IELTS Course (Basic to Advance)
  {
    id: "basic-to-ielts",
    slug: "basic-to-ielts",
    category: "course",
    examType: "ielts",
    title: "Basic to IELTS Course",
    heroHighlight: "Basic to Advance",
    heroTitle: "IELTS Preparation Course",
    heroSubtitle:
      "Build your English skills from the basics and progress towards IELTS exam preparation with our structured Basic to IELTS Course. Designed for learners who want to strengthen their grammar, improve their reading, listening, writing, and speaking skills, and develop the confidence needed for the IELTS examination.",
    badge: "Basic to Advance",
    badgeType: "popular",
    thumbnailImage:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    tagline: "Build foundational grammar & master all 4 IELTS test modules",
    shortDescription:
      "28 sessions (26 lectures + 2 free review sessions). 2 hours per class, 3 classes per week (approx. 9–10 weeks). Zero-level grammar to high-band IELTS exam readiness.",
    price: 13999,
    originalPrice: 20000,
    currency: "BDT",
    priceNote: "30% OFF",
    format: "LIVE INTERACTIVE (Online / Hybrid)",
    classesCount: "28 Total Sessions (26 Lectures + 2 Free Review)",
    duration: "Approx. 9–10 Weeks (3 Classes / Week • 2 Hours / Class)",
    classDuration: "2 Hours / Session",
    weeklySchedule: "3 Classes / Week",
    totalHours: "56 Hours Total Live Training",
    tickerItems: [
      "2 Hours Per Class",
      "3 Classes Per Week",
      "26 Learning Lectures",
      "2 Free Review Sessions",
      "5 Core Modules",
      "Basic Grammar to IELTS",
      "Academic & General Training",
      "Mock Tests & Band Scoring",
    ],
    curriculumOverview: {
      totalLectures: "26",
      freeReviewSessions: "2",
      modulesCount: "5 Modules",
      examFocus: "IELTS Exam Preparation",
      totalSummary:
        "Total: 28 sessions, including 26 subject-based lectures and 2 free review sessions. Each class duration is 2 hours, held 3 times a week (approx. 9–10 weeks, 56 hours total).",
    },
    curriculumModules: [
      {
        moduleNumber: 1,
        title: "Module 1: Basic Grammar",
        lecturesCountBadge: "8 Classes",
        subtitle: "8 Lectures · Build a strong English foundation",
        description:
          "Learn the essential grammar rules needed to construct correct sentences and communicate confidently in English.",
        lectures: [
          "1. Word Classes, Pronouns & Noun Basics — Parts of speech, pronouns, and nouns.",
          "2. Subject–Verb Agreement — Matching subjects and verbs correctly.",
          "3. Articles, Prefixes & Suffixes — Correct article usage and word formation.",
          "4. Infinitives & the Verb “To Be” — Using to + verb and am, is, are.",
          "5. Modal Verbs — Using can, could, may, might, should, must, and other modals.",
          "6. Passive Voice — Understanding and forming passive sentences.",
          "7. How a Sentence Is Built — Sentence structure, word order, and basic sentence construction.",
          "8. Sentence Types — Simple, compound, and complex sentences.",
        ],
      },
      {
        moduleNumber: 2,
        title: "Module 2: IELTS Reading",
        lecturesCountBadge: "6 Classes",
        subtitle: "6 Lectures · Improve comprehension and accuracy",
        lectures: [
          "9. Introduction to IELTS Reading and Question Types",
          "10. Skimming and Scanning Techniques",
          "11. True, False, Not Given & Yes, No, Not Given",
          "12. Matching Headings, Information & Paragraphs",
          "13. Sentence Completion, Summary Completion & Short Answers",
          "14. Time Management, Vocabulary in Context & Reading Practice",
        ],
      },
      {
        moduleNumber: 3,
        title: "Module 3: IELTS Listening",
        lecturesCountBadge: "4 Classes",
        subtitle: "4 Lectures · Develop listening accuracy",
        lectures: [
          "15. IELTS Listening Format, Sections & Question Types",
          "16. Form, Note, Table & Sentence Completion",
          "17. Multiple Choice, Matching & Map Labelling",
          "18. Listening for Keywords, Spelling, Numbers & Distractors",
        ],
      },
      {
        moduleNumber: 4,
        title: "Module 4: IELTS Writing",
        lecturesCountBadge: "5 Classes",
        subtitle: "5 Lectures · Develop structured writing skills",
        note: "Task 1 content can be adapted according to whether the student is preparing for IELTS Academic or General Training.",
        lectures: [
          "19. IELTS Writing Overview, Assessment Criteria & Paragraph Structure",
          "20. Writing Task 1 — Charts, Graphs, Tables & Data Description (Academic)",
          "21. Writing Task 1 — Letter Writing (General Training)",
          "22. Writing Task 2 — Essay Structure, Opinion & Discussion Essays",
          "23. Coherence, Cohesion, Vocabulary, Grammar & Writing Practice",
        ],
      },
      {
        moduleNumber: 5,
        title: "Module 5: IELTS Speaking",
        lecturesCountBadge: "3 Classes",
        subtitle: "3 Lectures · Build fluency and confidence",
        lectures: [
          "24. Speaking Part 1 — Introduction & Familiar Topics",
          "25. Speaking Part 2 — Cue Cards & Long-Turn Speaking",
          "26. Speaking Part 3 — Discussion, Opinions & Fluency Practice",
        ],
      },
      {
        title: "Free Review Sessions",
        lecturesCountBadge: "FREE",
        subtitle: "2 Additional Sessions · Included in the course",
        isFree: true,
        lectures: [
          "27. Review Session 1: Grammar & Skills Revision — Review essential grammar rules and key concepts from Reading and Listening.",
          "28. Review Session 2: IELTS Practice & Feedback — Review Writing and Speaking, discuss common mistakes, and practise key exam skills.",
        ],
      },
    ],
    whatYouWillGain: [
      {
        title: "A Strong English Foundation",
        description: "Understand essential grammar and build accurate sentences from the basics.",
      },
      {
        title: "Four-Skill IELTS Preparation",
        description: "Learn the formats, strategies, and question types for Reading, Listening, Writing, and Speaking.",
      },
      {
        title: "Practical Learning & Revision",
        description: "Strengthen your understanding through guided practice and two additional review sessions.",
      },
      {
        title: "Dedicated Intensive Class Format",
        description: "2 hours per class, 3 classes per week (56 total hours of live mentor-guided training).",
      },
    ],
    overview: {
      badge: "Course Overview",
      heading: "Build Your English Skills from the Basics. Progress to High IELTS Band Scores.",
      description:
        "Build your English skills from the basics and progress towards IELTS exam preparation with our structured Basic to IELTS Course. Designed for learners who want to strengthen their grammar, improve reading, listening, writing, and speaking skills, and develop the confidence needed for the IELTS examination.",
      features: [
        {
          title: "Basic Grammar to IELTS",
          description: "8 dedicated foundation classes before transitioning to IELTS modules.",
          iconName: "BookOpen",
        },
        {
          title: "2 Hours Per Class",
          description: "Intensive 120-minute sessions ensuring deep conceptual mastery.",
          iconName: "Clock",
        },
        {
          title: "3 Classes Per Week",
          description: "Consistent 3-day weekly routine providing optimal retention.",
          iconName: "Calendar",
        },
        {
          title: "Full 4-Skill Mastery",
          description: "Reading (6 classes), Listening (4), Writing (5), Speaking (3).",
          iconName: "Award",
        },
        {
          title: "2 Free Review Sessions",
          description: "Comprehensive grammar, practice, and diagnostic mock feedback.",
          iconName: "CheckCircle2",
        },
        {
          title: "Academic & General Adaptable",
          description: "Task 1 custom-tailored for Academic charts or General letters.",
          iconName: "PenTool",
        },
      ],
    },
    learningJourney: {
      heading: "The Learning",
      highlight: "Journey",
      phase1: {
        badge: "PHASE 1",
        title: "Module 1: Basic Grammar Foundation (8 Classes)",
        description:
          "Build a rock-solid foundation in English grammar, sentence building, verb tenses, and syntax before approaching test tasks.",
        topics: [
          "Word Classes, Pronouns & Noun Basics",
          "Subject–Verb Agreement",
          "Articles, Prefixes & Suffixes",
          "Infinitives & the Verb “To Be”",
          "Modal Verbs (can, could, may, might, should, must)",
          "Passive Voice Construction",
          "How a Sentence Is Built & Sentence Types (Simple, Compound, Complex)",
          "Diagnostic Grammar Review & Writing Drills",
        ],
      },
      phase2: {
        badge: "PHASE 2",
        title: "IELTS 4-Module Preparation & Free Review (20 Classes)",
        description:
          "Master Reading, Listening, Writing, and Speaking with question-type analysis, timed strategies, and two comprehensive review sessions.",
        topics: [
          "Reading: Skimming, Scanning, Headings, T/F/NG, Sentence Completion",
          "Listening: Form, Note, Table Completion, Multiple Choice, Map Labelling",
          "Writing: Task 1 (Academic Graphs / GT Letters) & Task 2 Essay Formulas",
          "Speaking: Part 1 Topics, Part 2 Cue Cards, Part 3 Extended Opinions",
          "Free Review Session 1: Grammar & Reading/Listening Concept Revision",
          "Free Review Session 2: Writing & Speaking Practice with Direct Feedback",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "26 Structured Live Lectures",
          description: "Comprehensive step-by-step curriculum across Grammar and 4 IELTS modules.",
          iconName: "BookOpen",
        },
        {
          title: "2 Free Review Sessions",
          description: "Extra revision classes for grammar, skills, and full mock feedback.",
          iconName: "Award",
        },
        {
          title: "2 Hours Per Class (56 Hrs Live)",
          description: "In-depth 120-minute sessions with live interactive drills and doubt clearing.",
          iconName: "Clock",
        },
        {
          title: "Weekly 3-Day Schedule",
          description: "Optimized 3 days a week schedule that balances study, work, and revision.",
          iconName: "Calendar",
        },
        {
          title: "Writing Line-by-Line Evaluation",
          description: "Detailed band descriptor feedback on Task 1 and Task 2 essays.",
          iconName: "PenTool",
        },
        {
          title: "Speaking Mock Interviews",
          description: "1-on-1 mock speaking simulations with fluency and lexical coaching.",
          iconName: "Mic",
        },
        {
          title: "Cambridge IELTS Practice Bank",
          description: "Authentic Cambridge practice tests, audio tracks, and vocabulary lists.",
          iconName: "Laptop",
        },
        {
          title: "Priority Mentor WhatsApp Support",
          description: "Direct connection with your instructor for home assignments and queries.",
          iconName: "PhoneCall",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "Ideal for learners starting from the basics who want to target IELTS Band 7.0+",
      checklist: [
        "Students who want to strengthen their core English grammar before starting IELTS",
        "Candidates aiming for IELTS Academic for university admissions in UK, Australia, Canada, USA, Europe",
        "Applicants preparing for IELTS General Training for immigration or work permits",
        "Learners who prefer a structured, step-by-step roadmap with 2-hour classes 3 times a week",
        "Anyone who needs dedicated review sessions and personalized mentor feedback",
      ],
    },
    ctaBanner: {
      heading: "Enroll in Basic to IELTS Course",
      priceText: "BDT 13,999 (30% OFF)",
      subText: "Regular ৳20,000 | Save ৳6,001 on your enrolment | 28 Sessions | 2 Hours/Class • 3 Days/Week",
      buttonText: "Enroll in Basic to IELTS Course Now",
    },
    faqs: [
      {
        question: "How long is each class and what is the weekly schedule?",
        answer:
          "Each class is 2 hours long (120 minutes). Classes take place 3 days a week, making for approximately 9 to 10 weeks of structured training across 28 total sessions (56 hours total).",
      },
      {
        question: "Can beginners with weak grammar join this course?",
        answer:
          "Yes! Module 1 is dedicated entirely to Basic Grammar across 8 lectures, building your sentence construction, verb tenses, and word classes before introducing IELTS test modules.",
      },
      {
        question: "Is this suitable for both Academic and General Training IELTS?",
        answer:
          "Yes. Writing Task 1 lessons are tailored specifically to your test format—Academic data charts and diagrams, or General Training letter writing.",
      },
      {
        question: "What happens during the 2 Free Review Sessions?",
        answer:
          "Review Session 1 focuses on revising core grammar, reading, and listening concepts. Review Session 2 covers writing and speaking practice with common mistake analysis and personalized feedback.",
      },
    ],
  },

  // 8. IELTS Crash Course
  {
    id: "ielts-crash-course",
    slug: "ielts-crash-course",
    category: "course",
    examType: "ielts",
    title: "IELTS Crash Course",
    heroHighlight: "Intensive Fast-Track",
    heroTitle: "IELTS Preparation Program",
    heroSubtitle:
      "Our IELTS Crash Course is designed for students who want to prepare for the IELTS examination through a focused, structured, and practical learning experience. The course covers all four IELTS modules Reading, Listening, Writing, and Speaking with targeted strategies, question-type analysis, and exam-focused practice.",
    badge: "Fast-Track Crash Course",
    badgeType: "booster",
    thumbnailImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tagline: "Focused 4-module mastery with targeted shortcuts & test-day strategies",
    shortDescription:
      "18 sessions (16 subject lectures + 2 free review sessions). 2 hours per class, 3 classes per week (6 weeks duration). Fast-track strategies for all 4 modules.",
    price: 8999,
    originalPrice: 12000,
    currency: "BDT",
    priceNote: "25% OFF",
    format: "LIVE INTENSIVE (Online / Hybrid)",
    classesCount: "18 Total Sessions (16 Lectures + 2 Free Review)",
    duration: "6 Weeks (3 Classes / Week • 2 Hours / Class)",
    classDuration: "2 Hours / Session",
    weeklySchedule: "3 Classes / Week",
    totalHours: "36 Hours Total Live Training",
    tickerItems: [
      "2 Hours Per Class",
      "3 Classes Per Week",
      "16 Subject-Based Lectures",
      "2 Free Review Sessions",
      "4 IELTS Modules",
      "Exam-Focused Strategies",
      "Reading, Listening, Writing, Speaking",
      "Academic & General Training",
    ],
    curriculumOverview: {
      totalLectures: "16",
      freeReviewSessions: "2",
      modulesCount: "4 Modules",
      examFocus: "All IELTS Skills • Strategies & Practice",
      totalSummary:
        "Total: 18 sessions - 16 subject-based lectures and 2 additional free review sessions. Each class duration is 2 hours, held 3 times a week (6 weeks, 36 hours total).",
    },
    curriculumModules: [
      {
        moduleNumber: 1,
        title: "Module 1: IELTS Reading",
        lecturesCountBadge: "4 Classes",
        subtitle: "4 Lectures · Strategies for accuracy and speed",
        lectures: [
          "1. IELTS Reading Format & Question Types — Understand the test structure, instructions, and common question patterns.",
          "2. Skimming, Scanning & Time Management — Locate information quickly and manage the reading passages effectively.",
          "3. True/False/Not Given & Matching Questions — Learn how to identify evidence and avoid common traps.",
          "4. Completion Questions & Reading Practice — Practise sentence, summary, and note completion, along with other common question types.",
        ],
      },
      {
        moduleNumber: 2,
        title: "Module 2: IELTS Listening",
        lecturesCountBadge: "4 Classes",
        subtitle: "4 Lectures · Improve listening accuracy",
        lectures: [
          "5. IELTS Listening Format & Question Types — Understand the four sections and the different types of questions.",
          "6. Form, Note, Table & Sentence Completion — Practise identifying key information and recording accurate answers.",
          "7. Multiple Choice, Matching & Map Labelling — Develop strategies for selecting answers and following directions.",
          "8. Keywords, Distractors & Listening Practice — Recognise paraphrasing, spelling, numbers, and misleading information.",
        ],
      },
      {
        moduleNumber: 3,
        title: "Module 3: IELTS Writing",
        lecturesCountBadge: "4 Classes",
        subtitle: "4 Lectures · Structure, coherence and task response",
        note: "Task 1 lessons can be adapted to the student's chosen IELTS format: Academic or General Training.",
        lectures: [
          "9. Writing Task 1: Understanding the Task — Learn how to analyse charts, graphs, tables, and diagrams for Academic IELTS.",
          "10. Writing Task 1: Report Writing & Letter Writing — Practise data descriptions for Academic IELTS or letter writing for General Training.",
          "11. Writing Task 2: Essay Structure & Question Analysis — Understand essay types, brainstorming, introductions, body paragraphs, and conclusions.",
          "12. Writing Improvement & Practice — Focus on coherence, cohesion, vocabulary, grammar, and the IELTS writing assessment criteria.",
        ],
      },
      {
        moduleNumber: 4,
        title: "Module 4: IELTS Speaking",
        lecturesCountBadge: "4 Classes",
        subtitle: "4 Lectures · Fluency, vocabulary and confidence",
        lectures: [
          "13. Speaking Part 1: Introduction & Familiar Topics — Practise answering questions about daily life, studies, work, and personal interests.",
          "14. Speaking Part 2: Cue Cards — Learn how to organise ideas and deliver a structured long-turn response.",
          "15. Speaking Part 3: Discussion & Opinion Development — Develop answers using explanations, examples, comparisons, and reasons.",
          "16. Fluency, Vocabulary & Speaking Practice — Improve pronunciation, coherence, natural expression, and confidence through guided practice.",
        ],
      },
      {
        title: "Free Review Sessions",
        lecturesCountBadge: "FREE",
        subtitle: "2 Additional Sessions · Included at no extra cost",
        isFree: true,
        lectures: [
          "17. Review Session 1: Reading & Listening Revision — Review important strategies, practise common question types, and discuss frequent mistakes.",
          "18. Review Session 2: Writing & Speaking Revision — Review writing structure, speaking techniques, common errors, and practical improvement strategies.",
        ],
      },
    ],
    whatYouWillGain: [
      {
        title: "Reading Strategies",
        description: "Learn to approach different question types, locate answers efficiently, and manage time.",
      },
      {
        title: "Listening Techniques",
        description: "Practise identifying keywords, understanding paraphrases, and avoiding common traps.",
      },
      {
        title: "Writing Skills",
        description: "Understand task requirements, organise ideas, and develop clear, coherent responses.",
      },
      {
        title: "Speaking Confidence",
        description: "Practise all three speaking parts and develop fluency, vocabulary, and structured answers.",
      },
      {
        title: "Practical Learning & Revision",
        description: "Review common errors and refine exam timing during two additional free review sessions.",
      },
      {
        title: "Fast-Track 6-Week Routine",
        description: "2 hours per session, 3 days a week (36 total hours of exam-focused live coaching).",
      },
    ],
    overview: {
      badge: "Course Overview",
      heading: "Fast-Track Exam Preparation. Master All 4 IELTS Modules with Target Strategies.",
      description:
        "Our IELTS Crash Course is designed for students who want to prepare for the IELTS examination through a focused, structured, and practical learning experience. The course covers all four IELTS modules Reading, Listening, Writing, and Speaking with targeted strategies, question-type analysis, and exam-focused practice.",
      features: [
        {
          title: "Exam-Focused 4 Modules",
          description: "Reading (4), Listening (4), Writing (4), Speaking (4) lectures.",
          iconName: "Award",
        },
        {
          title: "2 Hours Per Class",
          description: "120 minutes of high-intensity practice and strategy drills per session.",
          iconName: "Clock",
        },
        {
          title: "3 Classes Per Week",
          description: "Fast-paced 3 days a week schedule completing all skills in 6 weeks.",
          iconName: "Calendar",
        },
        {
          title: "2 Free Review Sessions",
          description: "Bonus sessions for Reading/Listening and Writing/Speaking revision.",
          iconName: "CheckCircle2",
        },
        {
          title: "Band Scoring Shortcuts",
          description: "Proven techniques to identify traps and maximize band criteria points.",
          iconName: "Zap",
        },
        {
          title: "Academic & GT Flexible",
          description: "Adapts Task 1 for academic graph descriptions or GT letters.",
          iconName: "PenTool",
        },
      ],
    },
    learningJourney: {
      heading: "The Learning",
      highlight: "Journey",
      phase1: {
        badge: "PHASE 1",
        title: "Reading & Listening Core Mastery (8 Classes)",
        description:
          "Develop rapid scanning, keyword identification, note completion, and question-type accuracy under timed exam conditions.",
        topics: [
          "IELTS Reading Format & Question Types",
          "Skimming, Scanning & Time Management",
          "True/False/Not Given & Matching Questions",
          "Completion Questions & Reading Practice",
          "IELTS Listening Format, Sections & Question Types",
          "Form, Note, Table & Sentence Completion",
          "Multiple Choice, Matching & Map Labelling",
          "Keywords, Distractors & Audio Traps",
        ],
      },
      phase2: {
        badge: "PHASE 2",
        title: "Writing & Speaking Acceleration + Review (10 Classes)",
        description:
          "Achieve high cohesion, lexical precision, and fluent oral responses with Task 1/2 formulas and two complete review sessions.",
        topics: [
          "Task 1: Academic Data Description & GT Letter Writing",
          "Task 2: Essay Structures, Brainstorming & Question Analysis",
          "Writing Coherence, Cohesion, Grammar & Band Descriptors",
          "Speaking Part 1: Introduction & Familiar Topics",
          "Speaking Part 2: Cue Cards & Long-Turn Structuring",
          "Speaking Part 3: In-Depth Discussion & Opinion Expression",
          "Free Review Session 1: Reading & Listening Revision",
          "Free Review Session 2: Writing & Speaking Practice & Feedback",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "16 Subject-Based Lectures",
          description: "Targeted question-type analysis across Reading, Listening, Writing, and Speaking.",
          iconName: "BookOpen",
        },
        {
          title: "2 Free Review Sessions",
          description: "Additional revision classes for error correction and exam readiness.",
          iconName: "Award",
        },
        {
          title: "2 Hours Per Session (36 Hrs Live)",
          description: "Intensive 120-minute classes packed with practical test tips.",
          iconName: "Clock",
        },
        {
          title: "3 Days A Week Schedule",
          description: "Convenient 6-week fast-track program with morning and evening slots.",
          iconName: "Calendar",
        },
        {
          title: "Writing Assessment & Corrections",
          description: "Diagnostic essay audits highlighting grammatical and lexical errors.",
          iconName: "PenTool",
        },
        {
          title: "Live Speaking Mock Sessions",
          description: "Real exam simulation with pronunciation and fluency coaching.",
          iconName: "Mic",
        },
        {
          title: "IELTS Cambridge Test Bank",
          description: "Official past exam question sets and audio recordings.",
          iconName: "Laptop",
        },
        {
          title: "Direct WhatsApp Mentor Support",
          description: "Priority assistance for daily doubt clearing and guidance.",
          iconName: "PhoneCall",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "For candidates with basic English proficiency needing rapid exam preparation",
      checklist: [
        "Students who already have basic grammar skills and need quick, focused IELTS preparation",
        "Candidates with upcoming exam dates within 1 to 2 months",
        "Test takers aiming to jump from Band 5.5/6.0 to Band 7.0+",
        "Applicants wanting targeted strategies for Reading, Listening, Writing, and Speaking",
        "Busy university students or job holders needing a 6-week intensive 3-day/week program",
      ],
    },
    ctaBanner: {
      heading: "Enroll in IELTS Crash Course",
      priceText: "BDT 8,999 (25% OFF)",
      subText: "Regular ৳12,000 | Save ৳3,001 on your enrolment | 18 Sessions (16 Lectures + 2 Free Review) | 2 Hours/Class • 3 Days/Week",
      buttonText: "Enroll in IELTS Crash Course Now",
    },
    faqs: [
      {
        question: "How long is the IELTS Crash Course and what is the schedule?",
        answer:
          "The course lasts 6 weeks across 18 total sessions (16 lectures + 2 free review sessions). Each session is 2 hours long, held 3 days a week (36 total live training hours).",
      },
      {
        question: "Who should choose the Crash Course instead of Basic to IELTS?",
        answer:
          "If your basic English grammar is already comfortable and you need immediate, intensive exam preparation for an upcoming test date, the Crash Course is perfect. If you need foundational grammar first, choose the Basic to IELTS Course.",
      },
      {
        question: "Does the Crash Course cover all four skills?",
        answer:
          "Yes! The course allocates 4 dedicated 2-hour lectures to Reading, 4 to Listening, 4 to Writing, and 4 to Speaking, plus 2 free review sessions.",
      },
      {
        question: "Are mock tests and reviews included?",
        answer:
          "Yes! 2 Free Review Sessions are included at no extra cost to revise common errors and practice under authentic exam conditions.",
      },
    ],
  },
];
