import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

export function GET() {
    return NextResponse.json({ message: 'Hello from App Router!' });
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const year = new Date().getFullYear();
        const websiteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vicanalytica.com';
        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
        const result = await resend.emails.send({
            from: 'Vicanalytica|Contact <contact@vicanalytica.com>',
            to: ['strategic@vicanalytica.com', 'onuertey1997@gmail.com'],
            subject: 'Interested in working with you',
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Client Inquiry - Victory Analytica</title>
                    <!-- Open Graph Meta for better link previews -->
                    <meta property="og:title" content="New Client Inquiry">
                    <meta property="og:image" content="${websiteUrl}/images/email-preview-logo.png">
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff;">
                        <!-- Company Logo Header -->
                        <tr>
                            <td style="padding: 25px 20px; text-align: center; background-color: #ffffff;">
                                <a href="${websiteUrl}" style="display: inline-block;">
                                    <img src="${websiteUrl}/images/logo.png" 
                                        alt="Victory Analytica & Security Logo" 
                                        width="180" 
                                        style="display: block; margin: 0 auto; max-width: 180px; height: auto; border: 0;">
                                </a>
                            </td>
                        </tr>

                        <!-- Inquiry Header -->
                        <tr>
                            <td style="padding: 30px; background-color: #2c3e50; color: white; text-align: center;">
                                <h1 style="margin: 0; font-size: 24px; font-weight: 600;">New Client Inquiry</h1>
                            </td>
                        </tr>

                        <!-- Main Content -->
                        <tr>
                            <td style="padding: 30px;">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 15px; line-height: 1.5;">
                                    <!-- Client Details -->
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; width: 50%;">
                                            <strong style="color: #2c3e50;">Full Name:</strong><br>
                                            ${data.fullName}
                                        </td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                            <strong style="color: #2c3e50;">Company:</strong><br>
                                            ${data.companyName || 'Not specified'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="padding: 15px 0; border-bottom: 1px solid #eeeeee;">
                                            <strong style="color: #2c3e50;">Email:</strong><br>
                                            <a href="mailto:${data.emailAddress}" style="color: #3498db; text-decoration: none;">${data.emailAddress}</a>
                                        </td>
                                    </tr>
                                    
                                    <!-- Service Details -->
                                    <tr>
                                        <td colspan="2" style="padding: 25px 0 10px 0;">
                                            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                                                <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 18px;">Service Requirements</h3>
                                                <div style="display: grid; gap: 12px;">
                                                    <div>
                                                        <strong style="color: #3498db;">Service Tier:</strong><br>
                                                        ${data.serviceTier}
                                                    </div>
                                                    <div>
                                                        <strong style="color: #3498db;">Investment Range:</strong><br>
                                                        ${data.investmentRange}
                                                    </div>
                                                    <div>
                                                        <strong style="color: #3498db;">Priority Compliance:</strong><br>
                                                        ${data.priorityComplianceNeeds}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- Custom Message -->
                                    <tr>
                                        <td colspan="2" style="padding: 25px 0 10px 0;">
                                            <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 18px;">Client Message</h3>
                                            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db;">
                                                <p style="margin: 0; color: #444; line-height: 1.6;">
                                                    ${data.emailMessage || 'No additional message provided'}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="padding: 25px; background-color: #2c3e50; color: rgba(255,255,255,0.9); text-align: center;">
                                <p style="margin: 0; font-size: 12px; line-height: 1.5;">
                                    <span style="opacity: 0.8;">Compliance & Security Solutions</span><br>
                                    <span style="font-size: 11px; opacity: 0.7;">This inquiry was received on ${new Date().toLocaleDateString()}</span>
                                    <span style="opacity: 0.8;">© ${year} <a href="${websiteUrl}" style="color: inherit; text-decoration: none;">Victory Analytica & Security LLC</a>. All rights reserved.</span>
                                </p>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>            `
        });

        if(result.error){
            throw new Error("Failed to send message");
        }

        return NextResponse.json({ received: data })
    } catch (e) {
        console.log(e);
        throw new Error("Failed to send message");
    }
}