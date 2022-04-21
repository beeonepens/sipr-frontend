import { useRouter } from 'next/router';
import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/outline';
import useMiniSidebar from '@utils/store/useMiniSidebar';

export default function Header() {
  const { pathname } = useRouter();
  const { isMini, toggleMini, toggleFullSize } = useMiniSidebar();

  // console.log({ pathname: pathname.split('/') });
  return (
    <header className="sticky top-0 z-10 flex flex-row-reverse items-center justify-between gap-4 border-b border-gray-300 bg-white bg-opacity-75 py-5 px-4 text-xl font-semibold text-blue-800 backdrop-blur-lg backdrop-filter md:flex-row md:justify-start md:px-8">
      {isMini ? (
        <MenuIcon
          className="flex h-6 w-6 -scale-x-100 cursor-pointer hover:text-blue-600 md:hidden md:scale-x-100"
          onClick={isMini ? toggleFullSize : toggleMini}
        />
      ) : (
        <MenuAlt1Icon
          className="flex h-6 w-6 -scale-x-100 cursor-pointer hover:text-blue-600 md:hidden md:scale-x-100"
          onClick={isMini ? toggleFullSize : toggleMini}
        />
      )}
      <h4 className="capitalize">{pathname.split('/')[1]}</h4>
    </header>
  );
}
