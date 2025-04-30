// src/app/components/HeroSection/HeroSection.tsx
"use client";
import { Navbar } from "../Navbar";
import { Background } from "./Background";
import { Hero } from "./Hero";
import { ClientLogos } from "./ClientLogos";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-20 md:pt-32 pb-24 md:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-h-[calc(100vh-4rem)]  overflow-hidden">
          <Hero />
        </div>
        <ClientLogos />
      </main>
    </section>
  );
}

export default HeroSection;