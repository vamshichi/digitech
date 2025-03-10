import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, company, email, contact } = await req.json()

    // Validate input fields
    if (!name || !company || !email || !contact) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Restrict email to business emails (No Gmail, Yahoo, etc.)
    if (email.endsWith("@gmail.com") || email.endsWith("@yahoo.com") || email.endsWith("@outlook.com")) {
      return NextResponse.json({ error: "Please enter a business email ID" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: "zfie hmte iyxt wyto", // ⚠️ Still not safe, but keeping as per your request..
      },
    })

    const mailOptions = {
      from: "chvamshi03@gmail.com",
      to: "digital.maxpo@gmail.com, tarannum.s@tasconmedia.com",
      subject: "New Brochure Request",
      text: `
        A new brochure request was submitted.
        
        📌 Name: ${name}
        🏢 Company: ${company}
        📧 Email: ${email}
        📞 Contact: ${contact}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Brochure request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error processing brochure request" }, { status: 500 })
  }
}
