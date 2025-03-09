import React from 'react'
import"./Todo.css";
import { useState } from 'react';

const Todo = () => {
    const[data,SetData]=useState("")
    const[savedata,setData]=useState("")
     function Data(e){
        SetData(e.target.value);
     }
     function handleSave(){
        setData(data)

     }

  return (

    <div className='contaner'>
        <h1 className='title'> To Do App</h1>
        <p p className='input'> Enter you data you wants to save </p><input type='text' onChange={Data}/>
        <button className='add' onClick={handleSave} >  ADD</button>
        <div> Your data is :</div>
        { <p>{savedata} </p>}
      
    </div>
  )
}

export default Todo
