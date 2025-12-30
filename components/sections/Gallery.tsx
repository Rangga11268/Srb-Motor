"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/img/yamaha/AEROX-STD.png",
    span: "md:col-span-2 md:row-span-2",
    title: "Aerox 155 Cyber City",
  },
  {
    src: "/assets/img/honda/beat.png",
    span: "md:col-span-1 md:row-span-1",
    title: "Beat Deluxe Black",
  },
  {
    src: "/assets/img/yamaha/Fazzio.png",
    span: "md:col-span-1 md:row-span-2",
    title: "Fazzio Neo Cyan",
  },
  {
    src: "/assets/img/honda/pcx 160.png",
    span: "md:col-span-1 md:row-span-1",
    title: "PCX 160 Ultimate",
  },
  {
    src: "/assets/img/yamaha/Grand Filano.png",
    span: "md:col-span-1 md:row-span-1",
    title: "Grand Filano Lux",
  },
  {
    src: "/assets/img/honda/adv 160.png",
    span: "md:col-span-1 md:row-span-1",
    title: "ADV 160 Adventure",
  },
];

export function Gallery() {
  return (
    <section id="motors-gallery" className="py-24 bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            VISUAL <span className="text-blue-500">GALLERY</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            See the details that define perfection. Our gallery showcases the
            finest units available in our showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/5 ${item.span}`}
            >
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10" />

              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                <h3 className="font-display font-bold text-white text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <button className="self-end mt-2 p-2 rounded-full bg-white/10 hover:bg-blue-600 text-white transition-colors">
                  <Maximize2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
