"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { X, GraduationCap, FileText, Globe2, ChevronRight } from "lucide-react";

// ── Country destination data ─────────────────────────────────────────────────
const COUNTRIES = [
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    lat: -25,
    lon: 133,
    exams: [
      { name: "PTE Academic", score: "65+", preferred: true },
      { name: "IELTS",        score: "6.0+" },
    ],
    visas: ["Student Visa (Subclass 500)", "Skilled Independent (189)", "TSS Visa (482)"],
    highlight: "Most popular destination for Bangladeshi students. PTE accepted at 99% of universities.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    lat: 54,
    lon: -2,
    exams: [
      { name: "PTE Academic", score: "51+", preferred: true },
      { name: "IELTS",        score: "5.5+" },
    ],
    visas: ["Student Visa", "Skilled Worker Visa", "Graduate Visa"],
    highlight: "UK Graduate Route lets you stay 2 years post-study. PTE widely accepted.",
  },
  {
    id: "ca",
    name: "Canada",
    flag: "🇨🇦",
    lat: 56,
    lon: -96,
    exams: [
      { name: "PTE Academic", score: "65+", preferred: true },
      { name: "IELTS",        score: "6.0+" },
    ],
    visas: ["Study Permit", "Express Entry (PR)", "PNP"],
    highlight: "Express Entry PR pathway open to PTE Academic holders. Fast processing.",
  },
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    lat: 37,
    lon: -95,
    exams: [
      { name: "TOEFL",        score: "80+" },
      { name: "IELTS",        score: "6.5+" },
      { name: "PTE Academic", score: "53+" },
    ],
    visas: ["F-1 Student Visa", "H-1B Work Visa", "OPT/CPT"],
    highlight: "PTE increasingly accepted. OPT allows 3 years post-study work for STEM.",
  },
  {
    id: "nz",
    name: "New Zealand",
    flag: "🇳🇿",
    lat: -40,
    lon: 174,
    exams: [
      { name: "PTE Academic", score: "50+", preferred: true },
      { name: "IELTS",        score: "5.5+" },
    ],
    visas: ["Student Visa", "Skilled Migrant Category", "Post-Study Work Visa"],
    highlight: "Post-study work visa for 1–3 years. PTE accepted nationwide.",
  },
  {
    id: "de",
    name: "Germany",
    flag: "🇩🇪",
    lat: 51,
    lon: 10,
    exams: [
      { name: "IELTS",        score: "6.0+" },
      { name: "PTE Academic", score: "59+" },
    ],
    visas: ["Student Visa", "Job Seeker Visa", "EU Blue Card"],
    highlight: "Many programs taught in English. No tuition fee at public universities.",
  },
  {
    id: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    lat: 1,
    lon: 103,
    exams: [
      { name: "PTE Academic", score: "50+", preferred: true },
      { name: "IELTS",        score: "6.0+" },
    ],
    visas: ["Student Pass", "Employment Pass", "S Pass"],
    highlight: "Financial hub of Asia. Strong job market. PTE preferred by NUS, NTU.",
  },
  {
    id: "ie",
    name: "Ireland",
    flag: "🇮🇪",
    lat: 53,
    lon: -8,
    exams: [
      { name: "PTE Academic", score: "60+", preferred: true },
      { name: "IELTS",        score: "6.0+" },
    ],
    visas: ["Study Visa", "Critical Skills Permit", "General Employment Permit"],
    highlight: "EU gateway. 2-year graduate stay-back. Tech hub for Google, Meta, Apple.",
  },
  {
    id: "ae",
    name: "UAE",
    flag: "🇦🇪",
    lat: 24,
    lon: 54,
    exams: [
      { name: "PTE Academic", score: "45+" },
      { name: "IELTS",        score: "5.5+" },
    ],
    visas: ["Student Visa", "Skilled Worker Visa", "Golden Visa"],
    highlight: "Tax-free salaries. Rapidly growing education sector. PTE accepted widely.",
  },
  {
    id: "jp",
    name: "Japan",
    flag: "🇯🇵",
    lat: 36,
    lon: 138,
    exams: [
      { name: "IELTS",        score: "5.5+" },
      { name: "PTE Academic", score: "42+" },
      { name: "JLPT",         score: "N4+" },
    ],
    visas: ["Student Visa", "Skilled Labour Visa", "Specified Skilled Worker"],
    highlight: "Scholarships from MEXT. Engineering & tech demand high. Low cost of living.",
  },
] as const;

type Country = (typeof COUNTRIES)[number];

// ── Theme colours ────────────────────────────────────────────────────────────
const PALETTE = {
  dark:  { wire: 0xb8ccee, wireOp: 0.28 },
  light: { wire: 0x0a2d6e, wireOp: 0.40 },
};
type ThemeKey = keyof typeof PALETTE;

function currentTheme(): ThemeKey {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// ── Flag sprite — emoji only, no background ─────────────────────────────────
function makeFlagCanvas(flag: string): HTMLCanvasElement {
  const cv = document.createElement("canvas");
  cv.width = 128; cv.height = 128;
  const ctx = cv.getContext("2d")!;
  ctx.clearRect(0, 0, 128, 128);
  ctx.font = "88px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(flag, 64, 72);
  return cv;
}

// ── lat/lon → 3D sphere position ─────────────────────────────────────────────
function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r  * Math.cos(phi),
    r  * Math.sin(phi) * Math.sin(theta),
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export function GlobeSphere() {
  const mountRef   = useRef<HTMLDivElement>(null);
  const frameRef   = useRef<number>(0);
  const callbackRef = useRef<((id: string) => void) | null>(null);

  const [selected, setSelected] = useState<Country | null>(null);

  useEffect(() => {
    callbackRef.current = (id: string) => {
      const c = COUNTRIES.find((x) => x.id === id) ?? null;
      setSelected(c);
    };
  });

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const W = container.clientWidth;
    const H = container.clientHeight;
    let thm: ThemeKey = currentTheme();
    let P = PALETTE[thm];

    // ── SCENE ────────────────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(56, W / H, 0.1, 200);
    camera.position.set(0, 0.15, 5.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── STARS ────────────────────────────────────────────────────────────────
    const starBuf = new Float32Array(280 * 3);
    for (let i = 0; i < 280; i++) {
      starBuf[i * 3]     = (Math.random() - 0.5) * 80;
      starBuf[i * 3 + 1] = (Math.random() - 0.5) * 80;
      starBuf[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starBuf, 3));
    const starMat = new THREE.PointsMaterial({
      color: thm === "dark" ? 0xffffff : 0x1a2a4a,
      size: 0.065, transparent: true,
      opacity: thm === "dark" ? 0.45 : 0.08,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── GLOBE GROUP ──────────────────────────────────────────────────────────
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Wireframe — 16×12 spacious triangular grid, smaller radius to prevent clipping
    const wireGeo = new THREE.SphereGeometry(2.1, 16, 12);
    const wireMat = new THREE.MeshBasicMaterial({
      color: P.wire, wireframe: true,
      transparent: true, opacity: P.wireOp,
    });
    globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    // ── FLAG SPRITES ─────────────────────────────────────────────────────────
    const spriteMap = new Map<THREE.Sprite, string>(); // sprite → country id

    COUNTRIES.forEach((country) => {
      const cv  = makeFlagCanvas(country.flag);
      const tex = new THREE.CanvasTexture(cv);
      const mat = new THREE.SpriteMaterial({
        map: tex, transparent: true, opacity: 0.95, depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(0.50, 0.50, 1);

      const pos = latLonToVec3(country.lat, country.lon, 2.3);
      sprite.position.copy(pos);

      globeGroup.add(sprite);
      spriteMap.set(sprite, country.id);
    });

    // ── LIGHTING ─────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x334466, 2.8));
    const dir = new THREE.DirectionalLight(0x6699ff, 3.2);
    dir.position.set(5, 7, 4);
    scene.add(dir);

    // ── RAYCASTER for flag click ─────────────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    const pointer   = new THREE.Vector2();
    const sprites   = Array.from(spriteMap.keys());

    const onClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      pointer.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(sprites);
      if (hits.length > 0) {
        const id = spriteMap.get(hits[0].object as THREE.Sprite);
        if (id && callbackRef.current) callbackRef.current(id);
      }
    };
    renderer.domElement.addEventListener("click", onClick);

    // ── THEME OBSERVER ───────────────────────────────────────────────────────
    const observer = new MutationObserver(() => {
      const n = currentTheme();
      if (n === thm) return;
      thm = n; P = PALETTE[thm];
      (wireMat as THREE.MeshBasicMaterial).color.setHex(P.wire);
      wireMat.opacity = P.wireOp;
      starMat.color.setHex(thm === "dark" ? 0xffffff : 0x1a2a4a);
      starMat.opacity = thm === "dark" ? 0.45 : 0.08;
    });
    observer.observe(document.documentElement, {
      attributes: true, attributeFilter: ["class"],
    });

    // ── DRAG ────────────────────────────────────────────────────────────────
    let dragging = false, px = 0, py = 0, vx = 0, vy = 0;
    const onDown = (e: MouseEvent) => { dragging = true; px = e.clientX; py = e.clientY; };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      vx = (e.clientY - py) * 0.003; vy = (e.clientX - px) * 0.003;
      globeGroup.rotation.x += vx; globeGroup.rotation.y += vy;
      px = e.clientX; py = e.clientY;
    };
    const onUp = () => { dragging = false; };
    renderer.domElement.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    // ── ANIMATE ──────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!dragging) {
        globeGroup.rotation.y += 0.0008;
        globeGroup.rotation.x = Math.sin(t * 0.12) * 0.04;
      } else { vx *= 0.9; vy *= 0.9; }
      renderer.render(scene, camera);
    };
    animate();

    // ── RESIZE ───────────────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.domElement.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full" aria-label="Interactive 3D World Globe">
      {/* Three.js canvas */}
      <div
        ref={mountRef}
        className="w-full h-[420px] sm:h-[480px] lg:h-[520px] cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none", overflow: "visible" }}
      />

      <p className="mt-1 text-[10px] font-medium text-muted-foreground/40 tracking-widest select-none uppercase text-center">
        🌐 Click a flag · Drag to rotate
      </p>

      {/* ── COUNTRY POPUP ────────────────────────────────────────────────── */}
      {selected && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            className="pointer-events-auto w-[92%] max-w-sm rounded-2xl border border-white/10 dark:border-white/10
              bg-white/95 dark:bg-[#0d1b33]/96 backdrop-blur-xl shadow-2xl
              p-5 animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl leading-none">{selected.flag}</span>
                <div>
                  <h3 className="text-base font-black text-foreground leading-tight">
                    {selected.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Globe2 className="w-3 h-3" />
                    Study &amp; Immigration Destination
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full p-1.5 hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Highlight */}
            <p className="text-[12px] text-muted-foreground leading-relaxed mb-4 border-l-2 border-primary pl-3">
              {selected.highlight}
            </p>

            {/* Exam Requirements */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Required Exams
              </h4>
              <div className="flex flex-wrap gap-2">
                {selected.exams.map((ex) => (
                  <div
                    key={ex.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border transition-all ${
                      "preferred" in ex && ex.preferred
                        ? "bg-primary/10 border-primary/30 text-primary dark:text-blue-300"
                        : "bg-muted/50 border-border text-foreground/80"
                    }`}
                  >
                    <span>{ex.name}</span>
                    <span className="font-black">{ex.score}</span>
                    {"preferred" in ex && ex.preferred && (
                      <span className="text-[9px] bg-primary text-white rounded px-1 py-0.5 uppercase font-bold">
                        Preferred
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Types */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Available Visa Pathways
              </h4>
              <ul className="space-y-1">
                {selected.visas.map((v) => (
                  <li key={v} className="flex items-center gap-2 text-[12px] text-foreground/90">
                    <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0b3a82] to-blue-600
                text-white text-[12px] font-bold tracking-wide hover:opacity-90
                transition-all active:scale-[0.98] shadow-md"
              onClick={() => setSelected(null)}
            >
              Book Free Consultation →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
