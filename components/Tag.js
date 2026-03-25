// components/Tag.js
// Pill-shaped tag for personality labels and category badges
export default function Tag({ text, variant = "pink" }) {
  const variants = {
    pink:   "bg-pink-100 text-pink-600 border-pink-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    gray:   "bg-gray-100 text-gray-600 border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant] ?? variants.pink}`}
    >
      {text}
    </span>
  );
}
