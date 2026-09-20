import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <div className="text-7xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tighter">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Page Not Found
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mb-8">
        Sorry, the page you are searching for does not exist or might have been relocated.
      </p>
      <Link href="/">
        <Button size="lg">Return to Homepage</Button>
      </Link>
    </div>
  );
}
