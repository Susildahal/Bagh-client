import React from "react";

const Clone = () => {
  return (
    <>
      {/* Card Section */}
      <div className=""> {/* Ensure no margin here */} 
        <div className= " bg-slate-300 flex flex-col shadow-xl z-10 h-[415px] md:h-[400px] md:mx-[15%] text-black rounded-xl ">
          <div className="p-5 md:pl-24 pt-10 font-serif text-base md:text-lg pr-2">
            <span className="text-3xl text-white">Lorem ipsum dolor sit amet consec.</span>
            <br />
            Obcaecati voluptatum nam repellendus.
            <p className="mt-10 md:w-72 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt at,
              deleniti explicabo nobis odio praesentium, ullam non veritatis rem ut doloribus
              beatae dicta libero possimus doloremque et recusandae enim.
            </p>
            <button className="mt-10 bg-slate-600 h-12 w-24 rounded-lg hover:bg-stone-50 hover:text-black text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Two-Row Grid */}
      <div className="md:grid md:grid-cols-2 grid-rows-2 mt-10 gap-4  flex flex-col md:h-[600px] lg:h-[480px] ">
        {/* Text Section */}
        <div className="md:p-12 lg:mt-[30px]">
          <p className="md:text-justify ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ab ipsam
            enim expedita odit quod placeat rem non ratione consequatur doloremque ad
            atque, ipsa, velit nobis delectus illo facilis minus? Modi in fuga expedita
            neque? Aliquam, maxime alias consequuntur suscipit optio dolorem cupiditate
            unde id quo delectus possimus nihil praesentium! Provident illum aut non
            perferendis nemo excepturi itaque qui rerum!
        
            Nostrum ex aliquam neque eum asperiores officiis exercitationem eius veritatis,
            incidunt ad! Accusamus odit veniam alias laborum optio reprehenderit consectetur,
            explicabo quaerat tempora, corrupti architecto atque voluptatibus numquam labore
            voluptas.
            </p>
        </div>

        {/* Image Section */}
        <div className="md:mt-20 items-center md:pr-5 lg:mt-0">
          <img alt=""
            src="/image/achiment.jpg"
            className="md:h-[350px] object-cover md:mr-5 lg:h-[400px] "/>
            
            </div>
         </div>   
    </>
  );
};

export default Clone;
