import * as z from 'zod';

/** Schema for register forms */
export const RegisterSchema = z
  .object({
    name: z.string().min(2, { message: 'Required' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .min(6, { message: 'Required' }),
    password: z.string().min(6, { message: 'Minimum 6 character' }),
    confirmPassword: z.string().min(6, { message: 'Minimum 6 character' }),
    username: z.string().min(2, { message: 'Required' }),
    address: z.string().optional().default(''),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

/** TS types for the input form */
export type RegisterInput = z.infer<typeof RegisterSchema>;
