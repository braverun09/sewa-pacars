"use client";

// app/page.js — Landing Page
// Hero section with gradient, floating emojis, and CTA
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

// Floating emoji list
const EMOJIS = ["💖", "✨", "🥰", "🚀", "💕", "😍", "🥳", "💫", "🎮", "☕", "🎬", "🎧"];

// Random positions so emojis spread evenly
const POSITIONS = EMOJIS.map((_, i) => ({
  x: `${(i * 100) / EMOJIS.length + Math.random() * 8}vw`,
  duration: 12 + (i % 5) * 3,
  delay: (i * 1.1) % 6,
  size: i % 3 === 0 ? "text-5xl" : "text-3xl",
}));

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative flex-grow flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-fuchsia-50 to-purple-100 min-h-[90vh]">
        {/* ── Floating emojis ── */}
        {EMOJIS.map((emoji, i) => (
          <motion.span
            key={i}
            className={`absolute select-none opacity-30 pointer-events-none ${POSITIONS[i].size}`}
            initial={{ y: "110vh", x: POSITIONS[i].x, rotate: 0 }}
            animate={{ y: "-15vh", x: POSITIONS[i].x, rotate: 360 }}
            transition={{
              duration: POSITIONS[i].duration,
              delay: POSITIONS[i].delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.span>
        ))}

        {/* ── Hero card ── */}
        <Container className="relative z-10 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-pink-200/50 shadow-sm"
            >
              ✨ Platform partner virtual #1
            </motion.div>

            <h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              SearchMate<br />💕
            </h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Temukan partner virtual yang paling cocok buat kamu.<br />
              Gaming, ngobrol, chill, atau nonton — semua ada di sini!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/partners">
                <motion.button
                  whileHover={{ scale: 1.06, boxShadow: "0 12px 30px rgba(236,72,153,0.35)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-lg font-bold shadow-lg flex items-center gap-2 group mx-auto sm:mx-0"
                >
                  Cari Partner Sekarang
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </Link>
              <Link href="/partners">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 rounded-full text-lg font-semibold border border-gray-200 hover:border-pink-300 hover:text-pink-500 transition-colors mx-auto sm:mx-0"
                >
                  Lihat Partner ✨
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="mt-14 flex flex-wrap justify-center gap-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: "12+", label: "Partner Aktif" },
                { value: "6",   label: "Kategori Date" },
                { value: "4.9", label: "Rating Rata-rata" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-pink-500" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {s.value}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
