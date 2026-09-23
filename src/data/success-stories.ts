export interface ScoreSkills {
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
}

export interface StudentSuccessStory {
  id: string;
  name: string;
  image: string;
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
    id: "golam-rabbani",
    name: "ARM Golam Rabbani",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "University of Melbourne • MS in Computer Science",
    overallScore: 90,
    maxScore: 90,
    cefrLevel: "C2 Expert User",
    badge: "Perfect 90/90",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    skills: {
      listening: 90,
      reading: 88,
      speaking: 90,
      writing: 90,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE0040342",
      registrationId: "53415039",
      testDate: "06 Apr 2025",
      validUntil: "06 Apr 2027",
      testCentre: "TUV SUD Bangladesh (Authorized Partner Universal Language)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "12 Private Classes",
    testimonial:
      "From scoring 58 in my first self-study attempt to achieving a perfect 90 in just 12 private 1-on-1 sessions. The pronunciation pitch correction was the game changer.",
    verified: true,
  },
  {
    id: "mimtin-nur",
    name: "Mimtin Nur",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    targetCountry: "United Kingdom",
    targetCountryFlag: "🇬🇧",
    targetGoal: "University of Manchester • MSc Data Science",
    overallScore: 88,
    maxScore: 90,
    cefrLevel: "C1+ Proficient User",
    badge: "Score 79+ Guaranteed",
    badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
    skills: {
      listening: 90,
      reading: 81,
      speaking: 86,
      writing: 90,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE00416706",
      registrationId: "52241155",
      testDate: "07 Mar 2025",
      validUntil: "07 Mar 2027",
      testCentre: "Universal Language Pearson Partner Centre, Dhaka",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "1 Month Intensive",
    testimonial:
      "The repeat sentence and dictation templates gave me 90 in both Listening and Writing. The mentors personally evaluated every single drill.",
    verified: true,
  },
  {
    id: "kazi-maisha-ahmed",
    name: "Kazi Maisha Ahmed",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    targetCountry: "Canada",
    targetCountryFlag: "🇨🇦",
    targetGoal: "University of Toronto • Master of Management",
    overallScore: 84,
    maxScore: 90,
    cefrLevel: "C1 Proficient User",
    badge: "First-Attempt Success",
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
    skills: {
      listening: 90,
      reading: 75,
      speaking: 88,
      writing: 83,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE004364755",
      registrationId: "543117411",
      testDate: "04 Jan 2025",
      validUntil: "04 Jan 2027",
      testCentre: "Daffodil International University (Partner Centre Dhaka)",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "12 Classes Mentorship",
    testimonial:
      "The AI mock platform was identical to the real Pearson software. I entered the test room feeling like I was just giving another class mock.",
    verified: true,
  },
  {
    id: "tanvir-hasan",
    name: "Tanvir Hasan Chowdhury",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    targetCountry: "Australia",
    targetCountryFlag: "🇦🇺",
    targetGoal: "UNSW Sydney • Australian PR Visa (20 Points)",
    overallScore: 86,
    maxScore: 90,
    cefrLevel: "C1+ Proficient User",
    badge: "PR Visa Pathway",
    badgeColor: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    skills: {
      listening: 87,
      reading: 85,
      speaking: 89,
      writing: 84,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE00428912",
      registrationId: "53998124",
      testDate: "19 Feb 2025",
      validUntil: "19 Feb 2027",
      testCentre: "Universal Language Authorized Center Dhaka",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "4 Weeks Fast-Track",
    testimonial:
      "I urgently needed superior English (79+ each band) for my Australian PR application. Scored 86 overall with direct mentor guidance on speaking rhythm.",
    verified: true,
  },
  {
    id: "nusrat-jahan-sneha",
    name: "Nusrat Jahan Sneha",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    targetCountry: "Ireland",
    targetCountryFlag: "🇮🇪",
    targetGoal: "Trinity College Dublin • MSc Finance (Scholarship)",
    overallScore: 82,
    maxScore: 90,
    cefrLevel: "C1 Proficient User",
    badge: "Scholarship Achiever",
    badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
    skills: {
      listening: 85,
      reading: 80,
      speaking: 83,
      writing: 82,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE00398115",
      registrationId: "51982736",
      testDate: "12 Jan 2025",
      validUntil: "12 Jan 2027",
      testCentre: "Universal Language Pearson Center Dhaka",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "3 Weeks Express",
    testimonial:
      "Studying alongside a demanding job felt impossible until Universal Language created a custom 45-minute daily drill plan for me. Passed with flying colors!",
    verified: true,
  },
  {
    id: "farhan-sadik",
    name: "Farhan Sadik Al-Amin",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    targetCountry: "New Zealand",
    targetCountryFlag: "🇳🇿",
    targetGoal: "University of Auckland • Software Engineering",
    overallScore: 89,
    maxScore: 90,
    cefrLevel: "C2 Expert User",
    badge: "90 in Speaking & Listening",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    skills: {
      listening: 90,
      reading: 87,
      speaking: 90,
      writing: 88,
    },
    testDetails: {
      testType: "PTE Academic",
      testTakerId: "PTE00445901",
      registrationId: "54902188",
      testDate: "28 Feb 2025",
      validUntil: "28 Feb 2027",
      testCentre: "Universal Language Pearson Center Dhaka",
      countryOfResidence: "Bangladesh",
      countryOfCitizenship: "Bangladesh",
    },
    duration: "12 1-on-1 Classes",
    testimonial:
      "Scored a full 90 in both Listening and Speaking. Their prediction algorithms were spot on with the real Pearson grading criteria.",
    verified: true,
  },
];
