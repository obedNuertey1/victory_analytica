// src/app/components/ContactFormSection/FormInput.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  "aria-label": string;
  value?: any;
  onChange?: (e:any)=>void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  "aria-label": ariaLabel,
  onChange = ()=>{},
  value = "",
  required = false
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium text-gray-700 sm:text-base"
        htmlFor={label.toLowerCase().replace(/\s+/g, "-")}
      >
        {label}
      </label>
      <motion.input
        type={type}
        id={label.toLowerCase().replace(/\s+/g, "-")}
        className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all sm:px-4 sm:py-3"
        placeholder={placeholder}
        aria-label={ariaLabel}
        whileFocus={{ scale: 1.02 }}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default FormInput;