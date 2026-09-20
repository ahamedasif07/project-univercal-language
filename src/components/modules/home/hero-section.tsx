import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/15 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-indigo-500/10 dark:bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-8 backdrop-blur-xs">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Next.js App Router Architecture
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          Enterprise Structure for Modern{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
            Next.js Applications
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Clean separation of Route Groups, modular feature components, unified types, and resilient data providers crafted for high-performance teams.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/register">
            <Button size="lg" className="shadow-lg shadow-blue-600/25">
              Get Started Free
            </Button>
          </Link>
          <Link href="/blogs">
            <Button variant="outline" size="lg">
              Explore Articles
            </Button>
          </Link>
        </div>

        {/* Hero Visual */}
        <div className="mt-14 relative mx-auto max-w-5xl rounded-2xl p-2 bg-gradient-to-b from-slate-200/50 via-slate-200/20 to-transparent dark:from-slate-800/80 dark:via-slate-800/20 shadow-2xl">
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video relative">
            <Image
              src="/images/hero.webp"
              alt="Application dashboard preview"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-102"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
