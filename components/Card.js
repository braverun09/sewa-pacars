"use client";

// components/Card.js
// Partner card with image, category badge, favorite toggle, and hover animations
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MapPin, Sparkles, Star } from "lucide-react";
import categories from "@/data/categories";

export default function Card({ partner }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Persist favorite state in localStorage
  useEffect(() => {
    setIsFavorite(localStorage.getItem(`fav-${partner.id}`) === "true");
  }, [partner.id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    const next = !isFavorite;
    setIsFavorite(next);
    localStorage.setItem(`fav-${partner.id}`, next);
  };

  // Get human-readable label for the partner's category
  const categoryLabel =
    categories.find((c) => c.id === partner.category)?.label ?? partner.category;

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
    >
      <Link href={`/partners/${partner.id}`} className="block">
        {/* Photo */}
        <div className="relative h-60 w-full bg-gray-200">
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          {/* Dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/30">
            {categoryLabel}
          </div>

          {/* Name + city overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <p className="text-lg font-bold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              {partner.name}, {partner.age}
            </p>
            <div className="flex items-center text-xs text-white/85 mt-0.5">
              <MapPin size={11} className="mr-1" />
              {partner.city}
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-3.5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-pink-500 text-xs font-semibold">
              <Sparkles size={12} />
              {partner.vibe}
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {partner.rating}
            </div>
          </div>
          <p className="text-sm font-bold text-gray-900">{partner.price}</p>
        </div>
      </Link>

      {/* Favorite button */}
      <button
        onClick={toggleFavorite}
        aria-label="Toggle favorite"
        className="absolute top-11 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition z-10"
      >
        <Heart
          size={16}
          className={isFavorite ? "fill-pink-500 text-pink-500" : "text-white"}
        />
      </button>
    </motion.div>
  );
}
