import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      src: "/images/social-icons/facebook.svg",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      src: "/images/social-icons/twitter.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      src: "/images/social-icons/instagram.svg",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      src: "/images/social-icons/linkedin.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center space-x-6  p-2">
      {socialLinks.map(({ name, href, src }, index) => (
        <Link key={index} href={href}>
          <div className="w-4 h-4 cursor-pointer">
          <Image
            src={src}
            alt={`${name} icon`}
            width={18}
            height={18}
            className="hover:opacity-80"
          />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
