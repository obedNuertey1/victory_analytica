// src\app\components\ImpactSection\UptimeStatistic.tsx
"use client";
import { motion } from "framer-motion";

interface UptimeStatisticProps {
  value: string;
  description: string;
}

export const UptimeStatistic: React.FC<UptimeStatisticProps> = ({
  value,
  description,
}) => {
  return (
    <motion.article 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.h2 
        className="font-bold text-blue-500"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
      >
        {value}
      </motion.h2>
      <motion.p 
        className="text-lg text-blue-500 max-sm:text-base text-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.article>
  );
};