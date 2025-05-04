import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import CaseStudiesSection from "@/app/components/CaseStudiesSection/CaseStudiesSection"

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Case Studies"}
                leftParagraphText={"Proven Success Across Industries"}
                rightParagraphText={"Explore how ABC Company has empowered businesses worldwide with tailored engineering solutions that deliver measurable results."}
            />
            <CaseStudiesSection />
            <ContactSection />
        </div>
    )
}

export default page