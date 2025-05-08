// src/app/components/ContactFormSection/FormTextarea.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface FormTextareaProps {
  label: string;
  placeholder: string;
  "aria-label": string;
  value?: string;
  onChange?: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
  required?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
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
      <motion.textarea
        id={label.toLowerCase().replace(/\s+/g, "-")}
        className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[150px] sm:px-4 sm:py-3 sm:min-h-[180px]"
        placeholder={placeholder}
        aria-label={ariaLabel}
        whileFocus={{ scale: 1.02 }}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormTextarea;