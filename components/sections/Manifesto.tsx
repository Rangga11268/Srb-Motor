"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="py-32 bg-cyan-400 text-black overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl md:text-8xl leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-12 uppercase"
          >
            Kami tidak sekadar jual motor. Kami wujudkan{" "}
            <span className="text-white stroke-black">impian</span>.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-lg font-bold">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              SRB MOTORS ADALAH TUJUAN BAGI MEREKA YANG MENOLAK BIASA SAJA.
              KOLEKSI KAMI DIPILIH DENGAN CERMAT, DIUJI KETAT, DAN SIAP
              MENGUASAI JALANAN.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              // TANPA KOMPROMI.
              <br />
              // PERFORMA MURNI.
              <br />
              // 100% OTENTIK.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <h3 className="absolute -bottom-10 -right-20 text-[20vw] font-display font-black text-black/10 leading-none select-none pointer-events-none">
        SRB
      </h3>
    </section>
  );
}
