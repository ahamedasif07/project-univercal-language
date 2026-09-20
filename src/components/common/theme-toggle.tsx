"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "@/providers/theme-provider";
import { Sun, Moon, Sparkles } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full border border-border/40 bg-muted/40 opacity-40" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative flex items-center w-[66px] h-[34px] p-1 rounded-full border border-border/80 dark:border-border/60 bg-muted/60 dark:bg-card/70 backdrop-blur-xl transition-all duration-500 cursor-pointer shadow-inner hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
    >
      {/* Background ambient glow effect */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-700 pointer-events-none ${
          isDark
            ? "opacity-30 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-blue-500/20"
            : "opacity-25 bg-gradient-to-r from-amber-400/20 via-orange-400/30 to-yellow-400/20"
        }`}
      />

      {/* Sun Icon Track (Left) */}
      <div className="flex-1 flex items-center justify-center z-10">
        <Sun
          className={`w-3.5 h-3.5 transition-all duration-500 ${
            !isDark
              ? "text-amber-500 scale-100 opacity-100 rotate-0 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]"
              : "text-muted-foreground/50 scale-75 opacity-40 -rotate-45"
          }`}
        />
      </div>

      {/* Moon Icon Track (Right) */}
      <div className="flex-1 flex items-center justify-center z-10">
        <Moon
          className={`w-3.5 h-3.5 transition-all duration-500 ${
            isDark
              ? "text-indigo-400 scale-100 opacity-100 rotate-0 drop-shadow-[0_0_6px_rgba(129,140,248,0.7)]"
              : "text-muted-foreground/50 scale-75 opacity-40 rotate-45"
          }`}
        />
      </div>

      {/* Floating 3D Tactile Thumb Slider */}
      <div
        className={`absolute top-[3px] h-[26px] w-[26px] rounded-full transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center justify-center border ${
          isDark
            ? "left-[35px] bg-slate-900 border-indigo-400/30 shadow-[0_2px_10px_rgba(99,102,241,0.45),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : "left-[3px] bg-white border-amber-300/60 shadow-[0_2px_10px_rgba(245,158,11,0.35),inset_0_1px_1px_rgba(255,255,255,0.9)]"
        }`}
      >
        {isDark ? (
          <Sparkles className="w-2.5 h-2.5 text-indigo-300 animate-pulse" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
        )}
      </div>
    </button>
  );
}
