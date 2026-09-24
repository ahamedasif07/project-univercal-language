"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedLogo } from "./animated-logo";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-5.522 0-10 4.477-10 10 0 1.769.459 3.498 1.338 5.023l-1.422 5.195 5.344-1.401c1.465.799 3.117 1.22 4.74 1.22 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/70 bg-gradient-to-b from-card/60 via-background to-muted/20 text-foreground overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[250px] bg-primary/5 dark:bg-primary/8 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-blue-500/5 dark:bg-blue-500/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* ── Top Institutional Trust Strip ── */}
      <div className="border-b border-border/60 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-foreground/90 font-bold">
              <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Prime Minister&apos;s Office (NSDA) Registered</span>
            </span>
            <span className="hidden sm:inline-block text-border">•</span>
            <span className="inline-flex items-center gap-1.5 text-foreground/90 font-bold">
              <GraduationCap className="w-4 h-4 text-primary dark:text-blue-400" />
              <span>Pearson Certified Master Trainers</span>
            </span>
            <span className="hidden md:inline-block text-border">•</span>
            <span className="inline-flex items-center gap-1.5 text-foreground/90 font-bold">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Authorized Pearson Exam Voucher Partner</span>
            </span>
          </div>

          <a
            href="https://wa.me/8801831251910?text=Hello%20Universal%20Language,%20I%20would%20like%20to%20consult%20with%20your%20certified%20mentors."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-bold transition-colors"
          >
            <span>Talk to Certified Mentor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── Main Multi-Column Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Official Brand & Registration */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2 pr-0 sm:pr-4">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-[1.02] focus:outline-none"
              aria-label="Universal Language Home"
            >
              {/* Responsive SVG Logo with dark/light mode integration */}
              <div className="h-10 sm:h-12 w-auto max-w-[240px] text-foreground">
                <AnimatedLogo className="h-full w-full" />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
              Bangladesh&apos;s trusted international education hub. Government registered under the Prime
              Minister&apos;s Office (NSDA), authorized Pearson test voucher booking partner, and
              home to Pearson-certified master trainers.
            </p>

            {/* Official Registration Pills */}
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-card border border-border/80 shadow-2xs font-mono text-[11px] text-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>NSDA REG: NSDA/PMO/REG-2023-09418</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on Facebook"
                className="w-8 h-8 rounded-lg bg-card border border-border/80 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all flex items-center justify-center cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on YouTube"
                className="w-8 h-8 rounded-lg bg-card border border-border/80 hover:border-red-500 hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-all flex items-center justify-center cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on LinkedIn"
                className="w-8 h-8 rounded-lg bg-card border border-border/80 hover:border-blue-600 hover:bg-blue-600/10 text-muted-foreground hover:text-blue-600 transition-all flex items-center justify-center cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801831251910"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on WhatsApp"
                className="w-8 h-8 rounded-lg bg-card border border-border/80 hover:border-[#25D366] hover:bg-[#25D366]/10 text-muted-foreground hover:text-[#25D366] transition-all flex items-center justify-center cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Preparation Courses */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              PTE &amp; Language Courses
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/courses/one-on-one-private-coaching"
                  className="hover:text-primary transition-colors inline-block"
                >
                  1-on-1 VIP Mentorship (79+)
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/crash-pte-score-booster"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Crash PTE Score Booster (10 Days)
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/focused-batch-small-group"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Small Group Executive Batch
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-primary transition-colors inline-block"
                >
                  German Language (A1–B2)
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Japanese Language Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Authorized Services */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Official Services
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/courses/official-pearson-pte-registration"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Official Pearson Exam Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/pte-ai-practice-portal-subscriptions"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Alfa PTE VIP Portal Access
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/official-pearson-pte-rescore-service"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Pearson Official QA Rescore
                </Link>
              </li>
              <li>
                <Link
                  href="/#destinations"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Study Abroad Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/#accreditations"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Legal Accreditations Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Dhanmondi Campus & Contact */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Dhanmondi Campus
            </h4>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Dhanmondi Campus, Dhaka 1209, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+8801831251910" className="hover:text-foreground font-semibold">
                  +880 1831-251910
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@universallanguage.com.bd" className="hover:text-foreground">
                  info@universallanguage.com.bd
                </a>
              </div>
              <div className="flex items-start gap-2 pt-0.5">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Sat – Thu: 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Sub-Footer Bar ── */}
        <div className="mt-12 pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">
            © {currentYear} {siteConfig.name} Academy. All rights reserved. Recognized by Prime Minister&apos;s Office (NSDA).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <Link href="/#accreditations" className="hover:text-primary transition-colors">
              Legal Accreditations
            </Link>
            <Link href="/#faq" className="hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
