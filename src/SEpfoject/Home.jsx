import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <nav className='h-[60px] w-full bg-black text-white fixed flex items-center justify-end px-4 md:justify-center'>
            {/* Hamburger Menu Button (Mobile Only) */}
            <button
                className='md:hidden p-2'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg 
                    className="w-6 h-6"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Navigation Links */}
            <ul className={`absolute left-0 top-[60px] w-full bg-black md:static text-xl  md:flex md:justify-center md:gap-7 p-3 items-center ${
                isMenuOpen ? 'flex flex-col gap-4' : 'hidden'
            } md:flex`}>
                <li>
                    <Link 
                        to="/" 
                        onClick={() => setIsMenuOpen(false)}
                        className='hover:text-gray-300 transition-colors'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/tododata" 
                        onClick={() => setIsMenuOpen(false)}
                        className='hover:text-gray-300 transition-colors'
                    >
                        Todo Data
                    </Link>
                </li>
                <li>

                    <Link 
                        to="/Document" 
                        onClick={() => setIsMenuOpen(false)}
                        className='hover:text-gray-300 transition-colors'
                    >
                        Personal Data
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/Social" 
                        onClick={() => setIsMenuOpen(false)}
                        className='hover:text-gray-300 transition-colors'
                    >
                        Social Media Password
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Home