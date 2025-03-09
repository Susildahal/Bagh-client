import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Update = () => {
  const {id}=useParams()
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      address: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .required("Age is required")
        .positive("Age must be positive")
        .integer("Age must be an integer"),
      address: Yup.string().required("Address is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
    }),




    onSubmit: async (values) => {
        try {
            console.log("Form Data", values);
            const response = await axios.put(`http://localhost:4000/new/${id}`, values);
            
            // Success - show a toast with success message
            toast.success(response.data.message);
            
            // Navigate to the next page or reset form
            navigate('/');  // Specify the path for redirection
            
        } catch (error) {
            // Handling the error: display the unique error message in the toast
            if (error.response&& error.response.data&& error.response.data.message) {
                // Show error message from backend response
                toast.error(error.response.data.message);
            } else {
                // Show a generic error message in case of unknown errors
                toast.error("Something went wrong. Please try again.");
            }
        }
    }
    
  });
  useEffect(()=>{
    async function gatdata(){
    try {
       const response= await axios.get(`http://localhost:4000/new/${id}`)
       formik.setValues(response.data.data)
    } catch (error) {
      console.log(error)
      
    }
    }
    gatdata()
        },[id])

  return (
    <div className="bg-slate-800 xl:h-screen h-[auto] w-screen flex justify-center items-center">
      <div className="bg-white flex flex-col h-[800px] lg:w-[50vw] w-[90vw] shadow-lg rounded-lg p-6">
        <div className="flex justify-end">
          <button className="p-3 text-xl text-white bg-purple-600 rounded-3xl hover:bg-purple-400 duration-100">
            <Link to='/'> Go to the data </Link>
          </button>
        </div>
        <div className="text-center text-2xl text-black mt-4">Enter a new data here</div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10 mt-6 items-center">
          {[
            { name: "name", type: "text", placeholder: "Enter your name" },
            { name: "age", type: "number", placeholder: "Enter your age" },
            { name: "address", type: "text", placeholder: "Enter your address" },
            { name: "phone", type: "text", placeholder: "Enter your phone number" },
            { name: "email", type: "email", placeholder: "Enter your email" },
          ].map((field) => (
            <div key={field.name} className="w-full max-w-[80%]">
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
                className="focus:outline-none border-b-[3px]  text-xl p-2 w-full"
              />
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="text-red-500 text-sm">{formik.errors[field.name]}</div>
              ) : null}
            </div>
          ))}
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-xl hover:bg-green-400 transition"
          >
            Submit
          </button>
          <ToastContainer position='bottom-right' autoClose={3000} />
        </form>
      
      </div>
    </div>
  );
};

export default Update;
