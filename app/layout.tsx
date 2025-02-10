import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script" // Add this import
import "./globals.css";
import {Navbar} from "./components/Navbar";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future DigiTech Summit 2025",
  description: "Empowering Innovation & Transforming the Digital Frontier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

         {/* Google Analytics Script */}
         <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZB3LTL3DQT" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZB3LTL3DQT');
          `}
        </Script>
      </body>
    </html>
  );
}
