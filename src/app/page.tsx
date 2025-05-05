import Image from "next/image";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import ExpertiseSection from "@/app/components/ExpertiseSection/ExpertiseSection";
import ImpactSection from "@/app/components/ImpactSection/ImpactSection";
import WhyChooseSection from "@/app/components/WhyChooseSection/WhyChooseSection";
import SuccessStories from "@/app/components/SuccessStories/SuccessStories";
import FaqSection from "@/app/components/FaqSection/FaqSection";
import ContactSection from "@/app/components/ContactSection/ContactSection";

export default function Home() {
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
