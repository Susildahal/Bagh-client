import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Contactus = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "", 
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required")
        .min(2, "Must be at least 2 characters"),
      lastName: Yup.string()
        .required("Last Name is required")
        .min(2, "Must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Phone number is required"),
      message: Yup.string()
        .required("Message is required")
        .min(5, "Message must be at least 5 characters"),
    }),
    onSubmit:async(values,{resetForm}) => {
      try {
         const response =await axios.post(`${process.env.REACT_APP_API_BASE_URL}
/api/notic/saveNotic`,values)
         toast.success(response.data.msg)
         resetForm()
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Rate limit hit
          toast.error(error.response?.data?.msg||"You are doing too much request please try again next day" ) ;
      } else{
        toast.error("Something error happen")
      }
    }
    },
  });
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="bg-white text-black shadow-xl rounded-lg p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Fill out the form below.
        </p>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* First Name Field */}
          <div>
            <input
              type='text'
              name="firstName"
              placeholder="Your First Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
            ) : null}
          </div>

          {/* Last Name Field */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
            ) : null}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            ) : null}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold p-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>

 
  );
};

export default Contactus;
