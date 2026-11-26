import React from 'react';
import StatsCard from '@/components/StatsCard';
import TaskCard from '@/components/TaskCard';
import ProjectSearch from '@/components/ProjectSearch';
import { Button } from '@/components/ui/button';
function Dashboard() {
  const stats = [
    { title: 'Total Projects', value: '24', description: 'Overall projects recorded' },
    { title: 'Active Projects', value: '08', description: 'Currently ongoing tasks' },
    { title: 'Completed Projects', value: '12', description: 'Successfully delivered' },
    { title: 'Available Freelancers', value: '35', description: 'Ready to take on work' }
  ];
  const tasks = [
    {
      title: 'E-commerce Website Development',
      category: 'Web Development',
      budget: '₹15,000',
      freelancer: 'Rahul'
    },
    {
      title: 'College Management Software',
      category: 'Software Development',
      budget: '₹25,000',
      freelancer: 'Not Assigned'
    },
    {
      title: 'Portfolio Website Design',
      category: 'Frontend Development',
      budget: '₹8,000',
      freelancer: 'Arun'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Freelancer's Hub!
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Manage your projects, connect with talented freelancers, and track your work in one place.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + Post a Project
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
      <ProjectSearch />
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900">Projects & Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              category={task.category}
              budget={task.budget}
              status={task.status}
              freelancer={task.freelancer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;