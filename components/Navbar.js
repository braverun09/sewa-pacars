"use client";

// components/Navbar.js
// Sticky navbar with blurred background and gradient logo
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
      <Container className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            SearchMate 💕
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          <Link
            href="/partners"
            className="text-sm font-medium text-gray-500 hover:text-pink-500 transition-colors"
          >
            Browse Partner
          </Link>
          <Link
            href="/partners"
            className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full shadow hover:shadow-md hover:scale-105 transition-all"
          >
            Mulai Sekarang
          </Link>
        </div>
      </Container>
    </nav>
  );
}
