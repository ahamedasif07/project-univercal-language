"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactFormSchema, ContactFormData } from "@/validators/contact-schema";
import { submitContactMessage } from "@/services/contact-service";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        if (fieldName) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await submitContactMessage(validationResult.data);
      if (response.success) {
        setFeedback({
          type: "success",
          message: response.message || "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setFeedback({
          type: "error",
          message: response.error || "Failed to submit message. Please try again.",
        });
      }
    } catch {
      setFeedback({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {feedback && (
        <div
          className={`p-4 rounded-lg text-sm ${
            feedback.type === "success"
              ? "bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300"
              : "bg-red-50 border border-red-200 text-red-800 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300"
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          name="name"
          placeholder="Jane Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="jane@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <Input
        label="Subject"
        name="subject"
        placeholder="How can we help you?"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        required
      />

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className={`w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 ${
            errors.message ? "border-red-500 focus:border-red-500" : ""
          }`}
          required
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" isLoading={isLoading} className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
