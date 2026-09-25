"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/container";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Dhaka, Bangladesh",
    sub: "In-person classes available",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+880 1772-224283",
    sub: "Available 9AM – 9PM (Sat–Thu)",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@universallanguage.com.bd",
    sub: "Replied within 24 hours",
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Sat – Thu: 9AM – 9PM",
    sub: "Friday: Closed",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

export function ContactMain() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info + WhatsApp */}
          <div className="lg:col-span-2 space-y-5">
            {CONTACT_INFO.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-xl border ${item.bg} shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.a
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20have%20a%20question%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/6 hover:bg-emerald-500/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                  <MessageCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Chat on WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Fastest response — usually under 10 min</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xl overflow-hidden shadow-xl">
              <div className="h-1 w-full bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600" />

              <div className="p-7 sm:p-9">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-black text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">
                      Thank you for reaching out. A Universal Language mentor will reply within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="mt-4 text-sm font-semibold text-primary hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h2 className="text-2xl font-black text-foreground mb-1">Send Us a Message</h2>
                      <p className="text-sm text-muted-foreground">
                        Fill in the form and our team will get back to you promptly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Phone / WhatsApp
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+880..."
                            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Subject <span className="text-rose-500">*</span>
                          </label>
                          <select
                            id="contact-subject"
                            required
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/60 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                          >
                            <option value="">Select a topic…</option>
                            <option value="pte">PTE Academic Coaching</option>
                            <option value="ielts">IELTS Preparation</option>
                            <option value="german">German Language Course</option>
                            <option value="japanese">Japanese Language Course</option>
                            <option value="booking">Exam Seat Booking</option>
                            <option value="study-abroad">Study Abroad Counselling</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your current level, target score, and timeline…"
                          className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
