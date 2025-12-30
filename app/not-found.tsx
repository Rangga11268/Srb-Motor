"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="font-display font-black text-[20vw] md:text-[15vw] leading-none text-transparent stroke-text">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase mb-4">
              Halaman <span className="text-cyan-400">Tidak Ditemukan</span>
            </h2>
            <p className="font-mono text-zinc-500 text-lg mb-12">
              // Sepertinya Anda tersesat. Mari kembali ke jalur yang benar.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-wide hover:bg-cyan-300 transition-colors"
            >
              <Home size={20} />
              Kembali ke Beranda
            </Link>

            <Link
              href="/gallery"
              className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Lihat Koleksi Motor
            </Link>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
