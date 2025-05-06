// src\app\components\ContactSection\SocialLinks.tsx
import { motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";

export const SocialLinks: React.FC = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/ae9e8e2477daeb3d7635fa7b2b592ab0452b1ea8?placeholderIfAbsent=true",
      alt: "Social Media 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/cb8d469842e45edd17be5b995b288305318814d0?placeholderIfAbsent=true",
      alt: "Social Media 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/b8e1890697df35f37f9462e5c2325dcf1e492723?placeholderIfAbsent=true",
      alt: "Social Media 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/eb6a2667e4e004bd327c9e3efc9eca41f76f2af9?placeholderIfAbsent=true",
      alt: "Social Media 4",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialIcons.map((icon, index) => (
        <motion.a
          key={index}
          href="#"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </motion.a>
      ))}
    </div>
  );
};