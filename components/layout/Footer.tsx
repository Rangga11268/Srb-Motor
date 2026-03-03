"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 border-t border-zinc-900">
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Section 1: Newsletter */}
          <div>
            <h3 className="font-display font-medium text-3xl md:text-4xl uppercase mb-8">
              Tetap <span className="text-zinc-500">Terhubung</span>
            </h3>
            <div className="flex gap-4 border-b border-zinc-800 pb-4">
              <input
                type="email"
                placeholder="MASUKKAN EMAIL ANDA"
                className="bg-transparent w-full outline-none font-mono text-xl placeholder:text-zinc-700 text-white uppercase"
              />
              <button className="text-zinc-400 hover:text-white transition-colors">
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
                  <Link
                    href="/"
                    className="hover:text-white text-zinc-400 transition-colors uppercase block"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white text-zinc-400 transition-colors uppercase block"
                  >
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-white text-zinc-400 transition-colors uppercase block"
                  >
                    Koleksi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white text-zinc-400 transition-colors uppercase block"
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
                    href="https://instagram.com"
                    target="_blank"
                    className="hover:text-white text-zinc-400 transition-colors uppercase flex items-center gap-2"
                  >
                    Instagram <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="hover:text-white text-zinc-400 transition-colors uppercase flex items-center gap-2"
                  >
                    Twitter <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="hover:text-white text-zinc-400 transition-colors uppercase flex items-center gap-2"
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
      <div className="border-t border-zinc-900 w-full overflow-hidden py-4 md:py-8">
        <h1 className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-display font-medium leading-[0.8] text-center tracking-tighter text-zinc-900 hover:text-white transition-colors duration-500 cursor-default select-none">
          SRB.MTRS
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-3 px-6 flex flex-col md:flex-row justify-between items-center font-mono text-black text-[10px] md:text-sm font-bold uppercase gap-2 md:gap-0">
        <span>© {new Date().getFullYear()} SRB MOTORS • BEKASI, INDONESIA</span>
        <a
          href="https://darell-rangga.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:bg-black hover:text-white px-3 py-1 rounded-full transition-all group border border-black"
        >
          <span className="opacity-70 group-hover:opacity-100">
            DIBUAT OLEH:
          </span>
          <span className="underline decoration-black/30 group-hover:decoration-white underline-offset-2">
            DARELL RANGGA
          </span>
        </a>
      </div>
    </footer>
  );
}
