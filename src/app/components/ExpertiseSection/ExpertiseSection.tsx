// src/app/components/ExpertiseSection/ExpertiseSection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import Image from "next/image";

export const ExpertiseSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden"
    // style={{ opacity }}
    >
      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        {/* <Image
          src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/77795b531a9fdb993763ef213660c950c3884fce?placeholderIfAbsent=true"
          className="object-cover w-full h-full"
          alt="Decorative background"
          fill
        /> */}
        <svg width="1440" height="1312" className="object-cover w-full h-full" viewBox="0 0 1440 1312" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
            <line x1="105.5" y1="2.18557e-08" x2="105.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="225.5" y1="2.18557e-08" x2="225.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="543.117" y2="543.117" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="606.273" y2="606.273" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="754.805" y2="754.805" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="790.367" y2="790.367" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="892.523" y2="892.523" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="389.117" y2="389.117" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="105.383" y2="105.383" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1440" y1="260.641" y2="260.641" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="345.5" y1="2.18557e-08" x2="345.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="465.5" y1="2.18557e-08" x2="465.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="585.5" y1="2.18557e-08" x2="585.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="705.5" y1="2.18557e-08" x2="705.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="825.5" y1="2.18557e-08" x2="825.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="945.5" y1="2.18557e-08" x2="945.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1065.5" y1="2.18557e-08" x2="1065.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1185.5" y1="2.18557e-08" x2="1185.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line x1="1305.5" y1="2.18557e-08" x2="1305.5" y2="934" stroke="#28282A" strokeOpacity="0.2" strokeDasharray="3 3" />
            <line y1="-0.5" x2="19.8345" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 361 389.023)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="35.95" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 375 389.023)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="58.2637" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 392 388.289)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="78.0982" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 408 388.289)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="95.4533" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 423 388.289)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="115.288" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 438 388.289)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="132.643" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 453 388.289)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="147.519" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 465 391.219)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="147.519" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 464 403.672)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="145.039" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 463 415.398)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="145.039" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 463 427.117)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="145.039" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 463 438.844)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="147.519" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 464 449.102)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="140.081" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 465 460.086)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="117.767" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 462 473.273)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="100.412" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 464 483.531)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="81.8171" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 463 495.25)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="61.9827" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 464 506.242)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="44.6275" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 465 516.5)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="24.7931" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 465 528.219)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="4.95861" y2="-0.5" transform="matrix(-0.806677 0.590993 -0.806677 -0.590993 465 539.945)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="26.3289" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 961 267.859)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="47.7211" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 975 267.859)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="77.341" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 992 266.555)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="103.67" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1008 266.555)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="126.708" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1023 266.555)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="153.036" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1038 266.555)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="176.074" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1053 266.555)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="195.821" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1065 271.781)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="195.821" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1064 294)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="192.53" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1063 314.906)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="192.53" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1063 335.812)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="192.53" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1063 356.727)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="195.821" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1064 375.023)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="185.948" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1065 394.625)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="156.328" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1062 418.148)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="133.29" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1064 436.445)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="108.607" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1063 457.352)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="82.2777" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1064 476.953)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="59.2399" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1065 495.25)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="32.9111" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1065 516.164)" stroke="#C9C9C9" />
            <line y1="-0.5" x2="6.58222" y2="-0.5" transform="matrix(-0.607698 0.794168 -0.607698 -0.794168 1065 537.07)" stroke="#C9C9C9" />
            <g filter="url(#filter0_f_0_4566)">
              <path d="M1040 1129.57C1040 1184.58 1025.86 1238.66 998.935 1286.61C972.012 1334.56 933.215 1374.76 886.279 1403.35C839.343 1431.93 785.848 1447.93 730.946 1449.81C676.043 1451.69 621.581 1439.39 572.804 1414.09C524.026 1388.79 482.575 1351.33 452.441 1305.34C422.307 1259.35 404.505 1206.36 400.749 1151.48C396.993 1096.6 407.409 1041.68 430.996 992" stroke="url(#paint0_linear_0_4566)" strokeOpacity="0.4" strokeWidth="200" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter id="filter0_f_0_4566" x="113.6" y="705.577" width="1212.8" height="1030.82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="93.2" result="effect1_foregroundBlur_0_4566" />
            </filter>
            <linearGradient id="paint0_linear_0_4566" x1="467.47" y1="973.288" x2="1072.5" y2="1273.9" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3398DB" />
              <stop offset="0.313324" stopColor="#F1C40E" />
              <stop offset="0.780691" stopColor="#F39C12" />
              <stop offset="1" stopColor="#E74D3C" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-[url('/assets/ExpertiseSection/ExpertiseSection/matt-white-bg-2.png')] mix-blend-overlay" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses globally with tailored service models—from Silver to Elite—designed to streamline your U.S. market entry, optimize operations, and drive sustainable growth.
          </p>
        </motion.header>


        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-1.png",
              title: "USA Business Representation",
              description: "Assign a dedicated U.S. business representative to act on your behalf and facilitate all in‑country engagements.",
              id: "1"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-2.png",
              title: "Address & Banking",
              description: "Secure a U.S.‑based business address and set up corporate bank accounts to streamline your financial operations.",
              id: "2"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-3.png",
              title: "Networking & Market Insights",
              description: "Provide connections with potential partners and deliver actionable insights into U.S. market trends and opportunities.",
              id: "3"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/WhyChooseSection/WhyChooseSection/icon-1.png",
              title: "Orientation Tour",
              description: "Guide your team through California and Los Angeles tours to understand local business culture and opportunities.",
              id: "4"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-4.png",
              title: "Business Registration",
              description: "Handle all aspects of California and U.S. business registration, including filings and compliance documentation.",
              id: "5"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-5.png",
              title: "Tax Identification",
              description: "Assist with applying for ITIN, EIN, and provide guidance on tax planning and compliance requirements.",
              id: "6"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-6.png",
              title: "Financial & Legal Compliance",
              description: "Introduce you to professional accountants and legal advisors to ensure full compliance with U.S. regulations.",
              id: "7"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/WhyChooseSection/WhyChooseSection/icon-2.png",
              title: "Identification Services",
              description: "Support with California State ID applications and identity verification processes for your key personnel.",
              id: "8"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-2.png",
              title: "Legal Services & Permits",
              description: "Provide legal consultation and assistance with work permit applications for foreign employees.",
              id: "9"
            },
            {
              backgroundImage: "/assets/ExpertiseSection/ExpertiseSection/matt-white-bg.png",
              icon: "/assets/ExpertiseSection/ExpertiseSection/icon-1.png",
              title: "Asset Acquisition & Management",
              description: "Full support in acquiring and managing operational assets—property, vehicles, equipment—with legal and financial coordination.",
              id: "10"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] xl:w-[25%]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertiseSection;