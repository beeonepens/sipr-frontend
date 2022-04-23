import * as z from 'zod';

/** Schema for userProfile forms */
export const UserProfileSchema = z.object({
  name: z.string().min(2, { message: 'Required' }),
  username: z.string().min(2, { message: 'Required' }),
  address: z.string().optional().default(''),
});

/** TS types for the input form */
export type UserProfileInput = z.infer<typeof UserProfileSchema>;
