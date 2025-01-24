import Link from "next/link"

export default function DelegatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Delegates</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Will Attend?</h2>
          <p className="text-gray-600 mb-4">
            The Future DigiTech Summit 2025 brings together a diverse group of professionals from various sectors of the
            tech industry and beyond. Our attendees include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>C-level executives and decision-makers from Fortune 500 companies</li>
            <li>Founders and leaders of innovative startups and scale-ups</li>
            <li>IT directors and managers driving digital transformation</li>
            <li>Data scientists and AI specialists pushing the boundaries of machine learning</li>
            <li>Cybersecurity experts safeguarding the digital frontier</li>
            <li>Software developers and engineers building the technologies of tomorrow</li>
            <li>Product managers shaping the future of tech products</li>
            <li>Venture capitalists and investors looking for the next big thing</li>
            <li>Government officials and policymakers involved in tech regulation</li>
            <li>Academics and researchers at the forefront of technological advancements</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Attend?</h2>
          <p className="text-gray-600 mb-4">
            Attending the Future DigiTech Summit 2025 offers numerous benefits for professionals in the tech industry
            and related fields:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Gain insights from world-renowned speakers and industry leaders</li>
            <li>Stay ahead of the curve with the latest trends and innovations in digital technology</li>
            <li>Network with peers, potential partners, and clients from around the globe</li>
            <li>Participate in hands-on workshops and interactive sessions</li>
            <li>Explore cutting-edge products and services in the exhibition area</li>
            <li>Engage in thought-provoking panel discussions on pressing industry issues</li>
            <li>Discover investment opportunities and emerging startups</li>
            <li>Learn about best practices and successful digital transformation strategies</li>
            <li>Contribute to discussions shaping the future of the tech industry</li>
            <li>Earn continuing education credits (CEUs) for professional development</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Join Us?</h2>
          <p className="text-gray-600 mb-6">
            Don&apos;t miss this opportunity to be part of the most exciting tech event of the year. Download our brochure to
            learn more about the summit agenda and registration details.
          </p>
          <Link
            href="/brochure-request"
            className="inline-block bg-blue-600 text-white text-xl font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Download Brochure & Agenda
          </Link>
        </section>
      </div>
    </div>
  )
}

