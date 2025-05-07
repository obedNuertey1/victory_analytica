// src\app\components\FaqSection\FaqSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaqAccordionItem } from "./FaqAccordionItem";
import Image from "next/image";

const faqItems = [
  {
    question: "What's included in your Silver Model service?",
    answer: "Our Silver Model provides essential U.S. market entry support including business address establishment, bank account setup, and California orientation tour. Perfect for businesses needing basic representation and networking opportunities."
  },
  {
    question: "How does the Platinum Model ensure tax compliance?",
    answer: "The Platinum Model includes full EIN/ITIN assistance, introduces certified accountants for tax filing, and provides ongoing compliance monitoring. We implement AI-driven audits to ensure 100% regulatory adherence across all 50 states."
  },
  {
    question: "What security measures protect client data?",
    answer: "We employ military-grade encryption, biometric access controls, and blockchain-based audit trails. Our Security Operations Center provides 24/7 monitoring, ensuring compliance with GDPR, CCPA, and international data protection standards."
  },
  {
    question: "Can you help with workforce relocation?",
    answer: "Our Elite Model includes full immigration support - we secure L-1, E-2, and EB-5 visas with 95% success rate, handle spouse work permits, and provide cultural integration training for smooth team transitions."
  },
  {
    question: "How do you streamline asset acquisition?",
    answer: "Our Diamond Model offers turnkey solutions: vendor vetting, lease negotiations, and AI-powered market analysis. We coordinate everything from office furniture to industrial equipment, typically saving clients 30% on setup costs."
  },
  {
    question: "What makes your business registration different?",
    answer: "We combine legal expertise with data analytics to optimize entity structure (LLC vs C-Corp), file patents pre-emptively, and establish trademark protection - all within 72 hours for most jurisdictions."
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
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
      // style={{ opacity }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/1d65cff1687b3a29d518910b2f84e83ceb9f0058?placeholderIfAbsent=true"
          className="object-cover w-full h-full opacity-10"
          fill
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
              Expert Guidance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your roadmap to secure global expansion - combining legal precision with cutting-edge security solutions
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