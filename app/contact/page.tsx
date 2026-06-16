"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Search,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Lock,
  HelpCircle,
  Bike,
  FileCheck,
  Calendar,
  Truck,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("faq");
  const [guideType, setGuideType] = useState<"credit" | "cash">("credit");
  const [copied, setCopied] = useState(false);

  const handleCopyForm = () => {
    const formText = `FORMULIR PENGAJUAN KREDIT - SRB MOTOR
----------------------------------
Nama pemohon : 
Nama Pangilan :  
Nama STNK  : 

Alamat tempat yg tinggal sekarang :
Status rumah: 

Hp.telp 1 :  
HP telp 2 :  
Hp telp pasangan: 

MedsoS:
Email: 

Status pernikahan :
Nama ibu kandung : 

DATA KERJA/USAHA
Nama perusahaan & Wirsawasta: 
Alamat:
Penghasilan/bulan : 
Tlp kntr : 

Data kerja pasangan:
Nama perusahaaan :
Alamat:  
Bagian:
Berapa lama: 

EMERGENCY CALL
No Hp.Saudara tidak serumah : 
Nama saudara : 
Hubungan : 
Alamat : 
Tlp:`;

    navigator.clipboard.writeText(formText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: "faq", label: "FAQ & BANTUAN", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "guide", label: "PANDUAN PEMESANAN", icon: <BookOpen className="w-4 h-4" /> },
    { id: "terms", label: "SYARAT & KETENTUAN", icon: <ShieldCheck className="w-4 h-4" /> },
    { id: "privacy", label: "KEBIJAKAN PRIVASI", icon: <Lock className="w-4 h-4" /> },
  ];

  const faqs = [
    {
      category: "PROSES PEMBELIAN",
      items: [
        {
          q: "Bagaimana standar proses verifikasi kredit di SRB Motor?",
          a: "Proses verifikasi dilakukan melalui mitra leasing resmi kami secara manual. Setelah Anda menyalin dan mengisi Formulir Pengajuan Kredit di tab 'PANDUAN PEMESANAN' serta mengirimkannya bersama dokumen persyaratan (KTP, KK, bukti kerja, dan bukti kepemilikan rumah) via WhatsApp, kami akan mem-pooling data ke leasing untuk penjadwalan survei fisik oleh surveyor resmi.",
        },
        {
          q: "Apakah saya harus membayar DP sebelum pengajuan kredit disetujui?",
          a: "Tidak. Kami tidak meminta transfer uang muka (DP) di awal. Pembayaran DP baru dilakukan setelah pengajuan kredit Anda disetujui oleh leasing, Purchase Order (PO) rilis, dan unit motor dikirimkan serta tiba di rumah Anda. Transaksi 100% aman tanpa risiko finansial.",
        },
        {
          q: "Berapa lama proses dari pembelian cash hingga motor dikirim?",
          a: "Untuk pembelian tunai (cash) pada unit 'Ready Stock', unit dapat dikirim langsung ke rumah Anda di hari yang sama (same-day delivery) setelah Anda mengirimkan foto KTP & KK via WhatsApp untuk kebutuhan registrasi STNK. Pembayaran bisa ditransfer ke rekening dealer atau bayar tunai (COD) saat motor tiba.",
        },
      ],
    },
    {
      category: "LAYANAN PURNA JUAL (AFTER-SALES)",
      items: [
        {
          q: "Apakah seluruh unit dilengkapi dengan garansi?",
          a: "Ya. Setiap unit sekunder yang keluar dari fasilitas SRB Motor mendapatkan Garansi Mesin Khusus selama 6 Bulan atau 5.000 KM (mana yang tercapai terlebih dahulu), mencakup blok mesin utama dan transmisi.",
        },
        {
          q: "Bagaimana prosedur klaim servis gratis?",
          a: "Pelanggan dapat melakukan booking servis langsung dengan menghubungi CS WhatsApp resmi kami untuk respon instan.",
        },
      ],
    },
  ];

  const supportChannels = [
    {
      icon: <Phone size={24} />,
      title: "TELEPON LANGSUNG",
      desc: "Layanan respons cepat untuk situasi urgensi.",
      value: "+62 897-8638-849",
      bg: "bg-white",
      text: "text-black",
      descClass: "text-gray-500",
      border: "border-gray-200",
      hoverText: "group-hover:text-[#1c69d4]",
      hoverBg: "hover:bg-gray-50",
      link: "tel:+628978638849",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "CHAT WHATSAPP",
      desc: "Jalur komunikasi utama tim representatif kami.",
      value: "Mulai Percakapan (CS)",
      bg: "bg-black",
      text: "text-white",
      descClass: "text-gray-400",
      border: "border-black",
      hoverText: "group-hover:text-blue-400",
      hoverBg: "hover:bg-[#1c69d4]",
      link: "https://wa.me/628978638849",
    },
    {
      icon: <Mail size={24} />,
      title: "EMAIL KORPORAT",
      desc: "Untuk keperluan B2B, legal, dan kerja sama.",
      value: "support@srbmotor.com",
      bg: "bg-[#1c69d4]",
      text: "text-white",
      descClass: "text-blue-100",
      border: "border-[#1c69d4]",
      hoverText: "group-hover:text-blue-200",
      hoverBg: "hover:bg-black",
      link: "mailto:support@srbmotor.com",
    },
  ];

  const renderFaqTab = () => (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
        {supportChannels.map((channel, idx) => (
          <a
            key={idx}
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${channel.bg} ${channel.text} p-10 flex flex-col group cursor-pointer transition-all duration-500 ${channel.hoverBg}`}
          >
            <div className="mb-6">{channel.icon}</div>
            <h4 className="text-lg font-black uppercase tracking-tight mb-2">
              {channel.title}
            </h4>
            <p className={`font-light text-xs mb-8 ${channel.descClass || "opacity-80"}`}>
              {channel.desc}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className={`font-bold text-[10px] uppercase tracking-widest ${channel.hoverText} transition-colors`}>
                {channel.value}
              </span>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {faqs.map((category, catIdx) => (
          <div key={catIdx}>
            <h3 className="text-[11px] font-bold text-[#1c69d4] uppercase tracking-[0.2em] mb-6 border-b border-gray-100 pb-2">
              {category.category}
            </h3>
            <div className="space-y-px bg-gray-100 border border-gray-100">
              {category.items.map((item, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = openFaq === key;
                if (
                  searchQuery &&
                  !item.q.toLowerCase().includes(searchQuery.toLowerCase()) &&
                  !item.a.toLowerCase().includes(searchQuery.toLowerCase())
                )
                  return null;
                return (
                  <div key={itemIdx} className="bg-white">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                    >
                      <span className="text-lg font-black text-black uppercase tracking-tight pr-8">
                        {item.q}
                      </span>
                      <span
                        className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border ${
                          isOpen
                            ? "border-[#1c69d4] bg-[#1c69d4] text-white"
                            : "border-gray-200 text-black"
                        } transition-colors`}
                      >
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-gray-50 ml-6 text-sm">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGuideTab = () => {
    const creditTimeline = [
      {
        step: "01",
        title: "KONSULTASI & PILIH UNIT",
        icon: <Bike className="w-8 h-8" />,
        desc: "Pilih unit motor dan tentukan perhitungan uang muka & tenor.",
        customer: [
          "Datang ke dealer atau hubungi kami langsung via WhatsApp",
          "Tentukan unit motor baru yang ingin dipesan",
          "Diskusikan nominal Uang Muka (DP) dan Tenor (Durasi) kredit",
        ],
        srb: "Representatif sales kami akan memberikan skema perhitungan kredit simulasi terbaik secara langsung.",
      },
      {
        step: "02",
        title: "KIRIM DOKUMEN VIA WHATSAPP",
        icon: <FileCheck className="w-8 h-8" />,
        desc: "Kirim data pribadi & formulir pengajuan lengkap melalui WhatsApp.",
        customer: [
          "Salin & isi lengkap Formulir Pengajuan Kredit di kolom sebelah kanan",
          "Kirim E-KTP Suami-Istri (atau KTP Pemohon & Penjamin bagi yang belum menikah)",
          "Kirim foto Kartu Keluarga (KK)",
          "Kirim bukti kerja/usaha (Slip Gaji/Nametag/Kartu Karyawan/Bukti Usaha)",
          "Kirim bukti rumah (Rekening Listrik/PBB/Akte Jual Beli)",
        ],
        srb: "Kami memverifikasi kelengkapan dokumen awal secara manual untuk meminimalkan penolakan berkas.",
        require: ["Formulir Pengajuan", "E-KTP", "Kartu Keluarga", "Bukti Kerja", "Bukti Rumah"],
      },
      {
        step: "03",
        title: "POOLING DATA & SURVEI LEASING",
        icon: <Calendar className="w-8 h-8" />,
        desc: "Dealer memproses pooling data ke leasing untuk dilakukan survei fisik.",
        customer: [
          "Tunggu dealer meneruskan data pengajuan Anda ke leasing/surveyor",
          "Terima kunjungan survei fisik dari surveyor resmi leasing ke rumah Anda",
          "Lakukan wawancara singkat & tanda tangan berkas pengajuan",
        ],
        srb: "Data Anda dikirim langsung ke leasing tepercaya. Setelah lolos verifikasi awal, survei fisik segera dijadwalkan.",
      },
      {
        step: "04",
        title: "PERSETUJUAN & PENGIRIMAN UNIT",
        icon: <Truck className="w-8 h-8" />,
        desc: "Persetujuan rilis, pengantaran unit, dan pembayaran DP saat tiba.",
        customer: [
          "Tunggu hasil keputusan kelayakan kredit (Approval) dari leasing",
          "Setelah disetujui, Purchase Order (PO) rilis keesokan harinya",
          "Terima pengiriman unit motor langsung ke domisili Anda",
          "Bayar Uang Muka (DP) secara transfer atau tunai saat motor tiba di rumah",
        ],
        srb: "Unit motor melewati Pre-Delivery Inspection (PDI) menyeluruh sebelum dikirim bersama kuitansi & surat jalan.",
      },
    ];

    const cashTimeline = [
      {
        step: "01",
        title: "PESAN UNIT & KONFIRMASI STOK",
        icon: <Bike className="w-8 h-8" />,
        desc: "Pemesanan langsung unit motor impian tanpa proses survei.",
        customer: [
          "Pilih tipe dan warna motor yang Anda inginkan",
          "Hubungi kami via WhatsApp untuk konfirmasi ketersediaan stok unit",
          "Sepakati harga OTR cash bersih/tunai",
        ],
        srb: "Gudang langsung memblokir nomor rangka/mesin unit yang Anda pesan agar aman dari pemesanan lain.",
      },
      {
        step: "02",
        title: "KIRIM DOKUMEN ADMINISTRASI STNK",
        icon: <FileCheck className="w-8 h-8" />,
        desc: "Kirim data identitas untuk pembuatan STNK & BPKB resmi.",
        customer: [
          "Kirimkan foto E-KTP calon pemilik motor (untuk nama STNK)",
          "Kirimkan foto Kartu Keluarga (KK) via chat WhatsApp",
        ],
        srb: "Berkas langsung didaftarkan ke bagian administrasi Samsat untuk proses pencetakan STNK baru.",
        require: ["E-KTP STNK", "Kartu Keluarga"],
      },
      {
        step: "03",
        title: "PENGIRIMAN MOTOR & PEMBAYARAN COD",
        icon: <Truck className="w-8 h-8" />,
        desc: "Pengiriman motor ke rumah dengan metode pembayaran COD / Transfer.",
        customer: [
          "Konfirmasi jadwal pengiriman unit motor",
          "Cek kecocokan fisik nomor rangka & mesin saat motor tiba di lokasi",
          "Bayar lunas via transfer rekening dealer atau bayar tunai (COD) ke supir kami",
        ],
        srb: "Pengiriman dilakukan oleh tim internal kami. Supir dibekali surat jalan resmi dan tanda terima pembayaran sah.",
      },
    ];

    const activeTimeline = guideType === "credit" ? creditTimeline : cashTimeline;

    return (
      <div className="space-y-16">
        {/* Header Introduction */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-black leading-tight">
            ALUR PEMESANAN UNIT <span className="text-[#1c69d4]">MANUAL</span>
          </h2>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] leading-loose max-w-lg">
            Prosedur kepemilikan unit di SRB Motor dirancang secara kekeluargaan, fleksibel, aman, dan tanpa birokrasi berbelit.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setGuideType("credit")}
            className={cn(
              "py-4 px-6 font-sans font-bold text-xs uppercase tracking-widest border-b-2 transition-all cursor-pointer",
              guideType === "credit"
                ? "border-[#1c69d4] text-[#1c69d4] font-black"
                : "border-transparent text-gray-400 hover:text-black"
            )}
          >
            Pembelian Kredit
          </button>
          <button
            onClick={() => setGuideType("cash")}
            className={cn(
              "py-4 px-6 font-sans font-bold text-xs uppercase tracking-widest border-b-2 transition-all cursor-pointer",
              guideType === "cash"
                ? "border-[#1c69d4] text-[#1c69d4] font-black"
                : "border-transparent text-gray-400 hover:text-black"
            )}
          >
            Pembelian Tunai (Cash)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Timeline */}
          <div className="lg:col-span-7 space-y-20 relative">
            <div className="absolute left-[39px] top-10 bottom-10 w-px bg-gray-100 lg:block hidden"></div>

            {activeTimeline.map((item, i) => (
              <div
                key={i}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 group last:pb-0"
              >
                {/* Step Marker */}
                <div className="lg:col-span-2 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white border-2 border-gray-100 flex items-center justify-center text-black font-black text-2xl group-hover:border-[#1c69d4] group-hover:bg-[#1c69d4] group-hover:text-white transition-all duration-500 z-10">
                    {item.step}
                  </div>
                </div>

                {/* Content Card */}
                <div className="lg:col-span-10 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="p-4 bg-gray-50 text-[#1c69d4] group-hover:bg-blue-50 transition-colors inline-block w-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 bg-gray-50/50 p-6 border border-gray-150 group-hover:border-blue-100 transition-colors">
                    {/* Checklist Customer */}
                    <div className="space-y-4">
                      <p className="text-[9px] font-black text-[#1c69d4] uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#1c69d4] rounded-full"></span>{" "}
                        TINDAKAN PELANGGAN
                      </p>
                      <ul className="space-y-3">
                        {item.customer.map((li, liIdx) => (
                          <li
                            key={liIdx}
                            className="flex gap-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed"
                          >
                            <div className="w-1 h-3.5 bg-gray-200 mt-0.5 shrink-0"></div>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Checklist SRB */}
                    <div className="space-y-4 pt-4 border-t border-gray-150">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>{" "}
                        PROSES INTERNAL SRB
                      </p>
                      <p className="text-[10px] font-medium text-gray-500 italic leading-loose uppercase tracking-wider">
                        &quot;{item.srb}&quot;
                      </p>
                      {item.require && (
                        <div className="pt-2 flex flex-wrap gap-2">
                          {item.require.map((req, rIdx) => (
                            <span
                              key={rIdx}
                              className="px-2.5 py-1 bg-white border border-gray-200 text-[8px] font-black uppercase tracking-widest text-[#1c69d4]"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {guideType === "credit" ? (
              <div className="bg-white border-2 border-black p-6 md:p-8 rounded-none shadow-[12px_12px_0px_0px_rgba(28,105,212,0.1)] space-y-6">
                <div className="flex justify-between items-center border-b border-black pb-4">
                  <h4 className="font-sans font-black text-sm uppercase tracking-wider text-black">
                    FORM PENGAJUAN KREDIT
                  </h4>
                  <button
                    onClick={handleCopyForm}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-[#1c69d4] hover:text-white text-gray-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer rounded-none"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "Tersalin" : "Salin Form"}
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">
                  *Salin formulir di bawah ini, isi data Anda, lalu kirimkan langsung via WhatsApp ke admin kami untuk memulai verifikasi cepat.
                </p>
                <div className="bg-gray-50 p-4 border border-gray-200 max-h-[400px] overflow-y-auto rounded-none font-mono text-[10px] text-gray-700 whitespace-pre leading-relaxed select-all">
{`Nama pemohon : 
Nama Pangilan :  
Nama STNK  : 

Alamat tempat yg tinggal sekarang :
Status rumah: 

Hp.telp 1 :  
HP telp 2 :  
Hp telp pasangan: 

MedsoS:
Email: 

Status pernikahan :
Nama ibu kandung : 

DATA KERJA/USAHA
Nama perusahaan & Wirsawasta: 
Alamat:
Penghasilan/bulan : 
Tlp kntr : 

Data kerja pasangan:
Nama perusahaaan :
Alamat:  
Bagian:
Berapa lama: 

EMERGENCY CALL
No Hp.Saudara tidak serumah : 
Nama saudara : 
Hubungan : 
Alamat : 
Tlp:`}
                </div>
              </div>
            ) : (
              <div className="bg-white border-2 border-black p-6 md:p-8 rounded-none shadow-[12px_12px_0px_0px_rgba(28,105,212,0.1)] space-y-6">
                <h4 className="font-sans font-black text-sm uppercase tracking-wider text-black border-b border-black pb-4">
                  KEUNTUNGAN CASH / TUNAI
                </h4>
                <div className="space-y-6">
                  {[
                    {
                      title: "TANPA PROSES SURVEI",
                      desc: "Pembelian tunai bebas dari kunjungan surveyor leasing. Proses instan langsung diproses setelah deal.",
                    },
                    {
                      title: "DOKUMEN DILINDUNGI",
                      desc: "Hanya butuh foto KTP untuk cetak nama STNK & foto KK untuk pelaporan Samsat. Tidak perlu slip gaji atau bukti rumah.",
                    },
                    {
                      title: "PEMBAYARAN COD (BAYAR DI TEMPAT)",
                      desc: "Untuk keamanan maksimal, Anda bisa membayar tunai atau transfer ke rekening resmi dealer saat supir mengantarkan motor sampai ke rumah Anda.",
                    },
                  ].map((adv, aIdx) => (
                    <div key={aIdx} className="space-y-2">
                      <span className="text-[10px] font-black text-[#1c69d4] uppercase tracking-wider block">
                        {`// ${adv.title}`}
                      </span>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed uppercase tracking-wider">
                        {adv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  interface LegalSection {
    h: string;
    icon?: React.ReactNode;
    p: string;
    list?: string[];
  }

  const LegalTabContent = ({
    title,
    sections,
  }: {
    title: string;
    sections: LegalSection[];
  }) => {
    const [localActiveSection, setLocalActiveSection] = useState(
      sections[0]?.h || ""
    );

    return (
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black">
              {title}
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">
              Pusat Dokumentasi Hukum SRB Motor • Terakhir Diperbarui: 1 April 2026
            </p>
          </div>
          <button className="flex items-center gap-3 px-6 py-3 border border-black text-black font-black uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all group cursor-pointer">
            <FileCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />{" "}
            VERSI CETAK (PDF)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          <div className="lg:col-span-4">
            <div className="sticky top-44 space-y-4">
              <p className="text-[10px] font-bold text-[#1c69d4] uppercase tracking-[0.2em] mb-6">
                DAFTAR ISI DOKUMEN
              </p>
              <nav className="space-y-2">
                {sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setLocalActiveSection(section.h);
                      const el = document.getElementById(`section-${idx}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all border-l-2 cursor-pointer ${
                      localActiveSection === section.h
                        ? "border-[#1c69d4] bg-blue-50/30 text-[#1c69d4]"
                        : "border-gray-100 text-gray-400 hover:border-gray-300 hover:text-gray-600"
                    }`}
                  >
                    Pasal {idx + 1}: {section.h}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {sections.map((section, i) => (
              <section
                key={i}
                id={`section-${i}`}
                className={`p-8 md:p-10 border transition-all duration-500 ${
                  localActiveSection === section.h
                    ? "border-[#1c69d4] bg-white shadow-xl shadow-blue-100/20"
                    : "border-gray-100 bg-white"
                }`}
                onMouseEnter={() => setLocalActiveSection(section.h)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-none transition-colors ${
                      localActiveSection === section.h
                        ? "bg-[#1c69d4] text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {section.icon || <FileCheck className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#1c69d4] tracking-[0.2em] uppercase">
                      PASAL {i + 1}
                    </span>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight">
                      {section.h}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 font-light leading-relaxed uppercase tracking-wide">
                    {section.p}
                  </p>
                  {section.list && (
                    <ul className="space-y-3 pt-4">
                      {section.list.map((li, liIdx) => (
                        <li
                          key={liIdx}
                          className="flex gap-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed"
                        >
                          <span className="text-[#1c69d4]">•</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-white min-h-screen pt-28 text-[#262626] font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* UNIFIED HERO */}
      <section className="bg-black text-white pt-12 pb-24 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1c69d4] opacity-10 pointer-events-none blur-[100px] -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1c69d4] mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-700" />
            <span className="text-gray-500">SUPPORT CENTER</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                APAKAH ADA YANG <br />
                BISA KAMI <span className="text-[#1c69d4]">BANTU?</span>
              </h1>
            </div>

            <div className="relative group w-full max-w-md ml-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="KATA KUNCI PENCARIAN..."
                  className="w-full bg-transparent border-0 border-b-2 border-gray-800 py-4 pl-0 pr-12 focus:border-[#1c69d4] focus:ring-0 outline-none transition-all text-white font-black uppercase tracking-widest placeholder-gray-700"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 w-6 h-6 group-focus-within:text-[#1c69d4] transition-colors animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED NAVIGATION */}
      <div className="border-b border-gray-100 sticky top-[72px] bg-white z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto no-scrollbar gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-6 whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] relative transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <span className="flex items-center gap-3">
                  {tab.id === activeTab && (
                    <span className="w-1.5 h-1.5 bg-[#1c69d4] rounded-full"></span>
                  )}
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabSupport"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1c69d4]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "faq" && renderFaqTab()}
            {activeTab === "guide" && renderGuideTab()}
            {activeTab === "terms" && (
              <LegalTabContent
                title="SYARAT & KETENTUAN"
                sections={[
                  {
                    h: "Ketentuan Umum",
                    icon: <HelpCircle className="w-5 h-5" />,
                    p: "SRB Motor adalah platform resmi penjualan sepeda motor bekas premium. Setiap transaksi melalui platform ini dilindungi oleh hukum perdagangan yang berlaku di Republik Indonesia.",
                    list: [
                      "Pengguna wajib berusia minimal 17 tahun",
                      "Memiliki identitas resmi (KTP/SIM)",
                      "Setuju mematuhi kode etik transaksi aman",
                    ],
                  },
                  {
                    h: "Harga & Pembayaran",
                    icon: <Bike className="w-5 h-5" />,
                    p: "Harga yang tertera adalah OTR wilayah setempat. Kami menerima pembayaran Tunai dan Kredit melalui mitra lembaga pembiayaan resmi (Leasing).",
                    list: [
                      "Harga sewaktu-waktu dapat berubah sebelum ada booking fee",
                      "Pembayaran sah hanya melalui rekening PT Sinar Surya Matahari",
                      "Bukti transfer wajib diunggah ke sistem untuk verifikasi",
                    ],
                  },
                  {
                    h: "Pembatalan & Refund",
                    icon: <MessageSquare size={24} />,
                    p: "Kami menghargai fleksibilitas Anda. Kebijakan pengembalian dana kami dirancang untuk melindungi kedua belah pihak.",
                    list: [
                      "Refund 100% jika pengajuan kredit ditolak leasing",
                      "Potongan administrasi 5% jika pembatalan sepihak setelah unit siap",
                      "Proses refund memakan waktu 3-5 hari kerja",
                    ],
                  },
                  {
                    h: "Garansi Kualitas",
                    icon: <ShieldCheck className="w-5 h-5" />,
                    p: "Setiap unit motor mendapatkan jaminan mesin selama 6 bulan atau 5.000 KM. Garansi mencakup komponen transmisi dan blok mesin utama.",
                    list: [
                      "Wajib melakukan servis rutin di bengkel rekanan",
                      "Garansi batal jika ada modifikasi ilegal",
                      "Klaim garansi wajib menyertakan sertifikat inspeksi",
                    ],
                  },
                ]}
              />
            )}
            {activeTab === "privacy" && (
              <LegalTabContent
                title="KEBIJAKAN PRIVASI"
                sections={[
                  {
                    h: "Pengumpulan Data",
                    icon: <Lock className="w-5 h-5" />,
                    p: "Kami mengumpulkan data Anda semata-mata untuk keperluan verifikasi transaksi dan pengajuan kredit yang aman.",
                    list: [
                      "Data identitas (KTP/KK)",
                      "Informasi kontak (WA/Email)",
                      "Data perangkat untuk keamanan sistem",
                    ],
                  },
                  {
                    h: "Keamanan Dokumen",
                    icon: <FileCheck className="w-5 h-5" />,
                    p: "Setiap dokumen yang diunggah diproses melalui enkripsi AES-256 dan hanya dapat diakses oleh pihak berwenang.",
                    list: [
                      "Storage cloud terenkripsi",
                      "Akses terbatas bagi tim analis",
                      "Audit keamanan sistem secara berkala",
                    ],
                  },
                  {
                    h: "Berbagi Pihak Ketiga",
                    icon: <Truck className="w-5 h-5" />,
                    p: "Data Anda hanya dibagikan kepada mitra Leasing pilihan Anda yang telah terdaftar dan diawasi oleh OJK.",
                    list: [
                      "Mitra leasing (BAF, Adira, dll)",
                      "Layanan pengiriman (Logistik internal)",
                      "Pihak asuransi (jika memilih opsi asuransi)",
                    ],
                  },
                  {
                    h: "Transparansi Google",
                    icon: <Mail className="w-5 h-5" />,
                    p: "Integrasi Google Auth hanya untuk mempermudah login tanpa menyimpan password Anda di database kami.",
                    list: [
                      "Hanya mengambil Nama & Email profil",
                      "Tidak ada tracking aktivitas browser lain",
                      "Opsi hapus tautan akun kapan saja",
                    ],
                  },
                ]}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* REUSED OFFLINE SHOWROOM */}
      {activeTab === "faq" && (
        <section className="bg-black text-white py-24 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-white animate-pulse">
                  KUNJUNGI FASILITAS KAMI
                </h2>
                <p className="text-gray-400 font-light text-lg mb-10 max-w-sm leading-relaxed uppercase tracking-wide">
                  Temui tim ahli kami dan lihat inventaris kendaraan dalam kondisi aslinya.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#1c69d4] shrink-0" />
                    <div>
                      <p className="font-bold text-[11px] uppercase tracking-widest text-[#1c69d4] mb-1">
                        ALAMAT SHOWROOM
                      </p>
                      <p className="font-light text-gray-300 uppercase break-words">
                        Jl. Lori Sakti No.22, RT.001/RW.001, Kaliabang Tengah, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17125
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-gray-800">
                    <div className="w-6 shrink-0"></div>
                    <div>
                      <p className="font-bold text-[11px] uppercase tracking-widest text-[#1c69d4] mb-1">
                        JAM OPERASIONAL
                      </p>
                      <p className="font-light text-gray-300 uppercase leading-relaxed">
                        SENIN - SABTU : 08:00 - 17:00 WIB <br />
                        MINGGU : TUTUP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] border border-gray-800 bg-zinc-950 overflow-hidden group">
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#1c69d4] z-20 pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#1c69d4] z-20 pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#1c69d4] z-20 pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#1c69d4] z-20 pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="w-full h-full relative overflow-hidden grayscale contrast-[1.15] invert opacity-75 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4623780824445!2d107.0002294108153!3d-6.202572560735418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6989612b68d3c1%3A0xa345594d8a856780!2sSRB%20Motor%20Bekasi!5e0!3m2!1sid!2sid!4v1781607811201!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
