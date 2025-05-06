// src\app\about\page.tsx
import React, {Suspense} from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import ServiceTable from "@/app/components/ServiceTable/ServiceTable";
import { metadata } from "../layout";


function page() {
    metadata.title = "Our Tiered Service Models | Victory Analytica & Security LLC";
    metadata.description = "At Victory Analytica & Security LLC, our mission is to empower businesses globally by providing expert consulting in international business setup, strategic planning, and investment opportunities.";
    metadata.icons = {
        icon: "/favicon.ico",
      }
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText='Our Tiered Service Models'
                // rightParagraphText={"Victory Analytica & Security LLC redefines international business consulting through integrated security solutions and data-driven strategy. We specialize in turnkey US market entry, combining legal expertise with cutting-edge threat analysis to safeguard your global expansion."}
            />
            <Suspense fallback={<div>Loading...</div>}>
                <ServiceTable />
            </Suspense>
            <ContactSection />
        </div>
    )
}

export default page;