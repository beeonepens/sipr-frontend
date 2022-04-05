import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import BellIcon from '@components/atoms/Icon/BellIcon';
import CalendarIcon from '@components/atoms/Icon/CalendarIcon';
import HomeIcon from '@components/atoms/Icon/HomeIcon';
import UserGroupIcon from '@components/atoms/Icon/UserGroupIcon';
import SidebarMenu from '@components/molecules/Sidebar/SidebarMenu';

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

  return (
    <aside
      className={clsx(
        'bg-primary-950 sticky top-0 z-10 h-screen flex-col justify-between overflow-hidden border-r border-gray-400 py-8 px-4 text-white transition duration-200 ease-in',
        'flex w-[15%]'
        // store.miniSidebar ? "hidden" : "flex w-[15%]"
      )}
    >
      <div className="mt-12 flex flex-col gap-4">
        {SideMenu.map((menu) => (
          <SidebarMenu menu={menu} pathname={pathname} key={menu.slug} />
        ))}
      </div>
    </aside>
  );
}
