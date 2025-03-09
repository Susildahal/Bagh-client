import { motion } from "framer-motion";
import React from "react";

const Primary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="h-auto lg:h-[94.5vh] mt-[-60px] bg-slate-800 w-[100vw] text-white"
    >
      <main className="lg:ml-72 ml-5 mt-20 lg:mt-28">
  

        <div>
          <motion.h1
            className="text-center pt-10 text-xl md:text-3xl"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Primary
          </motion.h1>
          <motion.div
          initial={{scale:0 ,opacity:0}}
          whileInView={{scale:1 ,opacity:1}}
          transition={{duration:2}}  
           className=" h-2 w-[85vw] rounded-full bg-red-400"></motion.div>

          <div className="grid lg:grid-cols-2 text-white mt-8 gap-20 grid-cols-1">
            {/* Left Section (Text) */}
            <motion.div
              className="text-center text-lg md:text-2xl px-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Primary schooling is a time of rapid intellectual and personal
              change. Bagh Bhairav School, located in Mahankal-4, Kaleshwor,
              Lalitpur, helps students strengthen their independent learning
              skills. As a result, students begin to pursue specific learning
              interests.
              <br />
              <br />
              We ensure the broad-based development of students. This includes
              developing their cognitive, social, emotional, cultural, and
              physical skills to the best of their abilities, enhancing and
              preparing them for their future schooling careers. The primary
              level includes classes from 1 to 6, where the foundation of strong
              learning habits is laid. Since children during this period are
              quite active, creative, energetic, and filled with curiosity, we
              ensure that the class is engaging and holds their attention
              throughout the sessions.
              <br />
              <br />
              Our primary level includes all the essential requirements for
              laying a solid foundation. Bagh Bhairav School also involves
              parents in the education of their children, as the modern primary
              education system emphasizes the significant role of parents, with
              whom the child spends a considerable part of their life.
            </motion.div>

            {/* Right Section (Image) */}
            <motion.div
              initial={{ x: 50, scaleX: 0, opacity: 0 }}
              whileInView={{ x: 0, scaleX: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                className="h-[400px] w-[500px] rounded-lg shadow-lg mx-auto"
                src="/image/Newprimary.jpeg" // Image path from public folder
                alt="Primary"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Primary;
