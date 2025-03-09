import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ id: '', password: '' });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Check if both fields (id and password) are provided
    if (!formData.id || !formData.password) {
      alert('Both fields are required!');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:2000/login', {
        method: "POST", // Use lowercase 'method'
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      // Parse the response
      const data = await response.json();
      console.log('Response data:', data);
  
      // Handle the response (e.g., redirect, show message, etc.)
      alert('Login successful!');
    } catch (error) {
      // Handle errors (network errors or server-side issues)
      console.error('Error:', error);
      alert('Failed to login. Please try again.');
    }
  };
  

  

  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-slate-200 rounded-3xl shadow-2xl h-[300px] ml-10 mr-10">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl font-bold">Login Page</h1>
        <p className="mt-6 text-lg">
          Enter your ID:
          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            value={formData.id}
            onChange={handleData}
          />
        </p>
        <br />
        <p>
          Enter Your Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleData}
          />
        </p>
        <br />
        <input type="submit" id="submit" value="Login" className="text-center" />
      </form>
    </div>
  );
};


export default Login;
