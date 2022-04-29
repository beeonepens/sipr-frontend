import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { NewRoomInput } from '@utils/validations/newRoomVal';
import type { NewRoomResponse } from '@utils/types/room.dto';

export const createRoom = async (room: NewRoomInput) => {
  const { data } = await axios.post<NewRoomResponse>(
    `${API_URL}/api/room/store`,
    {
      ...room,
      isOnline: room.isOnline ? 1 : 0,
      user_id: String(localStorage.getItem('uid')),
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data;
};
