// src\app\components\WhyChooseSection\WhyChooseSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { FeatureCard } from "./FeatureCard";

export const WhyChooseSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Layer */}
      {/* <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <BackgroundImage
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9d4df529bf4a825dbebc6103a600bc13fd770118?placeholderIfAbsent=true"
          className="h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-100/50" />
        </BackgroundImage>
      </motion.div> */}

<motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/77795b531a9fdb993763ef213660c950c3884fce?placeholderIfAbsent=true"
          className="object-center w-full h-full"
          alt="Decorative background"
        />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/f5e30eaf5347545e91046e8705775d6b26e8274d?placeholderIfAbsent=true')] mix-blend-overlay" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-8 md:gap-12 items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <motion.header
            className="mb-8 md:mb-12"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Why Choose ABC Company?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solutions to help businesses across
              industries overcome challenges, innovate, and scale.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {[
              {
                backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/63b07222cfcb6a5ac33f82c0ac2f4a3cae7bd50d?placeholderIfAbsent=true",
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5ff793cad6cca94d1a4062c0d40605438c10c032?placeholderIfAbsent=true",
                title: "Global Reach",
                description: "Serving clients worldwide, from startups to enterprises."
              },
              {
                backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/cfcf4279e1ec7f30c0e6dcf012222eff6958bfc2?placeholderIfAbsent=true",
                imageSrc: "https://cdn.builder.io/api/v1/imzage/assets/143904c0c722478ze90e6e96d6b2341b6/6d4d6b74b0a43b373b5dfc8d64f53d2833cfd009?placeholderIfAbsent=true",
                title: "Scalable Solutions",
                description: "Flexible services tailored to businesses of all sizes."
              },
              {
                backgroundSrc:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/63b07222cfcb6a5ac33f82c0ac2f4a3cae7bd50d?placeholderIfAbsent=true",
                title:"Expertise You Can Trust",
                description:"Decades of experience delivering quality solutions for complex problems.",
                imageSrc:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/54b0eeb39a0bc891da85cb167744e21648ff2e4a?placeholderIfAbsent=true"
              }
              // Add other feature cards here
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <FeatureCard
                  {...feature}
                  className="h-full"
                  imageClassName="w-32 h-32 mb-6"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseSection;
