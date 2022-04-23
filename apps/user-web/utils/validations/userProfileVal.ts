import * as z from 'zod';

/** Schema for userProfile forms */
export const UserProfileSchema = z.object({
  name: z.string().min(2, { message: 'Required' }),
  address: z.string().optional().default(''),
  gender: z.enum(['pria', 'wanita']),
  dateofbirth: z.date(),
});

/** TS types for the input form */
export type UserProfileInput = z.infer<typeof UserProfileSchema>;
