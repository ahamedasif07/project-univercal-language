"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/common/container";
import { BLOG_POSTS, CATEGORY_COLORS } from "@/data/blogs";

export function BlogsGrid() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        {/* ── Featured Post ── */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <Link href={`/blogs/${featured.slug}`} className="block group focus:outline-none">
              <div className="relative rounded-3xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                {/* Top banner gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600" />

                <div className="p-8 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${CATEGORY_COLORS[featured.categoryColor]?.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${CATEGORY_COLORS[featured.categoryColor]?.dot}`} />
                        {featured.category}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                        ★ Featured
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-[1.2] group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {featured.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[9px] font-black">
                          {featured.authorAvatar}
                        </div>
                        <span className="font-semibold text-foreground/80">{featured.author}</span>
                      </div>
                      <span className="h-3 w-px bg-border" />
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featured.readTime}
                      </div>
                      <span className="h-3 w-px bg-border" />
                      <span>{featured.date}</span>
                    </div>
                  </div>

                  {/* Right — decorative */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-28 h-28 text-primary/20" strokeWidth={0.8} />
                      </div>
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 opacity-15 blur-xl" />
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary opacity-15 blur-xl" />
                    </div>
                  </div>
                </div>

                {/* Read more link inside card */}
                <div className="px-8 sm:px-10 lg:px-12 pb-8">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all duration-200">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── Rest of Posts Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/blogs/${post.slug}`} className="block h-full group focus:outline-none">
                <div className="h-full flex flex-col rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  {/* Color top stripe */}
                  <div
                    className={`h-1 w-full ${
                      post.categoryColor === "blue" ? "bg-gradient-to-r from-blue-600 to-indigo-500" :
                      post.categoryColor === "purple" ? "bg-gradient-to-r from-purple-600 to-violet-500" :
                      post.categoryColor === "emerald" ? "bg-gradient-to-r from-emerald-600 to-teal-500" :
                      post.categoryColor === "amber" ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                      "bg-gradient-to-r from-rose-500 to-pink-500"
                    }`}
                  />

                  <div className="flex flex-col flex-1 p-6 space-y-4">
                    {/* Category */}
                    <span
                      className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full border text-[11px] font-bold ${CATEGORY_COLORS[post.categoryColor]?.badge}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${CATEGORY_COLORS[post.categoryColor]?.dot}`} />
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${
                          post.categoryColor === "blue" ? "from-blue-600 to-indigo-600" :
                          post.categoryColor === "purple" ? "from-purple-600 to-violet-600" :
                          post.categoryColor === "emerald" ? "from-emerald-600 to-teal-600" :
                          post.categoryColor === "amber" ? "from-amber-500 to-orange-500" :
                          "from-rose-500 to-pink-600"
                        } flex items-center justify-center text-white text-[9px] font-black`}>
                          {post.authorAvatar}
                        </div>
                        <span className="font-semibold text-foreground/70">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
