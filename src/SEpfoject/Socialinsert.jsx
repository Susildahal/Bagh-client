
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';




const SocialInsert = () => {
    const date = new Date().toISOString().split("T")[0];
    const [view, setview] = useState(true);
    const Navigate =useNavigate()
    
    const initialValues = {
        type: "",
        userid: "",
        password: "",
        date: date,
        info: '',
        updatedat:""
    };

    const validationSchema = Yup.object({
        type: Yup.string().required("Account type is required"),
        userid: Yup.string().required("ID is required"),
        password: Yup.string().required("Password is required"),
        date:Yup.string(),
        info:Yup.string(),
         updatedat:Yup.string()
    });

    const onSubmit = async (values) => {
        try {
            const response = await axios.post("http://localhost:4000/Personal", values);
            toast.success(response.data.msg || 'Data saved successfully');
            Navigate('/Social')
        } catch (error) {
            toast.error(error.response?.data?.msg || "An error occurred");
        }
    };

    const handlechange = () => {
        setview(!view);
    };

    return (
        <>
    
         <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg ">
            <div className='text-2xl   font-bold text-gray-800 mb-6 text-center'> <Link to="/social"> <img src="../image/back.png"  
        alt="logo"
            className=' h-14 w-14   mt-16 object-cover '
            /></Link>    </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Add New Account
            </h2>
            
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form className="space-y-6">
                        {/* Account Type Field */}
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                                Account Type
                            </label>
                            <Field
                                name="type"
                                type="text"
                                placeholder="e.g., Facebook, Gmail"
                                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* ID Field */}
                        <div>
                            <label htmlFor="userid" className="block text-sm font-medium text-gray-700 mb-2">
                                Account ID/Email
                            </label>
                            <Field
                                name="userid"
                                type="text"
                                placeholder="Enter your account ID"
                                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <ErrorMessage name="userid" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Field
                                    name="password"
                                    type={view ? "password" : "text"}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 pr-12  text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={handlechange}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    {view ? 'Show' : 'Hide'}
                                </button>
                            </div>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Date Field */}
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                Creation Date
                            </label>
                            <Field
                                name="date"
                                type="text"
                                readOnly
                                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        {/* Additional Info Field */}
                        <div>
                            <label htmlFor="info" className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Information (optional)
                            </label>
                            <Field
                                name="info"
                                as="textarea"
                                placeholder="Add any additional notes"
                                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                            />
                            <ErrorMessage name="info" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                            Save Credentials
                        </button>
                    </Form>
                )}
            </Formik>
            <ToastContainer autoClose={5000} position="top-right" hideProgressBar={false} />
        </div>
        </>
       
    );
};

export default SocialInsert;