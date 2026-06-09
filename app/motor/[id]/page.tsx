"use client";

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-xl h-[50vh] lg:h-[60vh] z-10 pt-20 lg:pt-0"
          >
            <Image
              src={motor.image}
              alt={motor.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-2xl"
              priority
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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

              {/* Technical Specifications */}
              <div className="mb-16">
                <h3 className="text-black font-sans font-bold text-xl uppercase mb-8 flex items-center gap-3 tracking-tight border-b border-black pb-4">
                  <Check className="text-[#1c69d4]" size={20} /> Spesifikasi Lengkap
                </h3>
                <div className="space-y-0 mb-16">
                  {motor.specifications.map((spec, index) => (
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
                    motorName={motor.name}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="sticky bottom-6 z-30 flex gap-4 bg-white/80 backdrop-blur-md p-4 border border-gray-150">
                <Link
                  href={`https://wa.me/628978638849?text=Saya%20tertarik%20dengan%20${encodeURIComponent(
                    motor.name,
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
          <Footer />
        </div>
      </div>
    </main>
  );
}
