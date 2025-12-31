"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motors } from "@/lib/motor-data";
import Link from "next/link";
import { ArrowUpRight, Search, Check } from "lucide-react";
import { useCompare } from "@/components/providers/CompareProvider";

export default function GalleryPage() {
  const [filter, setFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("ALL");
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();

  const filteredImages = useMemo(() => {
    return motors.filter((motor) => {
      // Brand filter
      const brandMatch = filter === "ALL" || motor.brand === filter;

      // Search filter
      const searchMatch = motor.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Price filter
      let priceMatch = true;
      if (priceFilter !== "ALL") {
        const price = parseInt(motor.price.replace(/[^0-9]/g, ""));
        if (priceFilter === "LOW") priceMatch = price < 10000000;
        else if (priceFilter === "MID")
          priceMatch = price >= 10000000 && price < 20000000;
        else if (priceFilter === "HIGH") priceMatch = price >= 20000000;
      }

      return brandMatch && searchMatch && priceMatch;
    });
  }, [filter, searchQuery, priceFilter]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      <Navbar />

      <section className="pt-32 md:pt-40 px-6 container mx-auto mb-12">
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-[12vw] leading-[0.9] md:leading-[0.8] mb-8 uppercase tracking-tighter">
          Koleksi <br />
          <span className="text-cyan-400">Kami</span>
        </h1>
        <div className="flex flex-col gap-6 border-b border-zinc-900 pb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={20}
            />
            <input
              type="text"
              placeholder="CARI MOTOR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-12 pr-6 py-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-mono text-zinc-500 text-sm md:text-base">
              // KOLEKSI TERBARU DARI DEALER RESMI.
            </p>

            {/* Brand Filter */}
            <div className="flex flex-wrap gap-3">
              {["ALL", "HONDA", "YAMAHA"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setFilter(brand)}
                  className={cn(
                    "px-4 md:px-6 py-2 rounded-full font-mono font-bold text-xs md:text-sm transition-colors border",
                    filter === brand
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-transparent text-zinc-500 border-zinc-800 hover:border-cyan-400 hover:text-white"
                  )}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "SEMUA", value: "ALL" },
                { label: "< 10JT", value: "LOW" },
                { label: "10-20JT", value: "MID" },
                { label: "> 20JT", value: "HIGH" },
              ].map((price) => (
                <button
                  key={price.value}
                  onClick={() => setPriceFilter(price.value)}
                  className={cn(
                    "px-4 py-2 rounded-full font-mono font-bold text-xs transition-colors border",
                    priceFilter === price.value
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-transparent text-zinc-500 border-zinc-800 hover:border-cyan-400 hover:text-white"
                  )}
                >
                  {price.label}
                </button>
              ))}
            </div>

            <span className="font-mono text-cyan-400 font-bold text-sm">
              [{filteredImages.length} UNIT]
            </span>
          </div>
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
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link href={`/motor/${img.id}`} className="block">
                  <div className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden mb-6 border border-zinc-800 group-hover:border-cyan-400 transition-colors duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-50" />

                    {/* Compare Checkbox */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isInCompare(img.id)) {
                          removeFromCompare(img.id);
                        } else {
                          addToCompare(img);
                        }
                      }}
                      className={cn(
                        "absolute top-4 right-4 z-30 p-2 rounded-full transition-all border",
                        isInCompare(img.id)
                          ? "bg-cyan-400 border-cyan-400 text-black"
                          : "bg-black/50 border-zinc-700 text-zinc-500 hover:text-white hover:border-white"
                      )}
                      title="Bandingkan"
                    >
                      <Check
                        size={16}
                        className={cn(
                          isInCompare(img.id) ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {!isInCompare(img.id) && (
                        <span className="text-[10px] font-mono uppercase font-bold px-1">
                          Vs
                        </span>
                      )}
                    </button>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-cyan-400/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 gap-2">
                      <span className="font-display font-black text-2xl text-black uppercase tracking-tighter">
                        Lihat Detail
                      </span>
                      <ArrowUpRight className="text-black" />
                    </div>

                    <img
                      src={img.image}
                      alt={img.name}
                      className="relative z-0 w-[80%] h-auto object-contain mx-auto my-auto top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700 contrast-125"
                    />
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-mono text-xs text-cyan-400 mb-2 block">
                        {img.category}
                      </span>
                      <h3 className="font-display font-black text-3xl uppercase leading-none mb-2">
                        {img.name}
                      </h3>
                      <p className="font-mono text-white/50 text-xl font-bold">
                        {img.price}
                      </p>
                    </div>
                    <span className="bg-zinc-900 text-zinc-400 px-3 py-1 rounded text-xs font-mono font-bold">
                      {img.brand}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
