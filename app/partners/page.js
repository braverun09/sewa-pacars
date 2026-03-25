"use client";

// app/partners/page.js — Partners listing
// Category filter, partner grid, testimonials, and random partner button
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Dices } from "lucide-react";

import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Card from "@/components/Card";
import CategoryBar from "@/components/CategoryBar";
import TestimonialSection from "@/components/TestimonialSection";

import allPartners from "@/data/partners";
import categories from "@/data/categories";
import allTestimonials from "@/data/testimonials";

// Framer Motion variants for the card grid
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function PartnersPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter partners based on selected category
  const filteredPartners = useMemo(
    () =>
      selectedCategory === "all"
        ? allPartners
        : allPartners.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  // Get testimonials for selected category (fallback to "all")
  const activeTestimonials =
    allTestimonials[selectedCategory] ?? allTestimonials.all ?? [];

  // Navigate to a random partner detail page
  const handleRandom = () => {
    const pool = filteredPartners.length > 0 ? filteredPartners : allPartners;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    router.push(`/partners/${pick.id}`);
  };

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 flex-grow">
        {/* ── Hero strip ── */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-10 text-white">
          <Container className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1
                className="text-3xl md:text-4xl font-black leading-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Pilih Partner Kamu ✨
              </h1>
              <p className="mt-1 text-white/80 text-sm">
                {filteredPartners.length} partner tersedia ·{" "}
                {selectedCategory === "all"
                  ? "Semua kategori"
                  : categories.find((c) => c.id === selectedCategory)?.label}
              </p>
            </div>
            <motion.button
              onClick={handleRandom}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-3 rounded-xl font-semibold transition-colors w-full md:w-auto justify-center border border-white/30"
            >
              <Dices size={18} />
              Random Partner
            </motion.button>
          </Container>
        </div>

        <Container className="py-8 space-y-8">
          {/* ── Category Filter ── */}
          <CategoryBar
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* ── Partner Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={gridVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
            >
              {filteredPartners.length > 0 ? (
                filteredPartners.map((partner) => (
                  <motion.div key={partner.id} variants={cardVariants}>
                    <Card partner={partner} />
                  </motion.div>
                ))
              ) : (
                <motion.p
                  variants={cardVariants}
                  className="col-span-full text-center text-gray-400 py-20"
                >
                  Belum ada partner di kategori ini 😔
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ── Testimonials Section ── */}
          {activeTestimonials.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Kata Mereka 💬
              </h2>
              <TestimonialSection
                testimonials={activeTestimonials}
                categoryId={selectedCategory}
              />
            </section>
          )}
        </Container>
      </main>
    </>
  );
}
