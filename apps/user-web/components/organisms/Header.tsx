import { useRouter } from 'next/router';
import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/outline';
import useSidebar from '@utils/store/useSidebar';
import Notification from '@components/molecules/Header/Notification';
import ThemeSwitcher from '@components/atoms/ThemeSwitcher';
import ProfileMenu from '@components/molecules/Header/ProfileMenu';

export default function Header() {
  const { pathname } = useRouter();
  const { isMini, toggleMini, toggleFullSize } = useSidebar();

  // console.log({ pathname: pathname.split('/') });
  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-between gap-4 border-b border-gray-300 bg-white bg-opacity-75 py-5 px-4 text-xl font-semibold text-blue-800 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 md:px-8 lg:py-3 ">
      <h4 className="capitalize">{pathname.split('/')[1]}</h4>

      <div className="flex flex-row items-center justify-end gap-4">
        <ThemeSwitcher />
        <Notification />
        <ProfileMenu />
        {isMini ? (
          <MenuIcon
            className="ml-2 flex h-6 w-6 -scale-x-100 cursor-pointer hover:text-blue-600 lg:hidden lg:scale-x-100"
            onClick={isMini ? toggleFullSize : toggleMini}
          />
        ) : (
          <MenuAlt1Icon
            className="ml-2 flex h-6 w-6 -scale-x-100 cursor-pointer hover:text-blue-600 lg:hidden lg:scale-x-100"
            onClick={isMini ? toggleFullSize : toggleMini}
          />
        )}
      </div>
    </header>
  );
}
