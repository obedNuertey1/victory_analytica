// src\app\components\ValuePropositionSection\SectionHeader.tsx
"use client";
import { motion } from "framer-motion";
import * as React from "react";

interface SectionHeaderProps<S>{
  title?: S;
  subtitle?: S;
}

export const SectionHeader: React.FC<SectionHeaderProps<string>> = ({
  title = "Global Expansion Frameworks",
  subtitle = "Our compliance-driven approach ensures seamless market entry and sustainable growth",
}) => {
  return (
    <motion.header
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </motion.header>
  );
};