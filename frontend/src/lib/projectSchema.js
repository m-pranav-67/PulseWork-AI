import { z } from 'zod';

export const projectSchema = z.object({
  vendorName: z
    .string()
    .min(3, "Vendor Name must be at least 3 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  projectTitle: z
    .string()
    .min(5, "Project Title must be at least 5 characters"),
  category: z.enum(
    [
      "Web Development",
      "Software Development",
      "UI/UX Design",
      "Mobile App Development"
    ],
    { errorMap: () => ({ message: "Please select a valid project category" }) }
  ),
  budget: z.coerce
    .number({ invalid_type_error: "Budget must be a number" })
    .positive("Project Budget must be a positive number"),
  description: z
    .string()
    .min(20, "Project Description must be at least 20 characters")
});

export default projectSchema;
