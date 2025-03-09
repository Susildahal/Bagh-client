import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate inputs 
        if (id.length < 1 || id.length > 20) {
            setError('ID must be between 1 and 20 characters');
            return;
        }
        if (password.length < 1 || password.length > 20) {
            setError('Password must be between 1 and 20 characters');
            return;
        }
    
        setError('');
    
        try {
            // Make sure the URL is correct and includes /todos
            const response = await axios.post("http://localhost:4000/todos", {
                data,      // Send 'id' as data (replace this with your actual data)
                date // Send 'password' as date (replace this with your actual date)
            });
    
            console.log('Response from server:', response.data);
            
            if (response.status === 201) {
                setSuccess('Form submitted successfully!');
            } else {
                setError('Something went wrong!');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            setError('Server problem, please try again later.');
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
};

export default Form;
