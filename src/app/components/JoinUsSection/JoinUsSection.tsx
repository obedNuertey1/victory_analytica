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
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/fc0a2934569cc9e7a47056732e31c2d3c7b39ae8?placeholderIfAbsent=true"
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
            Looking for a career where you can innovate and make an impact? ABC Company is always on the lookout for passionate individuals to join our growing team.
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          <FeatureCard
            variants={itemVariants}
            iconSrc="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9ccda1cf3fa18a94ee88f5ddaacb58db1137a150?placeholderIfAbsent=true"
            title="Inclusive Environment"
            description="We celebrate diversity and foster a culture of respect and collaboration"
          />

          <div className="space-y-8">
            <FeatureCard
              variants={itemVariants}
              iconSrc="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/3264cba8c44bbb4d8dcdcd1592ae95808570f1d7?placeholderIfAbsent=true"
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
            iconSrc="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/0b259f7dd2b64ee7ea8e405b8730d3bbbc9f4898?placeholderIfAbsent=true"
            title="Recognition & Rewards"
            description="Your contributions are valued, and we celebrate achievements big and small."
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinUsSection;