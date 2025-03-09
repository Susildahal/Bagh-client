import React, { useState } from 'react';
import  './Nev1.css'
import { BrowserRouter } from 'react-router-dom';


export default function Nev1 () {
  const[bulb,setBulb]=useState("false");

   const  handleEvents=()=>{
    setBulb(!bulb)

  }
if (bulb===true)
{
  document.body.style.backgroundColor="black"
  document.body.style.color="white"


}else{
  document.body.style.backgroundColor="white"
  document.body.style.color="black"



}
  return (
    <>
    <div>
      <button  onClick={handleEvents} className={bulb? 'white':'dark'}> turn to {bulb?"white":"black"} </button>
<button onClick={handleEvents}>  turn on bulb</button>
    </div>
    <Susil/>
    <Taliban></Taliban>
    <Counter> </Counter>
    </>
  
  
  )
}
function Susil(){

const styles={
  color:'red',
}

   return (


     <div style={styles}>
       Enter the number:<input type='number' placeholder='enter your number'></input>
       Enter the second number:<input type='number' placeholder='enter the another numbber'></input>
     </div>
   )
 }
 function Taliban(){
  return(
  <div> 

    <span> susil</span>
  </div>
  )
}

function Counter(){
  const[num,setNum1]=useState(1)
  function handledata(){
    setNum1(num+1)
  
  }
  return(
    <>
  <button onClick={handledata}> click mee!</button>
  <button>{num}</button>

    </>
  )
}
 
 
 


