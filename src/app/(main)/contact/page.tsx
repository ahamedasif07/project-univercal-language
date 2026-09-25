import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/modules/contact/_components/contact-hero";
import { ContactMain } from "@/components/modules/contact/_components/contact-main";

export const metadata: Metadata = {
  title: "Contact Us | Universal Language",
  description:
    "Get in touch with Universal Language's certified PTE, IELTS, and German language mentors in Dhaka, Bangladesh. WhatsApp, email, or send us a message — we reply within 24 hours.",
  alternates: {
    canonical: "https://universallanguage.com.bd/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <ContactHero />
      <ContactMain />
    </div>
  );
}
