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
  scorecardImage?: string;
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
    scoreReportCode: string;
    testDate: string;
    validUntil: string;
    testCentre: string;
    countryOfResidence: string;
    countryOfCitizenship: string;
    dateOfBirth?: string;
    gender?: string;
  };
  duration: string;
  testimonial: string;
  verified: boolean;
}

export const STUDENT_SUCCESS_STORIES: StudentSuccessStory[] = [
  {
    id: "saima-rahman-anika",
    name: "Saima Rahman Anika",
    image: "/images/scorecards/saima-rahman-anika.png",
    scorecardImage: "/images/scorecards/saima-rahman-anika.png",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "Australia Higher Education & Skilled Migration",
    overallScore: 77,
    maxScore: 90,
    cefrLevel: "C1 Proficient User",
    badge: "77 Overall • 85 Speaking",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    skills: {
      listening: 80,
      reading: 75,
      speaking: 85,
      writing: 71,
    },
    testDetails: {
      testType: "PTE Academic",
      scoreReportCode: "4b6897VNDU",
      testTakerId: "PTE004941975",
      registrationId: "547031152",
      testDate: "24 Sep 2026",
      validUntil: "24 Sep 2028",
      testCentre: "TUV SUD Bangladesh Pvt. Ltd. (Centre ID: 73429)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
      dateOfBirth: "27 Jul 2000",
      gender: "Female",
    },
    duration: "1 Month Intensive",
    testimonial:
      "Scored 85 in Speaking and 80 in Listening! Universal Language's proprietary templates and continuous AI feedback gave me the confidence to secure my 77 overall score smoothly on my first attempt.",
    verified: true,
  },
  {
    id: "md-ashikur-rahman",
    name: "Md Ashikur Rahman",
    image: "/images/scorecards/md-ashikur-rahman.png",
    scorecardImage: "/images/scorecards/md-ashikur-rahman.png",
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
      scoreReportCode: "29d0f1E2FN",
      testTakerId: "PTE002740465",
      registrationId: "546272778",
      testDate: "11 Sep 2026",
      validUntil: "11 Sep 2028",
      testCentre: "Lateral Plains - Kensington (Centre ID: 86006)",
      countryOfResidence: "Australia",
      countryOfCitizenship: "Bangladesh",
      dateOfBirth: "06 Aug 1998",
      gender: "Male",
    },
    duration: "1 Month Intensive",
    testimonial:
      "Achieved 70+ across all 4 communicative modules on my first attempt! The repeat sentence drills and one-on-one speaking mock assessments were invaluable for getting 75 in Speaking.",
    verified: true,
  },
  {
    id: "shahidul-alam-shovon",
    name: "Shahidul Alam Shovon",
    image: "/images/scorecards/shahidul-alam-shovon.png",
    scorecardImage: "/images/scorecards/shahidul-alam-shovon.png",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "Western Australia Skilled Migration Pathway",
    overallScore: 62,
    maxScore: 90,
    cefrLevel: "B2 Independent User",
    badge: "62 Overall • 68 Speaking",
    badgeColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    skills: {
      listening: 64,
      reading: 63,
      speaking: 68,
      writing: 55,
    },
    testDetails: {
      testType: "PTE Academic",
      scoreReportCode: "49a3c0ZRVB",
      testTakerId: "PTE004826048",
      registrationId: "546122060",
      testDate: "07 Sep 2026",
      validUntil: "07 Sep 2028",
      testCentre: "Lateral Plains Events - North Perth (Centre ID: 90795)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
      dateOfBirth: "28 Apr 1994",
      gender: "Male",
    },
    duration: "6 Weeks Comprehensive",
    testimonial:
      "Achieving 68 in Speaking and 64 in Listening gave me the exact benchmark I needed for Perth, Western Australia. The mock simulation testing exactly matched the real exam.",
    verified: true,
  },
  {
    id: "suborna-akter",
    name: "Suborna Akter",
    image: "/images/scorecards/suborna-akter.png",
    scorecardImage: "/images/scorecards/suborna-akter.png",
    targetCountry: "United Kingdom",
    targetCountryFlag: "🇬🇧",
    targetGoal: "UK Master's Degree Admission & Student Visa",
    overallScore: 60,
    maxScore: 90,
    cefrLevel: "B2 Independent User",
    badge: "60 Overall • 66 Reading",
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
    skills: {
      listening: 58,
      reading: 66,
      speaking: 55,
      writing: 65,
    },
    testDetails: {
      testType: "PTE Academic",
      scoreReportCode: "4a365319IX",
      testTakerId: "PTE004863571",
      registrationId: "541045755",
      testDate: "25 Sep 2026",
      validUntil: "25 Sep 2028",
      testCentre: "TUV SUD Bangladesh Pvt. Ltd. (Centre ID: 73429)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
      dateOfBirth: "08 Aug 1999",
      gender: "Female",
    },
    duration: "4 Weeks Fast-Track",
    testimonial:
      "Cleared my required university cutoff on my first attempt with an overall 60. The Reading fill-in-the-blanks and Write From Dictation master strategies helped me score 66 in Reading and 65 in Writing.",
    verified: true,
  },
];
