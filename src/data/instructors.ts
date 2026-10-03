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

export interface CeoCertificate {
  id: string;
  pdf: string;
  title: string;
  category: string;
  issuer: string;
  date?: string;
  description: string;
}

export const DEFAULT_INSTRUCTOR_AVATAR = "/images/instructors/placeholder-avatar.jpg";

export const CEO_CERTIFICATES: CeoCertificate[] = [
  {
    id: "ceo-c1",
    pdf: "/images/ceo/ceo-sifat-c1.pdf",
    title: "PTE Academic for Teachers: Speaking",
    category: "PTE Core Module",
    issuer: "Pearson PTE",
    date: "July 11, 2026",
    description:
      "Official Pearson Certificate of Completion awarded to MD SOHANOR RAHMAN SHIFAT for successfully completing PTE Academic for Teachers: Speaking.",
  },
  {
    id: "ceo-c2",
    pdf: "/images/ceo/ceo-sifat-c2.pdf",
    title: "PTE Academic for Teachers: Listening",
    category: "PTE Core Module",
    issuer: "Pearson PTE",
    date: "Pearson TTA",
    description:
      "Official Pearson Certificate of Completion awarded to MD SOHANOR RAHMAN SHIFAT for successfully completing PTE Academic for Teachers: Listening.",
  },
  {
    id: "ceo-c3",
    pdf: "/images/ceo/ceo-sifat-c3.pdf",
    title: "PTE Academic for Teachers: Introduction to PTE Academic & Scoring",
    category: "Assessment & Scoring",
    issuer: "Pearson PTE",
    date: "Pearson TTA",
    description:
      "Official Pearson Certificate of Completion awarded to MD SOHANOR RAHMAN SHIFAT for successfully completing Introduction to PTE Academic & Scoring.",
  },
  {
    id: "ceo-c4",
    pdf: "/images/ceo/ceo-sifat-c4.pdf",
    title: "PTE Academic for Teachers: Scoring & Module Evaluation",
    category: "Assessment & Scoring",
    issuer: "Pearson PTE",
    date: "Pearson TTA",
    description:
      "Official Pearson Certificate of Completion awarded to MD SOHANOR RAHMAN SHIFAT covering scoring algorithms and test specifications.",
  },
  {
    id: "ceo-c5",
    pdf: "/images/ceo/ceo-sifat-c5.pdf",
    title: "PTE Academic for Teachers: Writing",
    category: "PTE Core Module",
    issuer: "Pearson PTE",
    date: "Pearson TTA",
    description:
      "Official Pearson Certificate of Completion awarded to MD SOHANOR RAHMAN SHIFAT for successfully completing PTE Academic for Teachers: Writing.",
  },
  {
    id: "ceo-c6",
    pdf: "/images/ceo/ceo-sifat-c6.pdf",
    title: "PTE Academic for Teachers: Reading",
    category: "PTE Core Module",
    issuer: "Pearson PTE",
    date: "Pearson TTA",
    description:
      "Official Pearson Certificate of Completion awarded to MD SOHANOR RAHMAN SHIFAT for successfully completing PTE Academic for Teachers: Reading.",
  },
  {
    id: "ceo-c7",
    pdf: "/images/ceo/ceo-sifat-c7.pdf",
    title: "Teaching PTE Pronunciation: Techniques for Accuracy and Intelligibility",
    category: "Webinar Masterclass",
    issuer: "Pearson English Language Learning",
    date: "28 May 2026",
    description:
      "Official Pearson Certificate awarded to MD SOHANOR RAHMAN SHIFAT for attending 'Teaching PTE Pronunciation: Techniques for Accuracy and Intelligibility' with Magda Woodham (I Teach PTE webinar series).",
  },
  {
    id: "ceo-c8",
    pdf: "/images/ceo/ceo-sifat-c8.pdf",
    title: "Paraphrasing: Teaching Learners to Use Their Own Words",
    category: "Webinar Masterclass",
    issuer: "Pearson English Language Learning",
    date: "30 July 2026",
    description:
      "Official Pearson Certificate awarded to MD SOHANOR RAHMAN SHIFAT for attending 'Paraphrasing: Teaching Learners to Use Their Own Words' with Magda Woodham (PTE Power Hour webinar series).",
  },
];

// 1. Founder & CEO (Kept for direct profile link, but excluded from INSTRUCTORS mentor cards)
export const FOUNDER_PROFILE: Instructor = {
  id: "sifat-hasan",
  slug: "sifat-hasan",
  name: "Md Sohanor Rahman Shifat",
  role: "Founder & Chief Executive Officer (CEO)",
  title: "Founder & Chief Executive Officer (CEO) | Universal Language",
  organization: "Universal Language",
  scoreHighlight: "Pearson Trained Leader",
  badge: "Founder & Chief Executive Officer",
  image: "/images/ceo/ceo-sifat-pp.jpeg",
  experience: "3+ Years PTE Sector",
  studentsTrained: "600+ Student Leads Guided",
  targetSuccessRate: "Platform Founder",
  shortBio:
    "Founder & CEO of Universal Language, dedicated to connecting students with quality language learning opportunities, PTE preparation resources, and professional instructors.",
  fullBio: [
    "Md Sohanor Rahman Shifat is the Founder & CEO of UNIVERSAL LANGUAGE, an educational initiative focused on connecting students with quality language learning opportunities, PTE preparation resources, and suitable professional instructors.",
    "With 3+ years of experience in the PTE education sector, he has developed a strong understanding of PTE Academic, student requirements, examination strategies, scoring methodologies, and the evolving digital learning environment.",
    "Since entering the PTE education sector, Shifat has worked with 600+ student leads, gaining extensive practical experience in student communication, lead generation, follow-up, digital marketing, enrollment coordination, and education-focused business development. As the founder of Universal Language, he oversees the platform's day-to-day operations, manages student inquiries, coordinates with learners and instructors, and works to create a smooth journey from initial enquiry to enrollment.",
    "He regularly participates in Pearson webinars, workshops, and professional training sessions, keeping himself updated with the latest PTE scoring system, AI-based evaluation methods, examination strategies, and relevant Pearson policies and updates. His continuous engagement with industry developments allows him to maintain a strong understanding of the changing PTE assessment and preparation landscape.",
    "Alongside managing Universal Language, Shifat focuses on student engagement, lead generation, digital marketing, enrollment management, and platform growth, with the goal of building a trusted and accessible digital education ecosystem for language learners. His experience combines knowledge of the PTE education sector with practical expertise in student acquisition, communication, and educational platform management.",
    "He completed his Higher Secondary Certificate (HSC) from Dhaka City College, Dhaka, and is currently pursuing his undergraduate studies under the University of Dhaka. Through Universal Language, Shifat aims to expand access to quality language education and connect students with the right learning opportunities and professional guidance.",
  ],
  quote:
    "Through Universal Language, our mission is to expand access to quality language education and connect every student with the right learning opportunities, authentic preparation resources, and professional guidance.",
  specialties: [
    "PTE Education Sector Leadership & Ecosystem Growth",
    "600+ Student Leads Management & Enrollment Coordination",
    "Pearson AI Scoring & Automated Evaluation Analysis",
    "Student Communication & Academic Advisory",
    "Education-Focused Digital Marketing & Lead Strategy",
    "Platform Operations & Quality Assurance",
  ],
  certifications: [
    "Pearson PTE: PTE Academic for Teachers — Speaking (July 2026)",
    "Pearson PTE: PTE Academic for Teachers — Listening",
    "Pearson PTE: PTE Academic for Teachers — Writing",
    "Pearson PTE: PTE Academic for Teachers — Reading",
    "Pearson PTE: PTE Academic for Teachers — Introduction to PTE Academic & Scoring",
    "Pearson PTE: Teaching PTE Pronunciation — Techniques for Accuracy and Intelligibility (May 2026)",
    "Pearson PTE: Paraphrasing — Teaching Learners to Use Their Own Words (July 2026)",
    "Global Scale of English (GSE) Assessment Framework",
  ],
  education: [
    "Undergraduate Studies — University of Dhaka (Ongoing)",
    "Higher Secondary Certificate (HSC) — Dhaka City College, Dhaka",
  ],
  featuredCourses: [
    {
      title: "Universal Language PTE Academic Program",
      duration: "Comprehensive Roadmap",
      description:
        "Student-centric language training linking learners with certified Pearson trainers, diagnostic mocks, and personalized study roadmaps.",
    },
    {
      title: "1-on-1 Student Consultation & Study Abroad Advisory",
      duration: "Direct Advisory",
      description:
        "Personalized enrollment guidance, target score alignment, and study abroad visa pathway consultation.",
    },
  ],
  scorecardHighlights: [
    { label: "Experience", value: "3+ Years", sublabel: "PTE Sector Leadership" },
    { label: "Student Reach", value: "600+", sublabel: "Student Leads & Inquiries" },
    { label: "Credentials", value: "8 Pearson Certs", sublabel: "Training & Webinars" },
    { label: "Academic", value: "Univ. of Dhaka", sublabel: "Undergraduate Studies" },
  ],
  socials: {
    whatsapp: "8801772224283",
    email: "info@universallanguage.com.bd",
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

  // Instructor: Shams Tashin
  {
    id: "shams-tashin",
    slug: "shams-tashin",
    name: "Shams Tashin",
    role: "English Language Trainer | IELTS & Spoken English",
    title: "English Language Trainer & IELTS Specialist | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "IELTS Band 7.5 (C1)",
    badge: "IELTS & Spoken English Specialist",
    image: "/images/instructors/shams-tashin.jpg",
    experience: "Active IELTS & Spoken Trainer",
    studentsTrained: "25+ Cohort Students",
    targetSuccessRate: "CEFR C1 Level Standard",
    shortBio:
      "English Language Trainer with overall Band 7.5 (CEFR Level C1), delivering online, offline, and hybrid classes that turn practical, confidence-building strategies into measurable student progress.",
    fullBio: [
      "Shams Tashin is an accomplished English Language Trainer at Universal Language specializing in IELTS Academic and Spoken English. Holding an official overall Band 7.5 (CEFR Level C1) credential, Shams brings pedagogical clarity, linguistic articulation, and real exam expertise to his students.",
      "Delivering high-impact online, offline, and hybrid sessions, Shams has conducted rigorous IELTS Academic and Spoken English batches. He excels at breaking down intricate question types, band descriptors, and strict time-management techniques into clear, practical, and executable steps.",
      "With a recognized specialization in Writing and Speaking evaluation, his teaching style is centered on personalized diagnostic feedback, rigorous mock test simulations, and interactive language club facilitation—empowering learners to build authentic fluency, grammatical range, lexical precision, and test-day confidence.",
    ],
    quote:
      "Language proficiency and exam success are not achieved through rote memorization. They are built through clear structure, individual attention, and steady diagnostic progress.",
    specialties: [
      "IELTS Academic Comprehensive Preparation (Band 7.5)",
      "Task 1 & Task 2 Writing Evaluation & Band Scoring",
      "Speaking Mock Interviews & Fluency Coaching",
      "Reading & Listening Strategy & Time Management",
      "1-on-1 Mentorship & Diagnostic Gap Feedback",
      "Online, Offline & Hybrid Classroom Delivery",
      "Public Speaking & Professional Communication",
      "Fluency Building & Language Club Facilitation",
    ],
    certifications: [
      "IELTS Academic Overall Band 7.5 (CEFR Level C1)",
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
        title: "IELTS Academic Band 7.5+ Comprehensive Batch",
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
      { label: "Overall Band", value: "7.5", sublabel: "Official IELTS" },
      { label: "CEFR Level", value: "C1", sublabel: "Advanced Fluency" },
      { label: "Teaching Format", value: "Hybrid", sublabel: "Online & Offline" },
      { label: "Focus Skill", value: "W & S", sublabel: "Writing & Speaking" },
    ],
    socials: {
      location: "Dhaka, Bangladesh",
    },
  },

  // Instructor: Khairul Islam
  {
    id: "khairul-islam",
    slug: "khairul-islam",
    name: "Khairul Islam",
    role: "English Language & IELTS Instructor",
    title: "English Language & IELTS Trainer | Universal Language",
    organization: "Universal Language",
    scoreHighlight: "IELTS Band 7.0",
    badge: "IELTS & Grammar Specialist",
    image: "/images/instructors/khirul-islam-pp.jpeg",
    experience: "Active IELTS & English Trainer",
    studentsTrained: "40+ Enrolled Students",
    targetSuccessRate: "Band 7.0+ Target Track",
    shortBio:
      "English Language & IELTS Trainer with official Band 7.0 and Northern University academic background, specializing in foundational grammar, Reading comprehension hacks, and structured IELTS test strategies.",
    fullBio: [
      "Khairul Islam is an energetic and dedicated English Language & IELTS Trainer at Universal Language. Holding an official IELTS Band 7.0 credential and an academic background in Computer Science from Northern University Bangladesh, Khairul blends structured analytical thinking with student-centric coaching methods.",
      "Having guided students across foundational grammar through to intensive IELTS test preparation, Khairul specializes in simplifying complex grammatical structures and teaching active reading-scanning techniques. He ensures candidates master True/False/Not Given, Paragraph Headings, and complex academic texts without getting overwhelmed by strict time limits.",
      "At Universal Language, Khairul works closely with learners across both the Basic to IELTS and IELTS Crash Courses. His coaching methodology emphasizes diagnostic feedback, continuous error tracking, structured vocabulary building, and realistic mock exam simulations that give students the clarity and confidence required to attain their target band score.",
    ],
    quote:
      "Achieving a high band score in IELTS begins with building strong grammatical foundations and mastering strategic comprehension under real exam time pressure.",
    specialties: [
      "IELTS Academic & General Training (Band 7.0)",
      "Basic to IELTS Foundation Building",
      "Reading Module Time-Management & Question Decoding",
      "Listening Speed & Predictive Note-Taking",
      "Sentence Structure, Word Forms & Grammatical Range",
      "Diagnostic Weakness Feedback & Error Logging",
      "Interactive Mock Testing & Strategy Analysis",
      "Online, Offline & Hybrid Classroom Mentorship",
    ],
    certifications: [
      "IELTS Academic Overall Band 7.0 (CEFR Level C1)",
      "Northern University Bangladesh — Computer Science & Engineering",
      "Advanced Teacher Training in English Language Teaching (ELT)",
      "Diagnostic Assessment & IELTS Mock Evaluation Specialist",
    ],
    education: [
      "B.Sc. in Computer Science & Engineering (CSE) — Northern University Bangladesh",
    ],
    workExperience: [
      {
        role: "English Language & IELTS Instructor",
        organization: "Universal Language",
        period: "2025 – Present",
        highlights: [
          "Conduct Basic to IELTS and IELTS Crash Course sessions covering core grammar rules and test strategies.",
          "Train students on speed-reading, paragraph skimming, keyword spotting, and distractor elimination in IELTS Reading.",
          "Deliver structured listening practice focusing on accent recognition, spelling accuracy, and multi-speaker dialogues.",
          "Perform diagnostic speaking and writing assessments with personalized error logs for each learner.",
          "Facilitate interactive language drills and weekly revision sessions to solidify test-day readiness.",
        ],
      },
    ],
    awards: [
      {
        title: "Academic Excellence Award",
        organization: "Northern University Bangladesh",
        year: "2024–2025",
      },
      {
        title: "IELTS Band 7.0 Credential Holder",
        organization: "Official IELTS Test Center",
        year: "2025",
      },
      {
        title: "Outstanding Student Mentor Award",
        organization: "Universal Language Faculty",
        year: "2026",
      },
    ],
    featuredCourses: [
      {
        title: "Basic to IELTS Foundation Course",
        duration: "Approx. 9–10 Weeks • 28 Sessions",
        description:
          "Comprehensive grammar foundation transitioning seamlessly into all four IELTS test modules with 2-hour classes 3 times a week.",
      },
      {
        title: "IELTS Crash Course (Fast-Track)",
        duration: "6 Weeks • 18 Total Sessions",
        description:
          "Intensive 4-module mastery with test shortcuts, question-type strategies, and 2 free review sessions.",
      },
    ],
    scorecardHighlights: [
      { label: "Overall Band", value: "7.0", sublabel: "Official IELTS" },
      { label: "University", value: "Northern", sublabel: "Northern University BD" },
      { label: "Core Focus", value: "R & L", sublabel: "Reading & Listening" },
      { label: "Specialty", value: "Grammar", sublabel: "Basic to Advanced" },
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
      (slug === "shams-tashin" && inst.id === "shams-tashin") ||
      (slug === "shams" && inst.id === "shams-tashin") ||
      (slug === "tashin" && inst.id === "shams-tashin") ||
      (slug === "jamius" && inst.id === "shams-tashin") ||
      (slug === "jamius-shams" && inst.id === "shams-tashin") ||
      (slug === "khairul-islam" && inst.id === "khairul-islam") ||
      (slug === "khirul-islam" && inst.id === "khairul-islam") ||
      (slug === "khairul" && inst.id === "khairul-islam") ||
      (slug === "khirul" && inst.id === "khairul-islam") ||
      (slug === "papon" && inst.id === "papon-miah") ||
      (slug === "papon-miah" && inst.id === "papon-miah") ||
      (slug === "sifat-hasan" && inst.id === "sifat-hasan") ||
      (slug === "sifat" && inst.id === "sifat-hasan") ||
      (slug === "shifat" && inst.id === "sifat-hasan") ||
      (slug === "md-sohanor-rahman-shifat" && inst.id === "sifat-hasan") ||
      (slug === "ceo" && inst.id === "sifat-hasan") ||
      (slug === "founder" && inst.id === "sifat-hasan")
  );
}
