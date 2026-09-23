"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Target, TrendingUp, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

interface StatItem {
  id: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  highlight: string;
  icon: React.ElementType;
  gradient: string;
  badgeColor: string;
  borderColor: string;
}

const STATS: StatItem[] = [
  {
    id: "students",
    value: 150,
    suffix: "+",
    label: "Students Mentored",
    highlight: "Focused 1-to-1 personalized coaching",
    icon: Users,
    gradient: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    borderColor: "hover:border-blue-500/40",
  },
  {
    id: "pass-rate",
    value: 96,
    suffix: "%",
    label: "First-Attempt Success",
    highlight: "Scored required points on first attempt",
    icon: Target,
    gradient: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    borderColor: "hover:border-emerald-500/40",
  },
  {
    id: "improvement",
    value: 18,
    prefix: "+",
    suffix: " Pts",
    label: "Avg. Score Increase",
    highlight: "Measured from diagnostic mock to real exam",
    icon: TrendingUp,
    gradient: "from-sky-600 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    borderColor: "hover:border-sky-500/40",
  },
  {
    id: "rating",
    value: 4.9,
    decimals: 1,
    suffix: " ★",
    label: "Student Rating",
    highlight: "Verified feedback from successful students",
    icon: Star,
    gradient: "from-purple-600 to-violet-600",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    borderColor: "hover:border-purple-500/40",
  },
];

function AnimatedCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  started,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const duration = 1900; // 1.9 seconds smooth count-up

    let frameId: number;
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(ease * target);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started, target]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden border-y border-border/40 bg-gradient-to-b from-background via-muted/20 to-background"
      aria-label="Key Performance Statistics"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Real Results That{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Speak For Themselves
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            As a boutique Pearson-certified academy, we believe in authentic numbers and guaranteed individual attention over empty promises.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group relative rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${stat.borderColor}`}
                style={{
                  animationDelay: `${idx * 120}ms`,
                }}
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Row: Icon + Mini Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${stat.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground/80">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Verified
                  </span>
                </div>

                {/* Number with smooth count-up */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-2 flex items-baseline">
                  <AnimatedCounter
                    target={stat.value}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    started={hasStarted}
                  />
                </div>

                {/* Label */}
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>

                {/* Subtitle / Context */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.highlight}
                </p>

                {/* Bottom decorative accent bar */}
                <div className="mt-4 w-full h-1 rounded-full bg-muted/60 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-1000 ease-out`}
                    style={{
                      width: hasStarted ? "100%" : "0%",
                      transitionDelay: `${idx * 150 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
