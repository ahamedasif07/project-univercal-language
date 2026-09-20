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

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          navLinksRef.current?.querySelectorAll(".nav-item") || [],
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
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
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
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
          ? "bg-background/90 backdrop-blur-xl border-b border-border/70 shadow-md py-2.5"
          : "bg-background/70 backdrop-blur-md border-b border-border/40 py-3.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo with Theme Awareness */}
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
        >
          {/* Light Theme Logo */}
          <div className="relative h-10 sm:h-12 w-44 sm:w-52 dark:hidden">
            <Image
              src="/images/light-logo.jpg"
              alt="Universal Language"
              fill
              priority
              sizes="(max-width: 640px) 176px, 208px"
              className="object-contain object-left mix-blend-multiply"
            />
          </div>

          {/* Dark Theme Logo */}
          <div className="relative h-10 sm:h-12 w-44 sm:w-52 hidden dark:block">
            <Image
              src="/images/dark-logo.jpg"
              alt="Universal Language"
              fill
              priority
              sizes="(max-width: 640px) 176px, 208px"
              className="object-contain object-left mix-blend-screen"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          ref={navLinksRef}
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-item relative px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wider transition-all duration-300 uppercase rounded-full group",
                  isActive
                    ? "text-primary font-bold bg-primary/10"
                    : "text-foreground/85 hover:text-primary hover:bg-accent/60"
                )}
              >
                <span>{item.title}</span>
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Enroll Now CTA + Theme Toggle) */}
        <div ref={actionsRef} className="hidden lg:flex items-center gap-3.5">
          <ThemeToggle />

          {/* Reference Image Inspired CTA: "Enroll Now" */}
          <Link href="/register" className="inline-block group focus:outline-none">
            <button className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 active:scale-98 transition-all duration-300 cursor-pointer">
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Mobile View: Theme Toggle + Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2.5">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="w-10 h-10 rounded-lg border border-border/70 bg-card/60 hover:bg-accent flex items-center justify-center text-foreground transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring/40"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground transition-transform duration-200 rotate-90 scale-100" />
            ) : (
              <Menu className="w-5 h-5 text-foreground transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden overflow-hidden border-b border-border/70 bg-background/95 backdrop-blur-2xl shadow-xl"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto px-5 pt-3 pb-6 space-y-2">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "mobile-nav-item flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-200",
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
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/25 cursor-pointer active:scale-98 transition-all">
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
