import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "./components/Navbar";
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
  title: "Future DigiTech Summit & Tech Visionary Awards 2025",
  description:
    "Digitech & Tech Visionary Awards brings global tech leaders to explore AI, Web3, blockchain & FinTech as Malaysia shapes the future on May 28-29, 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Canonical URL for digitech*/}
        <link rel="canonical" href="https://www.futuredigitechsummit.com/" />

        {/* Open Graph Meta Tags (for Social Media) */}
        <meta property="og:title" content="Future DigiTech Summit & Tech Visionary Awards 2025" />
        <meta property="og:description" content="Digitech & Tech Visionary Awards brings global tech leaders to explore AI, Web3, blockchain & FinTech as Malaysia shapes the future on May 28-29, 2025" />
        <meta property="og:image" content="https://www.futuredigitechsummit.com/android-chrome-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:url" content="https://www.futuredigitechsummit.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Future DigiTech Summit & Awards 2025" />
        <meta name="twitter:description" content="Digitech & Tech Visionary Awards brings global tech leaders to explore AI, Web3, blockchain & FinTech as Malaysia shapes the future on May 28-29, 2025" />
        <meta name="twitter:image" content="https://www.futuredigitechsummit.com/android-chrome-512x512.png" />

        {/* Structured Data (SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Future DigiTech Summit",
            url: "https://www.futuredigitechsummit.com/",
            logo: "https://www.futuredigitechsummit.com/android-chrome-512x512.png",
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />

        {/* Google Analytics Script */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-B18EZ2KERM" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B18EZ2KERM');
          `}
        </Script>
      </body>
    </html>
  );
}
