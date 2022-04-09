import React from 'react';
import { useRouter } from 'next/router';
import { MenuIcon } from 'ui';
import useMiniSidebar from '@utils/store/useMiniSidebar';

export default function Header() {
  const { pathname } = useRouter();
  const { isMini, toggleMini, toggleFullSize } = useMiniSidebar();

  console.log({ pathname });
  return (
    <header className="sticky top-0 z-10 flex flex-row items-center gap-4 border-b border-gray-300 bg-white bg-opacity-75 py-5 px-4 text-xl font-semibold text-blue-800 backdrop-blur-lg backdrop-filter md:px-8">
      <MenuIcon
        className="h-6 w-6 cursor-pointer hover:text-blue-600"
        onClick={isMini ? toggleFullSize : toggleMini}
      />
      <h4 className="capitalize">{pathname.replace('/', '')}</h4>
    </header>
  );
}
