import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Users, Zap, Globe, TrendingUp } from "lucide-react";
import Tascon from '@/public/images/icon.png';
import { HeroSection } from "./components/Herosection";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Future DigiTech Summit & Tech Visionary Awards 2025",
    "startDate": "2025-05-28T09:00:00+00:00",
    "endDate": "2025-05-29T17:00:00+00:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Pullman Kuala Lumpur City Centre - Hotel & Residences",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4, Jalan Conlay",
        "addressLocality": "Kuala Lumpur",
        "postalCode": "50450",
        "addressCountry": "Malaysia"
      }
    },
    "image": "https://www.futuredigitechsummit.com/event-image.jpg",
    "description": "Join top tech leaders at Future DigiTech Summit 2025 to explore the latest trends in AI, Blockchain, and more.",
    "organizer": {
      "@type": "Organization",
      "name": "TASCON Media",
      "url": "https://www.futuredigitechsummit.com"
    }
  };
  

  return (
    <main className="bg-gradient-to-r from-blue-100 to-purple-100">
      <Head>
        <title>Future DigiTech Summit 2025 | TASCON Media</title>
        <meta name="description" content="Join industry leaders and tech pioneers at Future DigiTech Summit 2025 in Kuala Lumpur for insightful discussions and networking." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Organizer Section */}
      <section className="py-16 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-10 text-center">
            Organized by
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
            <Image
              src={Tascon}
              alt="TASCON Group Logo"
              width={300}
              height={150}
              priority
              className="h-24 w-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
            <div className="text-center md:text-left md:ml-6">
              <span className="block text-3xl font-bold text-gray-900">TASCON Media</span>
              <p className="text-lg text-gray-600 mt-3 max-w-md">
                Elevate Your Business with TASCON
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Summit Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">
            About the Summit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Event Overview Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-blue-700 mb-6">Event Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join us at the Future DigiTech Summit 2025 in Kuala Lumpur, where industry leaders, innovators, and visionaries come together
                to explore the latest trends and technologies shaping our digital future. This two-day event promises
                insightful discussions, hands-on workshops, and unparalleled networking opportunities.
              </p>
            </div>

            {/* Why Attend Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-blue-700 mb-6">Why Attend?</h3>
              <ul className="space-y-6">
                {[
                  { icon: Users, text: "Network with industry leaders and innovators" },
                  { icon: Zap, text: "Gain insights from world-class speakers and experts" },
                  { icon: Globe, text: "Explore cutting-edge technologies and solutions" },
                  { icon: TrendingUp, text: "Stay ahead in the evolving digital landscape" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="text-purple-600 mr-4 mt-1 w-6 h-6 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-100 via-purple-50 to-purple-100 rounded-2xl shadow-xl mt-16 mx-auto max-w-5xl">
        <div className="px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t miss this opportunity to be part of the most innovative tech summit of the year. Secure your spot now and join the pioneers shaping tomorrow!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-all duration-300 transform"
          >
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
}
