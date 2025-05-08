// src/app/api/careers/route.ts
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from 'zod';

const jobSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    shortDescription: z.string().min(10),
    location: z.string().min(3),
    salary: z.number().int().positive(),
    jobType: z.string().min(3)
});

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id');

        if (id) {
            const job = await prisma.job.findUnique({
                where: { id: Number(id) }
            });
            return NextResponse.json(job);
        }

        const jobs = await prisma.job.findMany();
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch jobs" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = jobSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.errors },
                { status: 400 }
            );
        }

        const newJob = await prisma.job.create({
            data: validation.data
        });

        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create job" },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = jobSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.errors },
                { status: 400 }
            );
        }

        const updatedJob = await prisma.job.update({
            where: { id: body.id },
            data: validation.data
        });

        return NextResponse.json(updatedJob);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update job" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        await prisma.job.delete({
            where: { id: Number(id) }
        });

        return NextResponse.json({ message: "Job deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete job" },
            { status: 500 }
        );
    }
}