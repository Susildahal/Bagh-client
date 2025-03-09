import React, { useState } from 'react';
import './Touglebutton.css'


export default function Touglebutton () {
  const[bulb,setBulb]=useState("false");

   const  handleEvents=()=>{
    setBulb(!bulb)

  }

  
  return (
    <>
    <div>
      <div onClick={handleEvents} className={ bulb?"dark":"white"}> turn to {bulb?"white":"black"} </div>
    


  
    </div>
    </>
  )
}
