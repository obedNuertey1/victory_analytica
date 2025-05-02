// src\app\components\SuccessStories\TestimonialCard.tsx
"use client";
import { motion } from "framer-motion";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  content,
  author,
}) => {
  return (
    <motion.article
      className="flex flex-col gap-4 p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <motion.h3
        className="text-xl md:text-2xl font-bold text-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-600 flex-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {content}
      </motion.p>
      <motion.p
        className="text-blue-500 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {author}
      </motion.p>
    </motion.article>
  );
};