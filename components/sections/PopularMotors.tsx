"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motors } from "@/lib/motor-data";
import { MotorCard } from "@/components/ui/MotorCard";

export function PopularMotors() {
  // Select top 4 motors for display
  const featuredMotors = [
    motors.find((m) => m.id === "yamaha-aerox-alpha"),
    motors.find((m) => m.id === "honda-vario-160"),
    motors.find((m) => m.id === "honda-pcx-160"),
    motors.find((m) => m.id === "yamaha-nmax-turbo"),
  ].filter(Boolean);

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-2 uppercase tracking-tighter">
              Koleksi <span className="text-cyan-400">Terkini</span>
            </h2>
            <p className="font-mono text-zinc-500 text-sm md:text-base">
              // PILIHAN TERBAIK_VOL.01
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden md:flex items-center gap-2 font-mono font-bold text-cyan-400 hover:text-white transition-colors"
          >
            LIHAT SEMUA UNIT <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMotors.map((motor, idx) => (
            <div key={motor!.id} className="h-full">
              <MotorCard motor={motor!} index={idx} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden flex justify-center">
          <Link
            href="/gallery"
            className="flex items-center gap-2 font-mono font-bold text-cyan-400 hover:text-white transition-colors"
          >
            LIHAT SEMUA UNIT <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
