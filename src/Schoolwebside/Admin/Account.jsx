import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/getalluser`);
            const filteredUsers = response.data.data.filter(user => user.name !== "Sushil Dahal");

            setUser(filteredUsers);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch user data.");
            setUser([]);
            setLoading(false);
            toast.error("Error fetching users");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/user/deleteuser/${id}`,{
                withCredentials:true
            });
            toast.success(response.data.msg || "User deleted successfully");
            setUser(prev => prev.filter(user => user._id !== id));
        } catch (error) {
            if (error.response?.status === 403) {
                toast.error("You are not authorized to delete this user");
            }else{
            toast.error(error.response?.data?.msg || "Failed to delete user");
            }
        }
    };

    return (
        <section className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl pt-7 text-neutral-800 font-bold mb-6 text-center">User Accounts</h1>

                {loading && <p className="text-center text-blue-500">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && user.length === 0 && (
                    <p className="text-center text-gray-500">No users found.</p>
                )}

                <div className="space-y-4">
                    {user.map((data, index) => (
                        <article
                            key={index}
                            className="bg-white text-black shadow-md rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center"
                        >
                            <p>{index + 1}</p>
                            <p><span className="font-semibold text-black">Name:</span> {data.name}</p>
                            <p><span className="font-semibold text-black">Email:</span> {data.email}</p>
                            <p><span className="font-semibold text-black">Role:</span> {data.role}</p>
                            <div className='flex gap-7'>
                                <button className='bg-orange-400 hover:bg-orange-600 p-3 rounded-xl'>
                                    <Link to={`/Adminoutlet/Updateaccount/${data._id}`}>Update</Link>
                                </button>
                                <button
                                    className='bg-red-400 hover:bg-red-600 p-3 rounded-xl'
                                    onClick={() => handleDelete(data._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </section>
    );
};

export default Account;
