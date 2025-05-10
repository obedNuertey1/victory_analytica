// src/app/components/HeroSection/ClientLogos.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const ClientLogos = () => {
  const logos = [
    {
      src: "/assets/HeroSection/ClientLogos/client-logo-1.png",
      aspect: "3.55",
      width: "170",
    },
    {
      src: "/assets/HeroSection/ClientLogos/client-logo-2.png",
      aspect: "3.48",
      width: "167",
    },
    {
      src: "/assets/HeroSection/ClientLogos/client-logo-3.png",
      aspect: "4.13",
      width: "198",
    },
    {
      src: "/assets/HeroSection/ClientLogos/client-logo-4.png",
      aspect: "3.46",
      width: "166",
    },
    {
      src: "/assets/HeroSection/ClientLogos/client-logo-5.png",
      aspect: "4.1",
      width: "197",
    },
    {
      src: "/assets/HeroSection/ClientLogos/client-logo-6.png",
      aspect: "3.79",
      width: "182",
    },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple for seamless loop
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate container width on mount
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Scroll-driven animation
  const x = useTransform(scrollY, (latest) => {
    const scrollSpeed = 0.5; // Adjust this value to control speed
    return (-latest * scrollSpeed) % (containerWidth * 0.75);
  });

  return (
    <div className="mt-20 md:mt-32 lg:mt-40 container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100 text-center mb-8">
        Join our ever-growing client list
      </h2>

      <motion.div 
        ref={containerRef}
        className="flex flex-row gap-4 md:gap-6"
        style={{ x }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 p-2 transition-opacity hover:opacity-100"
            style={{ opacity: 0.7 }}
          >
            <motion.img
              src={logo.src}
              alt={`Client logo ${index + 1}`}
              className="max-h-12 md:max-h-16 w-auto object-contain"
              style={{
                aspectRatio: logo.aspect,
                width: `${logo.width}px`,
                filter: "grayscale(100%)",
              }}
              whileInView={{
                filter: "grayscale(0%)",
                transition: { duration: 0.3 }
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};