// src\app\components\SuccessStories\SuccessStoriesHeader.tsx
"use client";
import { motion } from "framer-motion";
import * as React from "react";

export const SuccessStoriesHeader: React.FC = () => {
  return (
    <motion.header 
      className="flex flex-col gap-6 items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        transition={{ duration: 0.5 }}
      >
        Global Success Stories
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Discover how we've enabled secure international expansion and optimized operations 
        for businesses worldwide through strategic consulting and compliance excellence.
      </motion.p>
    </motion.header>
  );
};