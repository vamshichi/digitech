// import Link from "next/link"
import PartnershipEnquiryForm from "@/app/partners/PartnershipEnquiryForm";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Become Our Partner
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h2>
          <div className="bg-white shadow-lg rounded-xl p-8 flex items-center justify-center">
            <p className="text-xl text-gray-500 font-medium">To Be Announced</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Partner With Us?</h2>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <ul className="list-disc list-inside text-gray-600 space-y-4 text-lg">
              <li>Showcase your brand to a global audience of tech leaders and innovators.</li>
              <li>Connect with potential clients and partners in the digital technology sector.</li>
              <li>Gain valuable insights into emerging trends and market demands.</li>
              <li>Demonstrate thought leadership through speaking opportunities.</li>
              <li>Access exclusive networking events with industry decision-makers.</li>
              <li>Benefit from extensive media coverage and promotional opportunities.</li>
              <li>Contribute to shaping the future of digital technology.</li>
              <li>Engage with a diverse audience of professionals, from startups to enterprises.</li>
              <li>Leverage our platform to launch new products or services.</li>
              <li>Align your brand with cutting-edge innovation and digital transformation.</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Technologies Showcased</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Solutions",
                items: ["Cloud Computing", "Digital Transformation", "ERP Systems", "Business Intelligence"],
              },
              {
                title: "Data Management",
                items: ["Big Data Analytics", "Data Governance", "Data Visualization", "Data Integration"],
              },
              {
                title: "Cybersecurity",
                items: ["Network Security", "Cloud Security", "Identity and Access Management", "Threat Intelligence"],
              },
              {
                title: "AI & Big Data",
                items: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
              },
              {
                title: "Hardware, Satellite & Robotics",
                items: ["IoT Devices", "Satellite Communications", "Autonomous Systems", "Robotics and Automation"],
              },
            ].map((tech, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tech.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Partnership Enquiry</h2>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <PartnershipEnquiryForm />
          </div>
        </section>
      </div>
    </div>
  );
}
