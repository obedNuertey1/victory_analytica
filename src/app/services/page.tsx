import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import ExpertiseSection from "@/app/components/ExpertiseSection/ExpertiseSection";

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Our Services"}
                leftParagraphText={"Empowering Your U.S. Market Entry and Strategic Growth"}
                rightParagraphText={"At Victory Analytica & Security LLC, we offer tiered consulting models—from Silver to Elite—encompassing international business setup, strategic planning, data science insights, comprehensive security solutions, and project & portfolio management tailored to your timeline and goals."}
            />
            <ExpertiseSection />
            <ContactSection />
        </div>
    )
}

export default page;