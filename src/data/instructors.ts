export interface Instructor {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  organization: string;
  scoreHighlight: string;
  badge: string;
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
    linkedin?: string;
  };
}

export const INSTRUCTORS: Instructor[] = [
  {
    id: "showkat-chowdhury",
    slug: "showkat-chowdhury",
    name: "Showkat Chowdhury",
    role: "Founder & Lead Instructor",
    title: "Founder & Lead Instructor | CRACK PTE",
    organization: "CRACK PTE & Universal Language",
    scoreHighlight: "PTE 90/90 Overall",
    badge: "Pearson Master Trainer",
    image: "/images/instructors/showkat.jpg",
    experience: "8+ Years Expertise",
    studentsTrained: "650+ Successful Candidates",
    targetSuccessRate: "98.8% First-Time Pass",
    shortBio:
      "Visionary educator and certified Pearson Master Trainer who pioneered algorithm-calibrated PTE training frameworks in Bangladesh.",
    fullBio: [
      "Showkat Chowdhury is the visionary Founder and Chief Academic Director of CRACK PTE and Universal Language. Having achieved a perfect 90/90 score on the PTE Academic exam himself, Showkat has spent the past decade demystifying the proprietary automated AI scoring algorithms used by Pearson.",
      "His proprietary 'Algorithmic Fluency & Acoustic Calibration' method has empowered over 650 students—from medical doctors and nurses to IT professionals and engineers—to secure PR pathways and unconditional university admissions across Australia, Canada, the UK, and New Zealand.",
      "Trained under senior Pearson South Asia academic leadership, Showkat is renowned for his precise diagnostic audits, turning students stuck at 58–64 into 79+ high-scorers within 4 to 6 weeks."
    ],
    quote:
      "PTE is not an exam of general literary English. It is an algorithmic evaluation system. Once you understand the machine's acoustic model and semantic weight, a 79+ or 90 score is entirely reproducible.",
    specialties: [
      "Pearson AI Scoring Algorithm Reverse-Engineering",
      "Speaking Acoustic Flow & Pitch Calibration",
      "High-Yield Read Aloud & Repeat Sentence Frameworks",
      "One-on-One Score Gap Diagnostic Auditing",
      "Australian & UK High-Point Visa Strategy"
    ],
    certifications: [
      "Pearson South Asia Certified PTE Academic Trainer",
      "Advanced Acoustic Voice Modulation Practitioner",
      "Certified Language Assessment Specialist (Cambridge CELTA Alum)"
    ],
    education: [
      "Master of Education (M.Ed.) — Higher Education Pedagogy",
      "B.Sc. in Computer Science & Information Systems"
    ],
    featuredCourses: [
      {
        title: "PTE 79+ Guaranteed Masterclass",
        duration: "6 Weeks • 24 Live Sessions",
        description: "Intensive algorithmic training covering all 20 question types with daily 1-on-1 AI diagnostic feedback."
      },
      {
        title: "PTE Fast-Track Crash Batch",
        duration: "3 Weeks • 14 Sessions",
        description: "High-intensity targeted bootcamp designed for repeat test-takers needing an urgent 10+ score jump."
      }
    ],
    scorecardHighlights: [
      { label: "PTE Overall", value: "90/90", sublabel: "Official Scorecard" },
      { label: "Speaking Fluency", value: "90/90", sublabel: "Zero Accent Bias" },
      { label: "Writing Logic", value: "90/90", sublabel: "Structured Grammar" },
      { label: "Listening Precision", value: "90/90", sublabel: "Acoustic Mapping" }
    ],
    socials: {
      whatsapp: "8801772224283",
      email: "showkat@universallanguage.com.bd",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "dr-sumya-sultana-swarna",
    slug: "dr-sumya-sultana-swarna",
    name: "Dr. Sumya Sultana Swarna",
    role: "Senior Instructor & Medical English Lead",
    title: "Senior Instructor | CRACK PTE",
    organization: "CRACK PTE & Universal Language",
    scoreHighlight: "PTE 86+ & OET Grade A",
    badge: "Senior Clinical & Academic Mentor",
    image: "/images/instructors/swarna.jpg",
    experience: "6+ Years Mentoring",
    studentsTrained: "420+ Healthcare & Grad Candidates",
    targetSuccessRate: "97.5% Target Score",
    shortBio:
      "Physician and premier academic mentor specializing in high-stakes English examinations for doctors, healthcare workers, and postgraduate scholars.",
    fullBio: [
      "Dr. Sumya Sultana Swarna brings a uniquely analytical, methodical approach to English language coaching. As a qualified medical doctor and senior language pedagogue, she understands firsthand the immense pressure faced by healthcare professionals and postgraduate researchers aiming for overseas registration.",
      "Dr. Swarna heads the Medical & Professional Migration Academic Wing at CRACK PTE / Universal Language. She has guided hundreds of physicians, dentists, nurses, and STEM academics to ace their mandatory English thresholds for AHPRA, GMC, and international licensing councils.",
      "Her instructional style combines psychological test confidence, structured contextual vocabulary retention, and meticulous written analysis to ensure zero grammatical penalty marks."
    ],
    quote:
      "Confidence under timed examination conditions comes from systemic preparation. When you eliminate ambiguity, anxiety vanishes and your true proficiency shines.",
    specialties: [
      "Medical & Nursing Professional Language Licensure (AHPRA & GMC)",
      "Summarize Written Text & Essay Writing Architecture",
      "Academic Reading Comprehension & Collocation Retention",
      "Test Anxiety Mitigation & Cognitive Performance Under Pressure",
      "Postgraduate & Master's Statement of Purpose Mentorship"
    ],
    certifications: [
      "Pearson Certified Academic English Coach",
      "Medical Communication & Clinical Dialogue Masterclass Trainer",
      "British Council Advanced Academic Writing Fellow"
    ],
    education: [
      "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
      "Postgraduate Diploma in Health Informatics & Medical Pedagogy"
    ],
    featuredCourses: [
      {
        title: "Medical & Nursing PTE Fast-Track",
        duration: "5 Weeks • 20 Live Sessions",
        description: "Specialized batch tailored for doctors, pharmacists, and nurses targeting AHPRA / UK NMC registration."
      },
      {
        title: "PTE Academic Writing & Reading Masterwork",
        duration: "4 Weeks • 16 Sessions",
        description: "Master complex collocations, vocabulary banks, and foolproof templates for 79+ writing scores."
      }
    ],
    scorecardHighlights: [
      { label: "PTE Overall", value: "86+", sublabel: "Academic Pathway" },
      { label: "Reading Matrix", value: "88/90", sublabel: "High Collocation Mastery" },
      { label: "Written Discourse", value: "90/90", sublabel: "Perfect Logic & Flow" },
      { label: "OET Grade", value: "Grade A", sublabel: "Clinical English" }
    ],
    socials: {
      whatsapp: "8801772224283",
      email: "swarna@universallanguage.com.bd",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "samia-chowdhury",
    slug: "samia-chowdhury",
    name: "Samia Chowdhury",
    role: "PTE Instructor & Oral Fluency Specialist",
    title: "PTE Instructor | CRACK PTE",
    organization: "CRACK PTE & Universal Language",
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
      "She oversees the daily 1-on-1 Speaking Lab at Universal Language, providing minute-by-minute audio waveform analysis to calibrate student microphones, breathing points, and pace."
    ],
    quote:
      "You don't need a fake foreign accent to get 90 in PTE Speaking. The machine rewards clarity, consistent volume modulation, and steady oral cadence. We teach you exactly what the algorithm hears.",
    specialties: [
      "PTE Speaking Machine-Recognition Calibration",
      "Read Aloud Chunking & Phrasing Modulation",
      "Repeat Sentence Short-Term Working Memory Techniques",
      "Describe Image & Retell Lecture Mental Mapping",
      "Pronunciation & Intonation Correction for Non-Native Speakers"
    ],
    certifications: [
      "Pearson Certified Academic Language Instructor",
      "Applied English Phonetics & Speech Therapy Practitioner",
      "TESOL / TEFL 150-Hour Certified Educator"
    ],
    education: [
      "Master of Arts in Applied Linguistics & ELT",
      "Bachelor of Arts in English Literature (Honours)"
    ],
    featuredCourses: [
      {
        title: "Speaking & Fluency 90 Breakthrough Lab",
        duration: "3 Weeks • 12 Practical Labs",
        description: "Intensive 1-on-1 audio diagnostic labs calibrating microphone distance, intonation, and rhythm."
      },
      {
        title: "PTE Comprehensive Foundation Course",
        duration: "6 Weeks • 22 Sessions",
        description: "From beginner grammar to 65+ confidence across all 4 communicative test modules."
      }
    ],
    scorecardHighlights: [
      { label: "PTE Overall", value: "88", sublabel: "Band 8.5 Equivalent" },
      { label: "Oral Fluency", value: "90/90", sublabel: "Perfect Cadence" },
      { label: "Pronunciation", value: "89/90", sublabel: "Acoustic Clarity" },
      { label: "Speaking Total", value: "90/90", sublabel: "Full Marks" }
    ],
    socials: {
      whatsapp: "8801772224283",
      email: "samia@universallanguage.com.bd",
      linkedin: "https://linkedin.com"
    }
  }
];

export function getInstructorBySlug(slug: string): Instructor | undefined {
  return INSTRUCTORS.find((inst) => inst.slug === slug || inst.id === slug);
}
