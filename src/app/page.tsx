import Image from "next/image";
import HeroSection from "@/app/components/HeroSection/HeroSection";
// import 

export default function Home() {
  return (
    <div className="flex overflow-hidden relative flex-col self-stretch min-h-[1024px]">
      {/* <Background /> */}
      <HeroSection/>
    </div>
  );
}
