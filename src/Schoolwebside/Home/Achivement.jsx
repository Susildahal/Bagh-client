import { motion } from "framer-motion";
import React,{useState} from "react";

const Achievements = () => {
  const [likes, setLikes] = useState([false, false, false]);
  // ... rest of the existing code

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };
  const achievements = [
    {
      src: "/image/1.jpg",
      alt: "Achievement Image",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, ipsa nihil. Fuga doloribus iure soluta.",
    },
    {
      src: "/image/2.jpg",
      alt: "Achievement Image",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, ipsa nihil. Fuga doloribus iure soluta.",
    },
  ];

  const notic = [
    { src: "/image/1.jpg", alt: "image", header: "Lorem Ipsum Header", body: "Lorem Ipsum body text" ,like:"👍🏻" },
    { src: "/image/2.jpg", alt: "image", header: "Lorem Ipsum Header", body: "Lorem Ipsum body text",like:"👍🏻"  },
    { src: "/image/3.jpg", alt: "image", header: "Lorem Ipsum Header", body: "Lorem Ipsum body text",like:"👍🏻" }
];

  return (
    <>
     <>
            {/* Animated Heading */}
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:text-3xl text-lg font-semibold font-mono lg:mt-60 mt-32 text-center w-full"
            >
                Notice and News of Our School
            </motion.div>

          

            <div className="relative overflow-hidden mt-2 h-auto w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {notic.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center  p-4 shadow-lg rounded-lg w-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img className="h-[250px] w-full object-cover rounded-md" src={item.src} alt={item.alt} />
              
              <motion.div
                className={`   relative left-[-190px]  px-2 text-5xl cursor-pointer ${
                  likes[index]
                    ? 'text-white ,'
                    : 'bg-gradient-to-r   from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent'
                }`}
                onClick={() => handleLike(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: likes[index] ? [1, 1.4, 1.2] : 1,
                  transition: { duration: 0.5,ease: "easeInOut" },
                }}
              >
                {item.like}
                
              </motion.div>
            

              <div className="text-xl font-bold mt-2">{item.header}</div>
              <div className="text-center px-2">{item.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
         
            </>
      <div className="mt-20 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-4xl font-bold text-blue-500"
        >
          Our Achievements
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-blue-500 rounded-full w-60 mt-2"
        ></motion.div>

        <div className="mt-12 lg:flex flex:col  items-center gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-col gap-6 items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={item.src}
                alt={item.alt}
                className="h-64 w-80 rounded-lg  object-cover shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ x: "-50%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="text-2xl  lg:px-[10vw]">{item.content}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Principal's Message Section */}
      <div className="mt-40">
        <motion.div
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center text-3xl md:text-4xl font-semibold"
        >
          Message from the Principal
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-8 text-lg md:text-2xl">
          {/* Message Content */}
          <motion.div
            className="md:pt-16 pt-2 px-6 md:px-20 text-center leading-relaxed"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            Our aim is to inspire students to achieve the highest standards of
            intellectual and personal development through a stimulating and
            comprehensive program. We aim to prepare students to become
            responsible citizens and future leaders.
            <motion.div
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 3, delay: 1 }}
              className="text-center pt-10 text-sky-400 text-3xl md:text-5xl italic"
            >
              Sushil Dahal
              <p className="text-lg text-gray-600">Principal</p>
            </motion.div>
          </motion.div>

          {/* Principal's Image */}
          <div className=" lg:h-[400px] :h-[200px] ">
            <motion.img
              src="/image/1.jpg"
              className=" lg:h-[350px] lg:w-[25vw]  mb-52 w-[70vw] pt-10 mx-auto rounded-3xl"
              initial={{ y: -500, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
