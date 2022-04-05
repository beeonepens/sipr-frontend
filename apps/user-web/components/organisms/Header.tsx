import React from 'react';
import { useRouter } from 'next/router';
import MenuIcon from '@components/atoms/Icon/MenuIcon';
import useMiniSidebar from '@utils/store/useMiniSidebar';

export default function Header() {
  const { pathname } = useRouter();
  const { isMini, toggleMini, toggleFullSize } = useMiniSidebar();

  return (
    <header className="flex flex-row items-center gap-4 border-b border-gray-300 py-4 px-8 text-xl font-semibold text-blue-800">
      <MenuIcon
        className="h-6 w-6 cursor-pointer hover:text-blue-600"
        onClick={isMini ? toggleFullSize : toggleMini}
      />
      <h4 className="capitalize">{pathname.replace('/', '')}</h4>
    </header>
  );
}
