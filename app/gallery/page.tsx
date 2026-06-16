"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { motors } from "@/lib/motor-data";
import { Search } from "lucide-react";
import { MotorCard } from "@/components/ui/MotorCard";
import { useSearchParams } from "next/navigation";

function GalleryContent() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync state with URL search param
  useEffect(() => {
    const urlQuery = searchParams.get("search") || "";
    setSearchQuery(urlQuery);
  }, [searchParams]);

  // Reset pagination when search query or filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [filter, searchQuery, priceFilter]);

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
        if (priceFilter === "LOW") priceMatch = price < 20000000;
        else if (priceFilter === "MID")
          priceMatch = price >= 20000000 && price < 30000000;
        else if (priceFilter === "HIGH") priceMatch = price >= 30000000;
      }

      return brandMatch && searchMatch && priceMatch;
    });
  }, [filter, searchQuery, priceFilter]);

  return (
    <main className="min-h-screen bg-white text-[#262626]">
      <Navbar />

      <section className="pt-32 md:pt-40 px-6 container mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-8 text-[#262626]">
          Koleksi <span className="font-bold">Kami</span>
        </h1>
        <div className="flex flex-col gap-6 border-b border-gray-200 pb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="CARI MOTOR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-none pl-12 pr-6 py-3 font-sans text-sm text-[#262626] placeholder:text-gray-400 focus:outline-none focus:border-[#1c69d4] transition-colors uppercase tracking-widest outline-none"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-sans text-gray-400 text-xs font-bold uppercase tracking-widest">
              // KOLEKSI TERBARU DARI DEALER RESMI.
            </p>

            {/* Brand Filter */}
            <div className="flex flex-wrap gap-3">
              {["ALL", "HONDA", "YAMAHA"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setFilter(brand)}
                  className={cn(
                    "px-4 md:px-6 py-2 rounded-none font-sans font-bold text-xs md:text-sm uppercase tracking-widest transition-colors border cursor-pointer",
                    filter === brand
                      ? "bg-[#1c69d4] text-white border-[#1c69d4]"
                      : "bg-transparent text-gray-500 border-gray-200 hover:border-[#1c69d4] hover:text-[#1c69d4]"
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
                { label: "< 20JT", value: "LOW" },
                { label: "20-30JT", value: "MID" },
                { label: "> 30JT", value: "HIGH" },
              ].map((price) => (
                <button
                  key={price.value}
                  onClick={() => setPriceFilter(price.value)}
                  className={cn(
                    "px-4 py-2 rounded-none font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors border cursor-pointer",
                    priceFilter === price.value
                      ? "bg-[#1c69d4] text-white border-[#1c69d4]"
                      : "bg-transparent text-gray-500 border-gray-200 hover:border-[#1c69d4] hover:text-[#1c69d4]"
                  )}
                >
                  {price.label}
                </button>
              ))}
            </div>

            <span className="font-sans text-gray-500 font-bold text-xs uppercase tracking-widest">
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
            {filteredImages.slice(0, visibleCount).map((img) => (
              <div key={img.id} className="h-full">
                <MotorCard motor={img} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length > visibleCount && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="w-full md:w-auto px-12 py-5 border border-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
            >
              Load More / Lihat Lebih Banyak
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#1c69d4] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
