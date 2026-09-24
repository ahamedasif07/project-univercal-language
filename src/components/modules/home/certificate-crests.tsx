import React from "react";

// Official Government of Bangladesh NSDA Emblem (Prime Minister's Office)
export function GovCrest({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Government of Bangladesh NSDA Official Seal"
    >
      <circle cx="50" cy="50" r="48" fill="#006a4e" stroke="#d4af37" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" fill="#00503a" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 2" />
      {/* Central Red Sun / Seal */}
      <circle cx="50" cy="50" r="28" fill="#f42a41" stroke="#d4af37" strokeWidth="1.5" />
      {/* Stylized Shapla (National Water Lily) */}
      <path
        d="M50 34C48 40 44 46 38 48C44 50 48 54 50 62C52 54 56 50 62 48C56 46 52 40 50 34Z"
        fill="#ffffff"
      />
      <path
        d="M50 39C49 43 46 47 42 48C46 50 49 53 50 58C51 53 54 50 58 48C54 47 51 43 50 39Z"
        fill="#d4af37"
      />
      {/* Stars on top */}
      <polygon points="44,22 45,24 47,24 45.5,25.5 46,27.5 44,26 42,27.5 42.5,25.5 41,24 43,24" fill="#d4af37" />
      <polygon points="56,22 57,24 59,24 57.5,25.5 58,27.5 56,26 54,27.5 54.5,25.5 53,24 55,24" fill="#d4af37" />
      <polygon points="40,26 41,27.5 42.5,27.5 41.5,28.5 42,30 40,29 38,30 38.5,28.5 37.5,27.5 39,27.5" fill="#d4af37" />
      <polygon points="60,26 61,27.5 62.5,27.5 61.5,28.5 62,30 60,29 58,30 58.5,28.5 57.5,27.5 59,27.5" fill="#d4af37" />
      {/* Laurel leaves bottom */}
      <path
        d="M30 66C35 74 44 76 50 76C56 76 65 74 70 66C64 71 56 72 50 72C44 72 36 71 30 66Z"
        fill="#d4af37"
      />
      {/* Curved text simulation ring */}
      <circle cx="50" cy="50" r="39" stroke="#d4af37" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

// Official Pearson Education Academic Shield Crest
export function PearsonCrest({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pearson Education Academic Crest"
    >
      <circle cx="50" cy="50" r="48" fill="#002b66" stroke="#c5a059" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" fill="#0b3a82" stroke="#ffffff" strokeWidth="0.75" strokeOpacity="0.4" />
      {/* Academic Shield Base */}
      <path
        d="M32 28H68C68 48 58 66 50 72C42 66 32 48 32 28Z"
        fill="#001d4a"
        stroke="#c5a059"
        strokeWidth="2"
      />
      {/* Intersecting Pearson Geometric Curve (The P helix) */}
      <path
        d="M50 32C42 32 36 38 36 46C36 54 42 60 50 60C58 60 64 54 64 46C64 38 58 32 50 32Z"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      {/* Open Book of Academic Excellence */}
      <path
        d="M40 46C44 44 48 45 50 48C52 45 56 44 60 46V56C56 54 52 55 50 58C48 55 44 54 40 56V46Z"
        fill="#c5a059"
      />
      {/* Academic Star */}
      <polygon points="50,34 51.5,38 55,38 52,40 53.5,44 50,42 46.5,44 48,40 45,38 48.5,38" fill="#ffffff" />
      {/* Latin Ribbon Banner below */}
      <path
        d="M26 74L35 70L50 74L65 70L74 74L71 79L50 82L29 79L26 74Z"
        fill="#c5a059"
        stroke="#001d4a"
        strokeWidth="1"
      />
    </svg>
  );
}

// Official Classical Seal for International Assessment Partner (Heraldic, No AI/Robot/Sparkle)
export function AlfaCrest({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Official Assessment Partner Seal"
    >
      <circle cx="50" cy="50" r="48" fill="#0f1f38" stroke="#c5a059" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" fill="#132747" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
      {/* Classical Academic Laurel Wreath */}
      <path
        d="M26 50C26 62 34 72 50 76C66 72 74 62 74 50C74 38 66 28 50 24C34 28 26 38 26 50Z"
        stroke="#c5a059"
        strokeWidth="1.5"
      />
      {/* Classical Inner Heraldic Shield */}
      <path
        d="M36 34H64C64 48 56 60 50 64C44 60 36 48 36 34Z"
        fill="#0b172a"
        stroke="#d4af37"
        strokeWidth="2"
      />
      {/* Globe / Compass Motif */}
      <circle cx="50" cy="46" r="10" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
      <ellipse cx="50" cy="46" rx="5" ry="10" stroke="#c5a059" strokeWidth="1" />
      <line x1="40" y1="46" x2="60" y2="46" stroke="#c5a059" strokeWidth="1" />
      {/* Stars on Perimeter */}
      <polygon points="50,26 51,28 53,28 51.5,29 52,31 50,30 48,31 48.5,29 47,28 49,28" fill="#d4af37" />
    </svg>
  );
}

// Official Bangladesh Government ICT Authority Seal (Classical Official Seal)
export function IctCrest({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bangladesh ICT Division Official Seal"
    >
      <circle cx="50" cy="50" r="48" fill="#0b2e2b" stroke="#d4af37" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" fill="#0f3b37" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
      {/* Central Official Ring */}
      <circle cx="50" cy="50" r="28" fill="#144d47" stroke="#d4af37" strokeWidth="1.5" />
      {/* National Star & Crest Motif */}
      <path
        d="M50 32L53 42H63L55 48L58 58L50 52L42 58L45 48L37 42H47L50 32Z"
        fill="#d4af37"
        stroke="#0b2e2b"
        strokeWidth="0.5"
      />
      {/* Official Laurel Base */}
      <path
        d="M30 68C36 74 43 76 50 76C57 76 64 74 70 68"
        stroke="#d4af37"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3D Embossed Gold Official Wax Stamp Seal with Draped Ribbon
export function OfficialWaxSeal({
  sealText = "OFFICIAL AUTHENTICATED VERIFIED",
  size = 96,
}: {
  sealText?: string;
  size?: number;
}) {
  return (
    <div
      className="relative flex flex-col items-center select-none"
      style={{ width: `${size}px` }}
    >
      {/* Draped Ribbon Tails */}
      <div
        className="absolute top-[68%] flex justify-center gap-2 pointer-events-none -z-0"
        style={{ width: `${size * 0.9}px` }}
      >
        <div className="w-5 sm:w-6 h-9 sm:h-11 bg-gradient-to-b from-[#8f1d22] via-[#a8242a] to-[#701519] border-x border-[#590f13] shadow-md transform -rotate-12 origin-top [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]" />
        <div className="w-5 sm:w-6 h-9 sm:h-11 bg-gradient-to-b from-[#8f1d22] via-[#a8242a] to-[#701519] border-x border-[#590f13] shadow-md transform rotate-12 origin-top [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]" />
      </div>

      {/* Outer Golden Scalloped Medallion */}
      <div
        className="relative rounded-full p-1.5 shadow-[0_8px_20px_rgba(180,130,40,0.35),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(90,60,10,0.5)] border-2 border-[#fff2b2] z-10"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background:
            "radial-gradient(circle at 35% 30%, #fff6cc 0%, #e6be68 25%, #c59b27 60%, #876211 100%)",
        }}
      >
        {/* Inner Stamped Ring */}
        <div className="w-full h-full rounded-full border border-dashed border-[#694b0a]/70 flex flex-col items-center justify-center p-1 bg-gradient-to-b from-[#eed48f] via-[#cfa73a] to-[#a37916] text-[#4a3405] shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#5c4006] flex items-center justify-center bg-[#b88c1f]/40 mb-0.5">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-[#3d2a02] stroke-[#3d2a02]"
              strokeWidth="0.5"
            >
              <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" />
            </svg>
          </div>

          <span className="text-[7.5px] sm:text-[8px] font-black uppercase tracking-tight text-[#3b2903] text-center leading-[1.1] font-sans drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
            VERIFIED
          </span>
          <span className="text-[6.5px] sm:text-[7px] font-bold uppercase tracking-widest text-[#573d06] leading-tight">
            AUTHENTIC
          </span>
          <span className="text-[5.5px] font-semibold tracking-tighter text-[#4a3405]/80 mt-0.5">
            ★ OFFICIAL ★
          </span>
        </div>
      </div>

      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-muted-foreground mt-2 text-center max-w-[130px] line-clamp-1">
        {sealText}
      </span>
    </div>
  );
}

// Realistic Signatures with Calligraphic Paths
export function SignatureBlock({
  signatoryName,
  signatoryRole,
  signatoryOrganization,
  logoType = "gov",
}: {
  signatoryName: string;
  signatoryRole: string;
  signatoryOrganization: string;
  logoType?: "gov" | "pearson" | "alfa" | "ict";
}) {
  return (
    <div className="space-y-1 text-center sm:text-left select-none">
      <div className="h-10 sm:h-12 flex items-end justify-center sm:justify-start pb-1">
        {logoType === "gov" && (
          <svg viewBox="0 0 160 45" className="h-9 sm:h-11 w-32 sm:w-40 text-blue-900 dark:text-blue-300">
            <path
              d="M10 32C22 18 35 12 42 22C46 29 32 38 48 30C62 23 85 10 98 25C108 36 94 40 120 28C136 21 148 18 155 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 36C45 35 90 34 140 33"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="2 3"
            />
          </svg>
        )}
        {logoType === "pearson" && (
          <svg viewBox="0 0 160 45" className="h-9 sm:h-11 w-32 sm:w-40 text-indigo-900 dark:text-indigo-300">
            <path
              d="M15 35C18 20 24 10 32 12C42 14 36 32 46 28C54 24 62 14 74 18C82 20 78 32 88 28C102 22 120 12 135 20C142 24 148 22 152 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 37C60 36 100 35 145 34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        )}
        {logoType === "alfa" && (
          <svg viewBox="0 0 160 45" className="h-9 sm:h-11 w-32 sm:w-40 text-cyan-900 dark:text-cyan-300">
            <path
              d="M12 28C24 14 34 8 45 22C52 30 65 14 80 18C92 22 105 32 118 24C128 18 140 22 152 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M30 35L130 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        )}
        {logoType === "ict" && (
          <svg viewBox="0 0 160 45" className="h-9 sm:h-11 w-32 sm:w-40 text-emerald-900 dark:text-emerald-300">
            <path
              d="M10 26C20 12 36 10 44 24C50 34 60 18 72 20C88 22 96 32 112 24C126 16 138 20 150 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M20 36C65 34 110 33 145 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <div className="pt-1 border-t border-slate-400/80 dark:border-slate-600">
        <div className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
          {signatoryName}
        </div>
        <div className="text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:text-slate-300">
          {signatoryRole}
        </div>
        <div className="text-[9px] sm:text-[10px] text-muted-foreground leading-tight">
          {signatoryOrganization}
        </div>
      </div>
    </div>
  );
}

// Ornate Corner Flourishes
export function CertificateCorners() {
  return (
    <>
      <div className="absolute top-2.5 left-2.5 w-10 h-10 pointer-events-none text-amber-700/60 dark:text-amber-400/50">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path d="M2 38V2H38" stroke="currentColor" strokeWidth="2.5" />
          <path d="M6 34V6H34" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="10" cy="10" r="3" fill="currentColor" />
          <path d="M10 20C15 15 20 10 20 10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute top-2.5 right-2.5 w-10 h-10 pointer-events-none text-amber-700/60 dark:text-amber-400/50">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path d="M38 38V2H2" stroke="currentColor" strokeWidth="2.5" />
          <path d="M34 34V6H6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="30" cy="10" r="3" fill="currentColor" />
          <path d="M30 20C25 15 20 10 20 10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-2.5 left-2.5 w-10 h-10 pointer-events-none text-amber-700/60 dark:text-amber-400/50">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path d="M2 2V38H38" stroke="currentColor" strokeWidth="2.5" />
          <path d="M6 6V34H34" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="10" cy="30" r="3" fill="currentColor" />
          <path d="M10 20C15 25 20 30 20 30" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-2.5 right-2.5 w-10 h-10 pointer-events-none text-amber-700/60 dark:text-amber-400/50">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path d="M38 2V38H2" stroke="currentColor" strokeWidth="2.5" />
          <path d="M34 6V34H6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <path d="M30 20C25 25 20 30 20 30" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
}

// Clean Vector QR Code Simulation
export function CertificateQrCode({ code }: { code: string }) {
  return (
    <div className="flex flex-col items-center sm:items-end">
      <div className="p-1.5 bg-white rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center">
        <svg viewBox="0 0 60 60" className="w-14 h-14 text-slate-900" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" fill="currentColor" />
          <rect x="7" y="7" width="10" height="10" fill="white" />
          <rect x="9" y="9" width="6" height="6" fill="currentColor" />

          <rect x="40" y="4" width="16" height="16" fill="currentColor" />
          <rect x="43" y="7" width="10" height="10" fill="white" />
          <rect x="45" y="9" width="6" height="6" fill="currentColor" />

          <rect x="4" y="40" width="16" height="16" fill="currentColor" />
          <rect x="7" y="43" width="10" height="10" fill="white" />
          <rect x="9" y="45" width="6" height="6" fill="currentColor" />

          <rect x="23" y="6" width="3" height="3" />
          <rect x="29" y="6" width="3" height="3" />
          <rect x="35" y="6" width="3" height="3" />
          <rect x="6" y="23" width="3" height="3" />
          <rect x="6" y="29" width="3" height="3" />
          <rect x="6" y="35" width="3" height="3" />

          <rect x="23" y="23" width="14" height="14" rx="2" fill="#0b3a82" />
          <circle cx="30" cy="30" r="3" fill="#ffffff" />

          <rect x="40" y="23" width="4" height="4" />
          <rect x="48" y="23" width="4" height="4" />
          <rect x="44" y="30" width="5" height="4" />
          <rect x="52" y="32" width="4" height="4" />
          <rect x="24" y="42" width="4" height="4" />
          <rect x="32" y="44" width="5" height="4" />
          <rect x="42" y="42" width="4" height="4" />
          <rect x="50" y="44" width="6" height="4" />
          <rect x="42" y="50" width="6" height="4" />
        </svg>
      </div>
      <div className="text-[9px] font-mono text-muted-foreground mt-1 text-center sm:text-right">
        SCAN TO VERIFY
      </div>
    </div>
  );
}
