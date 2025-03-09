import React, { useState } from 'react'
import'./paka.css'

function Paka( propes) {
    var [num1,setNum1]=useState('')

     function handleIncrement(){
      var increment = parseFloat(num1)+1;
      setNum1(increment);

    }
    function handelClear(){
      setNum1('');
    }
    function handleClearone(){
      setNum1(num1.slice(0, -1));

    }
    function handleDecrement(){
      setNum1(num1-1);
    }
    var a=propes.susil+"susil";
    setTimeout((e) => {
      return(
      <div> this is a div show in 2 sec</div>
      )
     }, 2000);

  return (
    <div className='contaner'>
      Enter a value of A:<input type='text' value={num1} onChange={e=>setNum1(e.target.value)}></input>
      <div>{num1}</div>
   <button onClick={handleIncrement}>increment</button>
     
       <button onClick={handelClear}>clear</button>
       <button onClick={handleClearone}> clear one </button>
       <button onClick={handleDecrement}> decrement  </button>
       <button> {a}</button>
<button>{propes.susil} </button>


    </div>
  )
}

export default Paka
