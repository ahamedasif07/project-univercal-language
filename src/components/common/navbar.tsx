"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { MAIN_NAV_ITEMS } from "@/config/constants";
import { ThemeToggle } from "./theme-toggle";
import { AnimatedLogo } from "./animated-logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  // Track window scroll for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          logoRef.current,
          { x: -25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          navLinksRef.current?.querySelectorAll(".nav-link-item") || [],
          { y: -12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 },
          "-=0.4"
        )
        .fromTo(
          actionsRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45 },
          "-=0.3"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-sm py-2.5"
          : "bg-background/80 backdrop-blur-md border-b border-border/50 py-3.5 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Animated SVG Logo (Adapts to theme colors) */}
        <Link
          ref={logoRef}
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105 focus:outline-none shrink-0 py-0.5"
        >
          <AnimatedLogo className="h-10 sm:h-11 md:h-12 w-auto text-[#0b3a82] dark:text-white transition-colors duration-300" />
        </Link>

        {/* Center: Desktop Navigation Links (Clean, Pure Text with Glowing Light Beam Underline) */}
        <nav
          ref={navLinksRef}
          className="hidden xl:flex items-center gap-6 2xl:gap-8"
          aria-label="Main Navigation"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link-item group relative py-1 text-xs 2xl:text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 flex flex-col items-center select-none",
                  isActive
                    ? "text-primary dark:text-primary font-bold"
                    : "text-foreground/75 hover:text-primary dark:text-foreground/80 dark:hover:text-primary"
                )}
              >
                {/* Text with subtle micro-lift */}
                <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-[1px]">
                  {item.title}
                </span>

                {/* Radiant Ambient Light Beam Underline */}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary dark:via-sky-400 to-transparent transition-all duration-300 origin-center pointer-events-none",
                    isActive
                      ? "scale-x-100 opacity-100 shadow-[0_0_8px_rgba(11,58,130,0.7)] dark:shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (shadcn Theme Toggle + Enroll Now CTA) */}
        <div ref={actionsRef} className="hidden xl:flex items-center gap-4 shrink-0">
          <ThemeToggle />

          {/* Theme-aligned Luxury CTA: "Enroll Now" */}
          <Link href="/register" className="inline-block group focus:outline-none">
            <button className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-xl text-xs md:text-[13px] font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 dark:from-primary dark:via-blue-500 dark:to-indigo-500 shadow-[0_4px_14px_-2px_rgba(11,58,130,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)] dark:shadow-[0_4px_16px_-2px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_22px_-2px_rgba(11,58,130,0.5)] dark:hover:shadow-[0_6px_24px_-2px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
              {/* Shimmer Sheen Reflection */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <span className="relative z-10">Enroll Now</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Medium & Mobile Screens: Theme Toggle + shadcn Sheet Menu */}
        <div className="flex xl:hidden items-center gap-3">
          <ThemeToggle />

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="h-9 w-9 rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-200 
                  bg-gradient-to-b from-secondary/80 to-secondary/30 dark:from-muted/70 dark:to-muted/30 
                  backdrop-blur-xl 
                  border border-border/40 dark:border-white/10 
                  shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.5)] 
                  dark:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.08)] 
                  hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 text-foreground"
              >
                <Menu className="w-4 h-4 transition-transform duration-200" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:max-w-md h-full flex flex-col justify-between p-6 sm:p-8 bg-background/98 dark:bg-background/98 backdrop-blur-3xl border-l border-border/40 shadow-2xl"
            >
              <div>
                {/* Header with Brand Logo inside Sheet */}
                <SheetHeader className="pb-6 border-b border-border/40">
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                  <SheetDescription className="sr-only">Browse site pages</SheetDescription>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 group focus:outline-none"
                  >
                    <AnimatedLogo className="h-9 w-auto text-[#0b3a82] dark:text-white" />
                  </Link>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className="pt-6 space-y-1.5" aria-label="Mobile Navigation">
                  {MAIN_NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-200 select-none",
                          isActive
                            ? "bg-primary/10 text-primary font-bold shadow-xs border-l-4 border-primary pl-4"
                            : "text-foreground/80 hover:bg-secondary/60 hover:text-primary active:scale-[0.99]"
                        )}
                      >
                        <span>{item.title}</span>
                        <ArrowRight
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isActive ? "text-primary opacity-100" : "opacity-30"
                          )}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Bottom CTA + Copyright */}
              <div className="pt-6 border-t border-border/40 space-y-4">
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block group focus:outline-none"
                >
                  <button className="relative overflow-hidden w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-primary dark:via-blue-500 dark:to-indigo-500 shadow-[0_4px_16px_-2px_rgba(11,58,130,0.4)] active:scale-98 transition-all cursor-pointer">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    <span className="relative z-10">Enroll Now</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                  <span>Universal Language</span>
                  <span>All Rights Reserved</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
