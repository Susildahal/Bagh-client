import { motion } from "framer-motion";
import React from "react";

const Ourcorevalue = () => {
  return (
    <div className="min-h-screen   py-10 px-4 lg:px-20">
      <motion.h1
        className="text-3xl lg:text-5xl font-bold text-center mb-10 text-white"
        initial={{ y: "-100%", opacity: 0, scale: 0 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        Our Core Values
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <motion.img
          src="/image/1.jpg" // ✅ Use /image/1.jpg if in public folder
          alt="Core Value"
          initial={{ x: "-40%", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-[70vh] object-cover rounded-[60%_40%_70%_30%_/_40%_60%_40%_60%] shadow-xl"
        />

        {/* Text Section */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 px-2">
            Building quality lives and strong culture through...
          </h2>

          <ul className="flex flex-col gap-4 lg:gap-6 text-xl lg:text-2xl text-white font-medium px-2">
            {[
              "Compassion",
              "Respect",
              "Service",
              "Excellence",
              "Teamwork",
              "Integrity",
              "Empowerment",
            ].map((value, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#3b82f6" }} // Tailwind blue-500
                transition={{ type: "spring", stiffness: 300 }}
              >
                • {value}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ourcorevalue;
