// src/app/components/ServiceTable/ServiceTable.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import "./ServiceTable.css";

interface ServiceFeature {
    feature: string;
    silver: string;
    gold: string;
    platinum2: string;
    platinum3: string;
    diamond: string;
    elite: string;
}

export default function ServiceTable() {
    const searchParams = useSearchParams();
    const highlightedRow = parseInt(searchParams.get('highlight') || '-1');

    const rowRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        if (rowRef.current && highlightedRow >= 0) {
            try {
                rowRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } catch (e) {
                console.log(e);
                rowRef.current.scrollIntoView();
            }

            // Add temporary highlight animation
            rowRef.current.classList.add('highlight-pulse');
            setTimeout(() => {
                rowRef.current?.classList.remove('highlight-pulse');
            }, 2000);
        }
    }, [highlightedRow]);

    const serviceFeatures: ServiceFeature[] = [
        {
            feature: 'Timeframe',
            silver: '1 Day',
            gold: '2 Days',
            platinum2: '3 Days',
            platinum3: '3 Days',
            diamond: '4 Days',
            elite: '5 Days'
        },
        {
            feature: 'USA Business Representation',
            silver: 'Assign U.S. Representative',
            gold: 'Assign U.S. Representative',
            platinum2: 'Assign U.S. Representative',
            platinum3: 'Assign U.S. Representative',
            diamond: 'Assign U.S. Representative',
            elite: 'Assign U.S. Representative'
        },
        {
            feature: 'Address & Banking',
            silver: 'Secure a U.S.–based business address. Set up a business bank account.',
            gold: 'Secure a U.S.–based business address. Set up a business bank account.',
            platinum2: 'Secure a U.S.–based business address. Set up a business bank account.',
            platinum3: 'Secure a U.S.–based business address. Set up a business bank account.',
            diamond: 'Secure a U.S.–based business address. Set up a business bank account.',
            elite: 'Secure a U.S.–based business address. Set up a business bank account.'
        },
        {
            feature: 'Networking & Market Insights',
            silver: 'Provide connections with potential partners and insights into U.S. market trends.',
            gold: 'Provide connections with potential partners and insights into the U.S. market.',
            platinum2: 'Provide connections with potential partners and insights into the U.S. market.',
            platinum3: 'Provide connections with potential partners and insights into the U.S. market.',
            diamond: 'Provide connections with potential partners and insights into the U.S. market.',
            elite: 'Provide connections with potential partners and insights into the U.S. market.'
        },
        {
            feature: 'Orientation Tour',
            silver: 'California and Los Angeles Tour',
            gold: 'California and Los Angeles Tour',
            platinum2: 'California and Los Angeles Tour',
            platinum3: 'California and Los Angeles Tour',
            diamond: 'California and Los Angeles Tour',
            elite: 'California and Los Angeles Tour'
        },
        {
            feature: 'Business Registration',
            silver: ' -   -  -  - ',
            gold: 'Assist with California & U.S. business registration.',
            platinum2: 'Assist with California & U.S. business registration.',
            platinum3: 'Assist with California & U.S. business registration.',
            diamond: 'Assist with California & U.S. business registration.',
            elite: 'Assist with California & U.S. business registration.'
        },
        {
            feature: 'Tax Identification',
            silver: ' -   -  -  - ',
            gold: 'Help in applying for ITIN.',
            platinum2: 'Help in applying for ITIN and EIN.',
            platinum3: 'Help in applying for ITIN and EIN.',
            diamond: 'Help in applying for ITIN and EIN.',
            elite: 'Help in applying for ITIN, EIN, and business loan facilitation.'
        },
        {
            feature: 'Financial & Legal Compliance',
            silver: ' -   -  -  - ',
            gold: ' -   -  -  - ',
            platinum2: 'Introduce professional accountant to handle taxes.',
            platinum3: 'Introduce professional accountant to handle taxes.',
            diamond: 'Introduce professional accountant to handle taxes.',
            elite: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.'
        },
        {
            feature: 'Identification',
            silver: ' -   -  -  - ',
            gold: ' -   -  -  - ',
            platinum2: ' -   -  -  - ',
            platinum3: 'Assist with California State ID application.',
            diamond: 'Assist with California State ID application.',
            elite: 'Assist with California State ID application.'
        },
        {
            feature: 'Legal Services & Permits',
            silver: ' -   -  -  - ',
            gold: ' -   -  -  - ',
            platinum2: ' -   -  -  - ',
            platinum3: ' -   -  -  - ',
            diamond: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
            elite: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.'
        },
        {
            feature: 'Asset Acquisition & Management',
            silver: 'Not included',
            gold: 'Not included',
            platinum2: 'Guidance on identifying essential startup assets (non-financial only)',
            platinum3: 'Initial consulting on property leasing, office setup options',
            diamond: 'Assist with acquisition of basic operational assets and vendor sourcing',
            elite: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.'
        }
    ];

    return (
        <div className="overflow-x-auto rounded-lg border border-base-200 w-full max-w-[90rem] m-auto px-2 md:px-0">
            <table className="table table-xs md:table w-full">
                <thead className="bg-base-200">
                    <tr>
                        <th className="text-sm md:text-lg font-bold whitespace-normal">Service Feature</th>
                        <th className="bg-gray-100 text-gray-800 text-sm md:text-base whitespace-normal px-2">Silver</th>
                        <th className="bg-amber-50 text-amber-800 text-sm md:text-base whitespace-normal px-2">Gold</th>
                        <th className="bg-blue-50 text-blue-800 text-sm md:text-base whitespace-normal px-2">Platinum (2W)</th>
                        <th className="bg-sky-50 text-sky-800 text-sm md:text-base whitespace-normal px-2">Platinum (3W)</th>
                        <th className="bg-purple-50 text-purple-800 text-sm md:text-base whitespace-normal px-2">Diamond</th>
                        <th className="bg-elite bg-indigo-50 text-indigo-800 text-sm md:text-base whitespace-normal px-2">Elite</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceFeatures.map((feature, index) => (
                        <tr
                            key={feature.feature}
                            className={`${highlightedRow === index ? 'bg-primary/20 transition-colors' : ''} scroll-mt-16`}
                            ref={index === highlightedRow ? rowRef : null}
                            id={`row-${index}`}
                        >
                            <td className="font-semibold whitespace-normal text-sm md:text-base px-2 py-1">
                                {feature.feature}
                            </td>
                            {[feature.silver, feature.gold, feature.platinum2, feature.platinum3, feature.diamond, feature.elite].map((value, i) => (
                                <td key={i} className="whitespace-normal text-sm md:text-base px-2 py-1">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    // return (
    //     <div className="overflow-x-auto rounded-lg border border-base-200 max-w-[90rem] m-auto">
    //         <table className="table w-full">
    //             <thead className="bg-base-200">
    //                 <tr>
    //                     <th className="text-lg font-bold">Service Feature</th>
    //                     <th className="bg-silver">Silver</th>
    //                     <th className="bg-gold">Gold</th>
    //                     <th className="bg-platinum">Platinum (2W)</th>
    //                     <th className="bg-platinum">Platinum (3W)</th>
    //                     <th className="bg-diamond">Diamond</th>
    //                     <th className="bg-elite">Elite</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {serviceFeatures.map((feature, index) => (
    //                     <tr
    //                         key={feature.feature}
    //                         className={`${highlightedRow === index ? 'bg-primary/20 transition-colors' : ''} scroll-mt-16`}
    //                         ref={index === highlightedRow ? rowRef : null}
    //                         id={`row-${index}`}
    //                     >
    //                         <td className="font-semibold">{feature.feature}</td>
    //                         <td>{feature.silver}</td>
    //                         <td>{feature.gold}</td>
    //                         <td>{feature.platinum2}</td>
    //                         <td>{feature.platinum3}</td>
    //                         <td>{feature.diamond}</td>
    //                         <td>{feature.elite}</td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </div>
    // );
}