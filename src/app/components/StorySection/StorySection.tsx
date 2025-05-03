// src\app\components\StorySection\StorySection.tsx
// "use client";
// import React from "react";
// import { TimelineHeader } from "./TimelineHeader";
// import { Timeline } from "./Timeline";

// const StorySection: React.FC = () => {
//   return (
//     <>
//       <header className="text-center mb-16 px-4">
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Our Story
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           Founded on the principles of innovation and collaboration, ABC Company
//           was created to bridge the gap between complex engineering challenges and
//           simplified solutions. Over the years, we've grown into a global team of
//           experts passionate about helping businesses scale, innovate, and thrive
//           in an ever-changing digital landscape.
//         </p>
//       </header>
//       <Timeline />
//     </>
//   );
// };

// export default StorySection;


// src\app\components\StorySection\StorySection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "./Timeline";

const StorySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section 
    ref={ref}
    className="relative py-20 px-4 md:py-32 sm:px-6 lg:px-8 overflow-hidden"
    style={{ opacity }} ref={ref} 
    // className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
                  <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/77795b531a9fdb993763ef213660c950c3884fce?placeholderIfAbsent=true"
          className="object-cover w-full h-full rotate-180"
          alt="Decorative background"
        />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/f5e30eaf5347545e91046e8705775d6b26e8274d?placeholderIfAbsent=true')] mix-blend-overlay" />
      </motion.div>
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Founded on the principles of innovation and collaboration, ABC Company
          was created to bridge the gap between complex engineering challenges and
          simplified solutions.
        </motion.p>
      </motion.header>
      <Timeline />
    </motion.section >
  );
};

export default StorySection;