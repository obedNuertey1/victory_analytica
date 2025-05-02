// src\app\components\ImpactSection\StatisticItem.tsx
"use client";

import * as React from "react";

interface StatisticItemProps {
  value: string;
  description: string;
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
  value,
  description,
}) => {
  return (
    <article className="flex flex-col items-center">
      <h2 className="text-7xl font-bold text-gray-900 max-md:text-6xl max-sm:text-5xl">
        {value}
      </h2>
      <p className="text-lg text-gray-900 max-sm:text-base">{description}</p>
    </article>
  );
};
