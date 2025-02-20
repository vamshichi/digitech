"use client";
import React, { useState, FormEvent } from "react";

const AwardForm: React.FC = () => {
  const [category, setCategory] = useState<string>("tech");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    nominationDetails: "",
    acceptedTerms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    let newValue: string | boolean = value;
    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    }
    setFormData((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if terms are accepted
    if (!formData.acceptedTerms) {
      setMessage("Please accept the Terms and Conditions.");
      setIsSuccess(false);
      return;
    }

    setSubmitting(true);
    setMessage("");

    // Determine the API endpoint based on category
    const endpoint = category === "industry" ? "/api/industry-leaders" : "/api/send-email";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("Nomination submitted successfully!");
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          organization: "",
          nominationDetails: "",
          acceptedTerms: false,
        });
      } else {
        setMessage("Submission failed. Please try again later.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again later.");
      setIsSuccess(false);
    }
    setSubmitting(false);
  };

  return (
    <main className="container mx-auto p-6">
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">
          Tech Visionary Awards 2025 - Nomination Form
        </h1>
      </section>

      <form onSubmit={handleSubmit}>
        {/* Category Selection */}
        <section className="my-6">
          <label className="text-lg font-semibold">Select Nomination Type:</label>
          <select
            id="category"
            className="ml-4 p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="tech">Technology Solution Providers</option>
            <option value="industry">
              Industry Leaders &amp; Enterprises
            </option>
          </select>
        </section>

        {/* Form Sections */}
        <section className="my-6 border p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">
            {category === "tech"
              ? "For Technology Solution Providers"
              : "For Industry Leaders & Enterprises"}
          </h2>
          <p className="text-lg font-semibold">Nominee Details:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
              placeholder="Company / Individual Name"
            />
            <input
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded"
              placeholder="Email"
              type="email"
            />
            <input
              id="organization"
              value={formData.organization}
              onChange={handleChange}
              className="border p-2 rounded"
              placeholder="Organization"
            />
          </div>

          <p className="mt-4 font-semibold">Nomination Details:</p>
          <textarea
            id="nominationDetails"
            value={formData.nominationDetails}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-2"
            placeholder="Brief Description, Key Innovations, Case Studies, etc."
            rows={4}
          />

          {/* Terms & Conditions Fields */}
          <div className="mt-4 flex items-center">
            <input
              id="acceptedTerms"
              type="checkbox"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="acceptedTerms" className="text-gray-700">
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <p className="mt-4">
            By submitting a nomination, you agree to pay a nomination fee of{" "}
            {category === "tech" ? "USD 299" : "USD 199"}.
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 rounded bg-blue-800 px-4 py-2 text-white w-full"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
          {message && (
            <p
              className={`mt-4 text-center ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </section>
      </form>
    </main>
  );
};

export default AwardForm;
