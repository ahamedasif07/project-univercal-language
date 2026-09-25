import { BookOpen, Clock, User } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  author: string;
  authorAvatar: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-score-79-plus-pte",
    title: "How to Score 79+ in PTE Academic on Your First Attempt",
    excerpt:
      "A step-by-step breakdown of the exact study framework our mentors use to push students from 55 to 79+ in under 6 weeks — without relying on leaked templates.",
    category: "PTE Tips",
    categoryColor: "blue",
    readTime: "8 min read",
    date: "March 15, 2025",
    author: "Mehedi Hasan",
    authorAvatar: "MH",
    featured: true,
  },
  {
    slug: "alfa-pte-ai-portal-guide",
    title: "Alfa PTE AI Portal: A Complete Student Guide for 2025",
    excerpt:
      "Universal Language is an official Alfa PTE Institutional Partner. Here is exactly how to use the AI acoustic scoring portal to identify your oral fluency weaknesses before exam day.",
    category: "AI Tools",
    categoryColor: "purple",
    readTime: "6 min read",
    date: "February 28, 2025",
    author: "Raiyan Kabir",
    authorAvatar: "RK",
  },
  {
    slug: "pte-exam-booking-without-credit-card-bangladesh",
    title: "How to Book Your PTE Exam in Bangladesh Without an International Card",
    excerpt:
      "Most Bangladeshi students get stuck at payment. As an authorized Pearson voucher partner, we explain the bKash, Nagad, and bank transfer booking process step-by-step.",
    category: "Exam Booking",
    categoryColor: "emerald",
    readTime: "5 min read",
    date: "February 10, 2025",
    author: "Mehedi Hasan",
    authorAvatar: "MH",
  },
  {
    slug: "german-a1-to-b1-study-plan",
    title: "German Language A1 to B1 in 6 Months: The Realistic Study Plan",
    excerpt:
      "Planning to study in Germany? Here is the week-by-week schedule our Goethe-Institut certified instructor uses to take absolute beginners to Goethe B1 exam readiness.",
    category: "German",
    categoryColor: "amber",
    readTime: "10 min read",
    date: "January 22, 2025",
    author: "Fatema Begum",
    authorAvatar: "FB",
  },
  {
    slug: "australia-pr-pte-superior-english",
    title: "Australia PR: Why You Need Superior English (79+ in Every Section)",
    excerpt:
      "For Australian PR, scoring 65 overall is not enough — you need 79+ in all four skills for 20 immigration points. Here is what that actually requires and how our students achieve it.",
    category: "Study Abroad",
    categoryColor: "rose",
    readTime: "7 min read",
    date: "January 5, 2025",
    author: "Raiyan Kabir",
    authorAvatar: "RK",
  },
  {
    slug: "pte-vs-ielts-which-is-easier",
    title: "PTE vs. IELTS: Which Is Actually Easier for Bangladeshi Students?",
    excerpt:
      "Both exams are accepted globally — but they are very different. We break down the scoring algorithm, preparation timeline, and which test suits your learning style.",
    category: "PTE Tips",
    categoryColor: "blue",
    readTime: "9 min read",
    date: "December 18, 2024",
    author: "Mehedi Hasan",
    authorAvatar: "MH",
  },
];

export const CATEGORY_COLORS: Record<string, { badge: string; dot: string }> = {
  blue: {
    badge: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    dot: "bg-blue-500",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    dot: "bg-purple-500",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    dot: "bg-amber-500",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
    dot: "bg-rose-500",
  },
};
