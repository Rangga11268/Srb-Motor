"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { TextMarquee } from "@/components/ui/TextMarquee";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-32"
    >
      {/* CENTERED MASSIVE TYPOGRAPHY (Layer 0) */}
      <motion.div
        style={{ y: yText }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none"
      >
        <h1 className="font-display font-black text-[18vw] md:text-[20vw] lg:text-[22vw] leading-[0.8] text-white tracking-tighter text-center mt-32 md:mt-0">
          MIMPI
          <br />
          ANDA
        </h1>
      </motion.div>

      {/* FLOATING PRODUCTS (Layer 1) */}
      <motion.div
        style={{ y: yImage }}
        className="relative z-10 w-full flex justify-center items-center mt-10 md:mt-0"
      >
        {/* Main Hero Bike */}
        <div className="relative w-full max-w-[90vw] md:max-w-6xl aspect-[16/9] md:aspect-auto flex items-center justify-center">
          {/* We use 3 images to mimic the reference cluster, or just one big one if verified */}
          <img
            src="/assets/img/honda/HondaVariong.png"
            alt="Hero Motor 1"
            className="w-[80%] md:w-[60%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Secondary Bikes Flanking (Optional/Visual Interest) */}
          <img
            src="/assets/img/yamaha/aerox 155.png"
            alt="Hero Motor 2"
            className="absolute left-0 bottom-0 w-[40%] md:w-[30%] h-auto object-contain opacity-80 blur-[2px] z-10 -rotate-12 translate-y-20 grayscale brightness-50"
          />
          <img
            src="/assets/img/honda/beat.png"
            alt="Hero Motor 3"
            className="absolute right-0 bottom-0 w-[40%] md:w-[30%] h-auto object-contain opacity-80 blur-[2px] z-10 rotate-12 translate-y-20 grayscale brightness-50"
          />
        </div>
      </motion.div>

      {/* BOTTOM ACTION BAR / MARQUEE (Layer 2) */}
      <div className="relative z-20 w-full mt-auto">
        {/* Floating Actions above Marquee */}
        {/* Floating Actions above Marquee */}
        <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <Link
            href="/gallery"
            className="group bg-lime-400 text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-display font-black text-lg md:text-xl uppercase tracking-tight hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Lihat Unit{" "}
            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group bg-transparent border border-white/20 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-display font-black text-lg md:text-xl uppercase tracking-tight hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
          >
            Buat Janji
          </Link>
        </div>

        {/* SOLID NEON MARQUEE */}
        <div className="w-full bg-lime-400 py-3 overflow-hidden border-y-4 border-black">
          <TextMarquee text="KUALITAS PREMIUM ▪ GARANSI 100% ▪ PENGIRIMAN CEPAT ▪ SRB MOTORS STUDIO" />
        </div>
      </div>

      {/* Floating Chat Bubble (Reference Match) */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="https://wa.me/628978638972?text=Halo%20SRB%20Motors,%20saya%20tertarik%20dengan%20unit%20motor%20anda."
          target="_blank"
          className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-bounce"
        >
          <MessageCircle size={32} fill="currentColor" />
        </Link>
      </div>
    </section>
  );
}
