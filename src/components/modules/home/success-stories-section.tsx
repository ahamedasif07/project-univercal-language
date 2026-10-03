"use client";

import React, { useState } from "react";
import {
  Trophy,
  ShieldCheck,
  ArrowRight,
  FileText,
  Calendar,
  GraduationCap,
  Sparkles,
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
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/30 border-t border-border/60 overflow-hidden"
      aria-label="Real Students Real Results Real Success"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[350px] bg-primary/8 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-blue-500/8 dark:bg-blue-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Centered Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Pearson Certified Hall of Fame</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Real Scorecards,{" "}
            <span className="bg-gradient-to-r from-[#061e47] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Guaranteed Milestones
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Zero guesswork, zero empty claims. Explore authentic Pearson Academic
            scorecards from ambitious Bangladeshi students who secured their dream PR and
            global university cutoffs on the very first attempt.
          </p>
        </div>

        {/* ── Executive Classy Scorecards Grid (4 Verified Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {STUDENT_SUCCESS_STORIES.map((student) => {
            const skillsList = [
              { label: "Listening", short: "L", score: student.skills.listening, color: "from-blue-600 to-indigo-600" },
              { label: "Reading", short: "R", score: student.skills.reading, color: "from-amber-500 to-orange-500" },
              { label: "Speaking", short: "S", score: student.skills.speaking, color: "from-emerald-500 to-teal-600" },
              { label: "Writing", short: "W", score: student.skills.writing, color: "from-purple-600 to-pink-600" },
            ];

            return (
              <div
                key={student.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-card/75 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05),0_12px_32px_-8px_rgba(11,58,130,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(11,58,130,0.18)] dark:hover:shadow-[0_20px_45px_-10px_rgba(59,130,246,0.18)] hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Luxury Top Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0b3a82] via-primary to-blue-500" />

                {/* Subtle Background Watermark */}
                <div className="absolute top-4 right-4 text-[70px] font-black text-slate-900/[0.02] dark:text-white/[0.03] select-none pointer-events-none leading-none -z-0">
                  PTE
                </div>

                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between relative z-10">
                  <div className="space-y-4">
                    {/* Top Row: Achievement Badge & Destination Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide border shadow-2xs bg-primary/10 text-primary border-primary/25 dark:text-blue-300 min-w-0">
                        <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                        <span className="truncate">{student.badge}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 text-xs font-semibold text-foreground shrink-0">
                        <span className="text-sm leading-none">{student.targetCountryFlag}</span>
                        <span>{student.targetCountry}</span>
                      </span>
                    </div>

                    {/* Candidate Identity & Luxury Score Crest */}
                    <div className="flex items-start justify-between gap-2.5 pt-1">
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 truncate">
                            Pearson Verified
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight truncate">
                          {student.name}
                        </h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 truncate">
                          <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="truncate">{student.targetGoal}</span>
                        </p>
                      </div>

                      {/* Bespoke Luxury Overall Score Crest */}
                      <div className="flex flex-col items-center justify-center w-15 h-16 sm:w-16 sm:h-17 rounded-2xl bg-gradient-to-br from-[#061e47] via-[#0b3a82] to-[#124b9e] text-white shadow-md shadow-blue-950/20 border border-blue-400/25 shrink-0 text-center select-none group-hover:scale-105 transition-transform duration-300">
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-blue-200">
                          OVERALL
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-white leading-none my-0.5 tracking-tight">
                          {student.overallScore}
                        </span>
                        <span className="text-[8px] font-semibold text-cyan-300">
                          / 90 PTS
                        </span>
                      </div>
                    </div>

                    {/* ── Communicative Skills Cockpit Meter ── */}
                    <div className="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/70 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                          Skill Breakdown
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-extrabold truncate">
                          {student.cefrLevel.split(" ")[0]} Competency
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-1.5 text-center">
                        {skillsList.map((skill) => (
                          <div key={skill.label} className="space-y-1">
                            <div className="flex items-center justify-between text-[10px] px-0.5">
                              <span className="font-bold text-muted-foreground">{skill.short}</span>
                              <span className="font-black text-foreground">{skill.score}</span>
                            </div>
                            {/* Thin sleek micro progress bar */}
                            <div className="w-full h-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                                style={{ width: `${Math.min(100, Math.round((skill.score / 90) * 100))}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote with Luxury Left Accent */}
                    <div className="relative pl-3.5 py-1 border-l-2 border-primary/50 text-xs text-muted-foreground italic line-clamp-2 leading-relaxed">
                      &ldquo;{student.testimonial}&rdquo;
                    </div>
                  </div>

                  {/* Card Footer: Metadata & Action CTA */}
                  <div className="pt-3.5 mt-2 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-muted-foreground min-w-0">
                      <Calendar className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span className="font-medium truncate">{student.testDetails.testDate}</span>
                    </div>

                    <button
                      onClick={() => setSelectedStudent(student)}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#061e47] via-[#0b3a82] to-[#124b9e] hover:from-[#0b3a82] hover:to-primary text-white font-bold text-xs shadow-xs hover:shadow-md hover:shadow-primary/25 transition-all duration-200 cursor-pointer active:scale-98 group/btn shrink-0"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Inspect Scorecard</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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


