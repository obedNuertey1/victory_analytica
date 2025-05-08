// src\app\contact\page.tsx
import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import ContactFormSection from "@/app/components/ContactFormSection/ContactFormSection";
import { metadata } from "../layout";

function page() {
    metadata.title = "Contact Us | Victory Analytica & Security LLC";
    metadata.description = "At Victory Analytica & Security LLC, our mission is to empower businesses globally by providing expert consulting in international business setup, strategic planning, and investment opportunities.";
    metadata.icons = {
        icon: "/favicon.ico",
      }
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