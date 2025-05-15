import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Admin = ({ onMenuClick }) => {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}
/api/user/getuser`, {withCredentials:true}, { 
        });
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}
/api/user/logout`, {}, { 
        withCredentials: true 
      });
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/login');
    }
  };

  if (!userData) return null;

  return (
    <header className="bg-slate-800 text-white shadow-md fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-4">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-1 focus:outline-none text-white hover:text-slate-300 transition-colors"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* School Name - Hidden on mobile */}
      <h1 className="text-lg font-semibold mx-auto md:mx-0 md:ml-4 truncate hidden sm:block">
        Shree Bagh Bhairav Technical Secondary School
      </h1>
      <div className='capitalize text-red-400 font-serif font-semibold text-lg  '> {userData.name}</div>

      {/* User Circle */}
      <div className="relative">
        <button
          className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer focus:outline-none shadow-md"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-label="User menu"
        >
          {userData.name.substring(0, 2).toUpperCase()}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
            <div className="px-4 py-2">
              <p className="text-gray-800 capitalize"><span className="font-semibold ">Name:</span> {userData.name}</p>
              <p className="text-gray-800 "><span className="font-semibold ">Email:</span> {userData.email}</p>
              <p className="text-gray-800"><span className="font-semibold">Role:</span> {userData.role}</p>
            </div>
            <button
              onClick={() => navigate('/CheckEmail')}
              className="w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 border-t border-gray-200 transition-colors"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 border-t border-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Admin;