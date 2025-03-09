import React from 'react'

const Fbloginpageclone = () => {
    return (
        <>
            <div className='h-[100vh] w-[100vw] bg-slate-100 absolute top-0 '>
                <div className='  ml-64 '>
                    <div className='mt-44 flex flex-col'>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg' className=' w-[320px] h-[106px] ml-[-23px]' alt='' />
                        <h3 className=' text-[30px]'>Connect with friends and the world<br></br> around you on Facebook.</h3>
                    </div>
                    <div className='right flex ml-[600px] flex-col absolute top-[70px] mt-14 h-[380px] bordee-white w-[360px] m-[40px] pt-[10px] pb-[24px] shadow-xl z-50  bg-white rounded-lg'>
                        <input type='text' placeholder='Email or Phone Number' className='  rounded-md border-[1px]  border-slate-300 w-[340px]  py-2 mx-[10px] h-[52px] px-2 mt-2 ' />
                        <input type='password' placeholder='Password' className='rounded-md  border-[1px]   border-slate-300  w-[340px]  py-2 mx-[10px] h-[52px]  mt-4 px-2' />
                        <button type='button' className='bg-blue-500 mt-4 h-[52px] mx-[10px]  rounded-md text-lg hover:cursor-pointer   text-white font-semibold'> Log In</button>
                        <p className=' hover:border-b-[1px]  border-black h-auto w-max ml-[35%] mt-4  text-blue-500 hover:cursor-pointer'> Forgot Password? </p>
                        <hr className=' border-1 border-slate-200 mx-3 mt-6' />
                        <button type='button' className='mt-7 bg-green-500 h-[52px] rounded-md w-[180px] mx-24 hover:bg-green-400 text-white font-semibold'> Create  new Account</button>




                    </div>


                </div>

            </div>


        </>
    )
}

export default Fbloginpageclone
