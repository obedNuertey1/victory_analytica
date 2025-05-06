"use client";

import * as React from "react";
import Link from "next/link";

interface ConsultationButtonProps {
    onClick?: () => void;
    className?: string;
}

export default function ConsultationButton({ onClick, className = "" }: ConsultationButtonProps) {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
            />
            <Link
                href="/contact#contact-form"
                className={`
                    flex justify-center items-center
                    rounded border-blue-500 border-solid
                    bg-zinc-900 border-[1.5px]
                    duration-[0.3s] ease-[ease]
                    h-[54px] transition-[background-color]
                    w-[197px]
                    hover:bg-zinc-800
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    max-md:h-[50px] max-md:w-[180px]
                    max-sm:w-40 max-sm:h-[46px]
                    ${className}
        `}
                aria-label="Get a consultation"
            >
                <div className="flex gap-2.5 items-center text-lg font-medium text-white max-md:text-base max-sm:text-sm">
                    <span>Get a consultation</span>
                    <i className="ti ti-arrow-right" aria-hidden="true" />
                </div>
            </Link>
        </>
    );
}