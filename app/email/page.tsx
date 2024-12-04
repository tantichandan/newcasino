"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
    setSuccess(false);
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+$/.test(email);

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
      await emailjs.send(
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

      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/Background3.jpeg')`,
      }}
    >
      <div
        className="w-full max-w-lg p-8"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <h2 className="text-3xl font-bold text-gray-500 mb-6 text-center">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">Message sent successfully!</div>}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border bg-gray-100 border-gray-800 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border bg-gray-100 border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border bg-gray-100 border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white font-medium py-3 px-6 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
