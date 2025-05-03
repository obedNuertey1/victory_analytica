// src\app\components\StorySection\Timeline.tsx
"use client";
import { motion } from "framer-motion";
import { TimelineEntry } from "./types";

const timelineData: TimelineEntry[] = [
    {
      year: "2017",
      title: "The Beginning",
      description:
        "ABC Company was founded with a vision to provide innovative engineering solutions to startups, focusing on reliability and affordability.",
      position: "left",
    },
    {
      year: "2018",
      title: "Expanding Expertise",
      description:
        "We diversified our offerings to include legacy system migrations and ERP implementations, catering to small and medium-sized businesses.",
      position: "right",
    },
    {
      year: "2019",
      title: "Going Global",
      description:
        "ABC Company expanded its reach by serving clients across multiple countries, building strong partnerships with multinational corporations.",
      position: "left",
    },
    {
      year: "2020",
      title: "Autonomous Teams Launched",
      description:
        "We introduced fully autonomous development teams, enabling clients to scale their projects with ease and efficiency.",
      position: "right",
    },
    {
      year: "2021",
      title: "Embracing Cybersecurity",
      description:
        "To address growing digital threats, we added comprehensive cybersecurity services, safeguarding our clients' assets worldwide.",
      position: "left",
    },
    {
      year: "2023",
      title: "300+ Projects Completed",
      description:
        "With over 300 successful projects delivered globally, we solidified our reputation as a leading provider of tailored engineering solutions.",
      position: "right",
    },
    {
      year: "2024",
      title: "A Trusted Partner",
      description:
        "ABC Company continues to innovate, serving startups, SMBs, and enterprises with a focus on scalable solutions, global collaboration, and unmatched reliability.",
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