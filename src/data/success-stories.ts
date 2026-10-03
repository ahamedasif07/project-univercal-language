export interface ScoreSkills {
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
}

export interface StudentSuccessStory {
  id: string;
  name: string;
  image?: string;
  targetCountry: string;
  targetCountryFlag: string;
  targetGoal: string;
  overallScore: number;
  maxScore: number;
  cefrLevel: string;
  badge: string;
  badgeColor?: string;
  skills: ScoreSkills;
  testDetails: {
    testType: string;
    testTakerId: string;
    registrationId: string;
    testDate: string;
    validUntil: string;
    testCentre: string;
    countryOfResidence: string;
    countryOfCitizenship: string;
  };
  duration: string;
  testimonial: string;
  verified: boolean;
}

export const STUDENT_SUCCESS_STORIES: StudentSuccessStory[] = [
  {
    id: "sabrina-sultana",
    name: "Sabrina Sultana",
    image: "",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "Australia Skilled Migration & Study Visa",
    overallScore: 77,
    maxScore: 90,
    cefrLevel: "C1 Proficient User",
    badge: "77 Overall • 85 Speaking",
    badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
    skills: {
      listening: 80,
      reading: 75,
      speaking: 85,
      writing: 71,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004941975",
      registrationId: "4b6897VNDU",
      testDate: "24 Sep 2026",
      validUntil: "24 Sep 2028",
      testCentre: "TUV SUD Bangladesh Pvt. Ltd. (Centre ID: 73429)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "1 Month Intensive",
    testimonial:
      "Scored 85 in Speaking and 80 in Listening! Universal Language's proprietary templates and continuous AI feedback gave me the confidence to secure my 77 overall score smoothly on my first attempt.",
    verified: true,
  },
  {
    id: "md-habibur-rahman",
    name: "Md. Habibur Rahman",
    image: "",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "Australia Skilled PR & Work Visa (70+ All Bands)",
    overallScore: 71,
    maxScore: 90,
    cefrLevel: "C1 Proficient User",
    badge: "71 Overall • 75 Speaking",
    badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
    skills: {
      listening: 71,
      reading: 70,
      speaking: 75,
      writing: 74,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE002740465",
      registrationId: "4b88204910",
      testDate: "11 Sep 2026",
      validUntil: "11 Sep 2028",
      testCentre: "Lateral Plains - Kensington (Centre ID: 86006)",
      countryOfResidence: "Australia",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "1 Month Intensive",
    testimonial:
      "Achieved 70+ across all 4 communicative modules on my first attempt! The repeat sentence drills and one-on-one speaking mock assessments were invaluable for getting 75 in Speaking.",
    verified: true,
  },
  {
    id: "sayed-hossain",
    name: "Sayed Hossain",
    image: "",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "University of Western Australia • Perth Migration",
    overallScore: 70,
    maxScore: 90,
    cefrLevel: "C1 Proficient User",
    badge: "70 Overall • 75 Speaking",
    badgeColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    skills: {
      listening: 71,
      reading: 75,
      speaking: 75,
      writing: 61,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004819401",
      registrationId: "48a3c0RF6U",
      testDate: "22 Sep 2026",
      validUntil: "22 Sep 2028",
      testCentre: "Lateral Plains Events - North Perth (Centre ID: 90795)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "6 Weeks Comprehensive",
    testimonial:
      "Achieving 75 in both Speaking and Reading was crucial for my Australian cutoff. The simulation mock sessions matched the official exam environment 100%.",
    verified: true,
  },
  {
    id: "md-tanvir-hossain",
    name: "Md. Tanvir Hossain",
    image: "",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "Subclass 485 Graduate / Australia PR Pathway",
    overallScore: 64,
    maxScore: 90,
    cefrLevel: "B2 Independent User",
    badge: "64 Overall • 72 Writing",
    badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
    skills: {
      listening: 61,
      reading: 65,
      speaking: 68,
      writing: 72,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004882103",
      registrationId: "4a7281BNSL",
      testDate: "25 Sep 2026",
      validUntil: "25 Sep 2028",
      testCentre: "Pearson Professional Centers-Parramatta NSW (Centre ID: 81598)",
      countryOfResidence: "Australia",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "1 Month Crash Course",
    testimonial:
      "Scoring 72 in Writing gave me the extra boost I needed in Sydney. The essay structure drills and repeat sentence tactics worked wonders.",
    verified: true,
  },
  {
    id: "nusrat-sharmin",
    name: "Nusrat Sharmin",
    image: "",
    targetCountry: "United Kingdom",
    targetCountryFlag: "🇬🇧",
    targetGoal: "UK Master's Degree Admission & Student Visa",
    overallScore: 60,
    maxScore: 90,
    cefrLevel: "B2 Independent User",
    badge: "60 Overall • 66 Reading",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    skills: {
      listening: 58,
      reading: 66,
      speaking: 55,
      writing: 65,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004910245",
      registrationId: "4b91045756",
      testDate: "25 Sep 2026",
      validUntil: "25 Sep 2028",
      testCentre: "TUV SUD Bangladesh Pvt. Ltd. (Centre ID: 73429)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "4 Weeks Fast-Track",
    testimonial:
      "Cleared my UK university required cutoff on my first attempt with an overall 60. Reading fill in the blanks strategies helped me score 66 in reading.",
    verified: true,
  },
  {
    id: "jannatun-lima",
    name: "Most. Jannatun Lima",
    image: "",
    targetCountry: "Canada",
    targetCountryFlag: "🇨🇦",
    targetGoal: "Canada Study Permit & University Cutoff",
    overallScore: 57,
    maxScore: 90,
    cefrLevel: "B2 Independent User",
    badge: "57 Overall • 60 Speaking",
    badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
    skills: {
      listening: 58,
      reading: 56,
      speaking: 60,
      writing: 57,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004985946",
      registrationId: "4c145a3MWM",
      testDate: "24 Sep 2026",
      validUntil: "24 Sep 2028",
      testCentre: "TUV SUD Bangladesh Pvt. Ltd. (Centre ID: 73429)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "3 Weeks Express",
    testimonial:
      "Universal Language made PTE preparation so direct and stress-free. In just 3 weeks I got the required 57+ score needed for my Canadian visa file.",
    verified: true,
  },
  {
    id: "rasheda-khanom",
    name: "Rasheda Khanom",
    image: "",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "Australia Skilled Assessment & Nursing Pathway",
    overallScore: 57,
    maxScore: 90,
    cefrLevel: "B2 Independent User",
    badge: "Score Booster: 46 ➔ 57",
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
    skills: {
      listening: 57,
      reading: 52,
      speaking: 62,
      writing: 56,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004528292",
      registrationId: "4510BVRNT1",
      testDate: "16 Sep 2025",
      validUntil: "16 Sep 2028",
      testCentre: "Mentor Education Limited - Chittagong (Centre ID: 77550)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "Score Booster Program",
    testimonial:
      "Previously scored only 46 after studying at another institute. Joining Universal Language's simulation classes and Credly-certified mentorship boosted my score to 57!",
    verified: true,
  },
];


