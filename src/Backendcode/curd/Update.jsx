import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = location.state || {};

  const formik = useFormik({
    initialValues: {
      name: userData?.name || "",
      phone: userData?.phone || "",
      address: userData?.address || "",
      gmail: userData?.gmail || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be a valid 10-digit number")
        .required("Phone is required"),
      address: Yup.string().required("Address is required"),
      gmail: Yup.string()
        .email("Invalid Gmail address")
        .required("Gmail is required"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.put(`http://localhost:4000/form/${userData._id}`, values);
        alert("User updated successfully!");
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Failed to update user");
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 mt-[20vh] bg-white rounded-lg shadow-md">
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          )}
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
          )}
        </div>

        {/* Gmail Field */}
        <div className="mb-4">
          <label htmlFor="gmail" className="block text-sm font-medium text-gray-700">
            Gmail
          </label>
          <input
            id="gmail"
            name="gmail"
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gmail}
          />
          {formik.touched.gmail && formik.errors.gmail && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.gmail}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
