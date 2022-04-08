import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import SidebarMenu from '@components/molecules/Sidebar/SidebarMenu';
import useMiniSidebar from '@utils/store/useMiniSidebar';
import {
  BellIcon,
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  UserCircleIcon,
} from 'ui';

const SideMenu = [
  {
    slug: '/dashboard',
    label: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    slug: '/calendar',
    label: 'Calendar',
    icon: <CalendarIcon />,
  },
  {
    slug: '/teams',
    label: 'Teams',
    icon: <UserGroupIcon />,
  },
  {
    slug: '/notification',
    label: 'Notification',
    icon: <BellIcon />,
  },
];

export default function Sidebar() {
  const { pathname } = useRouter();
  const { isMini } = useMiniSidebar();

  return (
    <aside
      className={clsx(
        'bg-primary-950 sticky top-0 z-10 h-screen flex-col justify-between overflow-hidden border-r border-gray-400 py-8 px-4 text-white transition duration-200 ease-in',
        // 'flex w-[15%]',
        isMini ? 'hidden' : 'hidden md:flex md:w-[15%]'
      )}
    >
      <div className="mt-12 flex flex-col gap-4">
        {SideMenu.map((menu) => (
          <SidebarMenu menu={menu} pathname={pathname} key={menu.slug} />
        ))}
      </div>

      <SidebarMenu
        menu={{ slug: '/profile', label: 'Profile', icon: <UserCircleIcon /> }}
        pathname={pathname}
        key="/profile"
      />
    </aside>
  );
}
