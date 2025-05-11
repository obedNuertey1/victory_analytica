// src/app/components/HeroSection/Hero.tsx
import * as React from "react";
import ConsultationButton from "../ConsultationButton";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface HeroProps<S> {
  firstBlockText?: S;
  secondBlockText?: S | React.ReactNode;
  leftParagraphText?: S;
  rightParagraphText?: S;
}

export const Hero: React.FC<HeroProps<string>> = ({
  firstBlockText,
  secondBlockText,
  leftParagraphText,
  rightParagraphText
}) => {
  const pathName = usePathname();

  const isHomePage = pathName === "/"

  return (
    <section className={`${isHomePage ? "text-white" : "text-gray-900"} relative z-50 max-w-7xl lg:-mt-6 mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-8xl leading-[1.2] md:leading-[1.1] font-bold">
          {
            firstBlockText
            &&
            <span className="block lg:mt-2">{firstBlockText}</span>
          }
          {
            secondBlockText
            &&
            <span className="block mt-2 md:mt-4">{secondBlockText}</span>
          }
        </h1>

        {
          leftParagraphText
          &&
          <p className="md:ml-2 mt-6 md:mt-8 text-base md:text-lg lg:text-xl ">
            {leftParagraphText}
          </p>
        }

        <div className="mt-12 md:mt-16 lg:mt-20 max-w-2xl justify-right lg:float-right">
          {
            rightParagraphText
            &&
            <p className="text-base md:text-lg lg:text-xl">
              {rightParagraphText}
            </p>
          }

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ConsultationButton className="w-full sm:w-48 lg:w-56 flex-shrink-0" />
            <Link href="/case-studies" className={`${isHomePage ? "text-blue-50 hover:text-blue-400" : "text-blue-600 hover:text-blue-800"} cursor-pointer text-lg font-semibold underline`}>
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto"> 
        <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-8xl leading-[1.2] md:leading-[1.1] font-bold">
          {firstBlockText && (
            <span className="block lg:mt-2">{firstBlockText}</span>
          )}
          {secondBlockText && (
            <span className="block mt-2 md:mt-4">{secondBlockText}</span>
          )}
        </h1>

        <div className="lg:flex lg:gap-8 mt-12 md:mt-16 lg:mt-20">
          {leftParagraphText && (
            <div className="lg:w-1/2">
              <p className="text-base md:text-lg lg:text-xl">
                {leftParagraphText}
              </p>
            </div>
          )}
          
          {rightParagraphText && (
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <p className="text-base md:text-lg lg:text-xl">
                {rightParagraphText}
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <ConsultationButton className="w-full sm:w-48 lg:w-56 flex-shrink-0" />
                <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 text-lg font-semibold underline">
                  View Case Studies
                </Link>
              </div>
            </div>
          )}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;