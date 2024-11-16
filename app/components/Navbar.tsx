"use client";

import { Button } from '@/components/ui/button';
import { MenuIcon, MessageSquare, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Importing Next.js Image component
import React, { useState } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Aus', href: '/Aus' },
  { name: 'UK', href: '/UK' },
  { name: 'US', href: '/US' },
  { name: 'French', href: '/French' },
  { name: 'Free', href: '/Free' },
  { name: 'All', href: '/All' },
  { name: 'CA', href: '/CA' },
  { name: 'Global', href: '/Global' },
  { name: 'Blog', href: '/Blog' },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  // Check if the current link matches the pathname (considering dynamic routes)
  const getLinkClassNames = (href: string) => {
    return pathname === href
      ? 'font-bold underline text-black'
      : 'text-gray-600 hover:text-yellow-500 transition duration-100';
  };

  return (
    <header className="bg-[#f9f9f9] mb-8 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl py-4">
        <Link href="/">
          {/* Use the Image component for the logo stored in the public directory */}
          <Image
            src="/logo-site.png" // Local image from the public folder
            alt="Logo"
            width={150} // Adjust as needed
            height={40} // Adjust as needed
            className="h-10" // Optional: Tailwind class to control the image height
          />
        </Link>

        {/* Navbar menu for large screens */}
        <nav
          className={`lg:flex items-center justify-center lg:pb-0 z-50 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in top-[73px] ${navbarOpen ? 'right-0 bg-white' : 'left-[-100%]'
            }`}
        >
          <div
            className={`lg:flex flex-col lg:flex-row items-center p-4 lg:p-0 ${navbarOpen ? 'block' : 'hidden'
              }`}
          >
            {links.map((link, idx) => (
              <div key={idx} className="mb-2 lg:mb-0 lg:mr-4">
                <Link
                  onClick={() => setNavbarOpen(false)} // Close menu on link click
                  className={`text-lg font-semibold ${getLinkClassNames(link.href)}`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        {/* Buttons (Contact Us and Mobile Menu Toggle) */}
        <div className="flex divide-x border-r sm:border-l">
          <Link href="/email">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-x-2 h-12 sm:h-16 sm:w-32 md:w-40 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <MessageSquare className="h-6 w-6 transition-transform duration-300 ease-in-out" />
              <p className="text-xs sm:text-sm font-semibold">Contact Us</p>
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex-col justify-center">
            <Button
              className="flex flex-col gap-y-1.5 h-12"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
            >
              {navbarOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
