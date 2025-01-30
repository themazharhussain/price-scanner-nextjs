import React from "react";
import Image from "next/image";

const images = [
  { src: "/images/slides/computer-zone.png", alt: "Computer Zone Logo" },
  { src: "/images/slides/daraz.png", alt: "Daraz Logo" },
  { src: "/images/slides/myshop.png", alt: "MyShop Logo" },
  { src: "/images/slides/paklap.png", alt: "PakLap Logo" },
  { src: "/images/slides/airkart.png", alt: "AirKart Logo" },
  { src: "/images/slides/hr-store.png", alt: "HR Store Logo" },
  { src: "/images/slides/mega.png", alt: "Mega Logo" },
];

const Slides = () => {
  const duplicatedImages = React.useMemo(() => [...images, ...images], [images]);

  return (
    <div className="overflow-hidden md:-mt-12 w-full bg-gray-200/50">
      <div className="flex animate-marquee justify-center items-center gap-x-36">
        {duplicatedImages.map((image, index) => (
          <div key={`${image.alt}-${index}`} className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={120}
              className=""
              priority={index < 7} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;