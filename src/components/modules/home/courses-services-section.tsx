"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  GraduationCap,
  Clock,
  BookOpen,
} from "lucide-react";
import { COURSES_AND_SERVICES, CoursePackage } from "@/data/courses";
import { cn } from "@/lib/utils";

type ActiveTab = "all" | "course" | "service";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-5.522 0-10 4.477-10 10 0 1.769.459 3.498 1.338 5.023l-1.422 5.195 5.344-1.401c1.465.799 3.117 1.22 4.74 1.22 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function CoursesServicesSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return COURSES_AND_SERVICES;
    return COURSES_AND_SERVICES.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="courses-and-pricing"
      className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/80 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
    >
      {/* Primary Blue brand ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-72 bg-gradient-to-r from-blue-600/10 via-primary/10 to-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 dark:bg-blue-950/50 dark:border-blue-800/50 text-primary dark:text-blue-300 text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Official Pearson Authorized Academy &amp; Booking Partner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2545] dark:text-white tracking-tight">
            Choose The Right{" "}
            <span className="font-serif italic font-medium text-primary dark:text-blue-400">
              Pricing
            </span>{" "}
            &amp; Package For You
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Price applicable to Bangladesh-based/Local Students. For International Student pricing,
            please contact us.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                activeTab === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              All Packages (7)
            </button>
            <button
              onClick={() => setActiveTab("course")}
              className={cn(
                "relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5",
                activeTab === "course"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <GraduationCap className="w-4 h-4" />
              PTE Preparation Courses (4)
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={cn(
                "relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5",
                activeTab === "service"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <ShieldCheck className="w-4 h-4" />
              Official Pearson Services (3)
            </button>
          </div>
        </div>

        {/* Responsive Editorial Cards Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            >
              {filteredItems.map((item) => (
                <HumanizedCourseCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Trust & Instant Counseling Bar (Primary Blue & Navy) */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0b2545] via-[#0b3a82] to-[#124285] text-white p-7 sm:p-10 shadow-xl border border-blue-800/40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-200 tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                Pearson Certified Excellence in Bangladesh
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Not sure which course matches your current English score?
              </h3>
              <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
                Take our 10-minute diagnostic speaking evaluation with a certified Pearson trainer
                and receive an exact score prediction &amp; custom study plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/8801831251910?text=Hello%20Universal%20Language,%20I%20want%20a%20free%20PTE%20level%20assessment%20and%20course%20guideline."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Free Assessment on WhatsApp</span>
              </a>

              <a
                href="tel:+8801831251910"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-300" />
                <span>+880 1831-251910</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HumanizedCourseCard({ item }: { item: CoursePackage }) {
  const isMostPopular = item.badge === "Most Popular";
  const isOfficialService = item.category === "service";

  const whatsappLink = `https://wa.me/8801831251910?text=Hello%20Universal%20Language,%20I%20am%20interested%20in%20${encodeURIComponent(
    item.title
  )}%20(${item.currency}%20${item.price.toLocaleString()}).%20Please%20provide%20guidance.`;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900 shadow-2xs hover:shadow-xl hover:-translate-y-1",
        isMostPopular
          ? "border-primary/80 dark:border-blue-500 ring-1 ring-primary/20 shadow-primary/5"
          : "border-slate-200/80 dark:border-slate-800 hover:border-primary/50 dark:hover:border-blue-500/50"
      )}
    >
      <div>
        {/* Compact Photo Header (Height reduced to h-36 sm:h-40 for sleek minimal look) */}
        <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={item.thumbnailImage}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {/* Subtle Dark Gradient Vignette for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-[#0b2545]/40 to-black/25" />

          {/* Top Badges (Compact) */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-2xs">
              {item.format}
            </span>

            {item.badge && (
              <span
                className={cn(
                  "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-2xs text-white",
                  item.badge === "Most Popular"
                    ? "bg-primary font-black shadow-primary/30"
                    : item.badge === "Best For Beginners"
                    ? "bg-[#0b3a82]"
                    : item.badge === "Fastest Improvement"
                    ? "bg-blue-600"
                    : item.badge === "Group Learning"
                    ? "bg-indigo-600"
                    : "bg-[#0b2545]"
                )}
              >
                {item.badge}
              </span>
            )}
          </div>

          {/* Course Name Overlay on Photo bottom */}
          <div className="absolute bottom-2.5 left-3 right-3 text-white">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight drop-shadow-sm truncate">
              {item.title}
            </h3>
            <p className="text-[11px] text-blue-100/90 truncate mt-0.5">
              {item.tagline}
            </p>
          </div>
        </div>

        {/* Card Body (Tighter padding & spacing) */}
        <div className="p-4 space-y-3">
          {/* Deliverables / Specifications (Compact inline chips) */}
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-750 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-primary shrink-0" />
              <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                {item.duration}
              </span>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-750 flex items-center gap-1.5">
              <BookOpen className="w-3 h-3 text-primary shrink-0" />
              <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                {item.classesCount}
              </span>
            </div>
          </div>

          {/* Narrative Summary (Clean 2 lines) */}
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            {item.shortDescription}
          </p>

          {/* Key Checklist Highlights (Minimal 2 items) */}
          <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800">
            {item.overview.features.slice(0, 2).map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                <span className="truncate">{feat.title}</span>
              </div>
            ))}
          </div>

          {/* Practice Portal Tiers Preview (Compact) */}
          {item.pricingOptions && (
            <div className="space-y-0.5 bg-blue-50/50 dark:bg-blue-950/20 p-2 rounded-lg border border-blue-200/50 dark:border-blue-800/40 text-[10px] text-blue-900 dark:text-blue-300 font-semibold">
              <div className="flex justify-between">
                <span>Alfa PTE (1 Mo)</span>
                <span className="font-bold text-primary">Tk. 1,200</span>
              </div>
              <div className="flex justify-between">
                <span>APEUni VIP (1 Mo)</span>
                <span className="font-bold text-primary">Tk. 2,000</span>
              </div>
              <div className="flex justify-between">
                <span>Official Pearson (1 Wk)</span>
                <span className="font-bold text-primary">Tk. 4,150</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Pricing and Dual Action Buttons */}
      <div className="p-4 pt-0 space-y-2.5 border-t border-slate-100 dark:border-slate-800/80">
        {/* Pricing Display */}
        <div className="flex items-baseline justify-between pt-2">
          <div>
            {item.originalPrice && (
              <span className="text-[10px] text-slate-400 line-through mr-1.5">
                {item.currency} {item.originalPrice.toLocaleString()}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-[11px] font-bold text-primary">
                {item.priceNote ? `${item.priceNote} ` : ""}
                {item.currency}
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#0b2545] dark:text-white tracking-tight">
                {item.price.toLocaleString()}
              </span>
            </div>
          </div>

          <span className="text-[10px] font-semibold text-primary dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/60">
            {isOfficialService ? "Official" : "All-Inclusive"}
          </span>
        </div>

        {/* Buttons (Compact & Sleek) */}
        <div className="flex items-center gap-2">
          {/* Primary View Guideline */}
          <Link
            href={`/courses/${item.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs tracking-wide transition-all duration-200 shadow-xs hover:shadow-md active:scale-98 group/btn cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          {/* Quick WhatsApp Link with Real WhatsApp Icon */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="p-2 rounded-full border border-emerald-500/30 bg-emerald-50/50 hover:bg-[#25D366] text-[#25D366] hover:text-white dark:bg-emerald-950/30 dark:hover:bg-[#25D366] dark:hover:text-white transition-all cursor-pointer shrink-0 shadow-2xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
