"use client";

import React, { useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Lock,
  Calendar,
} from "lucide-react";
import {
  CertificationItem,
  OFFICIAL_CERTIFICATIONS,
} from "@/data/certifications";
import {
  GovCrest,
  PearsonCrest,
  AlfaCrest,
  IctCrest,
  OfficialWaxSeal,
  CertificateCorners,
} from "./certificate-crests";

interface CertificateModalProps {
  certificate: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectCertificate: (cert: CertificationItem) => void;
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
  onSelectCertificate,
}: CertificateModalProps) {
  const currentIndex = certificate
    ? OFFICIAL_CERTIFICATIONS.findIndex((c) => c.id === certificate.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIndex =
      currentIndex > 0
        ? currentIndex - 1
        : OFFICIAL_CERTIFICATIONS.length - 1;
    onSelectCertificate(OFFICIAL_CERTIFICATIONS[prevIndex]);
  }, [currentIndex, onSelectCertificate]);

  const handleNext = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIndex =
      currentIndex < OFFICIAL_CERTIFICATIONS.length - 1
        ? currentIndex + 1
        : 0;
    onSelectCertificate(OFFICIAL_CERTIFICATIONS[nextIndex]);
  }, [currentIndex, onSelectCertificate]);

  // Keyboard navigation: left / right arrows
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext]);

  if (!certificate) return null;

  const details = certificate.certificateDetails;

  const renderModalCrest = (type: CertificationItem["issuerLogoType"]) => {
    switch (type) {
      case "gov":
        return <GovCrest className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "pearson":
        return <PearsonCrest className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "alfa":
        return <AlfaCrest className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "ict":
        return <IctCrest className="w-14 h-14 sm:w-16 sm:h-16" />;
      default:
        return <PearsonCrest className="w-14 h-14 sm:w-16 sm:h-16" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        hideCloseButton
        className="w-[92vw] max-w-[430px] sm:max-w-[460px] p-0 border-none bg-transparent shadow-none overflow-visible flex items-center justify-center focus:outline-none"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>
            {certificate.title} — Official Verified Credential
          </DialogTitle>
          <DialogDescription>
            {certificate.issuer} - {details.certificateTitle}
          </DialogDescription>
        </DialogHeader>

        {/* ── Modal Certificate Wrapper (Portrait aspect ratio with ZERO scroll!) ── */}
        <div className="relative w-full overflow-visible">
          {/* Floating Close Button */}
          <DialogClose className="absolute -top-10 right-0 sm:-right-3 w-8 h-8 rounded-full bg-black/65 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-30 focus:outline-none shadow-lg">
            <X className="w-3.5 h-3.5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Floating Prev / Next Controls on sides */}
          <button
            type="button"
            onClick={handlePrev}
            title="Previous Document (Left Arrow)"
            className="absolute -left-3 sm:-left-11 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/65 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-30 shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            title="Next Document (Right Arrow)"
            className="absolute -right-3 sm:-right-11 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/65 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-30 shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* ── Exact Same Design as the Card, Taller Portrait & Narrower Width ── */}
          <div
            id="official-certificate-document"
            className="relative w-full rounded-3xl border-[4px] border-double border-[#c59b27]/40 dark:border-[#c59b27]/35 bg-gradient-to-b from-[#fffefc] via-[#fcfaf5] to-[#f7f3e8] dark:from-[#0d131f] dark:via-[#090e17] dark:to-[#060910] px-5 sm:px-7 py-7 sm:py-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden select-none"
          >
            {/* Antique Guilloché Corner Flourishes */}
            <CertificateCorners />

            {/* Inner Fine Security Microline Border */}
            <div className="absolute inset-2.5 sm:inset-3 border border-[#c59b27]/25 rounded-2xl pointer-events-none" />

            {/* Subtle Watermark Crest Seal in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] dark:opacity-[0.05] select-none scale-150">
              {renderModalCrest(certificate.issuerLogoType)}
            </div>

            {/* ── Top Header: Crest & Authority ── */}
            <div className="relative text-center space-y-2.5 pb-3.5 border-b border-[#c59b27]/25 z-10">
              <div className="flex justify-center items-center drop-shadow-sm">
                {renderModalCrest(certificate.issuerLogoType)}
              </div>

              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0b2545] dark:text-blue-200 font-sans">
                  {certificate.issuer}
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                  {details.subHeading}
                </div>
              </div>

              <div className="pt-0.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-600/25 text-amber-900 dark:text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                  <Lock className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                  <span>{certificate.credentialType}</span>
                </div>
              </div>
            </div>

            {/* ── Center: Title & Conferred Recipient ── */}
            <div className="relative py-4 sm:py-5 text-center space-y-2.5 z-10">
              <h3 className="font-serif font-black text-lg sm:text-2xl text-[#0b2545] dark:text-slate-100 leading-snug tracking-tight">
                {certificate.title}
              </h3>

              <div className="text-xs sm:text-sm font-serif italic text-primary dark:text-blue-300 font-bold">
                Conferred upon Universal Language Academy
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                {certificate.shortHighlight}
              </p>
            </div>

            {/* ── Bottom: Signature, 3D Wax Seal & Official QR/Code ── */}
            <div className="relative pt-4 sm:pt-5 border-t border-[#c59b27]/25 grid grid-cols-3 gap-3 items-end z-10">
              {/* Left: Realistic Signatory Block */}
              <div className="space-y-1 text-left">
                <div className="text-xs sm:text-sm font-serif font-bold text-slate-900 dark:text-slate-200 truncate">
                  {details.signatoryName}
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground truncate leading-tight">
                  {details.signatoryRole}
                </div>
                <div className="w-20 sm:w-24 border-t border-slate-400/70 dark:border-slate-600 pt-0.5" />
              </div>

              {/* Center: 3D Embossed Gold Wax Seal with Ribbon */}
              <div className="flex justify-center -mb-1">
                <OfficialWaxSeal sealText={details.sealText} size={68} />
              </div>

              {/* Right: Security Verification Code & Validity */}
              <div className="text-right space-y-1">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[9px] sm:text-[10px] font-bold uppercase">
                  <span>{certificate.validity}</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-800 dark:text-slate-200 font-semibold truncate">
                  REG: {certificate.verificationCode}
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 flex items-center justify-end gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{certificate.issueDate}</span>
                </div>
              </div>
            </div>

            {/* Bottom Micro-line */}
            <div className="mt-3 pt-2 text-center border-t border-slate-200/60 dark:border-white/10">
              <p className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                UNIVERSAL LANGUAGE DHANMONDI CAMPUS • VERIFIED STATUTORY DOCUMENT
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
