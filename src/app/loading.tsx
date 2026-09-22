import React from "react";

export default function Loading() {
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
      className="bg-background/95 dark:bg-[#060b14]/96 backdrop-blur-md select-none"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute w-44 h-44 bg-blue-500/15 dark:bg-cyan-500/15 blur-2xl rounded-full pointer-events-none animate-pulse will-change-[opacity]" />

        {/* ── 3D Rotating Globe Loader SVG ── */}
        <div className="relative z-10 w-20 h-20 flex items-center justify-center [contain:paint]">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full block"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
          >
            <defs>
              <linearGradient id="loadGlobeAtmosphere" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0b3a82" />
              </linearGradient>

              <radialGradient id="loadGlobeDepth" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
                <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.25" />
              </radialGradient>

              <linearGradient id="loadOrbitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#2563eb" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>

              <clipPath id="loadGlobeClip">
                <circle cx="50" cy="50" r="32" />
              </clipPath>

              <style>{`
                /* Butter-Smooth 60/120fps Sinusoidal Harmonic Projection */
                @keyframes spinMeridianSmooth {
                  0% { transform: scaleX(1); opacity: 0.85; }
                  5% { transform: scaleX(0.951); opacity: 0.88; }
                  10% { transform: scaleX(0.809); opacity: 0.92; }
                  15% { transform: scaleX(0.588); opacity: 0.95; }
                  20% { transform: scaleX(0.309); opacity: 0.95; }
                  25% { transform: scaleX(0); opacity: 0.9; }
                  30% { transform: scaleX(-0.309); opacity: 0.82; }
                  35% { transform: scaleX(-0.588); opacity: 0.74; }
                  40% { transform: scaleX(-0.809); opacity: 0.65; }
                  45% { transform: scaleX(-0.951); opacity: 0.58; }
                  50% { transform: scaleX(-1); opacity: 0.55; }
                  55% { transform: scaleX(-0.951); opacity: 0.48; }
                  60% { transform: scaleX(-0.809); opacity: 0.40; }
                  65% { transform: scaleX(-0.588); opacity: 0.32; }
                  70% { transform: scaleX(-0.309); opacity: 0.28; }
                  75% { transform: scaleX(0); opacity: 0.25; }
                  80% { transform: scaleX(0.309); opacity: 0.32; }
                  85% { transform: scaleX(0.588); opacity: 0.45; }
                  90% { transform: scaleX(0.809); opacity: 0.60; }
                  95% { transform: scaleX(0.951); opacity: 0.75; }
                  100% { transform: scaleX(1); opacity: 0.85; }
                }

                @keyframes orbitSpinSmooth {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }

                @keyframes shimmerBar {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(100%);
                  }
                }

                .meridian-load-1,
                .meridian-load-2,
                .meridian-load-3 {
                  transform-box: view-box;
                  transform-origin: 50px 50px;
                  will-change: transform, opacity;
                  animation: spinMeridianSmooth 2.8s linear infinite;
                }

                .meridian-load-2 {
                  animation-delay: -0.933s;
                }

                .meridian-load-3 {
                  animation-delay: -1.867s;
                }

                .orbit-track-load {
                  transform-box: view-box;
                  transform-origin: 50px 50px;
                  will-change: transform;
                  animation: orbitSpinSmooth 3.2s linear infinite;
                }

                .shimmer-progress {
                  will-change: transform;
                  animation: shimmerBar 1.4s ease-in-out infinite;
                }
              `}</style>
            </defs>

            {/* Orbiting ring around globe */}
            <g className="orbit-track-load">
              <ellipse
                cx="50"
                cy="50"
                rx="44"
                ry="15"
                fill="none"
                stroke="url(#loadOrbitGlow)"
                strokeWidth="1.6"
              />
              <circle cx="94" cy="50" r="2.5" fill="#38bdf8" className="drop-shadow-[0_0_6px_#38bdf8]" />
            </g>

            {/* Globe Sphere Interior (clipped) */}
            <g clipPath="url(#loadGlobeClip)">
              <circle cx="50" cy="50" r="32" fill="url(#loadGlobeDepth)" />

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
                  className="meridian-load-1"
                  cx="50"
                  cy="50"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="1.1"
                />
                <ellipse
                  className="meridian-load-2"
                  cx="50"
                  cy="50"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.1"
                />
                <ellipse
                  className="meridian-load-3"
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
              stroke="url(#loadGlobeAtmosphere)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Minimal Progress Line & Brand Tag */}
        <div className="mt-5 flex flex-col items-center space-y-2">
          <div className="relative w-24 h-[2px] rounded-full bg-muted/60 dark:bg-white/10 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shimmer-progress" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground/70 uppercase">
            Universal Language
          </span>
        </div>
      </div>
    </div>
  );
}
