import React from 'react'
import Home from './Home'
import { motion } from 'framer-motion'

const Desc = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <>
      <Home/>
      <div className='bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen w-full flex justify-center items-center text-white px-4 py-20'>
        <motion.div 
          className='p-8 md:p-14 pt-20 text-4xl md:text-6xl bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-2xl container flex flex-col gap-12 md:gap-20 border border-slate-700/30'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='space-y-12 md:space-y-20 text-center'
          >
            <motion.div variants={itemVariants} className="hover:text-cyan-400 transition-colors">
              ✨ Your Personal Data Hub ✨
            </motion.div>

            <motion.div variants={itemVariants} className="text-2xl md:text-4xl font-light space-y-8">
              <motion.p 
                className="hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                🛡️ Secure storage for personal information
              </motion.p>
              
              <motion.p 
                className="hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                📝 Manage your private notes & documents
              </motion.p>
              
              <motion.p 
                className="hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                🔑 Social media credentials vault
              </motion.p>
              
              <motion.p 
                className="hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                🌐 Cross-device synchronization
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-400 font-light"
            >
              Start organizing your digital life today!
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Desc