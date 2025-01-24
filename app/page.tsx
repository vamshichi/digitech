import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Zap, Globe, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4 leading-tight">
              Future DigiTech Summit 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Empowering Innovation & Transforming the Digital Frontier
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <CalendarDays className="text-teal-600 mr-2" />
                <span className="text-gray-800 font-semibold">28–29 May 2025</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <MapPin className="text-teal-600 mr-2" />
                <span className="text-gray-800 font-semibold">Malaysia</span>
              </div>
            </div>
            <Link
              href="/register"
              className="inline-block bg-blue-800 text-white text-xl font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Register Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero-image.jpg"
              alt="Future DigiTech Summit"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* Organizer Section */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Organized by</h2>
          <div className="flex justify-center items-center">
            <Image
              src="/tascon-group-logo.png"
              alt="TASCON Group Logo"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
            <span className="ml-4 text-2xl font-bold text-gray-900">TASCON Group</span>
          </div>
        </section>

        {/* About the Summit Section */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">About the Summit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Event Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                Join us at the Future DigiTech Summit 2025, where industry leaders, innovators, and visionaries come
                together to explore the latest trends and technologies shaping our digital future. This two-day event
                promises insightful discussions, hands-on workshops, and unparalleled networking opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Why Attend?</h3>
              <ul className="space-y-3">
                {[
                  { icon: Users, text: "Network with industry leaders and innovators" },
                  { icon: Zap, text: "Gain insights from world-class speakers and experts" },
                  { icon: Globe, text: "Explore cutting-edge technologies and solutions" },
                  { icon: TrendingUp, text: "Stay ahead in the evolving digital landscape" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 text-center bg-gray-100 rounded-lg mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of the most innovative tech summit of the year. Secure your spot now!
          </p>
          <Link
            href="/register"
            className="inline-block bg-purple-600 text-white text-xl font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Register Now
          </Link>
        </section>
      </div>
    </main>
  )
}

