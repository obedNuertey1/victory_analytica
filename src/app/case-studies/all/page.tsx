import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import AllCaseStudiesSection from "@/app/components/CaseStudiesSection/AllCaseStudiesSection"
import { metadata } from "../../layout";

function page() {
    metadata.title = "All Case Studies | Victory Analytica & Security LLC";
    metadata.description = "Get To Know About Victory Analytica's Proven Impact";
    metadata.icons = {
        icon: "/favicon.ico",
      }
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