// src/app/components/ExpertiseSection/ServiceCard.tsx
import { motion } from "framer-motion";
import { LearnMoreLink } from "./LearnMoreLink";
import Image from "next/image";

interface ServiceCardProps {
  backgroundImage: string;
  icon: string;
  title: string;
  description: string;
  id: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  backgroundImage,
  icon,
  title,
  description,
  id
}) => {
  return (
    <motion.div 
      className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <Image
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      
      <div className="relative p-6 md:p-8 h-full flex flex-col items-center text-center">
        <motion.img
          src={icon}
          alt="Service icon"
          className="w-16 h-16 md:w-20 md:h-20 mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        
        <motion.div whileHover={{ x: 5 }}>
          <LearnMoreLink id={id} />
        </motion.div>
      </div>
    </motion.div>
  );
};