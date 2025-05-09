// src\app\components\JoinUsSection\JoinUsSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FeatureCard } from "./FeatureCard";
import { CTAButton } from "./CTAButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const JoinUsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });


  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/assets/JoinUsSection/JoinUsSection/matt-white-bg.png"
          className="object-cover w-full h-full"
          alt="Background"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content Section */}
      <motion.div
        ref={ref}
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <header className="text-center mb-16">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Join Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Looking for a career where you can innovate and make an impact? Victory Analytica is always on the lookout for passionate individuals to join our growing team.
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          <FeatureCard
            variants={itemVariants}
            iconSrc="/assets/JoinUsSection/JoinUsSection/image-1.png"
            title="Inclusive Environment"
            description="We celebrate diversity and foster a culture of respect and collaboration"
          />

          <div className="space-y-8">
            <FeatureCard
              variants={itemVariants}
              iconSrc="/assets/JoinUsSection/JoinUsSection/image-2.png"
              title="Flexible Work Options"
              description="Work remotely, on-site, or in a hybrid setup that suits your lifestyle."
            />
            <motion.div variants={itemVariants}>
              <CTAButton onClick={() => console.log("Join team clicked")}>
                Join our team
              </CTAButton>
            </motion.div>
          </div>

          <FeatureCard
            variants={itemVariants}
            iconSrc="/assets/JoinUsSection/JoinUsSection/image-3.png"
            title="Recognition & Rewards"
            description="Your contributions are valued, and we celebrate achievements big and small."
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinUsSection;