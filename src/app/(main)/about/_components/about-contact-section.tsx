"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/container";

const CONTACT_METHODS = [
  {
    icon: MessageSquare,
    label: "WhatsApp Advisor",
    value: "+880 1772-224283",
    sub: "Direct chat for score guidance",
    href: "https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20would%20like%20to%20learn%20more%20about%20your%20PTE%20and%20language%20programs.",
  },
  {
    icon: Phone,
    label: "Academy Hotline",
    value: "+880 1772-224283",
    sub: "Sat – Thu: 10:00 AM – 8:00 PM",
    href: "tel:+8801772224283",
  },
  {
    icon: MapPin,
    label: "Dhaka Campus",
    value: "Mirpur-10 Roundabout, Dhaka",
    sub: "In-person diagnostic appointments",
    href: "https://maps.google.com/?q=Mirpur-10+Dhaka",
  },
];

export function AboutContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    exam: "PTE Academic Masterclass",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = encodeURIComponent(
      `*Inquiry from Universal Language About Page*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `🎯 *Program:* ${formData.exam}\n` +
      `📝 *Details:* ${formData.message || "Requesting 1-on-1 diagnostic audit"}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/8801772224283?text=${text}`, "_blank");
    }, 400);
  };

  return (
    <section id="contact-section" className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-card/30 via-background to-background border-t border-border/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-[1.15]">
                Start Your Journey With{" "}
                <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                  Universal Language
                </span>
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect directly with our academic advisory team to review your scorecard or book a free diagnostic audit.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {CONTACT_METHODS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary dark:text-blue-300 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0b3a82] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                      <div className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">{item.sub}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Minimal Classy Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-card border border-border/80 shadow-xl space-y-5">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Request a Free Diagnostic Session
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Our academic mentors will assess your baseline score and share a tailored roadmap.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground">Message Prepared!</h4>
                  <p className="text-xs text-muted-foreground">
                    Redirecting you to our WhatsApp academic advisor desk...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-primary underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="017XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Target Program</label>
                    <select
                      value={formData.exam}
                      onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="PTE Academic Masterclass (Target 79+)">PTE Academic Masterclass (Target 79+)</option>
                      <option value="PTE Fast-Track Crash Batch">PTE Fast-Track Crash Batch</option>
                      <option value="German Language (A1–B2)">German Language (A1–B2 Pathway)</option>
                      <option value="IELTS Academic Prep">IELTS Academic (Band 7.5+)</option>
                      <option value="1-on-1 VIP Diagnostic Audit">1-on-1 VIP Diagnostic Audit</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">
                      Target Score &amp; Experience (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need 79+ for Australian PR, previous attempt 64..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-lg shadow-blue-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Connect on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
