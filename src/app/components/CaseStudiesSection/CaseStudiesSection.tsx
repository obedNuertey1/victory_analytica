// src\app\components\CaseStudiesSection\CaseStudiesSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CaseStudyCard } from "./CaseStudyCard";
import { CTAButton } from "./CTAButton";

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
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a61400166fe7bf77385e967d394cf154dac2d0d7?placeholderIfAbsent=true",
      title: "Seamless Legacy System Migration for a Healthcare Enterprise",
      challenge: "Challenge",
      challengeDescription:
        "The client's outdated system was causing inefficiencies, data loss, and scalability issues.",
      solution: "Solution",
      solutionDescription:
        "ABC Company developed a custom migration strategy, ensuring seamless data transfer, modernizing the infrastructure, and integrating the system with advanced analytics tools.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a0d03dd17532e1cf3ba9d329902b80d0609f0004?placeholderIfAbsent=true",
      title: "Accelerating MVP Development for a FinTech Startup",
      challenge: "Challenge",
      challengeDescription:
        "The startup needed a stable MVP within a tight timeline to secure investor funding.",
      solution: "Solution",
      solutionDescription:
        "Our automated teams delivered a bug-free MVP in just 6 weeks, using agile development practices to meet the client's requirements.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/bdff6b4c0389f5c78de191aadcd4b092f27e37e9?placeholderIfAbsent=true",
      title: "Scalable ERP Implementation for a Retail Chain",
      challenge: "Challenge",
      challengeDescription:
        "The retail client struggled with fragmented operations across multiple locations, affecting efficiency and reporting accuracy.",
      solution: "Solution",
      solutionDescription:
        "ABC Company implemented a customized ERP system, integrating inventory, sales, and finance operations into a single streamlined platform.",
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
            Discover how our tailored solutions have transformed businesses across industries.
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

        <motion.div
          className="flex justify-center mt-16"
          variants={itemVariants}
        >
          <CTAButton text="View More" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CaseStudiesSection;

// // src\app\components\CaseStudiesSection\CaseStudiesSection.tsx
// "use client";

// import React from "react";
// import { CaseStudyCard } from "./CaseStudyCard";
// import { CTAButton } from "./CTAButton";

// export const CaseStudiesSection: React.FC = () => {
  // const caseStudies = [
  //   {
  //     imageUrl:
  //       "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a61400166fe7bf77385e967d394cf154dac2d0d7?placeholderIfAbsent=true",
  //     title: "Seamless Legacy System Migration for a Healthcare Enterprise",
  //     challenge: "Challenge",
  //     challengeDescription:
  //       "The client's outdated system was causing inefficiencies, data loss, and scalability issues.",
  //     solution: "Solution",
  //     solutionDescription:
  //       "ABC Company developed a custom migration strategy, ensuring seamless data transfer, modernizing the infrastructure, and integrating the system with advanced analytics tools.",
  //   },
  //   {
  //     imageUrl:
  //       "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/a0d03dd17532e1cf3ba9d329902b80d0609f0004?placeholderIfAbsent=true",
  //     title: "Accelerating MVP Development for a FinTech Startup",
  //     challenge: "Challenge",
  //     challengeDescription:
  //       "The startup needed a stable MVP within a tight timeline to secure investor funding.",
  //     solution: "Solution",
  //     solutionDescription:
  //       "Our automated teams delivered a bug-free MVP in just 6 weeks, using agile development practices to meet the client's requirements.",
  //   },
  //   {
  //     imageUrl:
  //       "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/bdff6b4c0389f5c78de191aadcd4b092f27e37e9?placeholderIfAbsent=true",
  //     title: "Scalable ERP Implementation for a Retail Chain",
  //     challenge: "Challenge",
  //     challengeDescription:
  //       "The retail client struggled with fragmented operations across multiple locations, affecting efficiency and reporting accuracy.",
  //     solution: "Solution",
  //     solutionDescription:
  //       "ABC Company implemented a customized ERP system, integrating inventory, sales, and finance operations into a single streamlined platform.",
  //   },
  // ];

//   return (
//     <section
//       className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-20 py-24 min-h-[1234px] max-md:px-5"
//       role="region"
//       aria-label="Featured Case Studies"
//     >
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/394cc2ad38f61453dd26a00ae0d05a4813e15fc5?placeholderIfAbsent=true"
//         className="object-cover absolute inset-0 size-full"
//         alt=""
//         aria-hidden="true"
//       />
//       <div className="flex relative flex-col justify-center w-full max-w-[1216px] max-md:max-w-full">
//         <header className="w-full text-gray-900 max-md:max-w-full">
//           <h1 className="text-7xl leading-tight max-md:max-w-full max-md:text-4xl">
//             Featured Case Studies
//           </h1>
//           <p className="mt-6 text-lg max-md:max-w-full">
//             Discover how our tailored solutions have transformed businesses
//             across industries.
//           </p>
//         </header>

//         <div className="flex flex-wrap gap-7 items-start mt-11 w-full text-blue-500 max-md:mt-10 max-md:max-w-full">
//           {caseStudies.map((study, index) => (
//             <CaseStudyCard
//               key={index}
//               imageUrl={study.imageUrl}
//               title={study.title}
//               challenge={study.challenge}
//               challengeDescription={study.challengeDescription}
//               solution={study.solution}
//               solutionDescription={study.solutionDescription}
//             />
//           ))}
//         </div>

//         <div className="flex justify-center mt-11 max-md:mt-10">
//           <CTAButton text="View More" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesSection;
