import clsx from 'clsx';
import SidebarMenu from '@components/molecules/Sidebar/SidebarMenu';
import useSidebar from '@utils/store/useSidebar';
import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  MailIcon,
} from '@heroicons/react/outline';
import Logo from '@components/atoms/Logo';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import WhatsNewMenu from '@components/molecules/Sidebar/WhatsNewMenu';
import HelpAboutMenu from '@components/molecules/Sidebar/HelpAboutMenu';

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
    slug: '/teams',
    label: 'Teams',
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
  const { isMini } = useSidebar();
  const logoColor = useLogoColor();

  return (
    <aside
      className={clsx(
        'text-primary-700 fixed top-0 z-10 max-h-screen min-h-screen flex-col justify-between overflow-hidden border-r border-gray-300 bg-gray-100 py-8 px-4 duration-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 lg:sticky',
        isMini
          ? '-left-10 w-0 lg:left-0 lg:flex lg:w-60'
          : 'left-0 w-3/4 md:w-1/2 lg:flex lg:w-60'
      )}
    >
      <div>
        <figure className="mx-auto flex w-[170px] flex-row items-center justify-center">
          <Logo color={logoColor} />
        </figure>

        {/* side menu */}
        <div className="mt-12 mb-4 flex flex-col gap-3">
          {SideMenu.map((menu) => (
            <SidebarMenu menu={menu} key={menu.slug} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col lg:mt-0">
        <WhatsNewMenu />
        <HelpAboutMenu />
      </div>
    </aside>
  );
}
