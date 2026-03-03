"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TextMarquee } from "@/components/ui/TextMarquee";
import { FAQ } from "@/components/sections/FAQ";
import { ArrowDownRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 md:pt-32">
      <Navbar />

      <div className="container mx-auto px-6 mb-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-8">
            Lebih Dari
            <br />
            <span className="text-zinc-600">Sekadar Dealer.</span>
          </h1>
          <p className="font-mono text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            SRB Motors didirikan dengan satu visi: menjadi destinasi utama bagi
            para pencinta motor yang menginginkan pengalaman pembelian premium,
            transparan, dan tanpa kompromi.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 mb-24 max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900">
            {/* Generic geometric pattern for studio */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center">
              <span className="font-display font-medium text-4xl text-zinc-700 uppercase tracking-widest">
                SRB Studio
              </span>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 border-y border-zinc-900">
          {[
            { label: "UNIT TERJUAL", value: "850+" },
            { label: "PELANGGAN PUAS", value: "100%" },
            { label: "TAHUN AKTIF", value: "05" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 md:p-12 border-b md:border-b-0 border-zinc-900 md:border-r flex flex-col justify-between h-[200px] md:h-[300px] hover:bg-zinc-900 transition-colors group"
            >
              <ArrowDownRight
                className="text-zinc-700 group-hover:text-white transition-colors"
                size={24}
              />
              <div>
                <h3 className="text-5xl md:text-7xl font-display font-medium text-white mb-2">
                  {stat.value}
                </h3>
                <p className="font-mono text-zinc-500 text-xs md:text-sm tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-24">
          <div className="p-8 border border-zinc-900 bg-zinc-950/50 rounded-2xl hover:bg-zinc-900 transition-colors">
            <h3 className="font-display font-medium text-2xl text-white mb-4 uppercase">
              Kualitas Premium
            </h3>
            <p className="font-mono text-zinc-500 text-sm leading-relaxed">
              Memastikan setiap unit yang keluar dari studio kami dalam kondisi
              sempurna dan siap menguasai jalanan.
            </p>
          </div>
          <div className="p-8 border border-zinc-900 bg-zinc-950/50 rounded-2xl md:-translate-y-8 hover:bg-zinc-900 transition-colors">
            <h3 className="font-display font-medium text-2xl text-white mb-4 uppercase">
              Transparansi
            </h3>
            <p className="font-mono text-zinc-500 text-sm leading-relaxed">
              Tanpa biaya tersembunyi. Proses jelas dari awal pemilihan unit
              hingga STNK di tangan Anda.
            </p>
          </div>
          <div className="p-8 border border-zinc-900 bg-zinc-950/50 rounded-2xl hover:bg-zinc-900 transition-colors">
            <h3 className="font-display font-medium text-2xl text-white mb-4 uppercase">
              Pelayanan Spesifik
            </h3>
            <p className="font-mono text-zinc-500 text-sm leading-relaxed">
              Konsultasi mendalam untuk memastikan Anda membawa pulang motor
              yang benar-benar sesuai dengan karakter Anda.
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-zinc-900 py-4 bg-black overflow-hidden hide-scrollbar">
        <TextMarquee text="TRANSPARAN ▪ PREMIUM ▪ CEPAT ▪ TERPERCAYA ▪ SRB MOTORS STUDIO" />
      </div>

      <FAQ />

      <Footer />
    </main>
  );
}
