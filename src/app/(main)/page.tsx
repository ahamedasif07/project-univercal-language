import React from "react";
import { HeroSection } from "@/components/modules/home/hero-section";
import { StatsSection } from "@/components/modules/home/stats-section";
import { CoursesServicesSection } from "@/components/modules/home/courses-services-section";
import { CoursePromoSection } from "@/components/modules/home/promo-slider";
import { DestinationsSection } from "@/components/modules/home/destinations-section";
import { StepsSection } from "@/components/modules/home/steps-section";
import { AccreditationsSection } from "@/components/modules/home/accreditations-section";
import { SuccessStoriesSection } from "@/components/modules/home/success-stories-section";
import { TestimonialSliderSection } from "@/components/modules/home/testimonial-slider-section";
import { FaqSection } from "@/components/modules/home/faq-section";

export const metadata = {
  title: "Universal Language | Premier PTE Academic, German & Language Academy",
  description:
    "Bangladesh's trusted language academy. Pearson-certified PTE master trainers, Alfa PTE AI testing portal, German & Japanese courses, and instant exam voucher booking.",
  alternates: {
    canonical: "https://universallanguage.com.bd",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://universallanguage.com.bd/#organization",
      name: "Universal Language",
      url: "https://universallanguage.com.bd",
      logo: "https://universallanguage.com.bd/icon.svg",
      description:
        "Premier Pearson PTE Academic, German & foreign language coaching in Dhaka, Bangladesh. Official Pearson exam voucher booking and Alfa PTE AI practice portal.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      telephone: "+8801772224283",
      sameAs: ["https://facebook.com", "https://youtube.com", "https://linkedin.com"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "340",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://universallanguage.com.bd/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Universal Language officially registered with the Government?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. Universal Language is officially registered under the Prime Minister's Office — National Skills Development Authority (NSDA). This statutory registration certifies that our training infrastructure, curriculum standards, and learning hours are officially recognized by Bangladesh national skills frameworks.",
          },
        },
        {
          "@type": "Question",
          name: "How is your mentorship different from other coaching centres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our lead mentors are trained and certified directly by Pearson's South Asia Academic Lead. Unlike institutions that rely on leaked internet templates which Pearson's 2024 AI algorithm actively penalizes, we teach Pearson's authentic pedagogical scaffolding, speech acoustic fluency correction, and rubric-based summarization techniques.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book my Pearson PTE exam without an international credit card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Universal Language is an authorized Pearson PTE Academic test voucher and booking partner. You can reserve your preferred exam slot and test center in Dhaka without any credit card endorsement, foreign currency markups, or payment failure risks using local bKash, Nagad, or direct bank transfer.",
          },
        },
        {
          "@type": "Question",
          name: "What is your Alfa PTE AI partnership, and how does it help students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As an official Alfa PTE Institutional Partner, every enrolled student receives VIP access to Pearson-calibrated artificial intelligence scoring software. This provides real-time acoustic feedback on oral fluency, pronunciation pitch, and high-frequency real exam questions.",
          },
        },
        {
          "@type": "Question",
          name: "My English foundation is weak (below 50). Can I realistically achieve 65+ or 79+?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Over 96% of our students achieve their target score on their first attempt after our mentorship. We begin with a 10-minute diagnostic evaluation to identify your exact score leaks, followed by a customized 3 to 6-week daily drill schedule.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Schema.org Structured JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. Hook & Primary Value Proposition */}
      <HeroSection />

      {/* 2. Immediate Social Proof & Numbers */}
      <StatsSection />

      {/* 3. Core Offerings: Courses & Services (Immediately answer: What can I study here?) */}
      <CoursePromoSection />
      {/* 4. Special Admissions, Discounts & Featured Vouchers */}

      <CoursesServicesSection />

      {/* 5. Aspiration & Destination Goals (Where can I go? Australia, UK, Canada, Germany...) */}
      <DestinationsSection />

      {/* 6. Step-by-Step Roadmap (How do I get there from my current score?) */}
      <StepsSection />

      {/* 7. Institutional Accreditation & Statutory Trust (Is this genuine and legal?) */}
      <AccreditationsSection />

      {/* 8. Concrete Evidence: Authentic Pearson Scorecards Hall of Fame */}
      <SuccessStoriesSection />

      {/* 9. Relatable Peer Validation: Student Reviews Auto-Slider */}
      <TestimonialSliderSection />

      {/* 10. Overcoming Final Objections & Direct WhatsApp Consultation */}
      <FaqSection />
    </div>
  );
}
