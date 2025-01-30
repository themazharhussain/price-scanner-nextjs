import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import PaymentIcons from "./PaymentIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pt-10 bg-gray-50">
      <div className="w-full mx-auto text-white">
        {/* Purple Section */}
        <div className="relative flex items-center justify-center -mb-40 z-50 md:mx-36">
          <div className="w-full max-w-[95%] md:max-w-3/4 flex flex-col items-center justify-center bg-purple-SECONDARY px-4 md:px-10 lg:px-16 py-6 md:py-10 lg:py-16 rounded-2xl gap-6 text-center z-10 overflow-hidden">
            <h6 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold">
              Download Our Mobile App
            </h6>
            <p className=" text-xs md:text-sm text-gray-800 md:px-4 lg:px-8 text-center">
              Price Scanner allows you to effortlessly compare prices of various
              products in real-time. With just a scan, you can access detailed
              price histories, track price fluctuations, and get instant
              notifications about price drops. Download the app now and start
              saving money on your purchases!
            </p>
            <div className="flex justify-center gap-4">
              <div className="p-2">
                <Image
                  src="/images/footer-logos/google-store.svg"
                  width={170}
                  height={65}
                  alt="Google Play Icon"
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <Image
                  src="/images/footer-logos/apple-store.svg"
                  width={170}
                  height={65}
                  alt="Apple Store Icon"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Black Section */}
        <div className="w-full pt-32 md:pt-auto mx-auto text-white md:pt-36  bg-gray-20 relative z-0 rounded-sm">
          <div className="w-full py-2 mt-16 flex items-center justify-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="object-cover"
            />
            <span className="text-4xl md:text-5xl font-bold leading-6">
              price scanner.
            </span>

            <Link
              href="#home"
              className="group hidden md:flex items-center justify-center absolute bottom-[55%] right-6"
            >
              <span className="text-sm">Back to Top</span>
              <div className="w-6 h-6 rounded-full ml-2">
                <Image
                  src="/images/footer-logos/arrow-up.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </Link>
          </div>

          <div className="w-full my-2 flex flex-col items-center justify-center">
            <Navbar />
            <div className="w-3/4 text-center py-4 ">
              {" "}
              <p className="text-xs md:text-sm text-gray-300 md:px-8 lg:px-32 text-center">
                At Price Scanner, we are dedicated to helping you make smarter
                purchasing decisions. Our app scans and compares prices across
                various platforms in real-time, ensuring that you always get the
                best deals available. With easy-to-use features and timely
                notifications, Price Scanner is the ultimate companion for savvy
                shoppers.
              </p>
            </div>
            <div className="w-full flex items-center  justify-center md:justify-between px-8 py-2">
              <p className="text-gray-50 text-xs ">
                &copy;{" "}
                <span className="font-bold text-gray-200">Education.</span>{" "}
                {new Date().getFullYear()} All RIGHTS RESERVED.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <SocialIcons className="group md:flex hidden" />
              </div>
            </div>
            <div className="w-full flex flex-row-reverse items-center px-8 ">
              <PaymentIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
