import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Users2,
  CalendarCheck,
  PhoneCall,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SuccessStoriesSection } from "@/components/modules/home/success-stories-section";
import { TestimonialSliderSection } from "@/components/modules/home/testimonial-slider-section";

export const metadata: Metadata = {
  title: "Success Stories & Verified Reviews | Universal Language",
  description:
    "Explore authentic Pearson PTE Academic scorecards and verified reviews from Bangladeshi students who achieved 79+ and 90/90 on their very first attempt with Universal Language.",
  alternates: {
    canonical: "https://universallanguage.com.bd/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="w-full min-h-screen">
      {/* ── 1. Hero with matching visible light blue background ── */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-100/75 via-blue-50/50 to-background dark:from-blue-950/50 dark:via-slate-950/40 dark:to-background">
        {/* Rich visible ambient blue lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[460px] bg-gradient-to-r from-blue-500/25 via-[#0b3a82]/20 to-indigo-500/25 dark:from-blue-500/30 dark:via-primary/25 dark:to-indigo-500/30 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 left-5 w-[420px] h-[320px] bg-blue-400/20 dark:bg-blue-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 right-5 w-[420px] h-[320px] bg-sky-400/18 dark:bg-indigo-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />

        {/* Blueprint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a820a_1px,transparent_1px),linear-gradient(to_bottom,#0b3a820c_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Trophy className="w-3.5 h-3.5" />
              <span>Proven Hall of Fame</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12]">
              Real Scorecards,{" "}
              <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                Guaranteed Results
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore authentic official score reports and candid feedback from over 650
              professionals, physicians, and students who achieved their target scores on
              the first attempt with Universal Language.
            </p>

            {/* Classy 4-metric trust bar */}
            <div className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-card/60 dark:bg-card/30 border border-border/70 backdrop-blur-md">
                <div className="space-y-0.5 text-center">
                  <div className="text-xl sm:text-2xl font-black text-foreground">98.8%</div>
                  <div className="text-[11px] text-muted-foreground font-medium">First Pass Rate</div>
                </div>
                <div className="space-y-0.5 text-center">
                  <div className="text-xl sm:text-2xl font-black text-foreground">650+</div>
                  <div className="text-[11px] text-muted-foreground font-medium">Verified Scorecards</div>
                </div>
                <div className="space-y-0.5 text-center">
                  <div className="text-xl sm:text-2xl font-black text-foreground">79+ / 90</div>
                  <div className="text-[11px] text-muted-foreground font-medium">PR Cutoff Pathway</div>
                </div>
                <div className="space-y-0.5 text-center">
                  <div className="text-xl sm:text-2xl font-black text-primary">100%</div>
                  <div className="text-[11px] text-muted-foreground font-medium">Pearson Auditable</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Official Student Success Stories with Verified Scorecards ── */}
      <SuccessStoriesSection />

      {/* ── 3. Real Student Reviews & Testimonials Slider ── */}
      <TestimonialSliderSection />

      {/* ── 4. Minimal Classy Verification & Booking Callout ── */}
      <section className="py-16 sm:py-20 border-t border-border/60 bg-gradient-to-b from-card/30 via-background to-background">
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Diagnostic Consultation</span>
              </div>
              <h3 className="text-2xl font-black text-foreground">
                Ready to Be Our Next High-Score Success Story?
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg">
                Book a 15-minute diagnostic scorecard audit with our Pearson-certified mentors.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20saw%20your%20student%20success%20stories%20and%20want%20to%20book%20a%20diagnostic%20scorecard%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-md transition-all cursor-pointer"
              >
                <span>Consult on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
