// src\app\components\WhyChooseSection\FeatureCard.tsx
"use client";
import { motion } from "framer-motion";
import { BackgroundImage } from "./BackgroundImage";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  backgroundSrc,
  imageSrc,
  title,
  description,
  imageClassName = "",
  className = "",
}) => {
  return (
    <motion.div 
      className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md ${className}`}
      whileHover={{ y: -5 }}
    >
      <BackgroundImage src={backgroundSrc} className="h-full p-8">
        {/* Added gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
        
        <motion.div 
          className="flex flex-col items-center text-center h-full relative z-20"  // Added z-20
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.img
            src={imageSrc}
            alt="Feature icon"
            className={`${imageClassName} mb-6`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="px-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">  {/* Changed to white */}
              {title}
            </h2>
            <p className="text-gray-200 flex-1">{description}</p>  {/* Changed to lighter gray */}
          </div>
        </motion.div>
      </BackgroundImage>
    </motion.div>
  );
};