"use client"

import { Button } from '@/components/ui/button'
import { MenuIcon, MessageSquare, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import logo1 from "@/public/logo1.svg"


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
    
    
]

export default function Navbar() {

    const [navbar, setNavbar] = useState(false)

    const pathname = usePathname()


    return (
        <header className='mb-8 bg-[#f1f1f1]'>
            <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>

                <Link href={"/"}>

                    <Image

                    src={logo1}
                    height={170}
                    width={170}
                    alt='logo'
                    
                    />

                </Link>

                

                <nav className={`gap-12 lg:flex backdrop-blur-xl md:backdrop-blur-lg md:px-10 px-4  lg:items-center md:items-center justify-between lg:pb-0 z-50 absolute lg:static lg:z-auto left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in top-[73px] ${navbar ? 'right-0' : 'left-[-100%]'}`}  >

                    {links.map((link, idx) => (
                        <div key={idx}>

                            {pathname === link.href ? (

                                <Link onClick={()=> setNavbar(!navbar)} className='text-lg font-semibold text-primary' href={link.href}>

                                    {link.name}

                                </Link>


                            ) : (

                                <Link href={link.href} onClick={()=> setNavbar(false)} className='text-lg font-semibold  text-gray-600 transition duration-100 hover:text-primary'>
                                    {link.name}

                                </Link>

                            )}



                        </div>
                    ))}

                    

                </nav>

                <div className='flex divide-x border-r sm:border-l'>
                    
                    <Button variant={'outline'} className='flex flex-col gap-y-1.5 h-12 sm:h-20 sm:w-20 md:w-24 rounded-none'>
                        <MessageSquare />
                        <span className='hidden text-xs font-semibold text-gray-500'>


                        </span>
                    </Button>

                    <div className='lg:hidden flex-col justify-center'>

                        <Button className='flex flex-col gap-y-1.5 h-12'

                            onClick={() => setNavbar(!navbar)}

                        >

                            {navbar ? (
                                <X />
                            ) : (
                                <MenuIcon />
                            )}

                            <span className='hidden text-xs font-semibold text-gray-500'></span>

                        </Button>

                    </div>

                </div>

            </div>

        </header>
    )
}
