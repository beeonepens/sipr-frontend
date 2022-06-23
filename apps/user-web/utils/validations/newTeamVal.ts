import * as z from 'zod';

/** Schema for new team */
export const NewTeamSchema = z.object({
  name_teams: z.string().min(2, { message: 'Required' }),
  description: z.string().optional(),
});

/** TS types for the new team form */
export type NewTeamInput = z.infer<typeof NewTeamSchema>;

export const JoinTeamSchema = z.object({
  kode: z.string().min(2, { message: 'Required' }),
});

export type JoinTeamInput = z.infer<typeof JoinTeamSchema>;
