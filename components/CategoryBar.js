"use client";

// components/CategoryBar.js
// Horizontal scrollable category filter bar with active state highlighting
import { motion } from "framer-motion";

export default function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="relative">
      {/* Faded left/right edges to hint at scroll */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />

      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => {
          const isActive = selected === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-md shadow-pink-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-pink-300 hover:text-pink-500"
              }`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
