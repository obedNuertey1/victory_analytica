// src/app/api/applications/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";
import { z } from 'zod';
import { Resend } from "resend";

const applicationSchema = z.object({
  jobId: z.number().int().positive(),
  fullName: z.string().min(3),
  email: z.string().email(),
  linkedIn: z.string().refine(url => {
    try {
      new URL(url);
      return url.includes('linkedin.com/in/');
    } catch {
      return false;
    }
  }, {
    message: "Must be a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)"
  }),
  message: z.string().max(1000).optional(),
  resume: z.custom<File>()
    .refine(file => file instanceof File && file.size > 0, {
      message: "Resume file is required"
    })
});

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    // Validate form data

    console.log({ formData });

    const rawData = {
      jobId: formData.get('jobId'),
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      linkedIn: formData.get('linkedIn'),
      message: formData.get('message'),
      resume: formData.get('resume')
    };

    const validation = applicationSchema.safeParse({
      jobId: Number(rawData.jobId),
      fullName: rawData.fullName,
      email: rawData.email,
      linkedIn: rawData.linkedIn,
      message: rawData.message,
      resume: rawData.resume
    });

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    // Handle file upload
    const resumeFile = formData.get('resume') as File;
    if (!resumeFile) {
      return NextResponse.json(
        { error: "Resume is required" },
        { status: 400 }
      );
    }

    // Max 5MB file size
    if (resumeFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be less than 5MB" },
        { status: 400 }
      );
    }
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: "Only PDF and DOCX files are allowed" },
        { status: 400 }
      );
    }

    const job = await prisma.job.findUnique({
      where: { id: Number(rawData.jobId) }
    });

    console.log({ job });

    // Save file
    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    const fileOrValue = formData.get('resume');
    let filename1 = '';
    let filesize1 = '';

    // Check that it’s a File before accessing .name
    if (fileOrValue instanceof File) {
      filename1 = fileOrValue.name;
      filesize1 = `${(fileOrValue.size / (1024 * 1000)).toFixed(2)}MB`;

    } else {
      console.warn('No file found under "resume" key.');
    }

    const base64Content = buffer.toString('base64');

    const websiteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vicanalytica.com';
    console.log({ websiteUrl });

    const resend = new Resend("re_PgX1P2gZ_35z7e82VLFrEEaJUkCx96Jia");
    const emailRes = await resend.emails.send({
      from: 'Vicanalytica HR Department <hr@vicanalytica.com>',
      to: ['onuertey1997@gmail.com'],
      attachments: [{
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type
      }],
      subject: 'Application Received',
      html: `
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Job Application - ${job?.title || ''}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 680px; margin: 30px auto; background-color: #ffffff; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <!-- Company Logo -->
        <tr>
            <td style="padding: 25px 20px; background-color: #ffffff; text-align: center;">
                <a href="${websiteUrl}" style="text-decoration: none; display: inline-block;">
                    <img src="${websiteUrl}/logo-removebg-preview.png" 
                         alt="Victory Analytica & Security Logo" 
                         width="180" 
                         style="display: block; margin: 0 auto; max-width: 180px; height: auto; border: 0; outline: none;">
                </a>
            </td>
        </tr>

        <!-- Header -->
        <tr>
            <td style="padding: 32px 40px; background-color: #2c3e50; color: white;">
                <h1 style="margin: 0; font-size: 26px; font-weight: 600;">New Application Received</h1>
                <p style="margin: 8px 0 0; font-size: 16px; opacity: 0.9;">${job?.title || ''}</p>
            </td>
        </tr>

        <!-- Applicant Details -->
        <tr>
            <td style="padding: 40px;">
                <div style="margin-bottom: 32px;">
                    <h2 style="margin: 0 0 24px 0; color: #2c3e50; font-size: 20px;">Candidate Profile</h2>
                    <table width="100%" style="border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee; width: 40%;"><strong>Applicant Name:</strong></td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${formData.get("fullName")}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Contact Email:</strong></td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                <a href="mailto:${formData.get("email")}" style="color: #3498db; text-decoration: none;">${formData.get("email")}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>LinkedIn Profile:</strong></td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                                <a href="${formData.get('linkedIn')}" style="color: #3498db; text-decoration: none;">View Profile</a>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Application Message -->
                <div style="margin-bottom: 32px;">
                    <h3 style="margin: 0 0 16px 0; color: #2c3e50; font-size: 18px;">Candidate Message</h3>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #3498db;">
                        <p style="margin: 0; color: #444; line-height: 1.6; font-style: italic;">
                            ${formData.get('message') || 'No message provided'}
                        </p>
                    </div>
                </div>

                <!-- Job Details -->
                <div style="background-color: #f8f9fa; padding: 24px; border-radius: 8px;">
                    <h3 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 18px;">Position Details</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                        <div>
                            <p style="margin: 8px 0; color: #666;"><strong>Job Title:</strong><br>${job?.title || ''}</p>
                            <p style="margin: 8px 0; color: #666;"><strong>Location:</strong><br>${job?.location || ''} (${job?.jobType || ''})</p>
                        </div>
                        <div>
                            <p style="margin: 8px 0; color: #666;"><strong>Salary Range:</strong><br>$${job?.salary ? job.salary.toLocaleString() + "/month" : ''}</p>
                            <p style="margin: 8px 0; color: #666;"><strong>Posted:</strong><br>${job?.createdAt ? new Date(job.createdAt).toLocaleDateString() : ''}</p>
                        </div>
                    </div>
                    <div style="margin-top: 16px;">
                        <p style="margin: 12px 0 8px; color: #444;"><strong>Key Responsibilities:</strong></p>
                        <p style="margin: 0; color: #666; line-height: 1.5;">${job?.shortDescription || ''}</p>
                    </div>
                </div>

                <!-- Resume Section -->
                <div style="margin-top: 32px; text-align: center;">
                    <div style="background-color: #f8f9fa; padding: 16px; border-radius: 8px; display: inline-block;">
                        <p style="margin: 8px 0 0; color: #666; font-size: 14px;">
                            ${filename1} • ${(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>
                </div>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="padding: 24px; background-color: #2c3e50; color: rgba(255,255,255,0.8); text-align: center;">
                <p style="margin: 0; font-size: 14px;">
                    Victory Analytica & Security LLC<br>
                    <span style="font-size: 12px; opacity: 0.8;">Human Resources Department</span>
                </p>
                <p style="margin: 12px 0 0; font-size: 12px; opacity: 0.7;">
                    This application was submitted via careers portal on ${new Date().toLocaleDateString()}
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
        `
    });

    // Send Mail by hr@vicanalytica.com

    if (emailRes.error) {
      console.error('Resend error:', emailRes.error);
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ successfull: "Yes" })

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}