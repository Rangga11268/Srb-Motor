import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean;
}

export function Logo({
  className = "h-8 w-auto",
  iconOnly = false,
  dark = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center">
        <Image
          src="/assets/icon/logo-trans.webp"
          alt="SRB Motor Logo"
          width={40}
          height={40}
          className="object-contain drop-shadow-md"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-xl font-black tracking-tight transition-colors ${
              dark
                ? "text-white group-hover:text-blue-300"
                : "text-gray-900 group-hover:text-blue-600"
            }`}
          >
            SRB<span className="text-[#1c69d4]">MOTOR</span>
          </span>
          <span
            className={`text-[7px] sm:text-[8px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] leading-tight mt-1 transition-colors max-w-[120px] sm:max-w-none ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            SUPPORT BY{" "}
            <span className={dark ? "text-blue-400" : "text-[#1c69d4]"}>
              SSM
            </span>{" "}
            SINAR SURYA MATAHARI
          </span>
        </div>
      )}
    </div>
  );
}
