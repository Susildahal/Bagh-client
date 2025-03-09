import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Update = () => {
    const { id } = useParams();
    const formik = useFormik({
        initialValues: {
            name: "",
            title: "",
            desc: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("name is required "),
            title: Yup.string().required("title is required "),
            desc: Yup.string().required("desc must bee required")
        }),

        onSubmit: async (values) => {
            console.log(values)
            try {
                const response = await axios.put(`http://localhost:4000/todo/${id}`, values)
                console.log(response.data)

            } catch (error) {
                console.log(error)

            }
        }
    })
    useEffect(() => {
        async function getdata() {
            try {
                const response = await axios.get(`http://localhost:4000/todo/${id}`)
                formik.setValues(response.data.data)
                console.log(response.data.data)
            } catch (error) {
                console.log(error)
            }

        }
        getdata()
    }, [id])


    return (
        <div className=' h-[100vh] w-full container mx-auto bg-slate-800'>
            <div className=' flex justify-end' >  <button className=' mb-7 mt-9 mr-10 bg-blue-600 text-xl p-5  w-48 text-white rounded-3xl text-end'> <Link to='/'> Back to data</Link>  </button> </div>

            <div className='  bg-slate-100 gap-4 text-xl  mx-auto text-black flex flex-col  justify-center items-center  h-[70vh] xl:w-[50vw] w-[80vw]  '>
                <form onSubmit={formik.handleSubmit}>
                    <div>

                        <label><div>enter your Name </div>
                            <input
                                type='text'
                                className=' h-14  rounded-xl   border-slate-400 border-2 lg:w-[300px] w-[70vw] '
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                name='name'

                            />

                        </label>
                        {formik.touched && formik.errors.name ? (<p className=' text-red-500 text-base'> {formik.errors.name}</p>) : null}
                    </div>
                    <div>
                        <label><div>enter your title </div>
                            <input
                                type='text'
                                className=' h-14  rounded-xl   border-slate-400 border-2 lg:w-[300px] w-[70vw] '
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                onBlur={formik.handleBlur}
                                name='title'
                            />
                            {formik.touched && formik.errors.title ? (<p className='text-base text-red-500' >{formik.errors.title}</p>) : null}
                        </label>
                    </div> <div>
                        <label><div>enter your Desc</div>
                            <input
                                type='text'
                                className=' h-14  rounded-xl   border-slate-400 border-2 lg:w-[300px] w-[70vw] '
                                onChange={formik.handleChange}
                                value={formik.values.desc}
                                onBlur={formik.handleBlur}
                                name='desc'
                            />
                            {formik.touched && formik.errors.desc ? (<p className=' text-base text-red-500'> {formik.errors.desc}</p>) : null}

                        </label>
                    </div>
                    <div className=' flex  mt-10  justify-center items-center  '> <button type='submit' className=' rounded-2xl bg-blue-600 text-slate-300 w-44 p-1 '>Sent the data </button></div>

                </form>
            </div>

        </div>
    )
}

export default Update
