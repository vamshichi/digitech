import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: "zfie hmte iyxt wyto", // ⚠️ Don't expose credentials! Use environment variables instead.
      },
    })

    const mailOptions = {
      from: "chvamshi03@gmail.com",
      to: "digital.maxpo@gmail.com, tarannum.s@tasconmedia.com",
      subject: "New Brochure Request",
      text: `A new brochure request was made by: ${email}`,
      // attachments: [
      //   {
      //     filename: "brochure.pdf",
      //     path: "./public/brochure.pdf", // Ensure the file exists in this path
      //   },
      // ],
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Brochure request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending brochure request" }, { status: 500 })
  }
}
