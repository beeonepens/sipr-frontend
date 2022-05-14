import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { LoginInput, NewAccountInput } from '@utils/validations';
import type {
  LoginResponse,
  NewAccountResponse,
  RegisterResponse,
} from '@utils/types/auth.dto';

export const loginMutation = async (user: LoginInput) => {
  const { data } = await axios.post<LoginResponse>(
    `${API_URL}/api/login`,
    user,
    { headers: { 'Content-Type': 'application/json' } }
  );

  return data;
};

export const preRegisterMutation = async (data: { email: string }) => {
  const res = await axios.post<RegisterResponse>('/api/pre-register', data, {
    headers: { 'Content-Type': 'application/json' },
  });

  return res.data;
};

export const verifyMutation = async (data: { otp: string }) => {
  const res = await axios.post(
    '/api/verify-code',
    { ...data, email: localStorage.getItem('email') },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return res.data;
};

export const registerMutation = async (user: NewAccountInput) => {
  const { data } = await axios.post<NewAccountResponse>(
    `${API_URL}/api/user/store`,
    {
      ...user,
      avatarUrl:
        user.gender === 'wanita'
          ? '/uploads/female_avatar.png'
          : '/uploads/male_avatar.png',
    },
    { headers: { 'Content-Type': 'application/json' } }
  );

  return data;
};

export const logoutMutation = async () => {
  const { data } = await axios.post(`${API_URL}/api/auth/logout`, null, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });

  return data;
};
