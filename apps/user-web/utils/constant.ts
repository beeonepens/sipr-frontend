export const API_URL = process.env.NEXT_PUBLIC_API;

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
  { label: 'Offline (in progress)', value: 'offline' },
];

export const EVENTS = [
  {
    id: 0,
    title: 'Kuliah RPL/WPPL',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
    allDay: false,
    start: new Date(2022, 3, 11, 8, 0),
    end: new Date(2022, 3, 11, 12, 0),
    isOnline: false,
    location: 'Ruang Database',
  },
  {
    id: 1,
    title: 'Daily Scrum 3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
    allDay: false,
    start: new Date(2022, 3, 11, 10, 0),
    end: new Date(2022, 3, 11, 11, 30),
    isOnline: true,
    link: 'https://meet.google.com/abcdef',
  },
  {
    id: 2,
    title: 'Daily Scrum 4',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
    allDay: false,
    start: new Date(2022, 3, 12, 15, 30),
    end: new Date(2022, 3, 12, 16, 45),
    isOnline: true,
    link: 'https://meet.google.com/abcdef',
  },
  {
    id: 3,
    title: 'Daily Scrum 5',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
    allDay: false,
    start: new Date(2022, 3, 13, 8, 30),
    end: new Date(2022, 3, 13, 10, 0),
    isOnline: true,
    link: 'https://meet.google.com/abcdef',
  },
];
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
