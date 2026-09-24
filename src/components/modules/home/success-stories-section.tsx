"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { STUDENT_SUCCESS_STORIES, StudentSuccessStory } from "@/data/success-stories";
import { ScoreReportModal } from "./score-report-modal";

export function SuccessStoriesSection() {
  const [selectedStudent, setSelectedStudent] = useState<StudentSuccessStory | null>(
    null
  );

  return (
    <section
      id="success-stories"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-muted/15 to-background border-t border-border/60 overflow-hidden"
      aria-label="Real Students Real Results Real Success"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[350px] bg-primary/8 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-blue-500/8 dark:bg-blue-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Centered Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>Pearson Certified Hall of Fame</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Real Scorecards,{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Guaranteed 79+ Milestones
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Zero guesswork, zero empty claims. Explore authentic Pearson Academic
            scorecards from ambitious Bangladeshi students who secured their dream PR and
            global university cutoffs on the very first attempt.
          </p>
        </div>

        {/* ── Student Results Cards Grid (1 col mobile, 2 tablet, 3 desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {STUDENT_SUCCESS_STORIES.map((student) => (
            <div
              key={student.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/95 dark:bg-card/50 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(11,58,130,0.20)] dark:hover:shadow-[0_20px_45px_-12px_rgba(59,130,246,0.15)] hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Top Banner Ribbon */}
              <div className="relative p-5 pb-4 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 border-b border-border/60">
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Category / Achievement Tag */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-2xs ${student.badgeColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-85" />
                    {student.badge}
                  </span>

                  {/* Destination Country Pill */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-background border border-border/70 text-xs font-semibold text-foreground">
                    <span>{student.targetCountryFlag}</span>
                    <span>{student.targetCountry}</span>
                  </span>
                </div>

                {/* Candidate Info with Headshot & Massive Score Box */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative w-14 h-16 sm:w-16 sm:h-18 rounded-2xl overflow-hidden border-2 border-primary/30 shrink-0 shadow-sm bg-muted">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>

                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>Verified Student</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-foreground truncate">
                        {student.name}
                      </h3>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {student.duration}
                      </p>
                    </div>
                  </div>

                  {/* Big Overall Score Block */}
                  <div className="flex flex-col items-center justify-center px-3.5 py-2 rounded-2xl bg-gradient-to-br from-[#0b2545] via-[#0b3a82] to-[#124285] text-white shadow-md shrink-0 text-center">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200">
                      Overall
                    </span>
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-none my-0.5">
                      {student.overallScore}
                    </span>
                    <span className="text-[9px] text-cyan-300 font-semibold">
                      out of 90
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5">
                  {/* Target Goal / University Box */}
                  <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-border/60">
                    <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Target Destination &amp; Program
                      </div>
                      <div className="text-xs font-semibold text-foreground truncate">
                        {student.targetGoal}
                      </div>
                    </div>
                  </div>

                  {/* Test Info Row */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-background/60 border border-border/50">
                      <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{student.testDetails.testDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-background/60 border border-border/50">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{student.testDetails.testType}</span>
                    </div>
                  </div>

                  {/* Student Testimonial Quote */}
                  <div className="relative pt-1">
                    <p className="text-xs text-muted-foreground italic line-clamp-3 leading-relaxed">
                      &ldquo;{student.testimonial}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Action: View Official Score Report Button */}
                <div className="pt-3 border-t border-border/60">
                  <button
                    onClick={() => setSelectedStudent(student)}
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white dark:text-blue-300 dark:hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:bg-primary group-hover:text-white active:scale-[0.98]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Inspect Verified Score Report</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interactive Digital Pearson Score Report Modal ── */}
      <ScoreReportModal
        student={selectedStudent}
        isOpen={Boolean(selectedStudent)}
        onClose={() => setSelectedStudent(null)}
      />
    </section>
  );
}
