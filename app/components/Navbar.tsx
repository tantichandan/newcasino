"use client";

import { Button } from '@/components/ui/button';
import { MenuIcon, MessageSquare, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Aus', href: '/Aus' },
    { name: 'UK', href: '/UK' },
    { name: 'US', href: '/US' },
    { name: 'French', href: '/French' },
    { name: 'No-Deposit', href: '/Free' },
    { name: 'All', href: '/All' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Contact', href: '/email' },
];

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className='bg-[#f9f9f9] mb-8 shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl py-4'>
                <Link href="/">
                    <img src="https://thecasinoloot.com/Images/logo-site.png" alt="Logo" className="h-10" />
                </Link>

                <nav className={`lg:flex items-center justify-center lg:pb-0 z-50 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in top-[73px] ${navbarOpen ? 'right-0 bg-white' : 'left-[-100%]'}`}>
                    <div className={`lg:flex flex-col lg:flex-row items-center p-4 lg:p-0 ${navbarOpen ? 'block' : 'hidden'}`}>
                        {links.map((link, idx) => (
                            <div key={idx} className="mb-2 lg:mb-0 lg:mr-4">
                                <Link
                                    onClick={() => setNavbarOpen(false)}
                                    className={`text-lg font-semibold text-black transition duration-100 hover:text-yellow-500 ${pathname === link.href ? 'font-bold underline' : 'text-gray-600'}`}
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </nav>

                <div className='flex divide-x border-r sm:border-l'>
                    <Button variant='outline' className='flex flex-col gap-y-1.5 h-12 sm:h-20 sm:w-20 md:w-24 rounded-none'>
                        <MessageSquare className="h-6 w-6" />
                    </Button>

                    <div className='lg:hidden flex-col justify-center'>
                        <Button
                            className='flex flex-col gap-y-1.5 h-12'
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
