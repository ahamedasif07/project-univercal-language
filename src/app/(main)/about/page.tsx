import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/modules/about/_components/about-hero";
import { AboutValues } from "@/components/modules/about/_components/about-values";
import { AboutTeam } from "@/components/modules/about/_components/about-team";
import { AboutCta } from "@/components/modules/about/_components/about-cta";

export const metadata: Metadata = {
  title: "About Us | Universal Language",
  description:
    "Meet the Pearson-certified mentors behind Universal Language. Learn our mission, values, and the authentic methods that have guided 150+ students to their dream PTE, German, and IELTS scores.",
  alternates: {
    canonical: "https://universallanguage.com.bd/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <AboutCta />
    </div>
  );
}
