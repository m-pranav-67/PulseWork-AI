import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function TaskCard({ title, category, budget, status, freelancer }) {
  const getStatusColor = (currentStatus) => {
    switch (currentStatus) {
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="flex flex-col justify-between hover:shadow-md transition-shadow border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded border border-gray-200 text-gray-600 bg-gray-50">
            {category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        <CardTitle className="text-lg font-bold text-gray-900 mt-2">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Budget:</span>
          <span className="font-semibold text-gray-900">{budget}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Freelancer:</span>
          <span className={`font-medium ${freelancer === 'Not Assigned' ? 'text-amber-600 italic' : 'text-gray-800'}`}>
            {freelancer}
          </span>
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-gray-100">
        <Button
          variant="outline"
          size="sm"
          className="w-full text-blue-600 border-blue-200"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
