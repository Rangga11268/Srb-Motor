import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Send, Check } from "lucide-react";
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
  const [installment, setInstallment] = useState(0);

  // Standard leasing factors (simulation only)
  // Higher tenor usually means slightly higher total interest
  const interestRate = 0.025; // 2.5% per month flat assumption

  useEffect(() => {
    const dpAmount = numericPrice * (dpPercentage / 100);
    const principal = numericPrice - dpAmount;
    const totalInterest = principal * interestRate * tenor;
    const totalLoan = principal + totalInterest;
    const monthly = totalLoan / tenor;

    setInstallment(Math.round(monthly));
  }, [numericPrice, dpPercentage, tenor]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getWhatsAppLink = () => {
    const message = `Halo SRB Motors, saya ingin simulasi kredit untuk:\n\nUnit: ${motorName}\nHarga: ${price}\nDP: ${dpPercentage}% (${formatCurrency(
      numericPrice * (dpPercentage / 100)
    )})\nTenor: ${tenor} Bulan\nAngsuran: ${formatCurrency(
      installment
    )}\n\nMohon info persyaratannya.`;
    return `https://wa.me/628978638972?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-5 md:p-8 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-cyan-400 p-2 rounded-lg text-black">
          <Calculator size={24} />
        </div>
        <h3 className="font-display font-black text-xl md:text-2xl uppercase">
          Simulasi <span className="text-cyan-400">Kredit</span>
        </h3>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* DP Slider */}
        <div>
          <div className="flex justify-between mb-4 font-mono font-bold text-sm md:text-base">
            <span className="text-zinc-400">Uang Muka (DP)</span>
            <span className="text-white">{dpPercentage}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={dpPercentage}
            onChange={(e) => setDpPercentage(parseInt(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="mt-2 text-right font-mono text-cyan-400 text-sm md:text-base">
            {formatCurrency(numericPrice * (dpPercentage / 100))}
          </div>
        </div>

        {/* Tenor Selection */}
        <div>
          <div className="flex justify-between mb-4 font-mono font-bold text-sm md:text-base">
            <span className="text-zinc-400">Tenor (Bulan)</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {[11, 17, 23, 29, 35].map((t) => (
              <button
                key={t}
                onClick={() => setTenor(t)}
                className={cn(
                  "py-2 rounded-lg font-mono font-bold text-xs md:text-sm border transition-all",
                  tenor === t
                    ? "bg-cyan-400 text-black border-cyan-400"
                    : "bg-transparent text-zinc-500 border-zinc-700 hover:border-cyan-400/50"
                )}
              >
                {t}x
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-black/50 p-5 md:p-6 rounded-2xl border border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-4">
            <div>
              <span className="block font-mono text-zinc-500 text-xs md:text-sm mb-2 uppercase tracking-wider">
                Estimasi Angsuran per bulan:
              </span>
              <span className="font-display font-black text-4xl md:text-5xl text-cyan-400 leading-none">
                {formatCurrency(installment)}
              </span>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-black px-6 py-4 rounded-xl font-bold font-mono text-sm uppercase flex items-center justify-center gap-2 transition-colors w-full md:w-auto shadow-lg shadow-green-500/20"
            >
              <Send size={18} />
              Ajukan Sekarang
            </a>
          </div>
          <p className="font-mono text-[10px] text-zinc-600 mt-4 text-center">
            *Simulasi ini hanya estimasi. Hubungi sales kami untuk hitungan real
            sesuai data leasing.
          </p>
        </div>
      </div>
    </div>
  );
}
