"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    motor: "Honda Vario 160",
    rating: 5,
    review:
      "Pengalaman beli motor baru di SRB sangat menyenangkan. Unit diantar cepat, kondisi mulus 100% Brand New In Box. Terima kasih!",
    image: "/assets/icon/logo trans.webp",
  },
  {
    id: 2,
    name: "Andi Wijaya",
    motor: "Yamaha Aerox",
    rating: 5,
    review:
      "Harga OTR terbaik dibanding dealer lain. Proses kredit dibantu sampai goal. Pelayanan ramah dan transparan.",
    image: "/assets/icon/logo trans.webp",
  },
  {
    id: 3,
    name: "Siti Rahayu",
    motor: "Honda Beat",
    rating: 5,
    review:
      "Motor baru mendarat dengan aman. Garansi resmi aktif, STNK cepat keluar. Sangat puas belanja di SRB Motors.",
    image: "/assets/icon/logo trans.webp",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-black border-y border-zinc-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-500 font-mono tracking-widest uppercase text-sm block mb-4">
            // Testimoni Pelanggan
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-7xl uppercase">
            Kata <span className="text-zinc-500">Mereka</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-black border border-zinc-800 p-8 md:p-12 rounded-2xl relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 text-white/5" size={64} />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="fill-white text-white" size={20} />
              ))}
            </div>

            {/* Review */}
            <p className="font-mono text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed relative z-10">
              "{testimonials[activeIndex].review}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="font-display font-bold text-black text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-display font-medium text-white text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="font-mono text-sm text-zinc-500">
                  {testimonials[activeIndex].motor}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-white w-8"
                    : "bg-zinc-700 hover:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
