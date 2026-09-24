export interface CertificationTheme {
  bannerGradient: string;
  badgeBg: string;
  borderHover: string;
  glowColor: string;
  iconBg: string;
}

export interface CertificationItem {
  id: string;
  category: string;
  credentialType: string;
  title: string;
  issuer: string;
  issuerSubtitle: string;
  issuerLogoType: "gov" | "pearson" | "alfa" | "ict";
  shortHighlight: string;
  tags: string[];
  authorityLocation: string;
  verificationCode: string;
  issueDate: string;
  validity: string;
  theme: CertificationTheme;
  certificateDetails: {
    certificateTitle: string;
    subHeading: string;
    awardedTo: string;
    recipientRole: string;
    organization: string;
    signatoryName: string;
    signatoryRole: string;
    signatoryOrganization: string;
    sealText: string;
    accreditationScope: string;
    keyCompetencies: string[];
    verificationUrl: string;
  };
}

export const OFFICIAL_CERTIFICATIONS: CertificationItem[] = [
  {
    id: "nsda-registration",
    category: "Government Registration",
    credentialType: "Statutory Accreditation",
    title: "Certificate of Registration & Vocational Recognition",
    issuer: "Prime Minister's Office — NSDA",
    issuerSubtitle: "National Skills Development Authority, Government of Bangladesh",
    issuerLogoType: "gov",
    shortHighlight:
      "Statutory government accreditation complying with National Skills Quality Assurance Standards.",
    tags: ["PMO NSDA Registered", "Permanent Status"],
    authorityLocation: "Dhaka, Bangladesh",
    verificationCode: "NSDA/PMO/REG-2023-09418",
    issueDate: "14 November 2023",
    validity: "Permanent Registration",
    theme: {
      bannerGradient: "from-[#003822] via-[#005234] to-[#047857]",
      badgeBg: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
      borderHover: "hover:border-emerald-500/50",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(5,150,105,0.22)]",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    certificateDetails: {
      certificateTitle: "CERTIFICATE OF REGISTRATION",
      subHeading: "National Skills Development Authority (NSDA) • Prime Minister's Office",
      awardedTo: "Universal Language Academy",
      recipientRole: "Authorized Vocational Language Training Provider",
      organization: "National Skills Development Authority, Prime Minister's Office, Bangladesh",
      signatoryName: "Executive Chairman",
      signatoryRole: "Authorized Registrar & Joint Secretary",
      signatoryOrganization: "Prime Minister's Office, Dhaka, Bangladesh",
      sealText: "OFFICIAL SEAL • PRIME MINISTER'S OFFICE NSDA",
      accreditationScope:
        "Accredited for delivery of International Standard English Language Competency Programs, PTE Preparation, and Vocational Communication Standards.",
      keyCompetencies: [
        "Government Approved Training Infrastructure",
        "National Skills Quality Assurance Compliance",
        "Authorized Language Pedagogy Standards",
        "Institutional Registry Compliance",
      ],
      verificationUrl: "https://nsda.gov.bd/verify/NSDA-PMO-REG-2023-09418",
    },
  },
  {
    id: "pearson-low-level-learners",
    category: "Pearson Education",
    credentialType: "Master Trainer Pedagogy",
    title: "PTE Academic Masterclass: Supporting Enabling Skills",
    issuer: "Pearson Education South Asia",
    issuerSubtitle: "Teacher Training & Professional Development Division",
    issuerLogoType: "pearson",
    shortHighlight:
      "Certified masterclass led directly by Pearson South Asia Lead for enabling skills and score jumps.",
    tags: ["South Asia Lead Certified", "45 to 79+ Pedagogy"],
    authorityLocation: "Noida / London",
    verificationCode: "PEARSON-TT-SK-2023-4109",
    issueDate: "19 September 2023",
    validity: "Certified Academic Pedagogy",
    theme: {
      bannerGradient: "from-[#081d3d] via-[#0b3a82] to-[#1d4ed8]",
      badgeBg: "bg-blue-500/20 text-blue-200 border-blue-400/30",
      borderHover: "hover:border-blue-500/50",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(11,58,130,0.22)]",
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    certificateDetails: {
      certificateTitle: "CERTIFICATE OF PROFESSIONAL DEVELOPMENT",
      subHeading: "Pearson Teacher Training & Academic Development Services",
      awardedTo: "Md. Ahamed Asif — Universal Language",
      recipientRole: "PTE Academic Lead Instructor & Curriculum Director",
      organization: "Pearson Education South Asia & Pearson Teacher Support Services",
      signatoryName: "Shonali Khanna",
      signatoryRole: "Lead Master Trainer & Academic Consultant",
      signatoryOrganization: "Pearson Education South Asia",
      sealText: "PEARSON CERTIFIED TEACHER DEVELOPMENT",
      accreditationScope:
        "Mastery in targeted instructional strategies for non-native learners, speech pattern alignment, and enabling skills remediation.",
      keyCompetencies: [
        "Acoustic Speech Intelligibility Remediation",
        "Targeted Read-Aloud & Repeat-Sentence Coaching",
        "Scaffolded Summarization for Non-Native Writers",
        "Diagnostic Score Gap Analysis (45 to 79+ Roadmap)",
      ],
      verificationUrl: "https://pearsonpte.com/verify-credential/PEARSON-TT-SK-2023-4109",
    },
  },
  {
    id: "alfa-partner",
    category: "Institutional Partner",
    credentialType: "Diagnostic Systems Partner",
    title: "Authorized Institutional Assessment Partner",
    issuer: "Alfa PTE Global Academic Network",
    issuerSubtitle: "Global English Assessment Technology Network",
    issuerLogoType: "alfa",
    shortHighlight:
      "Institutional partnership authorizing access to Pearson-calibrated automated scoring algorithms.",
    tags: ["Official Exam Partner", "Calibrated Scoring"],
    authorityLocation: "Australia & Asia",
    verificationCode: "ALFA-PARTNER-BD-2023/849",
    issueDate: "02 August 2023",
    validity: "Active Global Partner (2023–2026)",
    theme: {
      bannerGradient: "from-[#0f172a] via-[#1e293b] to-[#0284c7]",
      badgeBg: "bg-sky-500/20 text-sky-200 border-sky-400/30",
      borderHover: "hover:border-sky-500/50",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.22)]",
      iconBg: "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-500/20",
    },
    certificateDetails: {
      certificateTitle: "AUTHORIZED INSTITUTIONAL PARTNER",
      subHeading: "Alfa PTE Global English Proficiency Academic Network",
      awardedTo: "Universal Language (BD Division)",
      recipientRole: "Premier Institutional Education Partner",
      organization: "Alfa PTE Technology & Exam Systems Australia/Asia",
      signatoryName: "Director of Global Partnerships",
      signatoryRole: "Head of Academic Alliances",
      signatoryOrganization: "Alfa PTE International Portal Division",
      sealText: "CERTIFIED ALFA PTE INSTITUTIONAL PARTNER",
      accreditationScope:
        "Authorized to administer official Alfa PTE full-length mock examinations, diagnostic performance feedback, and institutional question bank access.",
      keyCompetencies: [
        "Pearson-Calibrated Automated Scoring Engine",
        "Speech Acoustic Fluency Analysis Framework",
        "High-Frequency Exam Question Bank Delivery",
        "Institutional Student Performance Analytics",
      ],
      verificationUrl: "https://alfapte.com/verify-partner/ALFA-PARTNER-BD-2023-849",
    },
  },
  {
    id: "pearson-paraphrasing",
    category: "Pearson Education",
    credentialType: "Academic Writing Pedagogy",
    title: "Advanced Academic Writing: Paraphrasing & Lexical Control",
    issuer: "Pearson Education Academic Development",
    issuerSubtitle: "Certified Advanced Academic Writing & Linguistic Assessment",
    issuerLogoType: "pearson",
    shortHighlight:
      "Specialized Pearson certification validating syntactic restructuring and rubric-aligned academic writing.",
    tags: ["Pearson Academic", "Writing Rubrics"],
    authorityLocation: "London, United Kingdom",
    verificationCode: "PEARSON-AW-2023-8821",
    issueDate: "27 October 2023",
    validity: "Certified Academic Writing Pedagogy",
    theme: {
      bannerGradient: "from-[#280c57] via-[#431484] to-[#6d28d9]",
      badgeBg: "bg-purple-500/20 text-purple-200 border-purple-400/30",
      borderHover: "hover:border-purple-500/50",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(109,40,217,0.22)]",
      iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
    certificateDetails: {
      certificateTitle: "CERTIFICATE OF ACHIEVEMENT",
      subHeading: "Pearson English Teaching Services • Advanced Pedagogy",
      awardedTo: "Universal Language PTE Faculty",
      recipientRole: "Academic Writing & Summarization Specialists",
      organization: "Pearson Education Global Academic Training",
      signatoryName: "Academic Director",
      signatoryRole: "Head of English Language Assessment",
      signatoryOrganization: "Pearson Education International",
      sealText: "PEARSON ACADEMIC EXCELLENCE IN WRITING",
      accreditationScope:
        "Certified in teaching syntactic restructuring, academic register vocabulary, and semantic equivalence for PTE Summarize Written Text & Write Essay.",
      keyCompetencies: [
        "Compound Sentence Synthesis without Grammar Faults",
        "Collocation Selection Matching Academic Rubrics",
        "Zero-Penalty Write-From-Dictation Mechanics",
        "Original Linguistic Expression Framework",
      ],
      verificationUrl: "https://pearsonpte.com/verify-credential/PEARSON-AW-2023-8821",
    },
  },
  {
    id: "pearson-voucher-partner",
    category: "Pearson Education",
    credentialType: "Official Registration Center",
    title: "Authorized Pearson PTE Academic Test Voucher Partner",
    issuer: "Pearson VUE & Pearson PTE Bangladesh",
    issuerSubtitle: "Authorized Official Test Registration Service Provider",
    issuerLogoType: "pearson",
    shortHighlight:
      "Direct authorization for official Pearson PTE Academic exam vouchers and test center slot booking.",
    tags: ["Official Booking Center", "Pearson VUE Partner"],
    authorityLocation: "Dhaka, Bangladesh",
    verificationCode: "PEARSON-VUE-PARTNER-BD-7014",
    issueDate: "15 January 2024",
    validity: "Active Pearson Booking Partner",
    theme: {
      bannerGradient: "from-[#111c44] via-[#1e3a8a] to-[#2563eb]",
      badgeBg: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30",
      borderHover: "hover:border-indigo-500/50",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(37,99,235,0.22)]",
      iconBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    },
    certificateDetails: {
      certificateTitle: "AUTHORIZED EXAM REGISTRATION PARTNER",
      subHeading: "Pearson VUE Global Testing Network • Academic Division",
      awardedTo: "Universal Language (Dhaka Center)",
      recipientRole: "Authorized Test Registration & Support Partner",
      organization: "Pearson VUE & Pearson Language Assessments",
      signatoryName: "Regional Operations Manager",
      signatoryRole: "Country Head — Assessments",
      signatoryOrganization: "Pearson South Asia & Pearson VUE",
      sealText: "PEARSON VUE AUTHORIZED REGISTRATION PARTNER",
      accreditationScope:
        "Authorized to issue official Pearson PTE Academic exam vouchers, test centre candidate bookings, and candidate identity verification.",
      keyCompetencies: [
        "Direct Pearson Backend Voucher Issuance",
        "Local Currency Payment Clearing (bKash/Bank)",
        "Zero-Risk Slot Reservation & Emergency Rescheduling",
        "Authorized Test Centre Liaison in Dhaka",
      ],
      verificationUrl: "https://pearsonvue.com/verify-partner/PEARSON-VUE-PARTNER-BD-7014",
    },
  },
  {
    id: "bhtpa-accelerating-bd",
    category: "Government Recognition",
    credentialType: "National Recognition",
    title: "Provisional Certificate of Completion: Accelerating Bangladesh",
    issuer: "Bangladesh Hi-Tech Park Authority (BHTPA)",
    issuerSubtitle: "Information and Communication Technology (ICT) Division",
    issuerLogoType: "ict",
    shortHighlight:
      "Government recognition awarded under Accelerating Bangladesh for hybrid digital education delivery.",
    tags: ["ICT Division Recognized", "Hi-Tech Park Authority"],
    authorityLocation: "Dhaka, Bangladesh",
    verificationCode: "BHTPA/DEIED/AB-2023-1102",
    issueDate: "05 December 2023",
    validity: "Recognized ICT Education Initiative",
    theme: {
      bannerGradient: "from-[#032927] via-[#0f4f4b] to-[#0d9488]",
      badgeBg: "bg-teal-500/20 text-teal-200 border-teal-400/30",
      borderHover: "hover:border-teal-500/50",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(13,148,136,0.22)]",
      iconBg: "bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border-teal-500/20",
    },
    certificateDetails: {
      certificateTitle: "PROVISIONAL CERTIFICATE OF COMPLETION",
      subHeading: "Accelerating Bangladesh • Bangladesh Hi-Tech Park Authority (BHTPA)",
      awardedTo: "Universal Language EdTech Initiative",
      recipientRole: "Technology-Enabled Education Pioneer",
      organization: "DEIED & Bangladesh Hi-Tech Park Authority, ICT Division",
      signatoryName: "Managing Director",
      signatoryRole: "Project Director (DEIED) & Joint Secretary",
      signatoryOrganization: "Bangladesh Hi-Tech Park Authority, Dhaka",
      sealText: "OFFICIAL SEAL • HI-TECH PARK AUTHORITY BANGLADESH",
      accreditationScope:
        "Recognized for successful execution of ICT-driven language acceleration programs for overseas higher education and digital workforce mobility.",
      keyCompetencies: [
        "Tech-Enabled Hybrid Classroom Delivery",
        "Automated Diagnostic Evaluation Frameworks",
        "National Digital Talent Enablement",
        "Cloud-Based English Assessment Integration",
      ],
      verificationUrl: "https://bhtpa.gov.bd/verify/BHTPA-DEIED-AB-2023-1102",
    },
  },
];
