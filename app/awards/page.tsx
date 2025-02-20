"use client";
import React, { useState } from "react";
import { HeroSection } from "../components/awards/Herosection";
import AwardForm from "../components/awards/AwardForm";


const Page: React.FC = () => {
  // State to track which section is visible
  const [visibleSection, setVisibleSection] = useState<
    "guidelines" | "jury" | "categories" | "leaders" | null
  >(null);

  // Inline styles for buttons
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    marginRight: "10px",
    marginBottom: "20px",
  };

  // Inline styles for active button
  const activeButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            About Tech Visionary Awards 2025
          </h2>
          <p className="text-lg text-gray-700">
            The Tech Visionary Awards 2025 is a premier platform that honors
            trailblazers and innovators in the technology landscape. As
            industries rapidly evolve in the digital age, we celebrate the
            pioneers—technology solution providers and industry leaders—who are
            shaping the future through innovation, creativity, and technological
            excellence. This prestigious event recognizes transformative
            solutions and forward-thinking leadership that drive digital
            advancements across industries. Join us as we spotlight the
            champions of the tech revolution!
          </p>
        </section>

        <div className="flex flex-wrap justify-center mb-12">
          <button
            onClick={() =>
              setVisibleSection(
                visibleSection === "guidelines" ? null : "guidelines"
              )
            }
            style={visibleSection === "guidelines" ? activeButtonStyle : buttonStyle}
          >
            {visibleSection === "guidelines"
              ? "Hide Entry Guidelines"
              : "Show Entry Guidelines"}
          </button>

          <button
            onClick={() =>
              setVisibleSection(visibleSection === "jury" ? null : "jury")
            }
            style={visibleSection === "jury" ? activeButtonStyle : buttonStyle}
          >
            {visibleSection === "jury"
              ? "Hide Judging & Jury Panel"
              : "Show Judging & Jury Panel"}
          </button>

          <button
            onClick={() =>
              setVisibleSection(
                visibleSection === "categories" ? null : "categories"
              )
            }
            style={visibleSection === "categories" ? activeButtonStyle : buttonStyle}
          >
            {visibleSection === "categories"
              ? "Hide Nomination For Technology Solution Providers"
              : "Show Nomination For Technology Solution Providers"}
          </button>

          <button
            onClick={() =>
              setVisibleSection(visibleSection === "leaders" ? null : "leaders")
            }
            style={visibleSection === "leaders" ? activeButtonStyle : buttonStyle}
          >
            {visibleSection === "leaders"
              ? "Hide Nomination For Industry Leaders & Enterprises"
              : "Show Nomination For Industry Leaders & Enterprises"}
          </button>
        </div>

        {visibleSection === "guidelines" && (
          <section className="mb-12 p-6 border rounded bg-white shadow">
            <h3 className="text-2xl font-bold mb-4">Entry Guidelines</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Eligibility:</strong> Open to technology companies,
                enterprises, startups, and industry leaders driving innovation
                and digital excellence.
              </li>
              <li>
                <strong>Submission:</strong> All nominations must be submitted
                through our official portal with supporting documents, case
                studies, or testimonials.
              </li>
              <li>
                <strong>Deadline:</strong> Ensure all entries are submitted by
                25th April 2025 for consideration.
              </li>
              <li>
                <strong>Evaluation Criteria:</strong> Entries will be judged
                based on innovation, impact, scalability, and industry
                contribution.
              </li>
              <li>
                <strong>Multiple Entries:</strong> Participants can submit
                entries in multiple categories, provided they meet the criteria
                for each.
              </li>
              <li>
                <strong>Verification:</strong> All information provided should
                be accurate and verifiable.
              </li>
              <li>
                <strong>Confidentiality:</strong> Proprietary information will
                be kept confidential and used strictly for evaluation purposes.
              </li>
            </ul>
          </section>
        )}

        {visibleSection === "jury" && (
          <section className="mb-12 p-6 border rounded bg-white shadow">
            <h3 className="text-2xl font-bold mb-4">Judging & Jury Panel</h3>
            <p className="text-gray-700">
              The Tech Visionary Awards 2025 boasts an esteemed panel of industry
              veterans, technology pioneers, and thought leaders. Our jury
              comprises experts from diverse sectors, including AI, cybersecurity,
              cloud computing, fintech, and enterprise technology. With an in-depth
              understanding of emerging trends, they meticulously assess each
              nomination based on innovation, impact, and execution excellence.
              Their insights and expertise ensure a fair and transparent selection
              of the most deserving winners.
            </p>
          </section>
        )}

        {visibleSection === "categories" && (
          <section className="mb-12 p-6 border rounded bg-white shadow">
            <h3 className="text-2xl font-bold mb-4">
              Nomination For Technology Solution Providers
            </h3>
            <p className="text-gray-700 mb-4">
              Nominate your company or solution in any of the following categories
              to gain industry-wide recognition:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Best AI &amp; Automation Solution</strong> – Pioneering AI-driven innovation.
              </li>
              <li>
                <strong>Cloud Innovation Excellence Award</strong> – Transformational cloud solutions.
              </li>
              <li>
                <strong>Cybersecurity Pioneer of the Year</strong> – Advanced security and data protection.
              </li>
              <li>
                <strong>Best Digital Transformation Solution</strong> – Revolutionizing business processes.
              </li>
              <li>
                <strong>IoT Breakthrough Award</strong> – Cutting-edge IoT implementations.
              </li>
              <li>
                <strong>FinTech Innovation of the Year</strong> – Leading financial technology solutions.
              </li>
              <li>
                <strong>Smart Mobility &amp; Transportation Tech Award</strong> – Innovations in transportation &amp; logistics.
              </li>
              <li>
                <strong>SaaS Solution of the Year</strong> – Game-changing SaaS platform.
              </li>
              <li>
                <strong>Emerging Tech Startup of the Year</strong> – Recognizing a ground-breaking startup that is revolutionizing the tech industry.
              </li>
              <li>
                <strong>Best Customer Experience Tech Solution</strong> – Enhancing customer engagement through technology.
              </li>
            </ol>
            <h4 className="text-xl font-bold mb-2">Nomination Requirements:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>A detailed description of the product/solution.</li>
              <li>Case studies or success stories.</li>
              <li>Testimonials from clients/users.</li>
              <li>Supporting documents showcasing impact and effectiveness.</li>
            </ul>
            <p className="text-gray-700">
              To nominate now, please email to{" "}
              <a
                href="mailto:tarannu.s@tasconmedia.com"
                className="text-blue-600 underline"
              >
                tarannu.s@tasconmedia.com
              </a>
            </p>
          </section>
        )}

        {visibleSection === "leaders" && (
          <>
            <section className="mb-8 p-6 border rounded bg-white shadow">
              <h3 className="text-2xl font-bold mb-4">
                Nomination For Industry Leaders &amp; Enterprises
              </h3>
              <p className="text-gray-700 mb-4">
                Recognizing business leaders, innovators, and enterprises championing
                digital transformation:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Digital Transformation Leader of the Year</strong> – Visionary leadership in tech transformation.
                </li>
                <li>
                  <strong>Innovative CIO/CTO of the Year</strong> – Outstanding IT leadership.
                </li>
                <li>
                  <strong>Best Data &amp; Analytics Strategy Award</strong> – Leveraging data for business excellence.
                </li>
                <li>
                  <strong>Future-Ready Enterprise Award</strong> – Driving digital adoption at scale.
                </li>
                <li>
                  <strong>Sustainability Tech Champion</strong> – Championing eco-friendly technology.
                </li>
                <li>
                  <strong>Cybersecurity Excellence Award</strong> – Best industry-wide security initiative.
                </li>
                <li>
                  <strong>Best Smart Manufacturing Initiative</strong> – Industry 4.0 and smart manufacturing.
                </li>
                <li>
                  <strong>AI &amp; Automation Adoption Champion</strong> – AI-driven business transformation.
                </li>
                <li>
                  <strong>Customer-Centric Digital Strategy Award</strong> – Enhancing customer experience through digital innovation.
                </li>
                <li>
                  <strong>Best Use of Emerging Technologies Award</strong> – AR/VR, blockchain, and quantum computing excellence.
                </li>
              </ol>
              <h4 className="text-xl font-bold mt-6 mb-2">Nomination Requirements:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Profile of the nominee/enterprise.</li>
                <li>Summary of achievements and impact in technology.</li>
                <li>Industry contributions and leadership initiatives.</li>
                <li>Testimonials and supporting case studies.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To nominate now, please email to{" "}
                <a
                  href="mailto:tarannu.s@tasconmedia.com"
                  className="text-blue-600 underline"
                >
                  tarannu.s@tasconmedia.com
                </a>
              </p>
            </section>

            {/* Separate Nomination Form for Industry Leaders & Enterprises */}
            <div className="mb-12 p-6 border rounded bg-white shadow">
              <h4 className="text-2xl font-bold mb-4 text-center">
                Submit Your Nomination
              </h4>
              {/* <AwardForm /> */}
            </div>
          </>
        )}
      </div>
      <AwardForm />
    </div>

    
  );
};

export default Page;
