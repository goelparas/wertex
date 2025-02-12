import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Add this configuration to handle Amplify's restrictions
export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const { companyName, email, countryCode, industry, phoneNumber } = await req.json();

    // Validation
    if (!companyName || !email || !industry || !phoneNumber || !countryCode) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Configure transporter for AWS Amplify compatibility
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Should be 'smtpout.secureserver.net' for GoDaddy
      port: Number(process.env.EMAIL_PORT) || 587, // Force port 587
      secure: false, // Required for STARTTLS
      requireTLS: true, // Enforce TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3', // Sometimes needed for GoDaddy
        rejectUnauthorized: false // Use only if you get certificate errors
      }
    });

    // Email content
    const mailOptions = {
      from: `"Website Form" <${process.env.EMAIL_USER}>`, // Better format
      to: "contact@wertex.in",
      subject: `New Message from ${companyName}`,
      html: `<b>New submission:</b>
        <p>Company: ${companyName}</p>
        <p>Email: ${email}</p>
        <p>Industry: ${industry}</p>
        <p>Phone: ${countryCode}${phoneNumber}</p>`, // HTML format for better readability
      text: `Company: ${companyName}
Email: ${email}
Industry: ${industry}
Phone: ${countryCode}${phoneNumber}`
    };

    // Send email with timeout
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('SMTP timeout')), 10000)
      )
    ]);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });

  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}