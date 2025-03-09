import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";


const Insert = () => {
  const [file, setFile] = useState(null);

  const initialValues = {
    name: "",
    age: "",
    image: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required"),
    image: Yup.mixed()
      .required("Image is required")
      .test("fileType", "Only JPG and JPEG are accepted", (file) =>
      file ?['image/jpeg',"image/jpg"]:false
      )
      .test("fileSize", "Image must be less than 2MB", (file) =>
        file ? file.size <= 2 * 1024 * 1024 : false
      ),
  });

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("age", values.age);
    formData.append("image", values.image);

    try {
      const response = await axios.post("http://localhost:4000/newimage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col text-xl justify-center items-center gap-4">
              <div>
                <label>Enter your name</label>
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>

              <div>
                <label>Enter your age</label>
                <Field name="age" type="number" placeholder="Enter your age" />
                <ErrorMessage name="age" component="div" className="text-red-500" />
              </div>

              <div>
                <label>Upload your image</label>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFile(file);
                    setFieldValue("image", file);
                  }}
                />
                <ErrorMessage name="image" component="div" className="text-red-500" />
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="h-40 w-60 rounded-full border-black border-2"
                  />
                )}
              </div>

              <div>
                <button type="submit" className="text-white bg-blue-600 p-5 rounded-xl">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Insert;
