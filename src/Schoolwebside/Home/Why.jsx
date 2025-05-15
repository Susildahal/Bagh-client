import React from "react";
import  {motion}from 'motion/react'

const Why = () => {
  const images = [
    { src: "../image/why1.png", alt: "Image 1", text: "Building Bright Futures" },
    { src: "../image/why2.jpg", alt: "Image 2", text: "Empowering Young Minds" },
    { src: "../image/why3.jpg", alt: "Image 3", text: "Knowledge in Action" },
    { src: "../image/why3.webp", alt: "Image 4", text: "Smart Learning Hub" },
  ];

  return (
    <div
 
     className="mt-28 flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center">
        <motion.h1  initial={{x:-300  ,opacity:0}} whileInView={{x:0,opacity:1}} transition={{ duration:0.5}} whileHover={{x:10}} className="text-3xl font-bold">Why Bagh Bhairav</motion.h1 >
        <h3 className="px-4 lg:px-40 text-center mt-4   text-sm lg:text-2xl">
          Shree Bagh Bhairav Technical Secondary School is a renowned institution in Nepal, 
          dedicated to providing quality  education with a strong technical foundation.
          The school consistently achieves outstanding academic results, preparing students 
          for both higher education and skilled careers. With a unique blend of traditional 
          values and modern educational approaches, it equips students with the knowledge and 
          skills needed to excel in an increasingly competitive world.
        </h3>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center transition-transform duration-300 transform hover:scale-105"
          >
            < motion.div
             className="relative  hover:rounded-3xl flex items-center justify-center"
         whileHover={{backgroundColor:'whitesmoke', x:20}}
         transition={{
          duration:1 }}
 > 
              < motion.img
                src={image.src}
                alt={image.alt}
                className="h-[110px] w-[110px] rounded-full object-cover shadow-lg transition duration-300 hover:shadow-xl hover:shadow-red-400"
                transition={{duration:0.5, ease:'linear'}}
                initial={{ y:-200,x:0 ,opacity:0}} 
                whileInView={{x:0,y:0 ,opacity:1}}
              
              />
            </motion.div>
            <p className="text-blue-500 text-lg font-semibold mt-3">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
