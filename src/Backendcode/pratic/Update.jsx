import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const Update = () => {
    const { id } = useParams(); // Get user ID from URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            age: "",
            phonenumber: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            address: Yup.string().required("Address is required"),
            age: Yup.string().required("Age is required"),
            phonenumber: Yup.string().required("Phone number is required"),
        }),
        onSubmit: async (values) => {
            try {
                await axios.put(`http://localhost:4000/Insert/${id}`, values);
                alert("User updated successfully!");
                navigate("/"); // Redirect to home after update
            } catch (error) {
                console.error("Update error:", error);
                alert("Failed to update user.");
            }
        },
    });

    // Fetch user data when component mounts
    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get(`http://localhost:4000/Insert/${id}`);
                formik.setValues(response.data); // Prefill the form with fetched data
            } catch (error) {
                setError("Failed to fetch user data.");
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [id]); // Runs when `id` changes

    if (loading) return <p className="text-center">Loading user data...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <>
            <div className="text-left text-3xl text-red-600">
                <Link to="/"> Go to the Data </Link>
            </div>
            <div className="mx-auto container h-[100vh] bg-slate-600 w-[100vw] flex justify-center items-center">
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-5 h-[600px] lg:w-[500px] justify-center items-center text-black bg-white w-[90vw]">
                        <div>Update the user</div>

                        {/* Name Input */}
                        <div>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className="border-black border-2 mt-4 w-[80vw] lg:w-[400px] h-16"
                                    placeholder="Enter your name"
                                />
                            </label>
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-red-400">{formik.errors.name}</p>
                            )}
                        </div>

                        {/* Address Input */}
                        <div>
                            <label>
                                <input
                                    type="text"
                                    name="address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                    className="border-black border-2 mt-4 w-[80vw] lg:w-[400px] h-16"
                                    placeholder="Enter your address"
                                />
                            </label>
                            {formik.touched.address && formik.errors.address && (
                                <p className="text-red-400">{formik.errors.address}</p>
                            )}
                        </div>

                        {/* Age Input */}
                        <div>
                            <label>
                                <input
                                    type="number"
                                    name="age"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.age}
                                    className="border-black border-2 mt-4 w-[80vw] lg:w-[400px] h-16"
                                    placeholder="Enter your age"
                                />
                            </label>
                            {formik.touched.age && formik.errors.age && (
                                <p className="text-red-400">{formik.errors.age}</p>
                            )}
                        </div>

                        {/* Phone Number Input */}
                        <div>
                            <label>
                                <input
                                    type="number"
                                    name="phonenumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phonenumber}
                                    className="border-black border-2 mt-4 w-[80vw] lg:w-[400px] h-16"
                                    placeholder="Enter your phone number"
                                />
                            </label>
                            {formik.touched.phonenumber && formik.errors.phonenumber && (
                                <p className="text-red-400">{formik.errors.phonenumber}</p>
                            )}
                        </div>

                        <div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                                Update User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Update;
