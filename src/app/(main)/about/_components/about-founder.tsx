"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Quote,
} from "lucide-react";
import { Container } from "@/components/common/container";

export function AboutFounder() {
  const whatsappUrl =
    "https://wa.me/8801772224283?text=" +
    encodeURIComponent(
      "Hello Showkat Chowdhury Sir, I would like to consult with you regarding PTE coaching and study abroad opportunities."
    );

  return (
    <section className="py-16 sm:py-24 border-b border-border/50 bg-gradient-to-b from-card/40 via-background to-card/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-primary/10 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-blue-600/10 dark:bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a8208_1px,transparent_1px),linear-gradient(to_bottom,#0b3a8208_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: CEO / Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 dark:border-primary/40 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/instructors/showkat.jpg"
                    alt="Showkat Chowdhury - Founder & CEO of Universal Language and CRACK PTE"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/50 via-40% to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b3a82] text-white font-bold text-xs shadow-lg backdrop-blur-md border border-white/20">
                    <Award className="w-4 h-4 text-blue-300" />
                    <span>PTE 90/90 Scorer</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/80 text-[11px] font-bold uppercase tracking-wider text-white">
                      <span>Founder &amp; Chief Executive Officer</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      Showkat Chowdhury
                    </h3>
                    <p className="text-xs text-blue-200">
                      Master of Education • Pearson South Asia Certified
                    </p>
                  </div>
                </div>
              </div>

              {/* Under-Image Micro Highlight Strip */}
              <div className="mt-4 p-4 rounded-2xl bg-card/80 border border-primary/20 backdrop-blur-md shadow-md flex items-center justify-between text-xs font-semibold text-foreground">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>NSDA Registered</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>650+ Mentored</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>98.8% First Pass</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder & CEO Message */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Leadership Vision &amp; Message</span>
            </div>

            {/* Section Headline with Home-Page Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-foreground tracking-tight leading-[1.15]">
              A Letter from Our{" "}
              <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                Founder &amp; CEO
              </span>
            </h2>

            {/* CEO Quote Card */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-primary/5 dark:bg-primary/10 border-l-4 border-primary space-y-3">
              <Quote className="w-8 h-8 text-primary/40 -mb-2" />
              <p className="text-base sm:text-lg font-semibold text-foreground/90 italic leading-relaxed">
                &ldquo;Our vision has always been straightforward: to liberate students from guesswork
                and risky internet templates by delivering authentic, Pearson-calibrated language mastery
                that guarantees target score breakthroughs.&rdquo;
              </p>
              <div className="text-xs font-bold text-primary dark:text-blue-400 tracking-wide uppercase">
                — Showkat Chowdhury, Founder &amp; CEO
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                When we established <strong className="text-foreground font-semibold">Universal Language</strong> and{" "}
                <strong className="text-foreground font-semibold">CRACK PTE</strong>, we witnessed countless talented
                Bangladeshi professionals and university applicants getting stuck in repeating cycles, losing
                time and exam fees due to outdated coaching methods.
              </p>
              <p>
                We built this academy with statutory accreditation under the{" "}
                <span className="text-foreground font-medium">Prime Minister&apos;s Office — National Skills Development Authority (NSDA)</span>{" "}
                and trained directly under Pearson South Asia leadership. Every curriculum, AI mock diagnostic,
                and speaking lab at Universal Language is reverse-engineered from Pearson&apos;s real acoustic and
                lexical rubrics.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Direct Pearson South Asia Training Standards",
                "Official NSDA Statutory Registration",
                "Authentic Acoustic & Speech Waveform Labs",
                "Transparent, Result-Guaranteed Mentorship",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Founder on WhatsApp</span>
              </a>

              <Link
                href="/about/instructors/showkat-chowdhury"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-border bg-card/60 dark:bg-card/40 text-foreground hover:bg-muted/80 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <span>View Full Academic Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
