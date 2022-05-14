export interface LoginResponse {
  status: string;
  msg: string;
  errors?: unknown;
  content: {
    status_code: number;
    access_token: string;
    token_type: string;
    user_id: string;
  };
}

export interface NewUser {
  address?: string;
  avatarUrl?: string;
  created_at: string;
  dateofbirth?: string;
  email: string;
  gender: string;
  name: string;
  name_role: string;
  nip: string;
  password: string;
  updated_at: string;
}
export interface NewAccountResponse {
  data?: NewUser[];
  token?: string;
  message?: unknown;
}

export interface RegisterResponse {
  email: string;
  otp: string;
  ttl: string;
  status: 'old' | 'new';
}

export interface LogoutResponse {
  status: string;
  msg: string;
  errors?: unknown;
  content?: unknown;
}
