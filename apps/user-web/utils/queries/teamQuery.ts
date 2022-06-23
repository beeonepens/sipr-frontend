import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { GetTeamByMemberRes, GetTeamRes } from '@utils/types/team.dto';

export const getTeamById = async (id: string) => {
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

export const getTeamByMemberId = async (memberId: string) => {
  const { data } = await axios.get<GetTeamByMemberRes>(
    `${API_URL}/api/team/show?id_member=${memberId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  if (data.message === 'Failed') return [];

  return data.data;
};
