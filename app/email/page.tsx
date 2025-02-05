"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
    subsets: ['latin'],
    display: 'swap',
});

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
          to_name: "TheCasinoLoot",
          from_email: form.email,
          to_email: "contact@thecasinoloot.com",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className={`${playfair.className} text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4`}>
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our casino reviews or need expert guidance? 
            We're here to help you make informed gaming decisions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h2 className={`${playfair.className} text-2xl font-bold text-white mb-6`}>
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email Us</p>
                    <p className="text-sm">support@thecasinoloot.com</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-medium mb-4">Operating Hours</h3>
                  <p className="text-gray-400 text-sm">
                    24/7 Support Available
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-medium mb-4">Response Time</h3>
                  <p className="text-gray-400 text-sm">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  )}
                  
                  {success && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <p className="text-sm font-medium">Message sent successfully!</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-gray-900"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-gray-900"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-gray-900"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 ${
                      loading 
                        ? "opacity-50 cursor-not-allowed" 
                        : "hover:from-yellow-600 hover:to-amber-700 hover:shadow-lg"
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;