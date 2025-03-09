import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const TodoData = () => {
  const [data,setData]=useState([])
  async function getdata() {
    try {
      const response=await axios.get('http://localhost:4000/image')
      console.log(response.data.data)
      setData(response.data.data)
    
    } catch (error) {
      console.log(error)
      setData([])
    }
  }
  useEffect(()=>{
    getdata()
  },[])
  
   async function handledelete(id){
    try {
      const response= await axios.delete(`http://localhost:4000/image/${id}`)
      console.log(response.data.msg)
      setData(data.filter((items) => items._id!==id))
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <div>
    {
      data.map((data,index)=>(
        <div> 
          <div> {index+1}</div>
        <div key={data._id}>{data.name} </div>
        <div>{data.address} </div>
        <div>{data.phone} </div>
        <div className=' flex justify-center items-center object-cover '>
          <img
          alt='notice '
          src={data.imageurl}
          className='h-40  w-60 rounded-full border-black border-2'
          />
           </div>
           <div className='flex gap-10 justify-evenly'>
           <div> <button onClick={()=>handledelete(data._id)} className=' text-xl bg-red-500  text-white p-2  rounded-lg '> delete user</button></div>
           <div> 
         <Link to={`/Insert/${data._id}`}> <button className=' text-white bg-purple-500 p-2  rounded-xl  '>update user </button></Link>  
            </div> 
            </div>
        </div>
      ))

    }
    
    
    </div>
  )
}

export default TodoData
