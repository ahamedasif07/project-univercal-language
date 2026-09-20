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
      <div className="w-9 h-9 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground opacity-50">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative w-9 h-9 rounded-full border border-border/70 bg-card/60 hover:bg-accent hover:text-accent-foreground flex items-center justify-center text-foreground transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring/40"
    >
      <Sun
        className={`w-4 h-4 text-amber-500 transition-all duration-300 transform ${
          isDark ? "rotate-90 scale-0 opacity-0 absolute" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`w-4 h-4 text-primary transition-all duration-300 transform ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
    </button>
  );
}
