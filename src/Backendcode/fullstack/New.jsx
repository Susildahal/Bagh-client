import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import the toast library
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for the toast notifications

const New = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    address: '',
    phone: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log form data

    try {
      const response = await axios.post('http://localhost:4000/new', formData);
      console.log(response.data);
      setFormData({ fullname: '', address: '', phone: '', password: '' });
      toast.success("Data submitted successfully!"); // Show success toast notification
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Data submission failed!"); // Show error toast notification
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">Simple Form</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Fullname */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-blue-300 border-gray-300"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-blue-300 border-gray-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-blue-300 border-gray-300"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-blue-300 border-gray-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </>
  );
};

export default New;
