// src\app\components\JoinUsSection\CTAButton.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:from-blue-700 hover:to-purple-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};