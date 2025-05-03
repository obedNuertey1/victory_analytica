// src/app/components/ExpertiseSection/ExpertiseSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ServiceCard } from "./ServiceCard";

export const ExpertiseSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section 
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background image with parallax effect */}
      {/* <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/7cb592d7d2b33b2a5d7b343867c8de634fddbf72?placeholderIfAbsent=true"
          alt="Decorative background"
          className="w-full h-full object-cover"
        />
      </motion.div> */}
            <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/77795b531a9fdb993763ef213660c950c3884fce?placeholderIfAbsent=true"
          className="object-cover w-full h-full"
          alt="Decorative background"
        />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/f5e30eaf5347545e91046e8705775d6b26e8274d?placeholderIfAbsent=true')] mix-blend-overlay" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header 
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Our Expertise
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering tailored solutions to address your
            business needs across these key areas:
          </p>
        </motion.header>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[
            {
              backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
              icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/10d9a616d86924f548c28531f04396afe1d75c8c?placeholderIfAbsent=true",
              title: "Product Consulting",
              description: "Strategically position your digital products for success with actionable insights and market expertise."
            },
            {
              backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
              icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9cd2bec387fc81bdf39aec734eac98b702926431?placeholderIfAbsent=true",
              title:"Engineering Consulting",
              description:"Overcome challenges and foster innovation with expert guidance from our engineering professionals."
            },
            {
              backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
              icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5b7720715658b3240f4e9e73a878496f6b40bb37?placeholderIfAbsent=true",
              title:"Legacy System Migration",
              description:"Seamlessly transform outdated systems to enhance efficiency, scalability, and performance."
            },
            {
              backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
              icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/71ac10136db59bfb8dfcd08807111cd2083591e3?placeholderIfAbsent=true",
              title:"ERP Implementation",
              description:"Deploy robust, customized ERP solutions to optimize and streamline your operations."
            },
            {
              backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/841d04c43aa8ff16de9513695f747bc78b547603?placeholderIfAbsent=true",
              icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/7026a445b1e4707ffa48df300ac747eea1c37606?placeholderIfAbsent=true",
              title:"Automated Teams",
              description:"Drive productivity with fully autonomous, high-performing development teams for scalable solutions."
            },
            {
              backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5f4ce075cc719da01f4bef1c456b8334dd4cc598?placeholderIfAbsent=true",
              icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/3e7a3599f3b2c1595500d97a6c9003fd99702593?placeholderIfAbsent=true",
              title:"Cybersecurity Services",
              description:"Protect your digital assets with industry-leading security solutions, including comprehensive vulnerability assessments."
            }
            // Add other service cards here
          ].map((service, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] xl:w-[25%]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertiseSection;