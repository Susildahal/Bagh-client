import React, { useState } from 'react';
import axios from 'axios';
const Newtodo = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [phonenumber, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [server,setServer]=useState("")

    const handleSubmit =async () => {
      
        try {
           const response= await axios.post("http://localhost:4000/",{title, type, phonenumber, email})  
           console.log(response.data.message)
           setServer(response.data.message)
        } catch (error) {
            console.error(error)
            setServer("some error happen ")
        }
    };

    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-5 text-center">New To-Do</h1>
                <div className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Title</span>
                        <input
                            type="text"
                            placeholder="Enter the title"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Type</span>
                        <input
                            type="text"
                            placeholder="Enter the type"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            onChange={(e) => setType(e.target.value)}
                            value={type}
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Phone Number</span>
                        <input
                            type="text"
                            placeholder="Enter the phone number"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            onChange={(e) => setNumber(e.target.value)}
                            value={phonenumber}
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email</span>
                        <input
                            type="email"
                            placeholder="Enter the email"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </div>
           
        </div>
         <div> {server}</div>
         </>
    );
};

export default Newtodo;
