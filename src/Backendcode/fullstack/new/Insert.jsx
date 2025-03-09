import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Insert = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [initialValues, setInitialValues] = useState({
    name: "",
    address: "",
    phone: "",
    image: null,
  });

  useEffect(() => {
    if (id) {
      getFormData();
    }
  }, [id]);

  async function getFormData() {
    try {
      const response = await axios.get(`http://localhost:4000/image/${id}`);
      if (response.data.data) {
        setInitialValues(response.data.data);
      }
    } catch (error) {
   
      console.log("Error fetching data:", error);
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone number is required"),
    image: Yup.mixed()
      .required("Image is required") // Now image is required
      .test("fileType", "Only JPG, PNG, JPEG allowed", (value) => {
        if (!value) return false;
        return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      }),
  });

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("address", values.address);
    formData.append("phone", values.phone);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.put(`http://localhost:4000/image/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.msg);
      alert("Form updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Error submitting form");
      alert(error.response&& error.response.data&&error.response.data.msg)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Update User</h2>
      <Formik
        enableReinitialize
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
              {initialValues.image && !file && (
                <p className="text-gray-500">Current image exists</p>
              )}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Insert;
