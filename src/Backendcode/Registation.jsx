import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Registation = () => {
  const [serverError, setServerError] = useState(""); // To store server error message
  const [show, setShow] = useState(false); // To toggle password visibility

  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setServerError(""); // Clear any previous errors
    try {
      const response = await axios.post("http://localhost:4000/reg", values);
      alert("Registration successful!"); // Show success message
      resetForm(); // Reset the form fields
      console.log(response)
    } catch (error) {
      if (error.response && error.response.data.message) {
        // Display server error
        setServerError(error.response.data.message);
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false); // Stop the loading state
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* First Name */}
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className="w-full border px-2 py-1 rounded mb-2"
                />
                <ErrorMessage
                  name="firstName"
                  className="text-red-500 text-sm"
                  component="div"
                />
              </div>

              {/* Last Name */}
              <div>
                <label>Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className="w-full border px-2 py-1 rounded mb-2"
                />
                <ErrorMessage
                  name="lastName"
                  className="text-red-500 text-sm"
                  component="div"
                />
              </div>

              {/* Phone */}
              <div>
                <label>Phone</label>
                <Field
                  name="phone"
                  type="text"
                  className="w-full border px-2 py-1 rounded mb-2"
                />
                <ErrorMessage
                  name="phone"
                  className="text-red-500 text-sm"
                  component="div"
                />
              </div>

              {/* Email */}
              <div>
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full border px-2 py-1 rounded mb-2"
                />
                <ErrorMessage
                  name="email"
                  className="text-red-500 text-sm"
                  component="div"
                />
              </div>

              {/* Password */}
              <div>
                <label>Password</label>
                <Field
                  name="password"
                  type={show ? "text" : "password"}
                  className="w-full border px-2 py-1 rounded mb-2"
                />
                <ErrorMessage
                  name="password"
                  className="text-red-500 text-sm"
                  component="div"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label>Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type={show ? "text" : "password"}
                  className="w-full border px-2 py-1 rounded mb-2"
                />
                <div
                  className="relative top-[-38px] left-56 cursor-pointer text-blue-500"
                  type="button"
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide" : "Show"}
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  className="text-red-500 text-sm"
                  component="div"
                />
              </div>

              {/* Server Error */}
              {serverError && (
                <div className="text-red-500 text-sm mb-4">{serverError}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white py-2 rounded mt-4 ${
                  isSubmitting ? "bg-gray-400" : "bg-blue-500"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

    </div>
    <p> Login </p>
    </>

  );
};

export default Registation;
