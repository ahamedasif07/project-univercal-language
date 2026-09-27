"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Home,
  BookOpen,
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Award,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/common/container";

interface QuickRoute {
  title: string;
  category: string;
  description: string;
  href: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
}

const QUICK_ROUTES: QuickRoute[] = [
  {
    title: "PTE Academic 79+ Masterclass",
    category: "Pearson Certified",
    description: "Algorithmic strategies, acoustic modulation & Alfa PTE AI scoring portal access.",
    href: "/courses",
    icon: Award,
    badge: "Most Popular",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    title: "Faculty & Master Mentors",
    category: "Academic Directorate",
    description: "Meet certified Pearson Level 2 trainers, IELTS mentors, and language faculty.",
    href: "/about#faculty-section",
    icon: GraduationCap,
    badge: "Certified Team",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    title: "IELTS & Spoken Fluency",
    category: "English Communication",
    description: "Band 7.0+ score roadmaps, 1-on-1 writing diagnostics & active language club sessions.",
    href: "/courses",
    icon: Globe2,
    badge: "Interactive Batches",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    title: "Admissions & Voucher Desk",
    category: "Student Support",
    description: "Book free diagnostic level testing, score gap audits, or instant Pearson exam vouchers.",
    href: "/contact",
    icon: ShieldCheck,
    badge: "Official Helpdesk",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
];

export function NotFoundView() {
  const whatsappUrl =
    "https://wa.me/8801772224283?text=" +
    encodeURIComponent("Hello Universal Language, I was looking for a page on your website and couldn't find it. Can you help me?");

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/40">
      {/* Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-emerald-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12">
          {/* Top Compass Chip */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/5 dark:bg-primary/10 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest shadow-2xs backdrop-blur-md"
          >
            <Compass className="w-4 h-4 animate-[spin_8s_linear_infinite] text-primary" />
            <span>Route Calibration • Error 404</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </motion.div>

          {/* Central 404 Visual Composition */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Floating Thematic Chips */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex absolute -left-4 sm:left-4 top-1/4 -translate-y-1/2 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-card/90 dark:bg-slate-900/90 border border-border/80 shadow-lg backdrop-blur-md text-xs font-bold text-foreground rotate-[-6deg]"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">Pearson Standard</div>
                <div className="text-foreground">PTE 90 Target</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="hidden md:flex absolute -right-4 sm:right-4 top-1/4 -translate-y-1/2 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-card/90 dark:bg-slate-900/90 border border-border/80 shadow-lg backdrop-blur-md text-xs font-bold text-foreground rotate-[6deg]"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">CEFR Mastery</div>
                <div className="text-foreground">IELTS Band 7.5+</div>
              </div>
            </motion.div>

            {/* Glowing Big 404 Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative select-none"
            >
              <div className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter leading-none bg-gradient-to-r from-[#0b3a82] via-primary to-blue-500 dark:from-blue-400 dark:via-primary dark:to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                404
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-500/20 blur-3xl -z-10 rounded-full" />
            </motion.div>

            {/* Sub-headline & Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 max-w-2xl mx-auto px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                Lost in{" "}
                <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                  Translation?
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                The page, lesson resource, or coordinate you were looking for doesn&apos;t exist or has migrated to a new location on our campus map.
              </p>
            </motion.div>
          </div>

          {/* Core Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-lg shadow-blue-900/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-border/90 bg-card hover:bg-muted text-foreground transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Browse Certified Courses</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Admissions WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick Nav Destination Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-6 sm:pt-10 text-left border-t border-border/60"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Popular Campus Destinations
                </h3>
                <p className="text-xs text-muted-foreground">
                  Quick routes to our most frequented academic programs
                </p>
              </div>
              <span className="text-xs font-bold text-primary hidden sm:inline-flex items-center gap-1">
                Fast-Track Navigation <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {QUICK_ROUTES.map((route) => {
                const Icon = route.icon;
                return (
                  <Link
                    key={route.title}
                    href={route.href}
                    className="group p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${route.badgeColor}`}
                        >
                          {route.badge}
                        </span>
                      </div>

                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {route.category}
                        </div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mt-0.5">
                          {route.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1 line-clamp-2">
                          {route.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform">
                      <span>Navigate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Urgent Support / Emergency Hotline Footer Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-4 rounded-2xl bg-muted/40 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span>
                Need urgent assistance with Pearson exam vouchers or admissions? Hotline:{" "}
                <a
                  href="tel:+8801772224283"
                  className="font-bold text-foreground hover:text-primary transition-colors underline decoration-dotted"
                >
                  +880 1772-224283
                </a>
              </span>
            </div>

            <Link
              href="/contact"
              className="font-bold text-primary hover:text-blue-600 transition-colors shrink-0"
            >
              Contact Support Office &rarr;
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
