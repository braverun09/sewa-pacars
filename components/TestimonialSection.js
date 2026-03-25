"use client";

// components/TestimonialSection.js
// Horizontally scrollable testimonial cards that re-animate when category changes
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Pastel avatar colors — cycles through based on index
const AVATAR_COLORS = [
  "from-pink-400 to-rose-400",
  "from-purple-400 to-indigo-400",
  "from-amber-400 to-orange-400",
  "from-teal-400 to-cyan-400",
  "from-emerald-400 to-green-400",
  "from-sky-400 to-blue-400",
];

export default function TestimonialSection({ testimonials, categoryId }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="overflow-x-auto scrollbar-hide pb-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={categoryId} // re-animate when category changes
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex gap-4 min-w-max"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-64 flex-shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3"
            >
              {/* Star rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Avatar + name */}
              <div className="flex items-center gap-2.5 pt-1 border-t border-gray-50">
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      AVATAR_COLORS[i % AVATAR_COLORS.length]
                    } flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.name[0]}
                  </div>
                )}
                <span className="text-xs font-semibold text-gray-700">{t.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
