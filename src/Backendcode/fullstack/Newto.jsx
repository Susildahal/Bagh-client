import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const initialValues = {
  title: "",
  description: "",
  date: ""
};

const onSubmit = async (values) => {
  console.log("Title:", values.title);
  console.log("Description:", values.description);
  console.log("Date:", values.date);

  try {
    const response = await axios.post('http://localhost:4000/newtodo',values); // Pass the entire values object
    console.log("Server Response:", response.data);
    console.log('error:', response.error); 
  } catch (error) {
    console.error("Error:", error.message);
  }
};




const validationSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),
  description: yup
    .string()
    .required("Description is required")
    .min(3, "Description must be at least 3 characters long"),
  date: yup
    .date()
    .required("Date is required")
});

const Newto = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <>

      <form
        onSubmit={formik.handleSubmit}
        className="p-5 flex flex-col items-center"
      >
        <div className="bg-slate-100 rounded-xl shadow-lg p-8 w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Add an Item to the List
          </h2>

          <label className="block mb-4">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 p-2"
            />
            {formik.touched.title && formik.errors.title ? (
              <span className="text-red-500 text-sm">{formik.errors.title}</span>
            ) : null}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Description</span>
            <input
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 p-2"
            />
            {formik.touched.description && formik.errors.description ? (
              <span className="text-red-500 text-sm">
                {formik.errors.description}
              </span>
            ) : null}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Deadline</span>
            <input
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 p-2"
            />
            {formik.touched.date && formik.errors.date ? (
              <span className="text-red-500 text-sm">{formik.errors.date}</span>
            ) : null}
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-4"
          >
            Submit

          </button>
        
        </div>
      </form>
    </>
  );
};

export default Newto;
