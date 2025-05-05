// src\app\components\TeamSection\TeamMemberCard.tsx
"use client";
import { motion } from "framer-motion";
import * as React from "react";

type TeamMemberCardProps = {
  imageUrl: string;
  name: string;
  role: string;
  altText: string;
};


export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageUrl,
  name,
  role,
  altText="Victory Analytica security and business expert",
}) => {
  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
      whileHover={{ y: -5 }}
    >
      <div className="relative group">
        <motion.img
          src={imageUrl}
          alt={altText}
          className="w-full h-80 object-cover object-top"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {name}
        </motion.h2>
        <p className="text-gray-600 font-medium">{role}</p>
      </div>
    </motion.article>
  );
};