import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
  const stats = [{ title: 'Total Projects', value: '12', desc: 'Overall platform projects' },{ title: 'Active Projects', value: '5', desc: 'Currently in development' },{ title: 'Completed Projects', value: '7', desc: 'Delivered successfully' }];
  const recentProjects = [{ id: 1,title: 'E-commerce Website Development',category: 'Web Development',budget: '₹15,000',status: 'In Progress'},{ id: 2,title: 'College Management Software',category: 'Software Development',budget: '₹25,000',status: 'Open'}];
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome to Freelancer's Hub!</h1>
          <p className="text-gray-600 text-sm mt-1">Connect with talented freelancers, post your projects, and track IT development work seamlessly.</p>
        </div>
        <Link to="/post-project"><Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">+ Post a Project</Button></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{s.value}</div>
              <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Recent Projects</h2>
          <Link to="/browse-projects" className="text-sm font-medium text-blue-600 hover:underline">View All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id}title={project.title}category={project.category}budget={project.budget}status={project.status}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
