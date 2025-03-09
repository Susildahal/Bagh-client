import React, { useState } from 'react';
import './Password.css';

const Password = () => {
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleShow() {
        setShow(!show); // Toggle the show state
    }

    return (
        <div className='container'>
            <div>pokstain</div>
            <input
                type={show ? 'text' : 'password'}
                className='password'
                value={password}
                onChange={handlePassword}
            />
            <span className='show' onClick={handleShow}>
                {show ? 'Hide' : 'Show'}
            </span>
        
        </div>
    );
};

export default Password;
