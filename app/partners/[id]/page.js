// app/partners/[id]/page.js — Partner Detail Page
// Server component: SSG, horizontal desktop/vertical mobile layout,
// fake chat preview, personality tags, WhatsApp/Telegram CTA
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, MessageCircle, Star, MapPin, Sparkles } from "lucide-react";

import Container from "@/components/Container";
import Tag from "@/components/Tag";
import Navbar from "@/components/Navbar";
import categories from "@/data/categories";
import partners from "@/data/partners";

// Pre-generate static paths for all partners
export function generateStaticParams() {
  return partners.map((p) => ({ id: p.id }));
}

export default async function PartnerDetail({ params }) {
  const { id } = await params;
  const partner = partners.find((p) => p.id === id);
  if (!partner) notFound();

  // Get friendly category label
  const categoryLabel =
    categories.find((c) => c.id === partner.category)?.label ?? partner.category;

  // Telegram CTA link (pre-fill message)
  const tgMessage = encodeURIComponent(
    `Hai! Saya tertarik untuk sewa partner: ${partner.name} — ${partner.price}. Masih available?`
  );
  const ctaLink = `https://t.me/Tyrxs_bot?text=${tgMessage}`;

  // Sample fake chat bubbles
  const chatBubbles = [
    { from: "partner", text: `Haii! Udah lama nunggu ya? 😊` },
    { from: "user",    text: `Baru nih, hehe. Gimana kabarmu?` },
    { from: "partner", text: `Baik dong! Siap nemenin kamu hari ini ✨` },
    { from: "user",    text: `Asiik, langsung mulai yuk!` },
    { from: "partner", text: `Yuk! Aku udah excited banget 💖` },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen py-8">
        <Container>
          {/* Back button */}
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors mb-6 font-medium text-sm"
          >
            <ArrowLeft size={18} />
            Kembali ke daftar
          </Link>

          {/* Main card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full">

              {/* ── Left: Image ── */}
              <div className="relative w-full lg:w-5/12 h-[55vw] max-h-[520px] lg:h-auto min-h-[360px]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                  {categoryLabel}
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  {partner.rating}
                </div>

                {/* Name + city overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h1
                    className="text-3xl md:text-4xl font-black leading-tight"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {partner.name}, {partner.age}
                  </h1>
                  <div className="flex items-center gap-1.5 mt-1.5 text-white/80 text-sm">
                    <MapPin size={14} />
                    {partner.city}
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 text-pink-300 text-sm font-semibold">
                    <Sparkles size={14} />
                    {partner.vibe}
                  </div>
                </div>
              </div>

              {/* ── Right: Info ── */}
              <div className="w-full lg:w-7/12 p-6 lg:p-10 flex flex-col gap-6">

                {/* About */}
                <div>
                  <h2
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Tentang {partner.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{partner.desc}</p>
                </div>

                {/* Personality tags */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                    Personality
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.personality.map((tag) => (
                      <Tag key={tag} text={tag} variant="pink" />
                    ))}
                  </div>
                </div>

                {/* Fake chat preview */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 border border-pink-100/60">
                  <p className="text-xs font-bold text-pink-400 mb-3 flex items-center gap-1.5">
                    <MessageCircle size={13} /> Sekilas Chat
                  </p>
                  <div className="space-y-2.5">
                    {chatBubbles.map((b, i) => (
                      <div
                        key={i}
                        className={`flex gap-2 ${b.from === "user" ? "justify-end" : "justify-start"} items-end`}
                      >
                        {/* Partner avatar (left side) */}
                        {b.from === "partner" && (
                          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                            <Image
                              src={partner.image}
                              alt={partner.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span
                          className={`max-w-[75%] px-3.5 py-2 text-sm rounded-2xl leading-relaxed ${
                            b.from === "partner"
                              ? "bg-white text-gray-700 rounded-tl-none shadow-sm"
                              : "bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-tr-none"
                          }`}
                        >
                          {b.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-1">Tarif Sewa</p>
                    <p
                      className="text-2xl font-black text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {partner.price}
                    </p>
                  </div>

                  <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Sewa Sekarang
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
