import React from "react";
import type { Metadata } from "next";
import { AccreditationsSection } from "@/components/modules/home/accreditations-section";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Partners & Institutional Accreditations | Universal Language",
  description:
    "Universal Language is an authorized Pearson Education Academy, Alfa PTE Institutional Assessment Partner, and NSDA Government Registered Training Center in Dhaka, Bangladesh.",
  alternates: {
    canonical: "https://universallanguage.com.bd/partners",
  },
};

export default function PartnersPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-blue-900/10 via-background to-background border-b border-border/40 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Authorized &amp; Statutorily Accredited</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Our Official{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Partners &amp; Accreditations
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Universal Language maintains verified institutional partnerships with global examination
            bodies and statutory government registries to provide 100% authentic test materials,
            voucher booking, and diagnostic AI score calibration.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Pearson Authorized Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Alfa PTE Institutional Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Prime Minister's Office NSDA Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations and Live Verification Cards */}
      <AccreditationsSection />
    </div>
  );
}
