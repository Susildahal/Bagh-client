import React from 'react';
import Dropdown from './Schoolwebside/Dropdown';
import { Outlet } from 'react-router-dom';
import Fotter from './Schoolwebside/Fotter';






export default function App() {
 
  return (
    <>
    <div className='z-50'>
<Dropdown/> 
</div>
<Outlet/>
<Fotter/>


    </>
  );
} 
