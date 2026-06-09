"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bike,
  ArrowLeft,
  Hash,
  MapPin,
  ClipboardList,
  Activity,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ChevronLeft,
  Phone,
} from "lucide-react";

export default function ServicesBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    branch: "",
    plate_number: "",
    customer_phone: "",
    motor_model: "",
    service_date: "",
    service_time: "",
    service_type: "Servis Berkala",
    complaint_notes: "",
  });

  const branches = ["Bekasi Timur (Pusat)", "Bekasi Barat (Kranji)"];
  
  const timeSlots = [
    { time: "08:00", available: true, remaining: 3 },
    { time: "09:00", available: true, remaining: 2 },
    { time: "10:00", available: true, remaining: 1 },
    { time: "11:00", available: false, remaining: 0 },
    { time: "13:00", available: true, remaining: 4 },
    { time: "14:00", available: true, remaining: 2 },
    { time: "15:00", available: true, remaining: 3 },
    { time: "16:00", available: false, remaining: 0 },
  ];

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (
      step === 1 &&
      (!formData.branch ||
        !formData.plate_number ||
        !formData.motor_model ||
        !formData.customer_phone)
    ) {
      alert("Mohon isi Cabang, Plat Nomor, Model Motor, dan Nomor WhatsApp Anda.");
      return;
    }
    if (step === 2 && !formData.service_date) {
      alert("Mohon pilih tanggal kedatangan di bengkel.");
      return;
    }
    if (step === 3 && !formData.service_time) {
      alert("Mohon pilih jam (slot) yang tersedia.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prefill WhatsApp text with booking details
    const text = `Halo SRB Motor, saya ingin melakukan Booking Servis dengan detail berikut:
- Cabang: ${formData.branch}
- Plat Nomor: ${formData.plate_number}
- Model Motor: ${formData.motor_model}
- WhatsApp: ${formData.customer_phone}
- Tanggal: ${formData.service_date}
- Jam: ${formData.service_time} WIB
- Jenis Layanan: ${formData.service_type}
- Keluhan: ${formData.complaint_notes || "-"}`;

    const waUrl = `https://wa.me/628978638849?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const getFormattedDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white text-[#262626] font-sans antialiased overflow-x-hidden">
      <Navbar />

      <div className="flex-grow pt-28 bg-white pb-24">
        {/* Header Section */}
        <section className="bg-black text-white pt-10 pb-28 border-b border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <Activity className="w-full h-full text-[#1c69d4] rotate-12 translate-x-20" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8 flex justify-between items-center">
              <Link
                href="/"
                className="text-gray-400 hover:text-[#1c69d4] flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors text-xs"
              >
                <ArrowLeft className="w-3 h-3" /> KEMBALI KE BERANDA
              </Link>
              <div className="flex items-center gap-4">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1 w-8 ${
                      step >= s ? "bg-[#1c69d4]" : "bg-gray-800"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-white">
              ANTREAN <br />
              <span className="text-[#1c69d4]">TERJADWAL</span>
            </h1>
            <p className="text-gray-500 max-w-sm text-[10px] font-black uppercase tracking-[0.3em]">
              Langkah {step} dari 4:{" "}
              {step === 1
                ? "Identitas & Lokasi"
                : step === 2
                ? "Pilih Hari"
                : step === 3
                ? "Pilih Jam"
                : "Konfirmasi"}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <motion.div
                className="bg-white border-2 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(28,105,212,0.1)] min-h-[500px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  {/* STEP 1: BRANCH & IDENTITY */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-8 text-[#1c69d4]">
                          <MapPin size={24} />
                          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                            LOKASI BENGKEL
                          </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {branches.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => updateField("branch", b)}
                              className={`p-6 border-2 text-left transition-all cursor-pointer ${
                                formData.branch === b
                                  ? "border-[#1c69d4] bg-[#1c69d4]/5"
                                  : "border-gray-100 hover:border-gray-300"
                              }`}
                            >
                              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">
                                CABANG
                              </p>
                              <p className="text-xs font-black uppercase">{b}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-8 text-[#1c69d4]">
                          <Hash size={24} />
                          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                            PLAT NOMOR (NOPOL)
                          </h2>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.plate_number}
                            onChange={(e) =>
                              updateField(
                                "plate_number",
                                e.target.value.toUpperCase()
                              )
                            }
                            placeholder="B 1234 ABC"
                            className="w-full bg-gray-50 border-4 border-gray-100 p-8 text-4xl md:text-6xl font-black text-center tracking-widest outline-none focus:border-[#1c69d4] focus:bg-white transition-all uppercase placeholder:text-gray-200"
                          />
                          <p className="text-center text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-[0.2em]">
                            Sesuai Nomor Polisi di STNK Kendaraan
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <div className="flex items-center gap-3 mb-6 text-[#1c69d4]">
                            <Bike size={24} />
                            <h2 className="text-xl font-black uppercase tracking-tight text-black">
                              MODEL MOTOR
                            </h2>
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              value={formData.motor_model}
                              onChange={(e) =>
                                updateField(
                                  "motor_model",
                                  e.target.value.toUpperCase()
                                )
                              }
                              placeholder="CONTOH: VARIO 160 / NMAX"
                              className="w-full bg-gray-50 border-2 border-gray-100 p-6 text-xl font-black outline-none focus:border-black transition-all uppercase placeholder:text-gray-200"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-6 text-[#1c69d4]">
                            <Phone size={24} />
                            <h2 className="text-xl font-black uppercase tracking-tight text-black">
                              NOMOR WHATSAPP
                            </h2>
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              value={formData.customer_phone}
                              onChange={(e) =>
                                updateField("customer_phone", e.target.value)
                              }
                              placeholder="0812XXXXXXXX"
                              className="w-full bg-gray-50 border-2 border-gray-100 p-6 text-xl font-black outline-none focus:border-black transition-all uppercase placeholder:text-gray-200"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={nextStep}
                        className="w-full bg-black text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-[#1c69d4] transition-all cursor-pointer"
                      >
                        LANJUTKAN PILIH HARI
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 2: DATE SELECTION */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3 text-[#1c69d4]">
                          <CalendarIcon size={24} />
                          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                            PILIH TANGGAL
                          </h2>
                        </div>
                        <button
                          onClick={prevStep}
                          className="text-[10px] font-black uppercase tracking-widest text-[#1c69d4] flex items-center gap-2 border-b border-[#1c69d4] pb-1 hover:text-black hover:border-black transition-colors cursor-pointer"
                        >
                          <ChevronLeft size={14} /> KEMBALI
                        </button>
                      </div>

                      <div className="space-y-6">
                        <input
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.service_date}
                          onChange={(e) =>
                            updateField("service_date", e.target.value)
                          }
                          className="w-full bg-gray-50 border-4 border-gray-100 p-8 text-3xl font-black uppercase outline-none focus:border-[#1c69d4] text-center"
                        />

                        <div className="bg-gray-50 p-6 border-l-4 border-[#1c69d4]">
                          <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-2">
                            CABANG TERPILIH
                          </p>
                          <p className="text-xs font-black uppercase mb-4 text-[#1c69d4]">
                            {formData.branch}
                          </p>
                          <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">
                            DATA TANGGAL
                          </p>
                          <p className="text-xs font-bold uppercase tracking-wider">
                            {formData.service_date
                              ? getFormattedDate(formData.service_date)
                              : "Belum Memilih Tanggal"}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={nextStep}
                        className="w-full bg-[#1c69d4] text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-black transition-all mt-10 cursor-pointer"
                      >
                        LANJUTKAN PILIH JAM
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 3: TIME SLOTS */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3 text-[#1c69d4]">
                          <Clock size={24} />
                          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                            PILIH JAM (SLOT)
                          </h2>
                        </div>
                        <button
                          onClick={prevStep}
                          className="text-[10px] font-black uppercase tracking-widest text-[#1c69d4] flex items-center gap-2 border-b border-[#1c69d4] pb-1 hover:text-black hover:border-black transition-colors cursor-pointer"
                        >
                          <ChevronLeft size={14} /> KEMBALI
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => updateField("service_time", slot.time)}
                            className={`
                              p-6 border-2 text-center transition-all flex flex-col items-center justify-center min-h-[100px] cursor-pointer
                              ${
                                !slot.available
                                  ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                                  : formData.service_time === slot.time
                                  ? "border-[#1c69d4] bg-[#1c69d4] text-white shadow-lg"
                                  : "border-gray-100 hover:border-[#1c69d4]"
                              }
                            `}
                          >
                            <span className="text-xl font-black">{slot.time}</span>
                            <span className="text-[8px] font-bold uppercase tracking-tighter mt-1">
                              {slot.available
                                ? `${slot.remaining} TERSEDIA`
                                : "PENUH"}
                            </span>
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={nextStep}
                        className="w-full bg-[#1c69d4] text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-black transition-all mt-10 cursor-pointer"
                      >
                        PENYELESAIAN TERAKHIR
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 4: FINAL CONFIRMATION */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-10"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3 text-[#1c69d4]">
                          <CheckCircle2 size={24} />
                          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                            KONFIRMASI AKHIR
                          </h2>
                        </div>
                        <button
                          onClick={prevStep}
                          className="text-[10px] font-black uppercase tracking-widest text-[#1c69d4] flex items-center gap-2 border-b border-[#1c69d4] pb-1 hover:text-black hover:border-black transition-colors cursor-pointer"
                        >
                          <ChevronLeft size={14} /> KEMBALI
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-10 border-2 border-black relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                          <Bike size={150} />
                        </div>
                        <div className="space-y-6 relative z-10">
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                              LOKASI CABANG
                            </p>
                            <p className="text-xs font-black uppercase text-[#1c69d4]">
                              {formData.branch}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                              JADWAL KEDATANGAN
                            </p>
                            <p className="text-xs font-black uppercase">
                              {getFormattedDate(formData.service_date)}
                            </p>
                            <p className="text-3xl font-black text-black mt-1 leading-none">
                              {formData.service_time} <span className="text-sm">WIB</span>
                            </p>
                          </div>
                        </div>
                        <div className="space-y-6 relative z-10 text-right md:text-left">
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                              PLAT NOMOR UNIT
                            </p>
                            <p className="text-4xl font-black tracking-[0.2em] text-black italic drop-shadow-sm">
                              {formData.plate_number}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                              JENIS LAYANAN
                            </p>
                            <select
                              value={formData.service_type}
                              onChange={(e) =>
                                updateField("service_type", e.target.value)
                              }
                              className="bg-white border-2 border-black px-4 py-2 text-xs font-black uppercase focus:ring-0 outline-none w-full appearance-none cursor-pointer"
                            >
                              <option>Servis Berkala</option>
                              <option>Ganti Oli Saja</option>
                              <option>Perbaikan Mesin</option>
                              <option>Kelistrikan</option>
                              <option>Lainnya</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] block mb-4 flex items-center gap-3">
                          <ClipboardList size={16} className="text-[#1c69d4]" />
                          KELUHAN / CATATAN MEKANIK
                        </label>
                        <textarea
                          rows={3}
                          value={formData.complaint_notes}
                          onChange={(e) =>
                            updateField("complaint_notes", e.target.value)
                          }
                          placeholder="Contoh: Bunyi kasar di mesin, rem belakang kurang pakem, tarikan berat..."
                          className="w-full border-2 border-gray-100 p-6 font-bold text-xs outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="w-full bg-black text-white py-8 font-black uppercase tracking-[0.4em] hover:bg-[#1c69d4] transition-all flex items-center justify-center gap-6 group cursor-pointer"
                      >
                        TERBITKAN TIKET ANTRIAN SEKARANG
                        <CheckCircle2
                          size={24}
                          className="fill-white group-hover:scale-125 transition-transform duration-300"
                        />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* DESKTOP SIDEBAR GUIDE */}
            <div className="w-full lg:w-1/3 hidden lg:block space-y-8">
              <div className="bg-gray-50 p-10 border-2 border-gray-100">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">
                  PANDUAN BOOKING
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      t: "Pilih Lokasi & Plat",
                      d: "Tentukan cabang dan pastikan nomor plat sesuai dengan unit motor Anda.",
                    },
                    {
                      t: "Tentukan Jadwal",
                      d: "Pilih tanggal dan slot jam kedatangan yang masih tersedia sesuai kuota.",
                    },
                    {
                      t: "Ambil Tiket",
                      d: "Kirim data Anda untuk membuat janji temu servis resmi via WhatsApp CS.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-sm shrink-0 border-2 border-black">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest mb-1">
                          {item.t}
                        </p>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black text-white p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c69d4] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1c69d4] mb-6">
                  MENGAPA BOOKING?
                </p>
                <p className="text-xs leading-relaxed font-light text-gray-400 italic">
                  &quot;Dengan pendaftaran terjadwal, Anda mendapatkan prioritas
                  pemanggilan mekanik sesuai slot jam yang dipilih, meminimalisir
                  waktu tunggu di bengkel.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
