import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="w-64">
        <h1 className="text-xl font-bold text-gray-900">Freelancer's Hub</h1>
      </div>

      <div className="flex items-center space-x-6 text-sm text-gray-600">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="hover:text-blue-600 cursor-pointer">Find Freelancers</span>
        <span className="hover:text-blue-600 cursor-pointer">Find Projects</span>
        <span className="hover:text-blue-600 cursor-pointer">My Dashboard</span>
      </div>

      <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
        Login / Profile
      </button>
    </nav>
  );
}

export default Navbar;
