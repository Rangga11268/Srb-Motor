"use client";

import { useCompare } from "@/components/providers/CompareProvider";
import { ArrowLeftRight, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CompareFloat() {
  const { selectedMotors, removeFromCompare } = useCompare();
  const pathname = usePathname();

  // Hide on compare page
  if (selectedMotors.length === 0 || pathname === "/compare") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
      >
        <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full p-2 pl-4 md:pl-6 flex items-center gap-4 md:gap-6 shadow-2xl shadow-cyan-400/10">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="font-mono text-cyan-400 font-bold text-xs md:text-sm whitespace-nowrap">
              {selectedMotors.length} UNIT
            </span>
            <div className="flex -space-x-3">
              {selectedMotors.map((motor) => (
                <div key={motor.id} className="relative group">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                    <img
                      src={motor.image}
                      alt={motor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeFromCompare(motor.id)}
                    className="absolute -top-1 -right-1 bg-red-500 rounded-full p-0.5 text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          {selectedMotors.length >= 2 ? (
            <Link
              href="/compare"
              className="bg-cyan-400 hover:bg-white text-black px-4 md:px-6 py-2 rounded-full font-display font-bold text-xs md:text-sm uppercase flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              Bandingkan <ArrowRight size={14} className="md:w-4 md:h-4" />
            </Link>
          ) : (
            <span className="text-zinc-500 font-mono text-[10px] md:text-xs pr-2 md:pr-4 whitespace-nowrap">
              +1 lagi
            </span>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
