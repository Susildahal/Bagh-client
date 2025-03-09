import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Noticimage = () => {
    const formik = useFormik({
        initialValues: {
            id: "",
            password: "",
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            id: Yup.string()
                .required("ID is required")
                .min(3, "ID must be at least 3 characters"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
            phoneNumber: Yup.string()
                .required("Phone number is required")
                .matches(/^[0-9]+$/, "Phone number must contain only numbers")
                .min(1, "Phone number must be at least 1 digit")
                .max(10, "Phone number must be at most 10 digits"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post("http://localhost:4000/notic", values);
                console.log(response.data);
                resetForm();
               toast.success("form is submit sucessfuly ")
            } catch (error) {
                console.error("Error:", error);
                toast.error("there is error on submiting ")
            }
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    <div>Enter your ID here</div>
                    <input
                        type="text"
                        placeholder="Enter your ID"
                        name="id"
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.id && formik.errors.id ? (
                        <div style={{ color: "red" }}>{formik.errors.id}</div>
                    ) : null}
                </label>

                <label>
                    <div>Enter your password</div>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div style={{ color: "red" }}>{formik.errors.password}</div>
                    ) : null}
                </label>

                <label>
                    <div>Enter your phone number</div>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
                    ) : null}
                </label>

                <button type="submit">Submit</button>
            </form> 
            <ToastContainer position='top-right' autoClose={5000}  hideProgressBar={false}/>
           
        </div>
    );
};

export default Noticimage;
