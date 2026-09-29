"use client";

import React, { useState } from "react";
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
  FileText,
  ExternalLink,
  Download,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CEO_CERTIFICATES, CeoCertificate } from "@/data/instructors";

export function CeoCertificates() {
  const [selectedCert, setSelectedCert] = useState<CeoCertificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpen = (cert: CeoCertificate, index: number) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : CEO_CERTIFICATES.length - 1;
    setCurrentIndex(prevIndex);
    setSelectedCert(CEO_CERTIFICATES[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < CEO_CERTIFICATES.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    setSelectedCert(CEO_CERTIFICATES[nextIndex]);
  };

  return (
    <section className="py-16 sm:py-20 border-t border-border/60 bg-muted/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Accreditations (8)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
              Official Pearson Certifications &amp; Accreditations
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Official credentials awarded by Pearson PTE and the Pearson Teacher Training Academy to Md Sohanor Rahman Shifat across pedagogy, module scoring, and language assessment.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Interactive PDF Credentials</span>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CEO_CERTIFICATES.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => handleOpen(cert, index)}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-border/80 dark:border-slate-800 bg-card hover:border-primary/50 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer p-5 space-y-4"
            >
              {/* Top Certificate Header Graphic */}
              <div className="relative h-28 rounded-xl overflow-hidden bg-gradient-to-br from-[#121c42] via-[#0c2f6d] to-[#1e1346] p-4 text-white flex flex-col justify-between shadow-inner">
                {/* Decorative glow lines */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/30 rounded-full blur-xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/20 rounded-full blur-lg pointer-events-none" />

                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-300" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-200">
                      Pearson PTE
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
                    PDF Verified
                  </span>
                </div>

                <div className="z-10">
                  <p className="text-[9px] uppercase tracking-wider text-slate-300 font-semibold">
                    Certificate of Completion
                  </p>
                  <p className="text-xs font-black text-white truncate mt-0.5">
                    MD SOHANOR RAHMAN SHIFAT
                  </p>
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-2 flex-1">
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary dark:text-blue-300 uppercase tracking-wider">
                  {cert.category}
                </span>
                <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer with Quick Action */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-primary font-bold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect PDF</span>
                </div>
                <span className="text-[11px] text-muted-foreground font-medium">
                  {cert.date || "Pearson TTA"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Dialog with Interactive PDF Viewer */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-border bg-card/95 backdrop-blur-2xl shadow-2xl">
          {selectedCert && (
            <div className="flex flex-col max-h-[90vh]">
              {/* Modal Top Header */}
              <DialogHeader className="p-5 border-b border-border/70 flex flex-row items-center justify-between space-y-0">
                <div className="space-y-1 pr-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary uppercase tracking-wider">
                      {selectedCert.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {currentIndex + 1} of {CEO_CERTIFICATES.length}
                    </span>
                  </div>
                  <DialogTitle className="text-lg sm:text-xl font-black text-foreground">
                    {selectedCert.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    Awarded to <strong className="text-foreground">MD SOHANOR RAHMAN SHIFAT</strong> • Issued by {selectedCert.issuer} ({selectedCert.date})
                  </DialogDescription>
                </div>

                {/* PDF Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open New Tab</span>
                  </a>
                  <a
                    href={selectedCert.pdf}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary/90 shadow-md transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download PDF</span>
                  </a>
                </div>
              </DialogHeader>

              {/* PDF Viewer Frame */}
              <div className="relative flex-1 min-h-[500px] sm:min-h-[600px] bg-slate-950/90 flex items-center justify-center p-2">
                <iframe
                  src={`${selectedCert.pdf}#toolbar=0&navpanes=0`}
                  title={selectedCert.title}
                  className="w-full h-[540px] sm:h-[620px] rounded-lg border border-border/40 shadow-2xl bg-white"
                />

                {/* Prev / Next Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 shadow-xl transition-all cursor-pointer"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 shadow-xl transition-all cursor-pointer"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer info */}
              <div className="p-4 border-t border-border/70 bg-card text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Official Pearson South Asia &amp; Global Scale of English Authenticated Document</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="px-3 py-1 rounded-lg border border-border hover:bg-muted text-xs font-semibold cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-3 py-1 rounded-lg border border-border hover:bg-muted text-xs font-semibold cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
