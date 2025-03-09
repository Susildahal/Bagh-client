import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import React, { useState } from "react";
import axios from "axios";

const Data = () => {
  const [file, setFile] = useState(null);

  const initialValues = {
    name: "",
    address: "",
    phone: "",
    image: null, 
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone number is required"),
    image: Yup.mixed()
      .required("Image is required")
      .test(" type validation", "Only JPG, PNG, JPEG allowed", (value) => {
        return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      })
      .test(" size validation", "File must be less than 2MB", (value) => {
        return value && value.size <= 2 * 1024 * 1024; // 2MB limit
      }),
  });

  const onSubmit = async (values) => {
    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("address", values.address);
    formData.append("phone", values.phone);
    formData.append("image", values.image);  // Append the image file
console.log(formData)
    try {
      // Send the data as FormData
      const response = await axios.post("http://localhost:4000/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // Important for file uploads
        },
      });
      console.log(response.data.msg);
      alert("Form submitted successfully!");
      alert("form hass beeh submit")
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <label className="block">Name:</label>
              <Field type="text" name="name" className="w-full p-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block">Address:</label>
              <Field type="text" name="address" className="w-full p-2 border rounded" />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block">Phone:</label>
              <Field type="text" name="phone" className="w-full p-2 border rounded" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block">Upload Image:</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                  setFile(event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
              {file && <p className="text-green-600">File selected: {file.name}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Data;

