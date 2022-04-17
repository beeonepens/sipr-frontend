import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { LoginInput, RegisterInput } from '@utils/validations';
import type { LoginResponse, RegisterResponse } from '@utils/types/auth.dto';

export const loginMutation = async (user: LoginInput) => {
  const { data } = await axios.post<LoginResponse>(
    `${API_URL}/api/login`,
    user,
    { headers: { 'Content-Type': 'application/json' } }
  );

  return data;
};

export const registerMutation = async (user: RegisterInput) => {
  const { data } = await axios.post<RegisterResponse>(
    `${API_URL}/api/user/store`,
    user,
    { headers: { 'Content-Type': 'application/json' } }
  );

  return data;
};
