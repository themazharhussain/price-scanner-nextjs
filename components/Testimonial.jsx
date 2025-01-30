"use client";
import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const testimonials = [
  {
    image: "/images/testimonials/1.png",
    details:
      "The price scanner app saved me a lot of money! I was looking to buy a gaming laptop, and thanks to the price alerts, I got it at a 15% discount. Highly recommended for tech enthusiasts!",
    name: "Ali Raza",
    position: "Freelance Developer",
  },
  {
    image: "/images/testimonials/2.png",
    details:
      "As someone who shops for electronics regularly, this app is a game-changer! I no longer have to check multiple websites daily. The price drop notifications make everything effortless.",
    name: "Sarah Khan",
    position: "Tech Blogger",
  },
  {
    image: "/images/testimonials/3.png",
    details:
      "I run an online store and need to stay updated with competitor prices. This app helps me track price changes across different platforms, making my business more competitive.",
    name: "Owais Ahmed",
    position: "E-commerce Store Owner",
  },
];


const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section id="testimonials" className="bg-white">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          ref={sliderRef}
          spaceBetween={10}
          loop={true}
          speed={1500} 
          effect="slide"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <SingleTestimonial
                image={testimonial.image}
                details={testimonial.details}
                name={testimonial.name}
                position={testimonial.position}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SingleTestimonial = ({ image, details, name, position, handlePrev, handleNext }) => {
  return (
    <div className="relative flex justify-center ">
      <div className="relative w-full md:w-11/12 lg:w-10/12 xl:w-10/12">
        <div className="w-full flex flex-col items-center  md:flex md:flex-row-reverse bg-white ">
          <div className="relative overflow-visible mb-6 w-full max-w-[300px] md:mb-0 md:mr-6 md:max-w-[460px] md:max-h-[600px]">
            <Image
              src={image}
              alt={name}
              width={460}
              height={500}
              className="rounded w-full h-full transition-all duration-500 ease-in-out transform"
            />
          </div>
          <div className="w-full p-4 md:p-6">
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                What They <span className="text-purple-PRIMARY">Say?</span>
              </h2>
              <p className="mb-6 text-sm italic leading-relaxed text-[#1E1E1E] md:text-base">
                {details}
              </p>
              <h4 className="text-md text-purple-PRIMARY font-semibold mb-1">{"-"}{name}</h4>
              <p className="text-sm text-purple-SECONDARY md:text-md">{" "}{position}</p>
            </div>
            <div className="flex gap-5 my-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-purple-PRIMARY transition-all duration-300 ease-in-out"
              >
                <span className="text-lg">&lt;</span>
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-purple-PRIMARY transition-all duration-300 ease-in-out"
              >
                <span className="text-lg">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
