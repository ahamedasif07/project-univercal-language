"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-5.522 0-10 4.477-10 10 0 1.769.459 3.498 1.338 5.023l-1.422 5.195 5.344-1.401c1.465.799 3.117 1.22 4.74 1.22 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function PromoPopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open when site opens (runs on initial mount with a smooth delay)
  useEffect(() => {
    // Check if dismissed in this browser session
    const isDismissed = sessionStorage.getItem("ul_promo_modal_dismissed");
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("ul_promo_modal_dismissed", "true");
  }, []);

  // WhatsApp link with selected course flyer details
  const phoneNumber = "8801772224283";
  const whatsappMessage = [
    "Hello Universal Language! I saw your Special Offer admission flyer on your website popup:",
    "📚 Course: PTE Premium Course (35% OFF Special)",
    "🎯 Offer: 35% Instant Discount • 18 Live Classes • 4-8 Students Mini-Batch • 1 Month AI Portal • 5 Mock Tests",
    "🖼️ Selected Flyer: https://universallanguagebd.com/images/dic-image-1.jpeg",
    "I would like to enroll in this course. Please share the batch timing and admission details.",
  ].join("\n");

  const whatsappEnrollUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        hideCloseButton
        className="w-[90vw] max-w-[390px] sm:max-w-[430px] p-0 border-none bg-transparent shadow-none overflow-visible flex items-center justify-center focus:outline-none"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Special Admission Offer — Universal Language</DialogTitle>
          <DialogDescription>
            PTE Premium Course 35% Discount Special Admission Offer Flyer
          </DialogDescription>
        </DialogHeader>

        {/* Modal Wrapper - Pure Flyer Image Display */}
        <div className="relative w-full overflow-visible">
          {/* Sleek Floating Close Button (Positioned safely outside the image) */}
          <DialogClose
            onClick={handleClose}
            className="absolute -top-11 right-0 sm:-right-2 w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-30 focus:outline-none shadow-xl hover:scale-110 active:scale-95"
            aria-label="Close Offer Popup"
          >
            <X className="w-4 h-4" />
          </DialogClose>

          {/* Clickable Image: Opens WhatsApp with course data */}
          <a
            href={whatsappEnrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="block relative aspect-[4/5] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer bg-slate-950 select-none"
            title="Click to Enroll on WhatsApp with 35% Discount"
          >
            <Image
              src="/images/dic-image-1.jpeg"
              alt="Universal Language PTE Premium Course Special Offer 35% Off"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 430px"
              className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-[1.01]"
            />

            {/* Glowing Ambient WhatsApp Enroll Action Pill */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-2xl border border-white/25 transition-all duration-300 group-hover:scale-105 active:scale-95">
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Click Image to Enroll on WhatsApp</span>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PromoPopupModal;
