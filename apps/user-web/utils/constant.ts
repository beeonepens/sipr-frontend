export const API_URL = process.env.NEXT_PUBLIC_API

export const PUBLIC_URL = [
  '/',
  '/login',
  '/register',
  '/reset-password',
  '/404',
];

export const placeholderAvatar = '/uploads/avatar-man.png';

export function isPublicUrl(pathname: string) {
  if (PUBLIC_URL.includes(pathname)) return true;
  return false;
}

/** meeting status options */
export const MeetingStatusOptions = [
  { label: 'Online', value: 'online' },
  { label: 'Offline (in progress)', value: 'offline' },
];
