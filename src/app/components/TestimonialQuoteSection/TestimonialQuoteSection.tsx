// src\app\components\TestimonialQuoteSection\TestimonialQuoteSection.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TestimonialQuoteSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const quoteVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const authorVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.3, duration: 0.6 }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="relative flex flex-col justify-center items-center px-5 py-20 mx-auto h-screen bg-white"
      aria-label="Testimonial"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[1200px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-4">
        <motion.blockquote
          variants={quoteVariants}
          className="relative mb-8 text-4xl md:text-5xl lg:text-6xl text-center text-gray-900 leading-tight md:leading-[1.1] font-light"
        >
          <span className="text-7xl md:text-8xl absolute -top-4 left-0 opacity-10">“</span>
          <span className="relative block px-8">
            Our focus is on creating products and services that empower businesses,
            streamline operations, and foster growth in the digital era.
          </span>
          <span className="text-7xl md:text-8xl absolute -bottom-8 right-0 opacity-10">”</span>
        </motion.blockquote>

        <motion.footer
          variants={authorVariants}
          className="text-lg md:text-xl text-center text-blue-600 font-medium mt-12"
        >
          <cite className="not-italic">
            <span className="block text-xl md:text-2xl mb-2 font-semibold">
              Panduka Weerasekara
            </span>
            <span className="block text-gray-600 text-base md:text-lg">
              Co-Founder, ABC Company
            </span>
          </cite>
        </motion.footer>
      </div>
    </motion.section>
  );
}