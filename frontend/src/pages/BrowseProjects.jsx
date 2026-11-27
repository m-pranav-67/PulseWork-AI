import React from 'react';
import ProjectCard from '../components/ProjectCard';

const BrowseProjects = () => {
  const projects = [{id: 1,title: 'E-commerce Website Development',category: 'Web Development',budget: '₹15,000',status: 'Open'},{id: 2,title: 'College Management Software',category: 'Software Development',budget: '₹25,000',status: 'Open'},{id: 3,title: 'Portfolio Website Design',category: 'UI/UX Design',budget: '₹8,000',status: 'Open'}];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Browse Projects</h1>
        <p className="text-gray-600 text-sm mt-1">Explore available open projects and find work that fits your expertise.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (<ProjectCard key={project.id}title={project.title}category={project.category}budget={project.budget}status={project.status}/>))}
      </div>
    </div>
  );
};

export default BrowseProjects;
