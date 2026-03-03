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
  metadataBase: new URL("https://srb-motor.vercel.app"),
  title: "SRB Motors | Future of Riding",
  description:
    "Discover your dream ride with SRB Motors. Official retailer of new Honda and Yamaha motorcycles.",
  verification: {
    google: "30iEf5hjGaLKqQGcttLpuchfHjbhhCYqTqooNYFKTJY",
  },
  keywords: [
    "motor baru",
    "Honda",
    "Yamaha",
    "motor official",
    "SRB Motors",
    "Bekasi",
    "dealer resmi",
  ],
  authors: [{ name: "SRB Motors" }],
  openGraph: {
    title: "SRB Motors | Future of Riding",
    description:
      "Discover your dream ride with SRB Motors. Official retailer of new Honda and Yamaha motorcycles.",
    url: "https://srb-motor.vercel.app",
    siteName: "SRB Motors",
    images: [
      {
        url: "/assets/icon/logo trans.webp",
        width: 1200,
        height: 630,
        alt: "SRB Motors Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRB Motors | Future of Riding",
    description:
      "Discover your dream ride with SRB Motors. Premium collection of Honda and Yamaha motorcycles.",
    images: ["/assets/icon/logo trans.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BackToTop } from "@/components/ui/BackToTop";

import { Analytics } from "@vercel/analytics/react";
import { CompareProvider } from "@/components/providers/CompareProvider";
import { CompareFloat } from "@/components/features/CompareFloat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased bg-black text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
        <CompareProvider>
          <Preloader />
          <SmoothScroll />
          <BackToTop />
          <CompareFloat />
          {children}
          <Analytics />
        </CompareProvider>
      </body>
    </html>
  );
}
