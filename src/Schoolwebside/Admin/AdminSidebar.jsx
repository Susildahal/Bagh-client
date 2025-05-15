import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const links = [
    { to: '/Adminoutlet/AdminHome', label: 'Home' },
    { to: '/Adminoutlet/Account', label: 'Account' },
    { to: '/Adminoutlet/Notic', label: ' View Public Message ' },
    { to: '/Adminoutlet/TeacherForm', label: "Add Teacher " },
    { to: '/Adminoutlet/AddTeacher', label: 'Create  Account' },
    { to: '/Adminoutlet/AddStudent', label: 'Add Student' },
    { to: '/Adminoutlet/ClassStudentList', label: 'Student List' },
    { to: '/Adminoutlet/Marks', label: 'Marks' },
    { to: '/Adminoutlet/Princaple', label: 'Principal' },
    { to: '/Adminoutlet/Achievement', label: ' Add New Achievements' },
    { to: '/Adminoutlet/DisplayAchievements', label: 'Edit Achievements ' },
    { to: '/Adminoutlet/Publicnotic', label: ' Add New Notice' },
    { to: '/Adminoutlet/ShowPrincipal', label: 'Display Principal' },
    { to: '/Adminoutlet/DisplayPublicnotic', label: 'Edit Notic ' },

  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full overflow-x-hidden bg-slate-800 text-white z-50 w-64 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 '  : '-translate-x-full'} 
          md:translate-x-0 md:relative md:z-auto`}
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-end p-4 md:hidden">
          <button 
            onClick={onClose}
            className="text-white hover:text-slate-300 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
         
          <nav className="space-y-2">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`block py-2  overflow-x-auto  xl:mt-14 px-4 rounded hover:bg-slate-100 hover:text-black transition-colors duration-200 ${
                  location.pathname === link.to ? 'bg-slate-200 rounded-xl hover:bg-slate-100 text-black' : 'text-slate-200'
                }`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;