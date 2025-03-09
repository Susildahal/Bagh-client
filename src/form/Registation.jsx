import React, { useState } from 'react';
import Styles from "./Registation.module.css";

const Registration = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const[iderror, setidError]=useState('')

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }


  if( input.length>1){
    setidError("please enter your Id ")
  }


  function handleShow() {
    setShow(password);
    setTimeout(() => setShow(""), 2000);
  }

  function handleClear() {
    setShow("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPassword("");
    setInput("");
  }

  return (
    <div>
      <form className={Styles.formContainer} onSubmit={handleSubmit} autoComplete="off">
        <div className={Styles.title}>This is Registration page</div>
        <label>Enter your phone number/email:</label>
        <input
          type="text"
          placeholder="Enter your ID"
          value={input}
          onChange={handleInput}
      
        />
            <span>{iderror} </span>
        <br />
        
        <label>Enter your password:</label>
        <div className={Styles.passwordContainer}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
          <span className={Styles.showButton} onClick={handleShow} onDoubleClick={handleClear}>show</span>
        </div>
        <span>{show}</span>
        <br />
        
        <label>Confirm your password:</label>
        <input type="password" placeholder="Confirm password" onChange={handlePasswordChange}/>
        <br />
        
        <input type="submit" className={Styles.submitButton} value="Sign Up" />
        <button className={Styles.loginButton}>Login</button>
      </form>
      <p> सुशील </p>
   
    </div>
  );
};

export default Registration;
