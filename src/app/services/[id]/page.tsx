// app/service/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import ContactSection from '@/app/components/ContactSection/ContactSection';

interface ServiceFeature {
    feature: string;
    silver: string;
    gold: string;
    platinum2: string;
    platinum3: string;
    diamond: string;
    elite: string;
}

const serviceFeatures: ServiceFeature[] = [
    {
        feature: 'Timeframe',
        silver: '2 Weeks',
        gold: '2 Weeks',
        platinum2: '2 Weeks',
        platinum3: '3 Weeks',
        diamond: '3 Weeks',
        elite: '4 Weeks'
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
        silver: '',
        gold: 'Assist with California & U.S. business registration.',
        platinum2: 'Assist with California & U.S. business registration.',
        platinum3: 'Assist with California & U.S. business registration.',
        diamond: 'Assist with California & U.S. business registration.',
        elite: 'Assist with California & U.S. business registration.'
    },
    {
        feature: 'Tax Identification',
        silver: '',
        gold: 'Help in applying for ITIN.',
        platinum2: 'Help in applying for ITIN and EIN.',
        platinum3: 'Help in applying for ITIN and EIN.',
        diamond: 'Help in applying for ITIN and EIN.',
        elite: 'Help in applying for ITIN, EIN, and business loan facilitation.'
    },
    {
        feature: 'Financial & Legal Compliance',
        silver: '',
        gold: '',
        platinum2: 'Introduce professional accountant to handle taxes.',
        platinum3: 'Introduce professional accountant to handle taxes.',
        diamond: 'Introduce professional accountant to handle taxes.',
        elite: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.'
    },
    {
        feature: 'Identification',
        silver: '',
        gold: '',
        platinum2: '',
        platinum3: 'Assist with California State ID application.',
        diamond: 'Assist with California State ID application.',
        elite: 'Assist with California State ID application.'
    },
    {
        feature: 'Legal Services & Permits',
        silver: '',
        gold: '',
        platinum2: '',
        platinum3: '',
        diamond: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
        elite: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.'
    },
    {
        feature: 'Asset Acquisition & Management',
        silver: '',
        gold: '',
        platinum2: 'Guidance on identifying essential startup assets (non-financial only)',
        platinum3: 'Initial consulting on property leasing, office setup options',
        diamond: 'Assist with acquisition of basic operational assets and vendor sourcing',
        elite: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.'
    }
];

const timeframes = {
    silver: '2 Weeks',
    gold: '2 Weeks',
    platinum2: '2 Weeks',
    platinum3: '3 Weeks',
    diamond: '3 Weeks',
    elite: '4 Weeks'
};

const tierColors = {
    silver: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        border: 'border-gray-300',
        accent: 'bg-gray-200 text-gray-700'
    },
    gold: {
        bg: 'bg-amber-50',
        text: 'text-amber-800',
        border: 'border-amber-300',
        accent: 'bg-amber-100 text-amber-700'
    },
    platinum2: {
        bg: 'bg-blue-50',
        text: 'text-blue-800',
        border: 'border-blue-300',
        accent: 'bg-blue-100 text-blue-700'
    },
    platinum3: {
        bg: 'bg-sky-50',
        text: 'text-sky-800',
        border: 'border-sky-300',
        accent: 'bg-sky-100 text-sky-700'
    },
    diamond: {
        bg: 'bg-purple-50',
        text: 'text-purple-800',
        border: 'border-purple-300',
        accent: 'bg-purple-100 text-purple-700'
    },
    elite: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-800',
        border: 'border-indigo-300',
        accent: 'bg-indigo-100 text-indigo-700'
    }
};

export default function ServicePage({ params }: { params: { id: string } }) {
    const id = parseInt(params?.id);
    const feature = serviceFeatures[id];

    if (isNaN(id)) return notFound();
    if (!feature) return notFound();

    return (
        <div className="flex flex-col self-stretch bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Navbar />
            <div className='my-[4rem]' />
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/services"
                        className="text-blue-600 text-xl hover:text-blue-800 hover:link flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        All Services
                    </Link>
                    <span className="text-gray-500">Service #{id}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">
                    {feature.feature}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(timeframes).map(([tier, timeframe]) => {
                        const description = feature[tier as keyof ServiceFeature];
                        const displayText = description.replace(/-/g, '').trim();

                        // Skip card if empty or dash-only content
                        if (!displayText) return null;

                        return (
                            <div
                                key={tier}
                                className={`rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${tierColors[tier as keyof typeof tierColors].bg}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className={`text-xl font-semibold ${tierColors[tier as keyof typeof tierColors].text}`}>
                                        {tier.charAt(0).toUpperCase() + tier.slice(1)}
                                    </h2>
                                    <span className={`px-3 py-1 rounded-full text-sm ${tierColors[tier as keyof typeof tierColors].accent}`}>
                                        {timeframe}
                                    </span>
                                </div>
                                <p className={`${tierColors[tier as keyof typeof tierColors].text} opacity-90`}>
                                    {displayText}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ContactSection />
        </div>
    );
}