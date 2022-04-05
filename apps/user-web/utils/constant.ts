// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_URL = ['/', '/login', '/register', '/reset-password'];

export function isPublicUrl(pathname: string) {
  if (PUBLIC_URL.includes(pathname)) return true;
  return false;
}
