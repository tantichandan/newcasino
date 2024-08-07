"use client";

import { Button } from '@/components/ui/button';
import { MenuIcon, MessageSquare, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import SearchPopup from './SearchPopup';

// Define the navigation links
const links = [
  { name: 'Home', href: '/' },
  { name: 'Aus', href: '/Aus' },
  { name: 'UK', href: '/UK' },
  { name: 'US', href: '/US' },
  { name: 'French', href: '/French' },
  { name: 'No-Deposit', href: '/Free' },
  { name: 'All', href: '/allproduct' },
  { name: 'Blog', href: '/Blog' },
  { name: 'Contact', href: '/email' },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search popup


  return (
    <header className='bg-gradient-to-r from-blue-700 to-gold-500 shadow-md mb-4 relative'>
      <div className='flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-4 py-2'>
        {/* Logo and Home Link */}
        <Link href="/">
          <div className='text-white text-xl md:text-2xl font-extrabold tracking-tight' style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500'>
              TheCasinoLoot
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex lg:items-center lg:justify-between lg:static absolute top-[60px] left-0 w-full lg:w-auto transition-all duration-500 ease-in ${
            navbar ? 'right-0 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-md z-50' : 'left-[-100%]'
          } px-2 py-1 lg:px-0 lg:py-0 flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-6`}
        >
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`text-base font-semibold transition duration-200 ${
                pathname === link.href
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-200 hover:text-yellow-300'
              }`}
              onClick={() => setNavbar(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className='flex divide-x border-r sm:border-l'>
          {/* Message Button */}
          <Button
            variant='outline'
            className='flex flex-col items-center justify-center h-10 sm:h-16 sm:w-16 md:w-20 rounded-none mx-1 my-1 bg-white hover:bg-gray-100'

            onClick={() => setIsSearchOpen(true)} 
          >
            <MessageSquare className='text-blue-700' /> <p>Search</p>
            <span className='hidden text-xs font-semibold text-gray-500'>
              
            </span>
          </Button>

          {/* Menu Button (for mobile view) */}
          <div className='lg:hidden flex items-center'>
            <Button
              className='flex flex-col items-center justify-center h-10 mx-1 my-1 bg-white hover:bg-gray-100'
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <X className='text-red-500' /> : <MenuIcon className='text-blue-700' />}
              <span className='hidden text-xs font-semibold text-gray-500'>
                {/* Add text if needed */}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {isSearchOpen && <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}



    </header>
  );
}
