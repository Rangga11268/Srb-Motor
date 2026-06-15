"use client";

import { useState } from "react";
import { Calculator, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreditCalculatorProps {
  price: string;
  motorName: string;
}

export function CreditCalculator({ price, motorName }: CreditCalculatorProps) {
  // Parse price string to number ("Rp. 32.365.000,-" -> 32365000)
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ""));

  const [dpPercentage, setDpPercentage] = useState(20);
  const [tenor, setTenor] = useState(35);

  // Standard leasing factors (simulation only)
  const interestRate = 0.025; // 2.5% per month flat assumption

  // Calculate derived values synchronously during render
  const dpAmount = numericPrice * (dpPercentage / 100);
  const principal = numericPrice - dpAmount;
  const totalInterest = principal * interestRate * tenor;
  const totalLoan = principal + totalInterest;
  const installment = Math.round(totalLoan / tenor);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getWhatsAppLink = () => {
    const message = `Halo SRB Motors, saya ingin simulasi kredit untuk:\n\nUnit: ${motorName}\nHarga: ${price}\nDP: ${dpPercentage}% (${formatCurrency(
      numericPrice * (dpPercentage / 100),
    )})\nTenor: ${tenor} Bulan\nAngsuran: ${formatCurrency(
      installment,
    )}\n\nMohon info persyaratannya.`;
    return `https://wa.me/628978638849?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white border-2 border-black p-6 md:p-10 rounded-none shadow-[12px_12px_0px_0px_rgba(28,105,212,0.1)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-black p-2.5 text-white rounded-none">
          <Calculator size={20} />
        </div>
        <h3 className="font-sans font-bold tracking-tight text-xl uppercase text-black">
          Simulasi <span className="text-gray-400">Kredit</span>
        </h3>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* DP Slider */}
        <div>
          <div className="flex justify-between mb-4 font-sans font-bold text-xs md:text-sm uppercase tracking-wider">
            <span className="text-gray-500">Uang Muka (DP)</span>
            <span className="text-[#1c69d4]">{dpPercentage}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={dpPercentage}
            onChange={(e) => setDpPercentage(parseInt(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-none appearance-none cursor-pointer accent-[#1c69d4]"
          />
          <div className="mt-2 text-right font-sans font-bold text-[#262626] text-sm md:text-base">
            {formatCurrency(numericPrice * (dpPercentage / 100))}
          </div>
        </div>

        {/* Tenor Selection */}
        <div>
          <div className="flex justify-between mb-4 font-sans font-bold text-xs md:text-sm uppercase tracking-wider">
            <span className="text-gray-500">Tenor (Bulan)</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[11, 17, 23, 29, 35].map((t) => (
              <button
                key={t}
                onClick={() => setTenor(t)}
                className={cn(
                  "py-3 rounded-none font-sans font-bold text-xs md:text-sm border transition-all cursor-pointer uppercase",
                  tenor === t
                    ? "bg-[#1c69d4] text-white border-[#1c69d4]"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-[#1c69d4] hover:text-[#1c69d4]",
                )}
              >
                {t}x
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-gray-50 p-6 rounded-none border border-gray-200">
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:items-end lg:items-stretch xl:items-end gap-6 md:gap-4 lg:gap-6 xl:gap-4">
            <div>
              <span className="block font-sans text-gray-500 text-[10px] md:text-xs mb-2 uppercase tracking-widest font-bold">
                Estimasi Angsuran / bulan:
              </span>
              <span className="font-sans font-black tracking-tighter text-2xl md:text-4xl text-black leading-none block">
                {formatCurrency(installment)}
              </span>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c69d4] hover:bg-[#0653b6] text-white px-8 py-4 rounded-none font-bold font-sans text-xs uppercase flex items-center justify-center gap-2 transition-colors w-full md:w-auto lg:w-full xl:w-auto tracking-widest"
            >
              <Send size={14} />
              Ajukan Sekarang
            </a>
          </div>
          <p className="font-sans text-[9px] uppercase tracking-wider font-bold text-gray-400 mt-4 text-center">
            *Simulasi ini hanya estimasi. Hubungi sales kami untuk hitungan real
            sesuai data leasing.
          </p>
        </div>
      </div>
    </div>
  );
}
