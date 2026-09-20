import React from "react";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6 text-center">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Home Page
        </h1>
        <p className="text-muted-foreground text-sm">
          Clean slate ready for step-by-step development.
        </p>
      </div>
    </div>
  );
}
