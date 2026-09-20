"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { MAIN_NAV_ITEMS } from "@/config/constants";
import { ThemeToggle } from "./theme-toggle";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
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

  // Track window scroll for glassmorphism and height compression
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
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          logoRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          navLinksRef.current?.querySelectorAll(".nav-item") || [],
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 },
          "-=0.4"
        )
        .fromTo(
          actionsRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 },
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
        { x: -25, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.1,
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
          ? "bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-md py-2"
          : "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 md:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo (100% Background-Free Transparent PNGs) */}
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02] focus:outline-none shrink-0"
        >
          {/* Light Theme Logo - Transparent Background */}
          <div className="relative h-10 sm:h-12 md:h-14 w-40 sm:w-48 md:w-56 dark:hidden">
            <Image
              src="/images/light-logo.png"
              alt="Universal Language"
              fill
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              className="object-contain object-left"
            />
          </div>

          {/* Dark Theme Logo - Transparent Background */}
          <div className="relative h-12 sm:h-14 md:h-16 w-48 sm:w-56 md:w-64 hidden dark:block">
            <Image
              src="/images/dark-logo.png"
              alt="Universal Language"
              fill
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Professional Typography & Hover Effects) */}
        <nav
          ref={navLinksRef}
          className="hidden xl:flex items-center gap-1 2xl:gap-2"
          aria-label="Main Navigation"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-item relative px-3 py-2 text-xs 2xl:text-[13px] font-semibold tracking-wider transition-all duration-300 uppercase",
                  isActive
                    ? "text-primary font-bold"
                    : "text-foreground/80 hover:text-primary dark:text-foreground/85 dark:hover:text-primary"
                )}
              >
                <span>{item.title}</span>
                {/* Sleek Animated Underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-primary rounded-full transition-all duration-300",
                    isActive ? "w-full" : "w-0 hover:w-full group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Enroll Now CTA + Theme Toggle) */}
        <div ref={actionsRef} className="hidden xl:flex items-center gap-4 shrink-0">
          <ThemeToggle />

          {/* Standout "Enroll Now" CTA with glowing amber/orange gradient */}
          <Link href="/register" className="inline-block group focus:outline-none">
            <button className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 active:scale-98 transition-all duration-300 cursor-pointer">
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Medium/Mobile Screens (Hamburger menu for screens < xl) */}
        <div className="flex xl:hidden items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="w-10 h-10 rounded-lg border border-border/70 bg-card/70 hover:bg-accent flex items-center justify-center text-foreground transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring/40"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground transition-transform duration-200 rotate-90 scale-100" />
            ) : (
              <Menu className="w-5 h-5 text-foreground transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Responsive GSAP Animated) */}
      <div
        ref={mobileMenuRef}
        className="xl:hidden overflow-hidden border-b border-border/80 bg-background/98 backdrop-blur-2xl shadow-xl"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto px-5 pt-3 pb-6 space-y-1.5">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "mobile-nav-item flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                    : "text-foreground/80 hover:bg-accent hover:text-foreground"
                )}
              >
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            );
          })}

          {/* Mobile CTA Button */}
          <div className="pt-4 mobile-nav-item">
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/25 cursor-pointer active:scale-98 transition-all">
                <Sparkles className="w-4 h-4" />
                <span>Enroll Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
