import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: "",
      password: ""
    },
    validationSchema: Yup.object({
      id: Yup.string().email("Invalid id format").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/user/login
`, values
        );
        navigate("/Loginotp", {state: {email:values.id }});
        toast.success(response.data.msg || "Login successful");
        
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-200 via-sky-300 to-amber-300 ">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md p-6 bg-slate-100 text-black shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* id Field */}
        <div className="mb-4">
          <input
            type="text"
            name="id"
            placeholder="Enter your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
          />
          {formik.touched.id && formik.errors.id && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.id}</p>
          )}
        </div>

        {/* Password Field with Eye Toggle */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <div
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <Link
            to="/CheckEmail"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition"
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
