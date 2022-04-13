import * as z from 'zod';

/** Schema for register forms */
export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'Required' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .min(1, { message: 'Required' }),
    password: z.string().min(1, { message: 'Required' }),
    confirmPassword: z.string().min(1, { message: 'Required' }),
    username: z.string().min(1, { message: 'Required' }),
    address: z.string().optional().default(''),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

/** TS types for the input form */
export type RegisterInput = z.infer<typeof RegisterSchema>;
