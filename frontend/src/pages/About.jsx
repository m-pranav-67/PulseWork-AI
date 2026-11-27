import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          About Freelancer's Hub
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Empowering freelancers and vendors through transparent collaboration.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900">
            How Vendors and Freelancers Connect
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600 leading-relaxed space-y-2">
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Post a Project:</strong> Vendors submit requirements, budgets, and timelines using our intuitive project form.</li>
            <li><strong>Browse & Discover:</strong> Freelancers explore available opportunities and review project details.</li>
            <li><strong>Collaborate:</strong> Assigned projects are tracked with real-time status updates from pending to completion.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
