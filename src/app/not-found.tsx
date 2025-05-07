'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-6">
                {/* Animated 404 Number */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="relative inline-block"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 blur-xl opacity-30 rounded-full" />
                    <h1 className="text-7xl font-bold text-gray-900 relative z-10">
                        404
                    </h1>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-4">
                    {/* Title & Text */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 text-base max-w-xs mx-auto">
                            Oops! You&apos;ve entered digital space. Return to
                            <span className="font-medium text-blue-600"> safety</span>.
                        </p>
                    </motion.div>

                    {/* Animated Illustration */}
                    <motion.div
                        initial={{ rotate: -15, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: 'spring', delay: 0.3 }}
                        className="mx-auto max-w-[150px]"
                    >
                        <svg
                            viewBox="0 0 200 200"
                            className="w-full h-auto text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M48.3,-61.2C61.2,-50.7,69.1,-34.3,72.3,-16.9C75.5,0.5,74,19,65.6,34.5C57.3,50.1,42.1,62.8,24.6,70.5C7.1,78.2,-12.6,80.9,-29.4,75.3C-46.2,69.7,-60.2,55.8,-68.9,39.3C-77.6,22.7,-81.1,3.5,-76.7,-13.1C-72.3,-29.7,-60,-44.6,-45.2,-55.3C-30.3,-66,-12.7,-72.5,4.2,-77.6C21.1,-82.7,42.2,-86.4,48.3,-61.2Z"
                                transform="translate(100 100)"
                            />
                            <motion.path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                d="M40,80 Q100,120 160,80"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </svg>
                    </motion.div>

                    {/* Return Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex text-white items-center justify-center gap-1.5 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm font-semibold rounded-md shadow-md transform transition-all duration-150 hover:scale-[1.02]"
                        >
                            <span>Return to Safety</span>
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Branding Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-4 mt-4 border-t border-gray-200"
                    >
                        <p className="text-xs text-gray-500">
                            Secure experience by
                            <span className="block font-medium text-gray-600 mt-0.5">
                                Victory Analytica & Security
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}