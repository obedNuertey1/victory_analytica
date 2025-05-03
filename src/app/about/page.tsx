// src\app\about\page.tsx
import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import StorySection from '../components/StorySection/StorySection';
import ValuePropositionSection from "@/app/components/ValuePropositionSection/ValuePropositionSection";
import TeamSection from "@/app/components/TeamSection/TeamSection";
import JoinUsSection from "@/app/components/JoinUsSection/JoinUsSection";
import TestimonialQuoteSection from "@/app/components/TestimonialQuoteSection/TestimonialQuoteSection";


function page() {
  return (
    <div className="flex flex-col self-stretch">
        <HeroSectionPartial
          firstBlockText={"About Us"}
          rightParagraphText={"At ABC Company, we are more than just a service provider—we’re your trusted partner in engineering success. With decades of experience and a commitment to excellence, we deliver tailored solutions that help businesses, from startups to global enterprises, achieve their goals."}
        />
        <StorySection />
        <ValuePropositionSection />
        <TeamSection />
        <JoinUsSection />
        <TestimonialQuoteSection />
    </div>
  )
}

export default page;