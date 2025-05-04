import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Our Services"}
                leftParagraphText={"Transforming Businesses with Tailored Engineering Solutions"}
                rightParagraphText={"From startups to multinational enterprises, our services are designed to address your unique challenges and help you achieve measurable success."}
            />
            <ContactSection />
        </div>
    )
}

export default page;