import React from 'react'
import Slider from './Slider'
import Interduction from './Interduction'
import Courses from './Courses'
import Why from './Why'

import Mission from './Mission'
import Ourcorevalue from './Ourcorevalue'
import Contactus from './Contactus'
import Gallery from './Gallery'
import Ourservice from './Ourservice'
import ShowPrincipaltoclient from './Princaple'
import DisplayAchievements from './DisplayAchievements'
import Publicnotic from './Publicnotic'
import Popup from './Popup'




const Home = () => {
  return (
    <div>
         <main className="  xl:ml-64   ">
          <div className="  bg-slate-700 text-white">
          
        <Popup/>
           <Slider/>
          <Interduction/>
          <Why/>
          <Courses/>
        
          <ShowPrincipaltoclient/>
          <DisplayAchievements/>
           <Publicnotic/>
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
