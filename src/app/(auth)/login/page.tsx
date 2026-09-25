import React from "react";
import type { Metadata } from "next";
import { LoginForm } from "@/components/modules/auth/_components/login-form";

export const metadata: Metadata = {
  title: "Sign In | Universal Language",
  description:
    "Sign in to your Universal Language student portal to access your course materials, progress tracker, and mentor communication hub.",
};

export default function LoginPage() {
  return <LoginForm />;
}
