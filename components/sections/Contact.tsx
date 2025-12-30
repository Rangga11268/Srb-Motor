"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-slate-900 border border-white/5 p-8 md:p-16 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-lg" />

          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Get in <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-slate-400">
              Punya pertanyaan atau ingin booking unit? Sampaikan pesan Anda di
              sini.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xnnvqqwg"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your dream bike..."
                required
                className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-colors"
            >
              Send Message <Send size={20} />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
