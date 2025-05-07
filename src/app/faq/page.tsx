import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import FaqSection from '@/app/components/FaqSection/FaqSection';
import { metadata } from "../layout";

function page() {
    metadata.title = "FAQs | Victory Analytica & Security LLC";
    metadata.description = "Frequently Asked Questions";
    metadata.icons = {
        icon: "/favicon.ico",
      }
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Frequently Asked"}
                secondBlockText={"Questions"}
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