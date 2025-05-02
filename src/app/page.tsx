import Image from "next/image";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import ExpertiseSection from "@/app/components/ExpertiseSection/ExpertiseSection";
import ImpactSection from "@/app/components/ImpactSection/ImpactSection";

export default function Home() {
  return (
    <div className="flex overflow-hidden relative flex-col self-stretch min-h-[1024px]">
      {/* <Background /> */}
      <HeroSection/>
      <ExpertiseSection />
      <ImpactSection />
    </div>
  );
}
