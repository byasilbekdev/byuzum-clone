"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  console.error(error);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-violet-700 via-violet-600 to-indigo-900 px-6">
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-lg rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl">
        <AlertTriangle className="mx-auto h-20 w-20 text-yellow-300" />

        <h1 className="mt-6 text-4xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-4 text-white/80">
          An unexpected error occurred. Try again or return to the home page.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-violet-700 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
