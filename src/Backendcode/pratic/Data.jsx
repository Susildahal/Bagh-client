import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Data = () => {
    const [server, setServer] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get('http://localhost:4000/Insert');
            setServer(response.data);
         
       
        } catch (error) {
            setError("Some error happened in the server");
            setServer([]);
        } finally {
            setLoading(false);
         
        }
   
    }

    async function handleDelete(id) {
        if (!window.confirm("Are you sure you want to delete this item?"))return
        try {
            await axios.delete(`http://localhost:4000/Insert/${id}`);
            setServer (server.filter ((items)=> items._id!==id));
            // Remove the deleted item from state
          
            alert("Data deleted successfully!");
        } catch (error) {
            alert("Error deleting data. Please try again.");
            console.error("Delete error:", error);
        }
    }

    return (
        <div>
            <div className="text-center text-red-400 text-4xl my-5">
                <Link to="/User">+ Create New User</Link>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Loading data...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : server.length === 0 ? (
                <p className="text-center text-gray-500">Data is not found in the server</p>
            ) : (
                <table border={2} cellPadding={10} cellSpacing={10} className="mt-10 mx-auto">
                    <thead>
                        <tr className="text-xl border-black border-2">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {server.map((data) => (
                            <tr key={data._id}>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td>{data.age}</td>
                                <td>{data.phonenumber}</td>
                                <td className="flex gap-4">
                                    <Link to={`/Insert/${data._id}`} className="text-blue-500">Update</Link>
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleDelete(data._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Data;
