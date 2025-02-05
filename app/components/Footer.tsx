import { Mail, Headset, Facebook, Twitter, Instagram, Diamond, Shield, Clock, Globe, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
    subsets: ['latin'],
    display: 'swap',
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Diamond className="h-8 w-8 text-yellow-400" />
                <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                  TheCasinoLoot
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted destination for premium online gaming experiences. We prioritize safety, transparency, and responsible gaming.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://facebook.com" 
                  target="_blank" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-yellow-400" />
                </Link>
                <Link 
                  href="https://twitter.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-yellow-400" />
                </Link>
                <Link 
                  href="https://instagram.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-yellow-400" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className={`${playfair.className} text-xl font-semibold text-white`}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'All Casinos', href: '/All' },
                  { name: 'Blog', href: '/Blog' },
                  { name: 'Contact', href: '/email' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className={`${playfair.className} text-xl font-semibold text-white`}>
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <a 
                    href="mailto:support@thecasinoloot.com"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    support@thecasinoloot.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">24/7 Support Available</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">International Service</span>
                </li>
              </ul>
            </div>

            {/* Responsible Gaming */}
            <div className="space-y-6">
              <h3 className={`${playfair.className} text-xl font-semibold text-white`}>
                Responsible Gaming
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">Safe & Secure Gaming</span>
                </div>
                <Link
                  href="https://www.gambleaware.org"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300"
                >
                  <AlertTriangle className="w-4 h-4" />
                  GambleAware
                </Link>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-red-500 text-white font-bold rounded">18+</span>
                  <span className="text-gray-400 text-sm">Play Responsibly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-yellow-400 font-semibold">TheCasinoLoot</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-yellow-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;