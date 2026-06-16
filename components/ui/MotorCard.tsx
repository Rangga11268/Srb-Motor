"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Motor {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  tag?: string;
}

interface MotorCardProps {
  motor: Motor;
}

export function MotorCard({ motor }: MotorCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const formatPrice = (priceStr: string) => {
    const cleanPrice = parseInt(priceStr.replace(/[^0-9]/g, ""));
    return isNaN(cleanPrice) ? priceStr : cleanPrice.toLocaleString("id-ID");
  };

  // Check if item is "sold out" or similar (for demo, let's assume all are available, or mark specific ones)
  const isAvailable = true; 

  return (
    <Link href={`/motor/${motor.id}`} className="group block h-full">
      <div className="flex flex-col h-full rounded-none bg-white group-hover:bg-[#f9f9f9] transition-colors border border-gray-200 p-6 relative">
        {/* Status & Promo Badges - Sharp Rectangles */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
          {!isAvailable && (
            <div className="bg-[#262626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-transparent shadow-none rounded-none">
              Terjual
            </div>
          )}
          {motor.tag && (
            <div className="bg-[#1c69d4] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-none">
              {motor.tag}
            </div>
          )}
        </div>

        {/* Image Container */}
        <div className="relative w-full h-56 mb-8 mt-6 overflow-hidden bg-gray-50 flex items-center justify-center">
          {imageLoading && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 z-10" />
          )}
          <Image
            src={motor.image}
            alt={motor.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-contain filter transition-transform duration-700 ease-out group-hover:scale-105 ${
              !isAvailable ? "opacity-30 grayscale" : ""
            } ${imageLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
            onLoad={() => setImageLoading(false)}
            loading="lazy"
          />
        </div>

        {/* Content Area */}
        <div className="mt-auto space-y-4">
          <div className="text-[10px] text-[#757575] font-bold uppercase tracking-widest">
            {motor.brand} • {motor.category}
          </div>
          <h3 className="text-xl font-bold text-[#262626] uppercase leading-tight line-clamp-1">
            {motor.name}
          </h3>

          <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-lg font-light text-[#262626]">
              IDR {formatPrice(motor.price)}
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-[#1c69d4] border border-[#1c69d4] group-hover:bg-[#1c69d4] group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
