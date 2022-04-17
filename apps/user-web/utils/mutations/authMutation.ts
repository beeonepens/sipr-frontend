import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { LoginInput } from '@utils/validations';
import type { LoginResponse } from '@utils/types/auth.dto';

export const loginMutation = async (user: LoginInput) => {
  const { data } = await axios.post<LoginResponse>(
    `${API_URL}/api/login`,
    user,
    { headers: { 'Content-Type': 'application/json' } }
  );

  return data;
};
