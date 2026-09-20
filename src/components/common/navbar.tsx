"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { MAIN_NAV_ITEMS } from "@/config/constants";
import { ThemeToggle } from "./theme-toggle";
import { AnimatedLogo } from "./animated-logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // GSAP Mobile Menu Animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      gsap.killTweensOf(mobileMenuRef.current);
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      const items = mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
      gsap.fromTo(
        items,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.05,
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [mobileMenuOpen]);

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

        {/* Center: Desktop Navigation Links (Clean, Spacious Layout with Elegant Hover Animation) */}
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
                  "nav-link-item group relative py-1 text-xs 2xl:text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 flex flex-col items-center",
                  isActive
                    ? "text-primary font-bold"
                    : "text-foreground/80 hover:text-primary dark:text-foreground/85 dark:hover:text-primary"
                )}
              >
                {/* Text with slight lift on hover */}
                <span className="transition-transform duration-200 group-hover:-translate-y-[1px]">
                  {item.title}
                </span>

                {/* Elegant Expanding Glowing Underline from Center */}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] transition-all duration-300 origin-center",
                    isActive
                      ? "scale-x-100 opacity-100"
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

          {/* Reference Image Inspired CTA: "Enroll Now" */}
          <Link href="/register" className="inline-block group focus:outline-none">
            <button className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-xs md:text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-sm hover:shadow-md active:scale-98 transition-all duration-200 cursor-pointer">
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Medium & Mobile Screens: Theme Toggle + Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="h-9 w-9 rounded-md border border-border bg-background hover:bg-accent flex items-center justify-center text-foreground transition-colors cursor-pointer shadow-xs focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground transition-transform duration-200 rotate-90 scale-100" />
            ) : (
              <Menu className="w-5 h-5 text-foreground transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (GSAP Animated) */}
      <div
        ref={mobileMenuRef}
        className="xl:hidden overflow-hidden border-b border-border/80 bg-background/98 backdrop-blur-2xl shadow-xl"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto px-5 pt-3 pb-6 space-y-1">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "mobile-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-foreground/80 hover:bg-accent hover:text-foreground"
                )}
              >
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            );
          })}

          {/* Mobile CTA Button */}
          <div className="pt-3 mobile-nav-item">
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-sm cursor-pointer active:scale-98 transition-all">
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
