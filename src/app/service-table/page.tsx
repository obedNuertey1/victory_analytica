// src\app\about\page.tsx
import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import ServiceTable from "@/app/components/ServiceTable/ServiceTable";


function page() {
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText='Our Tiered Service Models'
                // rightParagraphText={"Victory Analytica & Security LLC redefines international business consulting through integrated security solutions and data-driven strategy. We specialize in turnkey US market entry, combining legal expertise with cutting-edge threat analysis to safeguard your global expansion."}
            />
            <ServiceTable />
            <ContactSection />
        </div>
    )
}

export default page;