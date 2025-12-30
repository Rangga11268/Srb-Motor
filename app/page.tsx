import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PopularMotors } from "@/components/sections/PopularMotors";
import { Manifesto } from "@/components/sections/Manifesto";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <PopularMotors />
      <Manifesto />
      <Footer />
    </main>
  );
}
