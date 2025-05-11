"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export const ClientLogos = () => {
  const logos = [{
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
    }
  ]

 
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: true,
      duration: 30000
    }, 
    [Autoplay({ delay: 0, stopOnInteraction: false })]
  );

  // Double the logos array for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const scrollSpeed = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    requestAnimationFrame(scrollSpeed);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      scrollSpeed();
    }
  }, [emblaApi, scrollSpeed]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100 text-center mb-8">
        Join our ever-growing client list
      </h2>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4 md:gap-6">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index}
              className="embla__slide flex-shrink-0"
              style={{ flex: `0 0 ${logo.width}px` }}
            >
              <motion.div
                className="p-2"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.img
                  src={logo.src}
                  alt={`Client logo ${index + 1}`}
                  className="max-h-10 md:max-h-16 w-auto object-contain"
                  style={{
                    aspectRatio: logo.aspect,
                    width: `${logo.width}px`,
                    filter: "grayscale(100%)",
                  }}
                  whileInView={{
                    filter: "grayscale(0%)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};