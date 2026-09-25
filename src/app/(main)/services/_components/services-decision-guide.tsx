"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";

const DECISION_TREE = [
  {
    q: "Completely new to PTE or English is weak?",
    a: "PTE Foundation Course",
    slug: "pte-foundation-to-expert",
    accent: "border-l-emerald-500 bg-emerald-500/5",
    pill: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
  },
  {
    q: "Intermediate English & need full PTE A-Z in 3-4 weeks?",
    a: "Complete PTE A-Z Masterclass",
    slug: "complete-pte-a-z-masterclass",
    accent: "border-l-blue-500 bg-blue-500/5",
    pill: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30",
  },
  {
    q: "Exam in 10 days & need a fast score boost?",
    a: "Crash PTE Score Booster",
    slug: "crash-pte-score-booster",
    accent: "border-l-rose-500 bg-rose-500/5",
    pill: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
  },
  {
    q: "Budget is tight, prefer studying with a small peer group?",
    a: "Focused Batch (Group Learning)",
    slug: "focused-batch-small-group",
    accent: "border-l-purple-500 bg-purple-500/5",
    pill: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
  },
  {
    q: "Need to book PTE exam without a credit card?",
    a: "Official PTE Registration",
    slug: "official-pearson-pte-registration",
    accent: "border-l-sky-500 bg-sky-500/5",
    pill: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
  },
  {
    q: "Missed target by 1-2 points & need official rescore?",
    a: "Official PTE Rescore Service",
    slug: "official-pearson-pte-rescore-service",
    accent: "border-l-amber-500 bg-amber-500/5",
    pill: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
  },
  {
    q: "Want AI practice tools at home (Alfa PTE / APEUni)?",
    a: "PTE Practice Portal Subscriptions",
    slug: "pte-ai-practice-portal-subscriptions",
    accent: "border-l-teal-500 bg-teal-500/5",
    pill: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30",
  },
];

export function ServicesDecisionGuide() {
  return (
    <section className="py-20 sm:py-28 border-t border-border/40">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Not Sure Which to Pick?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                Match in 10 Seconds
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Answer one question — we&apos;ll point you to the right package instantly.
            </p>
          </div>

          <div className="space-y-3">
            {DECISION_TREE.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link href={`/courses/${item.slug}`} className="block group focus:outline-none">
                  <div
                    className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl border-l-4 border border-border/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${item.accent}`}
                  >
                    <p className="text-sm font-semibold text-foreground/80 flex-1">
                      <span className="text-muted-foreground font-bold mr-2">→</span>
                      {item.q}
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold ${item.pill}`}>
                        {item.a}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Still not sure? Our mentors will recommend the best option for free.
            </p>
            <a
              href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20need%20help%20choosing%20the%20right%20course%20for%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border border-emerald-500/30 bg-emerald-500/6 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/12 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Ask a Mentor on WhatsApp — Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
