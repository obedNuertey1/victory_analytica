// src\app\components\ContactSection\ContactCard.tsx
"use client";
import { motion } from "framer-motion";
import * as React from "react";

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <motion.article
      className="flex flex-col items-center p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <motion.img
        src={icon}
        alt={title}
        className="w-24 h-24 md:w-32 md:h-32 mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{content}</p>
    </motion.article>
  );
};