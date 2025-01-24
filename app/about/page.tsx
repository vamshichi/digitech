import Link from "next/link"
import { Download, MapPin, Calendar, Users, Zap, Globe, TrendingUp, Shield, Briefcase, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About Future DigiTech Summit 2025</h1>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The Future DigiTech Summit 2025 is a premier gathering of technology leaders, innovators, and visionaries.
            This two-day event focuses on exploring cutting-edge digital technologies and their impact on various
            industries. Our goal is to foster collaboration, inspire innovation, and provide insights into the future of
            the digital landscape.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Malaysia</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: MapPin, text: "Strategic location in the heart of Southeast Asia" },
              { icon: TrendingUp, text: "Rapidly growing tech ecosystem and startup scene" },
              { icon: Briefcase, text: "Government support for digital transformation initiatives" },
              { icon: Globe, text: "Diverse and multicultural environment fostering global perspectives" },
              { icon: Users, text: "State-of-the-art conference facilities and infrastructure" },
              { icon: Leaf, text: "Rich cultural heritage and tourist attractions for attendees to explore" },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Summit Highlights</h2>
          <ul className="space-y-3">
            {[
              "Keynote speeches from world-renowned tech leaders and innovators",
              "Interactive panel discussions on pressing industry challenges",
              "Hands-on workshops and tech demonstrations",
              "Networking sessions with industry peers and potential collaborators",
              "Startup pitch competitions showcasing emerging technologies",
              "Exhibition area featuring the latest products and services",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Zap className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Event Format</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Future DigiTech Summit 2025 is structured to maximize learning, networking, and collaboration
            opportunities:
          </p>
          <ul className="space-y-3">
            {[
              { icon: Calendar, text: "Day 1: Opening ceremony, keynote speeches, and panel discussions" },
              { icon: Users, text: "Day 2: Workshops, tech demonstrations, and startup pitch competition" },
              { icon: Globe, text: "Both days: Ongoing exhibition, networking breaks, and themed lunch sessions" },
              { icon: Zap, text: "Evening: Gala dinner and awards ceremony (Day 2)" },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Key Topics of Discussion</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Zap, text: "Artificial Intelligence and Machine Learning advancements" },
              { icon: Shield, text: "Blockchain technology and its applications beyond cryptocurrency" },
              { icon: Globe, text: "Internet of Things (IoT) and smart city innovations" },
              { icon: TrendingUp, text: "5G and future connectivity solutions" },
              { icon: Shield, text: "Cybersecurity in the age of quantum computing" },
              { icon: Briefcase, text: "Digital transformation strategies for traditional industries" },
              { icon: Users, text: "The future of work and digital skills development" },
              { icon: Leaf, text: "Sustainable technology and green tech innovations" },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 text-center bg-blue-50 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Learn More?</h2>
          <p className="text-gray-700 mb-6">
            Download our comprehensive brochure and detailed agenda to get a full overview of the Future DigiTech Summit
            2025.
          </p>
          <Link
            href="/brochure-request"
            className="inline-flex items-center bg-blue-800 text-white text-xl font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download className="mr-2" />
            Download Brochure & Agenda
          </Link>
        </section>
      </div>
    </div>
  )
}

