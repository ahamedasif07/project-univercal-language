"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  GraduationCap,
  Globe2,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Briefcase,
  Building2,
  Plane,
  Award,
  Compass,
  Landmark,
  MapPin,
  Search,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export type DestinationRegion =
  | "all"
  | "europe"
  | "north-america"
  | "oceania"
  | "asia";

export type DestinationCategory = "all" | "popular" | "europe" | "pacific";

export interface DestinationCountry {
  id: string;
  name: string;
  flag: string;
  flagSvg: string;
  landmarkName: string;
  landmarkImage: string;
  region?: "europe" | "north-america" | "oceania" | "asia";
  category?: DestinationCategory;
  pteScore: string;
  pteBadge: string;
  shortSummary: string;
  stayBack: string;
  workRights: string;
  avgTuition: string;
  exams: {
    name: string;
    score: string;
    preferred?: boolean;
    note?: string;
  }[];
  visas: {
    title: string;
    code?: string;
    desc: string;
  }[];
  topUniversities: string[];
  keyPerks: string[];
  detailedOverview: string;
}

export const DESTINATIONS: DestinationCountry[] = [
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    flagSvg: "/flags/au.svg",
    landmarkName: "Sydney Opera House & Harbour",
    landmarkImage:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop",
    region: "oceania",
    category: "popular",
    pteScore: "50+ to 65+",
    pteBadge: "PTE Score: 50+",
    shortSummary: "Australia is the #1 choice for Bangladeshi students with 100% PTE acceptance for university & PR.",
    stayBack: "2 – 4 Years Post-Study Work",
    workRights: "48 hours per fortnight during study",
    avgTuition: "AUD $28,000 – $42,000 / year",
    exams: [
      { name: "PTE Academic", score: "50+ (Diploma) / 65+ (Masters)", preferred: true, note: "Accepted by 100% of Australian universities & Dept of Home Affairs" },
      { name: "IELTS", score: "6.0 – 6.5+" },
      { name: "TOEFL iBT", score: "79+" },
    ],
    visas: [
      { title: "Student Visa", code: "Subclass 500", desc: "Full study rights with up to 48h work permit per fortnight." },
      { title: "Temporary Graduate Visa", code: "Subclass 485", desc: "Post-study work stream allowing 2 to 4 years work experience." },
      { title: "Skilled Independent Visa", code: "Subclass 189/190", desc: "Permanent residency pathway awarding bonus points for PTE 79+." },
    ],
    topUniversities: [
      "University of Melbourne",
      "University of Sydney",
      "UNSW Sydney",
      "Monash University",
      "University of Queensland",
    ],
    keyPerks: [
      "PTE 79+ awards maximum 20 PR points",
      "Transparent PR pathways via regional study",
      "High minimum wage & strong graduate employment rate",
      "World top-50 universities in Group of Eight",
    ],
    detailedOverview:
      "Australia is universally recognized for world-class research institutions and generous post-study work entitlements. For Bangladeshi candidates, Pearson PTE Academic is the golden standard: it delivers rapid results within 48 hours and provides full compliance for both Department of Home Affairs student visas and skilled migration PR streams.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    flagSvg: "/flags/uk.svg",
    landmarkName: "Big Ben & Westminster, London",
    landmarkImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    region: "europe",
    category: "popular",
    pteScore: "51+ to 62+",
    pteBadge: "PTE Score: 51+",
    shortSummary: "Fast 1-year Master's programs, 2-year Graduate Route stay-back, and historic prestige.",
    stayBack: "2 Years Graduate Route (3 Years PhD)",
    workRights: "20 hours / week during term time",
    avgTuition: "£14,000 – £24,000 / year",
    exams: [
      { name: "PTE Academic UKVI", score: "51+ (Undergrad) / 59+ (Postgrad)", preferred: true, note: "SELT compliant for UK Home Office visa processing" },
      { name: "IELTS for UKVI", score: "6.0+" },
      { name: "PTE Academic Standard", score: "59 – 65+" },
    ],
    visas: [
      { title: "Student Visa", code: "Tier 4 Route", desc: "Standard student route with CAS sponsorship from university." },
      { title: "Graduate Route Visa", code: "Unsponsored", desc: "2 years stay-back to work or seek employment in any sector." },
      { title: "Skilled Worker Visa", code: "Point-Based", desc: "Direct transition from graduate route to permanent sponsorship." },
    ],
    topUniversities: [
      "University of Oxford & Cambridge",
      "Imperial College London",
      "University of Manchester",
      "University of Edinburgh",
      "King's College London",
    ],
    keyPerks: [
      "1-Year Masters saves time and tuition living expenses",
      "PTE Academic UKVI approved by UK Home Office",
      "Global financial & technology headquarters in London",
      "Seamless progression from Graduate Route to Skilled Worker",
    ],
    detailedOverview:
      "The UK remains one of the world's most distinguished educational hubs. With 1-year Master's degrees and the 2-year unsponsored Graduate Route visa, students can gain British qualifications and immediate international work experience. Pearson PTE Academic is officially endorsed by the UK Home Office (as PTE Home and PTE Academic UKVI).",
  },
  {
    id: "ca",
    name: "Canada",
    flag: "🇨🇦",
    flagSvg: "/flags/ca.svg",
    landmarkName: "Toronto Skyline & Canadian Lakes",
    landmarkImage:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    region: "north-america",
    category: "popular",
    pteScore: "60+ to 65+",
    pteBadge: "PTE Score: 60+",
    shortSummary: "Post-Graduation Work Permit (PGWP) for up to 3 years and clear Express Entry PR pathways.",
    stayBack: "Up to 3 Years (PGWP)",
    workRights: "20 hours / week off-campus",
    avgTuition: "CAD $20,000 – $34,000 / year",
    exams: [
      { name: "PTE Core", score: "CLB 7+ (60+)", preferred: true, note: "Official Pearson test approved by IRCC for Canadian PR & Express Entry" },
      { name: "PTE Academic", score: "60+ (SDS Stream)", preferred: true, note: "Accepted by 100% of Designated Learning Institutions (DLIs)" },
      { name: "IELTS Academic / General", score: "6.5+" },
    ],
    visas: [
      { title: "Study Permit", code: "IRCC SDS / Non-SDS", desc: "Fast expedited processing with PTE Academic scores." },
      { title: "Post-Graduation Work Permit (PGWP)", code: "Open Work", desc: "Work up to 3 years anywhere in Canada with any employer." },
      { title: "Express Entry / PNP PR", code: "Economic Class", desc: "PTE Core CLB 7+ grants top Comprehensive Ranking System (CRS) scores." },
    ],
    topUniversities: [
      "University of Toronto",
      "UBC (British Columbia)",
      "McGill University",
      "University of Waterloo",
      "University of Alberta",
    ],
    keyPerks: [
      "IRCC approved PTE Core for Canadian PR & Citizenship",
      "PTE Academic accepted across all Canadian DLI universities",
      "High healthcare standards and safety index",
      "Direct permanent residency pathways via Provincial Nominees (PNP)",
    ],
    detailedOverview:
      "Canada combines top-tier academic research with one of the world's most immigrant-welcoming policies. With Immigration, Refugees and Citizenship Canada (IRCC) officially accepting PTE Academic for student visas and PTE Core for permanent residency, Pearson test-takers enjoy a fast, reliable, and unbiased gateway to Canadian life.",
  },
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    flagSvg: "/flags/us.svg",
    landmarkName: "New York City & Manhattan",
    landmarkImage:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
    region: "north-america",
    category: "popular",
    pteScore: "53+ to 68+",
    pteBadge: "PTE Score: 53+",
    shortSummary: "World's largest job market, STEM OPT allowing 3 years post-study work, and top Ivy League institutions.",
    stayBack: "1 to 3 Years (STEM OPT Extension)",
    workRights: "20 hours / week on-campus",
    avgTuition: "USD $24,000 – $48,000 / year",
    exams: [
      { name: "PTE Academic", score: "53+ (State) / 68+ (Top Tier)", preferred: true, note: "Accepted by Harvard, Yale, Stanford, Columbia & 1,500+ US universities" },
      { name: "TOEFL iBT", score: "80 – 100+" },
      { name: "IELTS", score: "6.5 – 7.0+" },
    ],
    visas: [
      { title: "F-1 Student Visa", code: "Academic", desc: "Standard visa for degree-seeking international scholars." },
      { title: "STEM OPT Extension", code: "36 Months", desc: "Up to 3 full years of work authorization in STEM fields." },
      { title: "H-1B Specialty Occupation", code: "Dual Intent", desc: "Employer-sponsored pathway leading to US Permanent Residency." },
    ],
    topUniversities: [
      "MIT & Harvard University",
      "Stanford University",
      "UC Berkeley & UCLA",
      "Columbia University",
      "Georgia Institute of Technology",
    ],
    keyPerks: [
      "STEM majors get 3 full years of post-study OPT work",
      "PTE recognized by 1,500+ US universities & Ivy Leagues",
      "Highest graduate starting salaries globally in tech & finance",
      "Abundant research assistantships (RA) and teaching fellowships (TA)",
    ],
    detailedOverview:
      "The United States remains the global powerhouse of technological innovation, venture capital, and elite higher education. Thousands of US institutions—including Harvard Business School and Columbia University—accept PTE Academic as proof of English language proficiency.",
  },
  {
    id: "nz",
    name: "New Zealand",
    flag: "🇳🇿",
    flagSvg: "/flags/nz.svg",
    landmarkName: "Queenstown & Milford Sound",
    landmarkImage:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800&auto=format&fit=crop",
    region: "oceania",
    category: "pacific",
    pteScore: "50+ to 58+",
    pteBadge: "PTE Score: 50+",
    shortSummary: "Safe, scenic nation with post-study work rights up to 3 years and 100% PTE acceptance nationwide.",
    stayBack: "1 to 3 Years Post-Study Work",
    workRights: "20 hours / week during semester",
    avgTuition: "NZD $26,000 – $38,000 / year",
    exams: [
      { name: "PTE Academic", score: "50+ (Diploma) / 58+ (Degree)", preferred: true, note: "Accepted by 100% of New Zealand universities & Immigration New Zealand (INZ)" },
      { name: "IELTS", score: "5.5 – 6.5+" },
    ],
    visas: [
      { title: "Fee Paying Student Visa", code: "INZ", desc: "Standard study visa with full off-campus work rights." },
      { title: "Post-Study Work Visa", code: "Open", desc: "Up to 3 years to work for any employer in NZ." },
      { title: "Skilled Migrant Category", code: "SMC PR", desc: "Direct residency pathway for skilled qualification holders." },
    ],
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
    ],
    keyPerks: [
      "Immigration New Zealand officially endorses PTE Academic",
      "Post-study work visa valid up to 3 full years",
      "Ranked #1 for ease of doing business and personal safety",
      "Spouse gets full open work rights for Master's degree students",
    ],
    detailedOverview:
      "New Zealand offers an enviable balance of world-ranking universities and unparalleled quality of life. Immigration New Zealand accepts PTE Academic across all visa categories, making it a reliable and stress-free pathway for Bangladeshi students seeking education and residency.",
  },
  {
    id: "de",
    name: "Germany",
    flag: "🇩🇪",
    flagSvg: "/flags/de.svg",
    landmarkName: "Neuschwanstein Castle & Berlin",
    landmarkImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    region: "europe",
    category: "europe",
    pteScore: "59+ to 65+",
    pteBadge: "PTE Score: 59+",
    shortSummary: "Zero or low tuition fees at public universities, strong engineering industry, and EU Blue Card.",
    stayBack: "18 Months Job Seeker Visa",
    workRights: "140 full days or 280 half days per year",
    avgTuition: "€0 – €3,000 / year (Semester fee only)",
    exams: [
      { name: "PTE Academic", score: "59+ (B2) / 66+ (C1)", preferred: true, note: "Accepted by top TU9 technical universities & German consulate" },
      { name: "IELTS Academic", score: "6.0 – 6.5+" },
      { name: "TOEFL iBT", score: "80+" },
    ],
    visas: [
      { title: "National Student Visa", code: "Type D", desc: "Entry visa with blocked account proof of living expenses." },
      { title: "Job Seeker Residence Permit", code: "18 Months", desc: "Generous 1.5 year buffer to secure a qualified job." },
      { title: "EU Blue Card", code: "Fast-Track PR", desc: "Permanent residency in just 21–27 months for professionals." },
    ],
    topUniversities: [
      "Technical University of Munich (TUM)",
      "LMU Munich",
      "RWTH Aachen University",
      "Heidelberg University",
      "TU Berlin",
    ],
    keyPerks: [
      "No tuition fees at most public universities",
      "18 months stay-back to find engineering/tech jobs",
      "EU Blue Card grants PR in just 21-27 months",
      "Schengen visa access to travel freely across 27 EU nations",
    ],
    detailedOverview:
      "Germany is Europe's economic powerhouse. With tuition-free public higher education and intense demand for engineers, computer scientists, and healthcare specialists, Germany is one of the highest-ROI study destinations. PTE Academic scores fulfill English-taught program requirements seamlessly.",
  },
  {
    id: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    flagSvg: "/flags/sg.svg",
    landmarkName: "Marina Bay Sands & Supertrees",
    landmarkImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    region: "asia",
    category: "pacific",
    pteScore: "50+ to 65+",
    pteBadge: "PTE Score: 50+",
    shortSummary: "Asia's premier financial and technological capital with top-ranked global institutions NUS and NTU.",
    stayBack: "1 Year Long Term Visit Pass (LTVP)",
    workRights: "16 hours / week during term",
    avgTuition: "SGD $18,000 – $32,000 / year",
    exams: [
      { name: "PTE Academic", score: "50+ (Polytechnic) / 65+ (NUS/NTU)", preferred: true, note: "Recognized by National University of Singapore & private campuses" },
      { name: "IELTS", score: "6.0 – 6.5+" },
    ],
    visas: [
      { title: "Student Pass", code: "ICA Singapore", desc: "Official student authorization sponsored by university." },
      { title: "Employment Pass (EP)", code: "COMPASS", desc: "Point-based professional work pass for graduates." },
      { title: "S Pass", code: "Mid-Level", desc: "Technical and operations employment pass." },
    ],
    topUniversities: [
      "National University of Singapore (NUS)",
      "Nanyang Technological University (NTU)",
      "Singapore Management University (SMU)",
      "SUTD",
    ],
    keyPerks: [
      "NUS & NTU consistently rank in the world top 15",
      "Close proximity to Bangladesh (just 4 hours flight)",
      "Global banking and multinational regional headquarters",
      "Cleanest, safest, and most tax-friendly business climate",
    ],
    detailedOverview:
      "Singapore is the silicon valley and financial crown of Southeast Asia. Studying here offers proximity to home, world-renowned curricula from NUS and NTU, and direct recruitment pathways into global Fortune 500 corporations.",
  },
  {
    id: "ie",
    name: "Ireland",
    flag: "🇮🇪",
    flagSvg: "/flags/ie.svg",
    landmarkName: "Dublin Trinity College & River Liffey",
    landmarkImage:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=800&auto=format&fit=crop",
    region: "europe",
    category: "europe",
    pteScore: "58+ to 63+",
    pteBadge: "PTE Score: 58+",
    shortSummary: "European tech headquarters for Google, Apple, and Meta with 2-year graduate stay-back.",
    stayBack: "2 Years Third Level Graduate Scheme",
    workRights: "20 hours / week term-time, 40 hours holidays",
    avgTuition: "€12,000 – €22,000 / year",
    exams: [
      { name: "PTE Academic", score: "58+ (Undergrad) / 63+ (Postgrad)", preferred: true, note: "Accepted by all Irish universities and Irish Naturalisation and Immigration Service (INIS)" },
      { name: "IELTS", score: "6.0 – 6.5+" },
    ],
    visas: [
      { title: "Study Visa", code: "Stamp 2", desc: "Standard non-EEA student visa with work entitlements." },
      { title: "Graduate Scheme", code: "Stamp 1G", desc: "2 full years post-study work permit for Master's graduates." },
      { title: "Critical Skills Employment Permit", code: "Stamp 1", desc: "Direct route to Irish Stamp 4 permanent residency." },
    ],
    topUniversities: [
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "University of Galway",
      "University College Cork",
    ],
    keyPerks: [
      "Only native English-speaking country remaining in the European Union",
      "2-Year stay back allows immediate entry into Silicon Docks tech giants",
      "Critical Skills permit leads to Irish / EU citizenship in 5 years",
      "PTE Academic officially approved for Irish student visa requirements",
    ],
    detailedOverview:
      "Dubbed the 'Silicon Valley of Europe', Ireland hosts the European headquarters of Google, Meta, Pfizer, and Apple. With a 2-year stay-back visa (Stamp 1G) and an English-speaking populace within the EU, graduates transition smoothly into high-paying multinational careers.",
  },
  {
    id: "ae",
    name: "UAE (Dubai)",
    flag: "🇦🇪",
    flagSvg: "/flags/ae.svg",
    landmarkName: "Burj Khalifa & Downtown Dubai",
    landmarkImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    region: "asia",
    category: "pacific",
    pteScore: "45+ to 55+",
    pteBadge: "PTE Score: 45+",
    shortSummary: "100% tax-free income, branch campuses of top UK/Australian universities, and 10-year Golden Visa.",
    stayBack: "1 to 2 Years Green Visa / Golden Visa",
    workRights: "Flexible student freelance and intern permits",
    avgTuition: "AED 40,000 – 75,000 / year",
    exams: [
      { name: "PTE Academic", score: "45+ to 55+", preferred: true, note: "Accepted by Dubai International Academic City universities" },
      { name: "IELTS", score: "5.5+" },
    ],
    visas: [
      { title: "Student Residence Visa", code: "Renewable", desc: "Sponsored directly by the academic university in UAE." },
      { title: "Green Residence Visa", code: "Self-Sponsored", desc: "5-year visa for skilled professionals and top graduates." },
      { title: "10-Year Golden Visa", code: "Long Term", desc: "Awarded to high-performing university graduates (GPA 3.8+)." },
    ],
    topUniversities: [
      "University of Birmingham Dubai",
      "Heriot-Watt University Dubai",
      "Middlesex University Dubai",
      "Wollongong University in Dubai",
    ],
    keyPerks: [
      "Zero income tax on earnings for life",
      "Earn authentic British or Australian degrees in Dubai",
      "Fast visa approval with minimal processing friction",
      "10-Year Golden Visa for outstanding academic achievers",
    ],
    detailedOverview:
      "Dubai is rapidly becoming an international education powerhouse. Renowned British and Australian universities have opened full branch campuses in Dubai International Academic City, allowing students to earn prestigious foreign degrees in a futuristic, tax-free metropolis.",
  },
  {
    id: "jp",
    name: "Japan",
    flag: "🇯🇵",
    flagSvg: "/flags/jp.svg",
    landmarkName: "Mount Fuji & Tokyo Metropolis",
    landmarkImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    region: "asia",
    category: "pacific",
    pteScore: "42+ to 50+",
    pteBadge: "PTE Score: 42+",
    shortSummary: "MEXT government scholarships, low tuition costs, and immense career demand for bilingual engineers.",
    stayBack: "1 to 2 Years Job Hunting Visa",
    workRights: "28 hours / week (Shikakugai Katsudo)",
    avgTuition: "¥535,800 / year (National universities fixed fee)",
    exams: [
      { name: "PTE Academic", score: "42+ to 50+", preferred: true, note: "Accepted for English-degree programs (Global 30)" },
      { name: "IELTS", score: "5.5+" },
      { name: "JLPT", score: "N4–N3 for career integration" },
    ],
    visas: [
      { title: "College Student Visa", code: "Ryugaku", desc: "Includes 28-hour weekly work permission permit." },
      { title: "Designated Activities Visa", code: "Tokutei Katsudo", desc: "Up to 1 year job-hunting permission post graduation." },
      { title: "Engineer / Specialist Visa", code: "Gijinkoku", desc: "Full renewable work visa leading to permanent residency." },
    ],
    topUniversities: [
      "University of Tokyo",
      "Kyoto University",
      "Tokyo Institute of Technology",
      "Waseda University",
    ],
    keyPerks: [
      "Government MEXT scholarships cover 100% tuition + monthly stipend",
      "Exceptionally low tuition at national public universities",
      "Severe labor shortage means high employment rate for graduates",
      "One of the safest countries with world-renowned cuisine and transit",
    ],
    detailedOverview:
      "Japan is actively welcoming international talent through government initiatives like MEXT. With English-medium undergraduate and graduate programs and unmatched career stability in engineering, IT, and manufacturing, Japan offers an extraordinary global career foundation.",
  },
];

export interface ContinentTab {
  id: DestinationRegion;
  label: string;
  icon: React.ElementType;
}

export const CONTINENT_TABS: ContinentTab[] = [
  { id: "all", label: "All Destinations", icon: Globe2 },
  { id: "europe", label: "Europe", icon: Landmark },
  { id: "north-america", label: "North America", icon: Building2 },
  { id: "oceania", label: "Oceania & Pacific", icon: Compass },
  { id: "asia", label: "Asia & Middle East", icon: MapPin },
];

export function DestinationsSection() {
  const [selectedRegion, setSelectedRegion] =
    useState<DestinationRegion>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeCountry, setActiveCountry] = useState<DestinationCountry | null>(
    null
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsPopoverOpen(false);
      }
    };
    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  // Dynamic continent count calculation (automatically scales as new countries are added in the future)
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { all: DESTINATIONS.length };
    DESTINATIONS.forEach((c) => {
      if (c.region) {
        counts[c.region] = (counts[c.region] || 0) + 1;
      }
    });
    return counts;
  }, []);

  const selectedTab =
    CONTINENT_TABS.find((t) => t.id === selectedRegion) || CONTINENT_TABS[0];
  const SelectedIcon = selectedTab.icon;

  const filteredCountries = useMemo(() => {
    return DESTINATIONS.filter((c) => {
      const matchesRegion =
        selectedRegion === "all" || c.region === selectedRegion;
      if (!matchesRegion) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.topUniversities.some((u) => u.toLowerCase().includes(q)) ||
        c.exams.some((e) => e.name.toLowerCase().includes(q)) ||
        c.shortSummary.toLowerCase().includes(q) ||
        c.landmarkName.toLowerCase().includes(q)
      );
    });
  }, [selectedRegion, searchQuery]);

  const handleOpenDetails = (country: DestinationCountry) => {
    setActiveCountry(country);
    setIsSheetOpen(true);
  };

  return (
    <section
      id="destinations"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-border/40 bg-background"
      aria-label="Study & Immigrate Destinations"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 dark:bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Plane className="w-3.5 h-3.5" />
            <span>Global Study &amp; Immigration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Target Your <span className="text-amber-500 dark:text-amber-400">Dream Destination</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Explore world-class destinations for higher education, PR pathways, and career visas. Choose your continent or search by country, accepted exam, or university:
          </p>
        </div>

        {/* ── Toolbar: Left Popover Continent Selector + Right Search Bar ── */}
        <div className="relative z-30 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-2 sm:p-2.5 rounded-2xl border border-border/70 dark:border-white/10 bg-card/60 dark:bg-card/30 backdrop-blur-md shadow-xs">
          {/* Left Side: Popover Continent Selector */}
          <div className="relative z-40" ref={popoverRef}>
            <button
              type="button"
              onClick={() => setIsPopoverOpen((prev) => !prev)}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2.5 px-4 py-2.5 rounded-xl border border-border/70 dark:border-white/10 bg-background/90 hover:bg-secondary/60 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-2xs cursor-pointer text-foreground"
              aria-expanded={isPopoverOpen}
              aria-haspopup="listbox"
            >
              <div className="inline-flex items-center gap-2">
                <SelectedIcon className="w-4 h-4 text-primary" />
                <span>{selectedTab.label}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {regionCounts[selectedRegion] || 0}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    isPopoverOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>
            </button>

            {/* Popover Floating Menu */}
            {isPopoverOpen && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-72 rounded-2xl border border-border/80 dark:border-white/15 bg-card/95 dark:bg-popover/95 backdrop-blur-xl shadow-2xl z-50 p-1.5 animate-in fade-in-0 zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-border/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>Filter by Continent</span>
                  <span className="text-[10px] font-semibold text-primary">
                    {DESTINATIONS.length} Total
                  </span>
                </div>

                <div className="py-1 space-y-0.5">
                  {CONTINENT_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isSelected = selectedRegion === tab.id;
                    const count = regionCounts[tab.id] || 0;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setSelectedRegion(tab.id);
                          setIsPopoverOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-primary text-white font-semibold shadow-xs"
                            : "text-foreground hover:bg-secondary/70"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon
                            className={`w-4 h-4 ${
                              isSelected ? "text-white" : "text-primary"
                            }`}
                          />
                          <span>{tab.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {count}
                          </span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Quick Search Bar */}
          <div className="relative w-full sm:w-72 md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search country, university, exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border/70 dark:border-white/10 bg-background/90 text-xs sm:text-sm placeholder:text-muted-foreground/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-border/80 bg-card/30 max-w-md mx-auto my-6">
            <Globe2 className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
            <h3 className="text-base font-bold text-foreground">No destinations found</h3>
            <p className="text-xs text-muted-foreground mt-1">
              No country matches &ldquo;{searchQuery}&rdquo; in {selectedRegion === "all" ? "any continent" : selectedRegion}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedRegion("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/70 dark:border-white/10 bg-card/70 dark:bg-card/40 backdrop-blur-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Landmark Photo Header with Flag Overlaid */}
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <img
                    src={country.landmarkImage}
                    alt={country.landmarkName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Flag Badge on Top Left */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                    <img
                      src={country.flagSvg}
                      alt={`${country.name} Flag`}
                      className="w-[32px] h-[20px] rounded object-cover shadow-sm"
                    />
                    <span className="text-[11px] font-bold text-white tracking-wider uppercase">
                      {country.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Landmark Name caption on photo bottom */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-medium text-white/90 truncate flex items-center gap-1">
                      <Compass className="w-3 h-3 text-cyan-400 shrink-0" />
                      {country.landmarkName}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-3.5">
                  {/* Country Name + Region */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                        {country.name}
                      </h3>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Globe2 className="w-3 h-3 text-primary" />
                        Study &amp; Migration
                      </p>
                    </div>

                    {/* PTE Score Pill */}
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-black bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shrink-0">
                      {country.pteBadge}
                    </div>
                  </div>

                  {/* Short Visa Highlights with icons */}
                  <div className="space-y-1.5 pt-1 border-t border-border/40">
                    <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                      <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{country.stayBack}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{country.visas[0]?.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action: "Know More / View Details" */}
              <div className="px-4 sm:px-5 pb-4 pt-1">
                <button
                  onClick={() => handleOpenDetails(country)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold tracking-wide border border-border/80 dark:border-white/15 bg-secondary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <span>Know More Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Slide-out Details Sheet (Modal) ── */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-xl p-0 overflow-y-auto bg-background/98 backdrop-blur-2xl border-l border-border/60"
        >
          {activeCountry && (
            <div className="relative pb-8 flex flex-col justify-between min-h-full">
              <SheetHeader className="sr-only">
                <SheetTitle>{activeCountry.name}</SheetTitle>
                <SheetDescription>{activeCountry.shortSummary}</SheetDescription>
              </SheetHeader>
              <div>
                {/* Sheet Hero Image Banner with Flag Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-muted">
                  <img
                    src={activeCountry.landmarkImage}
                    alt={activeCountry.landmarkName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                  {/* Top Left Flag Badge & Name */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={activeCountry.flagSvg}
                        alt={`${activeCountry.name} Flag`}
                        className="w-[55px] h-[35px] rounded-md object-cover shadow-lg border-2 border-white/80 dark:border-white/20"
                      />
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
                          {activeCountry.name}
                        </h2>
                        <p className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 mt-0.5">
                          <Compass className="w-3.5 h-3.5 text-primary" />
                          {activeCountry.landmarkName}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-lg text-xs font-black bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40">
                      {activeCountry.pteBadge}
                    </div>
                  </div>
                </div>

                {/* Sheet Body Content */}
                <div className="px-6 py-6 space-y-6">
                  {/* Detailed Overview */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-primary" />
                      Destination Overview
                    </h3>
                    <p className="text-sm text-foreground/90 leading-relaxed bg-muted/40 border border-border/50 rounded-xl p-4">
                      {activeCountry.detailedOverview}
                    </p>
                  </div>

                  {/* Key Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 space-y-1">
                      <span className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        Stay-Back Work Permit
                      </span>
                      <p className="text-xs font-bold text-foreground">
                        {activeCountry.stayBack}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 space-y-1">
                      <span className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-emerald-500" />
                        Part-Time Work
                      </span>
                      <p className="text-xs font-bold text-foreground">
                        {activeCountry.workRights}
                      </p>
                    </div>
                  </div>

                  {/* Required Exams Breakdown */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" />
                      English Language Test Requirements
                    </h3>

                    <div className="space-y-2">
                      {activeCountry.exams.map((ex) => (
                        <div
                          key={ex.name}
                          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl border ${
                            ex.preferred
                              ? "bg-primary/10 border-primary/30 text-foreground"
                              : "bg-card/60 border-border/60 text-foreground/90"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold">{ex.name}</span>
                            {ex.preferred && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-primary text-white">
                                Recommended
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-black text-primary dark:text-blue-400">
                            Required: {ex.score}
                          </span>
                          {ex.note && (
                            <p className="text-[11px] text-muted-foreground sm:col-span-2 mt-0.5 sm:mt-0">
                              {ex.note}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visa Pathways Breakdown */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                      Available Visa &amp; Immigration Pathways
                    </h3>

                    <div className="space-y-2.5">
                      {activeCountry.visas.map((v) => (
                        <div
                          key={v.title}
                          className="rounded-xl border border-border/60 bg-muted/30 p-3.5 space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-foreground">
                              {v.title}
                            </h4>
                            {v.code && (
                              <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded bg-muted">
                                {v.code}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {v.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Recognized Universities */}
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-primary" />
                      Top Universities in {activeCountry.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeCountry.topUniversities.map((uni) => (
                        <span
                          key={uni}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-muted/60 border border-border/50 text-foreground"
                        >
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Advantages List */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      Why Study in {activeCountry.name}
                    </h3>
                    <ul className="space-y-1.5">
                      {activeCountry.keyPerks.map((perk, i) => (
                        <li
                          key={i}
                          className="text-xs text-foreground/90 flex items-start gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sheet Bottom Fixed CTA */}
              <div className="px-6 pt-4 border-t border-border/60 bg-background/90 backdrop-blur-md sticky bottom-0 space-y-2">
                <a
                  href={`https://wa.me/8801700000000?text=Hello%20Universal%20Language,%20I%20am%20interested%20in%20studying%20or%20migrating%20to%20${encodeURIComponent(
                    activeCountry.name
                  )}.%20Please%20guide%20me%20on%20PTE%20requirements.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:opacity-95 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Free Consultation for {activeCountry.name}</span>
                </a>

                <p className="text-[10px] text-center text-muted-foreground">
                  Official Pearson PTE Exam Center &amp; Certified Mentorship in Bangladesh
                </p>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
