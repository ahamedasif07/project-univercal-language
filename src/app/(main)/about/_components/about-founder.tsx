"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/common/container";

export function AboutFounder() {
  const whatsappUrl =
    "https://wa.me/8801772224283?text=" +
    encodeURIComponent(
      "Hello Md Sohanor Rahman Shifat Sir, I would like to consult with you regarding Universal Language and PTE preparation programs."
    );

  return (
    <section className="py-16 sm:py-20 border-b border-border/50 bg-gradient-to-b from-card/30 via-background to-card/20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-primary/10 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-blue-600/10 dark:bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean Minimal Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 dark:border-primary/40 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/ceo/ceo-sifat-pp.jpeg"
                    alt="Md Sohanor Rahman Shifat - Founder & CEO of Universal Language"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Refined gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/40 via-40% to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b3a82] text-white font-bold text-xs shadow-lg backdrop-blur-md border border-white/20">
                    <Award className="w-4 h-4 text-blue-300" />
                    <span>Founder &amp; CEO</span>
                  </div>

                  {/* Bottom Name Plate */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
                    <p className="text-[11px] font-bold text-blue-300 uppercase tracking-widest">
                      Universal Language Leadership
                    </p>
                    <h3 className="text-2xl font-black text-white">
                      Md Sohanor Rahman Shifat
                    </h3>
                    <p className="text-xs text-slate-300">
                      Founder &amp; Chief Executive Officer (CEO)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Simple Minimal Content & Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Leadership &amp; Vision</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-foreground tracking-tight leading-[1.15]">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                  Founder &amp; CEO
                </span>
              </h2>
              <p className="text-sm sm:text-base font-semibold text-primary dark:text-blue-300">
                Md Sohanor Rahman Shifat • Universal Language
              </p>
            </div>

            {/* Minimal Narrative Content */}
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground font-semibold">Md Sohanor Rahman Shifat</strong> is the Founder &amp; CEO of{" "}
                <strong className="text-foreground font-semibold">UNIVERSAL LANGUAGE</strong>, an educational initiative focused on connecting students with quality language learning opportunities, PTE preparation resources, and suitable professional instructors.
              </p>
              <p>
                With 3+ years of experience in the PTE education sector and over 600 student leads guided, he pairs deep examination insights and continuous Pearson professional training with a passionate commitment to accessible, student-first learning.
              </p>
            </div>

            {/* Clean Highlight Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                "3+ Years PTE Experience",
                "600+ Student Leads Guided",
                "8 Pearson Accreditations",
                "University of Dhaka",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border border-border/80 text-xs font-semibold text-foreground shadow-2xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/about/ceo"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>View Full Profile &amp; Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-border bg-card/60 dark:bg-card/40 text-foreground hover:bg-muted/80 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

