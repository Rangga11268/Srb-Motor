"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 md:pt-40 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-20 md:pb-32">
        {/* Text Side */}
        <div>
          <span className="text-zinc-500 font-mono tracking-widest uppercase mb-4 block">
            // Hubungi Kami
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-[8vw] leading-[0.9] md:leading-[0.8] uppercase tracking-tight mb-8 md:mb-12">
            Bicara <br />
            <span className="text-zinc-500">Bisnis</span>
          </h1>

          <div className="space-y-12 font-mono text-lg">
            <div>
              <h3 className="text-zinc-500 text-sm mb-4">KUNJUNGI STUDIO</h3>
              <a
                href="https://maps.app.goo.gl/h7ycKy2T6niHfibz7"
                target="_blank"
                className="font-bold hover:text-zinc-300 transition-colors block"
              >
                JL. LORI SAKTI, RT 01 / RW 01, NO. 22
                <br />
                KALIABANG TENGAH, BEKASI UTARA
              </a>
            </div>
            <div>
              <h3 className="text-zinc-500 text-sm mb-4">KONTAK LANGSUNG</h3>
              <p className="font-bold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors cursor-pointer block w-max">
                HELLO@SRB-MOTORS.ID
              </p>
              <p className="font-bold mt-2">+62 897 8638 849</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-zinc-900/30 p-8 md:p-12 border border-zinc-800 rounded-2xl">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-zinc-500 text-sm uppercase">
                  Nama Depan
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-medium focus:border-white outline-none transition-colors"
                  placeholder="BUDI"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-zinc-500 text-sm uppercase">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-medium focus:border-white outline-none transition-colors"
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
                className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-medium focus:border-white outline-none transition-colors"
                placeholder="BUDI@CONTOH.COM"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-zinc-500 text-sm uppercase">
                Pesan
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl font-medium focus:border-white outline-none transition-colors resize-none"
                placeholder="SAYA TERTARIK DENGAN..."
              />
            </div>

            <button className="w-full bg-white text-black py-4 font-display font-medium text-xl uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group rounded-full">
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
