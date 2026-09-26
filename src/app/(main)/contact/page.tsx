import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "./_components/contact-hero";
import { ContactSection } from "./_components/contact-section";

export const metadata: Metadata = {
  title: "Contact Us | Universal Language",
  description:
    "Get in touch with Universal Language's certified PTE, IELTS, and German language mentors in Dhaka, Bangladesh. WhatsApp (+880 1772-224283), email (info@universallanguage.com.bd), or submit your diagnostic inquiry.",
  alternates: {
    canonical: "https://universallanguage.com.bd/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <ContactHero />
      <ContactSection />
    </div>
  );
}
