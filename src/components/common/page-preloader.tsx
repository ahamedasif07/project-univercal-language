"use client";

import React, { useEffect, useState } from "react";

export function PagePreloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldMount, setShouldMount] = useState(true);

  useEffect(() => {
    // Show the rotating globe loader for ~950ms, then smoothly fade out
    const fadeTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 950);

    const unmountTimer = setTimeout(() => {
      setShouldMount(false);
    }, 1550);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldMount) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        margin: 0,
        padding: 0,
      }}
      className={`bg-background/98 dark:bg-[#060b14]/98 backdrop-blur-2xl transition-opacity transition-transform duration-500 ease-out select-none ${
        isLoaded
          ? "opacity-0 scale-95 pointer-events-none"
          : "opacity-100 scale-100 pointer-events-auto"
      }`}
      aria-label="Loading Universal Language"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft Ambient Radial Glow matching site palette */}
        <div className="absolute w-44 h-44 bg-blue-500/20 dark:bg-cyan-500/20 blur-2xl rounded-full pointer-events-none animate-pulse" />

        {/* ── 3D Rotating Globe Loader SVG ── */}
        <div className="relative z-10 w-20 h-20 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="globeAtmosphere" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0b3a82" />
              </linearGradient>

              <radialGradient id="globeDepth" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
                <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.25" />
              </radialGradient>

              <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#2563eb" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>

              <clipPath id="globeSphereClip">
                <circle cx="50" cy="50" r="32" />
              </clipPath>

              <style>{`
                @keyframes spinMeridian {
                  0% {
                    transform: scaleX(1);
                    opacity: 0.8;
                  }
                  25% {
                    transform: scaleX(0);
                    opacity: 0.35;
                  }
                  50% {
                    transform: scaleX(-1);
                    opacity: 0.8;
                  }
                  75% {
                    transform: scaleX(0);
                    opacity: 0.35;
                  }
                  100% {
                    transform: scaleX(1);
                    opacity: 0.8;
                  }
                }

                @keyframes orbitSpin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }

                .meridian-1 {
                  animation: spinMeridian 2.8s linear infinite;
                  transform-origin: 50px 50px;
                }
                .meridian-2 {
                  animation: spinMeridian 2.8s linear infinite;
                  animation-delay: -0.93s;
                  transform-origin: 50px 50px;
                }
                .meridian-3 {
                  animation: spinMeridian 2.8s linear infinite;
                  animation-delay: -1.86s;
                  transform-origin: 50px 50px;
                }
                .orbit-track {
                  animation: orbitSpin 3.2s linear infinite;
                  transform-origin: 50px 50px;
                }
              `}</style>
            </defs>

            {/* Orbiting ring around globe */}
            <g className="orbit-track">
              <ellipse
                cx="50"
                cy="50"
                rx="44"
                ry="15"
                fill="none"
                stroke="url(#orbitGlow)"
                strokeWidth="1.6"
              />
              {/* Orbiting Satellite Dot */}
              <circle cx="94" cy="50" r="2.5" fill="#38bdf8" className="drop-shadow-[0_0_6px_#38bdf8]" />
            </g>

            {/* Globe Sphere Interior (clipped) */}
            <g clipPath="url(#globeSphereClip)">
              {/* Semi-transparent sphere core */}
              <circle cx="50" cy="50" r="32" fill="url(#globeDepth)" />

              {/* Tilted Earth Axis Group */}
              <g transform="rotate(-22 50 50)">
                {/* Latitude Parallels */}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="32"
                  ry="10"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  strokeOpacity="0.65"
                />
                <ellipse
                  cx="50"
                  cy="36"
                  rx="27"
                  ry="7.5"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="0.9"
                  strokeOpacity="0.45"
                />
                <ellipse
                  cx="50"
                  cy="64"
                  rx="27"
                  ry="7.5"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="0.9"
                  strokeOpacity="0.45"
                />

                {/* Rotating Longitude Meridians */}
                <ellipse
                  className="meridian-1"
                  cx="50"
                  cy="50"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="1.1"
                />
                <ellipse
                  className="meridian-2"
                  cx="50"
                  cy="50"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.1"
                />
                <ellipse
                  className="meridian-3"
                  cx="50"
                  cy="50"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="1.1"
                />
              </g>
            </g>

            {/* Glowing Outer Sphere Rim */}
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="url(#globeAtmosphere)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Minimal Progress Line & Brand Tag */}
        <div className="mt-5 flex flex-col items-center space-y-2">
          <div className="relative w-24 h-[2px] rounded-full bg-muted/60 dark:bg-white/10 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[shimmer_1.3s_infinite]" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground/60 uppercase">
            Universal Language
          </span>
        </div>
      </div>
    </div>
  );
}
