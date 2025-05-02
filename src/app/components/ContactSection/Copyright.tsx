// src\app\components\ContactSection\Copyright.tsx
"use client"
import * as React from "react";

export const Copyright: React.FC = () => {
  const [copyRightYear, setCopyRightYear] = React.useState<string>("");
  React.useEffect(()=>{
    setCopyRightYear(String((new Date()).getFullYear()));
  },[]);
  return (
    <div className="flex-1 shrink gap-2.5 self-stretch pb-2.5 mt-11 w-full text-lg text-center basis-0 text-slate-500 max-md:mt-10 max-md:max-w-full">
      © ABC Company {copyRightYear} | All Rights Reserved
    </div>
  );
};
