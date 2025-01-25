import Link from "next/link";
import {
  Download,
  MapPin,
  Calendar,
  Users,
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Briefcase,
  Leaf,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-300 to-purple-400 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-12">
          About Future DigiTech Summit 2025
        </h1>

        <section className="mb-14 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">Introduction</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            The Future DigiTech Summit 2025 is a premier gathering of technology leaders, innovators, and visionaries.
            This two-day event focuses on exploring cutting-edge digital technologies and their impact on various
            industries. Our goal is to foster collaboration, inspire innovation, and provide insights into the future of
            the digital landscape.
          </p>
        </section>

        <section className="mb-14 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">Why Malaysia</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: MapPin, text: "Strategic location in the heart of Southeast Asia" },
              { icon: TrendingUp, text: "Rapidly growing tech ecosystem and startup scene" },
              { icon: Briefcase, text: "Government support for digital transformation initiatives" },
              { icon: Globe, text: "Diverse and multicultural environment fostering global perspectives" },
              { icon: Users, text: "State-of-the-art conference facilities and infrastructure" },
              { icon: Leaf, text: "Rich cultural heritage and tourist attractions for attendees to explore" },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon className="text-purple-600 mr-4 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-lg text-gray-800">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">Summit Highlights</h2>
          <ul className="space-y-5">
            {[
              "Keynote speeches from world-renowned tech leaders and innovators",
              "Interactive panel discussions on pressing industry challenges",
              "Hands-on workshops and tech demonstrations",
              "Networking sessions with industry peers and potential collaborators",
              "Startup pitch competitions showcasing emerging technologies",
              "Exhibition area featuring the latest products and services",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Zap className="text-purple-600 mr-4 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-lg text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">Event Format</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            The Future DigiTech Summit 2025 is structured to maximize learning, networking, and collaboration
            opportunities:
          </p>
          <ul className="space-y-5">
            {[
              { icon: Calendar, text: "Day 1: Opening ceremony, keynote speeches, and panel discussions" },
              { icon: Users, text: "Day 2: Workshops, tech demonstrations, and startup pitch competition" },
              { icon: Globe, text: "Both days: Ongoing exhibition, networking breaks, and themed lunch sessions" },
              { icon: Zap, text: "Evening: Gala dinner and awards ceremony (Day 2)" },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon className="text-purple-600 mr-4 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-lg text-gray-800">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">Key Topics of Discussion</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <item.icon className="text-purple-600 mr-4 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-lg text-gray-800">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-700 rounded-3xl p-10 shadow-2xl text-white">
          <h2 className="text-3xl font-semibold mb-6">Ready to Learn More?</h2>
          <p className="text-lg mb-8">
            Download our comprehensive brochure and detailed agenda to get a full overview of the Future DigiTech Summit
            2025.
          </p>
          <Link
            href="/brochure-request"
            className="inline-flex items-center bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download className="mr-3" />
            Download Brochure & Agenda
          </Link>
        </section>
      </div>
    </div>
  );
}
