"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, BookOpen, Share2, Calendar } from "lucide-react";
import { Container } from "@/components/common/container";
import { BlogPost, BLOG_POSTS, CATEGORY_COLORS } from "@/data/blogs";

interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// Simulated article paragraphs keyed by slug
const ARTICLE_BODY: Record<string, React.ReactNode> = {
  default: (
    <div className="space-y-6 text-base sm:text-lg text-foreground/85 leading-relaxed">
      <p>
        Language learning is one of the most powerful investments you can make in your
        future. Whether your goal is PTE 79+ for Australian PR, a German B1 certificate
        for your winter semester, or an IELTS band 7 for your UK university application,
        the difference between success and failure almost always comes down to
        <strong> the quality and authenticity of your preparation method.</strong>
      </p>
      <h2 className="text-xl sm:text-2xl font-black text-foreground mt-8 mb-4">
        Why Template-Based Preparation Fails
      </h2>
      <p>
        Pearson's scoring algorithm was significantly updated in 2024 to detect and
        penalize recycled internet templates. Students who memorize leaked speaking
        templates often score lower after Pearson's AI flags their responses as
        inauthentic — regardless of grammar or vocabulary accuracy.
      </p>
      <p>
        Universal Language mentors are trained directly by Pearson South Asia's academic
        lead to teach authentic pedagogical scaffolding — the same framework Pearson uses
        internally to develop its test questions.
      </p>
      <h2 className="text-xl sm:text-2xl font-black text-foreground mt-8 mb-4">
        The Diagnostic-First Approach
      </h2>
      <p>
        Every student at Universal Language begins with a 10-minute diagnostic evaluation.
        This identifies the precise score leaks — whether it is oral fluency pitch
        variation, summarize spoken text timing, or read-aloud rhythm — before any study
        plan is built. This prevents weeks of wasted practice on skills that are already
        strong.
      </p>
      <blockquote className="border-l-4 border-primary pl-5 italic text-muted-foreground bg-muted/30 py-4 pr-4 rounded-r-xl">
        "After my diagnostic, my mentor identified that I was losing points on Repeat
        Sentence due to stress pattern errors — not grammar. Fixing just that one skill
        pushed me from 68 to 79 in three weeks." — Tanvir Hasan, PTE 86
      </blockquote>
      <h2 className="text-xl sm:text-2xl font-black text-foreground mt-8 mb-4">
        The 3-Phase Study Framework
      </h2>
      <p>
        Our mentors structure every student's journey into three phases: Foundation
        Calibration (Week 1-2), Skill-Specific Drilling (Week 3-5), and Mock Exam
        Simulation (Week 6). Each phase builds on acoustic feedback from the Alfa PTE AI
        portal before culminating in a full timed practice exam under real test conditions.
      </p>
      <p>
        Following this framework, over 96% of Universal Language students achieve their
        target score on their first attempt — a statistic verified by actual Pearson
        scorecards, not self-reported estimates.
      </p>
      <h2 className="text-xl sm:text-2xl font-black text-foreground mt-8 mb-4">
        Ready to Start?
      </h2>
      <p>
        Book your free 15-minute diagnostic evaluation today. Our mentors will assess
        your current level, identify the specific skills holding back your score, and
        hand you a personalised weekly study plan before the session ends.
      </p>
    </div>
  ),
};

export function BlogPostView({ post, relatedPosts }: BlogPostViewProps) {
  const colors = CATEGORY_COLORS[post.categoryColor] ?? CATEGORY_COLORS.blue;
  const body = ARTICLE_BODY[post.slug] ?? ARTICLE_BODY.default;

  return (
    <article className="w-full">
      {/* ── Hero ── */}
      <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-primary/8 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

        <Container>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-5">
            {/* Category + featured */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${colors.badge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {post.excerpt}
            </motion.p>

            {/* Author row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-md">
                {post.authorAvatar}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">Universal Language Mentor</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Body ── */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Top accent bar */}
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 mb-10" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {body}
            </motion.div>

            {/* Share / CTA */}
            <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Book Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Share2 className="w-4 h-4" />
                Share this article
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-border/40 bg-gradient-to-b from-muted/20 to-background">
          <Container>
            <div className="mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
                <BookOpen className="w-3 h-3" />
                More Articles
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">Related Reading</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => {
                const rc = CATEGORY_COLORS[rp.categoryColor] ?? CATEGORY_COLORS.blue;
                return (
                  <Link key={rp.slug} href={`/blogs/${rp.slug}`} className="block group focus:outline-none">
                    <div className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col">
                      <span className={`inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${rc.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${rc.dot}`} />
                        {rp.category}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors flex-1">
                        {rp.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t border-border/30">
                        <Clock className="w-3 h-3" />
                        {rp.readTime}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
