// src\app\components\ContactSection\SocialLinks.tsx
import { motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";

export const SocialLinks: React.FC = () => {
  const socialIcons = [
    {
      src: "/assets/ContactSection/SocialLinks/facebook-icon.png",
      alt: "facebook icon",
    },
    {
      src: "/assets/ContactSection/SocialLinks/instagram-icon.png",
      alt: "instagram icon",
    },
    {
      src: "/assets/ContactSection/SocialLinks/linkedIn-icon.png",
      alt: "linkedIn icon",
    },
    {
      src: "/assets/ContactSection/SocialLinks/twitter-icon.png",
      alt: "twitter icon",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialIcons.map((icon, index) => (
        <motion.a
          key={index}
          href="#"
          className="p-2 rounded-full hover:bg-gray-100 shadow-sm transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={32}
            height={32}
            className="w-8 h-8 md:w-8 md:h-8"
          />
        </motion.a>
      ))}
    </div>
  );
};