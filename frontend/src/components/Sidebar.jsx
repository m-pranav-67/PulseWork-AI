import React from 'react';

function Sidebar() {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'projects', label: 'My Projects' },
    { id: 'freelancers', label: 'Browse Freelancers' },
    { id: 'tasks', label: 'Assigned Tasks' },
    { id: 'messages', label: 'Messages' },
    { id: 'profile', label: 'My Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'logout', label: 'Logout' }
  ];
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div className="py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Menu
        </div>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer ${
              item.id === 'dashboard'
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : item.id === 'logout'
                ? 'text-red-600'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100 text-xs text-gray-400">
        Freelancer's Hub v2.0
      </div>
    </aside>
  );
}

export default Sidebar;
