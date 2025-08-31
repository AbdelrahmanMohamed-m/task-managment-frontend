import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-lg ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Title */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Task Management System</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={()=> navigate("/Dashboard")}
                className="hover:text-blue-200 transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="hover:text-blue-200 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/tasks')}
                className="hover:text-blue-200 transition-colors"
              >
                Tasks
              </button>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-blue-200">Welcome,</span>
                <span className="font-medium ml-1">{user?.userName}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-sm min-h-96 p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;