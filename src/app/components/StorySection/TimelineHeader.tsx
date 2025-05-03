// src\app\components\StorySection\TimelineHeader.tsx
import React from "react";

export const TimelineHeader: React.FC = () => {
  return (
    <header className="mx-auto mt-0 mb-11 text-gray-900 w-[1014px] max-md:w-full">
      <h1 className="text-7xl leading-[89px] max-sm:text-5xl max-sm:leading-[58px]">
        Our Story
      </h1>
      <p className="text-lg leading-7 max-sm:text-base max-sm:leading-6">
        Founded on the principles of innovation and collaboration, ABC Company
        was created to bridge the gap between complex engineering challenges and
        simplified solutions. Over the years, we've grown into a global team of
        experts passionate about helping businesses scale, innovate, and thrive
        in an ever-changing digital landscape.
      </p>
    </header>
  );
};
