import React from 'react';
import { Formik, useFormik } from 'formik';

const initialValues = {
  name: '',
  address: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values.name);
  console.log(values.address);
  console.log(values.password);
};

const validate = (values) => {
  let errors = {};
  
  if (!values.name) {
    errors.name = 'Required';
  }
  
  if (!values.address) {
    errors.address = 'Required';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.address)) {
    errors.address = "Enter a valid email address";
  }
  
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const Formikes = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <div>
``
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        
        <br />

        <label htmlFor='address'>Address</label>
        <input
          type='text'  // Corrected type from 'test' to 'text'
          name='address'
          id='address'
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address ? <div>{formik.errors.address}</div> : null}

        <br />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        
        <br />

        <input type='submit' id='submit' />
      </form>
    </div>
  );
};

export default Formikes;
