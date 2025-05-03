// src\app\components\TeamSection\TeamHeader.tsx
"use client";
import { motion } from "framer-motion";

export const TeamHeader: React.FC = () => {
  return (
    <motion.header
      className="text-center mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Our global team of experienced engineers, consultants, and project
        managers is the backbone of ABC Company.
      </motion.p>
    </motion.header>
  );
};