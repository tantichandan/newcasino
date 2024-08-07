import { Mail, Headset, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent lg:text-5xl mb-4">About Us</h3>
            <p className="text-sm leading-7">
              At Casinobonus, we're dedicated to delivering the ultimate online gaming experience with a passion for entertainment and a commitment to excellence.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent lg:text-5xl mb-4">Services</h3>
            <ul className="list-none space-y-2">
              <li><Link href="/category" className="text-sm leading-6 hover:text-primary">Category</Link></li>
              <li><Link href="/" className="text-sm leading-6 hover:text-primary">Home</Link></li>
              <li><Link href="/allproduct" className="text-sm leading-6 hover:text-primary">Casinos</Link></li>
              <li><Link href="/Blog" className="text-sm leading-6 hover:text-primary">Blogs</Link></li>
              <li><Link href="/email" className="text-sm leading-6 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent lg:text-5xl mb-4">
              Contact Us
            </h3>
            <p className="text-sm font-medium leading-5 mb-2">
              Email: <a href="mailto:support@casinobonus.com" className="text-primary">support@thecasinoloot.com</a>
            </p>
            <p className="text-sm leading-6 mb-2">
              We promote <span className="text-primary">safe</span>, <span className="text-primary">informed</span>, and <span className="text-primary">controlled</span> gambling.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 text-2xl">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 text-2xl">
                <Twitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 text-2xl">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            All rights reserved © TheCasinoLoot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
