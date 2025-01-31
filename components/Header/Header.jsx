import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../CustomButton/Button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full max-w-7xl py-4 md:py-5 lg:py-7 px-4 sm:px-10 bg-white shadow-md min-h-[70px] tracking-wide z-50">
    <div className="flex flex-wrap items-center justify-center md:justify-between w-full mx-auto">
      {/* Logo and Title */}
      <div className="flex md:flex-row items-center space-x-1 flex-shrink-0">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={60}
            height={60}
            priority
          />
        </Link>
        <span className="text-3xl sm:text-4xl font-bold text-gray-800 whitespace-nowrap">
          price scanner.
        </span>
      </div>
  
      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-x-6 flex-wrap">
        <ul className="flex gap-x-6 flex-wrap">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-gray-600 hover:scale-110 hover:font-semibold transition-all duration-300"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
  
        {/* Button */}
        <div className="ml-4">
          <Button />
        </div>
      </nav>
    </div>
  </header>
  
  );
};

export default Header;
