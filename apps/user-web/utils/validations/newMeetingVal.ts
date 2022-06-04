import * as z from 'zod';

/** Schema for new meeting forms */
export const NewMeetingSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  description: z.string().optional(),
  date_start: z.date(),
  date_end: z.date(),
  isOnline: z.string(),
  limit: z.string().regex(/^([1-9]|[12]\d|3[0-6])$/),
  repeat_duration: z.enum(['day', 'week', 'month']),
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
