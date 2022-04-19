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
    slug: '/participant',
    label: 'Participant',
    icon: <UserGroupIcon />,
  },
  {
    slug: '/invitations',
    label: 'Invitations',
    icon: <BellIcon />,
  },
];

export default function Sidebar() {
  const { isMini } = useMiniSidebar();

  return (
    <aside
      className={clsx(
        'bg-primary-950 absolute top-0 z-10 max-h-screen min-h-screen flex-col justify-between overflow-hidden border-r border-gray-300 py-8 px-4 text-white duration-300 md:sticky',
        isMini
          ? '-left-10 w-0 md:left-0 md:flex md:w-[5.5rem]'
          : 'left-0 w-3/4 md:flex md:w-60'
      )}
    >
      <div className="mt-12 mb-4 flex flex-col gap-3">
        {SideMenu.map((menu) => (
          <SidebarMenu menu={menu} key={menu.slug} />
        ))}
      </div>

      <SidebarMenu
        menu={{ slug: '/profile', label: 'Profile', icon: <UserCircleIcon /> }}
        key="/profile"
      />
    </aside>
  );
}
