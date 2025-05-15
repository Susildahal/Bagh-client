import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckEmail = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format ")
        .required("Email is required "),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post( `${process.env.REACT_APP_API_BASE_URL}
/api/user/passwordchangeotp`,
          { id: values.email },
          { withCredentials: true }
        );

        if (response.data.success) {
          toast.success("OTP sent to your email ");
          navigate("/PasswordForgetOtp", { state: { data: values.email } });
        } else {
          toast.error(response.data.msg || "Something went wrong ");
        }
      } catch (error) {
        if(error.response && error.response.status === 429) {
          // Rate limit hit
          toast.error(error.response?.data?.msg || "You are doing too much  wrong request please try again next day");
        } else{
          toast.error(error.response?.data?.msg || "Something went wrong");
        }
        
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
         Please Enter Your  Email 
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:text-black focus:outline-none"
          />

          {formik.touched.email && formik.errors.email && (
            <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            {formik.isSubmitting ? "Submitting..." : "Submit Your Email"}
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CheckEmail;
