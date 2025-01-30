import React from "react";

const Container = ({ fillColor = "#FFFFFF", gradient = "bg-gradient-to-b from-purple-100 to-gray-50", children }) => {
  return (
    <div className={`relative w-full ${gradient} py-16 px-6 rounded-lg`}>
 
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill={fillColor}
          ></path>
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Container;
