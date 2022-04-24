import * as z from 'zod';

/** Schema for register forms */
export const RegisterSchema = z
  .object({
    nip: z
      .string()
      .regex(/^[1-9]+[0-9]*$/g, { message: 'Format invalid' })
      .min(6, { message: 'Required' }),
    name: z.string().min(2, { message: 'Required' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .min(6, { message: 'Required' }),
    password: z.string().min(6, { message: 'Minimum 6 character' }),
    confirmPassword: z.string().min(6, { message: 'Minimum 6 character' }),
    gender: z.enum(['pria', 'wanita']),
    address: z.string().optional().default(''),
    dateofbirth: z.date().optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

/** TS types for the input form */
export type RegisterInput = z.infer<typeof RegisterSchema>;
