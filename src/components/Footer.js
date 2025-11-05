import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-lg mb-2">Nandita Mukherjee</h3>
          <p className="text-sm">
            Dedicated to preserving and promoting the art of Bengali music.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Connect With Us</h3>
          <ul className="flex items-center justify-center md:justify-start gap-4">
            {/* Replace with actual social media links/icons later */}
            <li>
              <a
                href="https://www.facebook.com/nandita.mukherjee.14/"
                aria-label="Facebook"
                className="hover:text-yellow-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            
            <li>
              <a
                href="https://www.youtube.com/@nanditamukherjee515"
                aria-label="YouTube"
                className="hover:text-yellow-300 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
          <ul className="space-y-1 text-sm">
           
            <li>
              Email:{" "}
              <a
                href="mailto:nandita.eee@gmail.com"
                className="hover:underline"
              >
                nandita.eee@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-white/30">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nandita Mukherjee. All rights
          reserved.
        </p>
        <p className="text-xs mt-1">
          Inspired by musicians, crafted for learners.
        </p>
      </div>
    </footer>
  );
}
