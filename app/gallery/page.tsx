"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/assets/img/honda/vario 160.png",
    title: "VARIO 160",
    category: "MATIC SPORT",
    brand: "HONDA",
  },
  {
    src: "/assets/img/yamaha/aerox 155.png",
    title: "AEROX 155",
    category: "MAXI SCOOTER",
    brand: "YAMAHA",
  },
  {
    src: "/assets/img/honda/pcx 160.png",
    title: "PCX 160",
    category: "PREMIUM",
    brand: "HONDA",
  },
  {
    src: "/assets/img/yamaha/NMax Turbo.png",
    title: "NMAX TURBO",
    category: "PERFORMANCE",
    brand: "YAMAHA",
  },
  {
    src: "/assets/img/honda/adv 160.png",
    title: "ADV 160",
    category: "ADVENTURE",
    brand: "HONDA",
  },
  {
    src: "/assets/img/yamaha/xmax.png",
    title: "XMAX 250",
    category: "ULTIMATE",
    brand: "YAMAHA",
  },
  {
    src: "/assets/img/honda/scoopy.png",
    title: "SCOOPY",
    category: "RETRO",
    brand: "HONDA",
  },
  {
    src: "/assets/img/yamaha/Fazzio.png",
    title: "FAZZIO",
    category: "HYBRID",
    brand: "YAMAHA",
  },
  {
    src: "/assets/img/honda/stylo.png",
    title: "STYLO 160",
    category: "FASHION",
    brand: "HONDA",
  },
  {
    src: "/assets/img/yamaha/Grand Filano.png",
    title: "FILANO",
    category: "CLASSIC",
    brand: "YAMAHA",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("ALL");

  const filteredImages = galleryImages.filter((img) =>
    filter === "ALL" ? true : img.brand === filter
  );

  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      <Navbar />

      <section className="pt-40 px-6 container mx-auto mb-12">
        <h1 className="font-display font-black text-[15vw] md:text-[12vw] leading-[0.8] mb-8 uppercase tracking-tighter">
          Koleksi <br />
          <span className="text-lime-400">Kami</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-zinc-900 pb-8 gap-8">
          <p className="font-mono text-zinc-500 max-w-md">
            // PILIHAN TERBAIK DARI MOTOR BEKAS BERKUALITAS. <br />
            // DIINSPEKSI. TERVERIFIKASI. SIAP DIGAS.
          </p>

          <div className="flex gap-4">
            {["ALL", "HONDA", "YAMAHA"].map((brand) => (
              <button
                key={brand}
                onClick={() => setFilter(brand)}
                className={cn(
                  "px-6 py-2 rounded-full font-mono font-bold text-sm transition-colors border",
                  filter === brand
                    ? "bg-lime-400 text-black border-lime-400"
                    : "bg-transparent text-zinc-500 border-zinc-800 hover:border-lime-400 hover:text-white"
                )}
              >
                {brand}
              </button>
            ))}
          </div>

          <span className="font-mono text-lime-400 font-bold hidden md:block">
            [{filteredImages.length} UNIT TERSEDIA]
          </span>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden mb-6 border border-zinc-800 group-hover:border-lime-400 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-50" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-lime-400/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <span className="font-display font-black text-4xl text-black uppercase tracking-tighter">
                      Lihat
                    </span>
                  </div>

                  <img
                    src={img.src}
                    alt={img.title}
                    className="relative z-0 w-[80%] h-auto object-contain mx-auto my-auto top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700 contrast-125"
                  />
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-mono text-xs text-lime-400 mb-2 block">
                      {img.category}
                    </span>
                    <h3 className="font-display font-black text-4xl uppercase leading-none">
                      {img.title}
                    </h3>
                  </div>
                  <span className="bg-zinc-900 text-zinc-400 px-3 py-1 rounded text-xs font-mono font-bold">
                    {img.brand}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
