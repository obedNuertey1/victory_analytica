// src\app\components\SuccessStories\SuccessStories.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SuccessStoriesHeader } from "./SuccessStoriesHeader";
import { TestimonialGrid } from "./TestimonialGrid";

export const SuccessStories: React.FC = () => {
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
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
      // style={{ opacity }}
      role="region"
      aria-label="Success Stories"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-100/50" />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/c41fbe5e6cc897422c3182d56874a6de7e7434e4?placeholderIfAbsent=true')] bg-repeat opacity-10 mix-blend-multiply" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-8 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <SuccessStoriesHeader />
          <TestimonialGrid />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;