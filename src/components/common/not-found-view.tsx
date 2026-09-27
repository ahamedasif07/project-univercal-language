"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  ArrowRight,
  GraduationCap,
  HelpCircle,
  Award,
  Globe2,
  Compass,
} from "lucide-react";
import { Container } from "@/components/common/container";

interface QuickLink {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const QUICK_LINKS: QuickLink[] = [
  {
    title: "PTE Academic Masterclass",
    description: "Pearson-certified curriculum & Alfa PTE scoring portal.",
    href: "/courses",
    icon: Award,
  },
  {
    title: "Certified Faculty & Mentors",
    description: "Explore profiles of our accredited instructors and trainers.",
    href: "/about#faculty-section",
    icon: GraduationCap,
  },
  {
    title: "IELTS & Spoken English",
    description: "Band 7.0+ coaching with dedicated speaking and writing audits.",
    href: "/courses",
    icon: Globe2,
  },
  {
    title: "Admissions & Support",
    description: "Book a diagnostic assessment or get exam voucher assistance.",
    href: "/contact",
    icon: HelpCircle,
  },
];

export function NotFoundView() {
  const whatsappUrl =
    "https://wa.me/8801772224283?text=" +
    encodeURIComponent("Hello Universal Language, I could not find a page on your website. Could you please assist me?");

  return (
    <section className="relative min-h-[82vh] flex items-center justify-center py-20 sm:py-28 overflow-hidden bg-background">
      {/* Subtle, Sophisticated Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-primary/8 dark:bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Very subtle hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-10 sm:space-y-12">
          {/* Minimalist Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/30 text-muted-foreground text-xs font-semibold tracking-wider uppercase"
          >
            <Compass className="w-3.5 h-3.5 text-primary" />
            <span>Error 404 • Coordinate Unavailable</span>
          </motion.div>

          {/* Luxury Minimalist Typographic Centerpiece */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative select-none"
            >
              <div className="text-8xl sm:text-9xl md:text-[10.5rem] font-black tracking-tight leading-none bg-gradient-to-b from-foreground via-foreground/75 to-foreground/25 bg-clip-text text-transparent">
                404
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="space-y-3"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                This destination cannot be located.
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                The page or resource you requested may have been relocated, updated, or does not exist on our portal.
              </p>
            </motion.div>
          </div>

          {/* Refined Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-1"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-border/80 bg-card hover:bg-muted text-foreground transition-all cursor-pointer shadow-2xs"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Explore Programs</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-border/80 bg-card hover:bg-muted text-foreground transition-all cursor-pointer shadow-2xs"
            >
              <span>Contact Admissions</span>
            </Link>
          </motion.div>

          {/* Understated Fast-Track Directory */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="pt-8 border-t border-border/60 text-left"
          >
            <div className="text-center sm:text-left mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Quick Campus Directory
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {QUICK_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-muted/60 text-foreground flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quiet Support Footer Note */}
          <div className="pt-2 text-xs text-muted-foreground">
            <span>
              Need urgent assistance with exam vouchers or registration?{" "}
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Consult Admissions Desk on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
