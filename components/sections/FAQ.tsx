"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Apakah motor yang dijual sudah melalui inspeksi?",
    answer:
      "Ya, semua motor yang kami jual telah melalui inspeksi 150 titik yang ketat untuk memastikan kualitas dan performa terbaik.",
  },
  {
    question: "Apakah ada garansi untuk motor bekas?",
    answer:
      "Kami memberikan garansi mesin selama 30 hari untuk memberikan ketenangan pikiran kepada pelanggan kami.",
  },
  {
    question: "Bagaimana sistem pembayaran yang tersedia?",
    answer:
      "Kami menerima pembayaran cash dan kredit. Untuk kredit, kami bekerja sama dengan beberapa leasing terpercaya dengan proses approval yang cepat.",
  },
  {
    question: "Apakah bisa tukar tambah motor lama?",
    answer:
      "Tentu! Kami menerima tukar tambah motor lama Anda dengan harga yang kompetitif. Tim kami akan menilai kondisi motor Anda secara fair.",
  },
  {
    question: "Apakah dokumen motor lengkap?",
    answer:
      "Semua motor yang kami jual dilengkapi dengan STNK, BPKB, dan faktur. Kami memastikan semua dokumen legal dan dapat diproses untuk balik nama.",
  },
  {
    question: "Dimana lokasi showroom SRB Motors?",
    answer:
      "Showroom kami berlokasi di Bekasi. Anda bisa mengunjungi kami atau hubungi via WhatsApp untuk informasi lebih lanjut.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm block mb-4">
            // Pertanyaan Umum
          </span>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase">
            FAQ
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
              >
                <span className="font-display font-bold text-lg md:text-xl text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className="text-cyan-400 flex-shrink-0"
                    size={24}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 font-mono text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
