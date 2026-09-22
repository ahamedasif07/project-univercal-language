"use client";

import React, { useEffect, useState } from "react";

export function PagePreloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldMount, setShouldMount] = useState(true);

  useEffect(() => {
    // Show the rotating globe loader for ~750ms, then smoothly dissolve out
    const fadeTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 750);

    const unmountTimer = setTimeout(() => {
      setShouldMount(false);
    }, 1250);

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
      className={`bg-background dark:bg-[#060b14] transition-opacity transition-transform duration-500 ease-out select-none ${
        isLoaded
          ? "opacity-0 scale-95 pointer-events-none"
          : "opacity-100 scale-100 pointer-events-auto"
      }`}
      aria-label="Loading Universal Language"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft Ambient Radial Glow matching site palette */}
        <div className="absolute w-44 h-44 bg-blue-500/15 dark:bg-cyan-500/15 blur-2xl rounded-full pointer-events-none [transform:translateZ(0)]" />

        {/* ── True 3D GPU-Composited Rotating Globe ── */}
        <div className="relative w-24 h-24 flex items-center justify-center [perspective:600px] select-none pointer-events-none">
          {/* Inner Glowing Core */}
          <div
            className="absolute w-16 h-16 rounded-full pointer-events-none [transform:translateZ(0)]"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, rgba(56,189,248,0.25) 0%, rgba(37,99,235,0.12) 50%, rgba(11,58,130,0.3) 100%)",
              boxShadow:
                "0 0 25px rgba(56,189,248,0.3), inset 0 0 15px rgba(56,189,248,0.2)",
            }}
          />

          {/* Glowing Atmospheric Glass Rim */}
          <div
            className="absolute w-[68px] h-[68px] rounded-full border border-sky-400/50 pointer-events-none [transform:translateZ(0)]"
            style={{
              boxShadow:
                "0 0 18px rgba(56,189,248,0.4), inset 0 0 12px rgba(37,99,235,0.25)",
            }}
          />

          {/* 3D Wireframe Sphere (Pure GPU Rotation on Compositor Thread) */}
          <div className="globe-sphere-gpu absolute w-[64px] h-[64px] [transform-style:preserve-3d]">
            {/* Longitude Meridians (Standing vertically at 30° radial intervals) */}
            <div className="globe-ring [transform:rotateY(0deg)] border-blue-400/60" />
            <div className="globe-ring [transform:rotateY(30deg)] border-sky-400/50" />
            <div className="globe-ring [transform:rotateY(60deg)] border-blue-300/55" />
            <div className="globe-ring [transform:rotateY(90deg)] border-sky-400/60" />
            <div className="globe-ring [transform:rotateY(120deg)] border-blue-400/50" />
            <div className="globe-ring [transform:rotateY(150deg)] border-sky-300/55" />

            {/* Latitude Parallels (Lying horizontally) */}
            <div className="globe-ring [transform:rotateX(90deg)] border-sky-400/70 border-[1.5px]" />
            <div className="globe-ring !w-[50px] !h-[50px] [transform:rotateX(90deg)_translateZ(18px)] border-sky-400/40" />
            <div className="globe-ring !w-[50px] !h-[50px] [transform:rotateX(90deg)_translateZ(-18px)] border-sky-400/40" />
          </div>

          {/* Tilted Satellite Orbit */}
          <div className="globe-orbit-gpu absolute w-[94px] h-[94px] rounded-full [transform-style:preserve-3d] pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-transparent border-t-sky-400/85 border-r-blue-500/40 border-l-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.3)]" />
            <div className="absolute -top-[3px] left-1/2 -ml-[3px] w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_8px_2px_#38bdf8]" />
          </div>
        </div>

        {/* Minimal Progress Line & Brand Tag */}
        <div className="mt-5 flex flex-col items-center space-y-2">
          <div className="relative w-24 h-[2px] rounded-full bg-muted/60 dark:bg-white/10 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shimmer-progress [transform:translateZ(0)]" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground/70 uppercase">
            Universal Language
          </span>
        </div>
      </div>

      <style>{`
        @keyframes spinGlobeGPU {
          from {
            transform: rotateX(-18deg) rotateY(0deg);
          }
          to {
            transform: rotateX(-18deg) rotateY(360deg);
          }
        }

        @keyframes spinOrbitGPU {
          from {
            transform: rotateX(72deg) rotateY(16deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(72deg) rotateY(16deg) rotateZ(360deg);
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

        .globe-sphere-gpu {
          will-change: transform;
          animation: spinGlobeGPU 3.2s linear infinite;
          transform: translateZ(0);
        }

        .globe-orbit-gpu {
          will-change: transform;
          animation: spinOrbitGPU 2.6s linear infinite;
          transform: translateZ(0);
        }

        .globe-ring {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border-width: 1px;
          border-style: solid;
          backface-visibility: visible;
          pointer-events: none;
        }

        .shimmer-progress {
          will-change: transform;
          animation: shimmerBar 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
