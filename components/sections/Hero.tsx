"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24 md:pt-32"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vh] bg-cyan-400/5 rounded-full blur-[80px]" />
      </div>

      {/* CENTERED MASSIVE TYPOGRAPHY (Layer 0) */}
      <motion.div
        style={{ y: yText, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black text-[15vw] md:text-[20vw] lg:text-[22vw] leading-[0.8] text-white tracking-tighter text-center mt-20 md:mt-0"
        >
          <span className="bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">
            MIMPI
          </span>
          <br />
          <span className="bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-600 bg-clip-text text-transparent">
            ANDA
          </span>
        </motion.h1>
      </motion.div>

      {/* FLOATING PRODUCTS (Layer 1) */}
      <motion.div
        style={{ y: yImage }}
        className="relative z-10 w-full flex justify-center items-center mt-10 md:mt-0"
      >
        {/* Main Hero Bike */}
        <div className="relative w-full max-w-[90vw] md:max-w-6xl aspect-[16/9] md:aspect-auto flex items-center justify-center">
          {/* Main Image with next/image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[80%] md:w-[60%] h-[300px] md:h-[400px] z-20"
          >
            <Image
              src="/assets/img/honda/HondaVariong.png"
              alt="Hero Motor 1"
              fill
              sizes="(max-width: 768px) 80vw, 60vw"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />
          </motion.div>

          {/* Secondary Bikes Flanking */}
          <div className="absolute left-0 bottom-0 w-[35%] md:w-[25%] h-[150px] md:h-[200px] opacity-60 z-10 -rotate-12 translate-y-10">
            <Image
              src="/assets/img/yamaha/aerox 155.png"
              alt="Hero Motor 2"
              fill
              sizes="(max-width: 768px) 35vw, 25vw"
              className="object-contain blur-[2px] grayscale brightness-50"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[35%] md:w-[25%] h-[150px] md:h-[200px] opacity-60 z-10 rotate-12 translate-y-10">
            <Image
              src="/assets/img/honda/beat.png"
              alt="Hero Motor 3"
              fill
              sizes="(max-width: 768px) 35vw, 25vw"
              className="object-contain blur-[2px] grayscale brightness-50"
            />
          </div>
        </div>
      </motion.div>

      {/* BOTTOM ACTION BAR / MARQUEE (Layer 2) */}
      <div className="relative z-20 w-full mt-auto">
        {/* Floating Actions above Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-center gap-4 md:gap-6"
        >
          <Link
            href="/gallery"
            className="group bg-cyan-400 text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-display font-black text-lg md:text-xl uppercase tracking-tight hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Lihat Unit{" "}
            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group bg-transparent border-2 border-white/20 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-display font-black text-lg md:text-xl uppercase tracking-tight hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            Buat Janji
          </Link>
        </motion.div>

        {/* ENHANCED NEON MARQUEE */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] animate-shimmer" />
          <div className="relative py-3 border-y-4 border-black">
            <TextMarquee text="KUALITAS PREMIUM ▪ GARANSI 100% ▪ PENGIRIMAN CEPAT ▪ SRB MOTORS STUDIO" />
          </div>
        </div>
      </div>

      {/* Premium WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="https://wa.me/628978638849?text=Halo%20SRB%20Motors,%20saya%20tertarik%20dengan%20unit%20motor%20anda."
          target="_blank"
          className="relative group"
        >
          {/* Ping Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
          <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-60" />

          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:shadow-green-500/50 transition-all duration-300">
            <MessageCircle size={28} fill="currentColor" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white text-sm font-mono px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800">
            Chat Kami 💬
          </div>
        </Link>
      </div>
    </section>
  );
}
