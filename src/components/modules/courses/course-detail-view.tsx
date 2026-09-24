"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Mic,
  MessageSquare,
  Laptop,
  PenTool,
  PhoneCall,
  Zap,
  Headphones,
  ShieldCheck,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  FileText,
  Clock,
  HelpCircle,
  Check,
  GraduationCap,
} from "lucide-react";
import { CoursePackage } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseDetailViewProps {
  course: CoursePackage;
  relatedCourses: CoursePackage[];
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-5.522 0-10 4.477-10 10 0 1.769.459 3.498 1.338 5.023l-1.422 5.195 5.344-1.401c1.465.799 3.117 1.22 4.74 1.22 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function CourseDetailView({ course, relatedCourses }: CourseDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"syllabus" | "overview" | "included" | "suitability">("syllabus");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Mic":
        return <Mic className={className} />;
      case "MessageSquare":
        return <MessageSquare className={className} />;
      case "Laptop":
        return <Laptop className={className} />;
      case "PenTool":
        return <PenTool className={className} />;
      case "PhoneCall":
        return <PhoneCall className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Headphones":
        return <Headphones className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Calendar":
        return <Calendar className={className} />;
      case "FileText":
        return <FileText className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "HelpCircle":
        return <HelpCircle className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  const whatsappLink = `https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20am%20interested%20in%20enrolling%20in%20${encodeURIComponent(
    course.title
  )}%20(${course.currency}%20${course.price.toLocaleString()}).%20Please%20confirm%20admission%20details.`;

  return (
    <div className="w-full bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-900 pb-28">
      {/* ── 1. Top Executive Navigation & Breadcrumb ── */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-500 dark:text-slate-400 overflow-x-auto">
            <Link href="/" className="hover:text-primary transition-colors shrink-0">
              Home
            </Link>
            <span>/</span>
            <Link href="/#courses-and-pricing" className="hover:text-primary transition-colors shrink-0">
              {course.category === "service" ? "Pearson Services" : "PTE Programs"}
            </Link>
            <span>/</span>
            <span className="font-semibold text-primary dark:text-blue-400 truncate max-w-[220px] sm:max-w-xs">
              {course.title}
            </span>
          </nav>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Admissions Active • Pearson Certified Curriculum</span>
          </div>
        </div>
      </div>

      {/* ── 2. Distinctive Split Hero Hub ── */}
      <header className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-blue-50/25 to-slate-50 dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden">
        {/* Soft primary blue glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-primary/8 dark:bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Pedagogical Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-primary dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authorized Pearson Academy</span>
                </span>

                {course.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0b3a82] text-white shadow-xs">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2545] dark:text-white tracking-tight leading-[1.15]">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                {course.heroSubtitle}
              </p>

              {/* Spec Pills Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Format</div>
                  <div className="text-xs sm:text-sm font-bold text-primary dark:text-blue-300 mt-0.5">
                    {course.format}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Classes</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                    {course.classesCount}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                    {course.duration}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">First-Try Pass</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    96.8% Success
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Enroll via WhatsApp Direct</span>
                </a>

                <a
                  href="tel:+8801772224283"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer bg-white/60 dark:bg-slate-800/60"
                >
                  <PhoneCall className="w-4 h-4 text-primary" />
                  <span>Call: 0177 2224 283</span>
                </a>
              </div>
            </div>

            {/* Right Column: Premium Sticky Pricing & Admission Card (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-primary/20 dark:border-primary/40 shadow-lg overflow-hidden">
                {/* Photo Header (Compact & Classy) */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={course.thumbnailImage}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-[#0b2545]/30 to-transparent" />
                  <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-blue-100">Standard Local Fee</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold text-[10px] uppercase">
                      All-Inclusive
                    </span>
                  </div>
                </div>

                {/* Card Content (Tighter padding) */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-baseline justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Course Investment
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-xs font-bold text-primary">
                          {course.priceNote ? `${course.priceNote} ` : ""}
                          {course.currency}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-[#0b2545] dark:text-white tracking-tight">
                          {course.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {course.originalPrice && (
                      <div className="text-right">
                        <span className="text-xs text-slate-400 line-through block">
                          {course.currency} {course.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                          Save {course.currency} {(course.originalPrice - course.price).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Pricing Options for Portal if applicable */}
                  {course.pricingOptions && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Select Platform Access:
                      </div>
                      {course.pricingOptions.map((opt, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-850 flex items-center justify-between text-xs"
                        >
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{opt.name}</div>
                            <div className="text-[11px] text-slate-500">{opt.duration} Access</div>
                          </div>
                          <span className="font-bold text-primary">
                            {opt.currency} {opt.price.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Value Highlights */}
                  <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Dedicated 1-on-1 Certified Pearson Trainer</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>VIP 30-Day APEUni / Alfa AI Scoring Portal</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Speaking Audio Review &amp; Accent Neutralization</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Pay in BDT via bKash / Nagad / Bank Transfer</span>
                    </div>
                  </div>

                  {/* Primary WhatsApp Booking Action */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Confirm Admission on WhatsApp</span>
                  </a>

                  <p className="text-[11px] text-center text-slate-400">
                    Instant slot confirmation • 100% verified Pearson materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 3. Executive Tab Navigation Bar ── */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-28 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap text-xs sm:text-sm font-semibold scrollbar-none py-1">
            <button
              onClick={() => setActiveTab("syllabus")}
              className={cn(
                "py-3 border-b-2 transition-all cursor-pointer",
                activeTab === "syllabus"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Class Curriculum &amp; Modules
            </button>
            <button
              onClick={() => setActiveTab("overview")}
              className={cn(
                "py-3 border-b-2 transition-all cursor-pointer",
                activeTab === "overview"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Pedagogical Framework
            </button>
            <button
              onClick={() => setActiveTab("included")}
              className={cn(
                "py-3 border-b-2 transition-all cursor-pointer",
                activeTab === "included"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Included Bonuses &amp; AI Tools
            </button>
            <button
              onClick={() => setActiveTab("suitability")}
              className={cn(
                "py-3 border-b-2 transition-all cursor-pointer",
                activeTab === "suitability"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Eligibility &amp; Target Profile
            </button>
          </div>
        </div>
      </div>

      {/* ── 4. Main Body Content Based on Navigation ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Tab 1: Class Curriculum & Modules (Modular Interactive Roadmap) */}
        {activeTab === "syllabus" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Structured Class-by-Class Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Complete Curriculum &amp; Skill Milestones
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every session is structured around Pearson AI machine-scoring algorithms to guarantee tangible score jumps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Module Phase 1 Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-primary dark:bg-blue-950 dark:text-blue-300 border border-blue-200/70">
                    {course.learningJourney.phase1.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Foundation Milestone</span>
                </div>

                <h3 className="text-xl font-bold text-[#0b2545] dark:text-white">
                  {course.learningJourney.phase1.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.learningJourney.phase1.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Learning Competencies:
                  </div>
                  <ul className="space-y-2">
                    {course.learningJourney.phase1.topics.map((topic, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Module Phase 2 Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0b2545] to-[#0c1f3d] text-white border border-blue-900 shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                    {course.learningJourney.phase2.badge}
                  </span>
                  <span className="text-xs font-semibold text-blue-200">Exam Ready Milestone</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {course.learningJourney.phase2.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {course.learningJourney.phase2.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-blue-800/60">
                  <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    Scoring Algorithms &amp; Strategies:
                  </div>
                  <ul className="space-y-2">
                    {course.learningJourney.phase2.topics.map((topic, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-blue-100 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 2: Pedagogical Framework (Overview) */}
        {activeTab === "overview" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Pedagogical Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                {course.overview.heading}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {course.overview.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {course.overview.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xs hover:border-primary/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-primary dark:text-blue-300 flex items-center justify-center border border-blue-100 dark:border-blue-900">
                    {renderIcon(feat.iconName, "w-5 h-5")}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 3: Included Bonuses & AI Tools */}
        {activeTab === "included" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Value Stack Inclusions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Software Tools, Resources &amp; Mentorship Support
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {course.whatIsIncluded.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 text-primary dark:text-blue-300 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    {renderIcon(item.iconName, "w-5 h-5")}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 4: Eligibility & Target Profile */}
        {activeTab === "suitability" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Candidate Assessment
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Who Thrives in This Program?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {course.whoIsThisFor.subtitle}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {course.whoIsThisFor.checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-750 flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-primary dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Lead Instructor Profile Card (Clean Modern Blue) ── */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Certified Pearson Master Instructor</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b2545] dark:text-white">
              Taught by Trainers with Verified 90/90 Scorecards
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              You are mentored by senior educators with over 7+ years of experience specializing exclusively in Pearson AI scoring algorithms and fast-track score jumps.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Consult Lead Instructor</span>
            </a>
          </div>
        </section>

        {/* ── 6. Frequently Asked Questions (FAQ) ── */}
        <section className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Clear answers regarding class scheduling, materials, and exam booking
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {course.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0b2545] dark:text-white">
                      {faq.question}
                    </span>
                    <div className="shrink-0 p-1.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400">
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 7. Related Pathways ── */}
        <section className="pt-8 border-t border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-[#0b2545] dark:text-white">
              Explore Alternative Programs
            </h3>
            <Link
              href="/#courses-and-pricing"
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              <span>View All 7 Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedCourses.map((rel) => (
              <Link
                key={rel.id}
                href={`/courses/${rel.slug}`}
                className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary/60 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                      {rel.category === "service" ? "Pearson Service" : "PTE Course"}
                    </span>
                    <span className="font-bold text-primary">
                      {rel.currency} {rel.price.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0b2545] dark:text-white group-hover:text-primary transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>

                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary flex items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>View Full Guideline</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
