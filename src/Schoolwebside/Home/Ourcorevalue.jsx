import { motion } from 'motion/react'
import React from 'react'


const Ourcorevalue = () => {
  return (
    <div className=' h-auto  '>
          <motion.h1
           className='  lg:text-4xl text-3xl text-center   pt-10 lg:pt-32'
           initial={{y:'-100%' ,opacity:0 ,scale:0}}
           whileInView={{y:0,opacity:1,scale:1}}
     transition={{duration:2 ,ease:'easeInOut' }}
           > Our Core Value </motion.h1>
        <div className='grid  gap-14  pt-4 lg:pt-9 grid-cols-1 lg:grid-cols-2'>    
<motion.img 
      initial={{x:'-40%' ,opacity:0 ,scale:0.5}}
      whileInView={{x:0 ,opacity:1,scale:1}}
transition={{duration:2,ease:'easeInOut' }}
src='../image/1.jpg'
 alt='image'
  className=' px-2   lg:mb-20 lg:pl-4 h-[70vh] [border-radius:62%_38%_68%_32%_/_36%_60%_40%_64%]  '/>
     
        <div>
            <h1 className=' text-3xl  px-5  '>Building quality lives and strong culture through...</h1>
      <ul 

      className='  flex   mb-20 text-center text-2xl lg:text-4xl flex-col lg:gap-6 gap:3  pt-5'
      >
        <li > Compassion</li>
        <li>Respect</li>
        <li>Service</li>
        <li>Excellence</li>
        <li>Teamwork</li>
        <li>Integrity</li>
        <li>Empowerment</li>
        </ul>

        </div>
    </div>
    </div>
  )
}

export default Ourcorevalue