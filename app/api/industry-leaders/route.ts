// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, nominationDetails, acceptedTerms } = body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: "zfie hmte iyxt wyto",   // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: "chvamshi03@gmail.com",
      to: "info@tasconmedia.com, tarannum.s@tasconmedia.com",
      subject: "New Enquiry from DIGITECH Contact Form",
      html: `
        <h1>Industry Leaders & Enterprises</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Nomination Details:</strong> ${nominationDetails}</p>
        <p><strong>Accepted Terms:</strong> ${acceptedTerms}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Booking submitted successfully and email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit booking or send email." },
      { status: 500 }
    );
  }
}
