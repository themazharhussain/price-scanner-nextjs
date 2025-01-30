import React from "react";
import Image from "next/image";

const PaymentIcons = () => {
  const logos = [
    { src: "/images/footer-logos/visa.png", alt: "Visa logo" },
    { src: "/images/footer-logos/master.png", alt: "MasterCard logo" },
    { src: "/images/footer-logos/paypal.png", alt: "PayPal logo" },
    { src: "/images/footer-logos/ebay.png", alt: "eBay logo" },
    { src: "/images/footer-logos/google-pay.png", alt: "Google Pay logo" },
  ];

  return (
    <div className="flex justify-center space-x-4 py-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-12 h-8 flex justify-center items-center p-2 bg-white rounded-lg shadow-md "
        >
          <Image 
            src={logo.src} 
            alt={logo.alt} 
            width={500} 
            height={500} 
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentIcons;
