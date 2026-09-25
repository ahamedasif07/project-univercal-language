import React from "react";
import type { Metadata } from "next";
import { RegisterForm } from "@/components/modules/auth/_components/register-form";

export const metadata: Metadata = {
  title: "Register | Universal Language",
  description:
    "Create your Universal Language student account to book your free diagnostic session and start your PTE, IELTS, German, or study abroad journey.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
