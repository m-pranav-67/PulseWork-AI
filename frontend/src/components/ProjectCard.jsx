import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

const ProjectCard = ({ title, category, budget, status }) => {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{category}</span>
          <span>{status}</span>
        </div>
        <CardTitle className="text-base font-bold text-gray-900 mt-1">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        <p>Budget: <span className="font-semibold text-gray-900">{budget}</span></p>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
