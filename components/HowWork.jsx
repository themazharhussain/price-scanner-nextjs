import React from "react";
import Image from "next/image";
import Button from "./CustomButton/Button";

const steps = [
  { id: 1, text: "Search for a Product" },
  { id: 2, text: "Compare Prices Instantly" },
  { id: 3, text: "Set Alerts for Price Drops" },
  { id: 4, text: "Save Money Effortlessly" },
];

const HowWork = () => {
  return (
    <section
      id="how-work"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-12 md:gap-20 mb-24"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/how-work/mobile.svg"
          alt="How It Works"
          width={320}
          height={500}
          priority
          className="object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
          How <span className="text-purple-PRIMARY">Price Scanner</span> Works?
        </h2>

        {/* Steps List */}
        <ul className="w-full flex justify-center md:justify-start">
          <div className="grid gap-3 w-full max-w-sm">
            {steps.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 w-full py-1.5 px-16 md:px-0 shadow-sm"
              >
                {/* Step Number */}
                <div className="w-8 h-8 flex items-center justify-center bg-purple-PRIMARY text-white  rounded-lg">
                  {item.id}
                </div>

                {/* Step Text */}
                <span className="text-sm md:text-base text-gray-700">
                  {item.text}
                </span>
              </li>
            ))}
          </div>
        </ul>

        {/* Call to Action Button */}
        <div className="flex justify-center md:justify-start">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
