import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-lg mb-2">Nadita Mukherjee</h3>
          <p className="text-sm">
            Dedicated to preserving and promoting the art of harmonium playing.
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
          <ul className="space-y-1">
            {/* Replace with actual social media links/icons later */}
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
          <ul className="space-y-1 text-sm">
            <li>
              Phone:
              <a href="tel:07769406432" className="hover:underline">
                07769406432{"   "}
              </a>
              <a href="tel:07380856052" className="hover:underline">
                07380856052
              </a>
            </li>

            <li>
              Email:{" "}
              <a
                href="mailto:nandita@nanditamukherjee.co.uk"
                className="hover:underline"
              >
                nandita@nanditamukherjee.co.uk
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
