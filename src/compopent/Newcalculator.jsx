import React, { useState } from 'react'

const Newcalculator = () => {
  const [input, SetInput] = useState('')

  function handleClick(e) {
    SetInput(input + e.target.value)
    console.log(input)
  }
  return (
    <div className=' flex justify-center items-center '>
      <div className='grid  bg-slate-100 z-50 shadow-2xl                                            md:h-[470px] md:mt-[15vh] lg:mt-[20vh] w-[100vw] rounded-2xl   h-[100vh] md:w-[300px] mx-2 '>
        <div> <input type='text' className=' border-[1px]  text-black  border-slate-300 h-[70px] w-[90%] md:mt-6 mx-4 rounded-lg mt-20 ' value={input} readOnly />
          <div className='  grid grid-cols-4 gap-7 mt-5 mx-5'>
            <button type='button' className=' border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 p-2 text-center text-2xl rounded-full  focus:bg-red-200'>DEL</button>
            <button className='border-[1px] h-[60px] w-[60px]  bg-white hover:bg-slate-400 rounded-full   text-center text-2xl  focus:bg-red-200' onClick={handleClick}>/</button>
            <button className=' border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full text-center text-2xl  focus:bg-red-200' onClick={handleClick}>*</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl  focus:bg-red-200'>-</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200' value={5} onClick={handleClick}>5</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>4</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>6</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>+</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>1</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>2</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>3</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>del</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>00</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>.</button>
            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full  text-center text-2xl focus:bg-red-200'>%</button>

            <button className='border-[1px] h-[60px] w-[60px] bg-white hover:bg-slate-400 rounded-full text-center text-2xl  focus:bg-red-200'> =</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Newcalculator
