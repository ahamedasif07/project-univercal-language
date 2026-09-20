"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { UNIVERSAL_LANGUAGE_LOGO_PATH } from "./logo-path";

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="475 355 1930 730"
        className="w-full h-full block"
        aria-label="Universal Language Logo"
      >
        <defs>
          <style>{`
            .ul-logo-stroke {
              stroke: currentColor;
              stroke-width: 14px;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 23000;
              stroke-dashoffset: 23000;
              animation: drawULLogo 5.5s cubic-bezier(0.37, 0, 0.2, 1) infinite alternate;
            }

            @keyframes drawULLogo {
              0%, 8% {
                stroke-dashoffset: 23000;
                fill: currentColor;
                fill-opacity: 0;
              }
              45% {
                stroke-dashoffset: 7500;
                fill: currentColor;
                fill-opacity: 0.06;
              }
              68% {
                stroke-dashoffset: 0;
                fill: currentColor;
                fill-opacity: 0.6;
              }
              82%, 100% {
                stroke-dashoffset: 0;
                fill: currentColor;
                fill-opacity: 1;
              }
            }
          `}</style>
        </defs>

        {/* Universal Language Wordmark + Globe Icon */}
        <path
          className="ul-logo-stroke"
          fillRule="evenodd"
          d={UNIVERSAL_LANGUAGE_LOGO_PATH}
        />
      </svg>
    </div>
  );
}
