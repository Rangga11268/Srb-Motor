"use client";

import { useCompare } from "@/components/providers/CompareProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, X, Check, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ComparePage() {
  const { selectedMotors, removeFromCompare } = useCompare();

  if (selectedMotors.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black">
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center p-6 text-center">
          <AlertCircle size={48} className="text-zinc-600 mb-4" />
          <h1 className="font-display font-black text-2xl uppercase mb-2">
            Belum ada motor dipilih
          </h1>
          <p className="font-mono text-zinc-500 mb-8">
            Silakan pilih minimal 2 motor dari galeri untuk dibandingkan.
          </p>
          <Link
            href="/gallery"
            className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold font-mono tracking-wider uppercase hover:bg-white transition-colors"
          >
            Kembali ke Galeri
          </Link>
        </div>
      </main>
    );
  }

  // Extract all unique spec keys from selected motors to ensure alignment
  const allSpecLabels = Array.from(
    new Set(selectedMotors.flatMap((m) => m.specifications.map((s) => s.label)))
  );

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black pt-24 md:pt-32">
      <Navbar />

      <div className="container mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-4">
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase font-mono text-sm font-bold group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Kembali
            </Link>
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase">
              Komparasi <span className="text-cyan-400">Unit</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm font-mono">
            <Check className="text-cyan-400" size={16} />
            <span>Maksimal 3 unit untuk perbandingan</span>
          </div>
        </div>

        {/* Scroll Container with Fade Edges */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 -mx-6 px-6 relative scrollbar-hide">
            <div className="min-w-max md:min-w-0 md:w-full">
              {/* Dynamic Grid Config */}
              <style jsx>{`
                .compare-grid {
                  display: grid;
                  grid-template-columns: 100px repeat(
                      ${selectedMotors.length},
                      minmax(140px, 1fr)
                    );
                }
                @media (min-width: 768px) {
                  .compare-grid {
                    grid-template-columns: 250px 1fr 1fr 1fr;
                  }
                }
              `}</style>

              {/* Table Header */}
              <div className="compare-grid gap-2 md:gap-0 border-b border-zinc-800 pb-8 mb-8 sticky top-0 bg-black z-20">
                {/* Sticky Label Column */}
                <div className="pt-20 sticky left-0 bg-black z-30 border-r border-zinc-900 pr-3 md:pr-8 flex flex-col justify-end pb-4 md:pb-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)] md:shadow-none">
                  <span className="font-mono text-cyan-400 font-bold block mb-1 text-[10px] md:text-sm tracking-widest leading-tight">
                    // UNIT
                  </span>
                  <p className="text-[10px] md:text-sm text-zinc-500 hidden md:block leading-relaxed">
                    Bandingkan spesifikasi teknis dan harga side-by-side untuk
                    menentukan pilihan terbaik Anda.
                  </p>
                  {/* Mobile Scroll Hint */}
                  <div className="md:hidden mt-2 flex items-center gap-1 text-zinc-600 text-[9px] animate-pulse">
                    <ArrowRight size={10} />
                    <span>Geser</span>
                  </div>
                </div>

                {/* Selected Motors Headers */}
                {selectedMotors.map((motor) => (
                  <div
                    key={motor.id}
                    className="relative group px-1 md:px-6 md:border-r border-zinc-900 last:border-r-0 snap-start"
                  >
                    <button
                      onClick={() => removeFromCompare(motor.id)}
                      className="absolute top-2 right-1 md:right-6 bg-black/50 hover:bg-red-500 text-zinc-400 hover:text-white rounded-full p-1.5 transition-all z-10 backdrop-blur-md"
                      title="Hapus"
                    >
                      <X size={12} />
                    </button>
                    <div className="h-full flex flex-col items-center text-center pt-8">
                      <div className="relative w-20 md:w-48 h-20 md:h-40 mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={motor.image}
                          alt={motor.name}
                          className="relative w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                      <div className="mt-auto w-full">
                        <span className="font-mono text-[9px] md:text-xs text-cyan-400 font-bold mb-1 block tracking-widest uppercase truncate max-w-full">
                          {motor.category}
                        </span>
                        <h3 className="font-display font-black text-xs md:text-2xl uppercase leading-none mb-2 min-h-[2.5em] md:min-h-[2em] flex items-center justify-center line-clamp-2">
                          {motor.name}
                        </h3>
                        <p className="font-mono text-white text-[10px] md:text-xl font-bold mb-4 truncate">
                          {motor.price}
                        </p>
                        <Link
                          href={`/motor/${motor.id}`}
                          className="inline-flex items-center justify-center gap-1 md:gap-2 text-[9px] md:text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-cyan-400 transition-colors border border-zinc-800 hover:border-cyan-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full w-full md:w-auto"
                        >
                          Detail{" "}
                          <ArrowRight size={10} className="md:w-3 md:h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Empty Slots for Desktop Balance (Hidden on Mobile) */}
                {Array.from({ length: 3 - selectedMotors.length }).map(
                  (_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="hidden md:flex flex-col items-center justify-center border-r border-zinc-900 last:border-r-0 opacity-20"
                    >
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-zinc-500 flex items-center justify-center mb-4">
                        <span className="text-4xl text-zinc-500">+</span>
                      </div>
                      <span className="font-mono text-sm text-zinc-500 uppercase">
                        Kosong
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Specs Comparison */}
              <div className="space-y-0">
                {/* Quick Highlights */}
                <div className="grid grid-cols-[var(--mobile-cols)] md:grid-cols-[var(--desktop-cols)] gap-0 md:gap-0 py-4 md:py-6 border-b border-zinc-900 items-center hover:bg-white/5 transition-colors">
                  <div className="sticky left-0 bg-black/95 backdrop-blur-sm z-20 border-r border-zinc-900 pr-1 md:pr-8 py-2 font-mono font-bold text-zinc-400 uppercase text-[9px] md:text-sm tracking-wider shadow-[2px_0_10px_rgba(0,0,0,0.5)] md:shadow-none px-1 md:px-0">
                    Highlights
                  </div>
                  {selectedMotors.map((motor) => (
                    <div
                      key={motor.id}
                      className="flex flex-wrap justify-center gap-1 md:gap-2 px-1 md:px-6 md:border-r border-zinc-900 last:border-r-0 snap-start"
                    >
                      {motor.description.split("•").map((desc, i) => (
                        <span
                          key={i}
                          className="text-[9px] md:text-[11px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300 whitespace-nowrap"
                        >
                          {desc.trim()}
                        </span>
                      ))}
                    </div>
                  ))}
                  {Array.from({ length: 3 - selectedMotors.length }).map(
                    (_, i) => (
                      <div
                        key={`empty-h-${i}`}
                        className="hidden md:block md:border-r border-zinc-900 last:border-r-0"
                      />
                    )
                  )}
                </div>

                {allSpecLabels.map((label, idx) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[var(--mobile-cols)] md:grid-cols-[var(--desktop-cols)] gap-0 md:gap-0 py-3 md:py-5 border-b border-zinc-900 md:border-b-0 items-center group/row ${
                      idx % 2 === 0 ? "bg-zinc-900/20" : "bg-transparent"
                    } hover:bg-zinc-800/50 transition-colors`}
                  >
                    <div className="sticky left-0 bg-black z-20 md:bg-transparent md:static border-r border-zinc-900 pr-1 md:pr-8 py-2 font-mono font-bold text-zinc-500 text-[9px] md:text-sm break-words group-hover/row:text-cyan-400 transition-colors shadow-[2px_0_10px_rgba(0,0,0,0.5)] md:shadow-none h-full flex items-center px-1 md:px-0">
                      <div className="bg-black/95 backdrop-blur-sm absolute inset-0 -z-10 md:hidden" />
                      <span className="relative z-10">{label}</span>
                    </div>
                    {selectedMotors.map((motor) => {
                      const spec = motor.specifications.find(
                        (s) => s.label === label
                      );
                      return (
                        <div
                          key={motor.id}
                          className="font-medium text-[9px] md:text-base text-center px-1 md:px-6 md:border-r border-zinc-900 last:border-r-0 text-zinc-300 group-hover/row:text-white transition-colors snap-start"
                        >
                          {spec ? spec.value : "-"}
                        </div>
                      );
                    })}
                    {Array.from({ length: 3 - selectedMotors.length }).map(
                      (_, i) => (
                        <div
                          key={`empty-s-${i}`}
                          className="hidden md:block md:border-r border-zinc-900 last:border-r-0"
                        />
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
