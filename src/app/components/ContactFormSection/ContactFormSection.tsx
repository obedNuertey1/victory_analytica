// src/app/components/ContactFormSection/ContactFormSection.tsx
"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import FormTextarea from "./FormTextarea";
import SubmitButton from "./SubmitButton";

const services = [
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/10d9a616d86924f548c28531f04396afe1d75c8c?placeholderIfAbsent=true",
    title: "Product Consulting",
    description: "Strategically position your digital products for success with actionable insights and market expertise."
  },
  {
    backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
    icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9cd2bec387fc81bdf39aec734eac98b702926431?placeholderIfAbsent=true",
    title:"Engineering Consulting",
    description:"Overcome challenges and foster innovation with expert guidance from our engineering professionals."
  },
  {
    backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
    icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5b7720715658b3240f4e9e73a878496f6b40bb37?placeholderIfAbsent=true",
    title:"Legacy System Migration",
    description:"Seamlessly transform outdated systems to enhance efficiency, scalability, and performance."
  },
  {
    backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
    icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/71ac10136db59bfb8dfcd08807111cd2083591e3?placeholderIfAbsent=true",
    title:"ERP Implementation",
    description:"Deploy robust, customized ERP solutions to optimize and streamline your operations."
  },
  {
    backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/841d04c43aa8ff16de9513695f747bc78b547603?placeholderIfAbsent=true",
    icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/7026a445b1e4707ffa48df300ac747eea1c37606?placeholderIfAbsent=true",
    title:"Automated Teams",
    description:"Drive productivity with fully autonomous, high-performing development teams for scalable solutions."
  },
  {
    backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5f4ce075cc719da01f4bef1c456b8334dd4cc598?placeholderIfAbsent=true",
    icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/3e7a3599f3b2c1595500d97a6c9003fd99702593?placeholderIfAbsent=true",
    title:"Cybersecurity Services",
    description:"Protect your digital assets with industry-leading security solutions, including comprehensive vulnerability assessments."
  }
  // Add other service cards here
];

function ContactFormSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.main 
      ref={ref}
      className="flex flex-col items-center py-8 px-4 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.form 
        className="w-full max-w-[600px] space-y-6"
        variants={containerVariants}
        onSubmit={(e) => e.preventDefault()}
      >
        <FormHeader />

        <motion.section 
          className="grid grid-cols-1 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FormInput
              label="First Name"
              type="text"
              placeholder="John"
              aria-label="First Name"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FormInput
              label="Last Name"
              type="text"
              placeholder="Doe"
              aria-label="Last Name"
            />
          </motion.div>
        </motion.section>

        <motion.section 
          className="grid grid-cols-1 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FormDropdown
              label="Service"
              options={services.map(service => service.title)}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FormInput
              label="Budget"
              type="text"
              placeholder="$5k - $10k"
              aria-label="Budget"
            />
          </motion.div>
        </motion.section>

        <motion.div variants={itemVariants}>
          <FormInput
            label="Subject"
            type="text"
            placeholder="Project Inquiry"
            aria-label="Subject"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormTextarea 
            label="Message" 
            placeholder="Describe your project..." 
            aria-label="Message" 
          />
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <SubmitButton />
        </motion.div>
      </motion.form>
    </motion.main>
  );
}

export default ContactFormSection;

// // src/app/components/ContactFormSection/ContactFormSection.tsx
// "use client";
// import * as React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import FormHeader from "./FormHeader";
// import FormInput from "./FormInput";
// import FormDropdown from "./FormDropdown";
// import FormTextarea from "./FormTextarea";
// import SubmitButton from "./SubmitButton";

// const services = [
//   {
//     backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
//     icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/10d9a616d86924f548c28531f04396afe1d75c8c?placeholderIfAbsent=true",
//     title: "Product Consulting",
//     description: "Strategically position your digital products for success with actionable insights and market expertise."
//   },
//   {
//     backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
//     icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9cd2bec387fc81bdf39aec734eac98b702926431?placeholderIfAbsent=true",
//     title:"Engineering Consulting",
//     description:"Overcome challenges and foster innovation with expert guidance from our engineering professionals."
//   },
//   {
//     backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
//     icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5b7720715658b3240f4e9e73a878496f6b40bb37?placeholderIfAbsent=true",
//     title:"Legacy System Migration",
//     description:"Seamlessly transform outdated systems to enhance efficiency, scalability, and performance."
//   },
//   {
//     backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
//     icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/71ac10136db59bfb8dfcd08807111cd2083591e3?placeholderIfAbsent=true",
//     title:"ERP Implementation",
//     description:"Deploy robust, customized ERP solutions to optimize and streamline your operations."
//   },
//   {
//     backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/841d04c43aa8ff16de9513695f747bc78b547603?placeholderIfAbsent=true",
//     icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/7026a445b1e4707ffa48df300ac747eea1c37606?placeholderIfAbsent=true",
//     title:"Automated Teams",
//     description:"Drive productivity with fully autonomous, high-performing development teams for scalable solutions."
//   },
//   {
//     backgroundImage:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5f4ce075cc719da01f4bef1c456b8334dd4cc598?placeholderIfAbsent=true",
//     icon:"https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/3e7a3599f3b2c1595500d97a6c9003fd99702593?placeholderIfAbsent=true",
//     title:"Cybersecurity Services",
//     description:"Protect your digital assets with industry-leading security solutions, including comprehensive vulnerability assessments."
//   }
//   // Add other service cards here
// ];

// function ContactFormSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   return (
//     <motion.main 
//       ref={ref}
//       className="flex flex-col items-center py-16 px-4 sm:px-6 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50"
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       variants={containerVariants}
//     >
//       <motion.form 
//         className="w-full max-w-2xl space-y-8"
//         variants={containerVariants}
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <FormHeader />

//         <motion.section 
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           variants={containerVariants}
//         >
//           <motion.div variants={itemVariants}>
//             <FormInput
//               label="First Name"
//               type="text"
//               placeholder="John"
//               aria-label="First Name"
//             />
//           </motion.div>
//           <motion.div variants={itemVariants}>
//             <FormInput
//               label="Last Name"
//               type="text"
//               placeholder="Doe"
//               aria-label="Last Name"
//             />
//           </motion.div>
//         </motion.section>

//         <motion.section 
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           variants={containerVariants}
//         >
//           <motion.div variants={itemVariants}>
//             <FormDropdown
//               label="Service"
//               options={services.map(service => service.title)}
//             />
//           </motion.div>
//           <motion.div variants={itemVariants}>
//             <FormInput
//               label="Budget"
//               type="text"
//               placeholder="$5,000 - $10,000"
//               aria-label="Budget"
//             />
//           </motion.div>
//         </motion.section>

//         <motion.div variants={itemVariants}>
//           <FormInput
//             label="Subject"
//             type="text"
//             placeholder="Project Inquiry"
//             aria-label="Subject"
//           />
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <FormTextarea 
//             label="Message" 
//             placeholder="Describe your project needs..." 
//             aria-label="Message" 
//           />
//         </motion.div>

//         <motion.div 
//           className="flex justify-center"
//           variants={itemVariants}
//         >
//           <SubmitButton />
//         </motion.div>
//       </motion.form>
//     </motion.main>
//   );
// }

// export default ContactFormSection;