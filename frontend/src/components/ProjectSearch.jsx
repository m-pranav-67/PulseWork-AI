import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function ProjectSearch() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
        <div className="sm:col-span-6 space-y-1">
          <Label htmlFor="search">Search Projects</Label>
          <Input id="search" placeholder="Search projects..." readOnly />
        </div>
        <div className="sm:col-span-4 space-y-1">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            disabled
            className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-sm shadow-sm text-gray-600 cursor-default">
            <option value="all">All Categories</option>
            <option value="web">Web Development</option>
            <option value="software">Software Development</option>
            <option value="frontend">Frontend Development</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <Button type="button" className="w-full">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectSearch;
