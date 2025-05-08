// // src/app/careers/[id]/page.tsx
// import React from 'react';
// import JobApplicationForm from '@/app/components/JobApplicationForm/JobApplicationForm';
// import { prisma } from '@/lib/prisma';
// import { Metadata } from 'next';
// import { Navbar } from '@/app/components/Navbar';
// // import type { PageProps } from 'next';

// export type SearchParamsType = { params: Record<"id", string>; searchParams?: Record<string, string | string[]> | undefined; }

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//     const job = await prisma.job.findUnique({
//         where: { id: Number(params.id) }
//     });

//     return {
//         title: `${job?.title} | Victory Analytica Careers`,
//         description: job?.shortDescription,
//     };
// }

// async function getJob(id: number) {
//     const job = await prisma.job.findUnique({
//         where: { id }
//     });
//     if (!job) throw new Error('Job not found');
//     return job;
// }

// export default async function JobPage({ params }: SearchParamsType) {
//     const job = await getJob(Number(params.id));

//     return (
//         <div className="min-h-screen h-auto flex flex-col bg-gray-50">
//             <Navbar />
//             <div className='my-3' />
//             <main className="flex-1 my-auto">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                     <div className="max-w-3xl mx-auto">
//                         {/* Job Details */}
//                         <div className="mb-16">
//                             <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
//                             <div className="flex flex-wrap gap-4 text-gray-500 mb-8">
//                                 <span>{job.location}</span>
//                                 <span>•</span>
//                                 <span>{job.jobType}</span>
//                                 <span>•</span>
//                                 <span className="text-blue-600 font-medium">
//                                     ${job.salary.toLocaleString()}/year
//                                 </span>
//                             </div>
//                             <div className="prose max-w-none mb-8">
//                                 <p className="text-lg text-gray-600 mb-6">{job.shortDescription}</p>
//                                 <div dangerouslySetInnerHTML={{ __html: job.description }} />
//                             </div>
//                         </div>

//                         <JobApplicationForm jobId={job.id} jobTitle={job.title} />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// src/app/careers/[id]/page.tsx
import React from 'react';
import JobApplicationForm from '@/app/components/JobApplicationForm/JobApplicationForm';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { notFound } from 'next/navigation';
import type { PageProps } from 'next';


// Type definition for page parameters
// interface PageProps {
//     params: {
//         id: string;
//     };
// }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const job = await prisma.job.findUnique({
        where: { id: Number(params.id) }
    });

    if (!job) {
        return {
            title: 'Job Not Found | Victory Analytica Careers',
            description: 'The requested job position could not be found',
        };
    }

    return {
        title: `${job.title} | Victory Analytica Careers`,
        description: job.shortDescription,
        openGraph: {
            type: 'website',
            title: `${job.title} | Victory Analytica Careers`,
            description: job.shortDescription,
        },
    };
}

async function getJob(id: number) {
    const job = await prisma.job.findUnique({
        where: { id }
    });
    return job;
}

export default async function JobPage({ params }: PageProps) {
    const job = await getJob(Number(params.id));

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen h-auto flex flex-col bg-gray-50">
            <Navbar />
            <div className='my-3' />
            <main className="flex-1 my-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-3xl mx-auto">
                        {/* Job Details */}
                        <div className="mb-16">
                            <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
                            <div className="flex flex-wrap gap-4 text-gray-500 mb-8">
                                <span>{job.location}</span>
                                <span>•</span>
                                <span>{job.jobType}</span>
                                <span>•</span>
                                <span className="text-blue-600 font-medium">
                                    ${job.salary.toLocaleString()}/year
                                </span>
                            </div>
                            <div className="prose max-w-none mb-8">
                                <p className="text-lg text-gray-600 mb-6">{job.shortDescription}</p>
                                <div dangerouslySetInnerHTML={{ __html: job.description }} />
                            </div>
                        </div>

                        <JobApplicationForm jobId={job.id} jobTitle={job.title} />
                    </div>
                </div>
            </main>
        </div>
    );
}