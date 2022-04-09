import React from 'react';
import LinkTo from '@components/atoms/LinkTo';
import clsx from 'clsx';
import useMiniSidebar from '@utils/store/useMiniSidebar';

interface Props {
  pathname: string;
  menu: {
    slug: string;
    label: string;
    icon: JSX.Element;
  };
}

export default function SidebarMenu({ pathname, menu }: Props) {
  const { isMini } = useMiniSidebar();

  return (
    <LinkTo
      to={menu.slug}
      className={clsx(
        'flex flex-row items-center gap-4 rounded-md py-3.5 px-3 font-medium transition duration-200 ease-in',
        pathname === menu.slug
          ? 'bg-accent-400 text-primary-950'
          : 'hover:bg-primary-850 bg-transparent'
        // isMini ? 'px-3' : 'px-4'
      )}
    >
      <>
        <span>{menu.icon}</span>
        <span
          className={clsx(
            isMini ? 'hidden' : 'flex',
            'origin-left duration-200'
          )}
        >
          {menu.label}
        </span>
      </>
    </LinkTo>
  );
}
