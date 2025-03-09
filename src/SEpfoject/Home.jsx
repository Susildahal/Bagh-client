import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav className=' h-[60px] w-[100vw]  bg-black text-xl text-white fixed  '> 
            <ul className=' flex justify-center p-3  items-center gap-7  '>

                <li> <Link to ="/" >Home</Link></li>
                <li><Link to="/tododata"> Todo Data</Link></li>
                <li> personal Data </li>
                <li> <Link to='/Social'> social media password </Link></li>
            </ul>
        </nav>
       
    </div>
  )
}

export default Home
