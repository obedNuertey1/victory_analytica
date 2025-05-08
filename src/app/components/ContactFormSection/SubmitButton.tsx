// src/app/components/ContactFormSection/SubmitButton.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface SubmitButtonProps {
  label?: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label = "Send Message", disabled = false }) => {
  return (
    <motion.button
      type="submit"
      className="w-full md:w-auto px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
      aria-label="Send Message"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
    >
      {label}
    </motion.button>
  );
};

export default SubmitButton;