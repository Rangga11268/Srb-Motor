import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCompare } from "@/components/providers/CompareProvider";

interface Motor {
  id: string;
  name: string;
  price: string;
  image: string;
  brand: string;
  category: string;
  tag?: string;
}

interface MotorCardProps {
  motor: Motor;
  index?: number;
}

export function MotorCard({ motor, index = 0 }: MotorCardProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const isCompared = isInCompare(motor.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <Link href={`/motor/${motor.id}`} className="block h-full">
        <div className="relative h-full bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-500 transition-all duration-500 flex flex-col">
          {/* Compare Top Actions */}
          <div className="absolute top-0 right-0 p-4 z-20 flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isCompared) removeFromCompare(motor.id);
                else addToCompare(motor as any);
              }}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 backdrop-blur-md",
                isCompared
                  ? "bg-white border-white text-black shadow-lg shadow-white/10"
                  : "bg-black/40 border-zinc-700 text-zinc-400 hover:text-white hover:border-white",
              )}
              title={isCompared ? "Hapus dari Perbandingan" : "Bandingkan"}
            >
              {isCompared ? (
                <Check size={14} />
              ) : (
                <span className="text-[10px] font-bold">VS</span>
              )}
            </button>
          </div>

          {/* Tag */}
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-black/60 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                {motor.tag || "OFFICIAL"}
              </span>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-64 w-full p-6 flex items-center justify-center overflow-hidden">
            {/* Minimal Background Subtle Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <motion.div className="relative w-full h-full z-10 group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
              <Image
                src={motor.image}
                alt={motor.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-contain drop-shadow-2xl"
                priority={index < 4}
              />
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="p-6 pt-2 bg-gradient-to-t from-zinc-950/80 to-transparent flex-grow flex flex-col justify-end">
            <div className="mb-4">
              <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-1 block">
                {motor.brand} • {motor.category}
              </span>
              <h3 className="font-display font-medium text-2xl md:text-3xl text-white uppercase leading-[0.9] group-hover:text-zinc-300 transition-colors duration-300 line-clamp-2">
                {motor.name}
              </h3>
            </div>

            <div className="flex items-end justify-between border-t border-zinc-800/50 pt-4 mt-auto">
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-600 font-mono uppercase leading-tight">
                  Mulai Dari
                </span>
                <span className="font-mono font-bold text-lg md:text-xl text-white transition-colors">
                  {motor.price.split(",")[0]}
                  <span className="text-xs text-zinc-500">,-</span>
                </span>
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
