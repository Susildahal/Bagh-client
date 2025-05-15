import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import "react-toastify/dist/ReactToastify.css";
import {  Link, useParams } from 'react-router-dom';

const DocumentInsert = () => {
  const {id}=useParams()
    const [preview, setPreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission
 
    const[initialValues,setinitialValues]=useState({
        name: "",
        image: null,
        desc: "",
        createdAt: new Date().toISOString(),
      })

    const validationSchema = Yup.object({
        name: Yup.string().required("Document type is required"),

        image: Yup.mixed()
            .required("Image is required")
            .test(
                "fileFormat",
                "Image must be in JPG, JPEG, or PNG format",
                (file) => file && ["image/jpg", "image/jpeg", "image/webp", "image/png"].includes(file.type)
            )
            .test(
                "fileSize",
                "Image must be less than 2MB",
                (file) => file && file.size <= 1024 * 1024 * 2
            ),

        desc: Yup.string().required("Description is required"),
    });

    const onSubmit = async (values) => {
        setIsSubmitting(true); // Start submitting
        const formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("image", values.image);
        formdata.append("desc", values.desc);
        formdata.append("createdAt", new Date().toISOString());

        try {
            const response = await axios.put(`http://localhost:4000/Document/${id}`, formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success(response.data.msg || "Data is submitted");
        } catch (error) {
            toast.error(error.response?.data?.msg || "Something went wrong");
        } finally {
            setIsSubmitting(false); // End submitting
        }
    };

    async function gatdata() {
      try {
        const response =await axios.get(`http://localhost:4000/Document/${id}`)
         setinitialValues(response.data.data)
      } catch (error) {
         toast.error(error.response?.data?.msg)
      }
      
    }
    useEffect(()=>{
gatdata()
    },[id])
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className=" bg-white text-black shadow-lg rounded-lg p-8 w-[450px]">
                    <div> <Link to="/Document"> <img src="../image/back.png" alt="logo" className='h-26 w-16 mb-10 ' /> </Link></div>
                    <h2 className="text-2xl font-semibold text-center text-black mb-6">📜 Upload Your Document</h2>

                    <Formik initialValues={initialValues}  enableReinitialize={true}  validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ setFieldValue, isValid, dirty }) => (
                            <Form className="flex flex-col gap-5">
                                {/* Document Type */}
                                <div>
                                    <label className="text-gray-600 font-medium">Document Type</label>
                                    <Field 
                                        name="name" 
                                        type="text" 
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none"
                                        placeholder="Enter document type"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="text-gray-600 font-medium">Choose Your File</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                        
                                            setFieldValue("image", file);
                                            setPreview(URL.createObjectURL(file));
                                        }}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none mt-2"
                                    />
                                    <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />

                                    {/* Image Preview */}
                                    {preview && (
                                        <div className="mt-3 flex justify-center">
                                            <img 
                                                src={preview} 
                                                alt="Preview" 
                                                className="h-32 w-32 object-cover border border-gray-300 rounded-lg shadow-md"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="text-gray-600 font-medium">Document Description</label>
                                    <Field 
                                        name="desc" 
                                        as="textarea" 
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none"
                                        placeholder="Describe the document"
                                    />
                                    <ErrorMessage name="desc" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    disabled={!isValid || !dirty || isSubmitting} // Disable if invalid or submitting
                                    className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-black py-3 rounded-md font-medium"
                                >
                                    {isSubmitting ? "Submitting..." : " Submit Document"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <ToastContainer position="bottom-right" autoClose={3000} />
            </div>
        </>
    );
};

export default DocumentInsert;
