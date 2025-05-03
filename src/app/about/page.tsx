import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import StorySection from '../components/StorySection/StorySection';


function page() {
  return (
    <div className="flex overflow-hidden relative flex-col self-stretch min-h-[1024px]">
        <HeroSectionPartial
          firstBlockText={"About Us"}
          rightParagraphText={"At ABC Company, we are more than just a service provider—we’re your trusted partner in engineering success. With decades of experience and a commitment to excellence, we deliver tailored solutions that help businesses, from startups to global enterprises, achieve their goals."}
        />
        <StorySection />
    </div>
  )
}

export default page;