"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Heart, Rocket } from "lucide-react";
import { Container } from "@/components/common/container";

const VALUES = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We measure our success by your scorecard, not by the number of students enrolled. Every coaching decision is reverse-engineered from what moves your score.",
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-blue-500/10 border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Authentic Methods",
    description:
      "No leaked templates or risky recycled answers. We teach Pearson's authentic pedagogical framework — the same techniques that Pearson South Asia certified our trainers to deliver.",
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-blue-500/10 border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description:
      "We keep batch sizes small intentionally. Every student gets direct WhatsApp access to mentors, individual feedback, and a weekly diagnostic instead of a one-size-fits-all curriculum.",
    gradient: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10 border-rose-500/20",
    text: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Rocket,
    title: "End-to-End Support",
    description:
      "From diagnostic mock test → personalised study plan → exam booking without an international card → post-score university SOP support — we stay with you through every step.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function AboutValues() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-muted/20 to-background border-y border-border/40">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5" />
            <span>What Drives Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Our Core{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The principles that shape every class, every session, and every result we celebrate together.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="group relative rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className={`inline-flex p-3 rounded-xl border mb-5 ${val.bg}`}>
                  <Icon className={`w-5 h-5 ${val.text}`} />
                </div>

                <h3 className="text-base font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>

                {/* Accent bar */}
                <div className="mt-5 h-0.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${val.gradient} w-0 group-hover:w-full transition-all duration-700 ease-out`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
