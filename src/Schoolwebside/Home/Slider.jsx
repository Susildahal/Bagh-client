import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, src: "../image/1.jpg", alt: "Phone" },
    { id: 2, src: "../image/2.jpg", alt: "Call" },
    { id: 3, src: "../image/child2.jpg", alt: "Child" },
    { id: 4, src: "../image/achievement.jpg", alt: "Achievement" },
  ];

  // Automatically loop through slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);
  return (
    <motion.div
    initial={{opacity:0, translateX:'-100%'}} 
    whileInView={{opacity:1, translateX:0}}
    transition={{duration:1}}
      className="relative  lg:pl-20 lg:w-[80vw] lg:pt-20  w-full  h-[60vh]  pt-14 lg:h-[85vh]  overflow-hidden"
      id="indicators-carousel"
    >
      {/* Carousel Wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="block w-full h-full lg:object-cover object-fill"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Slider;
