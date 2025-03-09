import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Data = () => {
    const [data, setData] = useState([])
    async function getdata() {
        try {
            const response = await axios.get('http://localhost:4000/newimage')
            setData(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error)
            setData([])

        }

    }
    useEffect(() => {
        getdata()
    }, [])
    async function handelDelete(id) {
        try {
            const respnse =await axios.delete(`http://localhost:4000/newimage/${id}`)
        console.log(respnse.data.msg)
        setData(data.filter((items)=>items._id!==id))
            
        } catch (error) {
            console.log(error)
            
        }
        
        
    }
    return (
        <div>
            {data.map((newdata, index) => (
                <div key={newdata._id} >
                    <div className=' flex justify-center items-center gap-7 text-xl '> {index + 1}
                        <div> {newdata.name}</div>
                        <div>{newdata.age} </div>
                        <div className='h-40 w-40 object-cover'><img
                        src={newdata.image}
                        alt={index}
                        /> </div>
                        <div className='flex gap-1 justify-center items-center '> <button className=' bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-400'> <Link to={`/Update/${newdata._id}`}>update user</Link> </button> 
                        <button className='bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-400' onClick={()=>handelDelete(newdata._id)}>delete user</button>
                        </div>
                    </div>
                </div>
            ))
            }
           
        </div>
    )
}

export default Data
