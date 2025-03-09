import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Update = () => {
   
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    lname: "",
    email: "",
    createAt: "",
    updateat:"",
    completedDate: "",
    priority: "",
    status: "",
    description: "",
    Title:""
  });

  async function getdata() {
    try {
      const response = await axios.get(`http://localhost:4000/Satodo/${id}`);
      setInitialValues(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data!");
    }
  }

  useEffect(() => {
    getdata();
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    createAt: Yup.string().required("Created date is required"),
    completedDate: Yup.string(),
    priority: Yup.string().required("Priority is required"),
    status: Yup.string().required("Status is required"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.put(`http://localhost:4000/Satodo/${id}`, values);
      toast.success(response.data.message || "Data updated successfully!");
      navigate("/tododata");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-200 via-blue-300 to-slate-300 text-black w-full flex justify-center items-center">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form className="flex flex-col gap-4 p-5 border-[6px] bg-gradient-to-r from-slate-200 via-aqua-400 to-purple-300 border-red-400 rounded-lg lg:w-1/3 w-[90vw]">
            <div className="flex justify-center items-center">
              <button className="bg-amber-600 p-4 rounded-xl hover:bg-amber-300 text-black text-xl">
                <Link to="/tododata">View Todo List</Link>
              </button>
            </div>

            <div>
              <label htmlFor="name">Enter Your Name</label>
              <Field name="name" type="text" className="w-full p-2 text-black" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="lname">Enter Your Last Name</label>
              <Field name="lname" type="text" className="w-full p-2 text-black" />
              <ErrorMessage name="lname" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="email">Enter Your Email</label>
              <Field name="email" type="email" className="w-full p-2 text-black" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="createAt"> Created At</label>
              <Field name="createAt"  type="text" className="w-full p-2 text-black bg-gray-300 " readOnly />
            </div>

            <div>
              <label htmlFor="completedDate">When is this task completed?</label>
              <Field name="completedDate" type="date" className="w-full p-2 text-black" />
              <ErrorMessage name="completedDate" component="div" className="text-red-500" />
            </div>
               <div>
              <label htmlFor="Titele">Enter a title here </label>
              <Field name="Title" type="text" className="w-full p-2 text-black" />
              <ErrorMessage name="Title" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="priority">Priority</label>
              <Field as="select" name="priority" className="w-full p-2 text-black">
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Field>
              <ErrorMessage name="priority" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="status">Status</label>
              <Field as="select" name="status" className="w-full p-2 text-black">
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </Field>
              <ErrorMessage name="status" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" className="w-full p-2 text-black" />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="bg-blue-500 text-black text-xl p-3 px-6 rounded-xl hover:bg-blue-200">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <ToastContainer autoClose={5000} position="top-right" hideProgressBar={false} />
    </div>
  );
};

export default Update;
