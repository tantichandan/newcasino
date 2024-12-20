"use client";

import { Button } from '@/components/ui/button';
import { MenuIcon, MessageSquare, X, ChevronDown } from 'lucide-react'; // Import ChevronDown for dropdown indication
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Countries',
    items: [
      { name: 'CA', href: '/CA' },
      { name: 'Aus', href: '/Aus' },
      { name: 'UK', href: '/UK' },
      { name: 'French', href: '/French' },
      { name: 'Global', href: '/Global' },
      { name: 'US', href: '/US' },
    ],
  },
  { name: 'Free', href: '/Free' },
  { name: 'All', href: '/All' },
  { name: 'Blog', href: '/Blog' },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref to handle clicks outside dropdown
  const pathname = usePathname();

  const getLinkClassNames = (href: string) => {
    const isActive = pathname === href;
    return `text-lg font-sans px-3 py-2 transition-all duration-300 ${
      isActive
        ? 'text-white bg-gradient-to-r from-green-500 to-teal-500 shadow-lg'
        : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
    }`;
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-gradient-to-r font-sans from-gray-100 via-white to-gray-100 shadow-md z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo-site.png"
            alt="Site Logo"
            width={150}
            height={40}
            className="h-12"
          />
        </Link>

        {/* Navbar menu */}
        <nav
          className={`lg:flex items-center justify-center lg:pb-0 z-50 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in top-[73px] ${
            navbarOpen ? 'right-0 bg-white shadow-lg' : 'left-[-100%]'
          }`}
        >
          <div
            className={`lg:flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 p-4 lg:p-0 ${
              navbarOpen ? 'block' : 'hidden'
            }`}
          >
            {links.map((link, idx) => {
              if (link.items) {
                // Dropdown menu
                return (
                  <div
                    key={idx}
                    className="relative lg:mr-4"
                    ref={dropdownRef} // Attach ref to the dropdown container
                  >
                    <button
                      className={`text-lg font-semibold flex items-center px-3 py-2 hover:bg-gray-100 transition-all duration-300 ${
                        dropdownOpen ? 'text-teal-500' : 'text-gray-600'
                      }`}
                      onClick={() => setDropdownOpen(prev => !prev)} // Toggle dropdown on click
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.name} <ChevronDown className="ml-2 h-5 w-5" />
                    </button>
                    {/* Dropdown Content */}
                    <div
                      className={`absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-40 ${
                        dropdownOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {link.items.map((item, subIdx) => (
                        <Link
                          key={subIdx}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-500 hover:bg-gray-100"
                          onClick={() => setNavbarOpen(false)} // Close menu on link click
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                // Regular link
                return (
                  <div key={idx} className="lg:mr-4">
                    <Link
                      onClick={() => setNavbarOpen(false)}
                      className={getLinkClassNames(link.href)}
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      title={link.name}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Contact Button - Always Visible */}
          <Link href="/email">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg hover:scale-105 transition-transform duration-300 sm:px-4 sm:py-2 sm:text-base text-sm px-2 py-1"
            >
              <MessageSquare className="sm:h-4 sm:w-4 h-4 w-4" />
              <span className="text-sm sm:text-base font-semibold">Contact Us</span>
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              className="p-2 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition-all text-gray-700"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-expanded={navbarOpen}
              aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
            >
              {navbarOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setNavbarOpen(false)}
        />
      )}
    </header>
  );
}
