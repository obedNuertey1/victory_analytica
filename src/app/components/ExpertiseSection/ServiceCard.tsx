// src/app/components/ExpertiseSection/ServiceCard.tsx
import { motion } from "framer-motion";
import { LearnMoreLink } from "./LearnMoreLink";
import Image from "next/image";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";

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
        <>
      <div  className="not-sm:hidden shadow-lg hover:shadow-xl card-container rounded-4xl size-[12rem] md:size-[20rem] relative overflow-hidden">
        <div className="size-full absolute -top-25 -z-10">
          <img className="size-full object-cover" src={`${backgroundImage}`} />
          <div className="bg-gray-100 h-[6rem] w-full flex items-center justify-center text-black">
          </div>
        </div>
        <motion.div  className="z-10 w-full h-[calc(20rem*2)] min-h-[auto] transform transition-all duration-700 ease-in-out scroll-auto hover:overflow-y-auto rounded-[inherit] hover:bg-gray-800 hover:text-white hover:translate-y-[-15rem] translate-y-[-0.5rem] scroll-m-0 scroll-p-0">
          <div className="w-full transform not-sm:translate-y-[6rem] sm:translate-y-[15rem] py-4 px-2 font-light z-10  mb-5 ">
            <h3 className="title not-sm:text-2xl sm:text-2xl mb-[3rem] text-wrap ">{title}</h3>
            <p className="mb-3">
              {description}
            </p>
            <Link href={`/services/${id}`} className='group mx-auto text-white bg-green-400 overflow-hidden hover:cursor-pointer p-3 rounded-lg font-bold  transition-all duration-300 hover:pr-4 hover:bg-green-400/80 inline-block'>
              <span className='inline-block transition-all duration-300'>
                <ArrowRightIcon className='ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2 -translate-x-16 transform motion-reduce:transform-none' />
                <span className='inline-block transition-transform duration-300 group-hover:translate-x-5 transform motion-reduce:transform-none'>LEARN MORE</span>
                <ArrowRightIcon className='ml-2 inline-block transition-transform duration-200 group-hover:translate-x-10 transform motion-reduce:transform-none' />
              </span>
            </Link>

            <div className="mb-[5rem]" />
          </div>
        </motion.div>
      </div>
      <Link href={`/services/${id}`} className="block sm:hidden shadow-lg hover:shadow-xl card-container rounded-3xl size-[11rem] md:size-[24rem] relative overflow-clip">
        <div className="size-full absolute -top-20 -z-10">
          <img className="size-full object-cover" src={`${backgroundImage}`} />
          <div className="bg-gray-100 h-[6rem] w-full flex items-center justify-center text-black">
          </div>
        </div>
        <div  className="z-10 w-full h-[calc(24rem*2)] transform transition-all duration-700 ease-in-out scroll-auto hover:overflow-y-auto rounded-[inherit] hover:bg-gray-200 hover:translate-y-[-19rem]">
          <div className="w-full transform not-sm:translate-y-[5.5rem] sm:translate-y-[19rem] py-4 px-2 font-light z-10 text-black ">
            <h3 className="title not-sm:text-xl sm:text-[1.75rem]  text-wrap">{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};
//   backgroundImage,
//   icon,
//   title,
//   description,
//   id
// }) => {
//   return (
//     <motion.div 
//       className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//       whileHover={{ y: -5 }}
//     >
//       <Image
//         src={backgroundImage}
//         alt="Service card image"
//         fill
//         className="absolute inset-0 w-full h-full object-cover opacity-20"
//       />
      
//       <div className="relative p-6 md:p-8 h-full flex flex-col items-center text-center">
//         <motion.img
//           src={icon}
//           alt="Service icon"
//           className="w-16 h-16 md:w-20 md:h-20 mb-6"
//           whileHover={{ scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         />
        
//         <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
//         <p className="text-gray-600 mb-6 flex-1">{description}</p>
        
//         <motion.div whileHover={{ x: 5 }}>
//           <LearnMoreLink id={id} />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };