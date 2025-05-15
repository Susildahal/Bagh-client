import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const AddTeacher = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      roll: '',
      password: '',
    },
    validationSchema: Yup.object({
      id: Yup.string().email('Invalid email format').required('ID is required'),
      name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
      roll: Yup.string()
        .oneOf(['Superadmin', 'manager', 'teacher'], 'Invalid role')
        .required('Role is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      const confirmed = window.confirm(`Are you sure you want to create this ${values.name}?`);
      if (!confirmed) return;
    
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}
/api/user/createuser`, 
          values, 
          { withCredentials:true }
        );
        toast.success(response.data.msg);
        formik.resetForm();
      } catch (error) {
        toast.error(error.response?.data?.msg || 'Something went wrong');
        // Redirect to login if unauthorized (401)
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white text-black p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Create User</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* ID Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">User ID (Email only)</label>
            <input
              type="text"
              name="id"
              placeholder="Enter user email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.id}
            />
            {formik.touched.id && formik.errors.id && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.id}</p>
            )}
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Teacher Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Role</label>
            <select
              name="roll"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.roll}
            >
              <option value="">Select Role</option>
              <option value="Superadmin">Superadmin</option>
              <option value="manager">Manager</option>
              <option value="teacher">Teacher</option>
            </select>
            {formik.touched.roll && formik.errors.roll && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.roll}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-600 text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default AddTeacher;