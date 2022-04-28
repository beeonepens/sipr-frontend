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
export interface RegisterResponse {
  data?: NewUser[];
  token?: string;
  message?: string;
}

export interface LogoutResponse {
  status: string;
  msg: string;
  errors?: unknown;
  content?: unknown;
}
