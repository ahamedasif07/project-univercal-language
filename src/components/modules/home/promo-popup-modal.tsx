"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export function PromoPopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically trigger modal on site load (after 1800ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for Escape key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  // WhatsApp link with selected course flyer details
  const phoneNumber = "8801772224283";
  const whatsappMessage = [
    "Hello Universal Language! I saw your Duolingo English Test (DET) course catalog on your website popup:",
    "📚 Program: Duolingo English Test Product Catalog",
    "🎯 Available Packages: Full Course (BDT 15,000) | Premium 1-to-1 (BDT 20,000) | Exam Purchase Support (BDT 10,000)",
    "🖼️ Selected Flyer: https://universallanguagebd.com/images/dialog-image.jpeg",
    "I would like to enroll / inquire about the Duolingo English Test preparation. Please guide me.",
  ].join("\n");

  const whatsappEnrollUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Duolingo English Test Catalog Offer"
    >
      {/* Softer, lighter backdrop with subtle blur (Clicking outside closes modal) */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-[2.5px] transition-opacity duration-500 animate-in fade-in cursor-pointer"
      />

      {/* Main Poster Container (Centrally aligned, responsive, 100% visible) */}
      <div className="relative z-10 w-full max-w-[380px] sm:max-w-[430px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 animate-in zoom-in-95 duration-300">
        {/* Sleek Close 'X' Button INSIDE the top-right corner of the image */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleClose();
          }}
          type="button"
          aria-label="Close Promo Popup"
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/30 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-30 shadow-lg hover:scale-110 active:scale-95 focus:outline-none"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Clickable Image: Opens WhatsApp directly */}
        <a
          href={whatsappEnrollUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="block relative aspect-[4/5] w-full cursor-pointer group select-none transition-transform duration-300 hover:scale-[1.01]"
          title="Click to open WhatsApp and inquire about Duolingo English Test"
        >
          <Image
            src="/images/dialog-image.jpeg"
            alt="Universal Language Duolingo English Test Product Catalog"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 430px"
            className="object-contain w-full h-full"
          />
        </a>
      </div>
    </div>
  );
}

export default PromoPopupModal;
