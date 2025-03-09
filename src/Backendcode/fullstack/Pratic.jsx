import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Pratic = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      address: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, "Fullname must be at least 3 characters")
        .required("Fullname is required"),
      address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .required("Address is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must contain only digits")
        .min(10, "Phone must be at least 10 digits")
        .max(15, "Phone cannot exceed 15 digits")
        .required("Phone is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post("http://localhost:4000/pratic", values);
        alert(response.data.message);
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error.message);
        alert("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Registration Form</h2>
        <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
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
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring ${
                formik.touched.fullname && formik.errors.fullname
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.fullname}</p>
            )}
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
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.address}</p>
            )}
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
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
            )}
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
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pratic;
