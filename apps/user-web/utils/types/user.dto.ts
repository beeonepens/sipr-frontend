export interface User {
  nip: string;
  name: string;
  role_id: number;
  isActive: number;
  email: string;
  email_verified_at?: string;
  avatarUrl?: string;
  address?: string;
  gender: string;
  dateofbirth?: string;
  created_at: string;
  updated_at: string;
}

export interface GetUserRes {
  data: User[];
  message: string;
}
