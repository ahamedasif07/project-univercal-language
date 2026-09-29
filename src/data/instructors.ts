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
  socials?: {
    whatsapp?: string;
    email?: string;
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
      location: "Chittagong, Bangladesh",
    },
  },

  // Instructor: Amatulla Tasnim
  {
    id: "amatulla-tasnim",
    slug: "amatulla-tasnim",
    name: "Amatulla Tasnim",
    role: "PTE Trainer | English Language Mentor",
    title: "PTE Trainer & English Language Mentor | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "Pearson TTA Certified",
    badge: "PTE Trainer & English Mentor",
    image: "/images/instructors/amatulla-pp.jpeg",
    experience: "Dedicated PTE Mentor",
    studentsTrained: "70–80+ Target Guidance",
    targetSuccessRate: "High Pass Rate",
    shortBio:
      "Dedicated to helping PTE aspirants achieve their desired scores, with experience guiding students toward 70–80+ scores through personalized strategies, structured practice, and continuous feedback.",
    fullBio: [
      "Amatulla Tasnim is a dedicated PTE Instructor at Universal Language, passionate about helping students achieve their desired English proficiency scores.",
      "She is currently pursuing Electrical and Electronic Engineering (EEE) at a private university. Having personally taken both PTE and IELTS examinations twice, she understands the challenges students face throughout preparation and in the actual examination environment.",
      "She has also completed a Pearson Teacher Training Academy professional training session on “Mapping the Learning Journey: How Level Test Guides Teaching Decisions,” strengthening her knowledge of effective language assessment and teaching practices.",
      "Her teaching approach focuses on four core principles: Clarity (explaining complex concepts in a simple and understandable way), Practicality (focusing on real exam-style practice and effective strategies), Consistency (encouraging structured practice and regular feedback), and Confidence (preparing students to perform confidently under real test conditions).",
    ],
    quote:
      "Success in PTE comes from understanding the test, practising with the right strategies, and improving consistently.",
    specialties: [
      "PTE Academic Core Strategy & Module Mastery",
      "Personalized Target Score Roadmaps (70–80+ Guidance)",
      "Real Exam-Style Practice & Continuous Diagnostic Feedback",
      "PTE & IELTS Test-Taking Psychology & Anxiety Management",
      "Structured Daily Practice Protocols & Error Correction",
      "Diagnostic Level Testing & Adaptive Learning Journey Mapping",
    ],
    certifications: [
      "Pearson Teacher Training Academy: Mapping the Learning Journey (How Level Test Guides Teaching Decisions)",
      "Global Scale of English (GSE) Assessment Framework Trained",
      "Pearson English Language Learning Webinar Professional Series",
    ],
    education: [
      "B.Sc. in Electrical and Electronic Engineering (EEE) — Private University (Ongoing)",
      "Dual PTE & IELTS Examination Background",
    ],
    certificatesGallery: [
      {
        id: "amatulla-c1",
        image: "/images/instructors/amatulla-c1.jpeg",
        title: "Mapping the Learning Journey: How Level Test Guides Teaching Decisions",
        issuer: "Pearson Teacher Training Academy",
        year: "March 2026",
        badge: "Pearson TTA",
        description:
          "Official Pearson Certificate of Completion awarded to Amatulla Tasnim for attending 'Mapping the learning journey: How Level Test guides teaching decisions' with Samantha Bernardo, part of the Pearson Teacher Training Academy webinar series and Global Scale of English.",
      },
    ],
    featuredCourses: [
      {
        title: "PTE 70–80+ Target Score Mentorship Batch",
        duration: "6 Weeks • 24 Live Sessions",
        description:
          "Targeted PTE training covering all communicative skills with personalized strategy roadmaps and continuous mock diagnostics.",
      },
      {
        title: "PTE Strategic Foundation & Practice Workshop",
        duration: "4 Weeks • 16 Intensive Classes",
        description:
          "Master exam formats, build real exam stamina, and eliminate habitual score penalties through structured feedback.",
      },
    ],
    scorecardHighlights: [
      { label: "Target Band", value: "70–80+", sublabel: "Score Strategy Focus" },
      { label: "Accreditation", value: "Pearson TTA", sublabel: "Teacher Training Academy" },
      { label: "Assessment", value: "GSE Aligned", sublabel: "Global Scale of English" },
      { label: "Methodology", value: "4 Pillars", sublabel: "Clarity & Practicality" },
    ],
    socials: {
      location: "Dhaka, Bangladesh",
    },
  },

  // Instructor: Jamius Shams
  {
    id: "jamius-shams",
    slug: "jamius-shams",
    name: "Jamius Shams",
    role: "English Language Trainer | IELTS & Spoken English",
    title: "English Language Trainer & IELTS Specialist | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "IELTS Band 7.0 (C1)",
    badge: "IELTS & Spoken English Specialist",
    image: "/images/instructors/jamius shams.jpeg",
    experience: "Active IELTS & Spoken Trainer",
    studentsTrained: "25+ Cohort Students",
    targetSuccessRate: "CEFR C1 Level Standard",
    shortBio:
      "English Language Trainer with overall Band 7.0 (CEFR Level C1), delivering online, offline, and hybrid classes that turn practical, confidence-building strategies into measurable student progress.",
    fullBio: [
      "Jamius Shams is an accomplished English Language Trainer at Universal Language specializing in IELTS Academic and Spoken English. Holding an official overall Band 7.0 (CEFR Level C1) credential, Jamius brings pedagogical clarity, linguistic articulation, and real exam expertise to his students.",
      "Delivering high-impact online, offline, and hybrid sessions, Jamius has conducted rigorous IELTS Academic and Spoken English batches. He excels at breaking down intricate question types, band descriptors, and strict time-management techniques into clear, practical, and executable steps.",
      "With a recognized specialization in Writing and Speaking evaluation, his teaching style is centered on personalized diagnostic feedback, rigorous mock test simulations, and interactive language club facilitation—empowering learners to build authentic fluency, grammatical range, lexical precision, and test-day confidence.",
    ],
    quote:
      "Language proficiency and exam success are not achieved through rote memorization. They are built through clear structure, individual attention, and steady diagnostic progress.",
    specialties: [
      "IELTS Academic Comprehensive Preparation (Band 7.0)",
      "Task 1 & Task 2 Writing Evaluation & Band Scoring",
      "Speaking Mock Interviews & Fluency Coaching",
      "Reading & Listening Strategy & Time Management",
      "1-on-1 Mentorship & Diagnostic Gap Feedback",
      "Online, Offline & Hybrid Classroom Delivery",
      "Public Speaking & Professional Communication",
      "Fluency Building & Language Club Facilitation",
    ],
    certifications: [
      "IELTS Academic Overall Band 7.0 (CEFR Level C1)",
      "Professional Communication Certification — 8th National English Language Summit (2025)",
      "Advanced Workshops on Professional Articulation & Impactful Communication",
      "Diagnostic Assessment & Speaking Mock Evaluation Specialist",
    ],
    education: [
      "Bachelor of Business Administration (BBA) — East West University (In Progress - 1st Year)",
      "Higher Secondary Certificate (HSC) — Business Studies, BAF Shaheen College Dhaka (GPA 4.75/5.00, 2025)",
      "Secondary School Certificate (SSC) — Business Studies, National Ideal School, Dhaka (GPA 4.72/5.00, 2023)",
    ],
    workExperience: [
      {
        role: "English Language Instructor | IELTS & Spoken English",
        organization: "CILL",
        period: "June 2026 – Present",
        highlights: [
          "Conduct IELTS Academic classes across online, offline, and hybrid formats to 25+ students tailored to their proficiency levels.",
          "Break down question types, band descriptors, and time-management techniques into clear, practical steps.",
          "Facilitate Language Club sessions through engaging discussions, presentations, and dynamic speaking activities.",
          "Run IELTS Speaking mock tests, coaching fluency, vocabulary, grammar, and phonetic pronunciation.",
          "Track student progress using mock tests, structured practice activities, Zoom, and Google Classroom.",
        ],
      },
    ],
    awards: [
      {
        title: "Professional Communication Certification",
        organization: "8th National English Language Summit",
        year: "2025",
      },
      {
        title: "Lead Organizer — Life-Save Blood Donation Drive",
        organization: "Local Hospitals & Volunteer Recruitment (50 units collected)",
        year: "2025–2026",
      },
      {
        title: "Senior Rover Mate",
        organization: "BAF Shaheen College Dhaka Air Scout Group",
        year: "2024–2026",
      },
    ],
    featuredCourses: [
      {
        title: "IELTS Academic Band 7.0+ Comprehensive Batch",
        duration: "8 Weeks • 32 Live Sessions",
        description:
          "Complete preparation across all 4 modules with intensive Writing Task 1 & 2 evaluation, live Speaking mock interviews, and timed Reading/Listening techniques.",
      },
      {
        title: "Spoken English & Fluency Acceleration",
        duration: "4 Weeks • 16 Intensive Classes",
        description:
          "Interactive speaking drills, pronunciation coaching, and active language club sessions designed to build real-world communication confidence.",
      },
    ],
    scorecardHighlights: [
      { label: "Overall Band", value: "7.0", sublabel: "Official IELTS" },
      { label: "CEFR Level", value: "C1", sublabel: "Advanced Fluency" },
      { label: "Teaching Format", value: "Hybrid", sublabel: "Online & Offline" },
      { label: "Focus Skill", value: "W & S", sublabel: "Writing & Speaking" },
    ],
    socials: {
      location: "Dhaka, Bangladesh",
    },
  },
  // Instructor: Papon Miah
  {
    id: "papon-miah",
    slug: "papon-miah",
    name: "Papon Miah",
    role: "PTE Instructor | Pearson Certified",
    title: "PTE Instructor & Pearson Certified Trainer | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "Pearson TTA Certified",
    badge: "PTE Instructor & Assessment Specialist",
    image: "/images/instructors/papon-pp.jpeg",
    experience: "Multi-Exam Veteran",
    studentsTrained: "PTE Academic Focus",
    targetSuccessRate: "Practical Strategies",
    shortBio:
      "Dedicated PTE Instructor at Universal Language, committed to helping students develop their English proficiency and achieve their target PTE outcomes through structured, practical, and personalized preparation.",
    fullBio: [
      "Papon Miah is a dedicated PTE Instructor at Universal Language, committed to helping students develop their English proficiency and achieve their target PTE outcomes through structured, practical, and personalized preparation.",
      "He holds a B.Sc. in Electrical & Electronic Engineering (EEE) from City University, completed in 2024. Alongside his academic background, he has developed a strong focus on PTE Academic preparation, assessment strategies, and exam-oriented teaching.",
      "Having personally taken the PTE Academic examination multiple times, he has gained valuable first-hand experience of the actual test environment, question patterns, time management, and the challenges candidates may encounter during the examination. This practical exposure allows him to provide students with realistic guidance that goes beyond theoretical preparation.",
      "He has also completed professional training through the Pearson PTE Teacher Training Academy, strengthening his understanding of PTE Academic assessment and effective teaching practices across Speaking, Writing, Reading, and Listening.",
      "His goal is to create a focused and supportive learning environment where students can understand the PTE assessment system, develop effective strategies, and approach the real examination with greater confidence and preparation.",
    ],
    quote:
      "PTE preparation is most effective when theoretical strategies meet real exam environment reality. With structured practice, practical exposure, and clear diagnostic guidance, achieving your target score becomes a systematic process.",
    specialties: [
      "PTE Academic Complete 4-Module Preparation (Speaking, Writing, Reading, Listening)",
      "Real Exam Center Environment & Time Management Strategies",
      "Pearson Automated Assessment & AI Scoring Rubrics",
      "Speaking Acoustic Delivery & Oral Fluency Calibration",
      "Writing Module Scoring & Discourse Structure Analysis",
      "Personalized Diagnostic Roadmaps & Test Anxiety Management",
    ],
    certifications: [
      "Pearson PTE: PTE Academic for Teachers — Speaking",
      "Pearson PTE: PTE Academic for Teachers — Writing",
      "Pearson PTE: PTE Academic for Teachers — Listening",
      "Pearson PTE: PTE Academic for Teachers — Reading",
      "Pearson PTE: PTE Academic for Teachers — Scoring Speaking and Writing Questions",
      "Pearson PTE: PTE Academic for Teachers — Introduction to PTE Academic & Scoring",
      "Pearson PTE Teacher Training Academy Accredited",
      "Global Scale of English (GSE) Assessment Framework",
    ],
    education: [
      "B.Sc. in Electrical & Electronic Engineering (EEE) — City University (Graduated 2024)",
      "PTE Academic Multiple Examination First-Hand Test-Taker Background",
    ],
    certificatesGallery: [
      {
        id: "papon-c1",
        image: "/images/instructors/papon-c1.jpeg",
        title: "PTE Academic for Teachers: Speaking",
        issuer: "Pearson PTE",
        badge: "Speaking",
        description:
          "Official Pearson Certificate of Completion awarded to Papon Miah for successfully completing PTE Academic for Teachers: Speaking course of study offered by Pearson PTE.",
      },
      {
        id: "papon-c2",
        image: "/images/instructors/papon-c2.jpeg",
        title: "PTE Academic for Teachers: Writing",
        issuer: "Pearson PTE",
        badge: "Writing",
        description:
          "Official Pearson Certificate of Completion awarded to Papon Miah for successfully completing PTE Academic for Teachers: Writing course of study offered by Pearson PTE.",
      },
      {
        id: "papon-c3",
        image: "/images/instructors/papon-c3.jpeg",
        title: "PTE Academic for Teachers: Listening",
        issuer: "Pearson PTE",
        badge: "Listening",
        description:
          "Official Pearson Certificate of Completion awarded to Papon Miah for successfully completing PTE Academic for Teachers: Listening course of study offered by Pearson PTE.",
      },
      {
        id: "papon-c4",
        image: "/images/instructors/papon-c4.jpeg",
        title: "PTE Academic for Teachers: Reading",
        issuer: "Pearson PTE",
        badge: "Reading",
        description:
          "Official Pearson Certificate of Completion awarded to Papon Miah for successfully completing PTE Academic for Teachers: Reading course of study offered by Pearson PTE.",
      },
      {
        id: "papon-c5",
        image: "/images/instructors/papon-c5.jpeg",
        title: "PTE Academic for Teachers: Scoring Speaking and Writing Questions",
        issuer: "Pearson PTE",
        badge: "Scoring & Assessment",
        description:
          "Official Pearson Certificate of Completion awarded to Papon Miah for successfully completing PTE Academic for Teachers: Scoring Speaking and Writing Questions course of study offered by Pearson PTE.",
      },
      {
        id: "papon-c6",
        image: "/images/instructors/papon-c6.jpeg",
        title: "PTE Academic for Teachers: Introduction to PTE Academic & Scoring",
        issuer: "Pearson PTE",
        badge: "Introduction & Scoring",
        description:
          "Official Pearson Certificate of Completion awarded to Papon Miah for successfully completing PTE Academic for Teachers: Introduction to PTE Academic & Scoring course of study offered by Pearson PTE.",
      },
    ],
    featuredCourses: [
      {
        title: "PTE Academic Complete Strategy & Practical Drill",
        duration: "6 Weeks • 24 Live Sessions",
        description:
          "Master all 20 question types across Speaking, Writing, Reading, and Listening with real-exam timing guidelines and personalized feedback.",
      },
      {
        title: "PTE Speaking & Writing Scoring Intensive",
        duration: "3 Weeks • 12 Live Classes",
        description:
          "Focused training on machine scoring algorithms, acoustic clarity, grammar precision, and test-day anxiety management.",
      },
    ],
    scorecardHighlights: [
      { label: "Credentials", value: "6 Pearson Certs", sublabel: "Teacher Training Academy" },
      { label: "Exam Experience", value: "Multi-Exam", sublabel: "First-Hand Test Taker" },
      { label: "Core Focus", value: "4 Modules", sublabel: "Speaking, Writing, Reading, Listening" },
      { label: "Approach", value: "Personalized", sublabel: "Practical & Diagnostic" },
    ],
    socials: {
      location: "Dhaka, Bangladesh",
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
      (slug === "nakibul-quader-chowdhury" && inst.id === "nakibul-quader-chowdhury") ||
      (slug === "amatulla" && inst.id === "amatulla-tasnim") ||
      (slug === "tasnim" && inst.id === "amatulla-tasnim") ||
      (slug === "jamius" && inst.id === "jamius-shams") ||
      (slug === "jamius-shams" && inst.id === "jamius-shams") ||
      (slug === "papon" && inst.id === "papon-miah") ||
      (slug === "papon-miah" && inst.id === "papon-miah")
  );
}
