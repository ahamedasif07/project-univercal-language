"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/common/container";

const TEAM = [
  {
    name: "Mehedi Hasan",
    role: "Lead PTE Mentor & Academic Director",
    cert: "Pearson South Asia Certified Trainer",
    avatar: "MH",
    gradient: "from-blue-600 to-indigo-600",
    bio: "Trained directly by Pearson South Asia's academic lead. Mehedi has personally guided 100+ students to their first-attempt PTE scores ranging from 65 to 90.",
  },
  {
    name: "Fatema Begum",
    role: "German Language Specialist",
    cert: "Goethe-Institut Certified Instructor",
    avatar: "FB",
    gradient: "from-emerald-500 to-teal-600",
    bio: "Certified by the Goethe-Institut, Fatema leads all German A1–B2 programs and has prepared over 40 students for winter semester admissions across Germany and Austria.",
  },
  {
    name: "Raiyan Kabir",
    role: "IELTS & Study Abroad Counsellor",
    cert: "British Council Trained",
    avatar: "RK",
    gradient: "from-purple-500 to-violet-600",
    bio: "With direct British Council training, Raiyan specialises in IELTS Academic writing band 7+ pathways and end-to-end university application support.",
  },
];

export function AboutTeam() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet the Mentors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            The People Behind{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our mentors are certified practitioners — not just teachers. Every coach has
            gone through the same exams and institutional certification they train you for.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative bg gradient spot */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none`} />

              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-black text-xl shadow-lg mb-5`}>
                {member.avatar}
              </div>

              {/* Name & role */}
              <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-muted-foreground mb-3">{member.role}</p>

              {/* Cert badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/8 border border-primary/20 text-primary dark:text-blue-300 text-[11px] font-bold mb-4">
                <BadgeCheck className="w-3 h-3" />
                {member.cert}
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
