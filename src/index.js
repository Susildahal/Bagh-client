import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Route, createRoutesFromElements,} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'; 
// import Home from './Schoolwebside/Home/Home';
// import Primary from './Schoolwebside/Courses/Primary';
// import Secondary from './Schoolwebside/Courses/Secondary';
// import Gallery from './Schoolwebside/Gallery.jsx';
// import Contactus from './Schoolwebside/Home/Contactus.jsx';
// import OurService from './Schoolwebside/About US/OurService.jsx';
// import Teacher from './Schoolwebside/About US/Teacher.jsx';
// import Login from './Schoolwebside/Home/Login.jsx';
// import Student from'./Schoolwebside/About US/Students.jsx'
import Data from './SEpfoject/Data';
import Insert from './SEpfoject/Insert';
import Update from './SEpfoject/Update';
import Home from './SEpfoject/Home';
import Social from './SEpfoject/Social';
import Socialinsert from './SEpfoject/Socialinsert';
import Desc from './SEpfoject/Desc';
 
// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>} >
//       <Route path='/'  element={<Home/>}/>
//       <Route path='Primary/' element={<Primary/>}/>
//       <Route path='Secondary/' element={<Secondary/>}/>
//       <Route path='Gallery/' element={<Gallery/> }/>
//       <Route path='Contactus/' element={<Contactus/>}/>
//       <Route path='OurService/' element={<OurService/>}/>
//       <Route path='Teacher/' element={<Teacher/>}/>
//       <Route path='login/' element={<Login/>}/>
//     <Route path='Student'element={<Student/>}/>
//     </Route >
//   )
// )

 const route=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Desc/>}/>
  <Route path="/tododata" element={<Data/>}/>
  <Route path='/Insert'element={<Insert/>}/>
  <Route path="/Update/:id" element={<Update/>}/>
  <Route path="/Social" element={<Social/>}/>
  <Route path="/Socialinsert" element={<Socialinsert/>}/>
  
    </>
  )
 )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className=''>
      
    <RouterProvider router={route}/>
    
  </div>
  

);

reportWebVitals();


