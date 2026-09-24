"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <footer className="relative border-t border-slate-200/80 dark:border-white/[0.07] bg-slate-50/60 dark:bg-slate-950/70 text-slate-700 dark:text-slate-300 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[450px] h-[180px] bg-primary/4 dark:bg-primary/6 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* ── Main Minimal Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1: Brand & Realistic About */}
          <div className="space-y-3.5 pr-0 sm:pr-2">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-[1.02] focus:outline-none"
              aria-label="Universal Language Home"
            >
              <AnimatedLogo className="h-10 sm:h-11 w-auto text-[#0b3a82] dark:text-white transition-colors duration-300" />
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Universal Language provides dedicated live PTE preparation, foreign language
              courses, and official exam slot booking assistance for students and professionals.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on Facebook"
                className="w-7.5 h-7.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-primary text-slate-500 hover:text-primary transition-all flex items-center justify-center cursor-pointer"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on YouTube"
                className="w-7.5 h-7.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-red-500 text-slate-500 hover:text-red-500 transition-all flex items-center justify-center cursor-pointer"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on LinkedIn"
                className="w-7.5 h-7.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-blue-600 text-slate-500 hover:text-blue-600 transition-all flex items-center justify-center cursor-pointer"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/8801772224283"
                target="_blank"
                rel="noreferrer"
                aria-label="Universal Language on WhatsApp"
                className="w-7.5 h-7.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#25D366] text-slate-500 hover:text-[#25D366] transition-all flex items-center justify-center cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Courses
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  PTE Academic Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  1-on-1 &amp; Crash Batches
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  German Language (A1–B1)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  Japanese Language
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  Spoken English Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Student Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  PTE Exam Slot Booking
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors inline-block">
                  Alfa PTE Practice Portal
                </Link>
              </li>
              <li>
                <Link href="/#destinations" className="hover:text-primary transition-colors inline-block">
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link href="/#accreditations" className="hover:text-primary transition-colors inline-block">
                  Accreditations &amp; Certificates
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-primary transition-colors inline-block">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Contact &amp; Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh • Online Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <a href="tel:+8801772224283" className="hover:text-slate-900 dark:hover:text-slate-100 font-medium">
                  0177 2224 283
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <a href="mailto:pte@uls.digital" className="hover:text-slate-900 dark:hover:text-slate-100">
                  pte@uls.digital
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Sat – Thu: 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Sub-Footer Bar ── */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/#accreditations" className="hover:text-primary transition-colors">
              Accreditations
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
