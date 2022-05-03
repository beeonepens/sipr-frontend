import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetUserRes } from '@utils/types/user.dto';

/** get array of meeting by user id */
export const getUserById = async ({ queryKey }) => {
  const { data } = await axios.get<GetUserRes>(
    `${API_URL}/api/user/show?nip=${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data.data;
};
