import * as z from 'zod';

/** Schema for userProfile forms */
export const UserProfileSchema = z.object({
  nip: z
    .string()
    .regex(/^[1-9]+[0-9]*$/g, { message: 'Format invalid' })
    .min(6, { message: 'Required' }),
  role_id: z.number().default(2),
  name: z.string().min(2, { message: 'Required' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(6, { message: 'Required' }),
  gender: z.enum(['pria', 'wanita']),
  address: z.string().optional().default(''),
  dateofbirth: z.date().optional(),
});

/** TS types for the input form */
export type UserProfileInput = z.infer<typeof UserProfileSchema>;
