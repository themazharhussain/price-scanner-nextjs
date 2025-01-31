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
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-20 gap-12 md:gap-16 lg:gap-20 py-12 my-20 md:my-32"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center relative h-[300px] md:h-[400px] md:mr-8">
        <Image
          src="/images/how-work/mobile.svg"
          alt="How It Works"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-center"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 md:ml-8">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
          How <span className="text-purple-PRIMARY">Price Scanner</span> Works?
        </h2>

        {/* Steps List */}
        <ul className="w-full">
          <div className="flex flex-col gap-4 md:gap-4 w-full max-w-md mx-auto md:mx-0">
            {steps.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 md:gap-4 w-full py-2 px-4 md:px-0 rounded-lg bg-white shadow-sm"
              >
                {/* Step Number */}
                <div className="min-w-6 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-purple-PRIMARY text-white text-md font-medium rounded-lg">
                  {item.id}
                </div>

                {/* Step Text */}
                <span className="text-md sm:text-base text-gray-700">
                  {item.text}
                </span>
              </li>
            ))}
          </div>
        </ul>

        {/* Call to Action Button */}
        <div className="flex justify-center md:justify-start pt-4 md:pt-6">
          <Button className="w-full md:w-auto px-8 py-3 text-sm md:text-base" />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
