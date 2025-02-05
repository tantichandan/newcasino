"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const NewsletterSignup = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_email: email,
          to_email: "contact@thecasinoloot.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setLoading(false);
      setSuccess(true);
      setEmail("");
    } catch (error) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white/90 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-gray-200">
      
      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg mb-3">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg mb-3">
          <CheckCircle className="w-5 h-5" />
          <p className="text-sm">Successfully subscribed!</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex gap-3">
        {/* Input Field with Glass Effect */}
        <div className="relative w-full">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/40 border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Subscribe Button */}
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
