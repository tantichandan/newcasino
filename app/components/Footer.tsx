import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { Contact, Contact2Icon, Facebook, Headset, Instagram, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=" from-gray-900 to-gray-800 bg-[#f1f1f1] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Us</h3>
            <p className="leading-7 text-sm [&:not(:first-child)]:mt-2">At Casinobonus, we're dedicated to delivering the ultimate online gaming experience. With a passion for entertainment and a commitment to excellence.</p>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Services</h3>
            <ul className="list-none ">
              <Link href="/category"><li className="leading-6 text-sm [&:not(:first-child)]:mt-6 mb-2">Category</li></Link>
              <Link href="/"><li className="leading-6 text-sm [&:not(:first-child)]:6 mb-2">Home</li></Link>
              <Link href="/allproduct"><li className="leading-6 text-sm [&:not(:first-child)]:mt-6 mb-2">Casinos</li></Link>
              <Link href="/Blog"><li className="leading-6 text-sm [&:not(:first-child)]:mt-6 mb-2">Blogs</li></Link>
              <Link href="/contact"><li className="leading-6 text-sm [&:not(:first-child)]:mt-6 mb-2">Contact</li></Link>
            </ul>
          </div>
          <div>
            <h3 className="scroll-m-20 tracking-tight text-2xl font-semibold mb-6">Contact Us 
            
           <div className='flex gap-1'>
           <Mail className=' text-yellow-600'/> 
           <Headset className='text-yellow-600'/> 
           </div>
            
            </h3>
            <p className="text-sm font-medium leading-5">Email: support@casinobonus.com</p>
            <p className="text-sm font-medium leading-5">Phone: 123-456-7890</p>
            <p className='leading-6 text-sm [&:not(:first-child)]:mt-6 justify mb-2'>We promote <span className='text-primary'>safe</span>, <span className='text-primary'>informed</span>, and <span className='text-primary'>controlled</span> gambling</p>
          </div>

          <div className='flex gap-1'>

          <div className="text-2xl font-semibold mb-6"><Facebook className='font-bold text-yellow-600'/></div>
          <div className="text-2xl font-semibold mb-6"><Twitter className='font-bold text-yellow-600'/></div>
          <div className="text-2xl font-semibold mb-6"><Instagram className='font-bold text-yellow-600'/></div>

          </div>
          <div>
            <p>All right reserved © Casino Bonus</p>
          </div>

          <div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
