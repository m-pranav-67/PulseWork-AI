import React from 'react';
import ProjectForm from '../components/ProjectForm';

const PostProject = ({ onProjectSubmit }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold tracking-tight">Post a Project</h1>
      <ProjectForm addOn={onProjectSubmit} />
    </div>
  );
};

export default PostProject;
