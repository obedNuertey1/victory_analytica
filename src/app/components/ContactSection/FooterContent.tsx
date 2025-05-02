// src\app\components\ContactSection\FooterContent.tsx
import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";
import * as React from "react";

export const FooterContent: React.FC = () => {
  return (
    <motion.footer
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-start">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
        >
          <div className="w-12 h-12 bg-gray-900 rounded-lg" />
          <h2 className="text-3xl font-bold text-gray-900">ABC Company</h2>
        </motion.div>
        <p className="text-gray-600 mb-6">
          We offer a comprehensive suite of digital marketing services that
          cover all aspects of your online presence.
        </p>
        <SocialLinks />
      </div>

      <motion.nav
        className="grid grid-cols-2 gap-8 md:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Navigation</h3>
          <ul className="space-y-3 text-gray-600">
            {["About Us", "Case Studies", "Careers", "Contact Us", "T&C", "Privacy Policy"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-3 text-gray-600">
            {["Legacy System Migration", "ERP Implementation", "Engineering Consulting", "Product Consulting", "Automated Teams", "Cybersecurity Services"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </motion.footer>
  );
};