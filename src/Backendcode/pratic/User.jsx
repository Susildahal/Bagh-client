import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import * as Yup from "yup";



const User = () => {
    const navigator =useNavigate()
    const[server,setServer]=useState();
    const formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            age: "",
            phonenumber: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("name must bee required "),
            address: Yup.string().required("address must bee required "),
            age: Yup.string().required("age must bee required "),
            phonenumber: Yup.string().required('phone number must be required')
        }),
        onSubmit: async(values) => {
            try {
                const response= await axios.post("http://localhost:4000/Insert",values)
                console.log(response.data.message)
                setServer(response.data.message)
            navigator("/")
            } catch (error) {
                console.log(error)
                setServer(error.data.message )
            }
        }
    })
    return (
        <>
        <div className='  text-left text-3xl text-red-600' > <Link to='/'> Go to the Data </Link> </div>
        <div className=' mx-auto container h-[100vh] bg-slate-600  w-[100vw] flex justify-center items-center '>
            <form onSubmit={formik.handleSubmit}>

                <div className=' flex flex-col gap-5 h-[600px] lg:w-[500px] justify-center items-center  text-black bg-white w-[90vw] '>
                    <div>
                        <div> insert the new user data </div>
                        <label >
                            <input type='text'
                                name='name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className='border-black border-2 mt-4  w-[80vw] lg:w-[400px] h-16'
                                placeholder=' enter your name here'
                            />
                        </label>
                        {formik.touched && formik.errors.name ? (
                            <p className='text-red-400'> {formik.errors.name}</p>) : null
                        }
                    </div>

                    <div>
                        <label>
                            <input type='text'
                                name='address'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                className='border-black border-2 mt-4  w-[80vw] lg:w-[400px] h-16'
                                placeholder=' enter your address here'
                            />
                            {formik.touched&&formik.errors.address?(
                                <p className='text-red-400'>{formik.errors.address} </p>):null
                            }
                        </label>

                    </div>
                    <div> 
                    <label>
                            <input type='number'
                                name='age'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.age}
                                className='border-black border-2 mt-4  w-[80vw] lg:w-[400px] h-16'
                                placeholder=' enter your age here'
                            />
                            {formik.touched&&formik.errors.age?(
                                <p className='text-red-400'>{formik.errors.age} </p>):null
                            }
                        </label>
                        </div>
                        <div> 
                        <label>
                            <input type='number'
                                name='phonenumber'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phonenumber}
                                className='border-black border-2 mt-4  w-[80vw] lg:w-[400px] h-16'
                                placeholder=' enter your phonenumber  here'
                            />
                            {formik.touched&&formik.errors.phonenumber?(
                                <p className='text-red-400'>{formik.errors.phonenumber} </p>):null
                            }
                        </label>
                        </div>
                        <div> <button type='submit'>  please submit your data </button></div>
                    </div>
        
            </form>
         {server&&(
<p>{server}</p>
         )}
        </div>
        </>
    )
}

export default User
