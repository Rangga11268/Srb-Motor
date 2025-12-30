"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motors } from "@/lib/motor-data";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function MotorDetailPage() {
  const { id } = useParams();
  const motor = motors.find((m) => m.id === id);

  if (!motor) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black font-sans">
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40 md:top-32 md:left-10">
        <Link
          href="/gallery"
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase font-mono text-sm font-bold group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Kembali ke Galeri
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT: VISUALS (Fixed on Desktop) */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-zinc-900/30 flex items-center justify-center p-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 to-transparent opacity-50" />

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={motor.image}
            alt={motor.name}
            className="w-full max-w-xl h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 pt-20 lg:pt-0"
          />

          <div className="absolute bottom-8 left-8 z-20">
            <span className="bg-lime-400 text-black px-4 py-2 font-mono font-bold text-sm uppercase rounded tracking-widest">
              {motor.category}
            </span>
          </div>
        </div>

        {/* RIGHT: DETAILS (Scrollable) */}
        <div className="w-full lg:w-1/2 lg:ml-[50%] bg-zinc-950 min-h-screen border-l border-zinc-900">
          <div className="p-8 md:p-16 pt-24 md:pt-16 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-zinc-500 font-mono text-sm block mb-4 uppercase tracking-widest">
                // {motor.brand} OFFICIAL
              </span>
              <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-[0.9] text-white mb-4 md:mb-6">
                {motor.name}
              </h1>
              <p className="font-mono text-cyan-400 text-2xl md:text-4xl font-bold mb-12 border-b border-zinc-900 pb-12">
                {motor.price}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {motor.description.split("•").map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg text-center flex items-center justify-center"
                  >
                    <span className="font-mono font-bold text-xs uppercase text-zinc-300">
                      {item.trim()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div className="mb-16">
                <h3 className="text-white font-display font-black text-2xl uppercase mb-8 flex items-center gap-3">
                  <Check className="text-lime-400" size={24} /> Spesifikasi
                  Lengkap
                </h3>
                <div className="space-y-0">
                  {motor.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-zinc-900 group hover:bg-zinc-900/30 transition-colors px-2"
                    >
                      <span className="text-zinc-500 font-mono text-xs uppercase mb-1 md:mb-0 w-1/3">
                        {spec.label}
                      </span>
                      <span className="text-white font-bold text-sm md:text-lg w-2/3 md:text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="sticky bottom-6 z-30">
                <Link
                  href={`https://wa.me/628978638972?text=Saya%20tertarik%20dengan%20${encodeURIComponent(
                    motor.name
                  )}`}
                  target="_blank"
                  className="w-full bg-cyan-400 text-black py-5 rounded-full font-display font-black text-xl uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-cyan-400/20"
                >
                  Pesan Unit Ini
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
