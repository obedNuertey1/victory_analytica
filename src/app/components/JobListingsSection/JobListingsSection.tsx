// src/app/components/JobListingsSection/JobListingsSection.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
  location: string;
  jobType: string;
  shortDescription: string;
  salary: number;
}

function JobListingsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/careers');
        if (!response.ok) throw new Error('Failed to fetch jobs');
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>Loading job listings...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-white"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Current Openings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore opportunities to grow your career with our global team of experts
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.jobType}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.shortDescription}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-blue-600 font-medium">
                    ${job.salary.toLocaleString()}/year
                  </span>
                  <Link
                    href={`/careers/${job.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {jobs.length === 0 && (
          <motion.div className="text-center py-16" variants={itemVariants}>
            <p className="text-gray-600">
              There are currently no open positions. Please check back later!
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default JobListingsSection;