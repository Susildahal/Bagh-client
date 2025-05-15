import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Adminoutlet from "./Schoolwebside/Admin/Adminoutlet.jsx";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

// 👇 Public Pages
import Home from './Schoolwebside/Home/Home';
import Primary from './Schoolwebside/Courses/Primary';
import Secondary from './Schoolwebside/Courses/Secondary';
import Gallery from './Schoolwebside/Gallery.jsx';
import Contactus from './Schoolwebside/Home/Contactus.jsx';
import OurService from './Schoolwebside/About US/OurService.jsx';
import Teacher from './Schoolwebside/About US/Teacher.jsx';
import Login from './Schoolwebside/Home/Login.jsx';
import Student from "./Schoolwebside/About US/Students.jsx";
import AboutAchievements from "./Schoolwebside/About US/Achievements.jsx";
import Aboutpublicnotic from "./Schoolwebside/About US/Aboutpublicnotic.jsx";
import CheckEmail from './Schoolwebside/Admin/CheckEmail.jsx';
import PasswordForgetOtp from "./Schoolwebside/Admin/PasswordForgetOtp.jsx";
import Updatepassword from "./Schoolwebside/Admin/Updatepassword.jsx";
import Loginotp from "./Schoolwebside/Admin/Loginotp.jsx";

// 👇 Admin Pages
import Admin from "./Schoolwebside/Admin/Admin.jsx";
import Notic from './Schoolwebside/Admin/Notic.jsx';
import TeacherForm from './Schoolwebside/Admin/TeacherForm.jsx';
import AddTeacher from "./Schoolwebside/Admin/AddTeacher.jsx";
import AddStudent from "./Schoolwebside/Admin/AddStudent.jsx";
import ClassStudentList from "./Schoolwebside/Admin/ClassStudentList.jsx";
import Marks from "./Schoolwebside/Admin/Marks.jsx";
import Princaple from "./Schoolwebside/Admin/Princaple.jsx";
import Achievement from "./Schoolwebside/Admin/Achivement.jsx";
import Publicnotic from "./Schoolwebside/Admin/Publicnotic.jsx";
import ShowPrincipal from "./Schoolwebside/Admin/Displayprincaple.jsx";
import DisplayAchievementsadmin from "./Schoolwebside/Admin/DisplayAchievements.jsx";
import DisplayPublicnotic from "./Schoolwebside/Admin/DisplayPublicnotic.jsx";
import AdminHome from "./Schoolwebside/Admin/Home.jsx";
import Account from './Schoolwebside/Admin/Account.jsx';
import Updateaccount from './Schoolwebside/Admin/Updateaccount.jsx';
import Updatestudents from './Schoolwebside/Admin/Updatestudents.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🟩 USER ROUTES */}
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='Primary/' element={<Primary />} />
        <Route path='Secondary/' element={<Secondary />} />
        <Route path='Gallery/' element={<Gallery />} />
        <Route path='Contactus/' element={<Contactus />} />
        <Route path='OurService/' element={<OurService />} />
        <Route path='Teacher/' element={<Teacher />} />
        <Route path='Student/' element={<Student />} />
        <Route path='AboutAchievements/' element={<AboutAchievements />} />
        <Route path='Aboutpublicnotic/' element={<Aboutpublicnotic />} />
        <Route path='login/' element={<Login />} />
        <Route path='CheckEmail/' element={<CheckEmail />} />
        <Route path='PasswordForgetOtp/' element={<PasswordForgetOtp />} />
        <Route path='Updatepassword/' element={<Updatepassword />} />
        <Route path='Loginotp/' element={<Loginotp />} />
        
      </Route>

      {/* 🟥 ADMIN ROUTES */}
      <Route path='/Adminoutlet' element={<Adminoutlet />}>
        <Route path='Admin' element={<Admin />} />
        <Route path='Notic' element={<Notic />} />
        <Route path='TeacherForm' element={<TeacherForm />} />
        <Route path='AddTeacher' element={<AddTeacher />} />
        <Route path='AddStudent' element={<AddStudent />} />
        <Route path='ClassStudentList' element={<ClassStudentList />} />
        <Route path='Marks' element={<Marks />} />
        <Route path='Princaple' element={<Princaple />} />
        <Route path='Achievement' element={<Achievement />} />
        <Route path='Publicnotic' element={<Publicnotic />} />
        <Route path='ShowPrincipal' element={<ShowPrincipal />} />
        <Route path='DisplayPublicnotic' element={<DisplayPublicnotic />} />
        <Route path='DisplayAchievements' element={<DisplayAchievementsadmin />} />
        <Route path='AdminHome' element={<AdminHome />} />
        <Route path='Account' element={<Account/>} />
        <Route path='Updateaccount/:id' element={<Updateaccount/>} />
        <Route path='Updatestudents/:id' element={<Updatestudents/>} />
      </Route>
    </>
  )
);

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-slate-700 text-slate-300'>
    <RouterProvider router={router} />
  </div>
);

reportWebVitals();
