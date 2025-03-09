import React, { useState } from 'react';
import "./Pratic.css";

const Pratic = () => {
    const [mode, setMode] = useState(true);
    
    function handleMode() {
        setMode(!mode);
    }

    return (
        <>
            <img 
                src={mode ? "image/off.jpg" : "image/on.jpg"} 
                onClick={handleMode} 
                className={mode ? 'susil' : 'dahal'} 
                alt="Toggle Image" 
            />
            <div>{mode ? "Click to turn on" : "Click to turn off"}</div>
            <Form />
        </>
    );
}
export default Pratic;

function Form() {
    const [status, setStatus] = useState("");
    const [age,setage]=useState("")
    const [name,setName]=useState("")
  if(name.length<1){
  var nameerror="enter the name please "
  }else{}


    function handleStatusChange(e) {
        setStatus(e.target.value);
    }
    function HandleAge(e){
        setage(e.target.value);
    }
    
  console.log(age);
    function handleName(e){
        setName(e.target.value);
    }


    return (
        <>
            <div >This is form</div>
            <form onSubmit>
                <label>
                    Enter your name:
                    <input type='text' placeholder='Enter your first name'  onChange={handleName}/> enter the last name  <input type='text' placeholder='enter a lastname'/>
                </label><br/>
                <span id="ename ">{nameerror} </span>
                <br />

                <label htmlFor="marriageStatus">Marriage Status:</label>
                <select id="marriageStatus" onChange={handleStatusChange}>
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                </select>
                <br />

                {status === "married" && (
                    <div className='wife'>
                        <label>
                            Enter wife's name:
                            <input type='text' placeholder='Enter wife name' />
                        </label>
                    </div>
                )}
                please enter  your age <input type='number' onChange={HandleAge}/> 
            <span> {age>20?"you is not a baccha":"you is a baccha"}</span>
            </form>
        </>
        
    );
}

