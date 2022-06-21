import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetTeamRes } from '@utils/types/team.dto';

export const searchTeamById = async (id: string) => {
  const { data } = await axios.get<GetTeamRes>(
    `${API_URL}/api/team/show?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  if (data.message === 'Failed') return [];

  return data.data;
};
