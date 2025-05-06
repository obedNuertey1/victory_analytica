import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import AllCaseStudiesSection from "@/app/components/CaseStudiesSection/AllCaseStudiesSection"

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"More Case Studies"}
                leftParagraphText={"Get To Know About Our Proven Impact"}
                rightParagraphText={"Explore how Victory Analytica & Security LLC has empowered clients globally—securing U.S. market entry, optimizing operations, and driving strategic growth through data science, security solutions, and expert project management."}
            />
            <AllCaseStudiesSection />
            <ContactSection />
        </div>
    )
}

export default page