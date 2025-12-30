"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="py-32 bg-lime-400 text-black overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-12 uppercase"
          >
            We don't just sell bikes. We curate{" "}
            <span className="text-white stroke-black">dreams</span>.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-lg font-bold">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              SRB MOTORS IS THE DESTINATION FOR THOSE WHO REFUSE TO BLEND IN.
              OUR COLLECTION IS HAND-PICKED, RIGOROUSLY TESTED, AND READY TO
              DOMINATE THE STREETS.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              // NO COMPROMISE.
              <br />
              // PURE PERFORMANCE.
              <br />
              // 100% AUTHENTIC.
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
