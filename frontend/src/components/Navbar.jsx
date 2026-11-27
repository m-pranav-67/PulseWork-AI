import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Freelancer's Hub
          </span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-600 hover:text-blue-600"> Dashboard </Link>
          <Link to="/browse-projects" className="text-gray-600 hover:text-blue-600"> Browse Projects </Link>
          <Link to="/post-project" className="text-gray-600 hover:text-blue-600">Post a Project</Link>
        </nav>
        <div className="flex items-center text-gray-700 p-1.5 rounded-full hover:bg-gray-100 cursor-pointer" title="Profile">
          <p className=''>Profile</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
