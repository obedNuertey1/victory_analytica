// src/app/components/ContactFormSection/FormDropdown.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormDropdownProps {
  label: string;
  options: string[];
}

const FormDropdown: React.FC<FormDropdownProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <motion.div
          className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg cursor-pointer flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
        >
          <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
            {selectedOption || "Select Service"}
          </span>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              fill="currentColor"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            />
          </motion.svg>
        </motion.div>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default FormDropdown;