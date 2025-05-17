"use client"; // Required for NavigationMenu

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lessons", label: "Lessons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0  z-50 w-full shadow-md border-b-2 border-yellow-400">
      <div className="bg-gradient-to-r px-10 from-indigo-900 via-purple-900 to-indigo-800">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block text-white text-xl tracking-wide">
              Nandita Mukherjee
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-end space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:underline hover:decoration-yellow-400 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Open menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {mobileOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/40"
                onClick={() => setMobileOpen(false)}
              />
            )}
            <div
              className={`fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white shadow-lg transform transition-transform duration-300 ${
                mobileOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-yellow-400">
                <span className="text-lg font-bold">Nadita Mukherjee</span>
                <button
                  className="text-white hover:text-yellow-400"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 px-2 rounded hover:bg-yellow-400/10 hover:text-yellow-300 transition-colors font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
