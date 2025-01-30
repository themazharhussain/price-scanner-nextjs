import React from "react";
import Image from "next/image";

const ComparePrices = () => {
  const logos = [
    { src: "images/compare-prices-logos/acer.svg", alt: "Acer Logo" },
    { src: "images/compare-prices-logos/apple.svg", alt: "Apple Logo" },
    { src: "images/compare-prices-logos/dell.svg", alt: "Dell Logo" },
    { src: "images/compare-prices-logos/hp.svg", alt: "HP Logo" },
    { src: "images/compare-prices-logos/huawei.svg", alt: "Huawei Logo" },
    { src: "images/compare-prices-logos/nokia.svg", alt: "Nokia Logo" },
    { src: "images/compare-prices-logos/oppo.svg", alt: "Oppo Logo" },
    { src: "images/compare-prices-logos/razor.svg", alt: "Razor Logo" },
    { src: "images/compare-prices-logos/realme.svg", alt: "Realme Logo" },
    { src: "images/compare-prices-logos/samsung.svg", alt: "Samsung Logo" },
    { src: "images/compare-prices-logos/toshiba.svg", alt: "Toshiba Logo" },
    { src: "images/compare-prices-logos/vivo.svg", alt: "Vivo Logo" },
  ];

  return (
    <div className="w-full bg-gray-50 overflow-hidden p-4 md:py-16">
      <div className="text-center md:mt-30 md:mb-20">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 my-8">
          <span className="text-purple-PRIMARY">Compare Prices</span> Across
          Your Favorite Brands with Ease!
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8   md:grid-cols-6 md:px-32 ">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePrices;
