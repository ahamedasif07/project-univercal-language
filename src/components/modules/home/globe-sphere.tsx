"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// PTE service labels — glowing sprites on globe surface
const SERVICE_LABELS = [
  { text: "79+",       color: "#f59e0b" },
  { text: "PTE",       color: "#93c5fd" },
  { text: "Speaking",  color: "#6ee7b7" },
  { text: "Writing",   color: "#c4b5fd" },
  { text: "Listening", color: "#67e8f9" },
  { text: "Reading",   color: "#fca5a5" },
  { text: "Pearson",   color: "#7dd3fc" },
  { text: "AI Score",  color: "#f9a8d4" },
  { text: "Mock",      color: "#fde68a" },
  { text: "IELTS",     color: "#86efac" },
  { text: "1-on-1",    color: "#d8b4fe" },
  { text: "Exam BD",   color: "#99f6e4" },
];

// ── Per-theme colour palette ────────────────────────────────────────────────
const THEME = {
  dark: {
    inner:        { color: 0x0a1e3d, emissive: 0x050d1c, opacity: 0.88 },
    wire:         { color: 0xb8ccee, opacity: 0.30 },
    atmo:         { color: 0x1a4fb5, opacity: 0.08 },
    rings:        [
      { color: 0xd0ddf5, opacity: 0.70 },
      { color: 0x9fb8e8, opacity: 0.50 },
      { color: 0x7a9ad4, opacity: 0.32 },
    ],
    ambient:      { color: 0x263d66, intensity: 3.0 },
    dir1:         { color: 0x6699ff, intensity: 3.5, pos: new THREE.Vector3(5, 7, 4) },
    dir2:         { color: 0x223366, intensity: 1.2, pos: new THREE.Vector3(-4, -2, -3) },
    stars:        { color: 0xffffff, opacity: 0.50 },
    label:        { opacity: 0.92, shadowBlur: 22 },
  },
  light: {
    inner:        { color: 0xd0e8ff, emissive: 0xadd0f8, opacity: 0.52 },
    wire:         { color: 0x0a2d6e, opacity: 0.42 },   // deep navy-blue
    atmo:         { color: 0x3366cc, opacity: 0.05 },
    rings:        [
      { color: 0x0d4fa0, opacity: 0.55 },
      { color: 0x0b3d88, opacity: 0.38 },
      { color: 0x092e6a, opacity: 0.22 },
    ],
    ambient:      { color: 0x6688cc, intensity: 4.0 },
    dir1:         { color: 0x2255cc, intensity: 3.0, pos: new THREE.Vector3(5, 7, 4) },
    dir2:         { color: 0x7788bb, intensity: 1.5, pos: new THREE.Vector3(-4, -2, -3) },
    stars:        { color: 0x1a2a4a, opacity: 0.08 },
    label:        { opacity: 1.0,   shadowBlur: 0 },
  },
} as const;
type Theme = keyof typeof THEME;

function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function GlobeSphere() {
  const mountRef    = useRef<HTMLDivElement>(null);
  const frameRef    = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const W = container.clientWidth;
    const H = container.clientHeight;
    let t: Theme = currentTheme();
    let C = THEME[t];

    // ── SCENE ───────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── CAMERA — FOV wide enough to show globe + rings without clipping ─────
    // z=6.2 + FOV=54 gives comfortable framing for sphere r≈1.9 + rings r≈3.2
    const camera = new THREE.PerspectiveCamera(54, W / H, 0.1, 200);
    camera.position.set(0, 0, 6.2);

    // ── RENDERER — alpha transparent (inherits page bg) ─────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── STARFIELD ────────────────────────────────────────────────────────────
    const STAR_N = 300;
    const starBuf = new Float32Array(STAR_N * 3);
    for (let i = 0; i < STAR_N; i++) {
      starBuf[i * 3]     = (Math.random() - 0.5) * 80;
      starBuf[i * 3 + 1] = (Math.random() - 0.5) * 80;
      starBuf[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starBuf, 3));
    const starMat = new THREE.PointsMaterial({
      color: C.stars.color, size: 0.07,
      transparent: true, opacity: C.stars.opacity,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── GLOBE GROUP ──────────────────────────────────────────────────────────
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // ── TRIANGULAR WIREFRAME ONLY (interior fully transparent) ───────────────
    // 22×18 segments gives dense triangular geodesic look matching reference
    const wireGeo = new THREE.SphereGeometry(1.91, 22, 18);
    const wireMat = new THREE.MeshBasicMaterial({
      color: C.wire.color, wireframe: true,
      transparent: true, opacity: C.wire.opacity,
    });
    globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    // ── LIGHTING ─────────────────────────────────────────────────────────────
    const ambLight = new THREE.AmbientLight(C.ambient.color, C.ambient.intensity);
    scene.add(ambLight);
    const dir1 = new THREE.DirectionalLight(C.dir1.color, C.dir1.intensity);
    dir1.position.copy(C.dir1.pos); scene.add(dir1);
    const dir2 = new THREE.DirectionalLight(C.dir2.color, C.dir2.intensity);
    dir2.position.copy(C.dir2.pos); scene.add(dir2);

    // ── LABEL SPRITES ────────────────────────────────────────────────────────
    function makeSprite(text: string, color: string): THREE.Sprite {
      const isLight = t === "light";
      const cv      = document.createElement("canvas");
      cv.width = 320; cv.height = 96;
      const ctx = cv.getContext("2d")!;
      ctx.clearRect(0, 0, 320, 96);
      ctx.font         = "bold 40px Inter,sans-serif";
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";
      if (isLight) {
        // White halo + dark inner stroke → readable on any light bg
        ctx.strokeStyle = "rgba(255,255,255,0.96)";
        ctx.lineWidth   = 8; ctx.lineJoin = "round";
        ctx.strokeText(text, 160, 48);
        ctx.strokeStyle = "rgba(5,15,45,0.55)";
        ctx.lineWidth   = 3;
        ctx.strokeText(text, 160, 48);
      } else {
        ctx.shadowColor = color;
        ctx.shadowBlur  = C.label.shadowBlur;
      }
      ctx.fillStyle = color;
      ctx.fillText(text, 160, 48);
      const tex = new THREE.CanvasTexture(cv);
      const mat = new THREE.SpriteMaterial({
        map: tex, transparent: true, opacity: C.label.opacity, depthWrite: false,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.95, 0.32, 1);
      return sp;
    }

    // Golden-ratio spiral distribution
    SERVICE_LABELS.forEach((lbl, i) => {
      const sp     = makeSprite(lbl.text, lbl.color);
      const golden = Math.PI * (3 - Math.sqrt(5));
      const y      = 1 - (i / (SERVICE_LABELS.length - 1)) * 2;
      const rad    = Math.sqrt(Math.max(0, 1 - y * y));
      const ang    = golden * i;
      const r      = 2.04;
      sp.position.set(r * rad * Math.cos(ang), r * y, r * rad * Math.sin(ang));
      globeGroup.add(sp);
    });

    // ── THEME MUTATION → live material update ─────────────────────────────
    function applyTheme() {
      C = THEME[t];
      (wireMat as THREE.MeshBasicMaterial).color.setHex(C.wire.color);
      wireMat.opacity  = C.wire.opacity;
      starMat.color.setHex(C.stars.color);
      starMat.opacity = C.stars.opacity;
      ambLight.color.setHex(C.ambient.color);
      ambLight.intensity = C.ambient.intensity;
      dir1.color.setHex(C.dir1.color); dir1.intensity = C.dir1.intensity;
    }
    const observer = new MutationObserver(() => {
      const nxt = currentTheme();
      if (nxt === t) return;
      t = nxt; applyTheme();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // ── MOUSE DRAG ───────────────────────────────────────────────────────────
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

    // ── ANIMATION ────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      if (!dragging) {
        globeGroup.rotation.y += 0.0008;                     // slow steady spin
        globeGroup.rotation.x  = Math.sin(elapsed * 0.12) * 0.04; // gentle tilt
      } else {
        vx *= 0.9; vy *= 0.9;
      }
      // Rings removed — globe only
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

    // ── CLEANUP ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full" aria-label="Interactive 3D Globe">
      {/*
        overflow:visible so the outermost ring can bleed beyond the div edge
        (the section's overflow-x-clip clips the page scroll — not this canvas)
      */}
      <div
        ref={mountRef}
        className="w-full h-[460px] sm:h-[530px] lg:h-[580px] cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none", overflow: "visible" }}
      />
      <p className="mt-1 text-[10px] font-medium text-muted-foreground/45 tracking-widest select-none uppercase text-center">
        🌐 Drag to rotate · Auto-spinning
      </p>
    </div>
  );
}
