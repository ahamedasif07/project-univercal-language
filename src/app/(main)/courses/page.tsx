import React from "react";
import type { Metadata } from "next";
import { CoursesServicesSection } from "@/components/modules/home/courses-services-section";
import { GraduationCap, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "All Courses & Official Services | Universal Language",
  description:
    "Explore PTE Academic, IELTS, and Duolingo English Test (DET) courses at Universal Language Bangladesh. 1-on-1 private mentoring, crash score boosters, group batches, and official Pearson exam booking.",
  alternates: {
    canonical: "https://universallanguage.com.bd/courses",
  },
};

export default function CoursesPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#072c67]/10 via-background to-background border-b border-border/40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-60 bg-gradient-to-r from-blue-600/15 via-primary/15 to-indigo-600/15 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Score Guaranteed Mentorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12]">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Preparation Programs
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Choose from our specialized programs for <strong>PTE Academic</strong>,{" "}
            <strong>IELTS (Academic &amp; General)</strong>, and{" "}
            <strong>Duolingo English Test (DET)</strong>. Trained by certified examiners with 1-on-1
            private attention and proprietary high-scoring templates.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Computer Scoring Calibrated</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Official Pearson &amp; Cambridge Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>94.6% First-Attempt Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Real Filterable Courses & Services Section */}
      <CoursesServicesSection />

      {/* Advisory & Instant Contact Footer Banner */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Still Wondering Which Exam Fits Your Target Country?
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Australia, Canada, UK, USA, and Europe each have specific university and immigration
            rules. Talk to our senior academic counselor for a free country &amp; exam evaluation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20want%20guidance%20on%20choosing%20between%20PTE,%20IELTS,%20and%20Duolingo."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Chat with Course Counselor</span>
            </a>

            <a
              href="tel:+8801772224283"
              className="px-6 py-3.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-sm transition-all border border-border/60 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>Call Helpline: 0177 2224 283</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
