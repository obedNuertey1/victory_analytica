// src\app\components\WhyChooseSection\BackgroundImage.tsx
import React from "react";
import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  children: React.ReactNode;
  className?: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt="background image"
        fill
        className="object-cover absolute inset-0 size-full -z-10"  // Added -z-10
        aria-hidden="true"
      />
      <div className="relative z-10">  {/* Added wrapper div */}
        {children}
      </div>
    </div>
  );
};