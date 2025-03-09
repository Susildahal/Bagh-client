import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div>
        <Home/>
        <div> 
          <div className='  flex justify-center items-center   '><Link to='/Socialinsert'> <img src="../image/addnew.jpg" 
             alt='logo'
             className='object-cover h-16 w-16 mt-16 '
             /> </Link></div>
        </div>
      
    </div>
  )
}

export default Social
