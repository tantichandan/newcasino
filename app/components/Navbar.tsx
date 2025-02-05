"use client";

import { MenuIcon, MessageSquare, X, ChevronDown, Gift } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/", icon: "🎰" },
  {
    name: "Countries",
    icon: "🌎",
    items: [
      { name: "CA", href: "/CA", icon: "🇨🇦" },
      { name: "Aus", href: "/Aus", icon: "🇦🇺" },
      { name: "UK", href: "/UK", icon: "🇬🇧" },
      { name: "French", href: "/French", icon: "🇫🇷" },
      { name: "Global", href: "/Global", icon: "🌍" },
      { name: "US", href: "/US", icon: "🇺🇸" },
    ],
  },
  { name: "Free Spins", href: "/Free" },
  { name: "Casinos", href: "/All" },
  { name: "Blog", href: "/Blog" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const getLinkClassNames = (href: string) => {
    const isActive = pathname === href;
    return `text-lg font-sans px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
      isActive
        ? "text-white bg-gradient-to-r from-yellow-500 to-amber-600 shadow-lg"
        : "text-gray-300 hover:text-amber-400 hover:bg-gray-800"
    }`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-[#121212] shadow-lg z-50 border-b-4 border-yellow-500">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
        <Link href="/" aria-label="Go to homepage" className="relative group">
          <Image
            src="/logo-site.png"
            alt="Site Logo"
            width={120}
            height={30}
            className="h-9"
          />
        </Link>

        <nav
          className={`lg:flex items-center justify-center lg:pb-0 z-50 absolute lg:static left-0 w-full lg:w-auto transition-all duration-500 ease-in top-[73px] ${
            navbarOpen ? "right-0 bg-[#1a1a1a] shadow-lg" : "left-[-100%]"
          }`}
        >
          <div
            className={`lg:flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 p-4 lg:p-0 ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            {links.map((link, idx) =>
              link.items ? (
                <div key={idx} className="relative lg:mx-2" ref={dropdownRef}>
                  <button
                    className={`text-lg font-semibold flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      dropdownOpen
                        ? "text-amber-400 bg-gray-800"
                        : "text-gray-300 hover:text-amber-400 hover:bg-gray-800"
                    }`}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                    <ChevronDown
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full mt-2 w-56 bg-[#1a1a1a] shadow-xl rounded-lg z-40 border-2 border-gray-700 ${
                      dropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    {link.items.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-amber-400 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <span>{item.icon}</span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={idx} className="lg:mx-2">
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    className={getLinkClassNames(link.href)}
                    href={link.href}
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </Link>
                </div>
              )
            )}
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/email"
              className="text-lg font-semibold text-amber-400 hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>
          <div className="lg:hidden">
            <Button
              variant="outline"
              className="p-2 rounded-lg"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm"
          onClick={() => setNavbarOpen(false)}
        />
      )}
    </header>
  );
}
