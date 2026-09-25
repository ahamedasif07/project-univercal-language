"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  Star,
  Zap,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  Laptop,
  PhoneCall,
} from "lucide-react";
import { COURSES_AND_SERVICES, CoursePackage } from "@/data/courses";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

// ─── Badge config ───────────────────────────────────────────────────────────
const BADGE_STYLES: Record<string, { label: string; cls: string; dot: string }> = {
  popular: {
    label: "Most Popular",
    cls: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    dot: "bg-amber-500",
  },
  beginner: {
    label: "Best For Beginners",
    cls: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-500",
  },
  booster: {
    label: "Score Booster",
    cls: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
    dot: "bg-rose-500",
  },
  group: {
    label: "Group Learning",
    cls: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
    dot: "bg-purple-500",
  },
  official: {
    label: "Official Partner",
    cls: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30",
    dot: "bg-blue-500",
  },
};

// ─── Card accent gradients by index ─────────────────────────────────────────
const CARD_ACCENTS = [
  "from-[#0b3a82] via-primary to-blue-600",
  "from-indigo-600 via-violet-600 to-purple-600",
  "from-rose-600 via-pink-600 to-red-500",
  "from-purple-600 via-fuchsia-600 to-violet-600",
  "from-blue-600 via-sky-600 to-cyan-600",
  "from-teal-600 via-emerald-600 to-green-600",
  "from-amber-500 via-orange-500 to-yellow-500",
];

// ─── Feature icon mapping ────────────────────────────────────────────────────
function FeatureIcon({ name }: { name: string }) {
  const map: Record<string, React.ElementType> = {
    BookOpen,
    Users,
    Mic: PhoneCall,
    MessageSquare: PhoneCall,
    Laptop,
    Zap,
    ShieldCheck,
    Award: Star,
    FileText: BookOpen,
    Clock,
    GraduationCap,
    CheckCircle2,
    PhoneCall,
  };
  const Icon = map[name] ?? CheckCircle2;
  return <Icon className="w-3.5 h-3.5" />;
}

// ─── Single Course / Service Card ───────────────────────────────────────────
function ServiceCard({ item, index }: { item: CoursePackage; index: number }) {
  const badgeCfg = item.badgeType ? BADGE_STYLES[item.badgeType] : null;
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
  const isPopular = item.badgeType === "popular";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col rounded-3xl border bg-card/60 dark:bg-card/40 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400",
        isPopular
          ? "border-amber-500/40 shadow-amber-500/10 shadow-lg"
          : "border-border/60"
      )}
    >
      {/* Popular ring glow */}
      {isPopular && (
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Top gradient accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />

      {/* Thumbnail strip */}
      <div
        className="h-36 sm:h-40 w-full bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${item.thumbnailImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

        {/* Badge */}
        {badgeCfg && (
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${badgeCfg.cls}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${badgeCfg.dot}`} />
              {badgeCfg.label}
            </span>
          </div>
        )}

        {/* Category pill */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-0.5 rounded-full bg-foreground/10 backdrop-blur border border-white/15 text-[10px] font-bold uppercase text-white/80 tracking-widest">
            {item.category === "course" ? "Course" : "Service"}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Title + tagline */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-black text-foreground leading-snug group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-xs font-semibold text-muted-foreground leading-relaxed">
            {item.tagline}
          </p>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          {item.format && (
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span>{item.format}</span>
            </div>
          )}
          {item.classesCount && (
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>{item.classesCount}</span>
            </div>
          )}
          {item.duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>{item.duration}</span>
            </div>
          )}
        </div>

        {/* Top 3 overview features */}
        <ul className="space-y-1.5">
          {item.overview.features.slice(0, 3).map((feat) => (
            <li key={feat.title} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
              <span>
                <span className="font-semibold text-foreground/80">{feat.title}</span>
                {" — "}
                {feat.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price row */}
        <div className="pt-3 border-t border-border/40">
          <div className="flex items-end justify-between gap-2 mb-4">
            <div>
              {item.priceNote && (
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">
                  {item.priceNote}
                </p>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-foreground">
                  {item.currency} {item.price.toLocaleString()}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {item.currency} {item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {item.originalPrice && (
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  Save {item.currency} {(item.originalPrice - item.price).toLocaleString()}
                </p>
              )}
            </div>

            {item.originalPrice && (
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">
                  <Zap className="w-2.5 h-2.5" />
                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                </span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link href={`/courses/${item.slug}`} className="block group/btn focus:outline-none">
            <button
              className={cn(
                "w-full relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer",
                `bg-gradient-to-r ${accent}`
              )}
            >
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span className="relative z-10">View Details & Enroll</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Tab button ──────────────────────────────────────────────────────────────
function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
        active
          ? "bg-primary text-white shadow-sm"
          : "text-foreground/60 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

// ─── Section label ───────────────────────────────────────────────────────────
function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <div className="flex-1 h-px bg-border/40" />
    </div>
  );
}

// ─── Main exported section ───────────────────────────────────────────────────
export function ServicesCatalog() {
  const [tab, setTab] = useState<"all" | "course" | "service">("all");

  const courses = COURSES_AND_SERVICES.filter((i) => i.category === "course");
  const services = COURSES_AND_SERVICES.filter((i) => i.category === "service");
  const all = COURSES_AND_SERVICES;

  const visibleCourses = tab === "all" || tab === "course" ? courses : [];
  const visibleServices = tab === "all" || tab === "service" ? services : [];

  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Pearson Authorized Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Choose the Right Package{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Price applicable to Bangladesh-based students. Contact us for international rates.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/60 border border-border/60 gap-1">
            <TabBtn active={tab === "all"} onClick={() => setTab("all")}>
              All Packages ({all.length})
            </TabBtn>
            <TabBtn active={tab === "course"} onClick={() => setTab("course")}>
              📚 Courses ({courses.length})
            </TabBtn>
            <TabBtn active={tab === "service"} onClick={() => setTab("service")}>
              🛠️ Services ({services.length})
            </TabBtn>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Courses section */}
            {visibleCourses.length > 0 && (
              <div className="mb-14">
                {tab === "all" && (
                  <SectionLabel icon={GraduationCap} label="PTE & Language Courses" />
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {visibleCourses.map((item, i) => (
                    <ServiceCard
                      key={item.id}
                      item={item}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Services section */}
            {visibleServices.length > 0 && (
              <div>
                {tab === "all" && (
                  <SectionLabel icon={ShieldCheck} label="Official Pearson Services" />
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleServices.map((item, i) => (
                    <ServiceCard
                      key={item.id}
                      item={item}
                      index={courses.length + i}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
