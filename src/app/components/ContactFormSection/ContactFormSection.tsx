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
    title: "USA Business Representation",
    description: "Assign a dedicated U.S. business representative to act on your behalf and facilitate all in‑country engagements."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9cd2bec387fc81bdf39aec734eac98b702926431?placeholderIfAbsent=true",
    title: "Address & Banking",
    description: "Secure a U.S.‑based business address and set up corporate bank accounts to streamline your financial operations."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5b7720715658b3240f4e9e73a878496f6b40bb37?placeholderIfAbsent=true",
    title: "Networking & Market Insights",
    description: "Provide connections with potential partners and deliver actionable insights into U.S. market trends and opportunities."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/71ac10136db59bfb8dfcd08807111cd2083591e3?placeholderIfAbsent=true",
    title: "Orientation Tour",
    description: "Guide your team through California and Los Angeles tours to understand local business culture and opportunities."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/841d04c43aa8ff16de9513695f747bc78b547603?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/7026a445b1e4707ffa48df300ac747eea1c37606?placeholderIfAbsent=true",
    title: "Business Registration",
    description: "Handle all aspects of California and U.S. business registration, including filings and compliance documentation."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5f4ce075cc719da01f4bef1c456b8334dd4cc598?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/3e7a3599f3b2c1595500d97a6c9003fd99702593?placeholderIfAbsent=true",
    title: "Tax Identification",
    description: "Assist with applying for ITIN, EIN, and provide guidance on tax planning and compliance requirements."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/10d9a616d86924f548c28531f04396afe1d75c8c?placeholderIfAbsent=true",
    title: "Financial & Legal Compliance",
    description: "Introduce you to professional accountants and legal advisors to ensure full compliance with U.S. regulations."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/301095be76fe34d210284264bcfab58fde13e993?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/9cd2bec387fc81bdf39aec734eac98b702926431?placeholderIfAbsent=true",
    title: "Identification Services",
    description: "Support with California State ID applications and identity verification processes for your key personnel."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/396ba8a7c7c5a0f85121857f4033d0a67155b760?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/71ac10136db59bfb8dfcd08807111cd2083591e3?placeholderIfAbsent=true",
    title: "Legal Services & Permits",
    description: "Provide legal consultation and assistance with work permit applications for foreign employees."
  },
  {
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/5f4ce075cc719da01f4bef1c456b8334dd4cc598?placeholderIfAbsent=true",
    icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/3e7a3599f3b2c1595500d97a6c9003fd99702593?placeholderIfAbsent=true",
    title: "Asset Acquisition & Management",
    description: "Full support in acquiring and managing operational assets—property, vehicles, equipment—with legal and financial coordination."
  }
]

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
              label="Company Name"
              type="text"
              placeholder="Global Enterprises Inc"
              aria-label="Company Name"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FormInput
              label="Home Country"
              type="text"
              placeholder="Country of Origin"
              aria-label="Home Country"
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FormDropdown
              label="Service Tier"
              options={services.map(service => service.title)}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FormInput
              label="Investment Range"
              type="text"
              placeholder="$5k - $100k+"
              aria-label="Investment Range"
            />
          </motion.div>
        </motion.section>

        <motion.div variants={itemVariants}>
          <FormInput
            label="Priority Compliance Needs"
            type="text"
            placeholder="Tax, Workforce, Asset Management"
            aria-label="Compliance Needs"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
        <FormTextarea 
            label="Expansion Strategy" 
            placeholder="Describe your US market entry objectives and regulatory concerns..." 
            aria-label="Strategy Details" 
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
