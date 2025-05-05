// src\app\components\StorySection\Timeline.tsx
"use client";
import { motion } from "framer-motion";
import { TimelineEntry } from "./types";

const timelineData: TimelineEntry[] = [
  {
    year: "2017",
    title: "Foundation of Excellence",
    description: "Victory Analytica established with focus on U.S. business compliance and secure market entry strategies.",
    position: "left",
  },
  {
    year: "2018",
    title: "Compliance Framework",
    description: "Developed proprietary Diamond Model for tax optimization and legal compliance in international expansions.",
    position: "right",
  },
  {
    year: "2019",
    title: "Global Security Integration",
    description: "Implemented cybersecurity protocols across all client operations, setting new industry standards.",
    position: "left",
  },
  {
    year: "2020",
    title: "Elite Model Launch",
    description: "Introduced full-spectrum asset management and workforce solutions for enterprise clients.",
    position: "right",
  },
  {
    year: "2021",
    title: "Cross-Border Mastery",
    description: "Facilitated 100+ successful international expansions with 100% compliance rate.",
    position: "left",
  },
  {
    year: "2023",
    title: "Operational Scale",
    description: "500+ global clients empowered through strategic market entry and compliance solutions.",
    position: "right",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as Top 10 Global Business Consultancy by International Trade Association.",
    position: "left",
  },
];

export const Timeline: React.FC = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full max-w-4xl mx-auto">
      {timelineData.map((item, index) => (
        <motion.li
          key={item.year}
          initial={{ opacity: 0, x: item.position === 'left' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ delay: index * 0.1 }}
        >
          {index !== 0 && <hr className="border-gray-200" />}
          <div className="timeline-middle">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-blue-500 bg-white p-1 rounded-full shadow-lg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>
          <motion.div
            className={`timeline-${item.position === 'left' ? 'start' : 'end'} mb-10 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300`}
            whileHover={{ y: -5 }}
          >
            <time className="font-mono italic text-lg text-blue-600 font-medium">
              {item.year}
            </time>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed text-base md:text-lg">
              {item.description}
            </p>
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
};