import clsx from 'clsx';
import SidebarMenu from '@components/molecules/Sidebar/SidebarMenu';
import useMiniSidebar from '@utils/store/useMiniSidebar';
import {
  BellIcon,
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { rgbDataURL } from '@utils/formatImage';

const SideMenu = [
  {
    slug: '/dashboard',
    label: 'Dashboard',
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    slug: '/calendar',
    label: 'Calendar',
    icon: <CalendarIcon className="h-6 w-6" />,
  },
  {
    slug: '/participant',
    label: 'Participant',
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    slug: '/invitations',
    label: 'Invitations',
    icon: <BellIcon className="h-6 w-6" />,
  },
];

export default function Sidebar() {
  const { isMini } = useMiniSidebar();

  return (
    <aside
      className={clsx(
        'bg-primary-700 absolute top-0 z-10 max-h-screen min-h-screen flex-col justify-between overflow-hidden border-r border-gray-300 py-8 px-4 text-white duration-300 md:sticky',
        isMini
          ? '-left-10 w-0 md:left-0 md:flex md:w-[5.5rem]'
          : 'left-0 w-3/4 md:flex md:w-60'
      )}
    >
      <div>
        {/* <figure className="mx-2 flex flex-row items-center justify-center">
          {!isMini ? (
            <Image
              src="/uploads/logo_concept_w.svg"
              className=""
              alt="react-icon"
              height={59}
              width={164}
              objectFit="contain"
              layout="fixed"
              placeholder="blur"
              blurDataURL={rgbDataURL(20, 72, 122)}
            />
          ) : (
            <div className="min-h-[59px]" />
          )}
        </figure> */}

        {/* side menu */}
        <div className="mt-12 mb-4 flex flex-col gap-3">
          {SideMenu.map((menu) => (
            <SidebarMenu menu={menu} key={menu.slug} />
          ))}
        </div>
      </div>

      <SidebarMenu
        menu={{
          slug: '/profile',
          label: 'Profile',
          icon: <UserCircleIcon className="h-6 w-6" />,
        }}
        key="/profile"
      />
    </aside>
  );
}
