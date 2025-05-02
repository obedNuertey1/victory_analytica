import Image from "next/image";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import ExpertiseSection from "@/app/components/ExpertiseSection/ExpertiseSection";
import ImpactSection from "@/app/components/ImpactSection/ImpactSection";
import WhyChooseSection from "@/app/components/WhyChooseSection/WhyChooseSection";
import SuccessStories from "@/app/components/SuccessStories/SuccessStories";

export default function Home() {
  return (
    <div className="flex overflow-hidden relative flex-col self-stretch min-h-[1024px]">
      {/* <Background /> */}
      <HeroSection/>
      <ExpertiseSection />
      <ImpactSection />
      <WhyChooseSection />
      <SuccessStories />
    </div>
  );
}
