import Link from "next/link";

export default function DelegatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-purple-800 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">
          Future DigiTech Summit 2025 - Delegates
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-200 mb-6">Who Will Attend?</h2>
          <p className="text-lg mb-6">
            The Future DigiTech Summit 2025 will gather key players from various industries who are shaping the future of technology. Our delegates include:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>C-level executives and decision-makers from Fortune 500 companies</li>
            <li>Founders and leaders of innovative startups</li>
            <li>IT directors and managers driving digital transformation</li>
            <li>Data scientists and AI specialists</li>
            <li>Cybersecurity experts</li>
            <li>Software developers and engineers</li>
            <li>Product managers shaping future tech products</li>
            <li>Venture capitalists and investors</li>
            <li>Government officials and policymakers</li>
            <li>Academics and researchers in tech advancements</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-200 mb-6">Why Attend?</h2>
          <p className="text-lg mb-6">
            The Future DigiTech Summit 2025 provides an unmatched platform for learning, networking, and exploring the latest digital innovations:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>Hear from world-renowned speakers and industry leaders</li>
            <li>Stay ahead with the latest tech trends</li>
            <li>Network with global peers and potential partners</li>
            <li>Participate in hands-on workshops</li>
            <li>Explore cutting-edge products and services</li>
            <li>Engage in thought-provoking discussions</li>
            <li>Discover investment opportunities and startups</li>
            <li>Learn best practices in digital transformation</li>
            <li>Earn continuing education credits (CEUs)</li>
          </ul>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-blue-200 mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8">
            Don’t miss this opportunity to be part of one of the most exciting tech events of the year. Download our brochure to learn more about the summit agenda and registration details.
          </p>
          <Link
            href="/brochure-request"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-semibold py-4 px-10 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gradient-to-l"
          >
            Download Brochure & Agenda
          </Link>
        </section>
      </div>
    </div>
  );
}
