"use client"
import { useEffect, useState, useRef } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const requestRef = useRef(null);

  const calculateScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };
  const handleScroll = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(() => {
      calculateScroll();
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 w-3 h-full z-50 hidden md:block">
      <div
        className="w-full bg-purple-PRIMARY transition-[height] duration-200 ease-out"
        style={{ height: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
