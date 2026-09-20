import React from "react";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] p-6">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-blue-600 animate-spin" />
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400 animate-pulse">
        Loading content...
      </p>
    </div>
  );
}
