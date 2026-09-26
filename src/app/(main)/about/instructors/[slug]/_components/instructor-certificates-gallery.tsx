"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Award,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Building,
} from "lucide-react";
import { InstructorCertificate } from "@/data/instructors";

interface InstructorCertificatesGalleryProps {
  certificates: InstructorCertificate[];
  instructorName: string;
}

export function InstructorCertificatesGallery({
  certificates,
  instructorName,
}: InstructorCertificatesGalleryProps) {
  const [selectedCert, setSelectedCert] = useState<InstructorCertificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!certificates || certificates.length === 0) {
    return null;
  }

  const handleOpenCert = (cert: InstructorCertificate, index: number) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : certificates.length - 1;
    setCurrentIndex(prevIndex);
    setSelectedCert(certificates[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < certificates.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    setSelectedCert(certificates[nextIndex]);
  };

  return (
    <div className="space-y-6 pt-6 border-t border-border/60">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials ({certificates.length})</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-foreground">
            Official Certificates &amp; Professional Credentials
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Verified institutional training certificates, Pearson accreditations, and academic credentials awarded to {instructorName}. Click any certificate to inspect full resolution.
          </p>
        </div>
      </div>

      {/* Grid of Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            onClick={() => handleOpenCert(cert, index)}
            className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-border/80 dark:border-slate-800 bg-card hover:border-primary/60 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay with Inspect Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-primary" />
                  <span>View Certificate</span>
                </span>
              </div>

              {/* Badge Overlay */}
              {cert.badge && (
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20">
                    {cert.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Certificate Details */}
            <div className="p-4 space-y-2">
              <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {cert.title}
              </h4>

              <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border/50">
                <span className="truncate font-medium">{cert.issuer}</span>
                {cert.year && (
                  <span className="shrink-0 text-[11px] font-semibold text-primary">
                    {cert.year}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6 bg-background/98 backdrop-blur-2xl border-border/80">
          {selectedCert && (
            <div className="space-y-4">
              <DialogHeader className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Verified Official Credential #{currentIndex + 1} of {certificates.length}</span>
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-black text-foreground">
                  {selectedCert.title}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-4 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-primary" />
                    <span>{selectedCert.issuer}</span>
                  </span>
                  {selectedCert.year && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{selectedCert.year}</span>
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>

              {/* Full Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-slate-950 border border-border shadow-2xl flex items-center justify-center">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 1024px) 95vw, 900px"
                  className="object-contain w-full h-full p-1 sm:p-2"
                  priority
                />

                {/* Left / Right Arrow Controls */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous certificate"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next certificate"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Description & Footer Details */}
              {selectedCert.description && (
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1">
                  {selectedCert.description}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
