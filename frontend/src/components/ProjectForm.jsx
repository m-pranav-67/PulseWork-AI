import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import projectSchema from '../lib/projectSchema'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'

const ProjectForm = ({ addOn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(projectSchema) })

  const submit = (data) => {
    if (addOn) {
      addOn(data)
    }
    reset()
  }

  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">Post a Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <Label htmlFor="vendorName">Vendor Name</Label>
              <Input id="vendorName" {...register("vendorName")} placeholder="Vendor Name" />
              {errors.vendorName?.message}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} placeholder="Email" type="email" />
              {errors.email?.message}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="projectTitle">Project Title</Label>
              <Input id="projectTitle" {...register("projectTitle")} placeholder="Project Title" />
              {errors.projectTitle?.message}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="category">Category</Label>
              <select id="category" {...register("category")} className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                <option value="Web Development">Web Development</option>
                <option value="Software Development">Software Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile App Development">Mobile App Development</option>
              </select>
              {errors.category?.message}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="budget">Budget</Label>
              <Input id="budget" {...register("budget")} placeholder="Budget" type="number" />
              {errors.budget?.message}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="description">Description</Label>
              <Input id="description" {...register("description")} placeholder="Description (min 20 chars)" />
              {errors.description?.message}
            </div>
            <Button type="submit" className="w-full mt-2">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectForm
