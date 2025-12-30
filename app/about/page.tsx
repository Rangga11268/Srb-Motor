"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 container mx-auto px-6 border-b border-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl"
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase mb-4 block text-sm md:text-base">
            // Visi Kami
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-[10vw] leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 md:mb-12">
            Definisi Ulang <br />
            Kultur <span className="text-cyan-400">Jalanan</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-8 md:mt-12">
          <div className="font-mono text-zinc-500 text-base md:text-lg leading-relaxed">
            <p className="mb-6 md:mb-8">
              DIDIRIKAN PADA 2024, SRB MOTORS LAHIR DARI KEINGINAN UNTUK
              MENGUBAH MODEL DEALER TRADISIONAL. KAMI TIDAK HANYA JUAL BELI
              MOTOR; KAMI MENCIPTAKAN PENGALAMAN UNTUK PENGENDARA MODERN.
            </p>
            <p>
              SETIAP UNIT YANG MASUK KE STUDIO KAMI MELEWATI PROSES INSPEKSI
              150-TITIK YANG KETAT, MEMASTIKAN SAAT ANDA MENARIK GAS, ANDA HANYA
              MERASAKAN ADRENALIN MURNI.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
            <div className="absolute inset-0 bg-cyan-400/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/assets/img/about us.jpeg"
              alt="SRB Studio"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Stats / Manifesto Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-900">
        {[
          { label: "UNIT TERJUAL", value: "850+" },
          { label: "PELANGGAN PUAS", value: "100%" },
          { label: "TAHUN AKTIF", value: "05" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-8 md:p-12 border-b md:border-b-0 border-zinc-900 md:border-r flex flex-col justify-between h-[200px] md:h-[300px] hover:bg-zinc-900/30 transition-colors group"
          >
            <ArrowDownRight
              className="text-zinc-700 group-hover:text-cyan-400 transition-colors"
              size={24}
            />
            <div>
              <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-2">
                {stat.value}
              </h3>
              <p className="font-mono text-cyan-400 text-xs md:text-sm tracking-widest">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Team / Culture */}
      <section className="py-20 md:py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter">
            Tim <span className="text-cyan-400">Kami</span>
          </h2>
          <p className="font-mono text-zinc-500 text-left md:text-right hidden md:block">
            // MEKANIK AHLI <br />
            // PENGENDARA BERGAIRAH
          </p>
        </div>

        <div className="w-full bg-zinc-900 aspect-video rounded-3xl overflow-hidden relative flex items-center justify-center group">
          <h3 className="relative z-10 font-display font-black text-6xl md:text-9xl text-transparent stroke-text group-hover:text-white/10 transition-colors duration-500 select-none">
            SRB.CREW
          </h3>
          <div className="absolute inset-0 bg-black/50" />
          {/* Placeholder for team image if available, using pattern for now */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
