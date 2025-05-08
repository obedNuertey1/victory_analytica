import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

export function GET() {
    return NextResponse.json({ message: 'Hello from App Router!' });
}

export async function POST(request: NextRequest) {
    try {
        let data = await request.json();
        const year = new Date().getFullYear();
        const resend = new Resend("re_PgX1P2gZ_35z7e82VLFrEEaJUkCx96Jia");
        resend.emails.send({
            from: 'contact@victoryanalytica.com',
            to: 'onuertey1997@gmail.com',
            subject: 'Interested in working with you',
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Client Inquiry</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff;">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 30px; background-color: #2c3e50; color: white; text-align: center;">
                            <h1 style="margin: 0; font-size: 24px;">New Client Inquiry</h1>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                        <strong>Full Name:</strong> ${data.fullName}
                                    </td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                        <strong>Company:</strong> ${data.companyName}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                        <strong>Email:</strong> <a href="mailto:${data.emailAddress}">${data.emailAddress}</a>
                                    </td>
                                </tr>
                                
                                <!-- Service Details -->
                                <tr>
                                    <td colspan="2" style="padding: 20px 0 10px 0;">
                                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                                            <h3 style="margin: 0 0 15px 0; color: #2c3e50;">Service Details</h3>
                                            <p style="margin: 5px 0;"><strong>Service Tier:</strong> ${data.serviceTier}</p>
                                            <p style="margin: 5px 0;"><strong>Investment Range:</strong> ${data.investmentRange}</p>
                                            <p style="margin: 5px 0;"><strong>Priority Compliance:</strong> ${data.priorityComplianceNeeds}</p>
                                        </div>
                                    </td>
                                </tr>

                                <!-- Custom Message -->
                                <tr>
                                    <td colspan="2" style="padding: 20px 0 10px 0;">
                                        <h3 style="margin: 0 0 15px 0; color: #2c3e50;">Custom Message</h3>
                                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db;">
                                            <p style="margin: 0; color: #555555;">Anything can go in here okay.</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px; background-color: #2c3e50; color: white; text-align: center;">
                            <p style="margin: 0; font-size: 12px;">© ${year} Victory Analytica & Security LLC. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `
        });
        return NextResponse.json({ received: data })
    } catch (e) {
        console.log(e);
        throw new Error("Failed to send message");
    }
}