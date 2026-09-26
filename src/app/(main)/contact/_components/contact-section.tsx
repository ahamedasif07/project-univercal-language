"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { CONTACT_INFO } from "@/config/constants";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 2C6.516 2 2.025 6.491 2.025 12.006c0 1.942.556 3.76 1.523 5.305L2 22l4.839-1.526a9.96 9.96 0 0 0 5.192 1.458h.004c5.514 0 10.005-4.491 10.005-10.006A10.01 10.01 0 0 0 12.031 2zm5.828 14.188c-.244.686-1.42 1.309-1.968 1.391-.525.078-1.207.112-3.486-.83-2.915-1.206-4.793-4.185-4.939-4.379-.142-.194-1.18-1.572-1.18-2.998 0-1.426.746-2.128 1.01-2.42.264-.292.576-.365.768-.365.193 0 .385.002.553.01.179.008.419-.068.656.5.244.584.83 2.028.903 2.174.073.146.122.316.024.51-.097.194-.146.316-.292.486-.146.17-.308.38-.44.51-.146.146-.298.305-.128.597.17.292.756 1.246 1.623 2.019 1.115.993 2.055 1.302 2.347 1.448.292.146.463.122.633-.073.17-.195.731-.852.926-1.144.195-.292.39-.244.657-.146.268.097 1.706.804 1.998.95.292.146.487.219.56.341.073.122.073.706-.171 1.392z" />
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    exam: "PTE Academic Masterclass (Target 79+)",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentChannel, setSentChannel] = useState<"whatsapp" | "email" | null>(null);

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateInputs = () => {
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMsg("Please enter your WhatsApp or phone number.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  // 1. Send via WhatsApp (passes all form details into WhatsApp chat)
  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateInputs()) return;

    const messageLines = [
      `*Admission Inquiry - Universal Language*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${formData.name.trim()}`,
      `📱 *Phone:* ${formData.phone.trim()}`,
      `✉️ *Email:* ${formData.email.trim() || "Not provided"}`,
      `🎯 *Program:* ${formData.exam}`,
      `📝 *Message / Query:* ${formData.message.trim() || "I would like to know course details, schedule & diagnostic session."}`,
      `━━━━━━━━━━━━━━━━━━━━`,
    ].join("\n");

    setSentChannel("whatsapp");
    const encoded = encodeURIComponent(messageLines);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encoded}`, "_blank");
  };

  // 2. Send via Email (opens default mail app with recipient, subject, and formatted body)
  const handleSendEmail = () => {
    if (!validateInputs()) return;

    const subject = `Course Inquiry: ${formData.exam} - ${formData.name.trim()}`;
    const body = [
      `Dear Universal Language Team,`,
      ``,
      `I am inquiring about your programs. Here are my details:`,
      ``,
      `Full Name: ${formData.name.trim()}`,
      `Phone / WhatsApp: ${formData.phone.trim()}`,
      `Email Address: ${formData.email.trim() || "N/A"}`,
      `Target Program: ${formData.exam}`,
      ``,
      `Inquiry / Question:`,
      `${formData.message.trim() || "Please share upcoming batch schedules, fees, and diagnostic assessment details."}`,
      ``,
      `Thank you,`,
      `${formData.name.trim()}`,
    ].join("\n");

    setSentChannel("email");
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact-main" className="py-14 sm:py-20 relative bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info (Clean, Minimal, Classy) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-widest">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                Reach Us Anytime
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Connect with our academic counselors directly via WhatsApp or email, or visit our campus for an in-person assessment.
              </p>
            </div>

            {/* Direct WhatsApp Card */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Universal Language, I want to learn more about your PTE and language courses.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Direct WhatsApp
                  </div>
                  <div className="text-base font-bold text-foreground">
                    {CONTACT_INFO.phoneFormatted}
                  </div>
                  <div className="text-xs text-muted-foreground">Click for instant chat</div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                Chat &rarr;
              </span>
            </a>

            {/* Direct Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground">Official Email</div>
                    <div className="text-base font-bold text-foreground">{CONTACT_INFO.email}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-primary hover:bg-[#082b61] text-white text-xs font-semibold text-center transition-colors"
                >
                  Write Email
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail(CONTACT_INFO.email)}
                  className="py-2 px-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & Campus Location */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={CONTACT_INFO.telLink}
                className="p-3.5 rounded-xl bg-card border border-border/70 hover:border-primary/40 transition-all block"
              >
                <div className="text-muted-foreground mb-1">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="text-[11px] text-muted-foreground font-medium">Hotline</div>
                <div className="text-xs font-bold text-foreground mt-0.5 truncate">
                  {CONTACT_INFO.phoneFormatted}
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Mirpur-10+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-card border border-border/70 hover:border-primary/40 transition-all block"
              >
                <div className="text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="text-[11px] text-muted-foreground font-medium">Campus</div>
                <div className="text-xs font-bold text-foreground mt-0.5 flex items-center justify-between">
                  <span>Mirpur-10, Dhaka</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Elegant, Non-Messy Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-card border border-border/80 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Fill in your details below. You can send directly to our WhatsApp or open in your email with all information filled in.
                </p>
              </div>

              {/* Validation Alert */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Notification */}
              {sentChannel && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs text-foreground"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {sentChannel === "whatsapp"
                        ? "Opening WhatsApp with your filled information..."
                        : "Opening your email app with your filled inquiry..."}
                    </span>
                  </div>
                  <button
                    onClick={() => setSentChannel(null)}
                    className="text-primary font-bold hover:underline ml-2"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                {/* Name & Phone in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errorMsg) setErrorMsg("");
                      }}
                      placeholder="e.g. Asif Mahmud"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      WhatsApp / Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errorMsg) setErrorMsg("");
                      }}
                      placeholder="017XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Email & Program in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Target Course
                    </label>
                    <select
                      value={formData.exam}
                      onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                    >
                      <option value="PTE Academic Masterclass (Target 79+)">PTE Academic Masterclass (Target 79+)</option>
                      <option value="PTE Fast-Track Crash Batch">PTE Fast-Track Crash Batch</option>
                      <option value="German Language (A1–B2 Pathway)">German Language (A1–B2 Pathway)</option>
                      <option value="IELTS Academic (Band 7.5+)">IELTS Academic (Band 7.5+)</option>
                      <option value="1-on-1 VIP Diagnostic Audit">1-on-1 VIP Diagnostic Audit</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Message / Question
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your target score, previous attempt, or questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Dual Action Buttons: Clean & High Contrast */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                  {/* WhatsApp Action Button */}
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Send via WhatsApp</span>
                    <Send className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                  </button>

                  {/* Email Action Button */}
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="flex-1 py-3 px-5 rounded-xl bg-primary hover:bg-[#082b61] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-900/15 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>Send via Email</span>
                    <Send className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                  </button>
                </div>

                <p className="text-[11px] text-muted-foreground text-center pt-1">
                  Clicking either button will open WhatsApp or your email client with all your filled details ready to send.
                </p>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
