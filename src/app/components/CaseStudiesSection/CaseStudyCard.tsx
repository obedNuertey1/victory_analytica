// src\app\components\CaseStudiesSection\CaseStudyCard.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface CaseStudyCardProps {
  imageUrl: string;
  title: string;
  challenge: string;
  challengeDescription: string;
  solution: string;
  solutionDescription: string;
  variants?: Variants;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imageUrl,
  title,
  challenge,
  challengeDescription,
  solution,
  solutionDescription,
  variants
}) => {
  return (
    <motion.article
      variants={variants}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 lg:p-8">
        <div className="mb-6 w-full aspect-square overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={`${title} illustration`}
          />
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{title}</h3>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-base font-semibold text-gray-900">{challenge}</h4>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {challengeDescription}
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-base font-semibold text-gray-900">{solution}</h4>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {solutionDescription}
            </p>
          </div>
        </div>

        <button
          className="mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          aria-label={`Read full case study about ${title}`}
        >
          <span>Read Full Case Study</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </motion.article>
  );
};