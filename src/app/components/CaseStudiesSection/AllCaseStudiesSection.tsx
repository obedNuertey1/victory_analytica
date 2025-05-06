// src\app\components\CaseStudiesSection\CaseStudiesSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CaseStudyCard } from "./CaseStudyCard";

export const CaseStudiesSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const caseStudies = [
        {
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a61400166fe7bf77385e967d394cf154dac2d0d7?placeholderIfAbsent=true",
            title: "Healthcare Compliance Navigation in California",
            challenge: "Regulatory Hurdles",
            challengeDescription: "European medical device firm faced complex FDA compliance and California business registration challenges",
            solution: "Platinum Model Execution",
            solutionDescription: "Implemented full-spectrum compliance strategy including EIN/ITIN processing and state-specific legal requirements within 3 weeks"
        },
        {
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a0d03dd17532e1cf3ba9d329902b80d0609f0004?placeholderIfAbsent=true",
            title: "FinTech Secure Market Entry",
            challenge: "Cross-Border Compliance",
            challengeDescription: "African payment platform needed urgent US banking setup and cybersecurity integration for Series A funding",
            solution: "Elite Model Deployment",
            solutionDescription: "Delivered turnkey solution with business registration, asset management, and compliance certification in 4 weeks"
        },
        {
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/bdff6b4c0389f5c78de191aadcd4b092f27e37e9?placeholderIfAbsent=true",
            title: "Retail Chain Asset Optimization",
            challenge: "Operational Fragmentation",
            challengeDescription: "Global retailer struggled with multi-state tax compliance and inventory management across US locations",
            solution: "Diamond Model Strategy",
            solutionDescription: "Implemented centralized asset management system with vendor network and tax optimization framework"
        },
        {
            imageUrl: "https://automobilem.com/wp-content/uploads/2024/04/2149117137.jpg",
            title: "Automotive Aftermarket Service Expansion",
            challenge: "Operational Fragmentation",
            challengeDescription: "Aftermarket parts supplier faced a 25% surge in warranty claims and lacked a coordinated U.S. service network",
            solution: "Gold Model Deployment",
            solutionDescription: "Launched a turnkey service‑center integration and technician training program, reducing claim turnaround from 10 days to 3 days within 2 weeks"
        },
        {
            imageUrl: "https://indifoodbev.com/wp-content/uploads/2020/01/potato-farm-3.jpg",
            title: "Precision Potato Agritech Partnership",
            challenge: "Agricultural Variability",
            challengeDescription: "Snacks manufacturer experienced up to 18% crop loss due to uneven soil conditions and harvesting methods",
            solution: "Platinum Model Execution",
            solutionDescription: "Deployed soil‑sensor networks, precision‑drip irrigation, and farmer training—achieving a 30% yield increase and 12% waste reduction in 2 weeks"
        },
        {
            imageUrl: "https://www.tunana-fishing.com/wp-content/uploads/2023/01/tuna_fishing_techinques.jpg",
            title: "Pacific Tuna Fleet Compliance Overhaul",
            challenge: "Regulatory Hurdles",
            challengeDescription: "Pacific fisheries consortium faced <35% compliance under fragmented Vessel Day Schemes and limited MCS tools",
            solution: "Platinum Model (3 Weeks)",
            solutionDescription: "Deployed integrated VMS, digital logbooks, and officer training—lifting compliance to 98% within 3 weeks"
        },
        {
            imageUrl: "https://c.pxhere.com/photos/21/79/harvest_grain_combine_arable_farming_harvest_time_agricultural_vehicles_field_grain_wheat-572424.jpg!d",
            title: "Large‑Scale Grain Harvest Modernization",
            challenge: "Operational Inefficiency",
            challengeDescription: "Grain trader faced low combine throughput and high labor costs during peak harvest",
            solution: "Elite Model Rollout",
            solutionDescription: "Upgraded combines with yield‑mapping sensors, auto‑header controls, and central dashboards—boosting throughput 40% and cutting labor 25% in 4 weeks"
        },
        {
            imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/BF25/production/_114133984_2d961ac4-b039-4745-92d4-de3bd3d71713.jpg",
            title: "Community‑Scale Cereal Crop Coaching",
            challenge: "Harvest Loss",
            challengeDescription: "Co‑op faced 22% average crop loss due to mistimed harvests and equipment miscalibration",
            solution: "Silver Model",
            solutionDescription: "Provided hands‑on combine operation workshops, harvest‑timing analytics, and maintenance clinics—reducing crop loss to under 8% in 2 weeks"
        },
    ];


    return (
        <motion.section
            ref={ref}
            className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
            role="region"
            aria-label="Featured Case Studies"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-gradient-radial from-blue-100/50 to-transparent" />
            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                variants={containerVariants}
            >
                <header className="text-center mb-16">
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Featured Case Studies
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover how our tiered service models drive secure international expansions and operational excellence
                    </motion.p>
                </header>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={index}
                            variants={itemVariants}
                            {...study}
                        />
                    ))}
                </motion.div>

                {/* <motion.div
                    className="flex justify-center mt-16"
                    variants={itemVariants}
                >
                    <CTAButton text="View More" />
                </motion.div> */}
            </motion.div>
        </motion.section>
    );
};

export default CaseStudiesSection;