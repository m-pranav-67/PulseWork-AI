import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PostProject from './pages/PostProject';
import BrowseProjects from './pages/BrowseProjects';
import MyProjects from './pages/MyProjects';
import About from './pages/About';

function App() {
  const [addedProjects, setAddedProjects] = useState([]);
  const handleAddProject = (newProject) => {
    setAddedProjects((prev) => [{...newProject,id: Date.now(),status: 'Pending'},...prev]);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Navbar />
      <div className="flex-1 flex w-full">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 min-w-0 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/post-project" element={<PostProject onProjectSubmit={handleAddProject} />}/>
            <Route path="/browse-projects" element={<BrowseProjects />} />
            <Route path="/my-projects" element={<MyProjects addedProjects={addedProjects} />}/>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
