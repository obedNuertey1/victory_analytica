// src/app/components/HeroSection/Hero.tsx
import * as React from "react";
import ConsultationButton from "../ConsultationButton";

interface HeroProps<S>{
  firstBlockText?: S;
  secondBlockText?: S;
  leftParagraphText?: S;
  rightParagraphText?: S;
}

export const Hero: React.FC<HeroProps<string>> = ({
  firstBlockText,
  secondBlockText,
  leftParagraphText,
  rightParagraphText
}) => {
  return (
    <section className="text-gray-900 lg:-mt-6">
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-[1.2] md:leading-[1.1] font-bold">
        {
          firstBlockText 
          && 
          <span className="block">{firstBlockText}</span>
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
        <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl ">
          {leftParagraphText}
        </p>
      }

      <div className="mt-12 md:mt-16 lg:mt-20 max-w-2xl justify-right float-right">
        {
          rightParagraphText
          &&
          <p className="text-base md:text-lg lg:text-xl">
            {rightParagraphText}
          </p>
        }

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <ConsultationButton className="w-full sm:w-48 lg:w-56 flex-shrink-0" />
          <a href="#" className="text-blue-600 hover:text-blue-800 text-lg font-semibold underline">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;