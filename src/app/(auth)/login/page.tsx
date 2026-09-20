import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm text-center space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Login Page</h1>
      <p className="text-muted-foreground text-sm">
        Ready for step-by-step form implementation.
      </p>
      <div className="pt-2">
        <Link href="/register" className="text-sm text-primary hover:underline">
          Go to Register
        </Link>
      </div>
    </div>
  );
}
