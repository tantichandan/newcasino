import { Mail, Headset, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f1f1f1] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-2xl font-semibold">About Us</h3>
            <p className="leading-7 text-sm mt-2">
              At TheCasinoLoot, we are dedicated to providing the ultimate online gaming experience, with a passion for entertainment and a commitment to excellence.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-2xl font-semibold">Services</h3>
            <ul className="list-none mt-4">
              {['Category', 'Home', 'Casinos', 'Blogs', 'Contact'].map((service, index) => (
                <Link href={`/${service.toLowerCase()}`} key={index}>
                  <li className="leading-6 text-sm mt-2">{service}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              Contact Us
              <div className='flex gap-1 ml-2'>
                <Mail className='text-yellow-600' aria-label="Email Icon" />
                <Headset className='text-yellow-600' aria-label="Support Icon" />
              </div>
            </h3>
            <p className="text-sm font-medium">Email: support@thecasinoloot.com</p>
            
            <p className="leading-6 text-sm mt-2">
              We promote <span className='text-primary'>safe</span>, <span className='text-primary'>informed</span>, and <span className='text-primary'>controlled</span> gambling.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 md:col-span-3">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-2xl text-yellow-600">
              <Facebook />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-2xl text-yellow-600">
              <Twitter />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-2xl text-yellow-600">
              <Instagram />
            </Link>
          </div>

          {/* Responsible Gambling and 18+ Symbol */}
          <div className="flex items-center justify-center gap-4 mt-6 md:col-span-3">
            {/* 18+ Icon */}
            <span className="text-xl text-red-600 font-bold">18+</span>
            <Link href="https://www.responsiblegambling.org/" target='blank' className="text-sm font-medium bg-yellow-600 text-white px-4 py-2 rounded-full">
              Responsible Gambling
            </Link>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 md:col-span-3 text-center">
            <p>All rights reserved © {currentYear} TheCasinoLoot</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
