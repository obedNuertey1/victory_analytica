// src\app\about\page.tsx
import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import StorySection from '../components/StorySection/StorySection';
import ValuePropositionSection from "@/app/components/ValuePropositionSection/ValuePropositionSection";
import TeamSection from "@/app/components/TeamSection/TeamSection";
import JoinUsSection from "@/app/components/JoinUsSection/JoinUsSection";
import TestimonialQuoteSection from "@/app/components/TestimonialQuoteSection/TestimonialQuoteSection";
import ContactSection from "@/app/components/ContactSection/ContactSection";


function page() {
  return (
    <div className="flex flex-col self-stretch">
        <HeroSectionPartial
          firstBlockText={"Global Empowerment Partners"}
          rightParagraphText={"Victory Analytica & Security LLC redefines international business consulting through integrated security solutions and data-driven strategy. We specialize in turnkey US market entry, combining legal expertise with cutting-edge threat analysis to safeguard your global expansion."}
        />
        <StorySection />
        <ValuePropositionSection />
        <TeamSection />
        <JoinUsSection />
        <TestimonialQuoteSection />
        <ContactSection />
    </div>
  )
}

export default page;