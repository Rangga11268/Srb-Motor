"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motors } from "@/lib/motor-data";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CreditCalculator } from "@/components/features/CreditCalculator";

export default function MotorDetailPage() {
  const { id } = useParams();
  const motor = motors.find((m) => m.id === id);

  if (!motor) {
    return notFound();
  }

  // Parse variants and colors from specifications array
  const variants = motor.specifications
    .find((s) => s.label === "Tipe / Varian")
    ?.value.split(",")
    .map((s) => s.trim())
    .filter(Boolean) || [];

  const colors = motor.specifications
    .find((s) => s.label === "Pilihan Warna")
    ?.value.split(",")
    .map((s) => s.trim())
    .filter(Boolean) || [];

  const [selectedVariant, setSelectedVariant] = useState(variants[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [imageLoading, setImageLoading] = useState(true);

  const colorImage = (motor.colorImages && selectedColor && motor.colorImages[selectedColor]) || motor.image;

  // Reset selections when model changes
  useEffect(() => {
    if (variants.length > 0) setSelectedVariant(variants[0]);
    else setSelectedVariant("");
    
    if (colors.length > 0) setSelectedColor(colors[0]);
    else setSelectedColor("");
  }, [id]);

  // Reset loading when color image changes
  useEffect(() => {
    setImageLoading(true);
  }, [colorImage]);

  return (
    <main className="min-h-screen bg-white text-[#262626] font-sans">
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40 md:top-32 md:left-10">
        <Link
          href="/gallery"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase font-sans text-xs font-bold group border border-gray-200 bg-white/80 backdrop-blur-md px-4 py-2"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Kembali ke Katalog
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT: VISUALS (Fixed on Desktop) */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-gray-50 flex items-center justify-center p-8 overflow-hidden relative border-r border-gray-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)]" />

          <motion.div
            key={colorImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl h-[50vh] lg:h-[60vh] z-10 pt-20 lg:pt-0"
          >
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-[#1c69d4] rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={colorImage}
              alt={motor.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-contain drop-shadow-2xl transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              priority
              onLoad={() => setImageLoading(false)}
            />
          </motion.div>

          <div className="absolute bottom-8 left-8 z-20">
            <span className="bg-[#1c69d4] text-white px-4 py-2 font-sans font-bold text-xs uppercase rounded-none tracking-widest">
              {motor.category}
            </span>
          </div>
        </div>

        {/* RIGHT: DETAILS (Scrollable) */}
        <div className="w-full lg:w-1/2 lg:ml-[50%] bg-white min-h-screen">
          <div className="p-6 md:p-16 pt-10 md:pt-16 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-400 font-sans font-bold text-xs block mb-4 uppercase tracking-widest">
                {`// ${motor.brand} OFFICIAL`}
              </span>
              <h1 className="text-4xl md:text-6xl font-light uppercase leading-[0.95] text-black mb-4 md:mb-6 tracking-tight">
                {motor.name}
              </h1>
              <p className="font-sans text-[#1c69d4] text-2xl md:text-3xl font-light mb-12 border-b border-gray-200 pb-12">
                IDR {parseInt(motor.price.replace(/[^0-9]/g, "")).toLocaleString("id-ID")}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
                {motor.description.split("•").map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-4 border border-gray-200 rounded-none text-center flex items-center justify-center"
                  >
                    <span className="font-sans font-bold text-[10px] uppercase text-gray-600 tracking-wider">
                      {item.trim()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive Variant Selector */}
              {variants.length > 0 && (
                <div className="mb-10 border-t border-gray-100 pt-8">
                  <span className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest block mb-4">
                    // Pilih Tipe / Varian
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-3 border text-xs font-bold uppercase tracking-wider rounded-none transition-all duration-200 cursor-pointer ${
                          selectedVariant === variant
                            ? "bg-[#1c69d4] text-white border-[#1c69d4] font-black"
                            : "bg-white text-gray-600 border-gray-200 hover:border-black"
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Color Selector */}
              {colors.length > 0 && (
                <div className="mb-12 border-t border-gray-100 pt-8">
                  <span className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest block mb-4">
                    // Pilih Pilihan Warna
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {colors.map((color) => {
                      let dotColor = "bg-gray-400";
                      const cl = color.toLowerCase();
                      if (cl.includes("black") || cl.includes("hitam")) dotColor = "bg-black border border-gray-700";
                      else if (cl.includes("white") || cl.includes("putih")) dotColor = "bg-white border border-gray-300";
                      else if (cl.includes("blue") || cl.includes("biru")) dotColor = "bg-blue-600";
                      else if (cl.includes("red") || cl.includes("merah")) dotColor = "bg-red-600";
                      else if (cl.includes("grey") || cl.includes("gray") || cl.includes("abu")) dotColor = "bg-gray-500";
                      else if (cl.includes("silver")) dotColor = "bg-slate-300";
                      else if (cl.includes("green") || cl.includes("ijo")) dotColor = "bg-emerald-600";
                      else if (cl.includes("brown") || cl.includes("coklat")) dotColor = "bg-amber-800";
                      else if (cl.includes("cyan")) dotColor = "bg-cyan-400";
                      else if (cl.includes("orange")) dotColor = "bg-orange-500";
                      else if (cl.includes("yellow") || cl.includes("kuning")) dotColor = "bg-yellow-400";
                      else if (cl.includes("pink")) dotColor = "bg-pink-400";

                      return (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-3 border text-xs font-bold uppercase tracking-wider rounded-none transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                            selectedColor === color
                              ? "bg-[#1c69d4] text-white border-[#1c69d4] font-black"
                              : "bg-white text-gray-600 border-gray-200 hover:border-black"
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full ${dotColor} inline-block`} />
                          {color}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              <div className="mb-16">
                <h3 className="text-black font-sans font-bold text-xl uppercase mb-8 flex items-center gap-3 tracking-tight border-b border-black pb-4">
                  <Check className="text-[#1c69d4]" size={20} /> Spesifikasi Lengkap
                </h3>
                <div className="space-y-0 mb-16">
                  {motor.specifications
                    .filter((spec) => spec.label !== "Tipe / Varian" && spec.label !== "Pilihan Warna")
                    .map((spec, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-gray-100 group hover:bg-gray-50/50 transition-colors px-2"
                      >
                        <span className="text-gray-500 font-sans text-xs uppercase mb-1 md:mb-0 w-1/3 font-bold tracking-wider">
                          {spec.label}
                        </span>
                        <span className="text-black font-bold text-sm md:text-base w-2/3 md:text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Credit Calculator */}
                <div className="mb-16">
                  <CreditCalculator
                    price={motor.price}
                    motorName={`${motor.name}${selectedVariant ? ` (${selectedVariant})` : ''}`}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="sticky bottom-6 z-30 flex gap-4 bg-white/80 backdrop-blur-md p-4 border border-gray-150">
                <Link
                  href={`https://wa.me/628978638849?text=${encodeURIComponent(
                    `Saya tertarik dengan unit ${motor.name}${selectedVariant ? ` - Tipe: ${selectedVariant}` : ''}${selectedColor ? ` - Warna: ${selectedColor}` : ''}`
                  )}`}
                  target="_blank"
                  className="flex-1 bg-[#1c69d4] hover:bg-[#0653b6] text-white py-5 rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 group shadow-2xl cursor-pointer"
                >
                  Pesan Unit Ini (WhatsApp)
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
          <Footer compact={true} />
        </div>
      </div>
    </main>
  );
}
