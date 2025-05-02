// src\app\components\SuccessStories\TestimonialGrid.tsx
"use client";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialGrid: React.FC = () => {
  const testimonials = [ 
    {
      title: "Streamlined Operations with Custom ERP",
      content:
        "ABC Company delivered exactly what we needed—a scalable and secure ERP system that streamlined our operations. Their team's professionalism and expertise were evident every step of the way.",
      author: "Manager, Global Retail Company",
    },
    {
      title: "MVP Delivered Ahead of Schedule",
      content:
        "As a startup, we were looking for a reliable partner to build our MVP. ABC Company exceeded our expectations, delivering a bug-free product ahead of schedule. Their team felt like an extension of ours!",
      author: "Founder, FinTech Startup",
    },
    {
      title: "Seamless Legacy System Migration",
      content:
        "The legacy system migration ABC Company handled for us was seamless. We were impressed with their attention to detail, proactive communication, and ability to complete the project with zero downtime.",
      author: "CTO, Healthcare Enterprise",
    },
   ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <TestimonialCard {...testimonial} />
        </motion.div>
      ))}
    </div>
  );
};