import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import ContactFormSection from "@/app/components/ContactFormSection/ContactFormSection";

function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Get In Touch"}
                leftParagraphText={"We help businesses expand globally with strategic consulting, data-driven insights, and security‑focused project management."}
                rightParagraphText={"From startups to multinational enterprises, our services are designed to address your unique challenges and help you achieve measurable success."}
            />
            <ContactFormSection />
            <ContactSection />
        </div>
    )
}

export default page;