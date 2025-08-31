import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-gradient-to-r from-purple-700 to-purple-500 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-2">
        
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#8B5CF6" />
            <path
              d="M8 12l2.5 2.5L16 9"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-2">
          <span className="text-white font-bold text-2xl leading-tight">
            TaskFlow
          </span>
          <span className="block text-xs text-purple-200 font-medium -mt-1">
            Project Management
          </span>
        </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex gap-8 text-white font-medium">
        <a href="#" className="hover:text-purple-200 transition-colors">
          Features
        </a>
        <a href="#" className="hover:text-purple-200 transition-colors">
          Pricing
        </a>
        <a href="#" className="hover:text-purple-200 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-purple-200 transition-colors">
          Contact
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex gap-3 items-center">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 rounded-full text-white font-semibold bg-transparent border border-white hover:bg-white hover:text-purple-700 transition shadow-none"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-2 rounded-full bg-white text-purple-700 font-semibold hover:bg-purple-100 transition shadow-none"
        >
          Get Started Free
        </button>
      </div>
    </header>
  );
};

export default Header;
