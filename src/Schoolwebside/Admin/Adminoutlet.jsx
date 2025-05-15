import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Admin from './Admin';
import Fotter from "../Fotter"

const Adminoutlet = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <div className="flex min-h-screen bg-gray-100">
    
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
    
      <div className="flex-1 flex flex-col">
   
        <Admin onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Content */}
        <main className="flex-1 p-4 overflow-auto">

          <Outlet />
     
        </main>
      </div>
    </div>
    <Fotter/>
    </>
  );
};

export default Adminoutlet;