import React from 'react'
import { motion } from 'framer-motion'

const Ourservice = () => {
  return (
    <div>
       <div className=' h-auto   '>
          <motion.h1
           className='  lg:text-4xl text-3xl text-center   pt-10 lg:pt-32'
           initial={{y:'-100%' ,opacity:0 ,scale:0}}
           whileInView={{y:0,opacity:1,scale:1}}
     transition={{duration:2 ,ease:'easeInOut' }}
           > Our Services  </motion.h1>
        <div className='grid  gap-14  pt-4 lg:pt-9 grid-cols-1 lg:grid-cols-2'>    
<img 

src='../image/1.jpg'
 alt='image'
  className=' px-2   lg:mb-20 lg:pl-4 h-[70vh] [border-radius:62%_38%_68%_32%_/_36%_60%_40%_64%]  '/>
     
        <div>
            <h1 className=' text-3xl  px-5  mb-5 '>Building quality lives and strong culture through...</h1>
      <motion.ul 
      initial={{x:'-50%' ,opacity:0 ,scale:0.5}}
      whileInView={{x:0 ,opacity:1,scale:1}}
transition={{duration:2,ease:'easeInOut' }}
      className='  flex  mb-20  mt-3 text-left text-2xl lg:text-4xl flex-col lg:gap-6 gap:3  pt-5'
      >
        < li 
     

        >   Good Reading Environment</li>
        <li >Experienced and Supportive Teachers</li>
        <li>Regular Revision Classes</li>
        <li>Access to Computer Labs</li>
        <li>Clean and Safe School Premises</li>
        <li>Organized Study Materials</li>
        <li>Empowerment to learn something new </li>
        </motion.ul>

      





        </div>
    </div>
    </div>
    </div>
  )
}

export default Ourservice
