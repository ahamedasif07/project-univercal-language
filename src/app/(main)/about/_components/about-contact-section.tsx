"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Container } from "@/components/common/container";

const CONTACT_CHANNELS = [
  {
    icon: MessageSquare,
    label: "WhatsApp Direct",
    value: "+880 1772-224283",
    action: "Chat with Academic Advisor",
    href: "https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20would%20like%20to%20learn%20more%20about%20your%20PTE%20and%20language%20programs.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Phone,
    label: "Hotline Support",
    value: "+880 1772-224283",
    action: "Call During Office Hours",
    href: "tel:+8801772224283",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Mail,
    label: "Official Email",
    value: "info@universallanguage.com.bd",
    action: "Inquiries & Corporate Training",
    href: "mailto:info@universallanguage.com.bd",
    color: "text-primary dark:text-blue-400",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: MapPin,
    label: "Dhaka Campus",
    value: "Mirpur-10 Roundabout, Dhaka, Bangladesh",
    action: "Visit Saturday – Thursday (10am–8pm)",
    href: "https://maps.google.com/?q=Mirpur-10+Dhaka",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
];

export function AboutContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    exam: "PTE Academic Masterclass",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp message for instant delivery
    const text = encodeURIComponent(
      `*New Inquiry from About Page*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || "N/A"}\n` +
      `🎯 *Program:* ${formData.exam}\n` +
      `📝 *Message:* ${formData.message || "Requesting 1-on-1 diagnostic audit"}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/8801772224283?text=${text}`, "_blank");
    }, 400);
  };

  return (
    <section id="contact-section" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-card/30 via-background to-background border-t border-border/50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Connect With Our Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Start Your{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Target Score Journey
            </span>{" "}
            Today
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Have questions about PTE scoring, our batch schedules, or want a free scorecard audit?
            Reach out directly or send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {CONTACT_CHANNELS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group block p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-sm sm:text-base font-bold text-foreground truncate mt-0.5 group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                        <div className="text-xs font-medium text-primary dark:text-blue-400 mt-1 flex items-center gap-1">
                          <span>{item.action}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Academy Timings Badge */}
            <div className="p-5 rounded-2xl bg-muted/40 border border-border/70 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary dark:text-blue-300 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground block text-sm">Saturday – Thursday: 10:00 AM – 8:00 PM</strong>
                Live online sessions run 7 days a week with flexible morning, evening, and weekend batches.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Us a Message Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-7 sm:p-10 bg-card border border-border/80 shadow-2xl space-y-6">
              <div>
                <h3 className="text-2xl font-black text-foreground">
                  Send Us a Direct Message
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Fill out the form below. Our academic team will respond with a diagnostic plan within 2 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We have redirected your inquiry directly to our academic WhatsApp advisor desk.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-primary underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground">
                        Phone / WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 017XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tanvir@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground">
                        Select Target Program
                      </label>
                      <select
                        value={formData.exam}
                        onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="PTE Academic Masterclass">PTE Academic Masterclass (Target 79+)</option>
                        <option value="PTE Fast-Track Crash Batch">PTE Fast-Track Crash Batch</option>
                        <option value="German Language (A1–B2)">German Language (A1–B2 Pathway)</option>
                        <option value="IELTS Academic Prep">IELTS Academic (Band 7.5+)</option>
                        <option value="1-on-1 VIP Diagnostic Audit">1-on-1 VIP Diagnostic Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">
                      Message / Target Score &amp; Previous Experience
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your target score, previous test experience (if any), and desired country..."
                      className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-xl shadow-blue-900/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit &amp; Connect on WhatsApp</span>
                    <Send className="w-4 h-4" />
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
