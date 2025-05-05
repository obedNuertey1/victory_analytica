// src/app/components/ContactFormSection/FormHeader.tsx
import React from "react";
import { motion } from "framer-motion";

const FormHeader = () => {
  return (
    <header className="mb-6 sm:mb-8">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        Our Expertise
      </h1>
      <p className="text-base text-gray-600 sm:text-lg">
        We specialize in delivering tailored solutions to address your business needs:
      </p>
    </header>
  );
};

export default FormHeader;