"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowRight,
  Award,
  CheckCircle2,
  Users2,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { INSTRUCTORS } from "@/data/instructors";

export function AboutFaculty() {
  return (
    <section id="faculty-section" className="py-20 sm:py-28 relative overflow-hidden bg-background">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/5 via-primary/5 to-indigo-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Master Faculty &amp; Mentors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Learn Directly From{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Pearson-Certified
            </span>{" "}
            High Scorers
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Our instructors aren&apos;t theoretical lecturers. Every mentor has achieved elite official
            scorecards and received formal training from Pearson South Asia leadership to guide you
            step-by-step.
          </p>
        </div>

        {/* 3-Column Full-Image Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden border border-border/70 dark:border-slate-800 bg-card shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              {/* Full Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
                />

                {/* Multi-layered dark navy gradient overlay for pristine text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/80 via-45% to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b3a82] text-white font-bold text-xs shadow-lg backdrop-blur-md border border-white/20">
                    <Award className="w-3.5 h-3.5 text-blue-300" />
                    <span>{instructor.scoreHighlight}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 text-blue-200 border border-white/10 text-[11px] font-semibold backdrop-blur-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Certified</span>
                  </div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white flex flex-col justify-end space-y-3">
                  <div>
                    <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                      {instructor.badge}
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-blue-200 transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5 line-clamp-1">
                      {instructor.title}
                    </p>
                  </div>

                  {/* Micro stats strip */}
                  <div className="flex items-center gap-4 pt-1 text-xs text-slate-300 border-t border-white/15">
                    <div className="flex items-center gap-1.5">
                      <Users2 className="w-3.5 h-3.5 text-blue-300" />
                      <span>{instructor.studentsTrained}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{instructor.targetSuccessRate}</span>
                    </div>
                  </div>

                  {/* Action Link to Details Page */}
                  <div className="pt-2">
                    <Link
                      href={`/about/instructors/${instructor.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-lg shadow-blue-900/30 group-hover:shadow-blue-900/50 transition-all duration-300 cursor-pointer"
                    >
                      <span>View Full Profile &amp; Roadmap</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner inside faculty section */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-border/80 bg-gradient-to-r from-card/80 via-muted/30 to-card/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              Want a 1-on-1 Diagnostic Audio &amp; Strategy Audit with our Mentors?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Book a direct 15-minute consultation to review your previous score report and identify exact gaps.
            </p>
          </div>
          <a
            href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20would%20like%20to%20book%20a%201-on-1%20diagnostic%20session%20with%20an%20instructor."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0b3a82] hover:bg-[#082b61] transition-all shadow-md cursor-pointer"
          >
            <span>Book Consultation via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
