export interface LoginResponse {
  status: string;
  msg: string;
  errors?: unknown;
  content: {
    status_code: number;
    access_token: string;
    token_type: string;
  };
}
