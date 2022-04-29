export interface Room {
  id_room: number;
  name_room: string;
  description: string;
  isOnline: number;
  isBooked: number;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface NewRoomResponse {
  data: Room[];
  message: string;
}
