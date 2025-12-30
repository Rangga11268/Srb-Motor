"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      <Navbar />

      <section className="pt-40 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 pb-32">
        {/* Text Side */}
        <div>
          <span className="text-lime-400 font-mono tracking-widest uppercase mb-4 block">
            // Hubungi Kami
          </span>
          <h1 className="font-display font-black text-[15vw] md:text-[8vw] leading-[0.8] uppercase tracking-tighter mb-12">
            Bicara <br />
            <span className="text-transparent stroke-text hover:text-lime-400 transition-colors duration-300">
              Bisnis
            </span>
          </h1>

          <div className="space-y-12 font-mono text-lg">
            <div>
              <h3 className="text-zinc-500 text-sm mb-4">KUNJUNGI STUDIO</h3>
              <p className="font-bold">
                JL. RAYA PENGGILINGAN NO. 12
                <br />
                CAKUNG, JAKARTA TIMUR
              </p>
            </div>
            <div>
              <h3 className="text-zinc-500 text-sm mb-4">KONTAK LANGSUNG</h3>
              <p className="font-bold text-lime-400 underline decoration-lime-400/30 underline-offset-4">
                HELLO@SRB-MOTORS.ID
              </p>
              <p className="font-bold mt-2">+62 812 3456 7890</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-zinc-900/30 p-8 md:p-12 border border-zinc-800 rounded-3xl">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-zinc-500 text-sm uppercase">
                  Nama Depan
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-bold focus:border-lime-400 outline-none transition-colors"
                  placeholder="BUDI"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-zinc-500 text-sm uppercase">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-bold focus:border-lime-400 outline-none transition-colors"
                  placeholder="SANTOSO"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-zinc-500 text-sm uppercase">
                Alamat Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-bold focus:border-lime-400 outline-none transition-colors"
                placeholder="BUDI@CONTOH.COM"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-zinc-500 text-sm uppercase">
                Pesan
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-bold focus:border-lime-400 outline-none transition-colors resize-none"
                placeholder="SAYA TERTARIK DENGAN..."
              />
            </div>

            <button className="w-full bg-lime-400 text-black py-4 font-display font-black text-xl uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group">
              Kirim Pesan{" "}
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
