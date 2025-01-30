"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = ({
  textClass = "",
  activeClass = "font-bold",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#how-work", label: "How It Works" },
    { href: "#testimonial", label: "Testimonials" },
    { href: "#faqs", label: "FAQ's" },
  ];

  return (
    <div className="flex items-center justify-center">
      <ul className="hidden md:flex space-x-8 p-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-gray-50 text-xs hover:scale-110 transition-all duration-200"
          >
            <Link
              href={item.href}
              onClick={() => setActiveIndex(index)}
              className={`${textClass} ${
                activeIndex === index ? activeClass : ""
              } `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
