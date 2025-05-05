// src\app\components\SuccessStories\TestimonialGrid.tsx
"use client";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import * as React from "react";

export const TestimonialGrid: React.FC = () => {
  const testimonials = [
    {
      title: "Seamless US Market Entry",
      content:
        "Victory Analytica streamlined our California business setup with flawless compliance. From EIN acquisition to bank account setup - every detail was handled with precision.",
      author: "COO, Asian Tech Startup"
    },
    {
      title: "Global Compliance Mastery",
      content:
        "Their team navigated complex international tax regulations for our manufacturing expansion, saving us 40% in potential compliance penalties.",
      author: "Director, European Manufacturing Co."
    },
    {
      title: "Security-First Expansion",
      content:
        "Integrated data protection strategies during our US rollout ensured complete regulatory compliance while maintaining operational efficiency.",
      author: "CSO, Global FinTech Firm"
    },
    {
      title: "Strategic Asset Acquisition",
      content:
        "From office leasing to vendor partnerships, Victory's Diamond Model gave us turnkey operational readiness in record time.",
      author: "Operations Head, Middle East Logistics Co."
    },
    {
      title: "Cross-Border Workforce Solution",
      content:
        "Their Elite Model team successfully secured work permits for 15+ team members while establishing our California HQ.",
      author: "HR Director, African Energy Startup"
    }
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