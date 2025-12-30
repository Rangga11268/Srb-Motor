"use client";

import { ArrowUpRight, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 border-t border-zinc-900">
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Section 1: Newsletter */}
          <div>
            <h3 className="font-display font-black text-4xl uppercase mb-8">
              Tetap <span className="text-lime-400">Terhubung</span>
            </h3>
            <div className="flex gap-4 border-b border-zinc-800 pb-4">
              <input
                type="email"
                placeholder="MASUKKAN EMAIL ANDA"
                className="bg-transparent w-full outline-none font-mono text-xl placeholder:text-zinc-700 text-white uppercase"
              />
              <button className="text-lime-400 hover:text-white transition-colors">
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>

          {/* Section 2: Links */}
          <div className="grid grid-cols-2 gap-8 font-mono">
            <div>
              <h4 className="text-zinc-500 mb-6 text-sm">// PETA SITUS</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-lime-400 uppercase">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-lime-400 uppercase">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-lime-400 uppercase"
                  >
                    Koleksi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-lime-400 uppercase"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-500 mb-6 text-sm">// SOSIAL</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-lime-400 uppercase flex items-center gap-2"
                  >
                    Instagram <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-lime-400 uppercase flex items-center gap-2"
                  >
                    Twitter <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-lime-400 uppercase flex items-center gap-2"
                  >
                    Facebook <ArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MASSIVE BOTTOM LOGO */}
      <div className="border-t border-zinc-900 w-full overflow-hidden">
        <h1 className="text-[23vw] font-display font-black leading-[0.75] text-center tracking-tighter text-white hover:text-lime-400 transition-colors duration-500 cursor-default select-none">
          SRB.MTRS
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="bg-lime-400 py-2 px-6 flex justify-between items-center font-mono text-black text-xs md:text-sm font-bold uppercase">
        <span>© 2024 SRB MOTORS</span>
        <span>JAKARTA, INDONESIA</span>
      </div>
    </footer>
  );
}
