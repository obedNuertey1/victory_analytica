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
          <h2 className="text-3xl font-bold text-gray-900">Victory Analytica & Security LLC</h2>
        </motion.div>
        <p className="text-gray-600 mb-6">
          Empowering global business expansion through strategic consulting, 
          compliance excellence, and data-driven security solutions.
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Solutions</h3>
          <ul className="space-y-3 text-gray-600">
            {["Silver Model", "Gold Model", "Platinum Model", "Diamond Model", "Elite Model", "Compliance Audit"].map((item, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
          <ul className="space-y-3 text-gray-600">
            {["Market Entry Strategy", "Tax Compliance", "Asset Acquisition", "Workforce Solutions", "Security Integration", "Portfolio Management"].map((item, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </motion.footer>
  );
};