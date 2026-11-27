import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Search, FolderKanban, Info } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-56 bg-sky-50/50 border-r border-gray-200 min-h-[calc(100vh-65px)] p-4 flex flex-col justify-between shrink-0">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Menu</p>
        <nav className="space-y-1">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-100/70 hover:text-blue-600 transition-colors">
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            <span>Dashboard</span>
          </Link>
          <Link to="/post-project" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-100/70 hover:text-blue-600 transition-colors">
            <PlusCircle className="w-4 h-4 shrink-0" />
            <span>Post a Project</span>
          </Link>
          <Link to="/browse-projects" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-100/70 hover:text-blue-600 transition-colors">
            <Search className="w-4 h-4 shrink-0" />
            <span>Browse Projects</span>
          </Link>
          <Link to="/my-projects" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-100/70 hover:text-blue-600 transition-colors">
            <FolderKanban className="w-4 h-4 shrink-0" />
            <span>My Projects</span>
          </Link>
          <Link to="/about" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-100/70 hover:text-blue-600 transition-colors">
            <Info className="w-4 h-4 shrink-0" />
            <span>About</span>
          </Link>
        </nav>
      </div>
      <div className="px-3 py-2 text-xs text-gray-400 border-t border-gray-200">Freelancer's Hub v1.0</div>
    </aside>
  );
};

export default Sidebar;
