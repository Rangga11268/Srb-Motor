"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const motors = [
  {
    id: 1,
    name: "AEROX 155",
    brand: "YAMAHA",
    image: "/assets/img/yamaha/aerox 155.png",
    price: "IDR 27,000,000",
    tag: "POPULAR",
  },
  {
    id: 2,
    name: "VARIO 160",
    brand: "HONDA",
    image: "/assets/img/honda/vario 160.png",
    price: "IDR 29,500,000",
    tag: "NEW DROP",
  },
  {
    id: 3,
    name: "PCX 160",
    brand: "HONDA",
    image: "/assets/img/honda/pcx 160.png",
    price: "IDR 32,000,000",
    tag: "PREMIUM",
  },
  {
    id: 4,
    name: "NMAX TURBO",
    brand: "YAMAHA",
    image: "/assets/img/yamaha/NMax Turbo.png",
    price: "IDR 34,000,000",
    tag: "TURBO",
  },
];

export function PopularMotors() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-2 uppercase tracking-tighter">
              Koleksi <span className="text-lime-400">Terkini</span>
            </h2>
            <p className="font-mono text-zinc-500 text-sm md:text-base">
              // PILIHAN TERBAIK_VOL.01
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden md:flex items-center gap-2 font-mono font-bold text-lime-400 hover:text-white transition-colors"
          >
            LIHAT SEMUA UNIT <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {motors.map((motor) => (
            <motion.div
              key={motor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-black border border-zinc-800 p-6 flex flex-col justify-between hover:border-lime-400 transition-colors duration-300"
            >
              {/* Product Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-lime-400 text-black text-xs font-bold px-2 py-1 font-mono uppercase">
                  {motor.tag}
                </span>
              </div>

              {/* Image Area */}
              <div className="relative h-64 w-full mb-8 flex items-center justify-center bg-zinc-900/50 rounded-lg overflow-hidden group-hover:bg-zinc-900/80 transition-colors">
                <motion.img
                  src={motor.image}
                  alt={motor.name}
                  className="w-[80%] h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info Area */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-zinc-500 font-mono text-xs mb-1 block">
                      {motor.brand}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white uppercase leading-none">
                      {motor.name}
                    </h3>
                  </div>
                  <div className="bg-zinc-900 p-2 rounded-full text-white group-hover:bg-lime-400 group-hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-zinc-900 mb-4" />
                <p className="font-mono text-lime-400 font-bold text-lg text-right">
                  {motor.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
