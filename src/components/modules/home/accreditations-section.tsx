"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Award,
  Globe2,
  FileCheck,
  Lock,
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
import { CertificateModal } from "./certificate-modal";

type FilterTab = "all" | "gov" | "pearson" | "partner";

export function AccreditationsSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificationItem | null>(null);
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredCertifications = OFFICIAL_CERTIFICATIONS.filter((cert) => {
    if (activeTab === "all") return true;
    if (activeTab === "gov") return cert.issuerLogoType === "gov" || cert.issuerLogoType === "ict";
    if (activeTab === "pearson") return cert.issuerLogoType === "pearson";
    if (activeTab === "partner") return cert.issuerLogoType === "alfa";
    return true;
  });

  const renderCardCrest = (type: CertificationItem["issuerLogoType"]) => {
    switch (type) {
      case "gov":
        return <GovCrest className="w-12 h-12 sm:w-14 sm:h-14" />;
      case "pearson":
        return <PearsonCrest className="w-12 h-12 sm:w-14 sm:h-14" />;
      case "alfa":
        return <AlfaCrest className="w-12 h-12 sm:w-14 sm:h-14" />;
      case "ict":
        return <IctCrest className="w-12 h-12 sm:w-14 sm:h-14" />;
      default:
        return <PearsonCrest className="w-12 h-12 sm:w-14 sm:h-14" />;
    }
  };

  return (
    <section
      id="accreditations"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-muted/15 to-background border-t border-border/60 overflow-hidden"
      aria-label="Official Accreditations & Pearson Certifications"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[300px] bg-primary/6 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[280px] bg-amber-500/5 dark:bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Security Lathed Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#c59b2710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header matching other section badges ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Institutional Registry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Why Students &amp; Parents Trust Us:{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Verified Legal Accreditations
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Universal Language is legally registered under the Prime Minister&apos;s
            Office (NSDA), authorized by Pearson Education South Asia, and accredited as an
            official assessment partner.
          </p>

          {/* Minimalist Segmented Filter Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-slate-200/60 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Documents ({OFFICIAL_CERTIFICATIONS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("gov")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "gov"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Government
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pearson")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "pearson"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Pearson
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("partner")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "partner"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Partners
              </button>
            </div>
          </div>
        </div>

        {/* ── Bespoke Miniature Framed Certificate Plaque Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredCertifications.map((cert) => {
            const details = cert.certificateDetails;

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCertificate(cert)}
                className="group relative flex flex-col justify-between rounded-3xl border-[3px] border-double border-[#c59b27]/35 dark:border-[#c59b27]/30 bg-gradient-to-b from-[#fffefc] via-[#fcfaf5] to-[#f7f3e8] dark:from-[#0d131f] dark:via-[#090e17] dark:to-[#060910] p-6 sm:p-7 shadow-[0_6px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(197,155,39,0.28)] hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Antique Guilloché Corner Flourishes */}
                <CertificateCorners />

                {/* Inner Fine Security Microline Border */}
                <div className="absolute inset-2 sm:inset-2.5 border border-[#c59b27]/25 rounded-2xl pointer-events-none" />

                {/* Watermark Crest Seal in background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] dark:opacity-[0.05] select-none scale-125">
                  {renderCardCrest(cert.issuerLogoType)}
                </div>

                {/* ── Document Top Section: Authority & Crest ── */}
                <div className="relative text-center space-y-2.5 pb-4 border-b border-[#c59b27]/25 z-10">
                  {/* Official Crest */}
                  <div className="flex justify-center items-center group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                    {renderCardCrest(cert.issuerLogoType)}
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b2545] dark:text-blue-200 font-sans">
                      {cert.issuer}
                    </div>
                    <div className="text-[9px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                      {details.subHeading}
                    </div>
                  </div>

                  {/* Ribbon Badge */}
                  <div className="pt-1">
                    <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-600/25 text-amber-900 dark:text-amber-300 text-[9px] font-bold uppercase tracking-widest">
                      <Lock className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                      <span>{cert.credentialType}</span>
                    </div>
                  </div>
                </div>

                {/* ── Document Center: Title & Recipient ── */}
                <div className="relative py-4 text-center space-y-2 z-10 flex-1 flex flex-col justify-center">
                  <h3 className="font-serif font-black text-base sm:text-lg text-[#0b2545] dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-snug tracking-tight">
                    {cert.title}
                  </h3>

                  <div className="text-[11px] font-serif italic text-primary dark:text-blue-300 font-semibold">
                    Conferred upon Universal Language Academy
                  </div>

                  {/* Super-minimal 1-sentence statement */}
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto line-clamp-2 pt-0.5">
                    {cert.shortHighlight}
                  </p>
                </div>

                {/* ── Document Bottom: Realistic Signature, Wax Seal & Code ── */}
                <div className="relative pt-4 border-t border-[#c59b27]/25 grid grid-cols-3 gap-2 items-end z-10">
                  {/* Left: Signatory Info */}
                  <div className="space-y-0.5 text-left">
                    <div className="text-[10px] font-serif font-bold text-slate-900 dark:text-slate-200 truncate">
                      {details.signatoryName}
                    </div>
                    <div className="text-[8px] text-muted-foreground truncate leading-tight">
                      {details.signatoryRole}
                    </div>
                    <div className="w-14 border-t border-slate-400/60 dark:border-slate-600 pt-0.5" />
                  </div>

                  {/* Center: 3D Embossed Gold Wax Seal */}
                  <div className="flex justify-center -mb-1">
                    <OfficialWaxSeal sealText={details.sealText} size={58} />
                  </div>

                  {/* Right: Security ID */}
                  <div className="text-right space-y-0.5">
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-[8px] font-bold uppercase">
                      <span>Verified</span>
                    </div>
                    <div className="text-[9px] font-mono text-slate-700 dark:text-slate-300 font-semibold truncate">
                      {cert.verificationCode.split("/")[0]}...
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Pure Digital Certificate Modal (Shows ONLY the certificate document) ── */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        onSelectCertificate={(cert) => setSelectedCertificate(cert)}
      />
    </section>
  );
}
