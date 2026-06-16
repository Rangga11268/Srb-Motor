"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import {
  Menu,
  X,
  Search,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { motors } from "@/lib/motor-data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<typeof motors>([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close search results dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live Search logic
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const filtered = motors.filter((m) =>
      m.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const categories = [
    {
      label: "Beranda",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Motor Baru",
      href: "/gallery",
      active: pathname === "/gallery",
    },
    {
      label: "Tentang Kami",
      href: "/about",
      active: pathname === "/about",
    },
    {
      label: "Bantuan",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  const handleSearchSubmit = (query: string) => {
    if (query.trim()) {
      router.push(`/gallery?search=${encodeURIComponent(query.trim())}`);
      setShowResults(false);
    }
  };

  const formatPrice = (priceStr: string) => {
    const cleanPrice = parseInt(priceStr.replace(/[^0-9]/g, ""));
    return cleanPrice.toLocaleString("id-ID");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      {/* Top Row: Logo, Search, CTA */}
      <div className="max-w-full mx-auto px-4 md:px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-12">
          {/* Logo */}
          <Link href="/" className="flex flex-row items-center gap-2 sm:gap-4 min-w-0 group">
            <Logo />
          </Link>

          {/* Authorized Dealer Badge */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#262626]">
                Authorized Dealer
              </span>
            </div>
          </div>

          {/* Desktop Search */}
          <div
            ref={searchContainerRef}
            className="hidden md:flex flex-1 items-center max-w-3xl relative gap-0 border border-gray-300"
          >
            <div className="flex-1 relative group bg-white">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[#757575] group-focus-within:text-[#1c69d4] transition-colors" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setShowResults(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit(searchQuery);
                  }
                }}
                placeholder="Pencarian Unit..."
                className="w-full h-[46px] pl-14 pr-6 bg-transparent border-none text-sm font-light text-[#262626] placeholder:text-[#bbbbbb] focus:ring-0 outline-none uppercase tracking-widest"
              />

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && searchQuery.trim().length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full left-0 w-[480px] mt-0 bg-white border border-gray-300 border-t-0 shadow-lg z-50 rounded-none overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                  >
                    {results.length > 0 ? (
                      <div className="flex flex-col">
                        <div className="py-2">
                          {results.map((motor) => (
                            <Link
                              key={motor.id}
                              href={`/motor/${motor.id}`}
                              onClick={() => {
                                setShowResults(false);
                                setSearchQuery("");
                              }}
                              className="flex items-center gap-6 p-5 border-b border-gray-100 hover:bg-[#f9f9f9] transition-colors group/item"
                            >
                              <div className="w-20 h-16 flex items-center justify-center shrink-0 bg-gray-50 relative">
                                <Image
                                  src={motor.image}
                                  alt={motor.name}
                                  fill
                                  sizes="80px"
                                  className="object-contain"
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex-1 min-w-0 pr-4">
                                <div className="flex flex-col gap-1">
                                  <h4 className="text-[11px] font-bold text-[#262626] uppercase tracking-[0.15em] leading-tight group-hover/item:text-[#1c69d4] transition-colors">
                                    {motor.name}
                                  </h4>
                                </div>
                                <p className="text-[10px] font-bold text-[#1c69d4] mt-2 tracking-widest">
                                  IDR {formatPrice(motor.price)}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <button
                          onClick={() => handleSearchSubmit(searchQuery)}
                          className="block w-full text-center py-4 bg-[#f9f9f9] hover:bg-[#1c69d4] text-[10px] hover:text-white font-bold uppercase tracking-widest transition-colors border-t border-gray-200"
                        >
                          Lihat Seluruh Hasil
                        </button>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-[#757575]">
                        <p className="text-[10px] font-bold uppercase tracking-widest">
                          Tidak Ada Unit Yang Sesuai
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Actions: WhatsApp CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/628978638849"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-6 py-2.5 bg-[#1c69d4] hover:bg-[#0653b6] text-white font-bold uppercase text-[10px] tracking-widest transition-colors rounded-none items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#262626] hover:bg-[#f9f9f9] rounded-none border-none outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <div className="hidden md:block bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-0">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors border-b-2 relative flex items-center gap-2 ${
                  cat.active
                    ? "text-[#262626] border-[#1c69d4]"
                    : "text-[#757575] border-transparent hover:text-[#1c69d4]"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111111] overflow-hidden"
          >
            <div className="p-6 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearchSubmit(searchQuery);
                      setMobileMenuOpen(false);
                    }
                  }}
                  placeholder="CARI MOTOR..."
                  className="w-full px-4 py-3 bg-[#262626] border border-gray-800 text-white text-xs font-bold uppercase tracking-widest focus:ring-0 focus:border-[#1c69d4] outline-none rounded-none"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Search Results */}
              <AnimatePresence>
                {searchQuery.trim().length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="bg-[#262626] border border-gray-800 mb-8 max-h-[300px] overflow-y-auto"
                  >
                    {results.length > 0 ? (
                      <div className="flex flex-col">
                        {results.map((motor) => (
                          <Link
                            key={motor.id}
                            href={`/motor/${motor.id}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-4 p-4 border-b border-gray-800 hover:bg-[#1c69d4] transition-colors group/item"
                          >
                            <div className="w-14 h-10 flex items-center justify-center shrink-0 bg-[#333333] relative">
                              <Image
                                src={motor.image}
                                alt={motor.name}
                                fill
                                sizes="56px"
                                className="object-contain"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0 pr-2">
                              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest leading-tight truncate">
                                {motor.name}
                              </h4>
                              <p className="text-[9px] font-bold text-[#1c69d4] mt-1 group-hover/item:text-white transition-colors">
                                IDR {formatPrice(motor.price)}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <button
                          onClick={() => {
                            handleSearchSubmit(searchQuery);
                            setMobileMenuOpen(false);
                          }}
                          className="block w-full text-center py-3 bg-[#111111] text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border-t border-gray-800"
                        >
                          Lihat Semua
                        </button>
                      </div>
                    ) : (
                      <div className="p-6 text-center text-gray-500">
                        <p className="text-[9px] font-bold uppercase tracking-widest">
                          Tidak Ditemukan
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-gray-800 text-[10px] font-bold text-[#bbbbbb] uppercase tracking-[0.2em] hover:text-white transition-colors"
                >
                  {cat.label}
                </Link>
              ))}

              <div className="grid grid-cols-1 gap-4 pt-8">
                <a
                  href="https://wa.me/628978638849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 text-center border border-white text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-none"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
