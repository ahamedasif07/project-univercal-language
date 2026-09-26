export type PackageCategory = "course" | "service";

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

export interface CoursePackage {
  id: string;
  slug: string;
  category: PackageCategory;
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
  pricingOptions?: PricingOption[];
  tickerItems: string[];
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
  // 1. PTE Foundation to Expert
  {
    id: "foundation-to-expert",
    slug: "pte-foundation-to-expert",
    category: "course",
    title: "PTE Foundation Course",
    heroHighlight: "PTE Foundation",
    heroTitle: "Course in Bangladesh",
    heroSubtitle:
      "Build the English foundation you need to master the PTE exam through personal 1-to-1 mentoring, grammar training, PTE coaching and expert-proven strategies.",
    badge: "Best For Beginners",
    badgeType: "beginner",
    thumbnailImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tagline: "Absolute beginners – Basic English + full PTE prep",
    shortDescription:
      "Zero-level English grammar, pronunciation, vocabulary & step-by-step PTE Academic master training for high achievers.",
    price: 13000,
    originalPrice: 16000,
    currency: "BDT",
    format: "PRIVATE (1:1)",
    classesCount: "15 Private Classes",
    duration: "Approx. 1.5 Months",
    tickerItems: [
      "PTE Course for Beginners",
      "PTE Coaching for Beginners",
      "English Foundation for PTE",
      "PTE Preparation Bangladesh",
      "PTE Foundation Course",
      "1-on-1 Private Mentorship",
      "Official Pearson Materials",
    ],
    overview: {
      badge: "Course Overview",
      heading: "Build Your English Foundation. Master PTE. Prepare With Confidence.",
      description:
        "Designed specifically for students who feel uncertain about their English fundamentals or haven't spoken English in years. We build your core grammar, natural speaking flow, and listening comprehension from scratch before diving into Pearson's 20 question formats with personalized 1-on-1 coaching.",
      features: [
        {
          title: "Hand-Picked Curriculum",
          description: "Structured step-by-step syllabus starting with core sentence structure.",
          iconName: "BookOpen",
        },
        {
          title: "1:1 Private Classes",
          description: "Individual dedicated mentor who focuses solely on your weaknesses.",
          iconName: "Users",
        },
        {
          title: "Targeted Speaking & Pronunciation",
          description: "Master oral fluency algorithms and neutralize regional accent barriers.",
          iconName: "Mic",
        },
        {
          title: "24/7 Mentorship",
          description: "Direct WhatsApp communication for daily homework and doubt clearing.",
          iconName: "MessageSquare",
        },
        {
          title: "Real Exam Simulation",
          description: "Timed full-length mock tests on real AI scoring environments.",
          iconName: "Laptop",
        },
        {
          title: "Complete Writing & Grammar",
          description: "Grammar formula that eliminates spelling and syntax errors in essays.",
          iconName: "PenTool",
        },
      ],
    },
    learningJourney: {
      heading: "The Learning",
      highlight: "Journey",
      phase1: {
        badge: "PHASE 1",
        title: "English Foundation",
        description:
          "Detailed foundational grammar and strengthening the fundamentals required for successful PTE preparation.",
        topics: [
          "Core Grammar & Tenses",
          "Compound & Complex Sentence Formation",
          "High-Frequency Academic Vocabulary",
          "English Phonetics & Syllable Stress",
          "Reading Speed & Eye Tracking Fluency",
          "Oral Cadence & Natural Pausing",
          "Communication Confidence & Fear Elimination",
        ],
      },
      phase2: {
        badge: "PHASE 2",
        title: "Complete PTE Preparation",
        description:
          "After building a rock-solid English foundation, our instructors transition seamlessly into targeted and complete PTE preparation, covering all 20 question formats, scoring algorithms, and proprietary strategies with maximum accuracy and high mock test simulation to guarantee confidence and excellence.",
        topics: [
          "Mastering All 20 Pearson Question Types",
          "90/90 Speaking Read Aloud & Repeat Sentence Hacks",
          "Describe Image & Retell Lecture Universal Templates",
          "Summarize Written Text Single-Sentence Formula",
          "Essay Structure With Zero Lexical Resource Penalties",
          "Write From Dictation 2026 Repeated Exam Bank",
          "Full Mock Test Simulation & Line-by-Line Teacher Audit",
        ],
      },
    },
    whatIsIncluded: {
      heading: "What is",
      highlight: "Included?",
      items: [
        {
          title: "AI Portal Test Access",
          description: "Unlimited scored practice on APEUni and Alfa PTE with speech recognition.",
          iconName: "Laptop",
        },
        {
          title: "24/7 Instructor Connection",
          description: "Ask your certified trainer questions anytime via priority WhatsApp support.",
          iconName: "PhoneCall",
        },
        {
          title: "English & PTE Resource Pack",
          description: "Printed & digital study guides, collocation lists, and grammar workbooks.",
          iconName: "BookOpen",
        },
        {
          title: "Score Booster Strategies",
          description: "Proven shortcuts for Oral Fluency, Pronunciation, and Content scoring.",
          iconName: "Zap",
        },
        {
          title: "Personalized Audio Feedback",
          description: "Your daily recordings are personally listened to and corrected by your teacher.",
          iconName: "Headphones",
        },
        {
          title: "Universal Exam Booking Support",
          description: "Official slot reservation at Dhaka & Chittagong centers with zero card fees.",
          iconName: "ShieldCheck",
        },
        {
          title: "Mock Test Analysis",
          description: "Detailed diagnostic scorecards dissected to identify remaining score leaks.",
          iconName: "Award",
        },
        {
          title: "Personalized Learning Plan",
          description: "Custom study schedule mapped to your daily job or university routine.",
          iconName: "Calendar",
        },
        {
          title: "Guaranteed 2026 Exam Bank",
          description: "The most commonly repeated exam questions seen in Bangladeshi centers.",
          iconName: "CheckCircle2",
        },
      ],
    },
    whoIsThisFor: {
      heading: "Who is This Course",
      highlight: "For?",
      subtitle: "Check if this fits your current English and study situation",
      checklist: [
        "Your English foundation feels weak or rusty after years of study gap",
        "You struggle with English grammar and complex sentence construction",
        "Your speaking fluency and pronunciation need structured correction",
        "You lack confidence in writing academic summaries and essays",
        "You are completely new to the PTE Academic/Core test format",
        "You have zero knowledge about the Pearson computer-scoring algorithm",
        "You need a dedicated mentor to train you step-by-step from scratch",
        "You want private 1-to-1 attention at your own comfortable schedule",
        "You are aiming for 65+ or 79+ for Australia/Canada PR or university admission",
      ],
    },
    ctaBanner: {
      heading: "Start Your Journey From Foundation to Expert",
      priceText: "BDT 13,000",
      subText: "15 Private Classes | Approx. 1.5 Months",
      buttonText: "Book Your Consultation Now",
    },
    faqs: [
      {
        question: "Is this course sufficient for complete PTE beginners?",
        answer:
          "Yes, 100%. This course was specifically created for individuals starting with little to no prior test knowledge. We start with basic English building blocks before introducing exam questions.",
      },
      {
        question: "Do I need strong English before joining?",
        answer:
          "Not at all. Phase 1 is designed exclusively to fix your grammar, pronunciation, and sentence structure, giving you the natural confidence needed before test preparation.",
      },
      {
        question: "How many classes are included?",
        answer:
          "You receive 15 comprehensive live 1-on-1 private sessions, plus extra diagnostic foundation modules and unlimited mock test evaluations.",
      },
      {
        question: "Does the course include complete PTE preparation?",
        answer:
          "Yes. It covers all 4 modules (Speaking, Writing, Reading, Listening) and all 20 question types along with verified 79+ scoring templates.",
      },
      {
        question: "Will I receive personal feedback on mock tests?",
        answer:
          "Yes, every mock test you submit is reviewed line-by-line by your mentor with enabling skills breakdown and improvement guidelines.",
      },
      {
        question: "Can I conduct my classes on flexible dates and timings?",
        answer:
          "Yes. Because this is a private 1-on-1 course, your schedule is mutually agreed upon with your instructor. Morning, evening, and weekend slots are available.",
      },
      {
        question: "Is support available until my actual exam date?",
        answer:
          "Absolutely. Even after your scheduled classes conclude, your teacher remains available on WhatsApp to answer questions until the day you walk into the exam room.",
      },
    ],
  },

  // 2. Complete PTE A-Z (Most Popular)
  {
    id: "pte-a-z",
    slug: "complete-pte-a-z-masterclass",
    category: "course",
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
];
