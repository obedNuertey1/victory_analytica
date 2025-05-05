import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import CaseStudiesSection from "@/app/components/CaseStudiesSection/CaseStudiesSection"

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Case Studies"}
                leftParagraphText={"Get To Know About Our Proven Impact"}
                rightParagraphText={"Explore how Victory Analytica & Security LLC has empowered clients globally—securing U.S. market entry, optimizing operations, and driving strategic growth through data science, security solutions, and expert project management."}
            />
            <CaseStudiesSection />
            <ContactSection />
        </div>
    )
}

export default page