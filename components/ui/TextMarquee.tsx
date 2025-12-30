"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextMarquee({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden whitespace-nowrap select-none pointer-events-none",
        className
      )}
    >
      <motion.div
        className="flex gap-4"
        animate={{ x: "-50%" }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-black font-display uppercase leading-none text-black"
          >
            {text} &nbsp; &nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
