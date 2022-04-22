import clsx from 'clsx';
import SidebarMenu from '@components/molecules/Sidebar/SidebarMenu';
import useMiniSidebar from '@utils/store/useMiniSidebar';
import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  UserCircleIcon,
  MailIcon,
} from '@heroicons/react/outline';
import Logo from '@components/atoms/Logo';

const SideMenu = [
  {
    alias: 'dashboard',
    slug: '/dashboard',
    label: 'Dashboard',
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    alias: 'calendar',
    slug: '/agenda',
    label: 'Agenda',
    icon: <CalendarIcon className="h-6 w-6" />,
  },
  {
    alias: 'teams',
    slug: '/participant',
    label: 'Participant',
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    alias: 'invitations',
    slug: '/invitations',
    label: 'Invitations',
    icon: <MailIcon className="h-6 w-6" />,
  },
];

export default function Sidebar() {
  const { isMini } = useMiniSidebar();

  return (
    <aside
      className={clsx(
        // 'bg-primary-700 absolute top-0 z-10 max-h-screen min-h-screen flex-col justify-between overflow-hidden border-r border-gray-300 py-8 px-4 text-white duration-300 md:sticky',
        'text-primary-700 fixed top-0 z-10 max-h-screen min-h-screen flex-col justify-between overflow-hidden border-r border-gray-300 bg-gray-100 py-8 px-4 duration-300 md:sticky',
        isMini
          ? '-left-10 w-0 md:left-0 md:flex md:w-60'
          : 'left-0 w-3/4 md:flex md:w-60'
      )}
    >
      <div>
        <figure className="mx-auto flex w-[170px] flex-row items-center justify-center">
          <Logo />
        </figure>

        {/* side menu */}
        <div className="mt-12 mb-4 flex flex-col gap-3">
          {SideMenu.map((menu) => (
            <SidebarMenu menu={menu} key={menu.slug} />
          ))}
        </div>
      </div>

      <SidebarMenu
        menu={{
          alias: 'profile',
          slug: '/profile',
          label: 'Profile',
          icon: <UserCircleIcon className="h-6 w-6" />,
        }}
        key="/profile"
      />
    </aside>
  );
}
