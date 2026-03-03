"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorter, cleaner loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img
              src="/assets/icon/logo trans.webp"
              alt="SRB Logo"
              className="w-24 md:w-32 h-auto object-contain mb-6 opacity-90"
            />
            <h1 className="font-display font-medium text-xl md:text-2xl tracking-[0.2em] text-white uppercase">
              SRB Motors
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
