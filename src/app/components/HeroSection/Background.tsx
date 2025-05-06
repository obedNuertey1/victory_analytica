// src/app/components/HeroSection/Background.tsx
import Image from "next/image";

export const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/12bf4ad164c299f1889bdac8da2b849e43c3a1d4?placeholderIfAbsent=true"
        alt="Background decoration"
        fill
        className="object-cover absolute inset-0 size-full"
      />
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/e2b6827f4c0520308efe3c199f9c602255c6a6d1?placeholderIfAbsent=true"
        alt="Background overlay"
        fill
        className="object-cover absolute inset-0 size-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/20" />
    </div>
  );
};