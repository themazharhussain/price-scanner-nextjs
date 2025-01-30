import React from "react";
import Image from "next/image";
import { FaChartLine, FaTag, FaDollarSign, FaBell } from "react-icons/fa";
import Button from "./CustomButton/Button";

const FloatingDiv = ({ icon, heading, description, position, className = "" }) => (
  <div
    className={`absolute ${className} ${position} flex items-center gap-2 bg-white/70 backdrop-blur-none p-2 md:p-3 rounded-lg shadow-md z-10 `}
    aria-label={heading}
  >
    <div className="text-white p-1 md:p-1.5 rounded bg-purple-PRIMARY text-lg md:text-xl">
      {icon}
    </div>
    <div className="flex flex-col">
      <h3 className="text-xs md:text-sm font-semibold text-gray-800">{heading}</h3>
      <p className="text-xs md:text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const HeroSection = () => {
  const floatingDivs = [
    {
      heading: "Analytics",
      description: "Price dropping",
      position: "md:top-[10%] md:right-[10%] top-4 right-2 -translate-x-1/4 md:translate-x-0",
      icon: <FaChartLine />,
    },
    {
      heading: "40% Off",
      description: "On your fav items",
      position: "md:top-[35%] md:left-[5%] top-[30%] left-2 translate-x-1/4 md:translate-x-0", 
      icon: <FaTag />,
    },
    {
      heading: "Notification",
      description: "Price drop alert",
      position: "md:bottom-[30%] md:right-[5%] bottom-[35%] right-2 -translate-x-1/4 md:translate-x-0", 
      icon: <FaBell />,
    },
    {
      heading: "Price drop!",
      description: "Today at 12.00 PM",
      position: "md:bottom-[10%] md:left-0 bottom-8 left-2 translate-x-1/4 md:translate-x-0", 
      icon: <FaDollarSign />,
    },
  ];

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12  bg-gray-50 gap-8 mt-20">
      {/* Left Text Container */}
      <div className="w-full md:w-1/2 md:px-6 text-center md:text-left space-y-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Track Prices, Unlock Savings!
        </h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-[500px] mx-auto md:mx-0">
          Real-time price comparisons from top stores and instant alerts on
          price drops. Shop smarter, save more, and never miss a deal again.
        </p>
        <div className="mt-6">
          <Button className="px-8 py-3 md:px-10 md:py-4 text-sm md:text-base" />
        </div>
      </div>

      {/* Right Image Container */}
      <div className="w-full md:w-1/2 relative ">
        <div className="relative w-full h-full overflow-hidden rounded-xl ">
          <Image
            src="/images/hero-section/shocking-girls.svg"
            alt="Shocking Girls Illustration"
            width={1200}
            height={600}
            className="z-0"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        {floatingDivs.map((div, index) => (
          <FloatingDiv
            key={index}
            icon={div.icon}
            heading={div.heading}
            description={div.description}
            position={div.position}
            className="w-[140px] md:w-48 max-w-[30vw]"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;