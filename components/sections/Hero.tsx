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
      {/* CENTERED MASSIVE TYPOGRAPHY (Layer 0) */}
      <motion.div
        style={{ y: yText, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-medium text-[12vw] md:text-[16vw] lg:text-[18vw] leading-[0.85] text-white tracking-tight text-center mt-20 md:mt-0"
        >
          <span className="text-white">MIMPI</span>
          <br />
          <span className="text-zinc-600">ANDA</span>
        </motion.h1>
      </motion.div>

      {/* FLOATING PRODUCTS (Layer 1) */}
      <motion.div
        style={{ y: yImage }}
        className="relative z-10 w-full flex justify-center items-center mt-10 md:mt-0"
      >
        {/* Main Hero Bike */}
        <div className="relative w-full max-w-[90vw] md:max-w-6xl aspect-[16/9] md:aspect-auto flex items-center justify-center">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[80%] md:w-[60%] h-[300px] md:h-[400px] z-20"
          >
            <Image
              src="/assets/img/honda/HondaVariong.webp"
              alt="Hero Motor 1"
              fill
              sizes="(max-width: 768px) 80vw, 60vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Secondary Bikes Flanking (Clean versions) */}
          <div className="absolute left-0 bottom-0 w-[35%] md:w-[25%] h-[150px] md:h-[200px] opacity-40 z-10 -rotate-6 translate-y-10">
            <Image
              src="/assets/img/yamaha/aerox 155.webp"
              alt="Hero Motor 2"
              fill
              sizes="(max-width: 768px) 35vw, 25vw"
              className="object-contain"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[35%] md:w-[25%] h-[150px] md:h-[200px] opacity-40 z-10 rotate-6 translate-y-10">
            <Image
              src="/assets/img/honda/beat.webp"
              alt="Hero Motor 3"
              fill
              sizes="(max-width: 768px) 35vw, 25vw"
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* BOTTOM ACTION BAR / MARQUEE (Layer 2) */}
      <div className="relative z-20 w-full mt-auto">
        {/* Actions above Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-center gap-4 md:gap-4"
        >
          <Link
            href="/gallery"
            className="group bg-white text-black px-8 py-3 md:px-10 rounded-full font-medium text-base md:text-lg tracking-wide hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Lihat Unit
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group bg-transparent border border-zinc-800 text-white px-8 py-3 md:px-10 rounded-full font-medium text-base md:text-lg tracking-wide hover:bg-zinc-900 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Buat Janji
          </Link>
        </motion.div>

        {/* MINIMAL MARQUEE */}
        <div className="relative w-full overflow-hidden border-t border-zinc-900 bg-black">
          <div className="relative py-4">
            <TextMarquee text="KUALITAS PREMIUM ▪ GARANSI 100% ▪ PENGIRIMAN CEPAT ▪ SRB MOTORS STUDIO" />
          </div>
        </div>
      </div>

      {/* Premium Minimal WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="https://wa.me/628978638849?text=Halo%20SRB%20Motors,%20saya%20tertarik%20dengan%20unit%20motor%20anda."
          target="_blank"
          className="relative group flex items-center justify-center"
        >
          <div className="relative w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
            <MessageCircle size={24} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800">
            Chat Kami
          </div>
        </Link>
      </div>
    </section>
  );
}
