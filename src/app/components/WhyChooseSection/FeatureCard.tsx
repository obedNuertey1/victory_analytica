// src\app\components\WhyChooseSection\FeatureCard.tsx
"use client";
import { motion } from "framer-motion";
import { BackgroundImage } from "./BackgroundImage";

interface FeatureCardProps<S>{
  backgroundSrc: S;
  imageSrc: S;
  title: S;
  description: S;
  imageClassName: S;
  className: S;
}

export const FeatureCard: React.FC<FeatureCardProps<string>> = ({
  backgroundSrc,
  imageSrc,
  title,
  description,
  imageClassName = "",
  className = "",
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden shadow-lg hover:shadow-xl bg-gray-50 transition-shadow duration-300 rounded-md ${className}`}
      whileHover={{ y: -5 }}
    >
      {/* <BackgroundImage src={backgroundSrc} className="h-full p-8">
      </BackgroundImage> */}
      {/* Added gradient overlay */}
      <div className={`relative h-full p-8`}>
        <div className="relative z-10 bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 hover:from-black/20 hover:to-black-70" />

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
        </div>
      </div>
    </motion.div>
  );
};