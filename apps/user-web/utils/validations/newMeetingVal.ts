import * as z from 'zod';

/** Schema for new meeting forms */
export const NewMeetingSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  description: z.string().optional(),
  date_start: z.date(),
  date_end: z.date(),
  regular_date_start: z.date().array().optional(),
  regular_date_end: z.date().array().optional(),
  isOnline: z.string(),
  limit: z.number().positive().optional(),
  room_id: z.number().optional(),
  onlineLink: z.string().optional(),
  offlineLoc: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .optional(),
});

/** TS types for the input form */
export type NewMeetingInput = z.infer<typeof NewMeetingSchema>;
