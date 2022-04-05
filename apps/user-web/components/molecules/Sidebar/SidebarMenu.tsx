import React from 'react';
import LinkTo from '@components/atoms/LinkTo';
import clsx from 'clsx';

interface Props {
  pathname: string;
  menu: {
    slug: string;
    label: string;
    icon: JSX.Element;
  };
}

export default function SidebarMenu({ pathname, menu }: Props) {
  return (
    <LinkTo
      to={menu.slug}
      className={clsx(
        'flex flex-row items-center gap-4 rounded-md py-3.5 px-4 font-medium transition duration-100 ease-in',
        pathname === menu.slug
          ? 'bg-accent-400 text-primary-950'
          : 'hover:bg-primary-850 bg-transparent'
      )}
    >
      <>
        {menu.icon} {menu.label}
      </>
    </LinkTo>
  );
}
