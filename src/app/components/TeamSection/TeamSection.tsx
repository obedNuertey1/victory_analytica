// src\app\components\TeamSection\TeamSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TeamHeader } from "./TeamHeader";
import { TeamMemberCard } from "./TeamMemberCard";

const teamMembers = [
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-1.png",
    name: "Timothy Franey",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Timothy Franey",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-2.png",
    name: "Carroll Keeling",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Carroll Keeling",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-3.png",
    name: "Johanna Kassulke",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Johanna Kassulke",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-4.png",
    name: "Leslie Willms",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Leslie Willms",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-5.png",
    name: "Francis Smith",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Francis Smith",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-6.png",
    name: "Roderick Gulgowski",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Roderick Gulgowski",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-7.png",
    name: "Ethel Mitchell",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Ethel Mitchell",
  },
  {
    imageUrl:
      "/assets/TeamsSection/TeamsSection/image-8.png",
    name: "Adam Harber",
    role: "Co-Founder, Victory Analytica & Security",
    altText: "Adam Harber",
  }
];
// \assets\TeamsSection\TeamsSection\image-1.png
export const TeamSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <TeamHeader />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => {

              return(
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            )})}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;