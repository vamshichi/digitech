import Link from "next/link"
import PartnershipEnquiryForm from "@/app/partners/PartnershipEnquiryForm"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Partners</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Partners</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-xl text-gray-600 text-center">To Be Announced</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Partner With Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Showcase your brand to a global audience of tech leaders and innovators</li>
            <li>Connect with potential clients and partners in the digital technology sector</li>
            <li>Gain valuable insights into emerging trends and market demands</li>
            <li>Demonstrate thought leadership through speaking opportunities</li>
            <li>Access exclusive networking events with industry decision-makers</li>
            <li>Benefit from extensive media coverage and promotional opportunities</li>
            <li>Contribute to shaping the future of digital technology</li>
            <li>Engage with a diverse audience of professionals, from startups to enterprises</li>
            <li>Leverage our platform to launch new products or services</li>
            <li>Align your brand with cutting-edge innovation and digital transformation</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Technologies Showcased</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Solutions</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Cloud Computing</li>
                <li>Digital Transformation</li>
                <li>ERP Systems</li>
                <li>Business Intelligence</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Management</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Big Data Analytics</li>
                <li>Data Governance</li>
                <li>Data Visualization</li>
                <li>Data Integration</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cybersecurity</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Network Security</li>
                <li>Cloud Security</li>
                <li>Identity and Access Management</li>
                <li>Threat Intelligence</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI & Big Data</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Predictive Analytics</li>
                <li>Computer Vision</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hardware, Satellite & Robotics</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>IoT Devices</li>
                <li>Satellite Communications</li>
                <li>Autonomous Systems</li>
                <li>Robotics and Automation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partnership Enquiry</h2>
          <PartnershipEnquiryForm />
        </section>
      </div>
    </div>
  )
}

