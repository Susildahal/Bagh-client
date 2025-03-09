import React from 'react';
import { useFormik } from 'formik';
import* as yup from 'yup'

const initialValues = {
  name: "",
  phone: "",
  email: ""
};

const onSubmit = (values) => {
  console.log("Name:", values.name);
  console.log("Phone:", values.phone);
  console.log("Email:", values.email);
};


const validationSchema = yup.object({
    name: yup.string().required('Name is required').max(20,'name can not mare than 20 ') .min(2,"name can not less than 2"),
    phone: yup.string().required('Phone number is required') .length(10," phone number must have 10 numbers "),
    email: yup.string().email('Invalid email format').required('Email is required')
});


const Mynew = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  }); 
 //console.log(formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        { formik.touched.name && formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}
        <br />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        />
        {formik.errors.phone ? <div style={{ color: 'red' }}>{formik.errors.phone}</div> : null}
        <br />

        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        { formik.touched.email &&formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Mynew;
