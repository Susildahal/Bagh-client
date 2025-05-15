import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast ,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Notic = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}
/api/notic/getallNotic`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
      setData([]);
      toast.error(error.response?.data?.msg || "Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}
/api/notic/deletedNotic/${id}`,{ 
        withCredentials:true
      });
      setData((prev) => prev.filter((item) => item._id !== id));
      toast.success("Item deleted successfully");

    } catch (error) {
      console.error("Error deleting item", error);
      toast.error(error.response?.data?.msg || "Something went wrong");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center pt-11">User Messages</h1>
      {data.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item._id} className="bg-black text-white rounded-2xl shadow-lg p-6 space-y-2 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold">{item.firstName} {item.lastName}</h2>
              <p><span className="font-medium">Email:</span> {item.email}</p>
              <p><span className="font-medium">Phone:</span> {item.phone}</p>
              <p className=" whitespace-pre-wrap"><span className="font-medium">Message:</span> {item.message}</p>
              <button
                onClick={() => handleDelete(item._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Notic;
