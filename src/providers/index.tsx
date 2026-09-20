"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="system">
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}

export * from "./theme-provider";
export * from "./query-provider";
