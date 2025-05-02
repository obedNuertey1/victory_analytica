// src\app\components\FaqSection\FaqSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaqAccordionItem } from "./FaqAccordionItem";

const faqItems = [
  {
    question: "1. What industries do you serve?",
    answer:
      "We serve clients across industries, including technology, healthcare, finance, retail, and more.",
  },
  {
    question: "Can your solutions scale with my business?",
    answer: "Absolutely. Our modular platform is designed to grow with you—whether you’re adding a few dozen users or expanding across continents. We employ micro‑services architecture and elastic cloud infrastructure so that performance remains seamless, costs stay optimized, and new features can be rolled out without downtime.",
  },
  {
    question: "How do you ensure security and reliability?",
    answer: "Security and uptime are non‑negotiable at ABC. We adhere to ISO 27001 and SOC 2 Type II standards, conduct quarterly penetration tests, and maintain 24/7 monitoring with automated failover across multiple data centers. All customer data is encrypted both at rest and in transit, and we run daily backups with multi‑region replication to guarantee business continuity.",
  },
  {
    question: "Do you offer dedicated teams for ongoing projects?",
    answer: "Yes. For clients requiring sustained collaboration, we assemble dedicated squads—each including a project manager, senior engineers, QA specialists, and business analysts. These teams integrate with your processes (Agile, DevOps, or hybrid), provide weekly progress reporting, and can be scaled up or down based on evolving priorities.",
  }
];

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = React.useState(-1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/1d65cff1687b3a29d518910b2f84e83ceb9f0058?placeholderIfAbsent=true"
          className="object-cover w-full h-full opacity-10"
          alt="Decorative background"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.header
            className="text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              FAQs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Find clear, concise answers about our services, processes, and how
              we help businesses achieve their goals.
            </p>
          </motion.header>

          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <FaqAccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}