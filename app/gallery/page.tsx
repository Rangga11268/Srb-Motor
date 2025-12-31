"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motors } from "@/lib/motor-data";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useCompare } from "@/components/providers/CompareProvider";
import { MotorCard } from "@/components/ui/MotorCard";

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
            {filteredImages.map((img, i) => (
              <div key={img.id} className="h-full">
                <MotorCard motor={img} index={i} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
