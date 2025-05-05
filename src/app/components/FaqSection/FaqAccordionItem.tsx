// src\app\components\FaqSection\FaqAccordionItem.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const itemId = React.useId();
  const chevronVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  return (
    <motion.div
      className="border-b border-gray-200 last:border-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.button
        onClick={onClick}
        className="flex justify-between items-center w-full px-6 py-4 md:px-8 md:py-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`accordion-${itemId}`}
      >
        <motion.span className="text-lg md:text-xl font-medium text-gray-900">
          {question}
        </motion.span>
        <motion.div
          variants={chevronVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="ml-4 shrink-0"
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && answer && (
          <motion.div
            id={`accordion-${itemId}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 md:px-8 pb-6"
          >
            <p className="text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};