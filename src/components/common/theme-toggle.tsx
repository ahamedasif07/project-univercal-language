"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "@/providers/theme-provider";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full bg-secondary/40 border border-border/30 backdrop-blur-md opacity-40 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="group relative h-9 w-9 rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-300 ease-out 
        bg-gradient-to-b from-secondary/80 to-secondary/30 dark:from-muted/70 dark:to-muted/30 
        backdrop-blur-xl 
        border border-border/40 dark:border-white/10 
        shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.5)] 
        dark:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.08)] 
        hover:border-primary/40 dark:hover:border-primary/40 
        hover:shadow-[0_0_16px_-2px_rgba(11,58,130,0.2)] dark:hover:shadow-[0_0_16px_-2px_rgba(147,197,253,0.25)] 
        hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Ambient Celestial Glow behind icon on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(186,230,253,0.2),transparent_70%)]" />

      {/* Sun Icon (Warm Amber with soft glow) */}
      <Sun
        className="h-[1.12rem] w-[1.12rem] text-amber-500 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
          rotate-0 scale-100 opacity-100 
          dark:-rotate-90 dark:scale-0 dark:opacity-0 
          drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]"
      />

      {/* Moon Icon (Luminous Moonlight Sky Blue with soft glow) */}
      <Moon
        className="absolute h-[1.12rem] w-[1.12rem] text-sky-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
          rotate-90 scale-0 opacity-0 
          dark:rotate-0 dark:scale-100 dark:opacity-100 
          dark:drop-shadow-[0_0_8px_rgba(186,230,253,0.5)]"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
