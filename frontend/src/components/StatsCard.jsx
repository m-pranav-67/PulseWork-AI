import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

function StatsCard({ title, value, description }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 tracking-tight">
          {value}
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
