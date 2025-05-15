import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Data = () => {
  const [data, setdata] = useState([]);

  async function getdata() {
    try {
      const response = await axios.get('http://localhost:4000/Satodo');
      setdata(response.data.data);
    } catch (error) {
      setdata([]);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  async function handledeted(id) {
    try {
      const response = await axios.delete(`http://localhost:4000/Satodo/${id}`);
      toast.success(response.data.msg);
      setdata(data.filter((item) => item._id !== id));
    } catch (error) {
      toast.error(error.response);
    }
  }



  return (
   <> 
  
   <div className='container mx-auto h-screen p-4'>
   <div className='  flex justify-center items-center mt-10  '><Link to='/Insert'> <img src="../image/addnew.jpg" 
   alt='logo'
   className='object-cover h-16 w-16'
   /> </Link></div>
      <h1 className='text-2xl font-bold mb-4 text-white'>Task Management</h1>
      <div className='overflow-x-auto rounded-lg shadow'>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['#', 'Name', 'Lname', 'Email', 'Created', 'Updated', 'Priority', 'Title', 'Status', 'Description', 'Completed', 'Actions'].map((header, idx) => (
                <th 
                  key={idx}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item._id} className={ `${index%2==0?" bg-slate-400 text-white":" bg-red-300 text-black"} hover:bg-gray-50 transition-colors`}>
                <td className="px-4 py-3 text-lg text-gray-900">{index + 1}</td>
                <td className="px-4 py-3 text-lg text-gray-900">{item.name}</td>
                <td className="px-4 py-3 text-lg text-gray-900">{item.lname}</td>
                <td className="px-4 py-3 text-lg text-gray-900 truncate max-w-[120px]">{item.email}</td>
                <td className="px-4 py-3 text-lg text-gray-900">{new Date(item.createAt).toLocaleDateString()}</td>
                <td className="p-2 border-b">{!item.updateat ? <div>Data not updated yet</div> : <div>{item.updateat}</div>}</td>
                <td className="px-4 py-3 text-lg">
                  <span className={`px-2 py-1 rounded-full text-lg font-medium ${
                    item.priority === 'high' ? 'bg-red-100 text-red-800' :
                    item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.priority}
                  </span>
                </td>
                <td className="px-4 py-3 text-lg text-gray-900 max-w-[150px] truncate">{item.Title}</td>
                <td className="px-4 py-3 text-lg">
                  <span className={`px-2 py-1 rounded-full text-lg font-medium ${
                    item.status === 'completed' ? 'bg-blue-300 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-lg text-gray-900 max-w-[200px] truncate">{item.description}</td>
                <td className="px-4 py-3 text-lg text-gray-900">
                  {item.completedDate ? new Date(item.completedDate).toLocaleDateString() : '—'}
                </td>
                <td className="px-4 py-3 text-lg">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handledeted(item._id)}
                      className="p-2 text-red-600 hover:text-red-900 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <Link 
                      to={`/Update/${item._id}`}
                      className="p-2 text-blue-600 hover:text-blue-900 transition-colors"
                      title="Edit"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          No tasks found. Create a new one to get started!
        </div>
      )}

      <ToastContainer autoClose={3000} position="top-right" />
    </div>
    </>

  );
}

export default Data;