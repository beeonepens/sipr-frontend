import * as z from 'zod';

/** Schema for new room forms */
export const NewRoomSchema = z.object({
  name_room: z.string().min(1, { message: 'Required' }),
  description: z.string().optional(),
  isOnline: z.boolean(),
  isBooked: z.boolean(),
});

/** TS types for the input form */
export type NewRoomInput = z.infer<typeof NewRoomSchema>;
