import React, { useState } from 'react';
import axios from 'axios';

const Pratic = () => {
    const [fnumber, setFnumber] = useState("");
    const [snumber, setSnumber] = useState("");
    const [sum, setSum] = useState("");
    const [result, setResult] = useState("");
    const [serverResponse, setServerResponse] = useState("");

    const Submit = async (e) => {
        e.preventDefault();
        const result1 = parseFloat(fnumber) + parseFloat(snumber);
        setResult( result1);
        console.log(result1)
        setSum("The sum of two numbers is:");


        try {
            const response = await axios.post('http://localhost:4000', { fnumber,snumber });
            console.log(response.data.message);
            setServerResponse(response.data.message); // Display server response in UI
        } catch (error) {
            console.error('Error occurred:', error);
            setServerResponse("An error occurred while communicating with the server.");
        }
    };


    
    return (
        <div className='flex items-center justify-center gap-2 flex-col'>
            <input
                type='number'
                className='h-10 w-28 border-black border-2'
                value={fnumber}
                onChange={(e) => setFnumber(e.target.value)}
                placeholder="First Number"
            /><br/>
            <input
                type='number'
                className='h-10 w-28 border-black border-2'
                value={snumber}
                onChange={(e) => setSnumber(e.target.value)}
                placeholder="Second Number"
            /><br/>
            <input
                type='submit'
                className='h-10 w-28 border-black border-2'
                onClick={Submit}
                value="Submit"
            />
            <div>From client side: {sum} {result}</div>
            <div>Server Response: {serverResponse}</div>
        </div>
    );
};

export default Pratic;
