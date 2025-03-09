import React from 'react'
import Slider from './Slider'
import Interduction from './Interduction'
import Courses from './Courses'
import Why from './Why'
import Achivement from './Achivement'
import Mission from './Mission'
import Ourcorevalue from './Ourcorevalue'
import Contactus from './Contactus'
import Gallery from './Gallery'
import Ourservice from './Ourservice'




const Home = () => {
  return (
    <div>
         <main className="  xl:ml-64   ">
          <div className="  bg-slate-700 text-white">
          
        
           <Slider/>
          <Interduction/>
          <Why/>
          <Courses/>
          <Achivement/>
          <Mission/>
          <Ourcorevalue/>
          <Contactus/>
          <Gallery/>
          <Ourservice/>
          </div>
        </main>
    </div>
  )
}

export default Home
