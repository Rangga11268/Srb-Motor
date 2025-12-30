"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/assets/img/honda/vario 160.png",
    title: "VARIO 160",
    category: "MATIC SPORT",
  },
  {
    src: "/assets/img/yamaha/aerox 155.png",
    title: "AEROX 155",
    category: "MAXI SCOOTER",
  },
  {
    src: "/assets/img/honda/pcx 160.png",
    title: "PCX 160",
    category: "PREMIUM",
  },
  {
    src: "/assets/img/yamaha/NMax Turbo.png",
    title: "NMAX TURBO",
    category: "PERFORMANCE",
  },
  {
    src: "/assets/img/honda/adv 160.png",
    title: "ADV 160",
    category: "ADVENTURE",
  },
  {
    src: "/assets/img/yamaha/xmax.png",
    title: "XMAX 250",
    category: "ULTIMATE",
  },
  { src: "/assets/img/honda/scoopy.png", title: "SCOOPY", category: "RETRO" },
  { src: "/assets/img/yamaha/Fazzio.png", title: "FAZZIO", category: "HYBRID" },
  {
    src: "/assets/img/honda/stylo.png",
    title: "STYLO 160",
    category: "FASHION",
  },
  {
    src: "/assets/img/yamaha/Grand Filano.png",
    title: "FILANO",
    category: "CLASSIC",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      <Navbar />

      <section className="pt-40 px-6 container mx-auto mb-20">
        <h1 className="font-display font-black text-[12vw] leading-[0.8] mb-8 uppercase tracking-tighter">
          The <br />
          <span className="text-lime-400">Collection</span>
        </h1>
        <div className="flex justify-between items-end border-b border-zinc-900 pb-8">
          <p className="font-mono text-zinc-500 max-w-md">
            // A CURATED SELECTION OF PRE-OWNED MASTERPIECES. <br />
            // INSPECTED. VERIFIED. READY TO RIDE.
          </p>
          <span className="font-mono text-lime-400 font-bold hidden md:block">
            [{galleryImages.length} UNITS AVAILABLE]
          </span>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden mb-6 border border-zinc-800 group-hover:border-lime-400 transition-colors duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-50" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-lime-400/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <span className="font-display font-black text-4xl text-black uppercase tracking-tighter">
                    View
                  </span>
                </div>

                <img
                  src={img.src}
                  alt={img.title}
                  className="relative z-0 w-[80%] h-auto object-contain mx-auto my-auto top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700 contrast-125"
                />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <span className="font-mono text-xs text-lime-400 mb-2 block">
                    {img.category}
                  </span>
                  <h3 className="font-display font-black text-4xl uppercase leading-none">
                    {img.title}
                  </h3>
                </div>
                <span className="font-mono text-zinc-600 text-sm">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
