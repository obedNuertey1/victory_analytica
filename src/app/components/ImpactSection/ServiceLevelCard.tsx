/// src/app/components/ImpactSection/ServiceLevelCard.tsx
"use client";
import { motion } from "framer-motion";

interface ServiceLevelCardProps {
  /** Name of the service model (e.g. Silver, Gold, Platinum) */
  model: string;
  /** Delivery timeframe (e.g. "2 Weeks", "3 Weeks") */
  timeframe: string;
  /** Highlight of included features for this model */
  highlight: string;
}

export const ServiceLevelCard: React.FC<ServiceLevelCardProps> = ({
  model,
  timeframe,
  highlight,
}) => {
  return (
    <motion.article
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h3
        className="text-2xl font-bold text-indigo-600 mb-2"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
      >
        {model} Model
      </motion.h3>
      <motion.span
        className="text-sm text-gray-500 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {timeframe}
      </motion.span>
      <motion.p
        className="text-base text-gray-700 text-center max-sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {highlight}
      </motion.p>
    </motion.article>
  );
};
