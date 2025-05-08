// src/app/careers/page.tsx
import React from 'react';
import HeroSectionPartial from "@/app/components/HeroSection/HeroSectionPartial";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import JobListingsSection from "@/app/components/JobListingsSection/JobListingsSection";
import { metadata } from "../layout";

function page() {
    metadata.title = "Careers | Victory Analytica & Security LLC";
    metadata.description = "Join our team of experts in international business consulting, security analysis, and strategic planning. Grow your career with Victory Analytica & Security LLC.";
    metadata.icons = {
        icon: "/favicon.ico",
    }
    return (
        <div className="flex flex-col self-stretch">
            <HeroSectionPartial
                firstBlockText={"Join Our Team"}
                leftParagraphText={"We're building a global team of innovative thinkers and problem solvers in business strategy, security analysis, and international consulting."}
                rightParagraphText={"We offer competitive benefits, professional growth opportunities, and challenging projects that make a real impact on global businesses."}
            />
            <JobListingsSection />
            <ContactSection />
        </div>
    )
}

export default page;