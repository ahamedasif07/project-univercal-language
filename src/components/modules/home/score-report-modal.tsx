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
      bgLight:
        "bg-blue-50/70 dark:bg-blue-950/30 border-blue-200/80 dark:border-blue-800/50",
      iconBg: "bg-blue-100/80 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
      gradStart: "#2563eb",
      gradEnd: "#4f46e5",
      ringTrack: "stroke-blue-200/60 dark:stroke-blue-900/40",
    },
    {
      name: "Reading",
      score: student.skills.reading,
      icon: BookOpen,
      color: "from-amber-500 to-yellow-600",
      textColor: "text-amber-600 dark:text-amber-400",
      bgLight:
        "bg-amber-50/70 dark:bg-amber-950/30 border-amber-200/80 dark:border-amber-800/50",
      iconBg: "bg-amber-100/80 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400",
      gradStart: "#f59e0b",
      gradEnd: "#d97706",
      ringTrack: "stroke-amber-200/60 dark:stroke-amber-900/40",
    },
    {
      name: "Speaking",
      score: student.skills.speaking,
      icon: Mic,
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600 dark:text-emerald-400",
      bgLight:
        "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200/80 dark:border-emerald-800/50",
      iconBg: "bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400",
      gradStart: "#10b981",
      gradEnd: "#059669",
      ringTrack: "stroke-emerald-200/60 dark:stroke-emerald-900/40",
    },
    {
      name: "Writing",
      score: student.skills.writing,
      icon: PenTool,
      color: "from-purple-600 to-pink-600",
      textColor: "text-purple-600 dark:text-purple-400",
      bgLight:
        "bg-purple-50/70 dark:bg-purple-950/30 border-purple-200/80 dark:border-purple-800/50",
      iconBg: "bg-purple-100/80 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
      gradStart: "#9333ea",
      gradEnd: "#c026d3",
      ringTrack: "stroke-purple-200/60 dark:stroke-purple-900/40",
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

          {/* ── 4 Communicative Skills Cards with Animated Radial Progress Rings (Round Design) ── */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary" />
                Communicative Skills
              </h4>
              <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Target Met: 79+ Each Band
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skillItems.map((skill, idx) => {
                const Icon = skill.icon;
                const radius = 38;
                const circumference = 2 * Math.PI * radius; // ~238.761
                const targetOffset =
                  circumference - (skill.score / 90) * circumference;

                return (
                  <div
                    key={skill.name}
                    className={`relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-3xl border ${skill.bgLight} shadow-2xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center group`}
                  >
                    {/* Top Row: Skill Name & Icon Badge */}
                    <div className="flex items-center justify-between w-full pb-1.5 border-b border-border/40">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground/90">
                        {skill.name}
                      </span>
                      <div className={`p-1.5 rounded-lg ${skill.iconBg}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Circular / Radial Progress Ring (Round Design) */}
                    <div className="relative flex items-center justify-center my-2 sm:my-2.5">
                      <svg
                        className="w-20 h-20 sm:w-22 sm:h-22 -rotate-90 transform"
                        viewBox="0 0 100 100"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id={`skill-ring-${skill.name}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={skill.gradStart} />
                            <stop offset="100%" stopColor={skill.gradEnd} />
                          </linearGradient>
                        </defs>

                        {/* Background Ring Track */}
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="7"
                          className={skill.ringTrack}
                        />

                        {/* Animated Gradient Score Ring */}
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          stroke={`url(#skill-ring-${skill.name})`}
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          style={{
                            strokeDashoffset: hasAnimated
                              ? targetOffset
                              : circumference,
                            transition:
                              "stroke-dashoffset 1100ms cubic-bezier(0.16, 1, 0.3, 1)",
                            transitionDelay: `${idx * 120}ms`,
                          }}
                        />
                      </svg>

                      {/* Center Score Counter inside Circle */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                        <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-none">
                          <AnimatedScoreCounter
                            target={skill.score}
                            started={hasAnimated}
                            duration={1000 + idx * 100}
                          />
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground/80 mt-0.5">
                          /90
                        </span>
                      </div>
                    </div>

                    {/* Bottom Status Badge */}
                    <div className="w-full pt-1.5 border-t border-border/40 flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>{skill.score >= 79 ? "Superior 79+" : "Passed"}</span>
                    </div>
                  </div>
                );
              })}
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
