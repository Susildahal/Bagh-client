import axios from "axios";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";


const Dropdown = () => {
 const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const sidebarRef = useRef(null);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Track screen width
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on mobile navigation
  useEffect(() => {
    if (screenWidth < 1280) setIsOpen(false);
  }, [location.pathname, screenWidth]);

  // Click outside to close (mobile)
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navbar hide/show on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) setHidden(true);
    else if (latest < previous) setHidden(false);
  });

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };


 const handleclick = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}
/api/user/Checkloginststus`,
      {}, // No data being sent
      { withCredentials: true } // Config goes here
    );

    if (response.data.success) {
      navigate("/Adminoutlet/AdminHome");
    } else {
      navigate("/login");
      
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    navigate("/login"); // Optional: fallback if error occurs
  }
};


  return (
    <motion.div className="flex relative">
      {isOpen && screenWidth < 1280 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="fixed inset-0 z-40 bg-black"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial={false}
        animate={screenWidth >= 1280 ? "open" : isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 xl:z-10 z-50  w-64 h-full bg-gray-900 text-gray-100 pt-4 xl:pt-14 text-lg overflow-x-hidden"
      >
        <ul className="space-y-4 ml-4 mt-3">
          {[
            { to: "/", text: "Home" },
            {
              text: "About Us",
              subItems: [
               
                { to: "/OurService", text: "Services" },
                { to: "/Student", text: "Students Details" },
                { to: "/AboutAchievements", text: "Our Achievements" },
                { to: "/Aboutpublicnotic", text: "Notices " },
              ]
            },

            {
              text: "Our Courses",
              subItems: [
                { to: "/Primary", text: "Primary" },
                { to: "/Secondary", text: "Secondary" },
                { to: "/technical", text: "Engineering" },
              ]
            },
    
            { to: "/Gallery", text: "Our Gallery" },
            { to: "/Contactus", text: "Contact Us" },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={screenWidth >= 1280 || isOpen ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              className="mr-4"
            >
              {item.to ? (
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 ${isActive ? "text-blue-400 font-semibold" : "text-gray-100"
                    }`
                  }
                >
                  {item.text}
                </NavLink>
              ) : (
                <div className="flex flex-col">
                  <div className="p-2 hover:bg-gray-700 rounded-md text-gray-100">
                    {item.text}
                  </div>
                  <ul className="pl-4 relative right-0 space-y-2 mt-2 shadow-2xl z-0 border-slate-600 rounded-xl border-[1px]">
                    {item.subItems?.map((subItem, subIndex) => (
                      <motion.li
                        key={subIndex}
                        variants={itemVariants}
                        initial="hidden"
                        animate={screenWidth >= 1280 || isOpen ? "visible" : "hidden"}
                        transition={{ delay: subIndex * 0.15 }}
                      >
                        <NavLink
                          to={subItem.to}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `block p-1 hover:bg-gray-600 rounded-md ${isActive ? "text-blue-300" : "text-gray-200"
                            }`
                          }
                        >
                          {subItem.text}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 xl:ml-64">
        {/* Navbar */}<motion.nav
          animate={hidden ? "hidden" : "visible"}
          variants={{
            hidden: { y: "-100%", opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 shadow-md px-4 py-2 fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16"
        >
          <button
            className="xl:hidden p-2 text-white rounded-lg hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center">
            <motion.img
              src="/image/logo.webp" // Ensure the correct path
              alt="School Logo"
              className="h-8 w-8 rounded-full object-fill lg:h-8 lg:w-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div className="ml-3 text-white">
              <p className="text-xs lg:text-sm font-semibold leading-tight">
                Shree Bagh Bhairav Technical Secondary School
              </p>
              <p className="text-[0.6rem] lg:text-xs text-gray-300">Mahankal-4, Kaleshowar, Lalitpur</p>
            </div>
          </div>

          <div className="ml-auto">
           
     <button type="button"  onClick={handleclick} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>




      
          </div>
        </motion.nav>


      </div>
    </motion.div>



  );
};

export default Dropdown;