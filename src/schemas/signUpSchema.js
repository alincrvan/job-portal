import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.email("Invalid Email"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{9,}$/, "Phone number must be at least 9 digits"),
  referrer: z.string().min(1, "Please select where you heard about us"),
  salaryExpectation: z.coerce
    .number({ invalid_type_error: "Salary must be a number" })
    .min(1000, "Salary must be at least 1000"),
  startDate: z.coerce
    .date({ errorMap: () => ({ message: "Please select a valid start date" }) })
    .refine((date) => !isNaN(date.getTime()), "Invalid date chosen"),
  message: z.string().optional(),
  agreement: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy statement" }),
  }),
  resume: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, {
      message: "Resume is required",
    })
    .refine((files) => files[0]?.type === "application/pdf", {
      message: "Only PDF files are allowed",
    })
    .refine((files) => files[0]?.size <= 2 * 1024 * 1024, {
      message: "File size must be under 2MB",
    }),
});

// Fixed: Safely handles empty initial state values without throwing instanceof errors
