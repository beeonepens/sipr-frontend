import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetAllMeetingRes } from '@utils/types/meet.dto';

/** get array of meeting by user id */
export const getMeetingByUid = async ({ queryKey }) => {
  const { data } = await axios.get<GetAllMeetingRes>(
    `${API_URL}/api/meet/show?user_id=${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data.data.meet;
};

/** get array of meeting datetime by user id */
export const getDateTimeByUid = async ({ queryKey }) => {
  const { data } = await axios.get<GetAllMeetingRes>(
    `${API_URL}/api/meet/show?user_id=${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data.data.datetime;
};
