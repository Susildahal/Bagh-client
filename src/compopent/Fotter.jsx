import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-400 h-[60px] w-full">
        <div className="flex justify-between items-center h-full px-4">
          {/* Logo */}
          <div className="font-bold text-2xl">Logo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row gap-5 text-lg cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          {/* Login/Signup Button */}
          <div className="hidden md:block text-white px-4 py-2 hover:bg-slate-100 text-lg rounded-lg">
            Login/Signup
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden  h-[100vh]  w-[100vw] flex-col text-white gap-4 p-4 bg-black  z-1000 text-lg">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className="bg-slate-500 px-4 py-2 rounded-lg text-center">
              Login/Signup
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
