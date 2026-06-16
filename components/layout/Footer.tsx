"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export function Footer({ compact = false }: { compact?: boolean }) {
  const currentYear = new Date().getFullYear();

  const links = {
    produk: [
      { label: "Katalog Motor", href: "/gallery" },
      { label: "Hubungi Kami", href: "/contact" },
    ],
    bantuan: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Syarat & Ketentuan", href: "/contact" },
      { label: "Kebijakan Privasi", href: "/contact" },
    ],
  };

  const settings = {
    site_description:
      "Dealer motor terpercaya dengan proses kredit mudah, transparan, dan bergaransi resmi.",
    contact_address: "Jl. Lori Sakti No.22, RT.001/RW.001, Kaliabang Tengah, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17125",
    contact_phone: "+62 897 8638 849",
    contact_email: "halo@srbmotor.id",
    social_instagram: "https://instagram.com",
    social_facebook: "https://facebook.com",
    social_youtube: "https://youtube.com",
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className={cn(
          "grid grid-cols-1 gap-16",
          compact
            ? "sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            : "md:grid-cols-12"
        )}>
          {/* Brand + Contact */}
          <div className={cn("space-y-8", compact ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : "md:col-span-4")}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="inline-block transition-transform hover:opacity-80"
                >
                  <Logo className="h-8" dark={true} />
                </Link>
                <div className="h-6 w-px bg-gray-700"></div>
                <div className="relative h-6 w-16">
                  <Image
                    src="/assets/img/logoSSM.webp"
                    alt="SSM Logo"
                    fill
                    sizes="64px"
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1c69d4] leading-none">
                  Official Authorized Dealer
                </p>
                <p className="text-xs font-bold text-[#bbbbbb] uppercase tracking-widest">
                  Sinar Surya Matahari (SSM)
                </p>
              </div>
            </div>
            <p className="text-sm font-light text-[#bbbbbb] leading-relaxed max-w-xs">
              {settings.site_description}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-[#1c69d4] mt-0.5 shrink-0" />
                <span className="text-sm font-light text-[#bbbbbb]">
                  {settings.contact_address}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-[#1c69d4] shrink-0" />
                <a
                  href={`https://wa.me/${settings.contact_phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-[#bbbbbb] hover:text-white transition-colors"
                >
                  {settings.contact_phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-[#1c69d4] shrink-0" />
                <a
                  href={`mailto:${settings.contact_email}`}
                  className="text-sm font-light text-[#bbbbbb] hover:text-white transition-colors"
                >
                  {settings.contact_email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={cn("grid grid-cols-2 gap-8", compact ? "col-span-1" : "md:col-span-4")}>
            <div className="space-y-8">
              <h4 className="text-[#757575] text-[10px] font-bold uppercase tracking-[0.2em]">
                Produk & Layanan
              </h4>
              <ul className="space-y-4">
                {links.produk.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-xs font-bold uppercase tracking-widest text-[#bbbbbb] hover:text-white flex items-center gap-2 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#1c69d4]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[#757575] text-[10px] font-bold uppercase tracking-[0.2em]">
                Bantuan Khusus
              </h4>
              <ul className="space-y-4">
                {links.bantuan.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-xs font-bold uppercase tracking-widest text-[#bbbbbb] hover:text-white flex items-center gap-2 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#1c69d4]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Leasing Partners */}
          <div className={cn("space-y-8", compact ? "col-span-1 lg:col-span-1 xl:col-span-2" : "md:col-span-4")}>
            <h4 className="text-[#757575] text-[10px] font-bold uppercase tracking-[0.2em]">
              Mitra Pembiayaan
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                { name: "ADIRA", logo: "/assets/img/adira.webp" },
                { name: "FIF", logo: "/assets/img/fif.webp" },
                { name: "OTO", logo: "/assets/img/oto.webp" },
                { name: "MUF", logo: "/assets/img/muf.webp" },
                { name: "BAF", logo: "/assets/img/baf.webp" },
              ].map((provider, i) => (
                <div
                  key={i}
                  title={provider.name}
                  className="bg-white border border-gray-800 p-4 flex items-center justify-center h-20 transition-colors rounded-none hover:bg-[#f9f9f9]"
                >
                  <div className="relative w-full h-8">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      fill
                      sizes="(max-width: 768px) 80px, 120px"
                      className="object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#757575] leading-relaxed">
              Proses difasilitasi oleh lembaga pembiayaan resmi.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 bg-[#0a0a0a]">
        <div className={cn(
          "max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between items-center gap-6",
          compact ? "xl:flex-row" : "md:flex-row"
        )}>
          <div className="flex items-center gap-4">
            <p className="text-[10px] text-[#757575] font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} SRB MOTOR
            </p>
            <div className="h-3 w-px bg-gray-800"></div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-[#757575] uppercase tracking-widest">
                A Part of
              </span>
              <div className="relative h-3 w-8">
                <Image
                  src="/assets/img/logoSSM.webp"
                  alt="SSM"
                  fill
                  sizes="32px"
                  className="object-contain brightness-0 invert opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-[#757575] uppercase tracking-widest flex items-center gap-2 border border-gray-800 px-3 py-1">
              <ShieldCheck className="w-3 h-3 text-[#1c69d4]" />
              Terverifikasi
            </span>
            <div className="flex items-center gap-2">
              {[
                { Icon: Instagram, href: settings.social_instagram },
                { Icon: Facebook, href: settings.social_facebook },
                { Icon: Youtube, href: settings.social_youtube },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-800 text-[#757575] bg-transparent flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors rounded-none"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
