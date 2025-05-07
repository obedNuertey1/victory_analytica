// src/app/components/HeroSection/HeroSection.tsx
"use client";
import React from 'react';
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-h-[calc(100vh-4rem)] overflow-hidden">
          <Hero
            firstBlockText={"Victory Analytica"}
            secondBlockText={<span className="tracking-[3.4px] md:tracking-[5.5px] lg:tracking-[9px]">& Security LLC</span>}
            // secondBlockText={"Empowering Global Enterprises"}
            leftParagraphText={
              "At Victory Analytica & Security LLC, our mission is to empower businesses globally by providing expert consulting in international business setup, strategic planning, and investment opportunities."
            }
            rightParagraphText={
              "We leverage cutting-edge data science, comprehensive security solutions, and advanced project and portfolio management to help businesses thrive in the U.S. and beyond."
            }
          />
        </div>
        <ClientLogos />
      </main>
    </section>
  );
}

export default HeroSection;
