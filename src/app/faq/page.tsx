import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import FaqSection from '@/app/components/FaqSection/FaqSection';

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Frequently"}
                secondBlockText={"Asked Questions"}
                leftParagraphText={"Your questions, our answers"}
                rightParagraphText={
                    "Here you’ll find clear, concise information on our services, processes, and how ABC Company can help your business succeed. Still need help? Reach out to us below."
                }
            />
            <FaqSection />
            <ContactSection />
        </div>
    )
}

export default page;