import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaDiscord, FaTelegram, FaTiktok } from 'react-icons/fa';

const SocialIcons = ({className=" "}) => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebook /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedin /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'Discord', href: 'https://discord.com', icon: <FaDiscord /> },
    { name: 'Telegram', href: 'https://telegram.org', icon: <FaTelegram /> },
    { name: 'TikTok', href: 'https://tiktok.com', icon: <FaTiktok /> },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map(({ name, href, icon }, index) => (
        <Link 
          key={index} 
          href={href} 
          passHref 
          legacyBehavior
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${name} page`}
            className="text-white text-xl  hover:scale-110 transition-all duration-200"
          >
            {icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
