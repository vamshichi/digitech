import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EnquiryData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message }: EnquiryData = await req.json();
    
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: 'zfie hmte iyxt wyto',
      },
    });

    const mailOptions = {
      from: "chvamshi03@gmail.com",
      to: "tarunam.s@tasconmedia.com, info@tasconmedia.com",
      subject: "New Partnership Enquiry",
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}