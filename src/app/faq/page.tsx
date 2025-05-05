import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import FaqSection from '@/app/components/FaqSection/FaqSection';

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Frequently Asked Questions"}
                leftParagraphText={"Your questions, our answers"}
                rightParagraphText={
                    "Find expert guidance on international business setup, tiered service models (Silver to Elite), and compliance architecture. Need tailored security solutions? Request a consultation below."
                }
            />
            <FaqSection />
            <ContactSection />
        </div>
    )
}

export default page;