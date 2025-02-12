import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const { companyName, email, countryCode, industry, phoneNumber } = await req.json();

    if (!companyName || !email || !industry || !phoneNumber || !countryCode) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // AWS Amplify-compatible configuration
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // smtpout.secureserver.net
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.NODE_ENV === 'development' ? true : false, // SSL for local, STARTTLS for Amplify
      requireTLS: true,
      auth: {
        user: "contact@wertex.in",
        pass: "Wertex@123",
      },
      tls: {
        ciphers: 'TLSv1.2',
        rejectUnauthorized: false // Temporary for testing
      }
    });

    const mailOptions = {
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: "contact@wertex.in",
      subject: `New Message from ${companyName}`,
      html: `<b>New submission:</b>
        <p>Company: ${companyName}</p>
        <p>Email: ${email}</p>
        <p>Industry: ${industry}</p>
        <p>Phone: ${countryCode}${phoneNumber}</p>`,
      text: `Company: ${companyName}
Email: ${email}
Industry: ${industry}
Phone: ${countryCode}${phoneNumber}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}