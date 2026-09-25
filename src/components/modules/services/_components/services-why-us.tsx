"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, BookOpen, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/container";

const WHY_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Pearson Authorized Partner",
    desc: "Official exam booking, rescoring, and Alfa PTE VIP access — all in one place.",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Users,
    title: "1-on-1 Private Attention",
    desc: "Every course is designed around your exact score gaps — not a generic syllabus.",
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Zap,
    title: "Fast, Proven Results",
    desc: "96% of students hit their target score on their first attempt after mentorship.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Pay Without Credit Card",
    desc: "bKash, Nagad, or bank transfer — no international card hassles, ever.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export function ServicesWhyUs() {
  return (
    <section className="py-14 sm:py-20 border-y border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.48, delay: i * 0.09 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${item.bg}`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
