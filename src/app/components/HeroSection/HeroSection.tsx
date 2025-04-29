// src/app/components/HeroSection/HeroSection.tsx
"use client";
import * as React from "react";
import { Background } from "./Background";
import { Hero } from "./Hero";
import { ClientLogos } from "./ClientLogos";
import { Navbar } from "../Navbar";

function HeroSection() {
  return (<>
     {/* <div className="flex overflow-hidden relative flex-col self-stretch min-h-[1024px]"> */}
      <Background />
      <main className="flex relative flex-col w-full min-h-[1024px] max-md:max-w-full">
        <div className="flex relative flex-col self-center w-full max-w-[1218px] max-md:max-w-full">
          {/* Navbar goes here */}
          <Navbar />
          <Hero />
        </div>
        <ClientLogos />
      </main>
      </>
    // </div>
  );
}

export default HeroSection;
