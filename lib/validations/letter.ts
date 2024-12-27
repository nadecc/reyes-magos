import * as z from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

export const letterSchema = z.object({
  childName: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number()
    .int()
    .min(3, 'Must be at least 3 years old')
    .max(14, 'Must be 14 years or younger'),
  parentEmail: z.string().email('Please enter a valid email'),
  wishlist: z.array(z.string())
    .min(1, 'Please add at least one wish')
    .max(3, 'Maximum 3 wishes allowed'),
  goodBehavior: z.string()
    .min(10, 'Please write at least 10 characters')
    .max(500, 'Maximum 500 characters allowed'),
  drawing: z.any()
    .refine((file) => !file || file instanceof File, 'Must be a file')
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      'File must be less than 10MB'
    )
    .refine(
      (file) => !file || ACCEPTED_FILE_TYPES.includes(file.type),
      'Only .jpg, .png, and .pdf files are accepted'
    )
    .optional()
    .nullable(),
  parentalConsent: z.boolean()
    .refine(val => val === true, 'Parental consent is required'),
});

export type LetterFormValues = z.infer<typeof letterSchema>;