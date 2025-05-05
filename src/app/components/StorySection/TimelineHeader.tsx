// src\app\components\StorySection\TimelineHeader.tsx
import React from "react";

export const TimelineHeader: React.FC = () => {
  return (
    <header className="mx-auto mt-0 mb-11 text-gray-900 w-[1014px] max-md:w-full">
      <h1 className="text-7xl leading-[89px] max-sm:text-5xl max-sm:leading-[58px]">
        Strategic Evolution
      </h1>
      <p className="text-lg leading-7 max-sm:text-base max-sm:leading-6">
        From our roots in compliance consulting to becoming global expansion architects, 
        Victory Analytica has consistently redefined international business enablement 
        through innovative models and security-first solutions.
      </p>
    </header>
  );
};