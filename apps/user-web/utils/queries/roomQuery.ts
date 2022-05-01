import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetAllRoomRes } from '@utils/types/room.dto';

/** get array of rooms */
export const getAllRoom = async () => {
  const { data } = await axios.get<GetAllRoomRes>(`${API_URL}/api/room`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return data;
};
