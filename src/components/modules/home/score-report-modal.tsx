"use client";

import React, { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Headphones,
  BookOpen,
  Mic,
  PenTool,
  Building2,
  GraduationCap,
  Trophy,
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

/**
 * Butter-smooth 60/120fps direct-DOM number counter.
 * Updates DOM node directly without causing React component re-renders.
 */
function SmoothScoreCounter({
  target,
  duration = 1.1,
  delay = 0.1,
}: {
  target: number;
  duration?: number;
  delay?: number;
}) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = countRef.current;
    if (!node) return;

    node.textContent = "0";

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOutExpo
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [target, duration, delay]);

  return <span ref={countRef}>0</span>;
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
        className="max-w-3xl max-h-[90vh] sm:max-h-[88vh] p-0 flex flex-col border border-border/80 shadow-2xl rounded-3xl bg-background overflow-hidden"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>
            Pearson PTE Academic Official Score Report - {student.name}
          </DialogTitle>
          <DialogDescription>
            Verified PTE Academic score report for {student.name} with score {student.overallScore}/90.
          </DialogDescription>
        </DialogHeader>

        {/* ── Top Header Ribbon: Congratulations & Student Info ── */}
        <div className="relative px-5 sm:px-6 py-3.5 bg-gradient-to-r from-[#061e47] via-[#0b3a82] to-[#1d5ec9] text-white flex items-center justify-between gap-3 border-b border-blue-500/20 shrink-0 select-none z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shrink-0">
              <Trophy className="w-4 h-4 text-amber-300" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-200 truncate">
                Congratulations • Verified Result
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white truncate">
                Universal Language Student Achievement
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

        {/* ── Main Scorecard Canvas ── */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 overscroll-contain">
          {/* Top Pearson Document Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs"
          >
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
                Score Report Code:{" "}
                <span className="font-bold text-foreground">
                  {student.testDetails.registrationId}
                </span>
              </div>
            </div>

            {/* Candidate Summary Grid (Clean, Without Image) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Identity & Verification Details */}
              <div className="md:col-span-8 flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-blue-500/10 border border-primary/25 text-primary dark:text-blue-400 flex flex-col items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary dark:text-blue-400" />
                  <span className="text-[8px] font-black uppercase tracking-wider text-primary dark:text-blue-300 mt-0.5">
                    Verified
                  </span>
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-black text-foreground truncate">
                      {student.name}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                      {student.badge}
                    </span>
                  </div>
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
                      <span className="font-semibold text-foreground/80">Destination:</span>{" "}
                      {student.targetCountry} {student.targetCountryFlag}
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Overall Score Block with Smooth Counter Animation */}
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#061e47] via-[#0b3a82] to-[#124b9e] text-white shadow-md text-center border border-blue-400/20"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                  Overall Score
                </span>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white my-0.5 flex items-baseline justify-center">
                  <SmoothScoreCounter target={student.overallScore} duration={1.2} delay={0.15} />
                  <span className="text-lg font-medium text-blue-200/80 ml-1">/90</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300">
                  <CheckCircle2 className="w-3 h-3" />
                  {student.cefrLevel}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── 4 Communicative Skills Cards with GPU-accelerated Radial Rings & Smooth Number Counters ── */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary" />
                Communicative Skills
              </h4>
              <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Target Met: {student.overallScore >= 79 ? "79+ Superior Band" : "Target Score Achieved"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skillItems.map((skill, idx) => {
                const Icon = skill.icon;
                const radius = 38;
                const circumference = 2 * Math.PI * radius; // ~238.76
                const targetOffset =
                  circumference - (skill.score / 90) * circumference;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl border ${skill.bgLight} shadow-2xs hover:shadow-md transition-all duration-200 text-center group`}
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

                    {/* Circular / Radial Progress Ring (Smooth GPU Animated) */}
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

                        {/* Smooth Animated Radial Score Ring */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          stroke={`url(#skill-ring-${skill.name})`}
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset: targetOffset }}
                          transition={{
                            duration: 1.1,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.2 + idx * 0.08,
                          }}
                        />
                      </svg>

                      {/* Center Score Display with Butter-Smooth Counter */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                        <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-none">
                          <SmoothScoreCounter
                            target={skill.score}
                            duration={1.1}
                            delay={0.2 + idx * 0.08}
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
                      <span>{skill.score >= 79 ? "Superior 79+" : "Competent"}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Test Centre & University Target Info ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"
          >
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
          </motion.div>

          {/* ── Student Direct Advice Quote ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-blue-300 mb-1">
              Student Preparation Experience ({student.duration}):
            </div>
            <p className="text-xs text-foreground/90 italic leading-relaxed">
              &ldquo;{student.testimonial}&rdquo;
            </p>
          </motion.div>

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

