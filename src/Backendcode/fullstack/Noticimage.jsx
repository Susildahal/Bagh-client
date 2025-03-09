import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Noticimage = () => {
    const [datas, setData] = useState([]); // State for fetched data
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState(null); // State for error messages

    // Function to fetch data from the backend
    async function fetchData() {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:4000/notic');
            setData(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to load data. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    // Function to handle record deletion
    async function handleDelete(id) {
        setLoading(true);
        setError(null);
        try {
            await axios.delete(`http://localhost:4000/notic/${id}`);
            setData((prevData) => prevData.filter((item) => item._id !== id));
            toast.success('Data deleted successfully');
        } catch (error) {
            console.error('Error deleting record:', error);
            toast.error('Failed to delete data');
        } finally {
            setLoading(false);
        }
    }

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Data Records</h1>

            {/* Show error message */}
            {error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

            {/* Show loading spinner */}
            {loading && (
                <div className="flex justify-center items-center mb-4">
                    <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                </div>
            )}

            {/* Render table or message if no data is available */}
            {!loading && datas.length > 0 ? (
                <div className="overflow-x-auto w-full">
                    <table className="table-auto border-collapse border border-gray-300 bg-white shadow-md w-full max-w-5xl mx-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Password</th>
                                <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((item) => (
                                <tr
                                    key={item._id}
                                    className="text-gray-600 even:bg-gray-50 hover:bg-gray-100"
                                >
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.id}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {'*'.repeat(8)} {/* Masking password */}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.phoneNumber}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                !loading && (
                    <p className="text-gray-700 text-lg font-semibold mt-4">
                        No data available in the database.
                    </p>
                )
            )}

            {/* Toast notifications */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
            />
        </div>
    );
};

export default Noticimage;
