// src/app/components/ExpertiseSection/LearnMoreLink.tsx
"use client";
import {motion} from "framer-motion"
import Link from "next/link";

interface LearnMoreLinkProps {
  label?: string;
  id?: string;
}

export const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({
  label = "Learn More",
  id
}) => {
  // get the origin of the url
  // const origin = window.location.origin;
  return (
    <Link href={`/service-table?highlight=${id}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
      <span className="font-semibold">{label}</span>
      <motion.span 
        className="inline-block"
        animate={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </Link>
  );
};