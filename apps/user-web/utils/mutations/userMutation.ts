import axios from 'axios';
import { API_URL } from '@utils/constant';
import { format } from 'date-fns';

import type { GetUserRes, UpdateUserParam } from '@utils/types/user.dto';

/** get array of meeting by user id */
export const updateUser = async ({ user, id, oldUser }: UpdateUserParam) => {
  console.log({
    f: user.dateofbirth.toLocaleDateString(),
    n: new Date().toLocaleDateString(),
  });
  const { data } = await axios.put<GetUserRes>(
    `${API_URL}/api/user/update/${id}`,
    {
      ...user,
      isActive: oldUser.isActive,
      email_verified_at: oldUser.email_verified_at,
      avatarUrl: oldUser.avatarUrl,
      dateofbirth:
        user.dateofbirth.toDateString() === new Date().toDateString()
          ? null
          : format(user.dateofbirth, 'yyyy-MM-dd:HH:mm'),
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data.data;
};
