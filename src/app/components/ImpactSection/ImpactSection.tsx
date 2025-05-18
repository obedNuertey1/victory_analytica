// src\app\components\ImpactSection\ImpactSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StatisticItem } from "./StatisticItem";
import { UptimeStatistic } from "./UptimeStatistic";

export const ImpactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  // Calculate circle circumference
  // const radius = 45;

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[calc(100vh-15rem)] md:min-h-screen flex items-center justify-center py-10 md:py-20 overflow-hidden"
      style={{ opacity }}
      aria-label="Impact Statistics"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gray-100"
        style={{ scale: backgroundScale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-100/50" />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/3e7fe11919355166974a261433c9d37ea8083aff?placeholderIfAbsent=true')] bg-repeat opacity-10 mix-blend-multiply" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-8 md:gap-12 items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {/* ... Keep existing header and statistics grid ... */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Impact
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover the milestones that define our success.
          </motion.p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
            {[
              { value: "500+", description: "Businesses Established" },
              { value: "30+", description: "Countries Served" },
              { value: "98%", description: "Registration Success" },
              { value: "15+", description: "Years Combined Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <StatisticItem {...stat} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 md:mt-16"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="fill-none stroke-gray-200"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="fill-none stroke-blue-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 283" }}
                  whileInView={{ strokeDasharray: "283 283" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <foreignObject x="10" y="25" width="80" height="50">
                  <motion.div
                    className="w-full h-full flex flex-col items-center justify-center scale-50 p-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    <UptimeStatistic
                      value="360°"
                      description="Service Coverage"
                    />
                  </motion.div>
                </foreignObject>
              </svg>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;