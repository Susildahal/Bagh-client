import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Display = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/form");
        setData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data.");
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (item) => {
    navigate("/Update", { state: { userData: item } });
  };


  async function handleDelete(id) {

    try {
        await axios.delete(`http://localhost:4000/form/${id}`);
        setData((prevData) => prevData.filter((item) => item._id !== id));
 
    } catch (error) {
        console.error('Error deleting record:', error);
      
    } 
}
  return (
    <>
      <Link to="/Form">Add New</Link>
      <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700 mb-4">User Data</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {data.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Gmail</th>
                <th className="py-2 px-4 border-b">Action</th>
              


              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 border-b text-center">{item.name}</td>
                  <td className="py-2 px-4 border-b text-center">{item.phone}</td>
                  <td className="py-2 px-4 border-b text-center">{item.address}</td>
                  <td className="py-2 px-4 border-b text-center">{item.gmail}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="text-blue-500 underline"
                      onClick={() => handleUpdate(item)}
                    >
                      Update
                    </button>
                    <td className="py-2 px-4 mt-1  border-b text-center"  onClick={() => handleDelete(item._id)} >Delate</td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No data available.</p>
        )}
      </div>
    </>
  );
};

export default Display;
