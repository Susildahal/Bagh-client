import React from 'react'

const Course = () => {

    
    return (
        <>
            <div className=' mt-5  mx-1 '>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1 '>
                  <img src='image/school1.jpg' alt=''   className='lg:w-[33vw] md:w-[49vw]  h-[400px] rounded-lg  object-cover transition-transform duration-500 transform hover:scale-125  hover:translate-x-1 hover:-rotate-180 hover:skew-x-2 border-x-2 border-red '/>
                    <img src='image/school1.jpg' alt='' className='lg:w-[33vw] md:w-[49vw] h-[400px] object-cover  rounded-lg ' />
                    <img src='image/school1.jpg' alt='' className='lg:w-[33vw] md:w-[49vw] h-[400px] object-cover  rounded-lg' />

                </div>
            </div> 
        <div>
            <div class="transition-all duration-500 hover:border-b-4 hover:border-blue-500 cursor-pointer px-4 py-2 text-center">
  Hover Me </div></div>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum provident odit reprehenderit est dolor velit ipsam possimus porro architecto fuga libero facere atque nisi, officiis quidem expedita iusto error.
        </>
    )
}

export default Course;
