"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Award,
  Headphones,
  BookOpen,
  Mic,
  PenTool,
  Building2,
  GraduationCap,
  Trophy,
  BarChart3,
  QrCode,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { StudentSuccessStory } from "@/data/success-stories";

function AnimatedScoreCounter({
  target,
  started,
  duration = 1100,
}: {
  target: number;
  started: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease-out curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started, target, duration]);

  return <span>{count}</span>;
}

interface ScoreReportModalProps {
  student: StudentSuccessStory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ScoreReportModal({
  student,
  isOpen,
  onClose,
}: ScoreReportModalProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small timeout so modal enters before animation starts
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setHasAnimated(false);
    }
  }, [isOpen]);

  if (!student) return null;

  const skillItems = [
    {
      name: "Listening",
      score: student.skills.listening,
      icon: Headphones,
      color: "from-blue-600 to-indigo-600",
      textColor: "text-blue-600 dark:text-blue-400",
      bgLight: "bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800/60",
    },
    {
      name: "Reading",
      score: student.skills.reading,
      icon: BookOpen,
      color: "from-amber-500 to-yellow-600",
      textColor: "text-amber-600 dark:text-amber-400",
      bgLight: "bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800/60",
    },
    {
      name: "Speaking",
      score: student.skills.speaking,
      icon: Mic,
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600 dark:text-emerald-400",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/60",
    },
    {
      name: "Writing",
      score: student.skills.writing,
      icon: PenTool,
      color: "from-purple-600 to-pink-600",
      textColor: "text-purple-600 dark:text-purple-400",
      bgLight: "bg-purple-50 dark:bg-purple-950/60 border-purple-200/80 dark:border-purple-800/60",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        hideCloseButton
        className="max-w-3xl max-h-[90vh] sm:max-h-[88vh] p-0 flex flex-col border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-3xl bg-slate-50 dark:bg-slate-950 overflow-hidden"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>
            Pearson PTE Academic Official Score Report - {student.name}
          </DialogTitle>
          <DialogDescription>
            Verified PTE Academic score report for {student.name} with score {student.overallScore}/90.
          </DialogDescription>
        </DialogHeader>

        {/* ── Top Header Ribbon: Congratulations & Student Info (Fixed at top) ── */}
        <div className="relative px-5 sm:px-6 py-3.5 bg-gradient-to-r from-[#061e47] via-[#0b3a82] to-[#1d5ec9] text-white flex items-center justify-between gap-3 border-b border-blue-500/20 shrink-0 select-none z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shrink-0">
              <Trophy className="w-4 h-4 text-amber-300" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-200 truncate">
                Congratulations • Proud Moment
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white truncate">
                Student of Universal Language
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pearson Verified</span>
            </div>

            <DialogClose className="rounded-full h-8 w-8 flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer focus:outline-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </div>

        {/* ── Main Scorecard Canvas (Scrollable for full viewing on all screens) ── */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 overscroll-contain">
          {/* Top Pearson Document Bar */}
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-4 border-b border-border/60 gap-2">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black tracking-tight text-lg text-primary">
                  P <span className="font-sans font-bold text-foreground">Pearson</span>
                </span>
                <span className="text-muted-foreground/60">|</span>
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  PTE Academic Score Report
                </span>
              </div>
              <div className="text-[11px] font-mono text-muted-foreground">
                Score Report Code: <span className="font-bold text-foreground">{student.testDetails.registrationId}</span>
              </div>
            </div>

            {/* Candidate Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Photo & Identity Details */}
              <div className="md:col-span-8 flex items-center gap-4">
                <div className="relative w-18 h-22 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-primary/30 shrink-0 shadow-sm bg-muted">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-primary/90 text-[9px] text-white font-bold text-center py-0.5 uppercase tracking-wider">
                    Candidate
                  </div>
                </div>

                <div className="space-y-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-foreground truncate">
                    {student.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground/80">Test Taker ID:</span>{" "}
                      {student.testDetails.testTakerId}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground/80">Test Date:</span>{" "}
                      {student.testDetails.testDate}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground/80">Country:</span>{" "}
                      {student.testDetails.countryOfResidence}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground/80">Target Goal:</span>{" "}
                      {student.targetCountry} {student.targetCountryFlag}
                    </div>
                  </div>
                </div>
              </div>

              {/* Huge Overall Score Block (Blue Pearson Brand) with Count-Up Animation */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#0b2545] via-[#0b3a82] to-[#124285] text-white shadow-md text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                  Overall Score
                </span>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white my-0.5">
                  <AnimatedScoreCounter
                    target={student.overallScore}
                    started={hasAnimated}
                    duration={1200}
                  />
                  <span className="text-lg font-medium text-blue-200/80">/90</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300">
                  <CheckCircle2 className="w-3 h-3" />
                  {student.cefrLevel}
                </span>
              </div>
            </div>
          </div>

          {/* ── 4 Communicative Skills Cards with Animated Count-Up & Growing Progress Bars ── */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary" />
                Communicative Skills
              </h4>
              <span className="text-[11px] text-muted-foreground font-medium">
                Target Met: 79+ Each Band
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skillItems.map((skill, idx) => {
                const Icon = skill.icon;
                const percentage = Math.round((skill.score / 90) * 100);

                return (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-2xl border ${skill.bgLight} space-y-2.5 shadow-2xs transition-all hover:scale-[1.02]`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wide text-foreground/90">
                        {skill.name}
                      </span>
                      <Icon className={`w-4 h-4 ${skill.textColor}`} />
                    </div>

                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl sm:text-3xl font-black text-foreground">
                        <AnimatedScoreCounter
                          target={skill.score}
                          started={hasAnimated}
                          duration={1000 + idx * 100}
                        />
                      </span>
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        /90
                      </span>
                    </div>

                    {/* Animated Progress Bar (Starts at 0% and grows to target) */}
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: hasAnimated ? `${percentage}%` : "0%",
                          transitionDelay: `${idx * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Skills Breakdown Comparative Horizontal Bar Chart (Matches Reference Flyer) ── */}
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-primary" />
                Skills Breakdown Comparison
              </h4>
              <span className="text-[10px] font-semibold text-muted-foreground">
                Scale: 10 – 90
              </span>
            </div>

            <div className="space-y-2.5 pt-1">
              {skillItems.map((skill, idx) => {
                const percentage = Math.round((skill.score / 90) * 100);
                return (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-foreground/90 w-20">
                        {skill.name}
                      </span>
                      <div className="flex-1 mx-3 h-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-border/50 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: hasAnimated ? `${percentage}%` : "0%",
                            transitionDelay: `${idx * 150 + 150}ms`,
                          }}
                        />
                      </div>
                      <span className="font-bold text-foreground w-8 text-right font-mono">
                        <AnimatedScoreCounter
                          target={skill.score}
                          started={hasAnimated}
                          duration={1000 + idx * 100}
                        />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scale Axis Markers (10, 30, 50, 79 Target, 90) */}
            <div className="flex justify-between text-[9px] font-mono text-muted-foreground/80 px-24 pt-1 border-t border-border/40">
              <span>10</span>
              <span>30</span>
              <span>50</span>
              <span className="font-bold text-primary">79 (Target)</span>
              <span>90</span>
            </div>
          </div>

          {/* ── Test Centre & University Target Info ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl border border-border/80 bg-card space-y-1">
              <div className="font-bold text-foreground flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                Authorized Test Centre
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {student.testDetails.testCentre}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl border border-border/80 bg-card space-y-1">
              <div className="font-bold text-foreground flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                University &amp; Visa Destination
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {student.targetGoal}
              </p>
            </div>
          </div>

          {/* ── Student Direct Advice Quote ── */}
          <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50">
            <div className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-blue-300 mb-1">
              Student Preparation Experience ({student.duration}):
            </div>
            <p className="text-xs text-foreground/90 italic leading-relaxed">
              &ldquo;{student.testimonial}&rdquo;
            </p>
          </div>

          {/* ── Modal Footer Close ── */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-border/80 bg-card hover:bg-secondary text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              Close Scorecard
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
