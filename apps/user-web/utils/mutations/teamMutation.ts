import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { NewTeamInput } from '@utils/validations/newTeamVal';
import type { NewTeamResponse } from '@utils/types/team.dto';

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
