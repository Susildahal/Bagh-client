import React from 'react';

const Card = () => {
  return (
    <>
    <div className=" grid  md:grid-cols-2  gap-6 mt-5 mx-6"> {/* No margin here as well */}
        <div> 
          <img src='image/achiment.jpg ' alt='' className='md:h-60:' />

        </div>
 
        <div className='md:px-9 text-justify '> 
          <p className='text-base border-l-2 border-black mb-3'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, praesentium!</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis laborum eius saepe natus ex dolorem, aperiam delectus earum dignissimos voluptates. Error, provident. Quibusdam animi quam, aliquid ut magnam impedit?
        </div>
    </div>

    </>
  );
};

export default Card;
