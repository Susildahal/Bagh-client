import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import imageCompression from 'browser-image-compression';

const TeacherForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      qualification: '',
      subject: '',
      experience: '',
      address: '',
      bio: '',
      image: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      qualification: Yup.string().required('Qualification is required'),
      subject: Yup.string().required('Subject is required'),
      experience: Yup.number().min(0).required('Experience is required'),
      address: Yup.string().required('Address is required'),
      bio: Yup.string().max(500, 'Max 500 characters'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }

      console.log('Submitted values:', values);
      // You can send `formData` to your backend here.
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);
      formik.setFieldValue('image', compressedFile);

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(compressedFile);

      console.log(`Compressed size: ${(compressedFile.size / 1024).toFixed(2)} KB`);
    } catch (error) {
      console.error('Image compression error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Add Teacher Details</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput name="firstName" placeholder="First Name" formik={formik} />
            <FormInput name="lastName" placeholder="Last Name" formik={formik} />
            <FormInput name="email" placeholder="Email" formik={formik} type="email" />
            <FormInput name="phone" placeholder="Phone Number" formik={formik} />
            <FormInput name="qualification" placeholder="Qualification (e.g. M.Ed)" formik={formik} />
            <FormInput name="subject" placeholder="Subject (e.g. Math)" formik={formik} />
            <FormInput name="experience" placeholder="Experience (years)" formik={formik} type="number" />
            <FormInput name="address" placeholder="Address" formik={formik} />
          </div>

          <div>
            <textarea
              name="bio"
              rows="4"
              placeholder="Short Bio/About"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.bio}
            />
            {formik.touched.bio && formik.errors.bio && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.bio}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1 block">Profile Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full bg-white p-2 rounded-lg border"
              onChange={handleImageChange}
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
            )}
          </div>

          {imagePreview && (
            <div className="mt-4">
              <p className="font-medium text-gray-700 mb-2">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-xl shadow-md border border-gray-300"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({ name, placeholder, type = 'text', formik }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      onChange={formik.handleChange}
      value={formik.values[name]}
    />
    {formik.touched[name] && formik.errors[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

export default TeacherForm;
