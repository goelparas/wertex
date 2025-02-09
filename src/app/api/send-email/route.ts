import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { companyName, email, countryCode, industry, phoneNumber } = await req.json();

    if (!companyName || !email || !industry || !industry || !phoneNumber || !countryCode) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Use STARTTLS instead of SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact@wertex.in", // Replace with your recipient email
      subject: `New Message from ${companyName}`,
      text:`CompanyName: ${companyName}\nEmail: ${email}\nIndustry: ${industry} \nphoneNumber ${countryCode}${phoneNumber}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
