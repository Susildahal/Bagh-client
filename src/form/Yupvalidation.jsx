import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
//import styles from'validationSchema.modules.css';

const initialValues = {
  name: '',
  address: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object({
  name: yup.string().required('Name is required').max(20,'name can not maore than 20 words'),
  address: yup.string().required('Address is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const Yupvalidation = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          className='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name  ? <span>{formik.errors.name}</span> : null}
        <br />

        <label htmlFor='address'>Address</label>
        <input
          type='text'
          name='address'
          className='address'
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address && formik.touched.address ? <span>{formik.errors.address}</span> : null}
        <br />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          className={'styles.password'}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : null}
        <br />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Yupvalidation;
