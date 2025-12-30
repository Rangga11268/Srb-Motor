"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Headphones, Percent } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description:
      "Unit 100% Baru (BNIB) yang telah melalui proses Pre-Delivery Inspection (PDI) standar pabrikan resmi.",
    color: "bg-blue-500",
    size: "col-span-1 md:col-span-2",
  },
  {
    icon: Wallet,
    title: "Harga Terbaik",
    description:
      "Dapatkan penawaran harga OTR termurah dengan berbagai promo menarik dan diskon spesial setiap bulannya.",
    color: "bg-cyan-500",
    size: "col-span-1",
  },
  {
    icon: Headphones,
    title: "Layanan 24/7",
    description:
      "Tim sales & support kami siap membantu konsultasi unit dan simulasi kredit kapanpun.",
    color: "bg-indigo-500",
    size: "col-span-1",
  },
  {
    icon: Percent,
    title: "DP & Bunga Rendah",
    description:
      "Kerjasama dengan leasing resmi (FIF, Adira, OTO, dll) untuk memberikan skema kredit paling ringan.",
    color: "bg-violet-500",
    size: "col-span-1 md:col-span-2",
  },
];

export function Advantages() {
  return (
    <section
      id="advantages"
      className="py-24 bg-slate-900 overflow-hidden relative"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            WHY CHOOSE <span className="text-blue-500">US?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Kami berkomitmen memberikan pengalaman membeli motor baru dengan
            pelayanan terbaik dan proses termudah.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden ${item.size}`}
            >
              <div
                className={`absolute top-0 right-0 p-32 opacity-5 blur-3xl rounded-full ${item.color} group-hover:opacity-10 transition-opacity`}
              />

              <div
                className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/10`}
              >
                <item.icon size={28} />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
