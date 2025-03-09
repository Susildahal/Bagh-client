"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Mission = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotateText = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div ref={containerRef} className="relative h-[100vh] bg-gray-100 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed  top-0 left-36 h-50px w-2 bg-blue-600 z-50"
      />

      {/* Background Layer */}
      <motion.div
        style={{ y: yBg }}
        className="absolute h-[100vw] w-auto bg-red-400 bg-cover bg-center"
      />

      {/* Sticky Content Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center text-center px-6">
        <motion.div 
        initial={{ opacity: 0, scale:0.8}}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay:1, ease: "easeOut" }}
          style={{ opacity: textOpacity, scale: textScale, rotate: rotateText }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 drop-shadow-lg">
            Building a Better Tomorrow
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-600">
            Through Innovation, Knowledge & Sustainability <br/>
            <p> With Bagh Bharive  </p>
          </p>
        </motion.div>
      </div>

      {/* Scroll Content Section */}
      <div className="absolute top-[100vh] w-full px-6 py-20 space-y-16 md:space-y-32">
        {["Vision", "Mission", "Values"].map((section, index) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{  margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className={`p-8 rounded-lg bg-white shadow-xl w-[90%] md:w-3/4 lg:w-2/3 mx-auto border-l-8 ${
              index === 0 ? "border-blue-500" : index === 1 ? "border-green-500" : "border-yellow-500"
            }`}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{section}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {section === "Vision"
                ? "Our vision is to empower individuals with cutting-edge knowledge while fostering sustainable and ethical development."
                : section === "Mission"
                ? "We are committed to integrating technology and education to create impactful solutions for a better future."
                : "Integrity, Innovation, and Inclusivity are the core values that drive our mission forward."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
