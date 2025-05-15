import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Document = () => {
  const [data, setData] = useState([]);

  async function getdata() {
    try {
      const response = await axios.get('http://localhost:4000/Document');
      setData(response.data.data);
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Error fetching data');
      setData([]);
    }
  }

  useEffect(() => {
    getdata();
  }, []);
  async function handledelete(id) {
    try {
      const response = await axios.delete(`http://localhost:4000/Document/${id}`)
      toast.success(response.data.msg || "data is deleted succesfully ")
      setData(data.filter((items)=>items._id!==id))
    } catch (error) {
      toast.error(error.response?.data?.msg ||"something error happen")
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='flex justify-center mb-8'>
        <Link to='/Documentinsert'>
          <img
            src='../image/addnew.jpg'
            alt='Add New'
            className='h-14 w-14 object-cover rounded-full mt-10 shadow-lg hover:scale-110 transition duration-300 cursor-pointer'
          />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90vw] mx-auto'>
        {data.map((item, index) => (
          <div key={item._id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300'>
            <div className='p-4 text-center'>
              <h2 className='text-3xl font-semibold text-gray-800'> The types of document is {item.name}</h2>
              <p className='text-gray-600 text-3xl mt-1'> {item.desc}</p>
              <span className='text-xl text-gray-500'> Created At {new Date(item.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
              <img
                src={item.image}
                alt={`Document ${index + 1}`}
                className=' w-[98%] h-[700px] object-fill'
              />
            </div>
            <div className='  pt-8  pb-8 flex justify-evenly items-center'>
              <button className='p-5 text-2xl rounded-xl text-white hover:bg-purple-300   bg-purple-500 text-green' onClick={() => handledelete(item._id)}> Delete</button>
              <button className='p-5 text-2xl rounded-xl text-white hover:bg-blue-300   bg-blue-500 text-green'> <Link to={ 
                `/Documentupdate/${item._id}`}>update</Link> </button>
            </div>
          </div>
        ))}
        {
          data.length === 0 && (
            <div className='text-red-600 text-center text-3xl'>   data is not found </div>
          )
        }
      </div>

      <ToastContainer autoClose={3000} position='top-right' />
    </div>
  );
};

export default Document;