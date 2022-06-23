import axios from 'axios';
import { API_URL } from '@utils/constant';

import type {
  JoinTeamInput,
  NewTeamInput,
} from '@utils/validations/newTeamVal';
import type { JoinTeamRes, NewTeamResponse } from '@utils/types/team.dto';

export const createTeam = async (team: NewTeamInput) => {
  const { data } = await axios.post<NewTeamResponse>(
    `${API_URL}/api/team/store`,
    {
      ...team,
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

export const joinTeam = async ({ kode }: JoinTeamInput) => {
  const { data } = await axios.post<JoinTeamRes>(
    `${API_URL}/api/team/join?id_member=${String(localStorage.getItem('uid'))}`,
    { kode },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data;
};
