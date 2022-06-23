import * as z from 'zod';

/** Schema for new team */
export const NewTeamSchema = z.object({
  name: z.string().min(2, { message: 'Required' }),
  description: z.string().optional(),
});

/** TS types for the new team form */
export type NewTeamInput = z.infer<typeof NewTeamSchema>;
