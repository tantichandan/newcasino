import { Mail, Headset, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <section className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              At TheCasinoLoot, we are dedicated to providing the ultimate online gaming experience, with a passion for entertainment and a commitment to excellence.
            </p>
          </section>

          {/* Services Section */}
          <section className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-yellow-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/All" className="text-sm hover:text-yellow-400 transition">Casinos</Link>
              </li>
              <li>
                <Link href="/Blog" className="text-sm hover:text-yellow-400 transition">Blogs</Link>
              </li>
              <li>
                <Link href="/email" className="text-sm hover:text-yellow-400 transition">Contact</Link>
              </li>
            </ul>
          </section>

          {/* Contact Us Section */}
          <section className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Contact Us
              <span className="flex gap-1">
                <Mail className="text-yellow-400" aria-label="Email Icon" />
                <Headset className="text-yellow-400" aria-label="Support Icon" />
              </span>
            </h3>
            <p className="text-sm font-medium">
              Email: <a href="mailto:support@thecasinoloot.com" className="text-yellow-400 hover:underline">support@thecasinoloot.com</a>
            </p>
            <p className="mt-3 text-sm">
              We promote <span className="font-semibold text-yellow-400">safe</span>, <span className="font-semibold text-yellow-400">informed</span>, and <span className="font-semibold text-yellow-400">controlled</span> gambling.
            </p>
          </section>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 gap-6">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="text-2xl hover:text-yellow-400 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="text-2xl hover:text-yellow-400 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="text-2xl hover:text-yellow-400 transition" />
          </Link>
        </div>

        {/* Responsible Gambling Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-6">
          <span className="text-lg font-bold text-red-500">18+</span>
          <Link
            href="https://www.responsiblegambling.org/"
            target="_blank"
            className="px-4 py-2 text-sm font-medium bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition"
          >
            Responsible Gambling
          </Link>

          <Link href="https://www.gambleaware.org/what-we-do/"
          target='blank'
          
          
          >

<div className="text-center">
            <p className="text-xl font-extrabold text-yellow-400 tracking-wide">
              GambleAware
            </p>
            
          </div>

          


          </Link>
        
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            All rights reserved © {currentYear} <span className="font-semibold text-yellow-400">TheCasinoLoot</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
