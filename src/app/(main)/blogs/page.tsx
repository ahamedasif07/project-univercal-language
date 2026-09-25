import React from "react";
import type { Metadata } from "next";
import { BlogsHero } from "@/components/modules/blogs/_components/blogs-hero";
import { BlogsGrid } from "@/components/modules/blogs/_components/blogs-grid";

export const metadata: Metadata = {
  title: "Blog | Universal Language",
  description:
    "Expert PTE, IELTS, German language tips, exam booking guides, and study abroad insights from Universal Language's certified mentors in Bangladesh.",
  alternates: {
    canonical: "https://universallanguage.com.bd/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="w-full">
      <BlogsHero />
      <BlogsGrid />
    </div>
  );
}
