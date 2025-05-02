// src\app\components\WhyChooseSection\BackgroundImage.tsx
import React from "react";

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
      <img
        src={src}
        alt=""
        className="object-cover absolute inset-0 size-full -z-10"  // Added -z-10
        aria-hidden="true"
      />
      <div className="relative z-10">  {/* Added wrapper div */}
        {children}
      </div>
    </div>
  );
};