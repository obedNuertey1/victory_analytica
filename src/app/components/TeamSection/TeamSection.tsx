// // src\app\components\TeamSection\TeamSection.tsx
// "use client";

// import * as React from "react";
// import { TeamHeader } from "./TeamHeader";
// import { TeamMemberCard } from "./TeamMemberCard";

// const teamMembers = [
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/fce160e8922a18ce97336979c6178e340709ef88?placeholderIfAbsent=true",
//     name: "Timothy Franey",
//     role: "Co-Founder, ABC Company",
//     altText: "Timothy Franey",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/be4c7ef010761c3f810f7a4b6a1f474b7f53f91c?placeholderIfAbsent=true",
//     name: "Carroll Keeling",
//     role: "Co-Founder, ABC Company",
//     altText: "Carroll Keeling",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/2897c4ea4f95f4953f2cf4c50b34649239784ecd?placeholderIfAbsent=true",
//     name: "Johanna Kassulke",
//     role: "Co-Founder, ABC Company",
//     altText: "Johanna Kassulke",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/ffdcbeefcfa22fba867171f9a384f40c6a6323b1?placeholderIfAbsent=true",
//     name: "Leslie Willms",
//     role: "Co-Founder, ABC Company",
//     altText: "Leslie Willms",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/4220f6f7d81e54d006cc19b26efe859377633970?placeholderIfAbsent=true",
//     name: "Francis Smith",
//     role: "Co-Founder, ABC Company",
//     altText: "Francis Smith",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/49d1224814202f8fa7eb8273d68a0e4c49fd1603?placeholderIfAbsent=true",
//     name: "Roderick Gulgowski",
//     role: "Co-Founder, ABC Company",
//     altText: "Roderick Gulgowski",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/c670f44897828be5fee072df9994864d868d7ab1?placeholderIfAbsent=true",
//     name: "Ethel Mitchell",
//     role: "Co-Founder, ABC Company",
//     altText: "Ethel Mitchell",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/0ad10015138250620d2f275bfefcb749b4874139?placeholderIfAbsent=true",
//     name: "Adam Harber",
//     role: "Co-Founder, ABC Company",
//     altText: "Adam Harber",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/3b25a42ce20bf6461f5b4eb9681176d48eaab5e7?placeholderIfAbsent=true",
//     name: "Sandy Buckridge",
//     role: "Co-Founder, ABC Company",
//     altText: "Sandy Buckridge",
//   },
// ];

// export const TeamSection: React.FC = () => {
//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
//       />
//       <section className="flex flex-col items-center p-12 mx-auto max-w-none bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
//         <TeamHeader />
//         <div className="flex flex-wrap justify-between w-full max-w-[1216px] max-md:justify-center">
//           {teamMembers.map((member, index) => (
//             <TeamMemberCard
//               key={index}
//               imageUrl={member.imageUrl}
//               name={member.name}
//               role={member.role}
//               altText={member.altText}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default TeamSection;


// src\app\components\TeamSection\TeamSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TeamHeader } from "./TeamHeader";
import { TeamMemberCard } from "./TeamMemberCard";

const teamMembers = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fce160e8922a18ce97336979c6178e340709ef88?placeholderIfAbsent=true",
    name: "Timothy Franey",
    role: "Co-Founder, ABC Company",
    altText: "Timothy Franey",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be4c7ef010761c3f810f7a4b6a1f474b7f53f91c?placeholderIfAbsent=true",
    name: "Carroll Keeling",
    role: "Co-Founder, ABC Company",
    altText: "Carroll Keeling",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2897c4ea4f95f4953f2cf4c50b34649239784ecd?placeholderIfAbsent=true",
    name: "Johanna Kassulke",
    role: "Co-Founder, ABC Company",
    altText: "Johanna Kassulke",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ffdcbeefcfa22fba867171f9a384f40c6a6323b1?placeholderIfAbsent=true",
    name: "Leslie Willms",
    role: "Co-Founder, ABC Company",
    altText: "Leslie Willms",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4220f6f7d81e54d006cc19b26efe859377633970?placeholderIfAbsent=true",
    name: "Francis Smith",
    role: "Co-Founder, ABC Company",
    altText: "Francis Smith",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/49d1224814202f8fa7eb8273d68a0e4c49fd1603?placeholderIfAbsent=true",
    name: "Roderick Gulgowski",
    role: "Co-Founder, ABC Company",
    altText: "Roderick Gulgowski",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c670f44897828be5fee072df9994864d868d7ab1?placeholderIfAbsent=true",
    name: "Ethel Mitchell",
    role: "Co-Founder, ABC Company",
    altText: "Ethel Mitchell",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0ad10015138250620d2f275bfefcb749b4874139?placeholderIfAbsent=true",
    name: "Adam Harber",
    role: "Co-Founder, ABC Company",
    altText: "Adam Harber",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b25a42ce20bf6461f5b4eb9681176d48eaab5e7?placeholderIfAbsent=true",
    name: "Sandy Buckridge",
    role: "Co-Founder, ABC Company",
    altText: "Sandy Buckridge",
  },
];

export const TeamSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <TeamHeader />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;