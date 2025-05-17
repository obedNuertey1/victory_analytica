// app/service/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import ContactSection from '@/app/components/ContactSection/ContactSection';

type OtherServiceTypes = {
    description: string;
    services: {
        serviceName: string;
        urlParam: number;
        modelPackage: string;
    }[];
};
interface ServiceFeature {
    feature: string;
    silver: string | OtherServiceTypes;
    gold: string | OtherServiceTypes;
    platinum2: string | OtherServiceTypes;
    platinum3: string | OtherServiceTypes;
    diamond: string | OtherServiceTypes;
    elite: string | OtherServiceTypes;
}


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
        silver: {
            description: 'Assign U.S. Representative',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: 'Assign U.S. Representative',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Assign U.S. Representative',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Assign U.S. Representative',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Assign U.S. Representative',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Assign U.S. Representative',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Address & Banking',
        silver: {
            description: 'Secure a U.S.–based business address. Set up a business bank account.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: 'Secure a U.S.–based business address. Set up a business bank account.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Secure a U.S.–based business address. Set up a business bank account.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Secure a U.S.–based business address. Set up a business bank account.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Secure a U.S.–based business address. Set up a business bank account.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Secure a U.S.–based business address. Set up a business bank account.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Networking & Market Insights',
        silver: {
            description: 'Provide connections with potential partners and insights into U.S. market trends.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: 'Provide connections with potential partners and insights into the U.S. market.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Provide connections with potential partners and insights into the U.S. market.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Provide connections with potential partners and insights into the U.S. market.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Provide connections with potential partners and insights into the U.S. market.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Provide connections with potential partners and insights into the U.S. market.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Orientation Tour',
        silver: {
            description: 'California and Los Angeles Tour',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: 'California and Los Angeles Tour',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'California and Los Angeles Tour',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'California and Los Angeles Tour',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'California and Los Angeles Tour',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'California and Los Angeles Tour',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Business Registration',
        silver: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: 'Assist with California & U.S. business registration.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Assist with California & U.S. business registration.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Assist with California & U.S. business registration.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Assist with California & U.S. business registration.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Assist with California & U.S. business registration.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Tax Identification',
        silver: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: 'Help in applying for ITIN.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Help in applying for ITIN and EIN.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Help in applying for ITIN and EIN.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Help in applying for ITIN and EIN.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Help in applying for ITIN, EIN, and business loan facilitation.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Financial & Legal Compliance',
        silver: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Introduce professional accountant to handle taxes.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Introduce professional accountant to handle taxes.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Introduce professional accountant to handle taxes.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Identification',
        silver: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Assist with California State ID application.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Assist with California State ID application.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Assist with California State ID application.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Legal Services & Permits',
        silver: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    },
    {
        feature: 'Asset Acquisition & Management',
        silver: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into U.S. market trends.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: '',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: '',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        gold: {
            description: '',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: '',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: '',
                    urlParam: 10
                },
            ]
        },
        platinum2: {
            description: 'Guidance on identifying essential startup assets (non-financial only)',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: '',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Guidance on identifying essential startup assets (non-financial only)',
                    urlParam: 10
                },
            ]
        },
        platinum3: {
            description: 'Initial consulting on property leasing, office setup options',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: '',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Initial consulting on property leasing, office setup options',
                    urlParam: 10
                },
            ]
        },
        diamond: {
            description: 'Assist with acquisition of basic operational assets and vendor sourcing',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN and EIN.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Assist with acquisition of basic operational assets and vendor sourcing',
                    urlParam: 10
                },
            ]
        },
        elite: {
            description: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
            services: [
                {
                    serviceName: 'USA Business Representation',
                    modelPackage: 'Assign U.S. Representative',
                    urlParam: 1
                },
                {
                    serviceName: 'Address & Banking',
                    modelPackage: 'Secure a U.S.–based business address. Set up a business bank account.',
                    urlParam: 2
                },
                {
                    serviceName: 'Networking & Market Insights',
                    modelPackage: 'Provide connections with potential partners and insights into the U.S. market.',
                    urlParam: 3
                },
                {
                    serviceName: 'Orientation Tour',
                    modelPackage: 'California and Los Angeles Tour',
                    urlParam: 4
                },
                {
                    serviceName: 'Business Registration',
                    modelPackage: 'Assist with California & U.S. business registration.',
                    urlParam: 5
                },
                {
                    serviceName: 'Tax Identification',
                    modelPackage: 'Help in applying for ITIN, EIN, and business loan facilitation.',
                    urlParam: 6
                },
                {
                    serviceName: 'Financial & Legal Compliance',
                    modelPackage: 'Introduce professional accountant to handle taxes and guide credit card, credit line, and business loan applications.',
                    urlParam: 7
                },
                {
                    serviceName: 'Identification',
                    modelPackage: 'Assist with California State ID application.',
                    urlParam: 8
                },
                {
                    serviceName: 'Legal Services & Permits',
                    modelPackage: 'Provide legal services and consultations; guide clients through U.S. work permit applications; apply for work permits for foreign employees and expand U.S. operations.',
                    urlParam: 9
                },
                {
                    serviceName: 'Asset Acquisition & Management',
                    modelPackage: 'Full support in acquiring and managing assets (e.g., property, vehicles, tech); includes coordination with legal and financial services.',
                    urlParam: 10
                },
            ]
        }
    }
];

const timeframes = {
    silver: '1 Day',
    gold: '2 Days',
    platinum2: '3 Days',
    platinum3: '3 Days',
    diamond: '4 Days',
    elite: '5 Days'
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

export default function ServicePage({ params }: any) {
    const id = parseInt(params?.id);
    const feature = serviceFeatures[id];

    if (isNaN(id)) return notFound();
    if (!feature) return notFound();

    return (
        <>
            <Navbar />
            <div className="flex flex-col self-stretch bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className='my-[4rem]' />
                <div className="max-w-4xl md:min-w-3xl lg:min-w-5xl mx-auto">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {Object.entries(timeframes).map(([tier, timeframe]) => {
                            const serviceFeat = feature[tier as keyof ServiceFeature];

                            let description = '';
                            let services: { serviceName: string; urlParam: number; modelPackage: string }[] = [];

                            if (typeof serviceFeat === 'object' && serviceFeat !== null) {
                                description = serviceFeat.description;
                                services = serviceFeat.services;
                            } else if (typeof serviceFeat === 'string') {
                                description = serviceFeat;
                            }

                            const displayText = description?.replace(/-/g, '').trim();
                            if(!displayText) return null;

                            const validServices = services.filter(service =>
                                service.modelPackage?.trim() !== ''
                            );

                            if (!description.trim() && validServices.length === 0) return null;

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

                                    {description.trim() && (
                                        <p className={`${tierColors[tier as keyof typeof tierColors].text} opacity-90 mb-4`}>
                                            {description}
                                        </p>
                                    )}

                                    {validServices.length > 0 && (
                                        <>
                                            <hr className={`${tierColors[tier as keyof typeof tierColors].border} mt-4`} />
                                            <div className="pt-4 border-t border-gray-200">
                                                <h3 className="text-lg font-semibold mb-3 text-gray-700">Other { tier.charAt(0).toUpperCase() + tier.substr(1, tier.length-1).toLowerCase()}  Services</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    {validServices.map((service) => (
                                                        <li key={service.urlParam} className="text-sm">
                                                            <Link
                                                                href={`/services/${service.urlParam}`}
                                                                className="text-blue-600 hover:text-blue-800 hover:link-hover transition-colors"
                                                            >
                                                                {service.serviceName}
                                                            </Link>
                                                            <span className='text-blue-600'>{' '}:{' '}</span>
                                                            <p className='inline'>{service.modelPackage}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <Link className="block shadow-sm hover:shadow-md transition-shadow transition-color h-[5rem] w-full bg-blue-600 hover:bg-blue-600/80 text-center text-white text-2xl text-bold rounded-xl" href={`/service-table?highlight=${id}`}><div className="flex flex-col items-center justify-center text-center m-auto w-full h-full"><span>All Swimlanes</span></div></Link>
                </div>
                <ContactSection />
            </div>
        </>
    );
}