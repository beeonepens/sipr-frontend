import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetAllMeetingRes } from '@utils/types/meet.dto';

export const getAllMeeting = async () => {
  const { data } = await axios.get<GetAllMeetingRes>(`${API_URL}/api/meet`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return data;
};
