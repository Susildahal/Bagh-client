import React, { useState } from 'react';
import './calculator.css'; // Using a separate CSS file for styles

function Calculator() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(value + e.target.value); // Append button value to the current input value
  };

  const handleClear = () => {
    setValue(''); // Clear the input field
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1)); // Delete the last character
  };

  const handleAnswer = () => {
    try {
      // Try to evaluate the expression
      const result = eval(value);
      if (isNaN(result) || result === Infinity || result === -Infinity) {
        throw new Error("Invalid operation"); // If result is NaN or Infinity, throw an error
      }
      setValue(result); // Set the evaluated result
    } catch (e) {
      // Catch and set error message as value
      setValue("Error: Invalid Expression");
    }
  };

  return (
    <>
      <div className='container'>
        <h1>This is a Calculator</h1>
        <input type='text' className='display' value={value} readOnly />
        <div className='button-row'>
          <input type="button" value='Clr' className='btn' onClick={handleClear} />
          <input type="button" value='%' className='btn' onClick={handleClick} />
          <input type="button" value='del' className='btn' onClick={handleDelete} />
          <input type="button" value='/' className='btn' onClick={handleClick} />
        </div>
        <div className='button-row'>
          <input type="button" value='7' className='btn' onClick={handleClick} />
          <input type="button" value='8' className='btn' onClick={handleClick} />
          <input type="button" value='9' className='btn' onClick={handleClick} />
          <input type="button" value='*' className='btn' onClick={handleClick} />
        </div>
        <div className='button-row'>
          <input type="button" value='4' className='btn' onClick={handleClick} />
          <input type="button" value='5' className='btn' onClick={handleClick} />
          <input type="button" value='6' className='btn' onClick={handleClick} />
          <input type="button" value='-' className='btn' onClick={handleClick} />
        </div>
        <div className='button-row'>
          <input type="button" value='1' className='btn' onClick={handleClick} />
          <input type="button" value='2' className='btn' onClick={handleClick} />
          <input type="button" value='3' className='btn' onClick={handleClick} />
          <input type="button" value='+' className='btn' onClick={handleClick} />
        </div>
        <div className='button-row'>
          <input type="button" value='00' className='btn' onClick={handleClick} />
          <input type="button" value='0' className='btn' onClick={handleClick} />
          <input type="button" value='.' className='btn' onClick={handleClick} />
          <input type="button" value='=' className='btn equals' onClick={handleAnswer} />
        </div>
      </div>
    </>
  );
}

export default Calculator;