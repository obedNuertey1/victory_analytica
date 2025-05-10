import HeroSection from "@/app/components/HeroSection/HeroSection2";
import ExpertiseSection from "@/app/components/ExpertiseSection/ExpertiseSection";
import ImpactSection from "@/app/components/ImpactSection/ImpactSection";
import WhyChooseSection from "@/app/components/WhyChooseSection/WhyChooseSection";
import SuccessStories from "@/app/components/SuccessStories/SuccessStories";
import FaqSection from "@/app/components/FaqSection/FaqSection";
import ContactSection from "@/app/components/ContactSection/ContactSection";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "Home | Victory Analytica & Security LLC";
  metadata.description = "At Victory Analytica & Security LLC, our mission is to empower businesses globally by providing expert consulting in international business setup, strategic planning, and investment opportunities.";
  metadata.icons = {
    icon: "/favicon.ico",
  }
  
  return (
    <div className="flex overflow-hidden relative flex-col self-stretch min-h-[1024px]">
      {/* <Background /> */}
      <HeroSection/>
      {/* ExpertiseSection displays as "Our Services" */}
      <ExpertiseSection />
      <ImpactSection />
      <WhyChooseSection />
      <SuccessStories />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
