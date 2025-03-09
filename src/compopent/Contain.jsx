import React from "react";

const Contain = () => {
  return (
    <>
      {/* Introduction Section */}
      <div className="mt-3">
        <div className="font-serif flex items-center justify-center text-3xl text-red-500 font-bold">
          Introduction
        </div>
        <p className="text-justify text-lg md:text-xl px-4 md:px-12 lg:px-64">
          Hill Side Secondary School is dedicated to providing quality education. At Hill Side, we
          value diversity and recognize that every student is unique. Our mission is to support each
          student in reaching their full potential and exploring new horizons in learning. We foster
          creativity and encourage students to be passionate about knowledge and discovery. Hill Side
          emphasizes Science, Technology, English, Arts, and Mathematics-based education in our
          classes daily, ensuring that our students excel academically and are prepared for future
          success.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
        <div className="h-44 w-52 flex flex-col items-center justify-center hover:bg-slate-400 rounded-lg text-center  text-lg md:text-xl font-bold">
          ✍️
          <p>200+ Students</p>
        </div>
        <div className="h-44 w-52 flex flex-col items-center justify-center hover:bg-slate-400 rounded-lg text-center text-lg md:text-xl font-bold">
          100% Good Service
        </div>
        <div className="h-44 w-52 flex flex-col items-center justify-center hover:bg-slate-400 rounded-lg text-center text-lg md:text-xl font-bold">
          30+ Teachers
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-4 mt-6 px-4 md:px-12">
        {/* Image Section */}
        <div>
          <img
            src="image/program.jpg"
            alt=""
            className="w-full rounded-2xl h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-justify text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cum corporis at dolore
          similique facere assumenda ipsa nam quidem, unde totam vel corrupti eveniet eaque
          architecto temporibus exercitationem impedit consectetur? Similique minus deserunt ea
          praesentium earum accusantium dolorem deleniti dolorum quos nesciunt sint assumenda
          doloremque unde, necessitatibus fuga voluptatum impedit fugiat sed fugit. Sit nobis
          eligendi, impedit consectetur molestiae assumenda.
        </div>
      </div>
    </>
  );
};

export default Contain;
