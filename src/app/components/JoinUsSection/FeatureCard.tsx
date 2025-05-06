// src\app\components\JoinUsSection\FeatureCard.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  variants?: Variants;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
  variants
}) => {
  return (
    <motion.article
      variants={variants}
      className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ease-out shadow-xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      {/* <div className="flex flex-col items-center text-center">
        <div className="mb-6 w-20 h-20 flex items-center justify-center">
          <img
            src={iconSrc}
            className="object-contain w-full h-full"
            // fill
            alt={title}
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </div> */}
      <div className="flex flex-col items-center text-center">
        {/* Use a relative container with fixed size */}
        <div className="relative mb-6 w-20 h-20">
          <Image
            src={iconSrc}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
};