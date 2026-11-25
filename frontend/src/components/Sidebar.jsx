import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-6 py-4 space-y-3">
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">Dashboard</div>
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">My Projects</div>
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">Browse Freelancers</div>
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">Browse Jobs</div>
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">Messages</div>
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">My Profile</div>
      <div className="text-gray-700 hover:text-blue-600 cursor-pointer">Settings</div>
      <div className="text-gray-700 hover:text-red-600 cursor-pointer">Logout</div>
    </aside>
  );
}

export default Sidebar;
