// src\app\components\ContactSection\ContactSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ContactCard } from "./ContactCard";
import { FooterContent } from "./FooterContent";
import { Copyright } from "./Copyright";
import Link from "next/link";
import Image from "next/image";

export const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const contactCards = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/36f4b481a12c2022e5cc23a67e91e97470522af3?placeholderIfAbsent=true",
      title: "Strategic Consultations",
      content: "strategic@victoryanalytica.com",
      link: "/contact#contact-form",
      type: "navlink"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/95d0f31b27628f4f73be7893a0770c96ec4281ba?placeholderIfAbsent=true",
      title: "Global Operations",
      content: "+1 (608) 446-5689",
      link: "+16084465689",
      type: "phone"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/dcfd1cf9c45ba15876e5a76387f0a6e34f23b331?placeholderIfAbsent=true",
      title: "HQ & Consultations",
      content: "1999 Avenue California, Los Angeles, CA 90089",
      link: "#",
      type: "blank"
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
      // style={{ opacity }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/77795b531a9fdb993763ef213660c950c3884fce?placeholderIfAbsent=true"
          className="object-cover w-full h-full"
          fill
          alt="Decorative background"
        />
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/f5e30eaf5347545e91046e8705775d6b26e8274d?placeholderIfAbsent=true')] mix-blend-overlay" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <motion.header
            className="text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Get In Touch Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We help businesses expand globally with strategic consulting, data-driven insights, and security‑focused project management.
            </p>

          </motion.header>

          {/* Contact Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {contactCards.map((card, index) => {
              if (card.type === "navlink") {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link href={`${card.link}`}>
                      <ContactCard {...card} />
                    </Link>
                  </motion.div>
                )
              }

              if (card.type === "phone"){
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <a href={`tel:${card.link}`}>
                      <ContactCard {...card} />
                    </a>
                  </motion.div>
                )
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <ContactCard {...card} />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Footer Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FooterContent />
            <Copyright />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;