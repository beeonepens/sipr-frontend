import { useRouter } from 'next/router';
import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/outline';
import useMiniSidebar from '@utils/store/useMiniSidebar';
import Notification from '@components/molecules/Header/Notification';

export default function Header() {
  const { pathname } = useRouter();
  const { isMini, toggleMini, toggleFullSize } = useMiniSidebar();

  // console.log({ pathname: pathname.split('/') });
  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-between gap-4 border-b border-gray-300 bg-white bg-opacity-75 py-5 px-4 text-xl font-semibold text-blue-800 backdrop-blur-lg backdrop-filter md:px-8 ">
      <h4 className="capitalize">{pathname.split('/')[1]}</h4>

      <div className="flex flex-row items-center justify-end gap-6">
        <Notification />
        {isMini ? (
          <MenuIcon
            className="flex h-6 w-6 -scale-x-100 cursor-pointer hover:text-blue-600 lg:hidden lg:scale-x-100"
            onClick={isMini ? toggleFullSize : toggleMini}
          />
        ) : (
          <MenuAlt1Icon
            className="flex h-6 w-6 -scale-x-100 cursor-pointer hover:text-blue-600 lg:hidden lg:scale-x-100"
            onClick={isMini ? toggleFullSize : toggleMini}
          />
        )}
      </div>
    </header>
  );
}
