// src\app\components\ValuePropositionSection\ValuePropositionSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ValueCard } from "./ValueCard";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";

const valueCards = [
  {
    title: "Compliance Mastery",
    description: "End-to-end tax identification (ITIN/EIN) and financial compliance solutions with certified professionals",
    backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/25cd7db634a7059ef447353198ce2580950cf14c?placeholderIfAbsent=true",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/fae8760b37af94f368d72e1ecead12fda6441ed2?placeholderIfAbsent=true",
  },
  {
    title: "Strategic Market Entry",
    description: "Complete U.S. business setup including registration, banking, and California State ID assistance",
    backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/25cd7db634a7059ef447353198ce2580950cf14c?placeholderIfAbsent=true",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/fae8760b37af94f368d72e1ecead12fda6441ed2?placeholderIfAbsent=true",
  },
  {
    title: "Asset Optimization",
    description: "Full-spectrum asset management from vendor sourcing to property acquisition under Elite Model guidance",
    backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/25cd7db634a7059ef447353198ce2580950cf14c?placeholderIfAbsent=true",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/fae8760b37af94f368d72e1ecead12fda6441ed2?placeholderIfAbsent=true",
  },
  {
    title: "Global Workforce Solutions",
    description: "Comprehensive legal services including work permit processing and international team deployment",
    backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/25cd7db634a7059ef447353198ce2580950cf14c?placeholderIfAbsent=true",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/fae8760b37af94f368d72e1ecead12fda6441ed2?placeholderIfAbsent=true",
  },
];

export const ValuePropositionSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      {/* <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/34be724f1796695533f1f0a8e8f8690cabb8e882?placeholderIfAbsent=true"
          className="object-cover w-full h-full opacity-10"
          alt="Decorative background"
        />
      </motion.div> */}

      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/77795b531a9fdb993763ef213660c950c3884fce?placeholderIfAbsent=true"
          className="object-cover w-full h-full rotate-180"
          fill
          alt="Decorative background"
        />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/f5e30eaf5347545e91046e8705775d6b26e8274d?placeholderIfAbsent=true')] mix-blend-overlay" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="What We Stand For"
            subtitle="Our unwavering values shape our approach to delivering impactful solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {valueCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <ValueCard {...card} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ValuePropositionSection;