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
  { label: 'Offline', value: 'offline' },
];

/** gender options */
export const GenderOptions = [
  { label: 'Male', value: 'pria' },
  { label: 'Female', value: 'wanita' },
];

export const EVENTS = [
  {
    id: 0,
    title: 'Kuliah RPL/WPPL',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam dignissimos aliquid similique alias quibusdam molestias consequuntur quae impedit repellendus. Aut odio itaque.',
    allDay: false,
    start: new Date(2022, 3, 25, 8, 0),
    end: new Date(2022, 3, 25, 12, 0),
    isOnline: false,
    location: 'Ruang Komputer, Gedung D4',
  },
  {
    id: 1,
    title: 'Kuliah Pemrograman Framework',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam dignissimos aliquid similique alias quibusdam molestias consequuntur quae impedit repellendus. Aut odio itaque nam ab beatae necessitatibus harum.',
    allDay: false,
    start: new Date(2022, 3, 25, 14, 0),
    end: new Date(2022, 3, 25, 15, 30),
    isOnline: true,
    link: 'https://meet.google.com/abcdef',
  },
  {
    id: 2,
    title: 'Daily Scrum 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam dignissimos aliquid similique alias quibusdam molestias consequuntur quae impedit repellendus. Aut odio itaque nam ab harum.',
    allDay: false,
    start: new Date(2022, 3, 26, 20, 30),
    end: new Date(2022, 3, 26, 21, 0),
    isOnline: true,
    link: 'https://meet.google.com/ghijk',
  },
  {
    id: 3,
    title: 'Daily Scrum 19',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam dignissimos aliquid similique alias quibusdam molestias consequuntur quae impedit.',
    allDay: false,
    start: new Date(2022, 3, 27, 20, 30),
    end: new Date(2022, 3, 27, 21, 0),
    isOnline: true,
    link: 'https://meet.google.com/lmnopq',
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
