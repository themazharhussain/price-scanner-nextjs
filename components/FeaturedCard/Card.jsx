"use client";
import { motion } from "motion/react";
import { useState } from "react";

const Card = ({ backgroundImage, primaryText, secondaryText, offer1="", offer2="",className="" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)} 
      onHoverEnd={() => setIsHovered(false)} 
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-80 w-64 shrink-0 overflow-hidden rounded bg-indigo-500 p-5"
    >
      <div className="relative z-10 text-white">
        <div className="flex justify-between mt-10">
          {offer1 && (
            <span className="mb-3 block w-fit rounded bg-blue-500 px-3 py-0.5 text-sm font-light">
              {offer1}
            </span>
          )}
          {offer2 && (
            <span className="mb-3 block w-fit rounded bg-blue-500 px-3 py-0.5 text-sm font-light">
              {offer2}
            </span>
          )}
        </div>
      </div>
      <Background backgroundImage={backgroundImage} />
      <motion.div className="absolute bottom-5 left-5 right-5 text-center text-white">
        {isHovered ? (
          <p className="text-sm">{secondaryText}</p> 
        ) : (
          <p className="text-xl font-bold text-white">{primaryText}</p> 
        )}
      </motion.div>
    </motion.div>
  );
};

const Background = ({ backgroundImage }) => {
  return (
    <motion.div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/60 to-blue-500"></div>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        variants={{
          hover: {
            scale: 1.2,
          },
        }}
        transition={{
          duration: 2,
          ease: "backInOut",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent"></div>
    </motion.div>
  );
};
export default Card;