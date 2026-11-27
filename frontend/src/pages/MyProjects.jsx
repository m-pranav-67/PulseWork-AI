import React from 'react';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
  const projects = [{title: 'E-commerce Website Development',category: 'Web Development',budget: '₹15,000',status: 'In Progress'},{title: 'College Management Software',category: 'Software Development',budget: '₹25,000',status: 'Pending'},{title: 'Portfolio Website Design',category: 'UI/UX Design',budget: '₹8,000',status: 'Completed'}];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold tracking-tight">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{projects.map((p, index) => (<ProjectCard key={index} {...p} />))}</div>
    </div>
  );
};

export default MyProjects;
