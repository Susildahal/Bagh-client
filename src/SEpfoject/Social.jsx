import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Social = () => {
  const [data, setData] = useState([]);

  async function getdata() {
    try {
      const response = await axios.get("http://localhost:4000/Personal");
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      setData([]);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await axios.delete(`http://localhost:4000/Personal/${id}`);
      toast.success(response.data.msg || "Data deleted successfully");
      console.log(response.data.msg);
      setData(data.filter((items) => items._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Data not found');
    }
  }

  return (
    <>
  
    <div className="min-h-screen  ">
    
    
      <div className="flex justify-center items-center ">
        <Link to="/Socialinsert">
          <img
            src="../image/addnew.jpg"
            alt="Add New"
            className="object-cover h-16 mt-16 w-16 hover:scale-110 transition-transform"
         
          />
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mt-6 p-4">
      <h1 className='text-2xl font-bold mb-4 text-black'>Password management</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-xl text-white ">
              <th className="p-2">Index</th>
              <th className="p-2">Account Type</th>
              <th className="p-2">Account ID</th>
              <th className="p-2">Account Password</th>
              <th className="p-2">Other Info</th>
              <th className="p-2">Created At</th>
              <th className="p-2">Updated At</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => (
              <tr key={items._id} className= {`border-b text-xl hover:bg-gray-400 text-center ${index %2 ==1?" bg-purple-300  text-black":"bg-red-300 text-white"}`} >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{items.type}</td>
                <td className="p-2">{items.userid}</td>
                <td className="p-2">{items.password}</td>
                <td className="p-2">{items.info}</td>
                <td className="p-2">{items.date}</td>
                <td className="p-2">{!items.updatedat ? "Not updated yet" : items.updatedat}</td>
               
                <td className="p-2 flex justify-center gap-2">
                  <button
                    onClick={() => handleDelete(items._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                  <Link to={`/Socialupdate/${items._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <div className="flex justify-center items-center text-xl font-semibold text-red-500 mt-4">
            Data not found
          </div>
        )}
      </div>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
    </>
  );
};

export default Social;
