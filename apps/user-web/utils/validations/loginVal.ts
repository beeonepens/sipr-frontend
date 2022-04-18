import * as z from 'zod';

/** Schema for login forms */
export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(6, { message: 'Required' }),
  password: z.string().min(6, { message: 'Minimum 6 character' }),
});

/** TS types for the input form */
export type LoginInput = z.infer<typeof LoginSchema>;
