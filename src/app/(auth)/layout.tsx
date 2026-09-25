import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AnimatedLogo } from "@/components/common/animated-logo";
import { ShieldCheck, GraduationCap, Globe2 } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "Pearson Certified Trainers" },
  { icon: GraduationCap, text: "96% First-Attempt Pass Rate" },
  { icon: Globe2, text: "12+ Destination Countries" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* ── Left Panel — Brand ── */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] relative flex-col items-center justify-center p-12 bg-gradient-to-br from-[#060e2b] via-[#0b3a82] to-[#1a56b0] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="relative z-10 max-w-sm text-white space-y-10">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 backdrop-blur flex items-center justify-center shadow-xl">
              <AnimatedLogo className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-xl tracking-tight">{siteConfig.name}</span>
          </Link>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl font-black leading-[1.15] text-white">
              Your Gateway to{" "}
              <span className="text-blue-300">Global Universities</span>
            </h2>
            <p className="text-blue-100/80 text-base leading-relaxed">
              Bangladesh's most trusted Pearson-certified language academy. Score high,
              study abroad, and build your future with expert mentors.
            </p>
          </div>

          {/* Trust items */}
          <ul className="space-y-3.5">
            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-blue-100/90 font-medium">
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                  <Icon className="w-4 h-4 text-blue-300" />
                </div>
                {text}
              </li>
            ))}
          </ul>

          {/* Testimonial quote */}
          <div className="rounded-2xl bg-white/8 border border-white/12 p-5 space-y-2.5">
            <p className="text-sm text-blue-100/90 italic leading-relaxed">
              "After 1 month of mentorship at Universal Language, I scored PTE 86 on my
              first attempt. The diagnostic method is genuinely different."
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-white text-xs font-black">
                TC
              </div>
              <div>
                <p className="text-xs font-bold text-white">Tanvir Hasan Chowdhury</p>
                <p className="text-[11px] text-blue-200/70">PTE 86 — Australia PR ✅</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Panel — Form ── */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-border/50">
          <Link href="/" className="inline-flex items-center gap-2 font-black text-lg text-foreground">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0b3a82] to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md">
              UL
            </div>
            {siteConfig.name}
          </Link>
          <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors font-semibold">
            ← Back
          </Link>
        </div>

        {/* Form container */}
        <div className="flex-1 flex items-center justify-center p-5 sm:p-8">
          <div className="w-full max-w-md">
            {children}

            <p className="text-center text-xs text-muted-foreground mt-6">
              <Link href="/" className="hover:text-primary transition-colors font-medium">
                ← Back to main website
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
