import React, { useState } from 'react';
import axios from 'axios';

const Todod = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date(); // Ensure the date is in ISO format

    if (data.length < 1 || data.length > 20) {
      setError('Please enter a valid data (1-20 characters).');
      return;
    } else {
      setError('');
    }

    try {
      const response = await axios.post("http://localhost:4000/todos", {
        date,
        data
      });

      // Reset input data
      setData('');
      setResponseMessage('Data received successfully!');
      console.log('Response from server:', response.data);

    } catch (error) {
      console.error("Error:", error);
      setResponseMessage('Server problem, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-slate-100 shadow-lg rounded-3xl p-8 w-full max-w-lg">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-red-500">This is a To-Do List</h1>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <label className="w-full">
            <p className="text-lg md:text-2xl text-gray-700 text-center">Enter your to-do items</p>
            <input
              type="text"
              className="w-full h-12 mt-4 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white py-2.5 px-5 rounded-lg text-sm md:text-base font-medium hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Submit
          </button>

          {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
          {responseMessage && <div className="text-green-500 text-sm mt-4">{responseMessage}</div>}
        </div>
      </div>
    </form>
  );
};

export default Todod;
