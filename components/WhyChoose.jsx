import React from "react";
import Button from "./CustomButton/Button";

const WhyChoose = ()=> {
  return (
    <div className="w-full text-center px-4 md:py-10 space-y-4 my-20">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800">
      Why Choose <span className="text-purple-PRIMARY">Price Scanner</span>
      </h1>
      <p className="text-md text-gray-600 py-2 md:px-32">
      Discover the best prices effortlessly and stay ahead with instant price-drop alerts for your favorite products. Compare prices across multiple stores to ensure you never miss a deal. Shopping smarter has never been this easy!
      </p>
      <Button />
    </div>
  );
}

export default WhyChoose;
