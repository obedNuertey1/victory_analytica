// src\app\components\ValuePropositionSection\ValueCard.tsx
"use client";
import { motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";

interface ValueCardProps<S>{
  title?: S;
  description?: S;
  imageSrc: string;
  backgroundSrc?: S;
}

export const ValueCard: React.FC<ValueCardProps<string>> = ({
  title,
  description,
  imageSrc,
  backgroundSrc,
}) => {
  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 w-full h-full">
      <Image
        // @ts-expect-error something went wrong here
        src={backgroundSrc}
        fill
        alt="Card background"
        className="object-cover opacity-20"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm h-full">
        {imageSrc && (
          <motion.img
            src={imageSrc}
            className="w-32 h-32 mb-6 object-contain"
            alt={title}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        )}
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
};