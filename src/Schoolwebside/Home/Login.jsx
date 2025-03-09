import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const [server, setServer] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      age: Yup.number()
        .typeError("Age must be a number")
        .required("Age is required")
        .min(18, "Age must be at least 18")
        .max(100, "Age must be below 100"),
    }),
    onSubmit: async (values) => {
      console.log("Form data", values);
      try {
        const response = await axios.post("http://localhost:4000/users", values);
        setServer(response.data.message);
      } catch (error) {
        // Check if the error is from response
        if (error.response) {
          setServer(error.response.data.message || "An error occurred");
        } else {
          setServer("An error occurred while connecting to the server.");
        }
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg w-full max-w-lg"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        {/* Age Field */}
        <div>
          <label htmlFor="age" className="block">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500">{formik.errors.age}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
      {server && <p>{server}</p>}
    </div>
  );
};

export default Login;
