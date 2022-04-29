import * as z from 'zod';

/** Schema for new meeting forms */
export const NewMeetingSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  description: z.string().optional(),
  date_start: z.date(),
  date_end: z.date(),
  isOnline: z.boolean().optional(),
  limit: z.number().positive().optional(),
  location: z.string().min(1, { message: 'Required' }),
});

/** TS types for the input form */
export type NewMeetingInput = z.infer<typeof NewMeetingSchema>;
