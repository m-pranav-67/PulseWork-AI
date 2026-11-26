import React from 'react';
import { Button } from '@/components/ui/button';

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Freelancer's Hub
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
          <span className="text-blue-600 font-semibold cursor-pointer">Dashboard</span>
          <span className="hover:text-blue-600 cursor-pointer">Find Freelancers</span>
          <span className="hover:text-blue-600 cursor-pointer">Browse Projects</span>
          <span className="hover:text-blue-600 cursor-pointer">Vendors</span>
        </nav>
        <div className="flex items-center">
          <Button variant="outline" size="sm">
            Login / Profile
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
