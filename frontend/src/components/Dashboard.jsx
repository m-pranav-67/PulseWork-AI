import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Welcome to Freelancer's Hub
        </h1>
        <p className="mt-1 text-gray-600 text-sm sm:text-base">
          Connect with talented freelancers and find exciting projects.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors">
          Find a Freelancer
        </button>
        <button
          type="button"
          className="px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors">
          Post a Project
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
