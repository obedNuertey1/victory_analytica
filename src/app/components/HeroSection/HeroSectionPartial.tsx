// src/app/components/HeroSection/HeroSection.tsx
"use client";
import { Navbar } from "../Navbar";
import { Background } from "./Background";
import { Hero } from "./Hero";
import * as React from "react";

interface HeroSectionPartialProps<S>{
    firstBlockText?: S;
    secondBlockText?: S;
    leftParagraphText?: S;
    rightParagraphText?: S;
}

function HeroSectionPartial({firstBlockText, secondBlockText, leftParagraphText, rightParagraphText}:HeroSectionPartialProps<string>){
  return (
    <section className="relative overflow-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-20 md:pt-32 pb-24 md:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-h-[calc(100vh-4rem)]  overflow-hidden">
          <Hero
            firstBlockText={firstBlockText}
            secondBlockText={secondBlockText}
            leftParagraphText={leftParagraphText}
            rightParagraphText={rightParagraphText}
          />
        </div>
      </main>
    </section>
  );
}

export default HeroSectionPartial;