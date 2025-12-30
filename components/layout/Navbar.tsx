"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <header className="pointer-events-auto bg-black border border-white/20 rounded-full px-2 py-2 flex items-center gap-12 shadow-2xl shadow-black/50 backdrop-blur-md">
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
                    isActive ? "text-white" : "text-zinc-500 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Admin/Action */}
          <div className="flex items-center pr-2">
            <button className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-full pl-1 pr-4 py-1 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-xs group-hover:scale-105 transition-transform">
                A
              </div>
              <span className="text-xs font-bold text-white">Admin</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-white bg-zinc-900 rounded-full ml-2"
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
              className="absolute top-8 right-8 text-white p-2 border border-white/20 rounded-full"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-black text-5xl text-transparent stroke-text hover:text-lime-400 hover:stroke-lime-400 transition-colors uppercase"
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
