"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle } from "lucide-react";
import { Container } from "@/components/common/container";

const FEATURES = [
  "Private 1-on-1 Classes",
  "Group Learning (Small Batch)",
  "AI Practice Portal",
  "Mock Test Audit",
  "24/7 WhatsApp Mentor",
  "Score Booster Drills",
  "Exam Slot Booking",
  "Study Abroad Counselling",
];

const PACKAGES: Array<{
  name: string;
  short: string;
  gradient: string;
  features: Array<boolean | "partial">;
  highlight?: boolean;
}> = [
  {
    name: "Foundation Course",
    short: "Found",
    gradient: "from-blue-600 to-indigo-600",
    features: [true, false, true, true, true, false, "partial", false],
  },
  {
    name: "PTE A-Z Masterclass",
    short: "A-Z",
    gradient: "from-[#0b3a82] via-primary to-blue-600",
    features: [true, false, true, true, true, true, "partial", false],
    highlight: true,
  },
  {
    name: "Crash Booster",
    short: "Crash",
    gradient: "from-rose-600 to-pink-600",
    features: [true, false, "partial", true, true, true, false, false],
  },
  {
    name: "Focused Batch",
    short: "Group",
    gradient: "from-purple-600 to-violet-600",
    features: [false, true, true, true, false, false, "partial", false],
  },
  {
    name: "Official Services",
    short: "Svc",
    gradient: "from-teal-600 to-emerald-600",
    features: [false, false, "partial", false, "partial", false, true, true],
  },
];

function Cell({ val }: { val: boolean | "partial" }) {
  if (val === true) return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
  if (val === "partial") return <HelpCircle className="w-4 h-4 text-amber-500 mx-auto" />;
  return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
}

export function ServicesComparison() {
  return (
    <section className="py-20 sm:py-28 border-t border-border/40 bg-gradient-to-b from-muted/20 to-background">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
            <Check className="w-3.5 h-3.5" />
            <span>Quick Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
            Which Package is{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Right For You?
            </span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Use this table to quickly compare what is included in each package before enrolling.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl overflow-hidden shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left p-4 sm:p-5 text-xs font-bold uppercase tracking-widest text-muted-foreground w-44">
                    Feature
                  </th>
                  {PACKAGES.map((pkg) => (
                    <th key={pkg.name} className="p-4 sm:p-5 text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <span
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white text-[10px] font-black`}
                        >
                          {pkg.short.slice(0, 3)}
                        </span>
                        <span className="text-[11px] font-bold text-foreground/80 leading-tight text-center max-w-20">
                          {pkg.name}
                        </span>
                        {pkg.highlight && (
                          <span className="px-1.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[10px] font-bold">
                            ★ Popular
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feat, fi) => (
                  <tr
                    key={feat}
                    className={`border-b border-border/30 last:border-0 ${fi % 2 === 0 ? "bg-muted/20" : ""}`}
                  >
                    <td className="p-4 text-xs font-semibold text-foreground/80">{feat}</td>
                    {PACKAGES.map((pkg) => (
                      <td key={pkg.name} className="p-4 text-center">
                        <Cell val={pkg.features[fi]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-border/30 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> Included
            </span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" /> Optional / Add-on
            </span>
            <span className="flex items-center gap-1.5">
              <X className="w-3.5 h-3.5 text-muted-foreground/40" /> Not included
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
