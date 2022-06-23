import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetTeamByMemberRes, GetTeamRes } from '@utils/types/team.dto';

export const getTeamById = async ({ queryKey }) => {
  const { data } = await axios.get<GetTeamRes>(
    `${API_URL}/api/team/show?id=${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  if (data.message === 'Failed') return [];

  return data.data;
};

export const getTeamByMemberId = async ({ queryKey }) => {
  const { data } = await axios.get<GetTeamByMemberRes>(
    `${API_URL}/api/team/show?id_member=${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  if (data.message === 'Failed') return [];

  return data.data;
};
