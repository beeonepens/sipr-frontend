export const API_URL = process.env.NEXT_PUBLIC_API;
export const RELEASE_VERSION = process.env.NEXT_PUBLIC_RELEASE_VERSION || '-';
export const REDIS_URL = process.env.REDIS_URL || '-';

export const PUBLIC_URL = [
  '/',
  '/login',
  '/register',
  '/reset-password',
  '/404',
];

export function isPublicUrl(pathname: string) {
  if (PUBLIC_URL.includes(pathname)) return true;
  return false;
}

/** meeting status options */
export const MeetingStatusOptions = [
  { label: 'Online', value: 'online' },
  { label: 'Offline', value: 'offline' },
];

/** gender options */
export const GenderOptions = [
  { label: 'Male', value: 'pria' },
  { label: 'Female', value: 'wanita' },
];

/** function to handle open toast */
export const handleOpenToast = (
  open: boolean,
  setOpen: (op: boolean) => void
) => {
  if (open) {
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 400);
  } else {
    setOpen(true);
  }
};

/** team member */
export const TeamMember = [
  'Abier',
  'Arya',
  'Fahri',
  'Fian',
  'Nurul',
  'Reyhana',
];

export const EVENTS = [];
export interface EventType {
  id: number;
  title: string;
  description: string;
  allDay: boolean;
  start: Date;
  end: Date;
  isOnline: boolean;
  link?: string;
  location?: string;
}

export const getEventDetails = (id: number) => EVENTS.find((e) => e.id === id);
