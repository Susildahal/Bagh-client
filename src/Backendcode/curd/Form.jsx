import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom';



const Form = () => {
  const [serverMessage, setServerMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      gmail: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .required('Name is required'),
      phone: Yup.string()
        // .matches(/^\d{10}$/, 'Phone must be a 10-digit number')
        .required('Phone is required'),
      address: Yup.string()
        // .min(10, 'Address must be at least 10 characters long')
        .required('Address is required'),
      gmail: Yup.string()
        // .email('Invalid Gmail address')
        .required('Gmail is required'),
    }),


    
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:4000/form", values);
        resetForm();
        setServerMessage(response.data.message || "Form submitted successfully!");
        toast.success('data is stored in database ')
      } catch (error) {
        console.error(error);
        setServerMessage("Failed to submit the form. Please try again later.");
        toast.error("unable to Sumbit the data ")
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          ></textarea>
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="gmail" className="block text-sm font-medium text-gray-700">Gmail</label>
          <input
            id="gmail"
            name="gmail"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gmail}
          />
          {formik.touched.gmail && formik.errors.gmail ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.gmail}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {serverMessage && (
        <div className="mt-4 text-center text-green-600 font-medium">
          {serverMessage}
        </div>
      )}
      <ToastContainer autoClose={5000} position='top-right' hideProgressBar='false'/>
    <Link to='/'> Show data </Link>
    </div>
  );
};

export default Form;
