// src/app/components/ContactFormSection/SubmitButton.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const SubmitButton = () => {
  return (
    <motion.button
      type="submit"
      className="w-full md:w-auto px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
      aria-label="Send Message"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Send Message
    </motion.button>
  );
};

export default SubmitButton;