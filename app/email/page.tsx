"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BrevoWidget from "./Document";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(""); // Clear error on change
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Chandan Portfolio",
          from_email: form.email,
          to_email: "tantichandan@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", response);
      setLoading(false);
      alert("Thank you! I will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setLoading(false);
      setError(error.text || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-12 bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 py-4 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Drop us a message, and we'll get back to you soon.
          </p>
        </div>
        <div className="flex flex-col lg:justify-center lg:items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-2xl"></div>
            <form ref={formRef} onSubmit={handleSubmit} className="relative bg-blue-50 rounded-lg p-8 shadow-lg">
              {error && <div className="mb-4 text-red-500">{error}</div>}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <BrevoWidget />
    </section>
  );
};

export default Contact;
