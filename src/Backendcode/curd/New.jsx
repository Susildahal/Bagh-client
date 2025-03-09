import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const New = () => {
    const formik = useFormik({
        initialValues: { // Fix typo: `initinalvalue` to `initialValues`
            id: "", // Match with `id` in the form
            password: "" // Match with `password` in the form
        },
        validationSchema: Yup.object({ // Fix typo: `validateSchema` to `validationSchema`
            id: Yup.string()
                .required("Name is required")
                .min(3, "Name must be more than 3 characters"),
            password: Yup.string() // Fix typo: `Yup.String()` to `Yup.string()`
                .required("Password is required")
                .min(2, "Password must be more than 2 characters")
        }),
        onSubmit:async (values,{resetForm}) => { 
        try {
            const response= await axios.post("http://localhost:4001/",values)
            resetForm();
            console.log(response.data);
         
            
        } catch (error) {
            console.log(error )
            
        }
           
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="id" // Add `name` attribute to link with Formik
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.id && formik.touched.id ? ( // Fix display logic for validation error
                    <div>{formik.errors.id}</div>
                ) : null}
                <br />
                <input
                    type="password"
                    name="password" // Add `name` attribute to link with Formik
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? ( // Fix display logic for validation error
                    <div>{formik.errors.password}</div>
                ) : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default New;
