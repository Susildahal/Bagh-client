import { motion } from 'motion/react'
import React from 'react'

const Fotter = () => {
    return (
        <div className='lg:ml-[250px] mt-20 bg-slate-600 font-semibold text-white'>
            <div className=' lg:flex-row flex flex-col  lg:ml-0 ml-5 justify-evenly rounded-tr-full gap-12 lg:pt-40'>

                <div className='lg:flex flex-col  hidden  lg:mt-0  mt-5  justify-center '>
                    <div className=' text-gray-400 text-4xl'>
                        Bagh Bhariv School
                        <p> mahankal -4 Kaleshower </p>
                        <img src='../image/1.jpg' alt='school' className='h-[250px]  ml-7 mt-6  w-[250px] rounded-3xl' />

                    </div>
                </div>
                <div className=' text-3xl flex flex-col gap-9'>
                    <div className=' flex gap-16   lg:mt-0 mt-24 mix-blend-color'>
                        < div><motion.img
                            whileHover={{ rotate: 360, scaleX: 1.5, scaleY: 1.5 }}
                            whileTap={{ rotate: 360, scaleX: 1.5, scaleY: 1.5 }}

                            transition={{ duration: 2 }}
                            src='../image/fb.png' alt='fb' className='h-16 w-16 rounded-full object-cover' />   </ div>
                        <div>< motion.img src='../image/gmail.png' alt='gmail' className='h-16 w-16 rounded-full object-cover  '
                            whileHover={{ rotate: 360, scaleX: 1.5, scaleY: 1.5   }}
                            whileTap={{ rotate: 360, scaleX: 1.5, scaleY: 1.5 }}
                            transition={{ duration: 2 }}
                        />  </div>


                    </div>
                    <div className='flex flex-col  text-xl gap-2'>
                        <p> 🌐  Mahankal -4  kaleshower <br /> lalitpur Nepal </p>
                        <p> 📞 +2316457896 ,1234567899 <br />1235665544554 </p>
                        <p >   📧 nepal@gmail.com </p>
                    </div>
                </div>
                <div className='bg-green flex  cursor-pointer flex-col gap-4 text-3xl '>
                    <p>  Quick Links </p>
                    <p> Home</p>
                    <p> Gallery</p>
                    <p> Contact Us </p>
                    <p> Our services  </p>
                </div>
            </div>
        </div>
    )
}
export default Fotter
