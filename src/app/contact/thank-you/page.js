"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100">
      <div className="bg-white/90 p-8 md:p-12 rounded-xl shadow-2xl max-w-lg w-full border border-emerald-300">
        {/* Confetti or celebration SVG */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-6 text-emerald-500"
        >
          <path
            d="M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0ZM57.1429 30.5714L35.7143 52C34.8571 52.8571 33.5714 52.8571 32.7143 52L22.8571 42.1429C21.1429 40.4286 21.1429 37.7143 22.8571 36C24.5714 34.2857 27.2857 34.2857 29 36L34.2857 41.2857L51 24.5714C52.7143 22.8571 55.4286 22.8571 57.1429 24.5714C58.8571 26.2857 58.8571 29 57.1429 30.5714Z"
            fill="currentColor"
          />
        </svg>

        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your message has been successfully submitted. Nandita will get back to
          you as soon as possible.
        </p>
        <Link href="/" passHref>
          <Button
            variant="outline"
            className="text-emerald-600 border-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-300 text-lg px-8 py-3"
          >
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
