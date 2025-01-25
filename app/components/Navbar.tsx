'use client'

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from '@/app/icon .png'
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partners" },
  { name: "Speakers", href: "/speakers" },
  { name: "Delegates", href: "/delegates" },
  { name: "Contact", href: "/contact" },
  
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r py-5 from-blue-950 to-purple-950 shadow-md">
    {/* <header className="bg-gradient-to-r py-5 from-blue-950 to-purple-950 shadow-md"> */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              {/* Replace the text with the logo image */}
              <Image src={Logo} alt="DigiTech Logo" className="h-20 w-60" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm font-medium hover:text-gray-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/brochure-request"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-800 hover:bg-gray-200"
            >
              Request Brochure
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/brochure-request"
              className="block rounded-md bg-purple-600 px-3 py-2 text-base font-medium text-white hover:bg-purple-700"
            >
              Request Brochure
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
