import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chvamshi03@gmail.com",
      pass: 'zfie hmte iyxt wyto',
    },
  });

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
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Brochure request sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending brochure request" });
  }
}
