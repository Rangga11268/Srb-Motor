"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Studio", href: "/about" },
  { name: "Koleksi", href: "/gallery" },
  { name: "Kontak", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <header className="pointer-events-auto bg-black/80 border border-white/10 rounded-full px-4 md:px-2 py-2 flex items-center justify-between md:justify-start w-full max-w-sm md:w-auto md:max-w-none md:gap-12 shadow-2xl backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-6">
            <span className="font-display font-black text-xl tracking-tighter text-white">
              SRB
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 text-sm font-medium transition-colors rounded-full",
                    isActive
                      ? "bg-white text-black font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-white bg-zinc-900 border border-zinc-800 rounded-full ml-2"
          >
            <Menu size={20} />
          </button>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black p-6 flex flex-col pt-24"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-medium text-4xl text-zinc-400 hover:text-white transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
