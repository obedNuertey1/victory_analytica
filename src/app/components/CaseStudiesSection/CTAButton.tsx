// src\app\components\CaseStudiesSection\CTAButton.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative overflow-hidden px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-3">
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.button>
  );
};