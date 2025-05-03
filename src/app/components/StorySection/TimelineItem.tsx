// src\app\components\StorySection\TimelineItem.tsx
import React from "react";
import { TimelineEntry } from "./types";

interface TimelineItemProps extends TimelineEntry {
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  position,
  className = "",
}) => {
  const yearElement = (
    <div className="relative -top-5 px-3 py-1.5 text-lg text-blue-500 bg-white h-[5px] left-[26px] w-[120px] max-md:top-0 max-md:left-0">
      {year}
    </div>
  );

  const contentElement = (
    <div className="flex flex-col gap-3 items-start bg-white">
      <h3 className="text-3xl leading-9 text-blue-500 max-sm:text-2xl max-sm:leading-8">
        {title}
      </h3>
      <p className="text-lg leading-7 text-slate-500 w-[476px] max-sm:w-full max-sm:text-base max-sm:leading-6">
        {description}
      </p>
    </div>
  );

  return (
    <article
      className={`flex absolute gap-3 items-center w-[608px] max-md:flex-col max-md:items-start max-md:w-full ${className}`}
    >
      {position === "left" ? (
        <>
          {yearElement}
          {contentElement}
        </>
      ) : (
        <>
          {contentElement}
          {yearElement}
        </>
      )}
    </article>
  );
};
