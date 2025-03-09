import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [show ,SetShow]=useState('')

  function HandleShow () {
    SetShow(!show)
  
  }
  return (
    <div className='flex justify-center gap-5 flex-col items-center mt-28 h-[450px]  md:font-serif bg-slate-100 shadow-2xl mx-5 md:mx-[480px]  rounded-3xl '>
      <h1 className=' pt-3 text-3xl  ' >Login Form</h1>
      <form>
        <label>
          <div className='  '>Enter your ID</div>
          <input type='text' className=' mt-4 h-[40px] w-[250px] border-2 focus:bg-slate-200 rounded-md hover:bg-slate-250
          focus:rounded-none ' />
        </label>
        <br />
        <label>
          <div  className='mt-3'>Enter your Password</div>
          <input type={show?'test':'password'}  className=' mt-4 h-[40px] w-[250px] border-2 focus:bg-slate-200 rounded-md hover:bg-slate-250
          focus:rounded-none '/>
        </label>
        <span onClick={HandleShow} className='relative top-[-30px] left-[200px]  cursor-pointer '> {show?<div> Hide</div>:<div> Show</div>}</span>
        <br />
        <button type='submit' className=' mt-[0px] mx-20 border-[1px] rounded-md hover:bg-slate-200 text-2xl text-black  border-red-200 h-10 w-[100px]'>Submit</button>
        <div className='mt-4'>Forgot password?</div>
      </form>
      <button type='button'>
        <Link to='/Registation' className='mt-4 cursor-pointer  hover:border-b-2 mb-[5px] border-red-300'>Create a new account</Link>
      </button>
    </div>
  );
};

export default Login;
