import { motion } from "framer-motion"; // ✅ Correct import
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ If images are in /public/image/, use this path
const images = [
  { src: "/image/1.jpg", caption: "Primary", to: "/Primary" },
  { src: "/image/1.jpg", caption: "Secondary", to: "/Secondary" },
  { src: "/image/1.jpg", caption: "Technical", to: "/technical" },
];

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Fixed slide logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative md:w-[60vw] w-[90vw] shadow-2xl mx-auto mt-28"
    >
      <div className="text-center mb-10 text-3xl hover:translate-x-4 hover:scale-110">
        Courses We Offer
      </div>

      {/* Image Display */}
      <div className="relative">
        <Link to={images[currentIndex].to}>
          <img
            src={images[currentIndex].src}
            alt="Slide"
            className="w-full md:h-[500px] xl:h-[500px] hover:scale-105 object-cover rounded-3xl shadow-lg transition-transform duration-500"
          />
        </Link>

        {/* Caption */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded-md">
          {images[currentIndex].caption}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </motion.div>
  );
};

export default Courses;
