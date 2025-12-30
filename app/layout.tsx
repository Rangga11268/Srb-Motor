import type { Metadata } from "next";
import { Syne, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "SRB Motors | Future of Riding",
  description:
    "Discover your dream ride with SRB Motors. Premium collection of Honda and Yamaha motorcycles.",
};

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${spaceGrotesk.variable} cursor-none`}
    >
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-black overflow-x-hidden">
        <SmoothScroll />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
