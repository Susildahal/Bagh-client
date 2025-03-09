import React, { useState } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const [isHidden, setIsHidden] = useState(false); // Track content visibility
  const [colorState, setColorState] = useState("white"); // Track text color

  // Toggle content visibility
  const handleToggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
    <motion.div
      className="flex   pt-10 md:pt-40 hover:drop-shadow-2xl lg:px-[20vw] sm:px-3 shadow-2xl rounded-3xl p-4 md:p-10 text-justify"
      initial={{ y: "-100%", opacity: 0 }} // Start from top with fade-in
      whileInView={{ y: 0, opacity: 1 }} // Slide down smoothly
      transition={{ duration: 0.4 }}
    >
      <div>
        {/* Title Animation */}
        <motion.h1
          className="text-center text-2xl md:text-5xl font-serif"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Introduction
        </motion.h1>

        <div className="mt-2 text-center font-semibold md:text-2xl">
          {/* Paragraph Animation with Color Change */}
          <motion.p
            initial={{ color: "white", opacity: 0 }}
            animate={{ color: colorState }}
            whileInView={{ color: "white", opacity: 1 }}
            onViewportLeave={() => setColorState("white")} // Reset on exit
            transition={{ duration: 3, delay: 1 }}
          >
            Shree Bagh Bhairav Technical Secondary School is committed to
            delivering quality technical and vocational education. At Shree Bagh
            Bhairav, we understand the importance of practical skills and
            hands-on learning in shaping the future of our students.
          </motion.p>

          {/* Second Paragraph with Color Animation */}
          <motion.p
            initial={{ color: "white", opacity: 0 }}
            animate={{ color: colorState }}
            whileInView={{ color: "white", opacity: 1 }}
            onViewportLeave={() => setColorState("white")}
            transition={{ duration: 3, delay: 1 }}
          >
            Our mission is to equip every student with the technical knowledge
            and competencies required to excel in the modern workforce.
          </motion.p>

          <p>
            Our curriculum integrates Science, Technology, Engineering, and
            Mathematics (STEM) with specialized technical programs in areas such
            as computer science, engineering, and more. These programs are
            tailored to meet the demands of the modern workforce and equip
            students with the tools needed for success in competitive
            industries.
          </p>

          {/* Conditionally Render More Content with Smooth Fade-in */}
          {isHidden && (
            <motion.div
              className="mt-4  b text-back "
              initial={{ opacity: 0, scale:0  }}
              whileInView={{ opacity: 2,scale:1 }}
              exit={{ opacity: 0}}


              transition={{ duration: 1, delay:0.5}}
             
            >
              We emphasize a curriculum that integrates Science, Technology,
              Engineering, and Mathematics (STEM), alongside vocational training
              in various technical fields. By fostering creativity and
              problem-solving skills, we prepare students to meet real-world
              challenges and contribute meaningfully to society. Shree Bagh
              Bhairav is dedicated to creating a dynamic learning environment
              where innovation and technical expertise thrive.
            </motion.div>
          )}

          {/* Button to Toggle More Content */}
          <div className="flex justify-end items-end flex-col mt-4">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleToggleVisibility}
            >
              {isHidden ? "Hide" : "View More"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
   
    </>
  );
}

export default Introduction;
