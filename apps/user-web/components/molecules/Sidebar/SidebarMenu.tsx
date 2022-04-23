import LinkTo from '@components/atoms/LinkTo';
import clsx from 'clsx';
import useSidebar from '@utils/store/useSidebar';
import { useRouter } from 'next/router';

interface Props {
  menu: {
    slug: string;
    label: string;
    alias: string;
    icon: JSX.Element;
  };
}

export default function SidebarMenu({ menu }: Props) {
  const { pathname } = useRouter();
  const { isMini, toggleMini } = useSidebar();

  const handleClick = () => {
    toggleMini();
  };

  return (
    <LinkTo
      to={menu.slug}
      onClick={handleClick}
      className={clsx(
        'flex w-full flex-row items-center gap-4 rounded-md py-3.5 px-3.5 font-medium',
        pathname.includes(menu.slug) || pathname.includes(menu.alias)
          ? // ? 'bg-accent-400 text-primary-700'
            // : 'hover:bg-primary-600 bg-transparent'
            'bg-primary-50 dark:bg-primary-700 text-primary-700 dark:text-gray-50'
          : 'hover:bg-primary-50 dark:hover:bg-primary-700 bg-transparent'
      )}
    >
      <>
        <span>{menu.icon}</span>
        <span
          className={clsx(
            isMini
              ? 'hidden opacity-0 md:flex md:opacity-100'
              : 'flex opacity-100',
            'origin-left duration-75'
          )}
        >
          {menu.label}
        </span>
      </>
    </LinkTo>
  );
}
